import React from 'react'
import { Link } from 'react-router-dom'
import { slugify } from '@/utils/markdownUtils'

interface MarkdownRendererProps {
  content: string
  className?: string
}

/**
 * Parses inline formatting: **bold**, *italic*, [link](url), and `code`
 */
function renderInlineFormatting(text: string): React.ReactNode {
  // Regex to match markdown links: [text](url)
  const parts: React.ReactNode[] = []
  let remaining = text
  let keyIndex = 0

  while (remaining.length > 0) {
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/)
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/)
    const codeMatch = remaining.match(/`([^`]+)`/)

    // Find the earliest match among link, bold, and code
    let firstMatchIndex = remaining.length
    let matchType: 'link' | 'bold' | 'code' | null = null
    let matchResult: RegExpMatchArray | null = null

    if (linkMatch && linkMatch.index !== undefined && linkMatch.index < firstMatchIndex) {
      firstMatchIndex = linkMatch.index
      matchType = 'link'
      matchResult = linkMatch
    }
    if (boldMatch && boldMatch.index !== undefined && boldMatch.index < firstMatchIndex) {
      firstMatchIndex = boldMatch.index
      matchType = 'bold'
      matchResult = boldMatch
    }
    if (codeMatch && codeMatch.index !== undefined && codeMatch.index < firstMatchIndex) {
      matchType = 'code'
      matchResult = codeMatch
    }

    if (!matchType || !matchResult || matchResult.index === undefined) {
      parts.push(remaining)
      break
    }

    // Push preceding text
    if (matchResult.index > 0) {
      parts.push(remaining.substring(0, matchResult.index))
    }

    const matchedText = matchResult[0]
    if (matchType === 'link') {
      const linkText = matchResult[1]
      const linkUrl = matchResult[2]
      const isInternal = linkUrl.startsWith('/') || linkUrl.startsWith('#')

      if (isInternal) {
        parts.push(
          <Link
            key={`link-${keyIndex++}`}
            to={linkUrl}
            className="font-medium text-amber-700 underline decoration-amber-400 decoration-1 underline-offset-2 transition hover:text-amber-900"
          >
            {renderInlineFormatting(linkText)}
          </Link>
        )
      } else {
        parts.push(
          <a
            key={`ext-link-${keyIndex++}`}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-amber-700 underline decoration-amber-400 decoration-1 underline-offset-2 transition hover:text-amber-900"
          >
            {renderInlineFormatting(linkText)}
          </a>
        )
      }
    } else if (matchType === 'bold') {
      parts.push(
        <strong key={`bold-${keyIndex++}`} className="font-semibold text-slate-900">
          {renderInlineFormatting(matchResult[1])}
        </strong>
      )
    } else if (matchType === 'code') {
      parts.push(
        <code
          key={`code-${keyIndex++}`}
          className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs font-medium text-slate-800"
        >
          {matchResult[1]}
        </code>
      )
    }

    remaining = remaining.substring(matchResult.index + matchedText.length)
  }

  return parts.length === 1 ? parts[0] : <React.Fragment>{parts}</React.Fragment>
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  if (!content) return null

  // Normalize newlines and group into paragraphs/blocks
  const blocks = content.trim().split(/\n\s*\n/)

  return (
    <div className={`space-y-6 text-sm leading-relaxed text-slate-700 sm:text-base ${className}`}>
      {blocks.map((block, idx) => {
        const trimmed = block.trim()

        // H1 Heading (usually omitted if page renders separate H1, but handled if present)
        if (trimmed.startsWith('# ') && !trimmed.startsWith('## ')) {
          const text = trimmed.replace(/^#\s+/, '').trim()
          return (
            <h1
              key={idx}
              id={slugify(text)}
              className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              {renderInlineFormatting(text)}
            </h1>
          )
        }

        // H2 Heading
        if (trimmed.startsWith('## ') && !trimmed.startsWith('### ')) {
          const text = trimmed.replace(/^##\s+/, '').trim()
          const id = slugify(text)
          return (
            <h2
              key={idx}
              id={id}
              className="scroll-mt-24 pt-4 font-serif text-2xl font-bold text-slate-900 sm:text-3xl"
            >
              {renderInlineFormatting(text)}
            </h2>
          )
        }

        // H3 Heading
        if (trimmed.startsWith('### ')) {
          const text = trimmed.replace(/^###\s+/, '').trim()
          const id = slugify(text)
          return (
            <h3
              key={idx}
              id={id}
              className="scroll-mt-24 pt-2 font-serif text-lg font-bold text-slate-900 sm:text-xl"
            >
              {renderInlineFormatting(text)}
            </h3>
          )
        }

        // Markdown Table
        if (trimmed.includes('|') && trimmed.split('\n').some((l) => l.trim().startsWith('|'))) {
          const lines = trimmed.split('\n').filter((l) => l.trim().startsWith('|'))
          if (lines.length >= 2) {
            const headerCells = lines[0]
              .split('|')
              .slice(1, -1)
              .map((c) => c.trim())
            // Skip line 1 (the separator |---|---|)
            const bodyRows = lines.slice(2).map((rowLine) =>
              rowLine
                .split('|')
                .slice(1, -1)
                .map((c) => c.trim())
            )

            return (
              <div
                key={idx}
                className="my-6 overflow-x-auto rounded-xl border border-slate-200 shadow-xs"
              >
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="border-b border-slate-200 bg-amber-50/60 font-semibold text-slate-900">
                    <tr>
                      {headerCells.map((cell, cIdx) => (
                        <th key={cIdx} className="px-4 py-3">
                          {renderInlineFormatting(cell)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {bodyRows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-slate-50/50' : ''}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-3 text-slate-700">
                            {renderInlineFormatting(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          }
        }

        // Blockquote / Callout
        if (trimmed.startsWith('> ')) {
          const quoteLines = trimmed
            .split('\n')
            .map((l) => l.replace(/^>\s?/, ''))
            .join(' ')
          return (
            <div
              key={idx}
              className="my-4 rounded-xl border-l-4 border-amber-500 bg-[#FFF9EE] p-4 text-xs text-slate-800 italic sm:text-sm"
            >
              {renderInlineFormatting(quoteLines)}
            </div>
          )
        }

        // Unordered List (- or *)
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const items = trimmed
            .split('\n')
            .filter((l) => l.trim().startsWith('- ') || l.trim().startsWith('* '))
            .map((l) => l.trim().replace(/^[-*]\s+/, ''))

          return (
            <ul key={idx} className="my-3 space-y-2 pl-2">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                  <span className="flex-1">{renderInlineFormatting(item)}</span>
                </li>
              ))}
            </ul>
          )
        }

        // Ordered List (1., 2., etc.)
        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed
            .split('\n')
            .filter((l) => /^\d+\.\s/.test(l.trim()))
            .map((l) => l.trim().replace(/^\d+\.\s+/, ''))

          return (
            <ol key={idx} className="my-3 space-y-2 pl-2">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-[11px] font-bold text-amber-900">
                    {itemIdx + 1}
                  </span>
                  <span className="flex-1">{renderInlineFormatting(item)}</span>
                </li>
              ))}
            </ol>
          )
        }

        // Standard Paragraph
        return (
          <p key={idx} className="leading-relaxed">
            {renderInlineFormatting(trimmed)}
          </p>
        )
      })}
    </div>
  )
}
export default MarkdownRenderer
