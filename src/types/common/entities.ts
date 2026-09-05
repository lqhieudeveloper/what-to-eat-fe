// React component types — PascalCase names, camelCase fields

export type Food = {
  id: string
  name: string
  emoji?: string
  imageUrl?: string
  rating: number
  reviewCount: number
  priceMin: number
  priceMax: number
  distanceMeters: number
  tags: string[]
}
