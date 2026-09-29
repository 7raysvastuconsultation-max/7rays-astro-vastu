import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { slugify } from '@/utils/markdownUtils'

interface MarkdownRendererProps {
  content: string
  className?: string
}

interface TableData {
  headers: string[]
  rows: string[][]
}

interface MarkdownBlock {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'hr' | 'blockquote' | 'ul' | 'ol' | 'table' | 'p'
  content?: string
  items?: string[]
  tableData?: TableData
}

/**
 * Parses inline formatting: **bold**, *italic*, [link](url), and `code`
 */
function renderInlineFormatting(text: string): React.ReactNode {
  const parts: React.ReactNode[] = []
  let remaining = text
  let keyIndex = 0

  while (remaining.length > 0) {
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/)
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/)
    const italicMatch = remaining.match(/(?<!\*)\*([^*]+)\*(?!\*)/)
    const codeMatch = remaining.match(/`([^`]+)`/)

    // Find the earliest match among link, bold, italic, and code
    let firstMatchIndex = remaining.length
    let matchType: 'link' | 'bold' | 'italic' | 'code' | null = null
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
    if (italicMatch && italicMatch.index !== undefined && italicMatch.index < firstMatchIndex) {
      firstMatchIndex = italicMatch.index
      matchType = 'italic'
      matchResult = italicMatch
    }
    if (codeMatch && codeMatch.index !== undefined && codeMatch.index < firstMatchIndex) {
      firstMatchIndex = codeMatch.index
      matchType = 'code'
      matchResult = codeMatch
    }

    if (!matchType || !matchResult || matchResult.index === undefined) {
      parts.push(remaining)
      break
    }

    // Push preceding plain text
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
            className="font-medium text-amber-700 underline decoration-amber-400/80 decoration-1 underline-offset-2 transition hover:text-amber-900"
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
            className="font-medium text-amber-700 underline decoration-amber-400/80 decoration-1 underline-offset-2 transition hover:text-amber-900"
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
    } else if (matchType === 'italic') {
      parts.push(
        <em key={`italic-${keyIndex++}`} className="text-slate-800 italic">
          {renderInlineFormatting(matchResult[1])}
        </em>
      )
    } else if (matchType === 'code') {
      parts.push(
        <code
          key={`code-${keyIndex++}`}
          className="rounded border border-amber-200/60 bg-amber-50/60 px-1.5 py-0.5 font-mono text-xs font-medium text-amber-900"
        >
          {matchResult[1]}
        </code>
      )
    }

    remaining = remaining.substring(matchResult.index + matchedText.length)
  }

  return parts.length === 1 ? parts[0] : <React.Fragment>{parts}</React.Fragment>
}

/**
 * Line-by-line Markdown block tokenizer and parser
 * Accurately isolates single-line headings, quotes, lists, dividers, tables, and paragraphs
 */
function parseMarkdownBlocks(markdown: string): MarkdownBlock[] {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const blocks: MarkdownBlock[] = []
  let i = 0

  while (i < lines.length) {
    const rawLine = lines[i]
    const trimmed = rawLine.trim()

    // 1. Skip empty lines
    if (!trimmed) {
      i++
      continue
    }

    // 2. Horizontal Rule (---, ***, ___)
    if (/^(?:---|\*\*\*|___)$/.test(trimmed)) {
      blocks.push({ type: 'hr' })
      i++
      continue
    }

    // 3. Headings (strictly consume only the current line)
    if (trimmed.startsWith('# ') && !trimmed.startsWith('## ')) {
      blocks.push({ type: 'h1', content: trimmed.replace(/^#\s+/, '').trim() })
      i++
      continue
    }
    if (trimmed.startsWith('## ') && !trimmed.startsWith('### ')) {
      blocks.push({ type: 'h2', content: trimmed.replace(/^##\s+/, '').trim() })
      i++
      continue
    }
    if (trimmed.startsWith('### ') && !trimmed.startsWith('#### ')) {
      blocks.push({ type: 'h3', content: trimmed.replace(/^###\s+/, '').trim() })
      i++
      continue
    }
    if (trimmed.startsWith('#### ')) {
      blocks.push({ type: 'h4', content: trimmed.replace(/^####\s+/, '').trim() })
      i++
      continue
    }

    // 4. Blockquotes / Direct Answer (> ...)
    if (trimmed.startsWith('>')) {
      const quoteLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''))
        i++
      }
      blocks.push({ type: 'blockquote', content: quoteLines.join(' ') })
      continue
    }

    // 5. Table (starts with |)
    if (trimmed.startsWith('|')) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim())
        i++
      }
      if (tableLines.length >= 2) {
        const headers = tableLines[0]
          .split('|')
          .slice(1, -1)
          .map((c) => c.trim())
        const rows = tableLines
          .slice(2)
          .filter((r) => !/^[|\s-:]+$/.test(r))
          .map((r) =>
            r
              .split('|')
              .slice(1, -1)
              .map((c) => c.trim())
          )
        blocks.push({ type: 'table', tableData: { headers, rows } })
      }
      continue
    }

    // 6. Unordered List (- or *)
    if (/^[-*]\s+/.test(trimmed)) {
      const listItems: string[] = []
      while (i < lines.length) {
        const curTrim = lines[i].trim()
        if (/^[-*]\s+/.test(curTrim)) {
          listItems.push(curTrim.replace(/^[-*]\s+/, ''))
          i++
        } else if (
          curTrim &&
          (lines[i].startsWith('  ') || lines[i].startsWith('\t')) &&
          listItems.length > 0
        ) {
          listItems[listItems.length - 1] += ' ' + curTrim
          i++
        } else {
          break
        }
      }
      blocks.push({ type: 'ul', items: listItems })
      continue
    }

    // 7. Ordered List (\d+\.\s)
    if (/^\d+\.\s+/.test(trimmed)) {
      const listItems: string[] = []
      while (i < lines.length) {
        const curTrim = lines[i].trim()
        if (/^\d+\.\s+/.test(curTrim)) {
          listItems.push(curTrim.replace(/^\d+\.\s+/, ''))
          i++
        } else if (
          curTrim &&
          (lines[i].startsWith('  ') || lines[i].startsWith('\t')) &&
          listItems.length > 0
        ) {
          listItems[listItems.length - 1] += ' ' + curTrim
          i++
        } else {
          break
        }
      }
      blocks.push({ type: 'ol', items: listItems })
      continue
    }

    // 8. Normal Paragraph (accumulate consecutive non-special lines)
    const pLines: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(?:---|\*\*\*|___)$/.test(lines[i].trim()) &&
      !/^#{1,4}\s/.test(lines[i].trim()) &&
      !lines[i].trim().startsWith('>') &&
      !lines[i].trim().startsWith('|') &&
      !/^[-*]\s+/.test(lines[i].trim()) &&
      !/^\d+\.\s+/.test(lines[i].trim())
    ) {
      pLines.push(lines[i].trim())
      i++
    }

    if (pLines.length > 0) {
      blocks.push({ type: 'p', content: pLines.join(' ') })
    }
  }

  return blocks
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  if (!content) return null

  const blocks = parseMarkdownBlocks(content)

  return (
    <div className={`space-y-6 ${className}`}>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'h1': {
            const rawTitle = block.content || ''
            const cleanTitle = rawTitle.replace(/\*\*/g, '').trim()
            return (
              <h1
                key={idx}
                id={slugify(cleanTitle)}
                className="mt-10 mb-4 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                {renderInlineFormatting(rawTitle)}
              </h1>
            )
          }

          case 'h2': {
            const rawTitle = block.content || ''
            const cleanTitle = rawTitle.replace(/\*\*/g, '').trim()
            return (
              <h2
                key={idx}
                id={slugify(cleanTitle)}
                className="mt-12 mb-4 scroll-mt-24 border-b border-amber-200/50 pb-3 font-serif text-2xl font-bold tracking-tight text-slate-900 sm:text-[28px]"
              >
                {renderInlineFormatting(rawTitle)}
              </h2>
            )
          }

          case 'h3': {
            const rawTitle = block.content || ''
            const cleanTitle = rawTitle.replace(/\*\*/g, '').trim()
            return (
              <h3
                key={idx}
                id={slugify(cleanTitle)}
                className="mt-8 mb-3 scroll-mt-24 font-serif text-xl font-bold tracking-tight text-slate-900 sm:text-[22px]"
              >
                {renderInlineFormatting(rawTitle)}
              </h3>
            )
          }

          case 'h4': {
            const rawTitle = block.content || ''
            const cleanTitle = rawTitle.replace(/\*\*/g, '').trim()
            return (
              <h4
                key={idx}
                id={slugify(cleanTitle)}
                className="mt-6 mb-2 scroll-mt-24 font-sans text-base font-bold text-slate-900 sm:text-lg"
              >
                {renderInlineFormatting(rawTitle)}
              </h4>
            )
          }

          case 'hr': {
            return (
              <div key={idx} className="my-10 flex items-center justify-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
                <span className="text-xs text-amber-500/70">✦</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
              </div>
            )
          }

          case 'blockquote': {
            return (
              <div
                key={idx}
                className="my-7 rounded-2xl border border-l-4 border-amber-200/70 border-l-amber-500 bg-gradient-to-r from-amber-50/70 via-[#FFFDF9] to-amber-50/30 p-5 shadow-xs sm:p-6"
              >
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-700">
                    <Sparkles className="h-4 w-4 text-amber-600" />
                  </div>
                  <div className="flex-1 font-sans text-[15px] leading-relaxed font-normal text-slate-800 sm:text-[16px]">
                    {renderInlineFormatting(block.content || '')}
                  </div>
                </div>
              </div>
            )
          }

          case 'ul': {
            return (
              <ul key={idx} className="my-5 space-y-3 pl-1">
                {block.items?.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500 shadow-xs" />
                    <span className="flex-1 font-sans text-[15px] leading-[1.75] font-normal text-slate-700 sm:text-[16px]">
                      {renderInlineFormatting(item)}
                    </span>
                  </li>
                ))}
              </ul>
            )
          }

          case 'ol': {
            return (
              <ol key={idx} className="my-5 space-y-3.5 pl-1">
                {block.items?.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 font-serif text-[11px] font-bold text-amber-900 ring-1 ring-amber-300/70">
                      {itemIdx + 1}
                    </span>
                    <span className="flex-1 font-sans text-[15px] leading-[1.75] font-normal text-slate-700 sm:text-[16px]">
                      {renderInlineFormatting(item)}
                    </span>
                  </li>
                ))}
              </ol>
            )
          }

          case 'table': {
            if (!block.tableData) return null
            return (
              <div
                key={idx}
                className="my-8 overflow-hidden rounded-xl border border-amber-200/60 shadow-xs"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="border-b border-amber-200/80 bg-amber-50/80 font-serif font-semibold text-amber-950">
                      <tr>
                        {block.tableData.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-4 py-3.5 tracking-wide">
                            {renderInlineFormatting(h)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-100/60 bg-white font-sans text-slate-700">
                      {block.tableData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-[#FAF8F5]/60' : 'bg-white'}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-3 leading-relaxed font-normal">
                              {renderInlineFormatting(cell)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          }

          case 'p':
          default: {
            return (
              <p
                key={idx}
                className="my-5 font-sans text-[16px] leading-[1.8] font-normal text-slate-700 sm:text-[17px]"
              >
                {renderInlineFormatting(block.content || '')}
              </p>
            )
          }
        }
      })}
    </div>
  )
}

export default MarkdownRenderer
