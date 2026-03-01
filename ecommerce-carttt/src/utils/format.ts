
export function formatPrice(value: number): string {
  return `$${value.toFixed(2)}`
}

export function parsePrice(text: string): number {
  return Number(text.replace("$", "").trim())
}

export function generateId(): string {
  return crypto.randomUUID()
}