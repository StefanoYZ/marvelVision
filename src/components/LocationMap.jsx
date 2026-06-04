import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  BUSINESS_INFO,
  CONTACT_INFO,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
  LOCATION_INFO,
  WHATSAPP_URL,
} from '../constants';

const contactItems = [
  {
    icon: MapPin,
    title: 'Direccion',
    text: LOCATION_INFO.address,
  },
  {
    icon: Clock,
    title: 'Horario',
    text: CONTACT_INFO.schedule,
  },
  {
    icon: Phone,
    title: 'Telefono',
    text: CONTACT_INFO.phone,
  },
  {
    icon: Mail,
    title: 'Correo',
    text: CONTACT_INFO.email,
  },
];

export default function LocationMap() {
  return (
    <section
      id="ubicacion"
      className="relative section-spacing px-4 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F7FC 52%, #EEE8FF 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-20 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: '#4B1F8C' }}
        />
        <div
          className="absolute -bottom-28 -left-20 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: '#D9A62E' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">VISITANOS EN TRUJILLO</span>
          <div className="flex justify-center">
            <div className="gold-line" />
          </div>
          <h2
            className="section-title font-black leading-tight mb-4"
            style={{ color: '#1F1B2E' }}
          >
            Encuentranos de forma{' '}
            <span style={{ color: '#4B1F8C' }}>rapida y sencilla</span>
          </h2>
          <p className="section-copy leading-relaxed max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Estamos ubicados en una zona accesible de Trujillo para que puedas llegar
            sin complicaciones a tu consulta oftalmologica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="relative rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[420px]"
            style={{
              boxShadow: '0 30px 80px rgba(75,31,140,0.18)',
              border: '1px solid rgba(201,146,10,0.32)',
              background: '#ffffff',
            }}
          >
            <iframe
              title="Ubicacion de Marvelvision en Google Maps"
              src={GOOGLE_MAPS_EMBED_URL}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              allowFullScreen
            />
            <div
              className="absolute top-4 left-4 right-4 sm:right-auto p-4 rounded-2xl max-w-sm"
              style={{
                background: 'rgba(43,20,95,0.88)',
                color: '#fff',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.18)',
                boxShadow: '0 16px 45px rgba(43,20,95,0.24)',
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #D9A62E, #F2B544)' }}
                >
                  <MapPin className="w-5 h-5" style={{ color: '#1F1B2E' }} />
                </div>
                <div>
                  <p className="text-sm font-black mb-1">{BUSINESS_INFO.brandName}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                    {LOCATION_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="rounded-3xl p-6 sm:p-8 lg:p-9 flex flex-col"
            style={{
              background: '#ffffff',
              boxShadow: '0 20px 60px rgba(75,31,140,0.1)',
              border: '1px solid rgba(75,31,140,0.08)',
            }}
          >
            <div className="mb-7">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                style={{ background: '#EEE8FF', color: '#4B1F8C' }}
              >
                <MapPin className="w-3.5 h-3.5" />
                Ubicacion principal
              </span>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight mb-3" style={{ color: '#1F1B2E' }}>
                Agenda tu visita y llega directo a la clinica
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#6B7280' }}>
                Consulta la ruta desde Google Maps, revisa nuestros datos de contacto
                y confirma tu cita por WhatsApp en pocos pasos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 mb-8">
              {contactItems.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-2xl"
                  style={{
                    background: '#F8F7FC',
                    border: '1px solid rgba(75,31,140,0.06)',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg, #EEE8FF, #F0EBFF)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: '#4B1F8C' }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#C8920A' }}>
                      {title}
                    </p>
                    <p className="text-sm font-semibold leading-relaxed" style={{ color: '#1F1B2E' }}>
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #4B1F8C, #6B3BBF)',
                  color: '#fff',
                  boxShadow: '0 8px 26px rgba(75,31,140,0.28)',
                  textDecoration: 'none',
                }}
              >
                <Navigation className="w-4 h-4" />
                Como llegar
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #D9A62E, #F2B544)',
                  color: '#1F1B2E',
                  boxShadow: '0 8px 26px rgba(217,166,46,0.32)',
                  textDecoration: 'none',
                }}
              >
                <FaWhatsapp className="w-4 h-4" />
                Agendar cita
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
