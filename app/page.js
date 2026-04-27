"use client";

const Card = ({ children }) => (
  <div className="bg-[#020617] border border-cyan-400 rounded-xl overflow-hidden shadow-lg">
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="p-4 md:p-6">{children}</div>
);

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Phone, Globe, Moon, Sun, Menu, X } from "lucide-react";

export default function Portfolio() {
  const [theme, setTheme] = useState("neon");
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const isNeon = theme === "neon";
  const profile = {
    name: "Iqbal Hafidz Ramadhan",
    role: "Freelancer",
    image: "/profile.jpg"
  };

  const projects = [
    {
      title: "Promotion Warung Nasi Dua Putra Jaya",
      desc: "Check it Out!",
      image: "/C1.jpg",
      link: "https://drive.google.com/file/d/1fxhNDYQcxaVWJunmdBCR0SpZcmY86ERW/view?usp=sharing"
    },
    {
      title: "Hariyo Ardhito Staff Short Content",
      desc: "Check it Out!",
      image: "/C2.jpg",
      link: "https://drive.google.com/file/d/1_8Zw7U1zDK5STRV6RY09GNe6M43Kk031/view?usp=sharing"
    },
    {
      title: "IoT Project Harvest Moon Style",
      desc: "Check it Out!",
      image: "/C3.jpg",
      link: "https://drive.google.com/file/d/199XBOOTq9PdoJvIX-QRm1cQQehsr7sCT/view?usp=drive_link"
    },
    {
      title: "Short Movie - Perbedaan Bukan Halangan",
      desc: "Check it Out!",
      image: "/C4.jpg",
      link: "https://drive.google.com/file/d/1zJyISGxFrAvu777YzUd9FJzClDMSl9hZ/view?usp=drive_link"
    },
    {
      title: "Instagram Reels Content",
      desc: "Check it Out!",
      image: "/C5.jpg",
      link: "https://drive.google.com/file/d/11FTvJybQiA8uJL-eg3Djf9aRzMOjCj8T/view?usp=drive_link"
    },
    {
      title: "Mini Podcast",
      desc: "Check it Out!",
      image: "/C6.jpg",
      link: "https://drive.google.com/file/d/10iEoqQaH37GjFRRH-7gAZwWX7O2mJi84/view?usp=drive_link"
    },
    {
      title: "Youtube Channel",
      desc: "Thanks for your support 😁✌️",
      image: "/C7.jpg",
      link: "https://www.youtube.com/@GodBless312"
    },
    {
      title: "Brutus Chatbot",
      desc: "Coming Soo",
      image: "/NF.jpg",
      link: ""
    },
    {
      title: "E-Coblos Online Election Via Website",
      desc: "Coming Soon",
      image: "/NF.jpg",
      link: ""
    },
    {
      title: "SRADDHA Coffee Website",
      desc: "Coming Soon",
      image: "/NF.jpg",
      link: ""
    }
  ];

  const certifications = [
    {
      title: "Program Kreativitas Mahasiswa 2026",
      image: "/S1.png"
    },
    {
      title: "International BMC Competition Creativepreneur Festival 2025",
      image: "/S4.png"
    },
    {
      title: "Pemilihan Mahasiswa Berprestasi 2025",
      image: "/S3.png"
    },
    {
      title: "BiU International Stadium Gene",
      image: "/S4.png"
    }
  ];

    const organizations = [
    {
      title: "Sekretaris Karang Taruna 2023",
      desc: "",
      image: "/O1.jpeg"
    },
    {
      title: "Sekretaris Karang Taruna 2024",
      desc: "",
      image: "/O2.jpeg"
    },
    {
      title: "Ketua Karang Taruna 2025",
      desc: "",
      image: "/O3.jpeg"
    }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

const navItems = ["main", "projects", "certifications",  "Organization", "skills", "contact"];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isNeon
        ? "bg-gradient-to-b from-black via-[#020617] to-black text-white"
        : "bg-[#2d1f14] text-[#f5e6d3]"
    }`}>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-md z-50">
        <h1 className="font-bold text-lg">MyPortfolio</h1>

        <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <a 
            key={item} 
            href={`#${item}`} 
            className="capitalize"
          >
            {item}
          </a>
        ))}

          <button onClick={() => setTheme(isNeon ? "wood" : "neon")}
            className="p-2 rounded-full border border-cyan-400">
            {isNeon ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MAIN (HOME + ABOUT) */}
      <section id="main" className="flex flex-col items-center text-center py-32 px-6">

        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          src={profile.image}
          onClick={() => setSelectedImage(profile.image)}
          className="w-36 md:w-36 aspect-square object-cover rounded-full border-4 border-cyan-400 cursor-pointer hover:scale-110 transition shadow-[0_0_25px_#22d3ee]"
        />

        <h1 className="text-4xl md:text-5xl font-bold mt-6">{profile.name}</h1>
        <p className="text-lg md:text-xl mt-3 mb-10">{profile.role}</p>

        {/* ABOUT */}
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">About Me</h2>
          <p>
Saya adalah mahasiswa Teknik Informatika yang memiliki ketertarikan utama di bidang Cyber Security dan teknologi jaringan, serta didukung dengan kemampuan di bidang kreatif seperti video editing. Saya memiliki pemahaman dasar mengenai sistem, jaringan, dan troubleshooting, serta terbiasa menggunakan tools seperti Kali Linux dalam eksplorasi dan pembelajaran keamanan siber.

Di sisi lain, saya juga memiliki pengalaman dalam video editing, di mana saya mampu mengolah materi menjadi konten yang menarik dan komunikatif. Kemampuan ini membantu saya dalam menyampaikan informasi secara lebih efektif dan kreatif.

Saya juga aktif dalam organisasi, yang membentuk kemampuan saya dalam kepemimpinan, komunikasi, dan kerja sama tim. Saya merupakan pribadi yang adaptif, disiplin, dan memiliki keinginan tinggi untuk terus belajar serta mengembangkan kemampuan, khususnya di bidang Cyber Security.
          </p>
        </div>
      </section>

      <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i}>
              <Card>
                <img
                  src={p.image}
                  onClick={() => setSelectedImage(p.image)}
                  className="w-full h-40 object-cover cursor-pointer hover:scale-105 transition"
                />
                <CardContent>
                  <h3>{p.title}</h3>
                  {p.link ? (
                    <a href={p.link} target="_blank" className="text-cyan-400 hover:underline">
                      {p.desc}
                    </a>
                  ) : (
                    <p>{p.desc}</p>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE ZOOM MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img src={selectedImage} className="max-w-[90%] max-h-[90%] rounded-lg" />
        </div>
      )}

<section id="certifications" className="px-6 py-20 max-w-6xl mx-auto">
  <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Certifications</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {certifications.map((cert, i) => (
      <div key={i}>
        <Card>
          <img
            src={cert.image}
            onClick={() => setSelectedImage(cert.image)}
            className="w-full h-40 object-cover cursor-pointer hover:scale-105 transition"
          />
          <CardContent>
            <p className="text-sm">{cert.title}</p>
          </CardContent>
        </Card>
      </div>
    ))}
  </div>
</section>

<section id="organization" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Organization</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {organizations.map((o, i) => (
            <Card key={i}>
              <img src={o.image}
                onClick={() => setSelectedImage(o.image)}
                className="w-full h-40 object-cover cursor-pointer hover:scale-105 transition"
              />
              <CardContent>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SKILLS (WRAP AUTO TURUN) */}
      <section id="skills" className="px-6 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {["HTML","CSS","JavaScript","Python","Cyber Security","Kali Linux","Capcut","Internet of Things","Hardware","Software","Networking","SQL","PHP"].map(skill => (
            <span key={skill} className="px-4 py-2 border border-cyan-400 rounded-full hover:scale-110 transition">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Contact</h2>
        <div className="flex justify-center gap-6">
          <a href="mailto:iqbalhafidzr.work@gmail.com" className="p-4 border border-cyan-400 rounded-full hover:scale-110 transition">
            <Mail />
          </a>
          <a href="https://wa.me/6285161840017" target="_blank" className="p-4 border border-cyan-400 rounded-full hover:scale-110 transition">
            <Phone />
          </a>
          <a href="https://www.instagram.com/iqbaalraamaadhann/" target="_blank" className="p-4 border border-cyan-400 rounded-full hover:scale-110 transition">
            <Globe />
          </a>
        </div>
      </section>

    </div>
  );
}
