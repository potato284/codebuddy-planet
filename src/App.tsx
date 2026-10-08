import { useEffect, useState } from 'react'
import BuddyMascot from '@/components/BuddyMascot'
import officialBuddy from '@/assets/buddy-official.png'
import heroCutout from '@/assets/hero-cutout.png'
import {
  sections,
  OFFICIAL_URL,
  FAQ_ITEMS,
  FEEDBACK_CHANNELS,
  type Article,
  type Section,
} from '@/data/articles'
import { poseImage } from '@/lib/poses'
import './App.css'

const NAV_ITEMS = [
  { id: 'home', label: '主页' },
  ...sections.map((s) => ({ id: s.id, label: s.nav })),
  { id: 'try', label: '快速体验通道' },
]

/* Hero 左侧的功能模块 tab（FAQ / 交流与反馈） */
const HERO_TABS = [
  { id: 'faq', label: '常见 FAQ' },
  { id: 'feedback', label: '交流与反馈' },
]

/* 滚动高亮监听：按页面板块顺序 */
const SPY_IDS = [
  'home',
  ...sections.map((s) => s.id),
  'faq',
  'feedback',
  'try',
]

const CHANNEL_ICONS = {
  wechat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  feature: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  practice: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
}

function ArticleCard({
  article,
  section,
  index,
}: {
  article: Article
  section: Section
  index: number
}) {
  const pose = poseImage(section.id)
  return (
    <a
      className="article-card glass reveal"
      href={article.url}
      target="_blank"
      rel="noreferrer"
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className={`article-cover ${pose ? 'cover-native' : ''}`}>
        {pose ? (
          <img className="cover-photo-img" src={pose} alt={section.title} draggable={false} />
        ) : (
          <>
            <span className="cover-ring" />
            <img className="cover-mascot" src={officialBuddy} alt="" draggable={false} />
            <span className="cover-title">{section.title}</span>
          </>
        )}
      </div>
      <div className="article-body">
        <h3>{article.title}</h3>
        <span className="article-link">
          阅读原文
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
    </a>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      let current = 'home'
      for (const id of SPY_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="site">
      {/* 彩色极光背景 */}
      <div className="aurora" aria-hidden>
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="blob blob-c" />
        <span className="blob blob-d" />
        <span className="grain" />
      </div>

      {/* 顶部导航 */}
      <header className={`nav ${scrolled ? 'nav-solid' : ''}`}>
        <a className="brand" href="#home">
          <span className="brand-logo">
            <img src={officialBuddy} alt="CodeBuddy" width={30} height={30} draggable={false} />
          </span>
          <span className="brand-name">
            CodeBuddy <em>星球</em>
          </span>
        </a>

        <nav className="tabs">
          {NAV_ITEMS.map((item) =>
            item.id === 'try' ? (
              <a key={item.id} href="#try" className={`tab tab-cta ${active === item.id ? 'active' : ''}`}>
                {item.label}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            ) : (
              <a key={item.id} href={`#${item.id}`} className={`tab ${active === item.id ? 'active' : ''}`}>
                {item.label}
              </a>
            )
          )}
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <div className="hero-text">
            <span className="hero-badge glass">
              <span className="pulse-dot" />
              腾讯 CodeBuddy · 产品动态与学习平台
            </span>
            <h1>
              让灵感
              <span className="grad-text">即刻落地</span>
            </h1>
            <p className="hero-desc">
              CodeBuddy 构建产品、设计、研发无缝协作的共生环境。在「CodeBuddy 星球」，
              追踪每一次产品焕新、学习最佳实践、走进真实用户案例，从一个想法到产品发布，一站式高效进阶。
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href={OFFICIAL_URL} target="_blank" rel="noreferrer">
                立即安装 CodeBuddy IDE
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
              <a className="btn-ghost glass" href="#features">
                浏览产品功能
              </a>
            </div>
            <div className="hero-module-tabs">
              <span className="module-tabs-label">更多模块</span>
              {HERO_TABS.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className={`hero-tab glass ${active === t.id ? 'active' : ''}`}
                >
                  {t.label}
                </a>
              ))}
            </div>
            <div className="hero-stats">
              <div>
                <strong>41+</strong>
                <span>产品功能动态</span>
              </div>
              <div>
                <strong>37+</strong>
                <span>最佳实践教程</span>
              </div>
              <div>
                <strong>28.1万</strong>
                <span>累计阅读</span>
              </div>
            </div>
          </div>
          <div className="hero-mascot">
            <div className="mascot-ring-inner" />
            <div className="mascot-ring" />
            <img
              className="mascot-float mascot-cutout"
              src={heroCutout}
              alt="CodeBuddy IP 形象"
              draggable={false}
            />
          </div>
        </section>

        {/* 四大内容板块 */}
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="content-section">
            <div className="section-head reveal">
              <span className="section-tag" style={{ background: section.accent }}>
                {section.nav}
              </span>
              <h2>{section.title}</h2>
              <p>{section.subtitle}</p>
            </div>
            <div className="article-grid">
              {section.articles.map((article, i) => (
                <ArticleCard key={article.url} article={article} section={section} index={i} />
              ))}
            </div>
            <div className="section-more reveal">
              <a className="btn-ghost glass" href={section.albumUrl} target="_blank" rel="noreferrer">
                查看全部「{section.nav}」合集
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </section>
        ))}

        {/* 常见 FAQ */}
        <section id="faq" className="content-section">
          <div className="section-head reveal">
            <span
              className="section-tag"
              style={{ background: 'linear-gradient(135deg,#34d399,#22d3ee)' }}
            >
              常见 FAQ
            </span>
            <h2>常见问题，一站解答</h2>
            <p>关于 CodeBuddy 的高频疑问，点击展开即可查看解答</p>
          </div>
          <div className="faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={item.q}
                className={`faq-item glass reveal ${openFaq === i ? 'open' : ''}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span className="faq-q-text">
                    <em className="faq-index">{String(i + 1).padStart(2, '0')}</em>
                    {item.q}
                  </span>
                  <svg
                    className="faq-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="faq-a">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 交流与反馈 */}
        <section id="feedback" className="content-section">
          <div className="section-head reveal">
            <span
              className="section-tag"
              style={{ background: 'linear-gradient(135deg,#f472b6,#a78bfa)' }}
            >
              交流与反馈
            </span>
            <h2>你的声音，是星球前进的动力</h2>
            <p>通过以下入口与 CodeBuddy 保持连接，问题与建议我们都想听到</p>
          </div>
          <div className="feedback-grid">
            {FEEDBACK_CHANNELS.map((ch, i) => (
              <a
                key={ch.title}
                className="feedback-card glass reveal"
                href={ch.url}
                target="_blank"
                rel="noreferrer"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="feedback-icon">{CHANNEL_ICONS[ch.icon]}</span>
                <span className="feedback-body">
                  <strong>{ch.title}</strong>
                  <span>{ch.desc}</span>
                </span>
                <span className="feedback-go">
                  前往
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
          <div className="feedback-note glass reveal">
            <span className="pulse-dot" />
            想提问题或建议？在公众号文章评论区留言、或后台私信「腾讯 CodeBuddy」，我们都会认真阅读
          </div>
        </section>

        {/* 快速体验通道 */}
        <section id="try" className="try-section">
          <div className="try-panel glass reveal">
            <BuddyMascot size={150} className="try-mascot" />
            <div className="try-text">
              <span className="section-tag" style={{ background: 'linear-gradient(135deg,#22d3ee,#a78bfa,#f472b6)' }}>
                快速体验通道
              </span>
              <h2>现在，和 Buddy 一起把想法变成产品</h2>
              <p>打开 CodeBuddy 官网，即刻体验 IDE、Code CLI 与插件全场景 AI 开发。</p>
            </div>
            <a className="btn-primary btn-xl" href={OFFICIAL_URL} target="_blank" rel="noreferrer">
              前往 CodeBuddy 官网
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>CodeBuddy 星球 · 你的 AI 编程伙伴基地</span>
        <span>内容来源于「腾讯 CodeBuddy」微信公众号合集 · <a href={OFFICIAL_URL} target="_blank" rel="noreferrer">codebuddy.ai</a></span>
      </footer>
    </div>
  )
}
