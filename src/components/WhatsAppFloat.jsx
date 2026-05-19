import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_URL } from '../constants';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      id="whatsapp-float-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full"
      style={{
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: '0 8px 30px rgba(37,211,102,0.4)',
      }}
    >
      {/* Pulse ring */}
      <motion.span
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-full"
        style={{ background: '#25D366' }}
      />
      <FaWhatsapp className="w-7 h-7 text-white relative z-10" />
    </motion.a>
  );
}
