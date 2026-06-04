import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BRAND_ASSETS, WHATSAPP_URL } from '../constants';
import { FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { label: 'Inicio',       href: '#inicio' },
  { label: 'Beneficios',   href: '#beneficios' },
  { label: 'Servicios',    href: '#servicios' },
  { label: 'Testimonios',  href: '#testimonios' },
  { label: 'Especialista', href: '#especialista' },
  { label: 'Ubicacion',    href: '#ubicacion' },
  { label: 'Contacto',     href: '#contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  // Colors adaptan según estado de scroll
  const textColor   = scrolled ? '#1F1B2E' : '#FFFFFF';
  const textHoverBg = scrolled ? '#EEE8FF' : 'rgba(255,255,255,0.12)';
  const textHoverColor = scrolled ? '#4B1F8C' : '#C9920A';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled
          ? 'rgba(255,255,255,0.95)'
          : 'linear-gradient(180deg, rgba(43,20,95,0.85) 0%, rgba(43,20,95,0) 100%)',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(75,31,140,0.1), 0 4px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px] xl:h-[80px]">

          {/* ── Logo ── */}
          <motion.a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center shrink-0"
          >
            <img
              src={scrolled ? BRAND_ASSETS.logo : BRAND_ASSETS.logoLight}
              alt="MarvelVision — Clínica Oftalmológica"
              className="transition-all duration-400 object-contain"
              style={{
                height: scrolled ? '60px' : '76px',
                width: 'auto',
                filter: scrolled
                  ? 'none'
                  : BRAND_ASSETS.logoOnDarkFilter,
              }}
              onError={(e) => {
                e.target.src = BRAND_ASSETS.fallbackLogo;
                e.target.style.filter = BRAND_ASSETS.logoOnDarkFilter;
              }}
            />
          </motion.a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.07 * i }}
                className="px-2 xl:px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ color: textColor, textDecoration: 'none' }}
                onMouseEnter={(e) => {
                  e.target.style.color = textHoverColor;
                  e.target.style.background = textHoverBg;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = textColor;
                  e.target.style.background = 'transparent';
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* ── CTA Button ── */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
            style={
              scrolled
                ? {
                    background: 'linear-gradient(135deg, #4B1F8C, #6B3BBF)',
                    color: '#fff',
                    boxShadow: '0 4px 14px rgba(75,31,140,0.3)',
                  }
                : {
                    background: 'rgba(255,255,255,0.15)',
                    color: '#fff',
                    border: '1.5px solid rgba(255,255,255,0.35)',
                    backdropFilter: 'blur(8px)',
                  }
            }
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = scrolled
                ? '0 8px 22px rgba(75,31,140,0.4)'
                : '0 6px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = scrolled
                ? '0 4px 14px rgba(75,31,140,0.3)'
                : 'none';
            }}
          >
            <FaWhatsapp className="w-4 h-4" />
            Agendar por WhatsApp
          </motion.a>

          {/* ── Mobile Toggle ── */}
          <button
            id="mobile-menu-toggle"
            className="lg:hidden p-2 rounded-lg transition-colors duration-200"
            style={{ color: textColor }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: 'rgba(43,20,95,0.97)',
              backdropFilter: 'blur(16px)',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 rounded-lg text-sm font-semibold text-white/90 transition-all duration-200"
                  onMouseEnter={(e) => {
                    e.target.style.color = '#C9920A';
                    e.target.style.background = 'rgba(255,255,255,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255,255,255,0.9)';
                    e.target.style.background = 'transparent';
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white mt-3"
                style={{ background: 'linear-gradient(135deg, #4B1F8C, #6B3BBF)' }}
              >
                <FaWhatsapp className="w-4 h-4" />
                Agendar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
