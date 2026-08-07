export type GardenCategory = "tech" | "travel" | "life" | "baking";

export interface GardenPostMeta {
  title: string;
  excerpt: string;
  category: GardenCategory;
  date: string;
  readTime: string;
  /** When true, post appears in the home page garden preview */
  featured: boolean;
  /** When true, post is hidden from lists and direct URLs */
  draft: boolean;
}

export interface GardenPost {
  slug: string;
  meta: GardenPostMeta;
  body: string;
}

const modules = import.meta.glob<string>("../content/garden/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function slugFromPath(path: string): string {
  const match = path.match(/\/([^/]+)\.md$/);
  return match ? match[1] : path;
}

/**
 * Parses truthy frontmatter flags like featured: true / yes / 1.
 */
function parseBoolean(value: string | undefined): boolean {
  if (!value) return false;
  const normalized = value.trim().toLowerCase();
  return normalized === "true" || normalized === "yes" || normalized === "1";
}

/**
 * Parses YAML-like frontmatter from markdown (browser-safe, no Buffer).
 * Expects "---" delimited block and "key: value" lines; value may be quoted.
 */
function parseFrontmatter(raw: string): {
  data: Record<string, string>;
  content: string;
} {
  const data: Record<string, string> = {};
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data, content: raw };
  const yamlBlock = match[1];
  const content = match[2];
  for (const line of yamlBlock.split(/\r?\n/)) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, content };
}

/**
 * Parses all garden markdown files into posts (includes drafts).
 */
function loadAllGardenPosts(): GardenPost[] {
  const posts: GardenPost[] = [];
  for (const [path, content] of Object.entries(modules)) {
    if (!content || typeof content !== "string") continue;
    const { data, content: body } = parseFrontmatter(content);
    const slug = slugFromPath(path);
    posts.push({
      slug,
      meta: {
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        category: (data.category as GardenCategory) ?? "tech",
        date: data.date ?? "",
        readTime: data.readTime ?? "",
        featured: parseBoolean(data.featured),
        draft: parseBoolean(data.draft),
      },
      body: body.trim(),
    });
  }
  posts.sort((a, b) => {
    const dateA = new Date(a.meta.date).getTime();
    const dateB = new Date(b.meta.date).getTime();
    return Number.isNaN(dateB) ? 0 : dateB - dateA;
  });
  return posts;
}

/**
 * Returns published garden posts sorted by date (newest first).
 * Posts with `draft: true` in frontmatter are excluded.
 */
export function getGardenPosts(): GardenPost[] {
  return loadAllGardenPosts().filter((post) => !post.meta.draft);
}

/**
 * Returns published posts marked featured: true in frontmatter (newest first).
 */
export function getFeaturedGardenPosts(): GardenPost[] {
  return getGardenPosts().filter((post) => post.meta.featured);
}

/**
 * Returns a published garden post by slug, or undefined if not found / draft.
 */
export function getGardenPost(slug: string): GardenPost | undefined {
  return getGardenPosts().find((p) => p.slug === slug);
}
