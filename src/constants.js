export const BUSINESS_INFO = {
  brandName: 'Marvelvision',
  displayName: 'Marvelvision Clínica Oftalmológica',
  tagline: 'Clínica Oftalmológica',
  city: 'Trujillo',
  region: 'La Libertad',
  country: 'Perú',
};

export const SPECIALIST_INFO = {
  name: 'Dra. María Victoria Romero Ore',
  cmp: '071096',
  rne: '043154',
};

export const CONTACT_INFO = {
  phone: '+51 947 357 202',
  phoneHref: 'tel:+51947357202',
  whatsappNumber: '51947357202',
  whatsappMessage: 'Hola, deseo agendar una cita en la sede de Trujillo Av. Roma.',
  email: 'contacto@marvelvision.pe',
  scheduleShort: 'Lun-Sáb, 9am-6pm',
  schedule: 'Lun-Sáb, 9:00 am - 6:00 pm',
};

export const LOCATION_INFO = {
  street: 'Av. Roma 461, Urb. San Nicolas',
  city: BUSINESS_INFO.city,
  region: BUSINESS_INFO.region,
  country: BUSINESS_INFO.country,
  get address() {
    return `${this.street}, ${this.city}, ${this.region}`;
  },
  get fullAddress() {
    return `${this.street}, ${this.city}, ${this.region}, ${this.country}`;
  },
};

export const BRAND_ASSETS = {
  logo: '/gallery/Logo.png',
  logoLight: '/gallery/Logo.png',
  fallbackLogo: '/gallery/Logo.png',
  logoOnDarkFilter: 'brightness(0) invert(1) drop-shadow(0 8px 18px rgba(0,0,0,0.38))',
};

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=100093640164310&locale=es_LA',
  instagram: 'https://www.instagram.com/dra.mariavictoriaromero/?hl=es',
  tiktok: 'https://www.tiktok.com/@dra.mariavictoriaromero?is_from_webapp=1&sender_device=pc',
  youtube: 'https://www.youtube.com/watch?v=mGQ_AN4Oq50',
};

export const MAPS_QUERY = encodeURIComponent(LOCATION_INFO.fullAddress);
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
export const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

export const WHATSAPP_NUMBER = CONTACT_INFO.whatsappNumber;
export const WHATSAPP_MESSAGE = encodeURIComponent(CONTACT_INFO.whatsappMessage);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
