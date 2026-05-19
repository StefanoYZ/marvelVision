import { Eye, Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_URL } from '../constants';

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Especialista', href: '#especialista' },
  { label: 'Contacto', href: '#contacto' },
];

const servicesList = [
  'Cirugía de catarata',
  'Cirugía refractiva láser',
  'Cirugía de pterigion',
  'Superficie ocular',
  'Retina y glaucoma',
];

const socialLinks = [
  { icon: FaFacebook, href: '#', label: 'Facebook', id: 'footer-facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram', id: 'footer-instagram' },
  { icon: FaTiktok, href: '#', label: 'TikTok', id: 'footer-tiktok' },
  { icon: FaYoutube, href: '#', label: 'YouTube', id: 'footer-youtube' },
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
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #4B1F8C, #6B3BBF)' }}
              >
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xl font-black text-white leading-none">
                  Marvel<span style={{ color: '#D9A62E' }}>vision</span>
                </p>
                <p className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Clínica Oftalmológica
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Cuidamos tus ojos con tecnología de vanguardia y un enfoque humano
              para que vivas con una mejor visión.
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

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#D9A62E' }}>
              Navegación
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

          {/* Services */}
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

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#D9A62E' }}>
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#D9A62E' }} />
                <div>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>+51 999 999 999</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Lun–Sáb, 9am–6pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#D9A62E' }} />
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>contacto@marvelvision.pe</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#D9A62E' }} />
                <div>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Trujillo, La Libertad</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Perú</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} Marvelvision Clínica Oftalmológica. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Trujillo, Perú</p>
        </div>
      </div>
    </footer>
  );
}
