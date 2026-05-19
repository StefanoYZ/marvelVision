import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

import 'swiper/css';
import 'swiper/css/pagination';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          style={{
            color: i < rating ? '#D9A62E' : '#E5E7EB',
            fill: i < rating ? '#D9A62E' : 'none',
          }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-24 px-4"
      style={{ background: '#F8F7FC' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label">HISTORIAS QUE NOS MOTIVAN</span>
          <div className="flex justify-center">
            <div className="gold-line" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4"
            style={{ color: '#1F1B2E' }}
          >
            Pacientes que hoy ven la vida{' '}
            <span style={{ color: '#4B1F8C' }}>con otros ojos</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Cada sonrisa es el resultado de nuestro compromiso con tu salud visual.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="relative flex flex-col p-7 rounded-2xl bg-white"
                  style={{
                    boxShadow: '0 4px 20px rgba(75,31,140,0.07)',
                    border: '1px solid rgba(75,31,140,0.08)',
                    minHeight: '280px',
                    transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 16px 50px rgba(75,31,140,0.14)';
                    e.currentTarget.style.borderColor = 'rgba(217,166,46,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(75,31,140,0.07)';
                    e.currentTarget.style.borderColor = 'rgba(75,31,140,0.08)';
                  }}
                >
                  <Quote className="absolute top-5 right-5 w-8 h-8 opacity-10" style={{ color: '#4B1F8C' }} />
                  <StarRating rating={testimonial.rating} />
                  <p className="mt-4 mb-6 text-sm leading-relaxed flex-1" style={{ color: '#4B5563' }}>
                    "{testimonial.comment}"
                  </p>
                  <div
                    className="inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{ background: '#EEE8FF', color: '#4B1F8C' }}
                  >
                    {testimonial.treatment}
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      style={{ border: '2px solid rgba(217,166,46,0.4)' }}
                    />
                    <div>
                      <p className="text-sm font-bold" style={{ color: '#1F1B2E' }}>{testimonial.name}</p>
                      <p className="text-xs" style={{ color: '#9CA3AF' }}>Paciente verificado ✓</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8"
        >
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6" style={{ color: '#D9A62E', fill: '#D9A62E' }} />
            ))}
          </div>
          <p className="text-sm font-semibold" style={{ color: '#6B7280' }}>
            <span className="text-2xl font-black" style={{ color: '#1F1B2E' }}>5.0</span>
            {' '}— Calificación promedio de nuestros pacientes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
