export function formatPrice(min: number, max: number) {
  return `${min}k – ${max}k`
}

export function formatDistance(meters: number) {
  return meters < 1000 ? `${meters}m` : `${(meters / 1000).toFixed(1)}km`
}
