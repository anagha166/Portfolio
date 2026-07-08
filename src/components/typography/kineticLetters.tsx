import type { CSSProperties } from 'react'

const defaultVariation = "'wght' 600, 'SOFT' 0, 'WONK' 0"

export function kineticLetters(text: string, keyPrefix = '', className = '') {
  return text.split('').map((letter, i) => (
    <span
      key={`${keyPrefix}${i}`}
      data-letter
      className={`inline-block font-[family-name:var(--font-display)] transition-[font-variation-settings,letter-spacing] duration-150 ${className}`}
      style={
        {
          fontVariationSettings: defaultVariation,
        } as CSSProperties
      }
      aria-hidden="true"
    >
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ))
}

export const kineticDefaultVariation = defaultVariation
