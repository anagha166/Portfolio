/** Placeholder hero/thumbnail gradients — replace with real assets later */
export const placeholderImages = {
  aiWorkspace:
    'linear-gradient(145deg, #f5f0e8 0%, #e8e2d9 40%, #d4cfc7 100%)',
  healthApp:
    'linear-gradient(145deg, #faf8f5 0%, #e8e4df 50%, #c8c4bf 100%)',
  designSystem:
    'linear-gradient(145deg, #f0ebe3 0%, #d9d4cc 60%, #b8b4ae 100%)',
} as const

export function getPlaceholderStyle(key: keyof typeof placeholderImages) {
  return { background: placeholderImages[key] }
}
