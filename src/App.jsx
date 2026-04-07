import { useState, useEffect } from 'react'
import { Calendar, Mail, DollarSign, Camera, Film, Shirt, Music, Star, MapPin, ChevronRight, Clock, Users, Eye, Menu, X, ArrowRight, Send, Check, Grid3X3, LayoutDashboard, FileText, Settings, LogOut, Bell, Search, Plus, MoreHorizontal, Heart, Award, TrendingUp } from 'lucide-react'

const Instagram = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.51"/>
  </svg>
)
import './App.css'

// ============================================
// DATA
// ============================================
const SERVICES = [
  { id: 'lingerie', title: 'Lingerie & Art Nude', rate: '$150–250/hr', description: 'Editorial and artistic lingerie shoots. Professional, tasteful, high-fashion.', image: '/portfolio/art-nude-studio.jpg' },
  { id: 'fashion', title: 'Fashion', rate: '$100–200/hr', description: 'Runway, editorial, lookbook, and commercial fashion photography.', image: '/portfolio/lace-blouse-editorial.jpg' },
  { id: 'music-videos', title: 'Music Videos', rate: '$400–800/day', description: 'Featured and background roles in music videos. Casual rates from $100–150/hr.', image: '/portfolio/bomber-jacket.jpg' },
  { id: 'commercial', title: 'Commercial & TV', rate: 'Contact for rates', description: 'Television commercials, reality TV appearances, brand campaigns.', image: '/portfolio/glamour-yellow-jacket.jpeg' },
  { id: 'runway', title: 'Runway & Events', rate: 'Contact for rates', description: 'Fashion week, swim week, brand launches, and live event appearances.', image: '/portfolio/runway-london.png' },
]

const CREDITS = [
  'New York Weekly', 'E! News', 'Glamour', 'Photo Vogue', 'Old Navy',
  'Dixxon Flannel Co', 'Elie Balleh', 'Food Network', 'NYFW', 'LAFW',
  'Las Vegas Swim Week', 'Fadama Academy',
]

const STATS = {
  height: "5'8\"", weight: '105 lbs', waist: '24.5"', hips: '32"',
  bust: '34B', dress: '0-2', shoe: '8.5W', hair: 'Blonde', eyes: 'Hazel',
}

const PORTFOLIO = [
  { id: 1, title: 'Glamour — Red Editorial', category: 'Editorial', image: '/portfolio/glamour-red-coat.jpeg' },
  { id: 2, title: 'Glamour — Yellow Jacket', category: 'Editorial', image: '/portfolio/glamour-yellow-jacket.jpeg' },
  { id: 3, title: 'Photo Vogue — Track', category: 'Editorial', image: '/portfolio/vogue-track.jpeg' },
  { id: 4, title: 'Beauty Closeup', category: 'Editorial', image: '/portfolio/beauty-closeup.jpg' },
  { id: 5, title: 'Soft Curls Headshot', category: 'Headshots', image: '/portfolio/soft-curls-headshot.jpeg' },
  { id: 6, title: 'Lace Blouse Editorial', category: 'Fashion', image: '/portfolio/lace-blouse-editorial.jpg' },
  { id: 7, title: 'Satin Halter Dress', category: 'Fashion', image: '/portfolio/satin-halter-dress.jpeg' },
  { id: 8, title: 'White Bodysuit', category: 'Fashion', image: '/portfolio/white-bodysuit.jpg' },
  { id: 9, title: 'Leather & Boots', category: 'Fashion', image: '/portfolio/leather-boots-bw.jpg' },
  { id: 10, title: 'Bomber Jacket', category: 'Fashion', image: '/portfolio/bomber-jacket.jpg' },
  { id: 11, title: 'Fashion Week London', category: 'Runway', image: '/portfolio/runway-london.png' },
  { id: 12, title: 'NYFW Show', category: 'Runway', image: '/portfolio/runway-nyfw.jpg' },
  { id: 13, title: 'Art Nude — Studio', category: 'Art Nude', image: '/portfolio/art-nude-studio.jpg' },
  { id: 14, title: 'Art Nude — Profile', category: 'Art Nude', image: '/portfolio/art-nude-profile.png' },
  { id: 15, title: 'Artistic Closeup', category: 'Art Nude', image: '/portfolio/artistic-closeup.jpg' },
  { id: 16, title: 'Feathered Collar', category: 'Creative', image: '/portfolio/feathered-collar.jpg' },
  { id: 17, title: 'Crystal Editorial', category: 'Creative', image: '/portfolio/crystal-editorial.jpg' },
  { id: 18, title: 'Beauty Mirror', category: 'Creative', image: '/portfolio/beauty-mirror.jpg' },
  { id: 19, title: 'Comp — Tank Front', category: 'Digitals', image: '/portfolio/comp-tank-front.png' },
  { id: 20, title: 'Comp — Jeans Side', category: 'Digitals', image: '/portfolio/comp-jeans-side.png' },
  { id: 21, title: 'Comp — Jeans Profile', category: 'Digitals', image: '/portfolio/comp-jeans-profile.jpg' },
  { id: 22, title: 'Comp — Bikini Side', category: 'Digitals', image: '/portfolio/comp-bikini-side.jpg' },
  { id: 23, title: 'Comp — Bikini 3/4', category: 'Digitals', image: '/portfolio/comp-bikini-34.jpg' },
  { id: 24, title: 'Comp — Bikini Front', category: 'Digitals', image: '/portfolio/comp-bikini-front.png' },
  { id: 25, title: 'New York Weekly Feature', category: 'Press', image: '/portfolio/new-york-weekly.jpeg' },
]

// Featured images for editorial strips
const EDITORIAL_STRIP = [
  '/portfolio/glamour-red-coat.jpeg',
  '/portfolio/feathered-collar.jpg',
  '/portfolio/leather-boots-bw.jpg',
  '/portfolio/beauty-closeup.jpg',
  '/portfolio/runway-london.png',
]

// ============================================
// PUBLIC SITE
// ============================================

function PublicNav({ onBook, onDashboard }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`pub-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="pub-nav-inner">
        <a href="#" className="pub-logo">MM</a>
        <div className={`pub-nav-links ${mobileOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#portfolio" onClick={() => setMobileOpen(false)}>Portfolio</a>
          <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
          <button className="nav-book-btn" onClick={onBook}>Book Now</button>
        </div>
        <div className="pub-nav-right">
          <button className="nav-dash-btn" onClick={onDashboard}>
            <Grid3X3 size={16} />
          </button>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

function HeroSection({ onBook }) {
  return (
    <section className="hero">
      <div className="hero-image-grid">
        <div className="hero-img-main">
          <img src="/portfolio/beauty-closeup.jpg" alt="Makayla Me'chelle" />
        </div>
        <div className="hero-img-stack">
          <div className="hero-img-top">
            <img src="/portfolio/glamour-red-coat.jpeg" alt="" />
          </div>
          <div className="hero-img-bottom">
            <img src="/portfolio/leather-boots-bw.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-content-inner">
          <p className="hero-label">Model &bull; Actress &bull; Influencer</p>
          <h1 className="hero-title">Makayla<br/>Me'chelle</h1>
          <div className="hero-divider" />
          <p className="hero-sub">Based in Los Angeles. Available worldwide.<br/>Fashion. Lingerie. Runway. Commercial.</p>
          <div className="hero-actions">
            <button className="hero-btn-primary" onClick={onBook}>Book a Session <ArrowRight size={16} /></button>
            <a href="#portfolio" className="hero-btn-secondary">View Work</a>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </div>
    </section>
  )
}

function EditorialStrip() {
  return (
    <div className="editorial-strip">
      {EDITORIAL_STRIP.map((img, i) => (
        <div key={i} className="editorial-strip-img">
          <img src={img} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  )
}

function CreditsMarquee() {
  const doubled = [...CREDITS, ...CREDITS]
  return (
    <div className="credits-marquee">
      <div className="credits-marquee-track">
        {doubled.map((name, i) => (
          <span key={i} className="credits-marquee-item">
            {name} <span className="credits-dot">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <section id="about" className="section-about">
      <div className="about-layout">
        <div className="about-images">
          <div className="about-img-large">
            <img src="/portfolio/satin-halter-dress.jpeg" alt="Makayla Me'chelle" />
          </div>
          <div className="about-img-small">
            <img src="/portfolio/soft-curls-headshot.jpeg" alt="Makayla Me'chelle" />
          </div>
        </div>
        <div className="about-content">
          <p className="section-label">About</p>
          <h2 className="section-title">Makayla Me'chelle</h2>
          <p className="about-text">
            A 22-year-old force in fashion and entertainment. Specializing in editorial, lingerie, and runway,
            Makayla has been featured in <strong>Glamour</strong>, <strong>Photo Vogue</strong>, <strong>New York Weekly</strong>,
            and <strong>E! News</strong>. She's walked <strong>NYFW</strong>, <strong>LAFW</strong>, and <strong>Las Vegas Swim Week</strong>.
          </p>
          <p className="about-text">
            From Food Network to reality TV to campaigns with Old Navy, Dixxon Flannel Co, and Elie Balleh —
            she brings editorial polish to every frame.
          </p>
          <div className="about-stats">
            {Object.entries(STATS).map(([key, val]) => (
              <div key={key} className="about-stat-item">
                <span className="about-stat-label">{key}</span>
                <span className="about-stat-value">{val}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="about-cta">Work with Makayla <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  )
}

function PortfolioSection() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const categories = ['All', 'Editorial', 'Fashion', 'Runway', 'Art Nude', 'Creative', 'Digitals']
  const filtered = filter === 'All' ? PORTFOLIO : PORTFOLIO.filter(p => p.category === filter)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
  const visible = (!showAll && isMobile) ? filtered.slice(0, 6) : filtered
  const hasMore = isMobile && !showAll && filtered.length > 6

  return (
    <section id="portfolio" className="section-portfolio">
      <div className="portfolio-header">
        <div>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Selected Work</h2>
        </div>
        <div className="portfolio-filters">
          {categories.map(cat => (
            <button key={cat} className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => { setFilter(cat); setShowAll(false) }}>{cat}</button>
          ))}
        </div>
      </div>
      <div className="portfolio-masonry">
        {visible.map((item, i) => (
          <div key={item.id} className={`masonry-item ${i % 5 === 0 ? 'tall' : ''}`} onClick={() => setLightbox(item)}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="masonry-overlay">
              <span className="masonry-category">{item.category}</span>
              <h3 className="masonry-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="portfolio-view-more">
          <button className="hero-btn-secondary" onClick={() => setShowAll(true)}>
            View All {filtered.length} Photos
          </button>
        </div>
      )}
      {showAll && isMobile && filtered.length > 6 && (
        <div className="portfolio-view-more">
          <button className="hero-btn-secondary" onClick={() => setShowAll(false)}>Show Less</button>
        </div>
      )}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}><X size={28} /></button>
          <img src={lightbox.image} alt={lightbox.title} onClick={e => e.stopPropagation()} />
          <div className="lightbox-caption">
            <h3>{lightbox.title}</h3>
            <span>{lightbox.category}</span>
          </div>
        </div>
      )}
    </section>
  )
}

function ServicesSection({ onBook }) {
  return (
    <section id="services" className="section-services">
      <div className="services-header">
        <p className="section-label">Services</p>
        <h2 className="section-title">Available For</h2>
      </div>
      <div className="services-list">
        {SERVICES.map((svc, i) => (
          <div key={svc.id} className="service-row" onClick={onBook}>
            <div className="service-row-img">
              <img src={svc.image} alt={svc.title} />
            </div>
            <div className="service-row-content">
              <span className="service-number">0{i + 1}</span>
              <h3 className="service-row-title">{svc.title}</h3>
              <p className="service-row-desc">{svc.description}</p>
            </div>
            <div className="service-row-rate">
              <span>{svc.rate}</span>
              <ArrowRight size={20} className="service-arrow" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', date: '', message: '', references: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <section id="contact" className="section-contact">
      <div className="contact-layout">
        <div className="contact-left">
          <div className="contact-left-img">
            <img src="/portfolio/glamour-yellow-jacket.jpeg" alt="" />
          </div>
          <div className="contact-left-content">
            <p className="section-label">Contact</p>
            <h2 className="section-title" style={{ color: '#fff' }}>Let's Create<br/>Something Beautiful</h2>
            <div className="contact-details">
              <div className="contact-detail"><Instagram size={18} /><span>@makaylamechelle</span></div>
              <div className="contact-detail"><MapPin size={18} /><span>Available for travel</span></div>
            </div>
          </div>
        </div>
        <div className="contact-right">
          {submitted ? (
            <div className="contact-success">
              <Check size={48} />
              <h3>Request Sent</h3>
              <p>Makayla will review your booking request and get back to you within 24 hours.</p>
              <button className="hero-btn-secondary" onClick={() => setSubmitted(false)}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h3 className="form-title">Book a Session</h3>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} required>
                    <option value="">Select Service</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                </div>
              </div>
              <div className="form-group">
                <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..." required />
              </div>
              <div className="form-group">
                <textarea rows={2} value={form.references} onChange={e => setForm({ ...form, references: e.target.value })}
                  placeholder="References (optional) — name, company, contact info" />
              </div>
              <button type="submit" className="hero-btn-primary" style={{ width: '100%' }}>
                Send Request <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="pub-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2 className="footer-logo">Makayla Me'chelle</h2>
          <p className="footer-tagline">Professional Model &bull; Actress &bull; Influencer</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigate</h4>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <span>Fashion</span>
            <span>Lingerie & Art Nude</span>
            <span>Music Videos</span>
            <span>Runway</span>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://instagram.com/makaylamechelle" target="_blank" rel="noopener">Instagram</a>
            <span>Available Worldwide</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 Makayla Me'chelle. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#contact">Book Now</a>
          <span className="footer-dot">&bull;</span>
          <a href="https://instagram.com/makaylamechelle" target="_blank" rel="noopener"><Instagram size={16} /></a>
        </div>
      </div>
    </footer>
  )
}

function PublicSite({ onDashboard }) {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="public-site">
      <PublicNav onBook={scrollToContact} onDashboard={onDashboard} />
      <HeroSection onBook={scrollToContact} />
      <CreditsMarquee />
      <AboutSection />
      <EditorialStrip />
      <PortfolioSection />
      <ServicesSection onBook={scrollToContact} />
      <ContactSection />
      <Footer />
    </div>
  )
}

// ============================================
// DASHBOARD (unchanged)
// ============================================

function DashboardNav({ onLogout, activeTab, setActiveTab }) {
  return (
    <aside className="dash-sidebar">
      <div className="dash-sidebar-brand">
        <div className="dash-avatar">M</div>
        <div><p className="dash-brand-name">Makayla</p><p className="dash-brand-sub">Command Center</p></div>
      </div>
      <nav className="dash-nav">
        {[
          { id: 'overview', label: 'Overview', icon: LayoutDashboard },
          { id: 'calendar', label: 'Calendar', icon: Calendar },
          { id: 'email', label: 'Email', icon: Mail },
          { id: 'bookings', label: 'Bookings', icon: Users },
          { id: 'invoices', label: 'Invoices', icon: FileText },
          { id: 'portfolio', label: 'Portfolio', icon: Grid3X3 },
          { id: 'analytics', label: 'Analytics', icon: TrendingUp },
        ].map(item => {
          const Icon = item.icon
          return (<button key={item.id} className={`dash-nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}><Icon size={18} /><span>{item.label}</span></button>)
        })}
      </nav>
      <div className="dash-sidebar-footer">
        <button className="dash-nav-item" onClick={() => {}}><Settings size={18} /><span>Settings</span></button>
        <button className="dash-nav-item" onClick={onLogout}><LogOut size={18} /><span>Back to Site</span></button>
      </div>
    </aside>
  )
}

function DashHeader({ title, subtitle }) {
  return (<div className="dash-header"><div><h1 className="dash-title">{title}</h1>{subtitle && <p className="dash-subtitle">{subtitle}</p>}</div>
    <div className="dash-header-actions"><button className="dash-icon-btn"><Search size={18} /></button><button className="dash-icon-btn"><Bell size={18} /></button></div></div>)
}

function OverviewTab() {
  const today = new Date()
  const dateStr = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
  return (
    <div className="dash-tab">
      <DashHeader title={`Good ${today.getHours() < 12 ? 'morning' : today.getHours() < 17 ? 'afternoon' : 'evening'}, Makayla`} subtitle={dateStr} />
      <div className="overview-stats">
        {[{ label: 'Pending Bookings', value: '3', icon: Clock, color: '#C9A96E' },{ label: 'This Month Revenue', value: '$2,400', icon: DollarSign, color: '#4CAF7D' },
          { label: 'Unread Emails', value: '7', icon: Mail, color: '#5B8DEF' },{ label: 'Portfolio Views', value: '1.2K', icon: Eye, color: '#E87B6B' }].map(stat => {
          const Icon = stat.icon
          return (<div key={stat.label} className="stat-card"><div className="stat-icon" style={{ background: `${stat.color}15`, color: stat.color }}><Icon size={20} /></div>
            <div className="stat-info"><span className="stat-value">{stat.value}</span><span className="stat-label">{stat.label}</span></div></div>)
        })}
      </div>
      <div className="overview-grid">
        <div className="overview-section"><div className="overview-section-header"><h3>Upcoming</h3></div>
          <div className="upcoming-list">
            {[{ title: 'Fashion Editorial Shoot', client: 'Vogue Italia', time: 'Tomorrow, 10:00 AM', type: 'Fashion' },
              { title: 'Music Video — "Golden"', client: 'Atlantic Records', time: 'Apr 10, 2:00 PM', type: 'Music Video' },
              { title: 'Runway Fitting', client: 'NYFW', time: 'Apr 14, 11:00 AM', type: 'Runway' }].map((event, i) => (
              <div key={i} className="upcoming-item"><div className="upcoming-dot" /><div className="upcoming-info"><h4>{event.title}</h4><p>{event.client}</p></div>
                <div className="upcoming-meta"><span className="upcoming-time">{event.time}</span><span className="upcoming-badge">{event.type}</span></div></div>))}
          </div>
        </div>
        <div className="overview-section"><div className="overview-section-header"><h3>Recent Messages</h3></div>
          <div className="message-list">
            {[{ from: 'Sarah Chen — Glamour', subject: 'Re: Cover Shoot Availability', time: '2h ago', unread: true },
              { from: 'Atlantic Records', subject: 'Music video details + contract', time: '5h ago', unread: true },
              { from: 'NYFW Production', subject: 'Fitting schedule confirmed', time: '1d ago', unread: false }].map((msg, i) => (
              <div key={i} className={`message-item ${msg.unread ? 'unread' : ''}`}><div className="message-avatar">{msg.from[0]}</div>
                <div className="message-content"><h4>{msg.from}</h4><p>{msg.subject}</p></div><span className="message-time">{msg.time}</span></div>))}
          </div>
        </div>
      </div>
      <div className="overview-section" style={{ marginTop: 24 }}>
        <div className="overview-section-header"><h3>Recent Invoices</h3></div>
        <div className="invoice-table"><div className="invoice-row invoice-header"><span>Client</span><span>Service</span><span>Amount</span><span>Status</span></div>
          {[{ client: 'Dixxon Flannel Co', service: 'Fashion Shoot', amount: '$800', status: 'Paid' },{ client: 'Atlantic Records', service: 'Music Video', amount: '$600', status: 'Pending' },
            { client: 'Private Client', service: 'Lingerie Editorial', amount: '$500', status: 'Draft' }].map((inv, i) => (
            <div key={i} className="invoice-row"><span className="invoice-client">{inv.client}</span><span>{inv.service}</span><span className="invoice-amount">{inv.amount}</span>
              <span className={`invoice-status status-${inv.status.toLowerCase()}`}>{inv.status}</span></div>))}
        </div>
      </div>
    </div>
  )
}

function CalendarTab() {
  const [currentDate] = useState(new Date())
  const month = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const blanks = Array.from({ length: firstDay }, () => null)
  const today = currentDate.getDate()
  const events = { 7: 'Shoot', 10: 'Music Video', 14: 'Fitting', 20: 'Runway', 25: 'Editorial' }
  return (
    <div className="dash-tab"><DashHeader title="Calendar" subtitle="Manage your schedule" />
      <div className="calendar-container"><div className="calendar-header"><h3>{month}</h3><button className="btn btn-accent btn-sm"><Plus size={14} /> Add Event</button></div>
        <div className="calendar-grid">{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <div key={d} className="calendar-day-label">{d}</div>)}
          {blanks.map((_, i) => <div key={`b${i}`} className="calendar-cell empty" />)}
          {days.map(day => (<div key={day} className={`calendar-cell ${day === today ? 'today' : ''} ${events[day] ? 'has-event' : ''}`}>
            <span className="calendar-date">{day}</span>{events[day] && <span className="calendar-event">{events[day]}</span>}</div>))}
        </div></div></div>)
}

function EmailTab() {
  const emails = [
    { from: 'Sarah Chen — Glamour', subject: 'Re: Cover Shoot Availability', preview: 'Hi Makayla! We loved your test shots...', time: '2h ago', unread: true },
    { from: 'Atlantic Records', subject: 'Music video details + contract', preview: 'Please find attached the contract...', time: '5h ago', unread: true },
    { from: 'NYFW Production', subject: 'Fitting schedule confirmed', preview: 'Your fitting has been confirmed...', time: '1d ago', unread: false },
    { from: 'Dixxon Flannel Co', subject: 'Campaign wrap — thank you!', preview: 'Just wanted to say thank you...', time: '2d ago', unread: false },
    { from: 'Elie Balleh', subject: 'Spring collection lookbook', preview: 'We are planning our Spring 2026 lookbook...', time: '3d ago', unread: false },
  ]
  return (
    <div className="dash-tab"><DashHeader title="Email" subtitle="makmodel2003@gmail.com" />
      <div className="email-toolbar"><div className="email-search"><Search size={16} /><input type="text" placeholder="Search emails..." /></div>
        <button className="btn btn-accent btn-sm"><Plus size={14} /> Compose</button></div>
      <div className="email-list">{emails.map((email, i) => (
        <div key={i} className={`email-item ${email.unread ? 'unread' : ''}`}><div className="email-avatar">{email.from[0]}</div>
          <div className="email-body"><div className="email-top"><h4>{email.from}</h4><span className="email-time">{email.time}</span></div>
            <p className="email-subject">{email.subject}</p><p className="email-preview">{email.preview}</p></div></div>))}
      </div><p className="email-connect-note"><Mail size={16} /> Connect Gmail to see real emails here</p></div>)
}

function BookingsTab() {
  const bookings = [
    { client: 'Sarah Chen', service: 'Fashion Editorial', date: 'Apr 7, 2026', rate: '$200/hr', status: 'Confirmed', hours: '4 hrs' },
    { client: 'Atlantic Records', service: 'Music Video', date: 'Apr 10, 2026', rate: '$600/day', status: 'Pending', hours: 'Full day' },
    { client: 'NYFW', service: 'Runway', date: 'Apr 14, 2026', rate: 'TBD', status: 'Confirmed', hours: 'Full day' },
    { client: 'Private Client', service: 'Lingerie Shoot', date: 'Apr 20, 2026', rate: '$250/hr', status: 'Pending', hours: '2 hrs' },
  ]
  return (
    <div className="dash-tab"><DashHeader title="Bookings" subtitle="Manage your sessions" />
      <div className="bookings-list">{bookings.map((b, i) => (
        <div key={i} className="booking-card"><div className="booking-left"><div className="booking-date-badge">
          <span className="booking-month">{b.date.split(' ')[0]}</span><span className="booking-day">{b.date.split(' ')[1].replace(',', '')}</span></div>
          <div className="booking-info"><h4>{b.service}</h4><p>{b.client} &bull; {b.hours}</p></div></div>
          <div className="booking-right"><span className="booking-rate">{b.rate}</span><span className={`invoice-status status-${b.status.toLowerCase()}`}>{b.status}</span></div></div>))}
      </div></div>)
}

function InvoicesTab() {
  return (
    <div className="dash-tab"><DashHeader title="Invoices" subtitle="Track your earnings" />
      <div className="invoice-summary">
        <div className="inv-sum-card"><span className="inv-sum-label">Total Earned (2026)</span><span className="inv-sum-value">$12,400</span></div>
        <div className="inv-sum-card"><span className="inv-sum-label">Pending</span><span className="inv-sum-value pending">$1,100</span></div>
        <div className="inv-sum-card"><span className="inv-sum-label">This Month</span><span className="inv-sum-value">$2,400</span></div>
      </div>
      <div className="invoice-table"><div className="invoice-row invoice-header"><span>Invoice #</span><span>Client</span><span>Service</span><span>Amount</span><span>Date</span><span>Status</span></div>
        {[{ id: 'INV-001', client: 'Dixxon Flannel Co', service: 'Fashion Campaign', amount: '$800', date: 'Mar 28', status: 'Paid' },
          { id: 'INV-002', client: 'Old Navy', service: 'Commercial', amount: '$1,200', date: 'Mar 15', status: 'Paid' },
          { id: 'INV-003', client: 'Atlantic Records', service: 'Music Video', amount: '$600', date: 'Apr 2', status: 'Pending' },
          { id: 'INV-004', client: 'Private Client', service: 'Lingerie Editorial', amount: '$500', date: 'Apr 5', status: 'Draft' }].map((inv, i) => (
          <div key={i} className="invoice-row"><span className="invoice-id">{inv.id}</span><span className="invoice-client">{inv.client}</span><span>{inv.service}</span>
            <span className="invoice-amount">{inv.amount}</span><span>{inv.date}</span><span className={`invoice-status status-${inv.status.toLowerCase()}`}>{inv.status}</span></div>))}
      </div><p className="email-connect-note"><DollarSign size={16} /> Stripe integration coming soon</p></div>)
}

function PortfolioTab() {
  return (
    <div className="dash-tab"><DashHeader title="Portfolio" subtitle="Manage your work" />
      <div className="portfolio-mgmt-grid">{PORTFOLIO.map(item => (
        <div key={item.id} className="portfolio-mgmt-card"><div className="portfolio-mgmt-img">
          <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
          <div className="portfolio-mgmt-info"><h4>{item.title}</h4><span className="upcoming-badge">{item.category}</span></div>
          <button className="dash-icon-btn"><MoreHorizontal size={16} /></button></div>))}
        <div className="portfolio-mgmt-card add-card"><Plus size={32} strokeWidth={1} /><p>Add Photos</p></div></div></div>)
}

function AnalyticsTab() {
  return (
    <div className="dash-tab"><DashHeader title="Analytics" subtitle="Your performance" />
      <div className="analytics-cards">
        {[{ label: 'Total Bookings', value: '24', change: '+12%', icon: Users },{ label: 'Revenue YTD', value: '$12,400', change: '+28%', icon: DollarSign },
          { label: 'Avg. Rate', value: '$185/hr', change: '+8%', icon: TrendingUp },{ label: 'Repeat Clients', value: '67%', change: '+5%', icon: Heart }].map(stat => {
          const Icon = stat.icon
          return (<div key={stat.label} className="analytics-card"><div className="analytics-card-top"><Icon size={20} /><span className="analytics-change">{stat.change}</span></div>
            <span className="analytics-value">{stat.value}</span><span className="analytics-label">{stat.label}</span></div>)
        })}
      </div><div className="analytics-placeholder"><TrendingUp size={48} strokeWidth={1} /><p>Detailed analytics will populate as you use the platform.</p></div></div>)
}

function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('overview')
  const tabs = { overview: OverviewTab, calendar: CalendarTab, email: EmailTab, bookings: BookingsTab, invoices: InvoicesTab, portfolio: PortfolioTab, analytics: AnalyticsTab }
  const ActiveComponent = tabs[activeTab] || OverviewTab
  return (<div className="dashboard"><DashboardNav onLogout={onLogout} activeTab={activeTab} setActiveTab={setActiveTab} />
    <main className="dash-main"><ActiveComponent /></main></div>)
}

function App() {
  const [view, setView] = useState('public')
  if (view === 'dashboard') return <Dashboard onLogout={() => setView('public')} />
  return <PublicSite onDashboard={() => setView('dashboard')} />
}

export default App
