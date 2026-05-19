import { motion } from 'framer-motion';
import { Eye, Zap, Scissors, Droplets, Circle } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { WHATSAPP_URL } from '../constants';

const iconMap = {
  cataract: Eye,
  laser: Zap,
  pterigion: Scissors,
  surface: Droplets,
  retina: Circle,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 px-4"
      style={{ background: '#F8F7FC' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label">NUESTROS SERVICIOS</span>
          <div className="flex justify-center">
            <div className="gold-line" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4"
            style={{ color: '#1F1B2E' }}
          >
            Soluciones integrales para{' '}
            <span style={{ color: '#4B1F8C' }}>tu visión</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Ofrecemos tratamientos especializados con tecnología de vanguardia y
            el más alto estándar de calidad médica.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Eye;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative flex flex-col p-8 rounded-2xl bg-white cursor-default"
                style={{
                  boxShadow: '0 4px 20px rgba(75,31,140,0.06)',
                  border: '1px solid rgba(75,31,140,0.08)',
                  transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(75,31,140,0.15)';
                  e.currentTarget.style.borderColor = 'rgba(217,166,46,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(75,31,140,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(75,31,140,0.08)';
                }}
              >
                {/* Top gold accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, #D9A62E, #F2B544)' }}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #EEE8FF, #F0EBFF)' }}
                  >
                    <Icon
                      className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: '#4B1F8C' }}
                    />
                  </div>
                  {/* Gold dot */}
                  <div
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white"
                    style={{ background: '#D9A62E' }}
                  />
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#1F1B2E' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: '#6B7280' }}
                >
                  {service.description}
                </p>

                {/* CTA Link */}
                <a
                  href={WHATSAPP_URL}
                  id={`service-link-${service.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-2 text-sm font-bold transition-all duration-200"
                  style={{ color: '#4B1F8C', textDecoration: 'none' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#D9A62E'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#4B1F8C'; }}
                >
                  Consultar servicio
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center justify-center p-8 rounded-2xl text-center"
            style={{
              background: 'linear-gradient(135deg, #4B1F8C, #6B3BBF)',
              boxShadow: '0 20px 60px rgba(75,31,140,0.25)',
            }}
          >
            <div
              className="w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4"
              style={{ borderColor: 'rgba(217,166,46,0.5)' }}
            >
              <Eye className="w-8 h-8" style={{ color: '#D9A62E' }} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              ¿Tienes otra consulta?
            </h3>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Contáctanos por WhatsApp y te orientamos sobre el mejor tratamiento para ti.
            </p>
            <a
              href={WHATSAPP_URL}
              id="services-whatsapp-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #D9A62E, #F2B544)',
                color: '#1F1B2E',
                boxShadow: '0 8px 25px rgba(217,166,46,0.3)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(217,166,46,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(217,166,46,0.3)';
              }}
            >
              Agendar por WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
