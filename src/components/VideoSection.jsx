import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, X, Volume2, VolumeX } from 'lucide-react';

export default function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  const VIDEO_SRC = '/video/clinicavideo.mp4';

  // ── Inline preview: play/pause the background video ──
  const togglePreviewPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  // ── Open modal with full video ──
  const openModal = () => {
    // Pause inline preview
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setIsModalOpen(false);
  };

  return (
    <section
      id="video"
      className="section-spacing px-4"
      style={{ background: 'linear-gradient(135deg, #EEE8FF 0%, #F8F7FC 60%, #ffffff 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">CONOCE NUESTRA ATENCIÓN</span>
          <div className="flex justify-center">
            <div className="gold-line" />
          </div>
          <h2
            className="section-title font-black leading-tight mb-4"
            style={{ color: '#1F1B2E' }}
          >
            Una experiencia pensada para{' '}
            <span style={{ color: '#4B1F8C' }}>cuidar tu visión</span>
          </h2>
          <p className="section-copy leading-relaxed max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            En Marvelvision combinamos tecnología, experiencia médica y trato humano
            para acompañarte en cada etapa de tu salud visual.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full rounded-3xl overflow-hidden group"
          style={{
            aspectRatio: '16/9',
            boxShadow: '0 30px 80px rgba(75,31,140,0.2)',
            background: '#0d0820',
          }}
        >
          {/* Inline video — plays muted as preview */}
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            className="absolute inset-0 w-full h-full object-cover"
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            poster=""
          />

          {/* Dark overlay when paused */}
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              background: isPlaying
                ? 'rgba(0,0,0,0.05)'
                : 'linear-gradient(135deg, rgba(43,20,95,0.6) 0%, rgba(27,13,60,0.4) 100%)',
            }}
          />

          {/* Gold border ring on hover */}
          <div
            className="absolute inset-2 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-yellow-400/25 pointer-events-none"
          />

          {/* Play / Expand Button — center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={isPlaying ? openModal : togglePreviewPlay}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
              style={{
                background: isPlaying
                  ? 'rgba(75,31,140,0.7)'
                  : 'linear-gradient(135deg, #4B1F8C, #6B3BBF)',
                border: '3px solid #C8920A',
                backdropFilter: 'blur(8px)',
                opacity: isPlaying ? 0 : 1,
              }}
              onMouseEnter={(e) => { if (isPlaying) e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={(e) => { if (isPlaying) e.currentTarget.style.opacity = '0'; }}
              aria-label={isPlaying ? 'Expandir video' : 'Reproducir video'}
            >
              {isPlaying ? (
                <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              ) : (
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white" style={{ marginLeft: '4px' }} />
              )}
            </motion.button>
          </div>

          {/* Bottom controls bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex items-end justify-between">
            {/* Left: Play/Pause + text */}
            <button
              onClick={togglePreviewPlay}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200"
              style={{
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" style={{ marginLeft: '1px' }} />
              )}
              {isPlaying ? 'Pausar' : 'Ver video institucional'}
            </button>

            {/* Right: Mute toggle */}
            {isPlaying && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted(!isMuted);
                  if (videoRef.current) videoRef.current.muted = !isMuted;
                }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(8px)',
                  color: '#fff',
                }}
                aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </motion.button>
            )}
          </div>

          {/* Pulsing ring when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(200,146,10,0.4)',
                    '0 0 0 24px rgba(200,146,10,0)',
                    '0 0 0 0 rgba(200,146,10,0)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full"
              />
            </div>
          )}
        </motion.div>

        {/* Stats below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10"
        >
          {[
            { num: '10+', label: 'Años de trayectoria' },
            { num: '5,000+', label: 'Pacientes atendidos' },
            { num: '5', label: 'Servicios especializados' },
          ].map((stat) => (
            <div key={stat.num} className="text-center p-6 rounded-2xl" style={{ background: 'white', boxShadow: '0 4px 20px rgba(75,31,140,0.06)' }}>
              <div className="text-3xl sm:text-4xl font-black mb-1" style={{ color: '#4B1F8C' }}>
                {stat.num}
              </div>
              <div className="text-sm font-medium" style={{ color: '#9CA3AF' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ══ Full-screen Video Modal ══ */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 30 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 40px 120px rgba(0,0,0,0.6)',
                border: '2px solid rgba(200,146,10,0.3)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                id="video-modal-close"
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                }}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Real MP4 video */}
              <div style={{ aspectRatio: '16/9', background: '#000' }}>
                <video
                  ref={modalVideoRef}
                  src={VIDEO_SRC}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                  style={{ display: 'block' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
