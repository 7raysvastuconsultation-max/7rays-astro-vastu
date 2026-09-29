/**
 * Converts a heading title into a clean URL-friendly anchor slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

/**
 * Extracts all H2 headings from markdown content for dynamic Table of Contents
 */
export function extractHeadings(content: string): { id: string; title: string }[] {
  if (!content) return []
  const headings: { id: string; title: string }[] = []
  const lines = content.split('\n')

  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith('## ') && !trimmed.startsWith('### ')) {
      const title = trimmed
        .replace(/^##\s+/, '')
        .replace(/\*\*/g, '')
        .trim()
      headings.push({
        id: slugify(title),
        title,
      })
    }
  }

  return headings
}
