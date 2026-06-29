"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Mail, Phone, Globe, ChevronDown, ExternalLink, GitBranch } from "lucide-react";

// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const t = {
  id: {
    role: "Freelancer & Mahasiswa Teknik Informatika",
    nav: ["Beranda", "Proyek", "Sertifikasi", "Organisasi", "Keahlian", "Kontak"],
    navIds: ["main", "projects", "certifications", "organization", "skills", "contact"],
    aboutTitle: "Tentang Saya",
    about: "Mahasiswa Teknik Informatika dengan fokus utama di bidang Cyber Security dan teknologi jaringan, didukung kemampuan kreatif seperti video editing. Berpengalaman dengan tools seperti Kali Linux dan aktif dalam organisasi untuk mengembangkan kepemimpinan dan kerja tim.",
    projectsTitle: "Proyek",
    certsTitle: "Sertifikasi",
    orgTitle: "Organisasi",
    skillsTitle: "Keahlian",
    contactTitle: "Kontak",
    viewProject: "Lihat Proyek →",
    scrollDown: "Scroll ke bawah",
  },
  en: {
    role: "Freelancer & Informatics Engineering Student",
    nav: ["Home", "Projects", "Certifications", "Organization", "Skills", "Contact"],
    navIds: ["main", "projects", "certifications", "organization", "skills", "contact"],
    aboutTitle: "About Me",
    about: "Informatics Engineering student focused on Cyber Security and network technology, supported by creative skills in video editing. Experienced with tools like Kali Linux and active in organizations to develop leadership and teamwork.",
    projectsTitle: "Projects",
    certsTitle: "Certifications",
    orgTitle: "Organization",
    skillsTitle: "Skills",
    contactTitle: "Contact",
    viewProject: "View Project →",
    scrollDown: "Scroll down",
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

const skills = ["HTML", "CSS", "JavaScript", "Python", "Cyber Security", "Kali Linux", "CapCut", "Internet of Things", "Hardware", "Software", "Networking", "SQL", "PHP"];

// ─── THEME TOKENS ───────────────────────────────────────────────────────────
const themes = {
  dark: {
    bg: "#070b14",
    surface: "#0d1526",
    surfaceHover: "#111d35",
    border: "rgba(34,211,238,0.18)",
    borderHover: "rgba(34,211,238,0.55)",
    accent: "#22d3ee",
    accentGlow: "rgba(34,211,238,0.25)",
    accentSoft: "rgba(34,211,238,0.08)",
    text: "#e2f0f7",
    textMuted: "#6b8fa8",
    navBg: "rgba(7,11,20,0.85)",
    gridLine: "rgba(34,211,238,0.04)",
  },
  light: {
    bg: "#f0f4fa",
    surface: "#ffffff",
    surfaceHover: "#f7faff",
    border: "rgba(37,99,235,0.15)",
    borderHover: "rgba(37,99,235,0.45)",
    accent: "#2563eb",
    accentGlow: "rgba(37,99,235,0.18)",
    accentSoft: "rgba(37,99,235,0.07)",
    text: "#0f172a",
    textMuted: "#64748b",
    navBg: "rgba(240,244,250,0.88)",
    gridLine: "rgba(37,99,235,0.04)",
  },
};

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

function GridBg({ th }) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke={th.gridLine} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

function Tag({ label, th }) {
  return (
    <span style={{
      fontSize: "10px", letterSpacing: "0.08em", fontWeight: 600, textTransform: "uppercase",
      padding: "2px 8px", borderRadius: "4px",
      background: th.accentSoft, color: th.accent,
      border: `1px solid ${th.border}`,
    }}>{label}</span>
  );
}

function Card({ children, th, style = {} }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: hovered ? th.surfaceHover : th.surface,
        border: `1px solid ${hovered ? th.borderHover : th.border}`,
        borderRadius: "14px",
        overflow: "hidden",
        transition: "all 0.25s ease",
        boxShadow: hovered ? `0 0 24px ${th.accentGlow}` : "none",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ children, th }) {
  return (
    <div style={{ marginBottom: "48px", textAlign: "center" }}>
      <span style={{ display: "inline-block", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: th.accent, fontWeight: 700, marginBottom: "10px" }}>
        ◈ {children}
      </span>
      <div style={{ width: "40px", height: "2px", background: th.accent, margin: "0 auto", borderRadius: "2px", opacity: 0.6 }} />
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [mode, setMode] = useState("dark");
  const [lang, setLang] = useState("id");
  const [active, setActive] = useState("main");
  const [menuOpen, setMenuOpen] = useState(false);
  const [zoom, setZoom] = useState(null);
  const th = themes[mode];
  const tx = t[lang];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: th.bg, color: th.text, fontFamily: "'Inter', 'Geist', system-ui, sans-serif", position: "relative", transition: "all 0.4s ease" }}>
      <GridBg th={th} />

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, width: "100%", zIndex: 100,
        background: th.navBg, backdropFilter: "blur(18px)",
        borderBottom: `1px solid ${th.border}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px", height: "60px",
      }}>
        {/* Logo */}
        <span style={{ fontWeight: 700, fontSize: "16px", letterSpacing: "0.05em", color: th.accent }}>
          IHR<span style={{ color: th.textMuted }}>.</span>
        </span>

        {/* Desktop nav links */}
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }} className="nav-links">
          {tx.nav.map((item, i) => (
            <a
              key={item}
              href={`#${tx.navIds[i]}`}
              style={{
                fontSize: "13px", fontWeight: 500, letterSpacing: "0.03em",
                color: active === tx.navIds[i] ? th.accent : th.textMuted,
                textDecoration: "none", transition: "color 0.2s",
                borderBottom: active === tx.navIds[i] ? `1.5px solid ${th.accent}` : "1.5px solid transparent",
                paddingBottom: "2px",
              }}
            >{item}</a>
          ))}
        </div>

        {/* Toggles */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {/* Lang toggle */}
          <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            title="Toggle language"
            style={{
              background: th.accentSoft, border: `1px solid ${th.border}`,
              borderRadius: "8px", padding: "5px 10px",
              fontSize: "13px", fontWeight: 700, cursor: "pointer",
              color: th.accent, transition: "all 0.2s",
              display: "flex", alignItems: "center", gap: "6px",
            }}
          >
            {lang === "id"
              ? <><span>🇮🇩</span><span style={{ fontSize: "11px" }}>ID</span></>
              : <><span>🇬🇧</span><span style={{ fontSize: "11px" }}>EN</span></>
            }
          </button>

          {/* Dark/Light toggle */}
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            title="Toggle theme"
            style={{
              background: th.accentSoft, border: `1px solid ${th.border}`,
              borderRadius: "8px", padding: "5px 10px",
              fontSize: "16px", cursor: "pointer",
              transition: "all 0.2s", lineHeight: 1,
            }}
          >
            {mode === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", color: th.accent, cursor: "pointer", fontSize: "20px" }}
            className="hamburger"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "fixed", top: "60px", left: 0, right: 0, zIndex: 99,
              background: th.navBg, backdropFilter: "blur(18px)",
              borderBottom: `1px solid ${th.border}`,
              padding: "16px 32px", display: "flex", flexDirection: "column", gap: "16px",
            }}
          >
            {tx.nav.map((item, i) => (
              <a key={item} href={`#${tx.navIds[i]}`}
                onClick={() => setMenuOpen(false)}
                style={{ color: th.text, textDecoration: "none", fontSize: "15px", fontWeight: 500 }}
              >{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <section id="main" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: "80px", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ textAlign: "center", padding: "0 24px", maxWidth: "720px" }}
        >
          {/* Avatar */}
          <div style={{ position: "relative", display: "inline-block", marginBottom: "28px" }}>
            <div style={{
              position: "absolute", inset: "-6px", borderRadius: "50%",
              background: `conic-gradient(${th.accent}, transparent, ${th.accent})`,
              animation: "spin 6s linear infinite",
              zIndex: 0,
            }} />
            <img
              src="/profile.jpg"
              onClick={() => setZoom("/profile.jpg")}
              style={{
                width: "130px", height: "130px", borderRadius: "50%", objectFit: "cover",
                border: `3px solid ${th.bg}`,
                position: "relative", zIndex: 1,
                cursor: "pointer",
                boxShadow: `0 0 40px ${th.accentGlow}`,
              }}
            />
          </div>

          {/* Name */}
          <h1 style={{ fontSize: "clamp(32px,6vw,58px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 12px" }}>
            Iqbal Hafidz<br />
            <span style={{ color: th.accent }}>Ramadhan</span>
          </h1>
          <p style={{ fontSize: "15px", color: th.textMuted, marginBottom: "32px", letterSpacing: "0.01em" }}>{tx.role}</p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" style={{
              padding: "10px 24px", borderRadius: "8px",
              background: th.accent, color: "#fff",
              fontWeight: 600, fontSize: "14px", textDecoration: "none",
              boxShadow: `0 0 18px ${th.accentGlow}`, transition: "all 0.2s",
            }}>Contact Me</a>
            <a href="#projects" style={{
              padding: "10px 24px", borderRadius: "8px",
              background: "transparent", color: th.accent,
              border: `1px solid ${th.border}`,
              fontWeight: 600, fontSize: "14px", textDecoration: "none",
              transition: "all 0.2s",
            }}>View Work</a>
          </div>
        </motion.div>

        {/* About below hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            marginTop: "72px", maxWidth: "680px", width: "100%", padding: "0 24px",
          }}
        >
          <Card th={th} style={{ padding: "28px 32px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: th.accent, fontWeight: 700, marginBottom: "12px" }}>◈ {tx.aboutTitle}</p>
            <p style={{ color: th.textMuted, lineHeight: 1.8, fontSize: "14.5px" }}>{tx.about}</p>
          </Card>
        </motion.div>

        {/* Scroll cue */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: "absolute", bottom: "32px", color: th.textMuted, fontSize: "12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
          <span>{tx.scrollDown}</span>
          <ChevronDown size={16} />
        </motion.div>
      </section>

      {/* ── PROJECTS ── */}
      <Section id="projects" th={th}>
        <SectionTitle th={th}>{tx.projectsTitle}</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} viewport={{ once: true }}>
              <Card th={th}>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img src={p.image} onClick={() => setZoom(p.image)}
                    style={{ width: "100%", height: "180px", objectFit: "cover", display: "block", transition: "transform 0.4s ease", cursor: "zoom-in" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  />
                  <div style={{ position: "absolute", top: "10px", left: "10px" }}>
                    <Tag label={p.type} th={th} />
                  </div>
                </div>
                <div style={{ padding: "16px 18px" }}>
                  <h3 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "10px", lineHeight: 1.4 }}>{p.title}</h3>
                  <a href={p.link} target="_blank" rel="noopener"
                    style={{ fontSize: "12px", color: th.accent, textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    {tx.viewProject} <ExternalLink size={12} />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── CERTIFICATIONS ── */}
      <Section id="certifications" th={th}>
        <SectionTitle th={th}>{tx.certsTitle}</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
          {certifications.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}>
              <Card th={th}>
                <img src={c.image} onClick={() => setZoom(c.image)}
                  style={{ width: "100%", height: "160px", objectFit: "cover", display: "block", cursor: "zoom-in" }} />
                <div style={{ padding: "14px 16px" }}>
                  <p style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.4 }}>{c.title}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── ORGANIZATION ── */}
      <Section id="organization" th={th}>
        <SectionTitle th={th}>{tx.orgTitle}</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
          {organizations.map((o, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}>
              <Card th={th}>
                <img src={o.image} onClick={() => setZoom(o.image)}
                  style={{ width: "100%", height: "160px", objectFit: "cover", display: "block", cursor: "zoom-in" }} />
                <div style={{ padding: "14px 16px" }}>
                  <h3 style={{ fontSize: "13px", fontWeight: 600 }}>{o.title}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── SKILLS ── */}
      <Section id="skills" th={th}>
        <SectionTitle th={th}>{tx.skillsTitle}</SectionTitle>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", maxWidth: "700px", margin: "0 auto" }}>
          {skills.map((skill, i) => (
            <motion.span key={skill}
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04 }} viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              style={{
                padding: "8px 18px", borderRadius: "8px",
                border: `1px solid ${th.border}`,
                background: th.accentSoft,
                fontSize: "13px", fontWeight: 500, color: th.text,
                cursor: "default", transition: "all 0.2s",
                boxShadow: `0 0 0 0 ${th.accentGlow}`,
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = th.borderHover}
              onMouseLeave={e => e.currentTarget.style.borderColor = th.border}
            >{skill}</motion.span>
          ))}
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact" th={th}>
        <SectionTitle th={th}>{tx.contactTitle}</SectionTitle>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          {[
            { href: "mailto:iqbalhafidzr.work@gmail.com", icon: <Mail size={20} />, label: "Email" },
            { href: "https://wa.me/6285161840017", icon: <Phone size={20} />, label: "WhatsApp" },
            { href: "https://www.instagram.com/iqbaalraamaadhann/", icon: <Globe size={20} />, label: "Instagram" },
            { href: "https://github.com/Resync02", icon: <GitBranch size={20} />, label: "GitHub" },
          ].map(({ href, icon, label }) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener"
              whileHover={{ scale: 1.08, y: -2 }}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
                padding: "20px 28px", borderRadius: "12px",
                border: `1px solid ${th.border}`, background: th.surface,
                color: th.text, textDecoration: "none", fontSize: "13px", fontWeight: 500,
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = th.borderHover;
                e.currentTarget.style.boxShadow = `0 0 20px ${th.accentGlow}`;
                e.currentTarget.style.color = th.accent;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = th.border;
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.color = th.text;
              }}
            >
              {icon}
              {label}
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer style={{
        textAlign: "center", padding: "28px", fontSize: "12px",
        color: th.textMuted, borderTop: `1px solid ${th.border}`,
        position: "relative", zIndex: 1,
      }}>
        © 2025 Iqbal Hafidz Ramadhan Built with Next.js
      </footer>

      {/* ── IMAGE ZOOM ── */}
      <AnimatePresence>
        {zoom && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setZoom(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 200,
              background: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "zoom-out",
            }}
          >
            <motion.img
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              src={zoom}
              style={{ maxWidth: "90vw", maxHeight: "88vh", borderRadius: "12px", boxShadow: "0 0 60px rgba(0,0,0,0.6)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${th.border}; border-radius: 4px; }
        .nav-links { display: flex; }
        .hamburger { display: none; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </div>
  );
}

function Section({ id, th, children }) {
  return (
    <section id={id} style={{ padding: "96px 24px", maxWidth: "1080px", margin: "0 auto", position: "relative", zIndex: 1 }}>
      {children}
    </section>
  );
}
