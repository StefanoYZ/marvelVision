import { motion } from 'framer-motion';
import { benefitsData } from '../data/benefitsData';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative py-6 px-4"
      style={{ background: '#F8F7FC' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          style={{ transform: 'translateY(0)' }}
        >
          {benefitsData.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-white cursor-default"
                style={{
                  boxShadow: '0 4px 20px rgba(75,31,140,0.08)',
                  border: '1px solid rgba(75,31,140,0.06)',
                  transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(75,31,140,0.16)';
                  e.currentTarget.style.borderColor = 'rgba(217,166,46,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(75,31,140,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(75,31,140,0.06)';
                }}
              >
                {/* Gold top border accent */}
                <div
                  className="absolute top-0 left-6 right-6 h-0.5 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, #C9920A, #E8A820)' }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #EEE8FF, #F8F7FC)' }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#4B1F8C' }} />
                </motion.div>

                {/* Text */}
                <div>
                  <h3 className="text-base font-bold mb-1" style={{ color: '#1F1B2E' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
