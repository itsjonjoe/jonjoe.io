import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { loadPost } from '../content/posts';

function simpleMarkdownToHtml(md: string) {
  // Extremely small renderer: headings and paragraphs only
  let html = md
    .replace(/^###\s?(.*)$/gm, '<h3>$1</h3>')
    .replace(/^##\s?(.*)$/gm, '<h2>$1</h2>')
    .replace(/^#\s?(.*)$/gm, '<h1>$1</h1>');
  html = html
    .split(/\n\n+/)
    .map(block => (/^<h\d>/.test(block) ? block : `<p>${block.replace(/\n/g, '<br/>')}</p>`))
    .join('\n');
  // bold/italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>');
  return html;
}

export default function PostPage() {
  const { slug } = useParams();
  const [state, setState] = useState<{ html: string; title: string } | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light' | 'auto'>(() => (localStorage.getItem('postTheme') as 'dark'|'light'|'auto') || 'auto');
  const [progress, setProgress] = useState(0);
  const articleRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    if (!slug) return;
    loadPost(slug).then(res => {
      if (!res) return setState(null);
      setState({ html: simpleMarkdownToHtml(res.markdown), title: res.meta.title });
    });
  }, [slug]);

  useEffect(() => { localStorage.setItem('postTheme', theme); }, [theme]);

  // keep in sync with system when on auto
  useEffect(() => {
    const m = window.matchMedia('(prefers-color-scheme: dark)');
    mediaRef.current = m;
    const onChange = () => setProgress(p => p); // noop to trigger re-render via above state changes
    m.addEventListener?.('change', onChange);
    return () => m.removeEventListener?.('change', onChange);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current; if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const h = el.offsetHeight; const y = window.scrollY;
      const denom = Math.max(1, h - window.innerHeight);
      const pct = Math.min(1, Math.max(0, (y - top) / denom));
      setProgress(pct * 100);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  if (!slug) return null;
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const applied = theme === 'auto' ? (systemDark ? 'dark' : 'light') : theme;
  return (
    <div className="min-h-screen p-0">
      <div className="reading-progress"><div className="bar" style={{ width: `${progress}%` }} /></div>
      <div className={`post-theme ${applied === 'light' ? 'light' : ''} post-surface min-h-screen p-4 md:p-8`}>
        <div className="mx-auto" style={{ maxWidth: 'var(--page-max)' }}>
          <div className="flex items-center justify-between">
            <Link to="/writing/blog" className="text-sm opacity-80 hover:opacity-100" style={{ color: 'var(--link)' }}>← Back to Posts</Link>
          </div>
          <article ref={articleRef as any} className="post-prose mt-4">
            <h1 className="text-3xl md:text-4xl font-bold">{state?.title || slug}</h1>
            <div className="mt-4" dangerouslySetInnerHTML={{ __html: state?.html || '' }} />
          </article>
        </div>
      </div>
      {/* Theme Controls */}
      <div className="theme-toggle">
        <button className={theme==='auto' ? 'active' : ''} onClick={() => setTheme('auto')} aria-label="Auto theme">Auto</button>
        <button className={applied==='dark' && theme!=='auto' ? 'active' : ''} onClick={() => setTheme('dark')} aria-label="Dark theme">Dark</button>
        <button className={applied==='light' && theme!=='auto' ? 'active' : ''} onClick={() => setTheme('light')} aria-label="Light theme">Light</button>
      </div>
    </div>
  );
}
