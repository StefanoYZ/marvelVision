import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../constants';
import { FaWhatsapp } from 'react-icons/fa';
import { Clock, MapPin, Phone } from 'lucide-react';

const infoItems = [
  {
    icon: Clock,
    title: 'Horario de atención',
    lines: ['Lun – Vie: 9:00 am – 7:00 pm', 'Sáb: 9:00 am – 1:00 pm'],
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    lines: ['Av. España 890, Trujillo', 'La Libertad, Perú'],
  },
  {
    icon: Phone,
    title: 'Contacto',
    lines: ['+51 999 999 999', 'marvelvision@email.com'],
  },
];

export default function CTA() {
  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple via-purple-medium to-gold" />

      {/* Background blob */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-purple-light/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-dark via-purple to-purple-medium shadow-2xl shadow-purple/30 p-10 md:p-16 text-center mb-20"
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute top-8 left-8 w-3 h-3 rounded-full bg-gold/60" />
          <div className="absolute bottom-8 right-12 w-5 h-5 rounded-full bg-gold/40" />
          <div className="absolute top-12 right-24 w-2 h-2 rounded-full bg-white/40" />

          {/* Eye icon decoration */}
          <div className="relative z-10">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 border border-white/20 mb-8"
            >
              <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-gold">
                <ellipse cx="24" cy="24" rx="18" ry="12" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="24" cy="24" r="2.5" fill="currentColor" />
              </svg>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Tu visión merece<br />
              <span className="text-gold">atención experta</span>
            </h2>
            <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              No esperes a que los problemas visuales avancen. Agenda tu consulta hoy mismo y descubre por qué miles de pacientes confían en Marvelvision.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-amber-400 text-white font-bold px-10 py-5 rounded-full text-base transition-all duration-300 shadow-xl shadow-gold/30"
              >
                <FaWhatsapp className="text-2xl" />
                Agendar cita por WhatsApp
              </motion.a>
              <motion.a
                href="tel:+51999999999"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 bg-white/15 hover:bg-white/25 text-white font-semibold px-10 py-5 rounded-full text-base transition-all duration-300 border border-white/20"
              >
                <Phone size={20} />
                Llamar ahora
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Info cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoItems.map(({ icon: Icon, title, lines }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-md border border-purple-light/50 flex items-start gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-light flex items-center justify-center shrink-0">
                <Icon size={22} className="text-purple" />
              </div>
              <div>
                <h3 className="font-bold text-purple-dark mb-2">{title}</h3>
                {lines.map((l) => (
                  <p key={l} className="text-brand-text/65 text-sm">{l}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
