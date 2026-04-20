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
    role: "IT Consultant",
    image: "/Profile.jpeg"
  };

  const projects = [
    {
      title: "E-Coblos",
      desc: "Online Election via Website usings Codeigniter,PHP,MySql",
      image: "/project1.png",
      link: ""
    },
        {
      title: "Internet of Things",
      desc: "Temperature and Humidity Monitoring for Greenhouse",
      image: "/project2.png",
      link: ""
    },
        {
      title: "Expert System",
      desc: "Analytics Body Mass Index and Body Fat Percentage usings Forward Chaining and Neural Network Algorithms",
      image: "/project3.png",
      link: ""
    },
            {
      title: "Machine Learning",
      desc: "Diabetes detection using Support Vector Machine algorithms",
      image: "/project4.png",
      link: ""
    },
            {
      title: "Network Engineer",
      desc: "Network Topology Configuration usings VLAN, STP, PVST",
      image: "/project5.png",
      link: ""
    },
            {
      title: "Project 3",
      desc: "Monitoring suhu dengan DHT22",
      image: "/project1.png",
      link: ""
    },
    {
      title: "Project 4",
      desc: "Klik untuk lihat hasil video",
      image: "/project2.png",
      link: "https://drive.google.com/"
    }
  ];

  const certifications = [
    {
      title: "Cisco Networking Basics",
      image: "/cert1.png"
    },
    {
      title: "Cyber Security Fundamentals",
      image: "/cert2.png"
    },
    {
      title: "Python Programming",
      image: "/cert3.png"
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

  const navItems = ["home", "about", "projects", "certifications", "skills", "contact"];

  return (
    <div className={`min-h-screen scroll-smooth transition-all duration-500 ${
      isNeon
        ? "bg-gradient-to-b from-black via-[#020617] to-black text-white"
        : "bg-[#2d1f14] text-[#f5e6d3]"
    }`}>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-md z-50">
        <h1 className="font-bold text-lg">MyPortfolio</h1>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} className={`capitalize ${active === item ? "text-cyan-400" : ""}`}>
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

      {/* HERO */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-32 px-6">
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          src={profile.image}
          onClick={() => setSelectedImage(profile.image)}
          className="w-32 md:w-36 h-32 md:h-36 rounded-full border-4 border-cyan-400 cursor-pointer hover:scale-110 transition"
        />

        <h1 className="text-4xl md:text-5xl font-bold mt-6">{profile.name}</h1>
        <p className="text-lg md:text-xl mt-3">{profile.role}</p>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">About Me</h2>
        <p>
           Saya adalah seorang Cyber Security enthusiast yang berfokus pada penetration testing dan network security. 
Saya memiliki ketertarikan dalam mengidentifikasi celah keamanan serta memahami bagaimana sistem dapat diserang dan diamankan. Dalam proses belajar, saya telah menggunakan berbagai tools seperti Nmap, Wireshark, dan Metasploit untuk melakukan simulasi pengujian keamanan. 
Saya memiliki semangat belajar yang tinggi dan terus mengembangkan kemampuan untuk menjadi profesional di bidang keamanan siber.
        </p>
      </section>

      {/* PROJECTS (GRID RESPONSIVE - TURUN KE BAWAH) */}
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

      {/* CERTIFICATIONS (GRID RESPONSIVE) */}
      <section id="certifications" className="px-6 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {certifications.map((cert, i) => (
            <div key={i} className="w-full max-w-xs">
              <Card>
                <img
                  src={cert.image}
                  onClick={() => setSelectedImage(cert.image)}
                  className="w-full h-32 object-cover cursor-pointer hover:scale-105 transition"
                />
                <CardContent>
                  <p className="text-sm">{cert.title}</p>
                </CardContent>
              </Card>
            </div>
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
