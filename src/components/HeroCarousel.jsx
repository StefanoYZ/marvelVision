import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { WHATSAPP_URL } from '../constants';
import { FaWhatsapp } from 'react-icons/fa';
import { ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// ── Paleta dorada metalizada (extraída del logo) ──────────────────────────
// Reproduce el gradiente real: sombra oscura → base → brillo → pico → espejo
const GOLD_SHADOW    = '#5C3A00';
const GOLD_BASE      = '#A07010';
const GOLD_MID       = '#C8920A';
const GOLD_HIGHLIGHT = '#E8B830';
const GOLD_PEAK      = '#F5D878';

// Gradiente de 9 paradas — efecto 3D metalizado idéntico al logo
const GOLD_GRADIENT = [
  `${GOLD_SHADOW} 0%`,
  `${GOLD_BASE} 12%`,
  `${GOLD_MID} 28%`,
  `${GOLD_HIGHLIGHT} 42%`,
  `${GOLD_PEAK} 50%`,
  `${GOLD_HIGHLIGHT} 58%`,
  `${GOLD_MID} 72%`,
  `${GOLD_BASE} 88%`,
  `${GOLD_SHADOW} 100%`,
].join(', ');
const GOLD_BG = `linear-gradient(135deg, ${GOLD_GRADIENT})`;
const GOLD_LABEL = GOLD_MID; // color plano para label pequeño

const heroSlides = [
  {
    id: 1,
    image: '/hero/atencion 1.png',
    label: 'Salud Visual de Calidad',
    title: 'Tu visión merece',
    highlight: 'lo mejor.',
    desc: 'Cuidamos tus ojos con tecnología de punta y el respaldo de especialistas comprometidos con tu bienestar.',
  },
  {
    id: 2,
    image: '/hero/atencion 2.png',
    label: 'Especialistas Certificados',
    title: 'Atención con',
    highlight: 'experiencia.',
    desc: 'Más de 12 años devolviendo la claridad visual a miles de pacientes en Trujillo y La Libertad.',
  },
  {
    id: 3,
    image: '/hero/atencion 3.png',
    label: 'Tecnología Avanzada',
    title: 'Equipos de',
    highlight: 'última generación.',
    desc: 'Diagnóstico y tratamiento precisos gracias a los equipos más modernos en oftalmología.',
  },
];

export default function HeroCarousel() {
  const swiperRef = useRef(null);

  // Compute a stable full‑viewport height to avoid layout shifts between slides
  const VH = 'calc(var(--vh, 1vh) * 100)';

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative overflow-hidden" style={{ height: '100svh', minHeight: '600px' }}>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true, el: '.hero-pagination' }}
        navigation={{ nextEl: '.hero-next', prevEl: '.hero-prev' }}
        loop
        className="w-full h-full"
        style={{ height: '100%' }}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id} style={{ height: '100%' }}>
            <div
              className="relative flex items-center overflow-hidden"
              style={{ height: '100%' }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 25%' }}
                  loading="eager"
                />
                {/* Overlay gradient — morado oscuro en la mitad izquierda para legibilidad */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(27,13,60,0.88) 0%, rgba(43,20,95,0.72) 45%, rgba(43,20,95,0.15) 100%)',
                  }}
                />
                {/* Bottom fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-40"
                  style={{
                    background:
                      'linear-gradient(0deg, rgba(27,13,60,0.7) 0%, transparent 100%)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16 w-full flex items-center" style={{ minHeight: '100%' }}>
                <div className="max-w-xl">
                  {/* Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="flex items-center gap-3 mb-5"
                  >
                    <div className="h-px w-7 rounded" style={{ background: GOLD_BG }} />
                    <span
                      className="text-xs font-bold tracking-[0.2em] uppercase"
                      style={{ color: GOLD_LABEL }}
                    >
                      {slide.label}
                    </span>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.1 }}
                    className="font-black leading-[1.08] text-white mb-4"
                    style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)' }}
                  >
                    {slide.title}{' '}
                    <span
                      style={{
                        background: GOLD_BG,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {slide.highlight}
                    </span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-base sm:text-lg leading-relaxed mb-10"
                    style={{ color: 'rgba(255,255,255,0.78)' }}
                  >
                    {slide.desc}
                  </motion.p>

                  {/* CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap gap-3"
                  >
                    <a
                      href={WHATSAPP_URL}
                      id="hero-whatsapp-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300"
                      style={{
                        background: GOLD_BG,
                        color: '#fff',
                        boxShadow: '0 6px 22px rgba(90,55,0,0.5)',
                        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(90,55,0,0.65)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 6px 22px rgba(90,55,0,0.5)';
                      }}
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Agendar por WhatsApp
                    </a>

                    <a
                      href="#servicios"
                      id="hero-know-more-btn"
                      onClick={(e) => handleNavClick(e, '#servicios')}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white transition-all duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1.5px solid rgba(255,255,255,0.28)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      Conocer servicios
                      <ChevronDown className="w-4 h-4" />
                    </a>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="flex items-center gap-8 mt-12 pt-8"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    {[
                      { num: '12+', label: 'Años de experiencia' },
                      { num: '5K+', label: 'Pacientes atendidos' },
                      { num: '99%', label: 'Satisfacción' },
                    ].map((s) => (
                      <div key={s.num}>
                        <div
                        className="text-2xl font-black"
                        style={{
                          background: GOLD_BG,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {s.num}
                      </div>
                        <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.58)' }}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Custom Pagination ── */}
      <div className="hero-pagination absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2" />

      {/* ── Custom Nav Arrows ── */}
      <button
        className="hero-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-250 cursor-pointer"
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(10px)',
          border: `1.5px solid rgba(255,255,255,0.25)`,
          color: '#fff',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = GOLD;
          e.currentTarget.style.borderColor = GOLD;
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        className="hero-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-250 cursor-pointer"
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(10px)',
          border: '1.5px solid rgba(255,255,255,0.25)',
          color: '#fff',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = GOLD;
          e.currentTarget.style.borderColor = GOLD;
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

    </section>
  );
}
