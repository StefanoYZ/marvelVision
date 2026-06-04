import { motion } from 'framer-motion';
import { BRAND_ASSETS, BUSINESS_INFO } from '../constants';

const goldGradient = 'linear-gradient(135deg, #5C3A00 0%, #A07010 14%, #C8920A 32%, #F5D878 50%, #E8B830 66%, #C8920A 82%, #5C3A00 100%)';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 42%, #6B3BBF 0%, #4B1F8C 34%, #2B145F 74%, #16072F 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="loader-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.4" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#loader-dots)" />
        </svg>
      </div>

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.16, 0.28, 0.16] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[360px] h-[360px] rounded-full"
        style={{ background: '#D9A62E', filter: 'blur(90px)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative mb-8 rounded-3xl px-8 py-6"
          style={{
            background: 'rgba(43,20,95,0.28)',
            border: '1px solid rgba(255,255,255,0.18)',
            backdropFilter: 'blur(18px)',
            boxShadow: '0 26px 80px rgba(0,0,0,0.24)',
          }}
        >
          <img
            src={BRAND_ASSETS.logoLight}
            alt={BUSINESS_INFO.displayName}
            className="h-24 sm:h-28 w-auto object-contain"
            style={{ filter: BRAND_ASSETS.logoOnDarkFilter }}
            onError={(e) => {
              e.currentTarget.src = BRAND_ASSETS.logo;
              e.currentTarget.style.filter = BRAND_ASSETS.logoOnDarkFilter;
            }}
          />
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="h-1 rounded-full mb-5 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.16)' }}
        >
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.15, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-24 rounded-full"
            style={{ background: goldGradient }}
          />
        </motion.div>

        <motion.p
          animate={{ opacity: [0.62, 1, 0.62] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-sm font-semibold tracking-[0.22em] uppercase"
          style={{ color: 'rgba(255,255,255,0.78)' }}
        >
          
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
