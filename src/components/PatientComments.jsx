import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, HeartHandshake, MessageCircle, Send, ShieldCheck, Sparkles, Star } from 'lucide-react';

const storageKey = 'marvelvision-patient-comments';

const initialForm = {
  name: '',
  treatment: 'Consulta oftalmologica',
  rating: 5,
  comment: '',
};

const treatmentOptions = [
  'Consulta oftalmologica',
  'Cirugia de catarata',
  'Cirugia refractiva laser',
  'Cirugia de pterigion',
  'Superficie ocular',
  'Retina y glaucoma',
];

const encodeFormData = (data) => new URLSearchParams(data).toString();

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Revision cuidadosa',
    text: 'Cada comentario nos ayuda a evaluar la experiencia completa del paciente.',
  },
  {
    icon: HeartHandshake,
    title: 'Atencion mas humana',
    text: 'Tu opinion permite mejorar tiempos, comunicacion y acompanamiento.',
  },
  {
    icon: CheckCircle2,
    title: 'Confianza para nuevos pacientes',
    text: 'Las experiencias reales orientan a quienes buscan cuidar su salud visual.',
  },
];

function RatingInput({ rating, onChange }) {
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => onChange(value)}
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
          style={{
            background: value <= rating ? 'rgba(217,166,46,0.14)' : '#F8F7FC',
            border: value <= rating ? '1px solid rgba(217,166,46,0.5)' : '1px solid rgba(75,31,140,0.08)',
            color: value <= rating ? '#D9A62E' : '#9CA3AF',
          }}
          aria-label={`${value} estrellas`}
        >
          <Star className="w-5 h-5" fill={value <= rating ? 'currentColor' : 'none'} />
        </button>
      ))}
    </div>
  );
}

export default function PatientComments() {
  const [form, setForm] = useState(initialForm);
  const [comments, setComments] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedComments = window.localStorage.getItem(storageKey);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(comments));
  }, [comments]);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextComment = {
      ...form,
      id: crypto.randomUUID(),
      name: form.name.trim(),
      comment: form.comment.trim(),
    };

    if (!nextComment.name || !nextComment.comment) return;

    setComments((current) => [nextComment, ...current].slice(0, 6));
    setForm(initialForm);
    setSubmitted(true);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({
          'form-name': 'patient-comment',
          name: nextComment.name,
          treatment: nextComment.treatment,
          rating: String(nextComment.rating),
          comment: nextComment.comment,
        }),
      });
    } catch {
      // The local preview has no form endpoint; the UI still keeps the comment locally.
    }
  };

  return (
    <section
      id="comentarios"
      className="relative section-spacing px-4 overflow-hidden"
      style={{ background: '#ffffff' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 -left-20 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: '#4B1F8C' }}
        />
        <div
          className="absolute bottom-10 -right-20 w-96 h-96 rounded-full opacity-15 blur-3xl"
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
          <span className="section-label">TU EXPERIENCIA IMPORTA</span>
          <div className="flex justify-center">
            <div className="gold-line" />
          </div>
          <h2
            className="section-title font-black leading-tight mb-4"
            style={{ color: '#1F1B2E' }}
          >
            Comparte tu comentario sobre{' '}
            <span style={{ color: '#4B1F8C' }}>Marvelvision</span>
          </h2>
          <p className="section-copy leading-relaxed max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Tu opinion ayuda a otros pacientes a tomar una decision informada y nos
            permite seguir mejorando cada detalle de la atencion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-stretch">
          <motion.form
            name="patient-comment"
            method="POST"
            data-netlify="true"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            onSubmit={handleSubmit}
            className="rounded-3xl p-6 sm:p-8"
            style={{
              background: 'linear-gradient(135deg, #2B145F 0%, #4B1F8C 55%, #6B3BBF 100%)',
              boxShadow: '0 28px 80px rgba(75,31,140,0.28)',
            }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(217,166,46,0.16)', border: '1px solid rgba(217,166,46,0.35)' }}
              >
                <MessageCircle className="w-6 h-6" style={{ color: '#D9A62E' }} />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">Agregar comentario</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.62)' }}>
                  Completa tus datos y califica tu experiencia.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <input type="hidden" name="form-name" value="patient-comment" />
              <label className="block">
                <span className="block text-sm font-bold mb-2" style={{ color: '#F5D878' }}>
                  Nombre del paciente
                </span>
                <input
                  type="text"
                  value={form.name}
                  name="name"
                  onChange={(event) => updateField('name', event.target.value)}
                  placeholder="Escribe tu nombre"
                  className="w-full px-4 py-3 rounded-2xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.22)',
                    color: '#ffffff',
                  }}
                  required
                />
              </label>

              <label className="block">
                <span className="block text-sm font-bold mb-2" style={{ color: '#F5D878' }}>
                  Servicio recibido
                </span>
                <select
                  value={form.treatment}
                  name="treatment"
                  onChange={(event) => updateField('treatment', event.target.value)}
                  className="w-full px-4 py-3 rounded-2xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.22)',
                    color: '#ffffff',
                  }}
                >
                  {treatmentOptions.map((option) => (
                    <option key={option} value={option} style={{ color: '#1F1B2E' }}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <div>
                <span className="block text-sm font-bold mb-2" style={{ color: '#F5D878' }}>
                  Calificacion
                </span>
                <input type="hidden" name="rating" value={form.rating} />
                <RatingInput rating={form.rating} onChange={(value) => updateField('rating', value)} />
              </div>

              <label className="block">
                <span className="block text-sm font-bold mb-2" style={{ color: '#F5D878' }}>
                  Comentario
                </span>
                <textarea
                  value={form.comment}
                  name="comment"
                  onChange={(event) => updateField('comment', event.target.value)}
                  placeholder="Cuentanos como fue tu experiencia..."
                  rows={5}
                  maxLength={320}
                  className="w-full px-4 py-3 rounded-2xl text-sm outline-none resize-none transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.22)',
                    color: '#ffffff',
                  }}
                  required
                />
                <span className="block text-xs mt-2 text-right" style={{ color: 'rgba(255,255,255,0.48)' }}>
                  {form.comment.length}/320
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-7 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-black transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #D9A62E, #F2B544)',
                color: '#1F1B2E',
                boxShadow: '0 12px 34px rgba(217,166,46,0.32)',
              }}
            >
              <Send className="w-4 h-4" />
              Publicar comentario
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-sm font-semibold"
                style={{ color: 'rgba(255,255,255,0.78)' }}
              >
                Gracias por compartir tu experiencia.
              </motion.p>
            )}
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="relative rounded-3xl p-6 sm:p-8 overflow-hidden min-h-full"
            style={{
              background: 'linear-gradient(135deg, #F8F7FC 0%, #FFFFFF 58%, #EEE8FF 100%)',
              border: '1px solid rgba(75,31,140,0.08)',
              boxShadow: '0 24px 70px rgba(75,31,140,0.1)',
            }}
          >
            <div
              className="absolute -top-20 -right-16 w-64 h-64 rounded-full opacity-20 blur-3xl"
              style={{ background: '#D9A62E' }}
            />
            <div
              className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full opacity-15 blur-3xl"
              style={{ background: '#4B1F8C' }}
            />

            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider mb-6"
                style={{ background: '#EEE8FF', color: '#4B1F8C' }}
              >
                <Sparkles className="w-4 h-4" />
                Opiniones que mejoran la atencion
              </div>

              <h3 className="text-3xl sm:text-4xl font-black leading-tight mb-4" style={{ color: '#1F1B2E' }}>
                Tu experiencia puede ayudar a otra persona a decidirse.
              </h3>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#6B7280' }}>
                Cuéntanos cómo fue tu atención, qué tratamiento recibiste y cómo te sentiste durante el proceso.
                El equipo revisa estos comentarios para seguir elevando la calidad del servicio.
              </p>

              <div
                className="rounded-3xl p-6 mb-6"
                style={{
                  background: 'linear-gradient(135deg, #2B145F, #4B1F8C)',
                  boxShadow: '0 18px 50px rgba(75,31,140,0.24)',
                }}
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.68)' }}>
                      Calificacion de pacientes
                    </p>
                    <p className="text-4xl font-black text-white leading-none">5.0</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <Star key={value} className="w-5 h-5" fill="#D9A62E" style={{ color: '#D9A62E' }} />
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.74)' }}>
                  Gracias a cada comentario podemos detectar oportunidades de mejora y mantener una experiencia
                  cercana, clara y confiable.
                </p>
              </div>

              <div className="space-y-4">
                {trustItems.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 p-4 rounded-2xl"
                    style={{
                      background: '#ffffff',
                      border: '1px solid rgba(75,31,140,0.07)',
                      boxShadow: '0 8px 24px rgba(75,31,140,0.06)',
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'linear-gradient(135deg, #EEE8FF, #F8F7FC)' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: '#4B1F8C' }} />
                    </div>
                    <div>
                      <p className="text-sm font-black mb-1" style={{ color: '#1F1B2E' }}>
                        {title}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
