import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowLeft, Phone, Menu, X, Layers3, Hand, Palette, Zap,
  FlaskConical, Package, Sparkles, Coffee, Gift, Settings2, Box,
  ArrowUpLeft, Mail, MapPin, Instagram
} from 'lucide-react'
import './style.css'

const ASSET_BASE = `${import.meta.env.BASE_URL}assets/`

const phone = '09123174245'
const address = 'کرج. عظیمیه. بلوار نبوت. مجتمع گالریا'
const email = 'mana.priint.studio.gmail.com'
const instagram = 'mana.printstudio'

const navItems = [
  ['خانه', '#home'],
  ['درباره مانا', '#about'],
  ['خدمات', '#services'],
  ['نمونه‌کارها', '#portfolio'],
  ['تماس با ما', '#contact'],
]

const highlights = [
  [Layers3, 'چاپ برجسته و باکیفیت'],
  [Hand, 'بافت لمسی و سه‌بعدی'],
  [Palette, 'رنگ‌های زنده و جزئیات دقیق'],
  [Zap, 'اجرای سریع، بدون قالب اختصاصی'],
]

const services = [
  [Layers3, 'چاپ لیبل برجسته و باکیفیت', 'مناسب برای ایجاد جلوه‌ای برجسته و حرفه‌ای روی انواع محصولات و بسته‌بندی‌ها.'],
  [Hand, 'برجسته و لمسی', 'افکت سه‌بعدی و سطحی متفاوت که علاوه بر دیده شدن، حس می‌شود.'],
  [Palette, 'رنگ‌های زنده', 'چاپ با جزئیات بالا و نمایش شفاف رنگ‌ها برای هویت بصری دقیق‌تر برند.'],
  [Zap, 'بدون نیاز به قالب اختصاصی', 'اجرای سریع و کم‌هزینه‌تر، بدون نیاز به ساخت قالب اختصاصی.'],
]

const applications = [
  [FlaskConical, 'بطری و ظروف'],
  [Package, 'بسته‌بندی'],
  [Sparkles, 'لوازم آرایشی'],
  [Coffee, 'ماگ و لیوان'],
  [Gift, 'محصولات تبلیغاتی'],
  [Settings2, 'محصولات صنعتی'],
  [Box, 'هدایای اختصاصی'],
]

const portfolioSamples = [
  [ASSET_BASE + 'portfolio-04-jl-collective-transfer.webp', 'لیبل ترنسفر', 'jl-transfer'],
  [ASSET_BASE + 'portfolio-02-lumina-candle.webp', 'شمع و ظروف', 'lumina-candle'],
  [ASSET_BASE + 'portfolio-05-skincare-transfer.webp', 'لوازم آرایشی', 'skincare-transfer'],
]

function WaveEdge({ fill, variant = 'one' }) {
  const paths = {
    one: 'M0 88 C158 38 320 25 488 38 C652 50 738 88 890 94 C1054 101 1170 76 1306 47 C1378 31 1417 27 1440 24 L1440 150 L0 150 Z',
    two: 'M0 82 C170 42 342 32 506 44 C658 55 744 90 897 97 C1063 105 1180 82 1310 54 C1378 39 1417 35 1440 32 L1440 150 L0 150 Z',
    three: 'M0 90 C164 46 326 31 492 42 C652 53 742 86 900 92 C1062 98 1176 76 1306 50 C1378 35 1416 31 1440 28 L1440 150 L0 150 Z',
  }
  return (
    <svg className={`wave-edge wave-${variant}`} viewBox="0 0 1440 150" preserveAspectRatio="none" aria-hidden="true">
      <path d={paths[variant] || paths.one} fill={fill} />
    </svg>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-topline">
        <div className="container topline-inner">
          <span className="topline-note"><i /> چاپ لیبل UV DTF برای برندهایی که دیده می‌شوند</span>
          <span className="topline-signature">MANA <b> / </b> UV DTF</span>
        </div>
      </div>

      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="مانا، صفحه اصلی">
          <img src={ASSET_BASE + "mana-mark.webp"} alt="" />
          <span>مانا</span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'بستن منو' : 'باز کردن منو'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={open ? 'nav nav-open' : 'nav'} aria-label="منوی اصلی">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>

        <div className="header-phone" dir="ltr" aria-label="شماره تماس مانا">
          <Phone size={16} />
          <span>۰۹۱۲۳۱۷۴۲۴۵</span>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow"><i /> چاپ و تولید لیبل اختصاصی</span>
          <h1>چاپ <em>UV DTF</em><br />مانا</h1>
          <p className="hero-lead">راهکاری حرفه‌ای برای چاپ روی انواع سطوح صاف و سخت</p>
          <p className="hero-description">
            چاپ لیبل برجسته و باکیفیت با جلوه‌ای لمسی، رنگ‌های زنده و اجرای سریع؛
            برای اینکه هویت برند شما روی محصول، دقیق و متمایز دیده شود.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              مشاوره و ثبت سفارش <ArrowLeft size={17} />
            </a>
            <a className="button button-outline" href="#portfolio">مشاهده نمونه‌کارها</a>
          </div>
        </div>

        <div className="hero-art hero-device-art">
          <img
            src={ASSET_BASE + "mana-hero-printer-final.webp"}
            alt="دستگاه چاپ UV DTF مانا"
          />
        </div>
      </div>
      <WaveEdge fill="#eef3f8" variant="one" />
    </section>
  )
}

function Highlights() {
  return (
    <section className="highlights" aria-label="ویژگی‌های چاپ مانا">
      <div className="container highlights-inner">
        {highlights.map(([Icon, label]) => (
          <div className="highlight" key={label}>
            <span className="highlight-icon"><Icon size={27} strokeWidth={1.7} /></span>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <WaveEdge fill="#f7f9fc" variant="two" />
    </section>
  )
}

function Portfolio() {
  return (
    <section className="portfolio section-space" id="portfolio">
      <div className="container portfolio-layout portfolio-layout-compact">
        <div className="portfolio-showcase">
          <div className="portfolio-grid portfolio-grid-compact">
            {portfolioSamples.map(([src, title, keyName]) => (
              <figure className={`sample-card sample-card-compact ${keyName}`} key={src}>
                <img src={src} alt={title} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>

        <div className="portfolio-intro portfolio-intro-compact">
          <span className="eyebrow"><i /> نمونه‌کارها</span>
          <h2>نمونه‌ای از<br />چاپ‌های مانا <em>UV DTF</em></h2>
          <p>
            سه نمونه منتخب از اجراهای واقعی مانا برای نمایش کیفیت چاپ،
            جزئیات خروجی و جلوه نهایی لیبل‌های UV DTF روی محصولات مختلف.
          </p>
        </div>
      </div>
      <WaveEdge fill="#071b34" variant="three" />
    </section>
  )
}

function AboutServices() {
  return (
    <section className="services-section section-space" id="services">
      <div className="container services-layout">
        <div className="services-intro" id="about">
          <span className="eyebrow eyebrow-light"><i /> درباره مانا</span>
          <h2>ایده‌هایت را<br /><em>به بهترین شکل</em> چاپ کن.</h2>
          <p>
            مانا با تمرکز بر چاپ لیبل UV DTF، راهکاری حرفه‌ای برای برندها،
            تولیدکنندگان و کسب‌وکارهایی ارائه می‌کند که به کیفیت، جزئیات و جلوه نهایی محصول اهمیت می‌دهند.
          </p>
          <p className="service-tagline">چاپ لیبل UV DTF برای برندهایی که دیده می‌شوند.</p>
        </div>

        <div className="service-list">
          {services.map(([Icon, title, description], index) => (
            <article className="service-row" key={title}>
              <span className="service-index">۰{index + 1}</span>
              <span className="service-icon"><Icon size={23} strokeWidth={1.6} /></span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <WaveEdge fill="#f2f6fa" variant="one" />
    </section>
  )
}

function Applications() {
  return (
    <section className="applications section-space" id="applications">
      <div className="container">
        <div className="applications-heading">
          <div>
            <span className="eyebrow"><i /> زمینه‌های کاربرد</span>
            <h2>روی سطوح مختلف، برای ایده‌های متفاوت</h2>
          </div>
          <p>مناسب انواع سطوح صاف و سخت</p>
        </div>
        <div className="application-list">
          {applications.map(([Icon, title]) => (
            <div className="application-item" key={title}>
              <Icon size={23} strokeWidth={1.6} />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
      <WaveEdge fill="#ffffff" variant="two" />
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-panel">
        <div>
          <span className="eyebrow eyebrow-light"><i /> ارتباط با مانا</span>
          <h2>برای چاپ ایده‌هایتان آماده‌ایم.</h2>
          <p>برای مشاوره و هماهنگی سفارش با مانا در ارتباط باشید.</p>
        </div>
        <div className="contact-number" dir="ltr">
          <Phone size={19} /> ۰۹۱۲۳۱۷۴۲۴۵
        </div>
      </div>
      <WaveEdge fill="#041225" variant="three" />
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="footer-logo" href="#home">
            <img src={ASSET_BASE + "mana-mark.webp"} alt="" />
            <span>مانا</span>
          </a>
          <p className="footer-slogan">چاپ لیبل UV DTF برای برندهایی که دیده می‌شوند.</p>
          <p className="footer-description">ایده‌هایت را به بهترین شکل چاپ کن.</p>
        </div>

        <div className="footer-contact">
          <h3>اطلاعات تماس</h3>
          <div className="footer-contact-item" dir="ltr">
            <Phone size={17} />
            <span>۰۹۱۲۳۱۷۴۲۴۵</span>
          </div>
          <div className="footer-contact-item" dir="rtl">
            <MapPin size={17} />
            <span><b>آدرس:</b> {address}</span>
          </div>
          <div className="footer-contact-item" dir="rtl">
            <Mail size={17} />
            <span dir="rtl"><b>ایمیل:</b> <span dir="ltr">{email}</span></span>
          </div>
          <div className="footer-contact-item" dir="rtl">
            <Instagram size={17} />
            <span dir="rtl"><b>اینستاگرام:</b> <span dir="ltr">{instagram}</span></span>
          </div>
        </div>

        <div className="footer-shortcuts">
          <h3>دسترسی سریع</h3>
          {navItems.slice(0, 4).map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a href="#contact">درخواست مشاوره</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© تمامی حقوق این وب‌سایت متعلق به مانا است.</span>
        <a href="#home">بازگشت به بالا <ArrowUpLeft size={15} /></a>
      </div>
    </footer>
  )
}

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.hero-copy, .hero-art, .highlights-inner, .portfolio-layout, .services-layout, .applications > .container'
    )
    targets.forEach((element) => element.classList.add('scroll-reveal'))

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-inview', entry.isIntersecting)
      })
    }, {
      threshold: 0.05,
      rootMargin: '-20% 0px -20% 0px'
    })

    targets.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Portfolio />
        <AboutServices />
        <Applications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
