import type { Point } from '@/types'

/** Catmull-Rom spline interpolation for natural pencil strokes */
export function catmullRomSpline(
  points: Point[],
  tension = 0.5,
  segments = 16,
): Point[] {
  if (points.length < 2) return points
  if (points.length === 2) return points

  const result: Point[] = []

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[Math.min(points.length - 1, i + 2)]

    for (let t = 0; t < segments; t++) {
      const s = t / segments
      const s2 = s * s
      const s3 = s2 * s

      const x =
        tension *
        (2 * p1.x +
          (-p0.x + p2.x) * s +
          (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * s2 +
          (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * s3)

      const y =
        tension *
        (2 * p1.y +
          (-p0.y + p2.y) * s +
          (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * s2 +
          (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * s3)

      const pressure = p1.pressure + (p2.pressure - p1.pressure) * s

      result.push({ x, y, pressure, timestamp: p1.timestamp })
    }
  }

  result.push(points[points.length - 1])
  return result
}

/** Reduce point density while preserving stroke shape */
export function simplifyPoints(points: Point[], minDistance = 2): Point[] {
  if (points.length <= 2) return points

  const simplified: Point[] = [points[0]]

  for (let i = 1; i < points.length; i++) {
    const last = simplified[simplified.length - 1]
    const current = points[i]
    const dx = current.x - last.x
    const dy = current.y - last.y
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist >= minDistance || i === points.length - 1) {
      simplified.push(current)
    }
  }

  return simplified
}
