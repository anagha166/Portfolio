// import { useRef, useState, useEffect } from 'react'
// import { DrawingCanvas } from '@/components/landing/DrawingCanvas'
// import { DrawingToolbar } from '@/components/landing/DrawingToolbar'
import { SketchbookSpread } from '@/components/sketchbook/SketchbookSpread'
import { HeroSpread } from '@/components/home/HeroSpread'
import { FeaturedWorkSpread } from '@/components/home/FeaturedWorkSpread'
import { ApproachSpread } from '@/components/home/ApproachSpread'
import { ConnectSpread } from '@/components/home/ConnectSpread'
// import { useDrawingEngine } from '@/hooks/useDrawingEngine'

const TOTAL_PAGES = 4

export function HomePage() {
  // const canvasRef = useRef<HTMLCanvasElement>(null)
  // const [showDrawingTools, setShowDrawingTools] = useState(true)

  // Drawing feature temporarily disabled.
  // useEffect(() => {
  //   const onScroll = () => {
  //     setShowDrawingTools(window.scrollY < window.innerHeight * 0.75)
  //   }
  //   onScroll()
  //   window.addEventListener('scroll', onScroll, { passive: true })
  //   return () => window.removeEventListener('scroll', onScroll)
  // }, [])

  // const { mode, setMode, colorId, setColor, undo, clear, exportSketch, canUndo } =
  //   useDrawingEngine(canvasRef, { enabled: showDrawingTools })

  return (
    <div className="relative">
      {/* Drawing feature temporarily disabled */}
      {/* {showDrawingTools && (
        <div className="pointer-events-none fixed inset-0 z-[20]">
          <DrawingCanvas ref={canvasRef} enabled mode={mode} className="h-full w-full" />
        </div>
      )} */}

      <SketchbookSpread index={0} total={TOTAL_PAGES}>
        <div className="pointer-events-none">
          <HeroSpread />
        </div>
      </SketchbookSpread>

      {/* {showDrawingTools && (
        <DrawingToolbar
          mode={mode}
          colorId={colorId}
          onModeChange={setMode}
          onColorChange={setColor}
          onUndo={undo}
          onClear={clear}
          onExport={exportSketch}
          canUndo={canUndo}
        />
      )} */}

      <SketchbookSpread index={1} total={TOTAL_PAGES}>
        <FeaturedWorkSpread />
      </SketchbookSpread>

      <SketchbookSpread index={2} total={TOTAL_PAGES}>
        <ApproachSpread />
      </SketchbookSpread>

      <SketchbookSpread index={3} total={TOTAL_PAGES}>
        <ConnectSpread />
      </SketchbookSpread>
    </div>
  )
}
