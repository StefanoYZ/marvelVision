import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

const problems = [
  { id: 1, text: 'Visión borrosa o cansancio visual' },
  { id: 2, text: 'Dificultad para ver de cerca o de lejos' },
  { id: 3, text: 'Molestias por luces o pantallas' },
  { id: 4, text: 'Sequedad, irritación o enrojecimiento' },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ProblemsSection() {
  return (
    <section
      id="problemas"
      className="py-24 px-4"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Main image area */}
            <div
              className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden"
              style={{
                boxShadow: '0 30px 80px rgba(75,31,140,0.25)',
              }}
            >
              <img
                src="/gallery/procedimiento.png"
                alt="Procedimiento oftalmológico especializado en Marvelvision"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 30%' }}
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{ background: 'linear-gradient(0deg, rgba(43,20,95,0.8) 0%, transparent 100%)' }}
              />
              {/* Gold accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: 'linear-gradient(90deg, #5C3A00, #C8920A, #F5D878, #C8920A, #5C3A00)' }}
              />
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 p-5 rounded-2xl"
              style={{
                background: 'white',
                boxShadow: '0 20px 60px rgba(75,31,140,0.15)',
                border: '1px solid rgba(217,166,46,0.3)',
                maxWidth: '200px',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #4B1F8C, #6B3BBF)' }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-bold" style={{ color: '#1F1B2E' }}>
                  5,000+ pacientes
                </span>
              </div>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>
                Recuperaron su visión con nosotros
              </p>
            </motion.div>

            {/* Gold decorative element */}
            <div
              className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl opacity-20"
              style={{ background: 'linear-gradient(135deg, #D9A62E, #F2B544)', transform: 'rotate(15deg)' }}
            />
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">MEJORAMOS TU DÍA A DÍA</span>
              <div className="gold-line" />
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6"
                style={{ color: '#1F1B2E' }}
              >
                Soluciones efectivas para{' '}
                <span style={{ color: '#4B1F8C' }}>problemas visuales</span> comunes
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: '#6B7280' }}>
                Sabemos que los problemas de visión afectan tu calidad de vida.
                En Marvelvision ofrecemos diagnóstico preciso y tratamientos efectivos.
              </p>
            </motion.div>

            {/* Problems list */}
            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4 mb-10"
            >
              {problems.map((problem) => (
                <motion.li
                  key={problem.id}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 rounded-xl group cursor-default"
                  style={{
                    background: '#F8F7FC',
                    border: '1px solid rgba(75,31,140,0.06)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#EEE8FF';
                    e.currentTarget.style.borderColor = 'rgba(75,31,140,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#F8F7FC';
                    e.currentTarget.style.borderColor = 'rgba(75,31,140,0.06)';
                  }}
                >
                  <CheckCircle2
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: '#D9A62E' }}
                  />
                  <span className="text-base font-medium" style={{ color: '#1F1B2E' }}>
                    {problem.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Highlight card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative p-6 rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #4B1F8C, #6B3BBF)',
                boxShadow: '0 12px 40px rgba(75,31,140,0.3)',
              }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute -right-8 -top-8 w-40 h-40 rounded-full"
                  style={{ background: '#D9A62E' }}
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">
                Tenemos la solución que tus ojos{' '}
                <span style={{ color: '#F2B544' }}>necesitan.</span>
              </h3>
              <p className="text-sm leading-relaxed relative z-10" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Diagnóstico preciso, tratamientos efectivos y un equipo que te acompaña en cada paso.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
