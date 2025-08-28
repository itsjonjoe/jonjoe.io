export type PostMeta = {
  title: string;
  date: string;
  slug: string;
  summary?: string;
  tags?: string[];
  path: string;
};

// Eagerly import all markdown as raw strings for indexing
// Supports either nested folders with index.md or flat files like slug.md
const files = import.meta.glob('/src/content/posts/**/*.md', { as: 'raw', eager: true }) as Record<string, string>;

function parseFrontmatter(raw: string) {
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return { meta: {} as any, body: raw };
  const yaml = m[1];
  const meta: any = {};
  yaml.split('\n').forEach(line => {
    const i = line.indexOf(':');
    if (i === -1) return;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    // strip quotes
    value = value.replace(/^['"]|['"]$/g, '');
    if (/^\[.*\]$/.test(value)) {
      meta[key] = value.replace(/[\[\]]/g, '').split(',').map(s => s.trim()).filter(Boolean);
    } else {
      meta[key] = value;
    }
  });
  const body = raw.slice(m[0].length).trimStart();
  return { meta, body };
}

function slugFromPath(path: string) {
  const parts = path.split('/').filter(Boolean);
  const filename = parts[parts.length - 1];
  if (/^index\.md$/i.test(filename)) {
    return parts[parts.length - 2];
  }
  return filename.replace(/\.md$/i, '');
}

export const posts: PostMeta[] = Object.entries(files)
  .map(([path, raw]) => {
    const { meta } = parseFrontmatter(raw);
    const slug = meta.slug || slugFromPath(path);
    return {
      title: meta.title || slug,
      date: meta.date || '',
      slug,
      summary: meta.summary || '',
      tags: Array.isArray(meta.tags) ? meta.tags : typeof meta.tags === 'string' ? meta.tags.split(',').map((t: string) => t.trim()) : [],
      path,
    } as PostMeta;
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

const fileMap = import.meta.glob('/src/content/posts/**/*.md', { as: 'raw' });

export async function loadPost(slug: string): Promise<{ meta: PostMeta; markdown: string } | null> {
  // Try eager map first (supports both slug/index.md and slug.md)
  for (const [path, raw] of Object.entries(files)) {
    if (path.includes(`/${slug}/index.md`) || path.endsWith(`/${slug}.md`)) {
      const { meta, body } = parseFrontmatter(raw);
      const pm: PostMeta = {
        title: meta.title || slug,
        date: meta.date || '',
        slug,
        summary: meta.summary || '',
        tags: Array.isArray(meta.tags) ? meta.tags : typeof meta.tags === 'string' ? meta.tags.split(',').map((t: string) => t.trim()) : [],
        path,
      };
      return { meta: pm, markdown: body };
    }
  }
  // Fallback lazy match
  const match = Object.keys(fileMap).find(p => p.includes(`/${slug}/index.md`) || p.endsWith(`/${slug}.md`));
  if (!match) return null;
  const raw = await (fileMap as any)[match]();
  const { meta, body } = parseFrontmatter(raw);
  return {
    meta: {
      title: meta.title || slug,
      date: meta.date || '',
      slug,
      summary: meta.summary || '',
      tags: Array.isArray(meta.tags) ? meta.tags : typeof meta.tags === 'string' ? meta.tags.split(',').map((t: string) => t.trim()) : [],
      path: match,
    },
    markdown: body,
  };
}
