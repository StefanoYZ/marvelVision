import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import {
  BRAND_ASSETS,
  BUSINESS_INFO,
  CONTACT_INFO,
  LOCATION_INFO,
  SOCIAL_LINKS,
  WHATSAPP_URL,
} from '../constants';

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Comentarios', href: '#comentarios' },
  { label: 'Especialista', href: '#especialista' },
  { label: 'Ubicacion', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
];

const servicesList = [
  'Cirugia de catarata',
  'Cirugia refractiva laser',
  'Cirugia de pterigion',
  'Superficie ocular',
  'Retina y glaucoma',
];

const socialLinks = [
  { icon: FaFacebook, href: SOCIAL_LINKS.facebook, label: 'Facebook', id: 'footer-facebook' },
  { icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: 'Instagram', id: 'footer-instagram' },
  { icon: FaTiktok, href: SOCIAL_LINKS.tiktok, label: 'TikTok', id: 'footer-tiktok' },
  { icon: FaYoutube, href: SOCIAL_LINKS.youtube, label: 'YouTube', id: 'footer-youtube' },
  { icon: FaWhatsapp, href: WHATSAPP_URL, label: 'WhatsApp', id: 'footer-whatsapp' },
];

const handleNavClick = (e, href) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
};

export default function Footer() {
  return (
    <footer style={{ background: '#2B145F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div
              className="inline-flex items-center mb-5"
              style={{
                filter: BRAND_ASSETS.logoOnDarkFilter,
              }}
            >
              <img
                src={BRAND_ASSETS.logoLight}
                alt={BUSINESS_INFO.displayName}
                className="object-contain"
                style={{
                  width: '210px',
                  maxWidth: '100%',
                }}
                onError={(e) => {
                  e.currentTarget.src = BRAND_ASSETS.fallbackLogo;
                  e.currentTarget.style.filter = BRAND_ASSETS.logoOnDarkFilter;
                }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Cuidamos tus ojos con tecnologia de vanguardia y un enfoque humano
              para que vivas con una mejor vision.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label, id }) => (
                <a
                  key={id}
                  id={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#D9A62E';
                    e.currentTarget.style.background = 'rgba(217,166,46,0.15)';
                    e.currentTarget.style.borderColor = 'rgba(217,166,46,0.4)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#D9A62E' }}>
              Navegacion
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm transition-all duration-200"
                    style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
                    onMouseEnter={(e) => { e.target.style.color = '#D9A62E'; e.target.style.paddingLeft = '6px'; }}
                    onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.6)'; e.target.style.paddingLeft = '0'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#D9A62E' }}>
              Servicios
            </h4>
            <ul className="space-y-3">
              {servicesList.map((service) => (
                <li key={service}>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-all duration-200"
                    style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
                    onMouseEnter={(e) => { e.target.style.color = '#D9A62E'; }}
                    onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.6)'; }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#D9A62E' }}>
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#D9A62E' }} />
                <div>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>{CONTACT_INFO.phone}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{CONTACT_INFO.scheduleShort}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#D9A62E' }} />
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>{CONTACT_INFO.email}</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#D9A62E' }} />
                <div>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>{LOCATION_INFO.street}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{LOCATION_INFO.country}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} {BUSINESS_INFO.displayName}. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            {BUSINESS_INFO.city}, {BUSINESS_INFO.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
