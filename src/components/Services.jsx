import { motion } from 'framer-motion';
import { ArrowRight, Circle, Droplets, Eye, Scissors, Zap } from 'lucide-react';
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
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section
      id="servicios"
      className="section-spacing px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F7FC 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20"
          style={{ border: '2px solid #D9A62E' }}
        />
        <div
          className="absolute -bottom-24 right-10 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: '#4B1F8C' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 lg:mb-14"
        >
          <span className="section-label">NUESTROS SERVICIOS</span>
          <div className="flex justify-center">
            <div className="gold-line" />
          </div>
          <h2
            className="section-title font-black leading-tight mb-4"
            style={{ color: '#1F1B2E' }}
          >
            Soluciones integrales para{' '}
            <span style={{ color: '#4B1F8C' }}>tu visión</span>
          </h2>
          <p className="section-copy leading-relaxed max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
            Tecnología de vanguardia, especialistas certificados y un enfoque humano
            para proteger lo más importante: tu salud visual.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Eye;

            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative min-h-[230px] rounded-2xl bg-white overflow-hidden"
                style={{
                  boxShadow: '0 16px 44px rgba(75,31,140,0.09)',
                  border: '1px solid rgba(75,31,140,0.07)',
                }}
              >
                <div
                  className="absolute -left-14 -top-14 w-32 h-32 rounded-full opacity-20 pointer-events-none"
                  style={{ border: '2px solid #D9A62E' }}
                />

                <div className="grid h-full grid-cols-1 sm:grid-cols-[42%_1fr]">
                  <div className="relative min-h-[170px] sm:min-h-[230px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: service.imagePosition || 'center' }}
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.78) 100%)',
                      }}
                    />
                  </div>

                  <div className="relative flex min-h-[230px] flex-col p-6">
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,247,252,0.88) 100%)',
                      }}
                    />

                    <div className="relative z-10 flex h-full flex-col">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                        style={{ background: 'linear-gradient(135deg, #EEE8FF, #F6F2FF)' }}
                      >
                        <Icon
                          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: '#6B3BBF' }}
                        />
                      </div>

                      <h3 className="text-lg font-black mb-3" style={{ color: '#1F1B2E' }}>
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed flex-1" style={{ color: '#6B7280' }}>
                        {service.description}
                      </p>

                      <a
                        href={WHATSAPP_URL}
                        id={`service-link-${service.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-xs font-black transition-all duration-200"
                        style={{ color: '#4B1F8C', textDecoration: 'none' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#D9A62E'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#4B1F8C'; }}
                      >
                        Más información
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}

          <motion.article
            variants={cardVariants}
            className="relative min-h-[230px] rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, #2B145F 0%, #4B1F8C 58%, #6B3BBF 100%)',
              boxShadow: '0 20px 60px rgba(75,31,140,0.25)',
            }}
          >
            <div
              className="absolute -top-20 -right-16 w-56 h-56 rounded-full opacity-20"
              style={{ background: '#D9A62E' }}
            />
            <div
              className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full opacity-20"
              style={{ background: '#EEE8FF' }}
            />

            <div
              className="relative z-10 w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4"
              style={{ borderColor: 'rgba(217,166,46,0.5)', background: 'rgba(255,255,255,0.08)' }}
            >
              <Eye className="w-8 h-8" style={{ color: '#D9A62E' }} />
            </div>
            <h3 className="relative z-10 text-xl font-black text-white mb-3">
              ¿Tienes otra consulta?
            </h3>
            <p className="relative z-10 text-sm mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Contáctanos por WhatsApp y te orientamos sobre el mejor tratamiento para ti.
            </p>
            <a
              href={WHATSAPP_URL}
              id="services-whatsapp-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300"
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
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
