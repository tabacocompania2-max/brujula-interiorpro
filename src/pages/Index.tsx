import { useState } from "react";

const CHECKOUT_URL = "https://pay.hotmart.com/J105261889Y?checkoutMode=10";
const SCROLL_TARGET_ID = "seccion-recibes-hoy";

const PURPLE = "#6C4FBF";
const PURPLE_LIGHT_BG = "#F7F5FF";
const PURPLE_BADGE_BG = "#EDE9FF";
const TEXT_PRIMARY = "#1A1A2E";
const TEXT_SECONDARY = "#6B6B8A";
const BORDER_LIGHT = "#E5E7EB";
const BORDER_PURPLE_SOFT = "#E0D9F5";

function CtaButton({
  children,
  large = false,
  scrollTo,
}: {
  children: React.ReactNode;
  large?: boolean;
  scrollTo?: string;
}) {
  const commonStyle: React.CSSProperties = {
    display: "inline-block",
    backgroundColor: PURPLE,
    color: "#fff",
    fontWeight: 600,
    fontSize: large ? 18 : 16,
    padding: large ? "18px 32px" : "14px 26px",
    borderRadius: 12,
    textDecoration: "none",
    boxShadow: "0 4px 14px rgba(108,79,191,0.25)",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
  };

  if (scrollTo) {
    return (
      <button
        type="button"
        onClick={() => {
          const el = document.getElementById(scrollTo);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        style={commonStyle}
      >
        {children}
      </button>
    );
  }

  return (
    <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" style={commonStyle}>
      {children}
    </a>
  );
}

function TrustLine({ color = TEXT_SECONDARY }: { color?: string }) {
  return (
    <p style={{ fontSize: 13, color, marginTop: 12 }}>
      🔒 Pago seguro · 📩 Acceso inmediato · 🛡️ 30 días de garantía
    </p>
  );
}

const faqs = [
  {
    q: "¿Qué recibo exactamente al comprar?",
    a: "Recibes acceso inmediato por correo a la Guía Brújula Interior en formato PDF más los 4 bonos. Todo llega a tu correo en menos de 5 minutos después de completar tu compra.",
  },
  {
    q: "¿Es realmente personalizada o es lo mismo para todos?",
    a: "La guía principal está diseñada para trabajar los patrones emocionales más comunes que bloquean a las personas. Los bonos complementan el proceso con herramientas prácticas que puedes aplicar desde el primer día.",
  },
  {
    q: "¿Qué pasa si ya intenté otras cosas y no me funcionaron?",
    a: "Brújula Interior no es motivación genérica ni teoría. Son herramientas prácticas basadas en psicología cognitiva diseñadas para que entiendas TUS patrones específicos y sepas qué hacer con ellos. Si no sientes un cambio en 30 días te devolvemos cada peso.",
  },
  {
    q: "¿Cuánto tiempo necesito dedicarle?",
    a: "Con 10 minutos al día es suficiente para empezar. La guía está estructurada en bloques cortos y prácticos — no en lecturas largas ni procesos complicados.",
  },
];

const HERO_MOCKUP = "/9eafb6e1-e681-4e88-af3e-409de452333f.webp";
const BIG_MOCKUP = "/e8d926b2-caa4-48c0-8e7d-d73b7fa63d7e.webp";

const valueItems = [
  {
    img: "/87890a83-4715-4ef8-b41c-d480cde8923f.webp",
    imgClass: "guia-principal-img",
    alt: "Portada de la Guía Brújula Interior",
    name: "Guía Brújula Interior",
    desc: "Tu guía principal de autodescubrimiento emocional paso a paso",
    value: "$14.97",
  },
  {
    img: "/6cc83157-a060-4ef5-9ce0-bf2e58850b92.webp",
    imgClass: "bono-1-img",
    alt: "Portada del Bono 1: Diario de los 21 días",
    name: "BONO 1: Diario de los 21 días",
    desc: "21 prompts diarios de autorreflexión para ver patrones que nunca habías notado",
    value: "$5",
  },
  {
    img: "/941c6fdf-dff3-40b8-8de9-b75b75569026.webp",
    imgClass: "bono-2-img",
    alt: "Portada del Bono 2: Mapa de mis patrones",
    name: "BONO 2: Mapa de mis patrones",
    desc: "Checklist visual para identificar exactamente qué patrones emocionales se repiten en tu vida",
    value: "$5",
  },
  {
    img: "/237e28f9-3600-4894-8e91-af5880ff1df8.webp",
    imgClass: "bono-3-img",
    alt: "Portada del Bono 3: El Diálogo Interno",
    name: "BONO 3: El Diálogo Interno",
    desc: "Las 10 frases que tu mente repite que te bloquean y cómo reemplazarlas",
    value: "$5",
  },
  {
    img: "/b2065864-0246-4b22-adf8-e01313bf932a.webp",
    imgClass: "bono-4-img",
    alt: "Portada del Bono 4: Tu Primera Semana",
    name: "BONO 4: Tu Primera Semana",
    desc: "Checklist de 7 días con una acción concreta por día para empezar tu proceso",
    value: "$4.97",
  },
];

const stackBonos = [
  { src: "/6cc83157-a060-4ef5-9ce0-bf2e58850b92.webp", alt: "Bono 1", rotate: -8 },
  { src: "/941c6fdf-dff3-40b8-8de9-b75b75569026.webp", alt: "Bono 2", rotate: 0 },
  { src: "/237e28f9-3600-4894-8e91-af5880ff1df8.webp", alt: "Bono 3", rotate: 8 },
];

const forYouItems = [
  "Sientes que llevas años cargando con algo que no puedes soltar",
  'Tu mente no para aunque todo esté "bien" por fuera',
  "Te cuesta poner límites sin sentirte culpable",
  "Repites los mismos patrones en tus relaciones",
  "Sientes que hay una versión de ti que todavía no has podido ser",
  "Ya intentaste otras cosas pero nada te duró",
];

const testimonials = [
  {
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "María C.",
    country: "México 🇲🇽",
    text: "Llevaba años sintiéndome perdida sin entender por qué. Tenía trabajo, amigos, todo — pero por dentro algo no encajaba. Esta guía me ayudó a ver exactamente qué patrones me estaban bloqueando. Por primera vez siento que me entiendo de verdad.",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Valentina L.",
    country: "Argentina 🇦🇷",
    text: "Lo que más me sorprendió fue lo personalizado que se sintió. No era una guía genérica — era exactamente lo que necesitaba para el momento en que estaba. En 3 semanas logré más claridad que en meses buscando respuestas sola.",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Daniela M.",
    country: "Colombia 🇨🇴",
    text: "Fui escéptica al principio porque ya había probado otras cosas. Pero esto fue diferente porque partió de MÍ. El diagnóstico fue preciso y las herramientas prácticas me dieron algo concreto para trabajar.",
  },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div
      style={{
        fontFamily:
          '"Inter", ui-sans-serif, system-ui, -apple-system, sans-serif',
        color: TEXT_PRIMARY,
        backgroundColor: PURPLE_LIGHT_BG,
        lineHeight: 1.6,
      }}
    >
      <style>{`
        .bi-container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
        .bi-section { padding: 36px 0; }
        @media (min-width: 768px) { .bi-section { padding: 52px 0; } }
        .bi-h1 { font-size: 32px; line-height: 1.2; font-weight: 700; color: ${TEXT_PRIMARY}; margin: 16px 0; text-align: center; }
        @media (min-width: 768px) { .bi-h1 { font-size: 42px; } }
        .bi-h2 { font-size: 22px; font-weight: 600; color: ${TEXT_PRIMARY}; text-align: center; margin: 0 0 24px; }
        .bi-grid-2 { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 768px) { .bi-grid-2 { grid-template-columns: 1fr 1fr; gap: 24px; } }
        .bi-grid-3 { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 768px) { .bi-grid-3 { grid-template-columns: repeat(3, 1fr); gap: 24px; } }
        .bi-bullets { list-style: none; padding: 0; margin: 12px 0 0; }
        .bi-bullets li { padding: 6px 0; font-size: 15px; color: ${TEXT_PRIMARY}; }
        .bi-faq-btn { width: 100%; text-align: left; background: #fff; border: 1px solid ${BORDER_PURPLE_SOFT}; border-radius: 12px; padding: 18px 20px; font-size: 16px; font-weight: 600; color: ${TEXT_PRIMARY}; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 12px; font-family: inherit; }
        .bi-faq-btn:hover { border-color: ${PURPLE}; }
        .bi-faq-answer { padding: 0 20px 18px; font-size: 15px; color: ${TEXT_SECONDARY}; }

        .bi-hero-grid { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 24px; }
        .bi-hero-left { display: flex; flex-direction: column; align-items: center; }
        .bi-hero-right { display: flex; justify-content: center; align-items: center; }
        .mockup-principal { width: 100%; max-width: 320px; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(108,79,191,0.18); display: block; }
        @media (min-width: 768px) {
          .bi-hero-grid { display: grid; grid-template-columns: 60% 40%; align-items: center; text-align: left; gap: 32px; }
          .bi-hero-left { align-items: flex-start; text-align: left; }
          .bi-hero-left .bi-h1 { text-align: left; }
          .mockup-principal { max-width: 380px; }
        }

        .bi-bono-card { display: flex; flex-direction: row; align-items: center; text-align: left; gap: 16px; }
        .bi-bono-img { width: 110px; height: 138px; border-radius: 8px; object-fit: cover; flex-shrink: 0; }
        .bi-bono-body { flex: 1; min-width: 0; }
        .bi-bono-card .bi-value { margin-left: auto; padding-left: 12px; flex-shrink: 0; }
        @media (min-width: 768px) {
          .bi-bono-img { width: 130px; height: 162px; }
        }

        .bi-recibes-grid { display: flex; flex-direction: column; gap: 32px; align-items: center; }
        .bi-stack-bonos { position: relative; width: 240px; height: 300px; margin: 0 auto; }
        .bi-stack-bonos img { position: absolute; top: 50%; left: 50%; width: 180px; height: 234px; margin-left: -90px; margin-top: -117px; border-radius: 10px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); object-fit: cover; }
        @media (min-width: 768px) {
          .bi-recibes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
          .bi-stack-bonos { width: 280px; height: 340px; }
          .bi-stack-bonos img { width: 200px; height: 260px; margin-left: -100px; margin-top: -130px; }
        }
      `}</style>

      {/* SECCIÓN 1 — Hero */}
      <section style={{ backgroundColor: "#fff" }} className="bi-section">
        <div className="bi-container">
          <div className="bi-hero-grid">
            <div className="bi-hero-left">
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: PURPLE_BADGE_BG,
                  color: PURPLE,
                  fontSize: 13,
                  fontWeight: 500,
                  padding: "6px 14px",
                  borderRadius: 20,
                }}
              >
                Método Brújula Interior
              </span>
              <h1 className="bi-h1">¿Sientes que te perdiste a ti mismo en el camino?</h1>
              <p
                style={{
                  fontSize: 18,
                  color: TEXT_SECONDARY,
                  maxWidth: 520,
                  margin: "0 0 16px",
                }}
              >
                Brújula Interior es el proceso personalizado que te ayuda a entender tus patrones
                emocionales, soltar lo que ya no te sirve y encontrar el camino de regreso a ti mismo.
              </p>
              <div>
                <CtaButton large scrollTo={SCROLL_TARGET_ID}>
                  Quiero mi guía por $9.97 →
                </CtaButton>
                <TrustLine />
              </div>
            </div>
            <div className="bi-hero-right">
              <img
                src={HERO_MOCKUP}
                alt="Mockup de la Guía Brújula Interior"
                className="mockup-principal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — Antes/Después */}
      <section style={{ backgroundColor: PURPLE_LIGHT_BG }} className="bi-section">
        <div className="bi-container">
          <h2 className="bi-h2">¿Te identificas con esto?</h2>
          <div className="bi-grid-2">
            <div
              style={{
                backgroundColor: "#fff",
                border: `1px solid ${BORDER_LIGHT}`,
                borderRadius: 16,
                padding: 24,
              }}
            >
              <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>
                🌧️ Hoy te sientes así:
              </h3>
              <ul className="bi-bullets">
                <li>• Vives en piloto automático sin saber por qué</li>
                <li>• Repites los mismos patrones una y otra vez</li>
                <li>• Te cuesta poner límites sin sentirte culpable</li>
                <li>• Hay una versión de ti que todavía no has podido ser</li>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: PURPLE_BADGE_BG,
                border: "1px solid #C084FC",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>
                ☀️ En 8 semanas puedes:
              </h3>
              <ul className="bi-bullets">
                <li>
                  <span style={{ color: PURPLE, fontWeight: 700 }}>✓</span> Entender por qué
                  sientes y actúas como lo haces
                </li>
                <li>
                  <span style={{ color: PURPLE, fontWeight: 700 }}>✓</span> Romper los patrones
                  que te tienen atrapado
                </li>
                <li>
                  <span style={{ color: PURPLE, fontWeight: 700 }}>✓</span> Poner límites desde
                  la seguridad, no desde el miedo
                </li>
                <li>
                  <span style={{ color: PURPLE, fontWeight: 700 }}>✓</span> Ser la versión de ti
                  que siempre supiste que existía
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — Value Stack */}
      <section id={SCROLL_TARGET_ID} style={{ backgroundColor: "#fff" }} className="bi-section">
        <div className="bi-container" style={{ maxWidth: 760 }}>
          <h2 className="bi-h2">Todo lo que recibes hoy</h2>
          <p
            style={{
              fontSize: 15,
              color: TEXT_SECONDARY,
              textAlign: "center",
              marginTop: -16,
              marginBottom: 32,
            }}
          >
            Acceso inmediato a todo por correo al completar tu compra
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {valueItems.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: PURPLE_LIGHT_BG,
                  border: `1px solid ${BORDER_PURPLE_SOFT}`,
                  borderRadius: 12,
                  padding: "16px 20px",
                }}
                className="bi-bono-card"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className={`bi-bono-img ${item.imgClass}`}
                  loading="lazy"
                />
                <div className="bi-bono-body">
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{item.name}</div>
                  <div style={{ fontSize: 14, color: TEXT_SECONDARY, marginTop: 2 }}>
                    {item.desc}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 14,
                    color: TEXT_SECONDARY,
                    textDecoration: "line-through",
                    flexShrink: 0,
                  }}
                  className="bi-value"
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <hr
            style={{
              border: 0,
              borderTop: `1px solid ${BORDER_PURPLE_SOFT}`,
              margin: "28px 0 20px",
            }}
          />
          <p
            style={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: 18,
              color: PURPLE,
              margin: "0 0 24px",
            }}
          >
            Valor total: $34.97 — tú pagas solo $9.97
          </p>
          <div style={{ textAlign: "center" }}>
            <CtaButton large>Quiero todo esto por $9.97 →</CtaButton>
            <TrustLine />
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — Para quién es */}
      <section style={{ backgroundColor: PURPLE_LIGHT_BG }} className="bi-section">
        <div className="bi-container" style={{ maxWidth: 820 }}>
          <h2 className="bi-h2">Brújula Interior es para ti si...</h2>
          <div className="bi-grid-2">
            {forYouItems.map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "8px 0" }}
              >
                <span style={{ color: PURPLE, fontWeight: 700, fontSize: 18, lineHeight: 1.4 }}>
                  ✓
                </span>
                <span style={{ fontSize: 15 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — Estadísticas */}
      <section style={{ backgroundColor: "#fff" }} className="bi-section">
        <div className="bi-container">
          <h2 className="bi-h2" style={{ fontSize: 20 }}>
            Personas como tú ya están viendo resultados
          </h2>
          <div className="bi-grid-3" style={{ marginTop: 32 }}>
            {[
              { n: "83%", t: "mejoró su bienestar emocional en 6 semanas" },
              { n: "77%", t: "notó cambios reales desde la primera semana" },
              { n: "50,000+", t: "personas en LATAM ya iniciaron su proceso" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: 24,
                  backgroundColor: PURPLE_LIGHT_BG,
                  borderRadius: 16,
                }}
              >
                <div style={{ fontSize: 32, fontWeight: 700, color: PURPLE }}>{s.n}</div>
                <div style={{ fontSize: 14, color: TEXT_SECONDARY, marginTop: 6 }}>{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 — Testimonios */}
      <section style={{ backgroundColor: PURPLE_LIGHT_BG }} className="bi-section">
        <div className="bi-container">
          <h2 className="bi-h2">Lo que dicen quienes ya empezaron</h2>
          <div className="bi-grid-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 16,
                  padding: 20,
                  border: `1px solid ${BORDER_PURPLE_SOFT}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <img
                    src={t.photo}
                    alt={t.name}
                    width={56}
                    height={56}
                    loading="lazy"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      border: `2px solid ${PURPLE}`,
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15 }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: TEXT_SECONDARY }}>{t.country}</div>
                  </div>
                </div>
                <div style={{ color: "#F5C842", margin: "12px 0 8px", fontSize: 16 }}>
                  ★★★★★
                </div>
                <p style={{ fontStyle: "italic", fontSize: 14.5, color: TEXT_PRIMARY, margin: 0 }}>
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 7 — FAQ */}
      <section style={{ backgroundColor: "#fff" }} className="bi-section">
        <div className="bi-container" style={{ maxWidth: 720 }}>
          <h2 className="bi-h2">Tus dudas, resueltas</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i}>
                  <button
                    className="bi-faq-btn"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    style={{
                      borderColor: open ? PURPLE : BORDER_PURPLE_SOFT,
                      borderBottomLeftRadius: open ? 0 : 12,
                      borderBottomRightRadius: open ? 0 : 12,
                    }}
                  >
                    <span>{f.q}</span>
                    <span style={{ color: PURPLE, fontSize: 20, lineHeight: 1 }}>
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div
                      className="bi-faq-answer"
                      style={{
                        backgroundColor: "#fff",
                        border: `1px solid ${PURPLE}`,
                        borderTop: 0,
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                      }}
                    >
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECCIÓN 8 — Garantía */}
      <section style={{ backgroundColor: PURPLE_LIGHT_BG }} className="bi-section">
        <div className="bi-container">
          <div
            style={{
              backgroundColor: "#F0FDF4",
              border: "1px solid #86EFAC",
              borderRadius: 16,
              padding: 32,
              textAlign: "center",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            <div style={{ fontSize: 32 }}>🛡️</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#15803D", margin: "12px 0" }}>
              Garantía total de 30 días
            </h3>
            <p style={{ fontSize: 15, color: "#166534", margin: "0 0 12px" }}>
              Si en 30 días no sientes un cambio real en cómo te entiendes y te relacionas
              contigo mismo, te devolvemos cada peso. Sin preguntas. Sin formularios. Sin procesos
              complicados. Solo escríbenos y listo.
            </p>
            <p style={{ fontSize: 14, color: "#16A34A", fontWeight: 500, margin: 0 }}>
              El riesgo es nuestro, no tuyo. Tú solo tienes que empezar.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 8.5 — Lo que recibes (mockup completo) */}
      <section style={{ backgroundColor: PURPLE_BADGE_BG, padding: "48px 24px" }}>
        <div className="bi-container" style={{ maxWidth: 980 }}>
          <h2 className="bi-h2">Todo esto es tuyo hoy por solo $9.97</h2>
          <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
            <img
              src="/brujula-stack-completo.webp"
              alt="Brújula Interior: guía principal y 4 bonos incluidos"
              style={{ maxWidth: "100%", width: "100%", height: "auto" }}
              loading="lazy"
            />
          </div>
          <p
            style={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: 18,
              color: PURPLE,
              margin: "32px 0 20px",
            }}
          >
            Valor total: $34.97 — tú pagas solo $9.97
          </p>
          <div style={{ textAlign: "center" }}>
            <CtaButton large>Quiero todo esto por $9.97 →</CtaButton>
            <TrustLine />
          </div>
        </div>
      </section>

      {/* SECCIÓN 9 — CTA Final */}
      <section style={{ backgroundColor: PURPLE, padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#fff", margin: "0 0 12px" }}>
            Tu proceso Brújula Interior empieza hoy
          </h2>
          <p style={{ fontSize: 16, color: PURPLE_BADGE_BG, marginBottom: 24 }}>
            Acceso inmediato a la guía y los 4 bonos por solo $9.97
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#fff",
              color: PURPLE,
              fontWeight: 700,
              fontSize: 18,
              padding: "18px 32px",
              borderRadius: 12,
              textDecoration: "none",
            }}
          >
            Quiero empezar mi proceso →
          </a>
          <TrustLine color={PURPLE_BADGE_BG} />
          <div
            style={{
              marginTop: 24,
              display: "flex",
              justifyContent: "center",
              gap: 18,
              opacity: 0.7,
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: 1,
            }}
          >
            <span>VISA</span>
            <span>Mastercard</span>
            <span>PayPal</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 10 — Footer */}
      <footer style={{ backgroundColor: "#1A1A2E", padding: "32px 20px", textAlign: "center" }}>
        <p style={{ color: TEXT_SECONDARY, fontSize: 13, margin: "0 0 8px" }}>
          © 2026 Brújula Interior. Todos los derechos reservados.
        </p>
        <p style={{ color: TEXT_SECONDARY, fontSize: 13, margin: 0 }}>
          <a href="#" style={{ color: TEXT_SECONDARY, textDecoration: "none" }}>
            Política de Privacidad
          </a>{" "}
          ·{" "}
          <a href="#" style={{ color: TEXT_SECONDARY, textDecoration: "none" }}>
            Términos de Uso
          </a>{" "}
          ·{" "}
          <a href="#" style={{ color: TEXT_SECONDARY, textDecoration: "none" }}>
            Contacto
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
