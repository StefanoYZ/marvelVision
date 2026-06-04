import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryData } from '../data/galleryData';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ClinicGallery() {
  const swiperRef = useRef(null);

  return (
    <section
      id="galeria"
      className="section-spacing px-4"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">NUESTRA CLÍNICA</span>
          <div className="flex justify-center">
            <div className="gold-line" />
          </div>
          <h2
            className="section-title font-black leading-tight mb-4"
            style={{ color: '#1F1B2E' }}
          >
            Espacios y tecnología para{' '}
            <span style={{ color: '#4B1F8C' }}>cuidar tu salud visual</span>
          </h2>
          <p className="section-copy leading-relaxed max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Nuestras instalaciones están diseñadas para brindarte comodidad, seguridad
            y la mejor experiencia en cada visita.
          </p>
        </motion.div>

        {/* Gallery Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative md:px-16"
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="gallery-swiper pb-12"
          >
            {galleryData.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                  style={{ aspectRatio: '4/3' }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6"
                    style={{ background: 'linear-gradient(0deg, rgba(43,20,95,0.85) 0%, transparent 60%)' }}
                  >
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-wider mb-1 block"
                        style={{ color: '#F2B544' }}
                      >
                        {item.label}
                      </span>
                      <p className="text-white text-sm font-medium">{item.alt}</p>
                    </div>
                  </div>
                  {/* Border on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400/50 transition-all duration-300 pointer-events-none"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Imagen anterior"
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center transition-all duration-250"
            style={{
              background: 'rgba(75,31,140,0.18)',
              backdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(75,31,140,0.28)',
              color: '#4B1F8C',
              boxShadow: '0 12px 30px rgba(75,31,140,0.14)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(75,31,140,0.82)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(75,31,140,0.18)';
              e.currentTarget.style.color = '#4B1F8C';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            aria-label="Imagen siguiente"
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center transition-all duration-250"
            style={{
              background: 'rgba(75,31,140,0.18)',
              backdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(75,31,140,0.28)',
              color: '#4B1F8C',
              boxShadow: '0 12px 30px rgba(75,31,140,0.14)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(75,31,140,0.82)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(75,31,140,0.18)';
              e.currentTarget.style.color = '#4B1F8C';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
