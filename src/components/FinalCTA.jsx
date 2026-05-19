import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../constants';
import { FaWhatsapp } from 'react-icons/fa';
import { CalendarDays } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative py-28 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2B145F 0%, #4B1F8C 50%, #6B3BBF 100%)',
      }}
    >
      {/* Background abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-15"
          style={{ background: '#D9A62E' }}
        />
        <div
          className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: '#F2B544' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ border: '80px solid #D9A62E' }}
        />
        {/* Grid dots */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{
                background: 'rgba(217,166,46,0.15)',
                border: '2px solid rgba(217,166,46,0.4)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <CalendarDays className="w-10 h-10" style={{ color: '#D9A62E' }} />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Da el primer paso hacia una{' '}
            <span style={{ color: '#D9A62E' }}>mejor visión</span>
          </h2>

          {/* Subtext */}
          <p
            className="text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            Agenda tu cita por WhatsApp y recibe una{' '}
            <strong className="text-white font-semibold">atención personalizada</strong>{' '}
            de parte de la Dra. María Victoria Romero.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={WHATSAPP_URL}
              id="final-cta-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 px-10 py-5 rounded-2xl text-lg font-black"
              style={{
                background: 'linear-gradient(135deg, #D9A62E, #F2B544)',
                color: '#1F1B2E',
                boxShadow: '0 12px 40px rgba(217,166,46,0.4)',
                textDecoration: 'none',
              }}
            >
              <FaWhatsapp className="w-6 h-6" />
              Agendar por WhatsApp
            </motion.a>
          </div>

          {/* Reassurance text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-sm"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            ✓ Sin largas esperas &nbsp;·&nbsp; ✓ Atención personalizada &nbsp;·&nbsp; ✓ Tecnología de vanguardia
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
