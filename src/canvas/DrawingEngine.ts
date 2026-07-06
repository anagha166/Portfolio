import type { DrawingMode, Point } from '@/types'
import { catmullRomSpline, simplifyPoints } from './strokeSmoothing'
import { DEFAULT_COLOR_ID, resolveDrawingColor } from './drawingColors'

export interface DrawingEngineOptions {
  canvas: HTMLCanvasElement
  color?: string
  minLineWidth?: number
  maxLineWidth?: number
  onStrokeEnd?: () => void
}

const MAX_UNDO = 50

export class DrawingEngine {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private color: string
  private minLineWidth: number
  private maxLineWidth: number
  private onStrokeEnd?: () => void

  private isDrawing = false
  private currentPoints: Point[] = []
  private mode: DrawingMode = 'pencil'
  private undoStack: ImageData[] = []
  private dpr = 1
  private boundHandlers: {
    pointerdown: (e: PointerEvent) => void
    pointermove: (e: PointerEvent) => void
    pointerup: (e: PointerEvent) => void
    pointerleave: (e: PointerEvent) => void
    resize: () => void
  }

  constructor(options: DrawingEngineOptions) {
    this.canvas = options.canvas
    const ctx = this.canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) throw new Error('Could not get 2D context')
    this.ctx = ctx
    this.color = options.color ?? resolveDrawingColor(DEFAULT_COLOR_ID, false)
    this.minLineWidth = options.minLineWidth ?? 0.8
    this.maxLineWidth = options.maxLineWidth ?? 3.5
    this.onStrokeEnd = options.onStrokeEnd

    this.boundHandlers = {
      pointerdown: this.handlePointerDown.bind(this),
      pointermove: this.handlePointerMove.bind(this),
      pointerup: this.handlePointerUp.bind(this),
      pointerleave: this.handlePointerUp.bind(this),
      resize: this.handleResize.bind(this),
    }

    this.setupCanvas()
    this.attachListeners()
  }

  private setupCanvas(): boolean {
    this.dpr = window.devicePixelRatio || 1
    const rect = this.canvas.getBoundingClientRect()
    if (rect.width < 1 || rect.height < 1) return false

    this.canvas.width = Math.floor(rect.width * this.dpr)
    this.canvas.height = Math.floor(rect.height * this.dpr)
    this.ctx.setTransform(1, 0, 0, 1, 0, 0)
    this.ctx.scale(this.dpr, this.dpr)
    this.canvas.style.width = `${rect.width}px`
    this.canvas.style.height = `${rect.height}px`
    return true
  }

  private attachListeners(): void {
    this.canvas.addEventListener('pointerdown', this.boundHandlers.pointerdown)
    this.canvas.addEventListener('pointermove', this.boundHandlers.pointermove)
    this.canvas.addEventListener('pointerup', this.boundHandlers.pointerup)
    this.canvas.addEventListener('pointerleave', this.boundHandlers.pointerleave)
    window.addEventListener('resize', this.boundHandlers.resize)
  }

  private getPoint(e: PointerEvent): Point {
    const rect = this.canvas.getBoundingClientRect()
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      pressure: e.pressure > 0 ? e.pressure : 0.5,
      timestamp: Date.now(),
    }
  }

  private getLineWidth(pressure: number): number {
    const range = this.maxLineWidth - this.minLineWidth
    return this.minLineWidth + range * Math.min(1, Math.max(0, pressure))
  }

  private saveState(): void {
    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
    this.undoStack.push(imageData)
    if (this.undoStack.length > MAX_UNDO) {
      this.undoStack.shift()
    }
  }

  private drawSegment(from: Point, to: Point): void {
    const width = (this.getLineWidth(from.pressure) + this.getLineWidth(to.pressure)) / 2

    if (this.mode === 'eraser') {
      this.ctx.globalCompositeOperation = 'destination-out'
      this.ctx.lineWidth = width * 3
      this.ctx.strokeStyle = 'rgba(0,0,0,1)'
    } else {
      this.ctx.globalCompositeOperation = 'source-over'
      this.ctx.strokeStyle = this.color
      this.ctx.globalAlpha = 0.88
      this.ctx.lineCap = 'round'
      this.ctx.lineJoin = 'round'
      this.ctx.lineWidth = width
    }

    this.ctx.beginPath()
    this.ctx.moveTo(from.x, from.y)
    this.ctx.lineTo(to.x, to.y)
    this.ctx.stroke()
    this.ctx.globalAlpha = 1
    this.ctx.globalCompositeOperation = 'source-over'
  }

  private renderStroke(points: Point[]): void {
    const simplified = simplifyPoints(points, 1.5)
    const smoothed =
      simplified.length >= 4 ? catmullRomSpline(simplified, 0.5, 8) : simplified

    for (let i = 1; i < smoothed.length; i++) {
      this.drawSegment(smoothed[i - 1], smoothed[i])
    }
  }

  private handlePointerDown(e: PointerEvent): void {
    if (e.button !== 0) return
    this.canvas.setPointerCapture(e.pointerId)
    this.isDrawing = true
    this.saveState()
    this.currentPoints = [this.getPoint(e)]
  }

  private handlePointerMove(e: PointerEvent): void {
    if (!this.isDrawing) return
    const point = this.getPoint(e)
    const last = this.currentPoints[this.currentPoints.length - 1]
    this.currentPoints.push(point)
    this.drawSegment(last, point)
  }

  private handlePointerUp(e: PointerEvent): void {
    if (!this.isDrawing) return
    this.isDrawing = false
    this.canvas.releasePointerCapture(e.pointerId)

    if (this.currentPoints.length > 1) {
      this.renderStroke(this.currentPoints)
    }

    this.currentPoints = []
    this.ctx.globalCompositeOperation = 'source-over'
    this.onStrokeEnd?.()
  }

  private handleResize(): void {
    if (this.canvas.width < 1 || this.canvas.height < 1) {
      this.setupCanvas()
      return
    }

    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
    if (!this.setupCanvas()) return
    this.ctx.putImageData(imageData, 0, 0)
  }

  setMode(mode: DrawingMode): void {
    this.mode = mode
  }

  getMode(): DrawingMode {
    return this.mode
  }

  setColor(color: string): void {
    this.color = color
  }

  resize(): void {
    this.setupCanvas()
  }

  undo(): boolean {
    if (this.undoStack.length === 0) return false
    const state = this.undoStack.pop()!
    this.ctx.putImageData(state, 0, 0)
    return true
  }

  clear(): void {
    this.saveState()
    this.ctx.clearRect(0, 0, this.canvas.width / this.dpr, this.canvas.height / this.dpr)
  }

  export(): string {
    return this.canvas.toDataURL('image/png')
  }

  destroy(): void {
    this.canvas.removeEventListener('pointerdown', this.boundHandlers.pointerdown)
    this.canvas.removeEventListener('pointermove', this.boundHandlers.pointermove)
    this.canvas.removeEventListener('pointerup', this.boundHandlers.pointerup)
    this.canvas.removeEventListener('pointerleave', this.boundHandlers.pointerleave)
    window.removeEventListener('resize', this.boundHandlers.resize)
  }
}
