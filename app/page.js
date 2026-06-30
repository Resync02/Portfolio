"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Phone, Globe, ArrowUpRight, GitBranch, ArrowDown, Sun, Moon, Shield, Languages } from "lucide-react";

// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const t = {
  id: {
    role: "Freelancer & Mahasiswa Teknik Informatika",
    heroLine1: "Membangun solusi digital di persimpangan",
    heroKeyword: "keamanan siber",
    heroLine2: "dan kreativitas visual.",
    heroDesc: "Mahasiswa Teknik Informatika yang fokus pada cyber security & jaringan, dengan kemampuan tambahan di video editing dan produksi konten.",
    nav: ["Beranda", "Tentang", "Proyek", "Sertifikasi", "Organisasi", "Kontak"],
    navIds: ["main", "about", "projects", "certifications", "organization", "contact"],
    ctaPrimary: "Hubungi Saya",
    ctaSecondary: "Lihat Proyek",
    aboutEyebrow: "Profil",
    aboutTitle: "Tentang Saya",
    about: "Saya adalah mahasiswa Teknik Informatika dengan ketertarikan utama di bidang Cyber Security dan teknologi jaringan, serta didukung kemampuan kreatif seperti video editing. Saya memiliki pemahaman dasar mengenai sistem, jaringan, dan troubleshooting, serta terbiasa menggunakan tools seperti Kali Linux dalam eksplorasi dan pembelajaran keamanan siber.",
    about2: "Di sisi lain, saya juga berpengalaman dalam video editing untuk mengolah materi menjadi konten yang menarik dan komunikatif. Saya juga aktif berorganisasi, membentuk kemampuan kepemimpinan, komunikasi, dan kerja sama tim.",
    skillsTitle: "Keahlian",
    projectsEyebrow: "Portofolio",
    projectsTitle: "Proyek Terpilih",
    certsEyebrow: "Pencapaian",
    certsTitle: "Sertifikasi & Penghargaan",
    orgEyebrow: "Pengalaman",
    orgTitle: "Organisasi",
    contactEyebrow: "Mari Terhubung",
    contactTitle: "Tertarik bekerja sama?",
    contactDesc: "Terbuka untuk proyek freelance, kolaborasi, maupun sekadar diskusi seputar teknologi.",
    viewProject: "Lihat Detail",
    statProjects: "Proyek",
    statCerts: "Sertifikasi",
    statOrg: "Organisasi",
  },
  en: {
    role: "Freelancer & Informatics Engineering Student",
    heroLine1: "Building digital solutions at the intersection of",
    heroKeyword: "cyber security",
    heroLine2: "and visual creativity.",
    heroDesc: "Informatics Engineering student focused on cyber security & networking, with additional skills in video editing and content production.",
    nav: ["Home", "About", "Projects", "Certifications", "Organization", "Contact"],
    navIds: ["main", "about", "projects", "certifications", "organization", "contact"],
    ctaPrimary: "Contact Me",
    ctaSecondary: "View Projects",
    aboutEyebrow: "Profile",
    aboutTitle: "About Me",
    about: "I'm an Informatics Engineering student with a primary interest in Cyber Security and network technology, supported by creative skills such as video editing. I have a foundational understanding of systems, networking, and troubleshooting, and I'm familiar with tools like Kali Linux for cyber security exploration and learning.",
    about2: "On the other hand, I also have experience in video editing, turning raw material into engaging and communicative content. I'm also active in organizations, which has shaped my leadership, communication, and teamwork skills.",
    skillsTitle: "Skills",
    projectsEyebrow: "Portfolio",
    projectsTitle: "Selected Projects",
    certsEyebrow: "Achievements",
    certsTitle: "Certifications & Awards",
    orgEyebrow: "Experience",
    orgTitle: "Organization",
    contactEyebrow: "Let's Connect",
    contactTitle: "Interested in working together?",
    contactDesc: "Open to freelance projects, collaborations, or just a conversation about technology.",
    viewProject: "View Detail",
    statProjects: "Projects",
    statCerts: "Certifications",
    statOrg: "Organizations",
  },
};

const projects = [
  { title: "Promotion Warung Nasi Dua Putra Jaya", image: "/C1.jpg", link: "https://drive.google.com/file/d/1fxhNDYQcxaVWJunmdBCR0SpZcmY86ERW/view?usp=sharing", type: "Video" },
  { title: "Hariyo Ardhito Staff Short Content", image: "/C2.jpg", link: "https://drive.google.com/file/d/1_8Zw7U1zDK5STRV6RY09GNe6M43Kk031/view?usp=sharing", type: "Video" },
  { title: "IoT Project Harvest Moon Style", image: "/C3.jpg", link: "https://drive.google.com/file/d/199XBOOTq9PdoJvIX-QRm1cQQehsr7sCT/view?usp=drive_link", type: "IoT" },
  { title: "Short Movie — Perbedaan Bukan Halangan", image: "/C4.jpg", link: "https://drive.google.com/file/d/1zJyISGxFrAvu777YzUd9FJzClDMSl9hZ/view?usp=drive_link", type: "Film" },
  { title: "Instagram Reels Content", image: "/C5.jpg", link: "https://drive.google.com/file/d/11FTvJybQiA8uJL-eg3Djf9aRzMOjCj8T/view?usp=drive_link", type: "Video" },
  { title: "Mini Podcast", image: "/C6.jpg", link: "https://drive.google.com/file/d/10iEoqQaH37GjFRRH-7gAZwWX7O2mJi84/view?usp=drive_link", type: "Audio" },
  { title: "Youtube Channel", image: "/C7.jpg", link: "https://www.youtube.com/@GodBless312", type: "YouTube" },
  { title: "E-Coblos Online Election", image: "/C9.jpg", link: "https://github.com/Resync02/ECoblos", type: "Web" },
  { title: "SRADDHA Coffee Website", image: "/C8.jpg", link: "https://github.com/Resync02/SraddhaCafe", type: "Web" },
  { title: "Enterprise-Network Lab", image: "/C10.jpg", link: "https://github.com/Resync02/Enterprise-Network-Lab", type: "Network" },
];

const certifications = [
  { title: "Program Kreativitas Mahasiswa 2026", image: "/S1.png" },
  { title: "International BMC Competition Creativepreneur Festival 2025", image: "/S2.png" },
  { title: "Pemilihan Mahasiswa Berprestasi 2025", image: "/S3.png" },
  { title: "BiU International Stadium General", image: "/S4.png" },
];

const organizations = [
  { title: "Sekretaris Karang Taruna 2023", image: "/O1.jpg" },
  { title: "Sekretaris Karang Taruna 2024", image: "/O2.jpg" },
  { title: "Ketua Karang Taruna 2025", image: "/O3.jpg" },
  { title: "LIONS INTERNATIONAL 307-B1 Pulpintro Bekasi", image: "/O4.jpg" },
];

const skills = ["HTML", "CSS", "JavaScript", "Python", "Cyber Security", "Kali Linux", "CapCut", "IoT", "Hardware", "Software", "Networking", "SQL", "PHP"];

// ─── THEME TOKENS — clean, professional, not overly dark ──────────────────
const themes = {
  light: {
    bg: "#fafafa",
    bgAlt: "#ffffff",
    surface: "#ffffff",
    surfaceAlt: "#f4f5f7",
    border: "#e4e6eb",
    borderHover: "#c7cbd4",
    accent: "#2563eb",
    accentSoft: "#eef3ff",
    text: "#15181f",
    textMuted: "#5b616e",
    textFaint: "#9aa0ad",
    navBg: "rgba(250,250,250,0.85)",
    shadow: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.04)",
    shadowHover: "0 4px 14px rgba(15,23,42,0.08), 0 16px 36px rgba(15,23,42,0.08)",
  },
  dark: {
    bg: "#15171c",
    bgAlt: "#1b1e25",
    surface: "#1e2128",
    surfaceAlt: "#23262e",
    border: "#2d313a",
    borderHover: "#3d4250",
    accent: "#5b9aff",
    accentSoft: "rgba(91,154,255,0.1)",
    text: "#eef0f3",
    textMuted: "#a3a9b5",
    textFaint: "#6b7180",
    navBg: "rgba(21,23,28,0.85)",
    shadow: "0 1px 2px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.2)",
    shadowHover: "0 4px 14px rgba(0,0,0,0.3), 0 16px 36px rgba(0,0,0,0.3)",
  },
};

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

function Eyebrow({ children, th }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
      <span style={{ width: "20px", height: "2px", background: th.accent, borderRadius: "2px" }} />
      <span style={{ fontSize: "12.5px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: th.accent }}>
        {children}
      </span>
    </div>
  );
}

function Card({ children, th, style = {}, hoverable = true }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => hoverable && setHovered(true)}
      onMouseLeave={() => hoverable && setHovered(false)}
      style={{
        background: th.surface,
        border: `1px solid ${hovered ? th.borderHover : th.border}`,
        borderRadius: "16px",
        overflow: "hidden",
        transition: "all 0.25s ease",
        boxShadow: hovered ? th.shadowHover : th.shadow,
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [mode, setMode] = useState("light");
  const [lang, setLang] = useState("id");
  const [active, setActive] = useState("main");
  const [menuOpen, setMenuOpen] = useState(false);
  const [zoom, setZoom] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const th = themes[mode];
  const tx = t[lang];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.35 }
    );
    sections.forEach(s => obs.observe(s));
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => { obs.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: th.bg, color: th.text, fontFamily: "'Inter', system-ui, -apple-system, sans-serif", transition: "background 0.3s ease, color 0.3s ease" }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, width: "100%", zIndex: 100,
        background: th.navBg, backdropFilter: "blur(16px)",
        borderBottom: scrolled ? `1px solid ${th.border}` : "1px solid transparent",
        transition: "border-color 0.3s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 5vw", height: "68px",
      }}>
        <a href="#main" style={{ fontWeight: 800, fontSize: "16px", letterSpacing: "-0.01em", color: th.text, textDecoration: "none" }}>
          IHR<span style={{ color: th.accent }}>.</span>
        </a>

        <div style={{ display: "flex", gap: "32px", alignItems: "center" }} className="nav-links">
          {tx.nav.map((item, i) => (
            <a key={item} href={`#${tx.navIds[i]}`}
              style={{
                fontSize: "13.5px", fontWeight: 500,
                color: active === tx.navIds[i] ? th.text : th.textMuted,
                textDecoration: "none", transition: "color 0.2s", position: "relative",
              }}>
              {item}
              {active === tx.navIds[i] && (
                <span style={{ position: "absolute", bottom: "-20px", left: 0, right: 0, height: "2px", background: th.accent, borderRadius: "2px" }} />
              )}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <button onClick={() => setLang(lang === "id" ? "en" : "id")} title="Toggle language"
            style={{
              background: th.surfaceAlt, border: `1px solid ${th.border}`,
              borderRadius: "8px", padding: "6px 11px",
              fontSize: "12px", fontWeight: 700, cursor: "pointer",
              color: th.textMuted, transition: "all 0.2s",
              display: "flex", alignItems: "center", gap: "6px",
            }}>
            <Languages size={15} />
            {lang === "id" ? "ID" : "EN"}
          </button>

          <button onClick={() => setMode(mode === "dark" ? "light" : "dark")} title="Toggle theme"
            style={{
              background: th.surfaceAlt, border: `1px solid ${th.border}`,
              borderRadius: "8px", padding: "6px 9px",
              cursor: "pointer", lineHeight: 1,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: th.textMuted,
            }}>
            {mode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a href="#contact" className="cta-nav" style={{
            background: th.accent, color: "#fff", textDecoration: "none",
            padding: "8px 16px", borderRadius: "8px", fontSize: "13px", fontWeight: 600,
            marginLeft: "4px",
          }}>{tx.ctaPrimary}</a>

          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", color: th.text, cursor: "pointer", fontSize: "20px" }}
            className="hamburger">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            style={{
              position: "fixed", top: "68px", left: 0, right: 0, zIndex: 99,
              background: th.bgAlt, borderBottom: `1px solid ${th.border}`,
              padding: "8px 5vw 20px", display: "flex", flexDirection: "column", gap: "4px", overflow: "hidden",
            }}>
            {tx.nav.map((item, i) => (
              <a key={item} href={`#${tx.navIds[i]}`} onClick={() => setMenuOpen(false)}
                style={{ color: th.text, textDecoration: "none", fontSize: "15px", fontWeight: 500, padding: "10px 0", borderBottom: `1px solid ${th.border}` }}>
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO — split layout, full width, no circular avatar ── */}
      <section id="main" style={{
        paddingTop: "68px", minHeight: "92vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* subtle background accent shape */}
        <div style={{
          position: "absolute", top: "-10%", right: "-8%", width: "55vw", height: "55vw", maxWidth: "700px", maxHeight: "700px",
          background: `radial-gradient(circle, ${th.accentSoft} 0%, transparent 70%)`,
          borderRadius: "50%", pointerEvents: "none", zIndex: 0,
        }} />

        <div style={{
          width: "100%", maxWidth: "1320px", margin: "0 auto", padding: "48px 5vw",
          display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "64px", alignItems: "center",
          position: "relative", zIndex: 1,
        }} className="hero-grid">

          {/* Left: text */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              border: `1px solid ${th.border}`, background: th.surfaceAlt,
              borderRadius: "100px", padding: "6px 14px", marginBottom: "24px",
              fontSize: "12.5px", fontWeight: 600, color: th.textMuted,
            }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e" }} />
              {tx.role}
            </div>

            <h1 style={{ fontSize: "clamp(32px, 4.2vw, 52px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: "24px" }}>
              {tx.heroLine1}{" "}
              <span style={{ color: th.accent }}>{tx.heroKeyword}</span>{" "}
              {tx.heroLine2}
            </h1>

            <p style={{ fontSize: "16.5px", lineHeight: 1.7, color: th.textMuted, maxWidth: "520px", marginBottom: "36px" }}>
              {tx.heroDesc}
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "48px" }}>
              <a href="#contact" style={{
                padding: "13px 26px", borderRadius: "10px",
                background: th.accent, color: "#fff",
                fontWeight: 600, fontSize: "14.5px", textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "6px",
              }}>{tx.ctaPrimary} <ArrowUpRight size={16} /></a>
              <a href="#projects" style={{
                padding: "13px 26px", borderRadius: "10px",
                background: "transparent", color: th.text,
                border: `1px solid ${th.border}`,
                fontWeight: 600, fontSize: "14.5px", textDecoration: "none",
              }}>{tx.ctaSecondary}</a>
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", gap: "40px", paddingTop: "28px", borderTop: `1px solid ${th.border}` }}>
              {[
                [projects.length + "+", tx.statProjects],
                [certifications.length, tx.statCerts],
                [organizations.length, tx.statOrg],
              ].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize: "26px", fontWeight: 800, letterSpacing: "-0.02em" }}>{num}</div>
                  <div style={{ fontSize: "12.5px", color: th.textFaint, fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: hero portrait banner (not circular) */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            style={{ position: "relative" }} className="hero-img-wrap">
            <div style={{
              position: "relative", borderRadius: "24px", overflow: "hidden",
              aspectRatio: "4 / 5", border: `1px solid ${th.border}`,
              boxShadow: th.shadowHover,
            }}>
              <img src="/profile.jpg" onClick={() => setZoom("/profile.jpg")}
                style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "zoom-in", display: "block" }} />
              <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(180deg, transparent 60%, ${mode === "dark" ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.18)"} 100%)`,
                pointerEvents: "none",
              }} />
            </div>
            {/* floating accent card */}
            <div style={{
              position: "absolute", bottom: "-20px", left: "-20px",
              background: th.surface, border: `1px solid ${th.border}`,
              borderRadius: "14px", padding: "14px 18px", boxShadow: th.shadowHover,
              display: "flex", alignItems: "center", gap: "10px",
            }} className="floating-badge">
              <div style={{
                width: "36px", height: "36px", borderRadius: "9px",
                background: th.accentSoft, color: th.accent,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Shield size={18} />
              </div>
              <div>
                <div style={{ fontSize: "12.5px", fontWeight: 700 }}>Cyber Security</div>
                <div style={{ fontSize: "11px", color: th.textFaint }}>Focus Area</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── full width band with alt background ── */}
      <section id="about" style={{ background: th.bgAlt, borderTop: `1px solid ${th.border}`, borderBottom: `1px solid ${th.border}` }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "100px 5vw", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "64px" }} className="about-grid">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Eyebrow th={th}>{tx.aboutEyebrow}</Eyebrow>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{tx.aboutTitle}</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <p style={{ fontSize: "16px", lineHeight: 1.85, color: th.textMuted, marginBottom: "20px" }}>{tx.about}</p>
            <p style={{ fontSize: "16px", lineHeight: 1.85, color: th.textMuted, marginBottom: "36px" }}>{tx.about2}</p>

            <h3 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: th.textFaint, marginBottom: "16px" }}>{tx.skillsTitle}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {skills.map((skill, i) => (
                <motion.span key={skill}
                  initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  style={{
                    padding: "7px 15px", borderRadius: "8px",
                    border: `1px solid ${th.border}`, background: th.surface,
                    fontSize: "13px", fontWeight: 500, color: th.text,
                  }}>{skill}</motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <Section id="projects">
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "100px 5vw" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <Eyebrow th={th}>{tx.projectsEyebrow}</Eyebrow>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em" }}>{tx.projectsTitle}</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {projects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: (i % 3) * 0.06 }} viewport={{ once: true }}>
                <Card th={th}>
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <img src={p.image} onClick={() => setZoom(p.image)}
                      style={{ width: "100%", height: "190px", objectFit: "cover", display: "block", transition: "transform 0.4s ease", cursor: "zoom-in" }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
                    <div style={{
                      position: "absolute", top: "12px", left: "12px",
                      fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase",
                      padding: "4px 10px", borderRadius: "100px",
                      background: "rgba(255,255,255,0.92)", color: "#15181f",
                    }}>{p.type}</div>
                  </div>
                  <div style={{ padding: "18px 20px" }}>
                    <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "12px", lineHeight: 1.4, minHeight: "42px" }}>{p.title}</h3>
                    <a href={p.link} target="_blank" rel="noopener"
                      style={{ fontSize: "13px", color: th.accent, textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "5px" }}>
                      {tx.viewProject} <ArrowUpRight size={14} />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" style={{ background: th.bgAlt, borderTop: `1px solid ${th.border}`, borderBottom: `1px solid ${th.border}` }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "100px 5vw" }}>
          <Eyebrow th={th}>{tx.certsEyebrow}</Eyebrow>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "48px" }}>{tx.certsTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "24px" }}>
            {certifications.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}>
                <Card th={th}>
                  <img src={c.image} onClick={() => setZoom(c.image)}
                    style={{ width: "100%", height: "170px", objectFit: "cover", display: "block", cursor: "zoom-in" }} />
                  <div style={{ padding: "16px 18px" }}>
                    <p style={{ fontSize: "13.5px", fontWeight: 500, lineHeight: 1.45 }}>{c.title}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORGANIZATION ── */}
      <Section id="organization">
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "100px 5vw" }}>
          <Eyebrow th={th}>{tx.orgEyebrow}</Eyebrow>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "48px" }}>{tx.orgTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "24px" }}>
            {organizations.map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}>
                <Card th={th}>
                  <img src={o.image} onClick={() => setZoom(o.image)}
                    style={{ width: "100%", height: "170px", objectFit: "cover", display: "block", cursor: "zoom-in" }} />
                  <div style={{ padding: "16px 18px" }}>
                    <h3 style={{ fontSize: "13.5px", fontWeight: 600, lineHeight: 1.4 }}>{o.title}</h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: th.bgAlt, borderTop: `1px solid ${th.border}` }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "100px 5vw", textAlign: "center" }}>
          <Eyebrow th={th}><span style={{ margin: "0 auto" }}>{tx.contactEyebrow}</span></Eyebrow>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", maxWidth: "640px", margin: "0 auto 16px" }}>{tx.contactTitle}</h2>
          <p style={{ fontSize: "16px", color: th.textMuted, maxWidth: "480px", margin: "0 auto 48px" }}>{tx.contactDesc}</p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            {[
              { href: "mailto:iqbalhafidzr.work@gmail.com", icon: <Mail size={18} />, label: "Email" },
              { href: "https://wa.me/6285161840017", icon: <Phone size={18} />, label: "WhatsApp" },
              { href: "https://www.instagram.com/iqbaalraamaadhann/", icon: <Globe size={18} />, label: "Instagram" },
              { href: "https://github.com/Resync02", icon: <GitBranch size={18} />, label: "GitHub" },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener"
                style={{
                  display: "flex", alignItems: "center", gap: "9px",
                  padding: "14px 24px", borderRadius: "10px",
                  border: `1px solid ${th.border}`, background: th.surface,
                  color: th.text, textDecoration: "none", fontSize: "14px", fontWeight: 600,
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = th.accent; e.currentTarget.style.color = th.accent; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = th.border; e.currentTarget.style.color = th.text; }}>
                {icon}{label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "32px", fontSize: "12.5px", color: th.textFaint }}>
        © 2025 Iqbal Hafidz Ramadhan
      </footer>

      {/* ── IMAGE ZOOM ── */}
      <AnimatePresence>
        {zoom && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setZoom(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 200,
              background: "rgba(15,17,21,0.9)", backdropFilter: "blur(6px)",
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out",
            }}>
            <motion.img initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={zoom} style={{ maxWidth: "90vw", maxHeight: "88vh", borderRadius: "12px", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }} />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${th.border}; border-radius: 4px; }
        .nav-links { display: flex; }
        .hamburger { display: none; }
        .cta-nav { display: inline-flex; }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-img-wrap { order: -1; max-width: 360px; margin: 0 auto; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
          .cta-nav { display: none !important; }
        }
      `}</style>
    </div>
  );
}

function Section({ id, children }) {
  return <section id={id}>{children}</section>;
}
