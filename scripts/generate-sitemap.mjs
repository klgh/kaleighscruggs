import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const SITE_URL = 'https://kaleighscruggs.com'
const gardenDirectory = path.resolve('src/content/garden')
const outputPath = path.resolve('public/sitemap.xml')

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function readFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)

  if (!match) return {}

  return Object.fromEntries(
    match[1]
      .split(/\r?\n/)
      .map((line) => {
        const separator = line.indexOf(':')

        if (separator === -1) return null

        const key = line.slice(0, separator).trim()
        const value = line
          .slice(separator + 1)
          .trim()
          .replace(/^["']|["']$/g, '')

        return [key, value]
      })
      .filter(Boolean)
  )
}

function isDraft(value) {
  return ['true', 'yes', '1'].includes(String(value ?? '').toLowerCase())
}

function urlEntry({ pathname, lastmod, priority, changefreq }) {
  const fields = [`<loc>${escapeXml(new URL(pathname, SITE_URL).toString())}</loc>`]

  if (lastmod) {
    fields.push(`<lastmod>${escapeXml(lastmod)}</lastmod>`)
  }

  if (changefreq) {
    fields.push(`<changefreq>${changefreq}</changefreq>`)
  }

  if (priority) {
    fields.push(`<priority>${priority}</priority>`)
  }

  return `  <url>\n    ${fields.join('\n    ')}\n  </url>`
}

const staticPages = [
  {
    pathname: '/',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    pathname: '/garden',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    pathname: '/now',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    pathname: '/uses',
    changefreq: 'monthly',
    priority: '0.6',
  },
]

const gardenFiles = (await readdir(gardenDirectory)).filter((filename) => filename.endsWith('.md')).sort()

const gardenPages = []

for (const filename of gardenFiles) {
  const markdown = await readFile(path.join(gardenDirectory, filename), 'utf8')

  const frontmatter = readFrontmatter(markdown)

  if (isDraft(frontmatter.draft)) continue

  gardenPages.push({
    pathname: `/garden/${path.basename(filename, '.md')}`,
    lastmod: frontmatter.date,
    changefreq: 'monthly',
    priority: '0.8',
  })
}

const entries = [...staticPages, ...gardenPages].map(urlEntry).join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`

await writeFile(outputPath, sitemap, 'utf8')

console.log(`Generated sitemap with ${staticPages.length + gardenPages.length} URLs.`)
