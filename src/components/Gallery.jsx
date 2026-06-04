import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { galleryData } from '../data/galleryData';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Gallery() {
  return (
    <section id="galeria" className="section-spacing bg-purple-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Nuestra Clínica
          </span>
          <h2 className="section-title font-bold text-purple-dark mb-4">
            Un espacio <span className="text-purple-medium">diseñado para ti</span>
          </h2>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
            Instalaciones modernas, equipos de última generación y un ambiente cálido pensado para tu bienestar y comodidad.
          </p>
        </motion.div>

        {/* Gallery Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.gallery-next',
              prevEl: '.gallery-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {galleryData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/80 via-purple-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-gold/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {item.label}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom nav arrows */}
          <button className="gallery-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-purple hover:bg-purple hover:text-white transition-all duration-300 border border-purple-light">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="gallery-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-purple hover:bg-purple hover:text-white transition-all duration-300 border border-purple-light">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
