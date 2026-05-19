import { motion } from 'framer-motion';
import { Award, Globe, Users, Star } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const credentials = [
  { id: 1, icon: Award, text: 'Especialista en cirugía de catarata y refractiva' },
  { id: 2, icon: Users, text: 'Miembro de la Sociedad Peruana de Oftalmología' },
  { id: 3, icon: Globe, text: 'Formación nacional e internacional' },
  { id: 4, icon: Star, text: 'Miles de pacientes satisfechos en Trujillo y el norte del Perú' },
];

const credentialVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Specialist() {
  return (
    <section
      id="especialista"
      className="py-24 px-4"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Doctor Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 30px 80px rgba(75,31,140,0.22)' }}
            >
              <img
                src="/doctor/doctor.png"
                alt="Doctora especialista Marvelvision"
                className="w-full h-full object-cover object-top"
              />
              {/* Gradient overlay bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{ background: 'linear-gradient(0deg, rgba(43,20,95,0.75) 0%, transparent 100%)' }}
              />
              {/* Gold corner accent */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: 'linear-gradient(90deg, #C9920A, #E8A820, #C9920A)' }}
              />
            </div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 p-5 rounded-2xl"
              style={{
                background: 'white',
                boxShadow: '0 20px 60px rgba(75,31,140,0.15)',
                border: '1px solid rgba(201,146,10,0.3)',
              }}
            >
              <p className="text-xs font-bold mb-0.5" style={{ color: '#4B1F8C' }}>CMP: 000000</p>
              <p className="text-xs font-bold" style={{ color: '#4B1F8C' }}>RNE: 00000</p>
              <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>Colegiatura activa</p>
            </motion.div>

            <div
              className="absolute -top-6 -left-6 w-16 h-16 rounded-xl opacity-30"
              style={{ background: 'linear-gradient(135deg, #C9920A, #E8A820)', transform: 'rotate(-10deg)' }}
            />
          </motion.div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label">CONOCE A LA ESPECIALISTA</span>
              <div className="gold-line" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-2" style={{ color: '#1F1B2E' }}>
                Dra. María Victoria
              </h2>
              <h3 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: '#4B1F8C' }}>
                Romero Ore
              </h3>
              <p className="text-base font-semibold tracking-widest uppercase mb-6" style={{ color: '#C9920A' }}>
                Oftalmóloga
              </p>
              <p className="text-lg leading-relaxed mb-10" style={{ color: '#6B7280' }}>
                Más de{' '}
                <strong className="font-bold" style={{ color: '#1F1B2E' }}>10 años de experiencia</strong>{' '}
                dedicados a brindar soluciones integrales con calidad humana, ética
                y tecnología de vanguardia.
              </p>
            </motion.div>

            <motion.ul
              variants={credentialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4 mb-10"
            >
              {credentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <motion.li key={cred.id} variants={itemVariants} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #EEE8FF, #F0EBFF)' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: '#4B1F8C' }} />
                    </div>
                    <span className="text-base font-medium" style={{ color: '#1F1B2E' }}>{cred.text}</span>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href={WHATSAPP_URL}
                id="specialist-whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #4B1F8C, #6B3BBF)',
                  color: 'white',
                  boxShadow: '0 8px 30px rgba(75,31,140,0.3)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 14px 40px rgba(75,31,140,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(75,31,140,0.3)';
                }}
              >
                Agendar con la Dra.
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
