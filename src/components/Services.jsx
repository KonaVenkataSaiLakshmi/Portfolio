import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiLayout, 
  FiServer, 
  FiCloud, 
  FiZap, 
  FiBriefcase, 
  FiArrowRight 
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const attRef = useRef(null);
  const ibmRef = useRef(null);

  const mainServices = [
    {
      icon: <FiLayout size={24} />,
      title: "Frontend Development",
      p: "Create responsive, fast, and modern user interfaces using React, Tailwind CSS, and reusable components.",
    },
    {
      icon: <FiServer size={24} />,
      title: "Backend & API Design",
      p: "Design and develop secure REST APIs and database integration using FastAPI, Node.js, and MongoDB.",
    },
    {
      icon: <FiCloud size={24} />,
      title: "Deployment & Hosting",
      p: "Deploy applications on cloud platforms with domain setup and production-ready server configurations.",
    },
    {
      icon: <FiZap size={24} />,
      title: "Real-Time Solutions",
      p: "Develop features like chat apps and live notifications using WebSockets and FastAPI.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // 1. Header Animation
      tl.fromTo(headerRef.current.children, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.4, ease: "none", stagger: 0.1 }
      );

      // 2. Main Services Grid Stagger
      tl.fromTo(".service-card", 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.3, ease: "none", stagger: 0.1 },
        "-=0.2"
      );

      // 3. Experience Cards Slide
      tl.fromTo([attRef.current, ibmRef.current], 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: "none", stagger: 0.15 },
        "-=0.3"
      );

      // UI corner lines animation for cards
      tl.fromTo(".corner-line",
        { scale: 0 },
        { scale: 1, duration: 0.3, ease: "none", stagger: 0.05 },
        "-=0.2"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#000] text-white overflow-hidden scroll-mt-24"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      {/* Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Header */}
      <div ref={headerRef} className="max-w-7xl mx-auto text-center mb-24 relative z-10">
        <div className="inline-block px-3 py-1 border border-blue-500/30 bg-blue-500/5 rounded-sm mb-4">
          {/* <p className="text-blue-400 font-mono text-[10px] uppercase tracking-[0.5em]">EXPERIENCE MODULE</p> */}
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
          Experience<span className="text-blue-500">.</span>
        </h2>
        <div className="w-24 h-[1px] bg-blue-500/40 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-gray-500 font-light text-base leading-relaxed">
          Leveraging my experience from production-level applications and real-time startup incubation projects to build scalable digital solutions.
        </p>
      </div>

      {/* Experience Cards Container: stacks on mobile, side-by-side from lg breakpoint up */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 relative z-10">

        {/* AT&T Card */}
        <div ref={attRef} className="w-full lg:w-1/2 relative">
          <div className="lg:sticky lg:top-32 p-6 md:p-10 bg-[#0c0c0c] border border-white/[0.08] rounded-sm group overflow-hidden">
            
            {/* HUD Corner Lines */}
            <div className="corner-line absolute top-2 left-2 w-4 h-4 border-t border-l border-blue-500/50"></div>
            <div className="corner-line absolute top-2 right-2 w-4 h-4 border-t border-r border-blue-500/50"></div>
            <div className="corner-line absolute bottom-2 left-2 w-4 h-4 border-b border-l border-blue-500/50"></div>
            <div className="corner-line absolute bottom-2 right-2 w-4 h-4 border-b border-r border-blue-500/50"></div>

            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-all duration-1000" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8 md:mb-12">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-sm text-blue-400 shrink-0">
                  <FiBriefcase size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-widest uppercase">AT&T</h3>
                  <span className="text-[10px] font-mono text-gray-500 block tracking-[0.3em] mt-1">Sep 2025 - Present</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="h-10 px-3 bg-white flex items-center justify-center rounded-sm">
                  <span className="text-black font-black text-[12px] tracking-tighter">Sr.Associate Software Engineer</span>
                </div>
              </div>

              <p className="text-gray-400 font-light text-sm leading-relaxed mb-4 md:mb-12">
                Built <span className="text-white font-medium">AT&T's Enterprise Data Framework</span> on Databricks, 
                enabling config-driven CDC ingestion across 60+ tables while developing scalable Java/Spring Boot 
                microservices with Kafka, Redis, and Azure.
              </p>
            </div>
          </div>

          {/* Micro HUD Footer */}
          <div className="mt-6 flex justify-between items-center font-mono text-[9px] text-gray-700 tracking-[0.2em] px-2 opacity-50">
            <span>&gt; SYSTEM DATA LOADED</span>
            <span>0x034FB</span>
          </div>
        </div>

        {/* IBM Card */}
        <div ref={ibmRef} className="w-full lg:w-1/2 relative">
          <div className="lg:sticky lg:top-32 p-6 md:p-10 bg-[#0c0c0c] border border-white/[0.08] rounded-sm group overflow-hidden">
            
            {/* HUD Corner Lines */}
            <div className="corner-line absolute top-2 left-2 w-4 h-4 border-t border-l border-blue-500/50"></div>
            <div className="corner-line absolute top-2 right-2 w-4 h-4 border-t border-r border-blue-500/50"></div>
            <div className="corner-line absolute bottom-2 left-2 w-4 h-4 border-b border-l border-blue-500/50"></div>
            <div className="corner-line absolute bottom-2 right-2 w-4 h-4 border-b border-r border-blue-500/50"></div>

            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-all duration-1000" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8 md:mb-12">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-sm text-blue-400 shrink-0">
                  <FiBriefcase size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-widest uppercase">IBM</h3>
                  <span className="text-[10px] font-mono text-gray-500 block tracking-[0.3em] mt-1">JUN 2021 - AUG 2025</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="h-10 px-3 bg-white flex items-center justify-center rounded-sm">
                  <span className="text-black font-black text-[12px] tracking-tighter">Cloud Full Stack Developer</span>
                </div>
              </div>

              <p className="text-gray-400 font-light text-sm leading-relaxed mb-4 md:mb-12">
                Designed and delivered scalable full-stack and cloud-native applications using{" "}
                <span className="text-white font-medium">Java, Spring Boot, Angular, Kafka, REST APIs, and Azure</span>, 
                with a focus on microservices, performance, and enterprise modernization.
              </p>
            </div>
          </div>

          {/* Micro HUD Footer */}
          <div className="mt-6 flex justify-between items-center font-mono text-[9px] text-gray-700 tracking-[0.2em] px-2 opacity-50">
            <span>&gt; SYSTEM DATA LOADED</span>
            <span>0x034FB</span>
          </div>
        </div>
      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.03] z-10"></div>
      <div className="absolute top-0 right-1/2 w-[1px] h-full bg-white/[0.03] z-10"></div>
    </section>
  );
}
