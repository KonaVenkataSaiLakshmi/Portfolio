import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiSend, FiUser, FiMail, FiMessageSquare, FiActivity, FiShield } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const formRef = useRef();
  
  const [loaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentFrameIdx, setCurrentFrameIdx] = useState(0);

  const frameCount = 160;
  const imagesRef = useRef([]);
  const seqRef = useRef({ frame: 0 });

  const currentFrame = (index) => `${import.meta.env.BASE_URL}/image3/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;

  // 1. Preload Sequence
  useEffect(() => {
    let loadedCount = 0;
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
            loadedCount++;
            setLoadingProgress(Math.floor((loadedCount / frameCount) * 100));
            if (loadedCount === frameCount) setLoaded(true);
        };
        img.onerror = () => {
            loadedCount++;
            if (loadedCount === frameCount) setLoaded(true);
        };
        imagesRef.current.push(img);
    }
  }, []);

  // 2. GSAP Scroll and Render Logic (Hero Sync)
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Responsive Canvas Size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    const render = () => {
      if (!canvas || !imagesRef.current.length) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      let frameIdx = Math.round(seqRef.current.frame);
      if (frameIdx >= frameCount) frameIdx = frameCount - 1;

      const img = imagesRef.current[frameIdx];
      if (img && img.complete && img.naturalWidth !== 0) {
        const scale = Math.max(
          canvas.width / img.width,
          canvas.height / img.height
        );
        const x = (canvas.width - img.width * scale) / 2;
        const y = (canvas.height - img.height * scale) / 2;
        
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
      setCurrentFrameIdx(frameIdx);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Scroll Animation - Sync with Hero logic
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000",
        scrub: 1.2, // Smoother scrub
        pin: true,
        anticipatePin: 1
      }
    });

    tl.to(seqRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ScrollTrigger.getAll().filter(t => t.trigger === containerRef.current).forEach(t => t.kill());
    };
  }, [loaded]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("TRANSMISSION_COMPLETE 🚀");
        formRef.current.reset();
      })
      .catch((err) => {
        console.log("EmailJS ERROR:", err);
        toast.error("CONNECTION_FAILURE ❌");
      });
  };

  return (
    <div
      ref={containerRef}
      id="contact"
      className="relative w-full h-screen bg-[#020202] overflow-hidden flex items-center justify-center font-mono select-none"
    >
      {/* 1. Loading Module (Ultra-high Z) */}
      <AnimatePresence>
        {!loaded && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-[100] bg-[#020202]"
          >
            <div className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-4 animate-pulse">
              SYNCING_COMM_STREAM {loadingProgress}%
            </div>
            <div className="w-64 h-[2px] bg-cyan-950/30 overflow-hidden">
               <motion.div 
                 className="h-full bg-cyan-500" 
                 style={{ width: `${loadingProgress}%` }}
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Cinematic Canvas Layer (Z-0) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 3. Aesthetic Overlays (Z-10) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-radial-vignette opacity-40" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

      {/* 4. Peripheral HUD Elements (Z-20) */}
      <AnimatePresence>
        {loaded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-20 pointer-events-none p-10"
          >
            {/* Brackets */}
            <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-cyan-500/20" />
            <div className="absolute top-10 right-10 w-24 h-24 border-t border-r border-cyan-500/20" />
            <div className="absolute bottom-10 left-10 w-24 h-24 border-b border-l border-cyan-500/20" />
            <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-cyan-500/20" />

            {/* Static HUD Text */}
            <div className="absolute top-12 left-12 flex items-center space-x-3">
               <FiActivity className="text-cyan-400 text-xs animate-pulse" />
               <span className="text-cyan-400/40 text-[9px] tracking-[0.4em] uppercase font-bold">Signal_Stable</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Central Contact UI (Z-50) */}
      <AnimatePresence>
        {loaded && currentFrameIdx >= 120 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-50 w-full max-w-4xl px-6 pointer-events-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">
              Get in<span className="text-cyan-500 block sm:inline"> Touch</span>
            </h2>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-black/40 backdrop-blur-md border border-white/30 p-10 md:p-14 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-10 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-cyan-500 block ml-1">NAME</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="ENTER NAME"
                    required
                    className="w-full bg-white/5 border-b border-white/30 py-5 px-6 text-white text-[13px] outline-none focus:border-cyan-600 transition-all placeholder:text-white-500/40"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-cyan-500 block ml-1">EMAIL</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="ENTER EMAIL"
                    required
                    className="w-full bg-white/5 border-b border-white/30 py-5 px-6 text-white text-[13px] outline-none focus:border-cyan-600 transition-all placeholder:text-white-500/40"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-cyan-500 block ml-1">MESSAGE</label>
                <textarea
                  name="message"
                  placeholder="ENTER MESSAGE"
                  required
                  className="w-full bg-white/5 border-b border-white/30 py-5 px-6 text-white text-[13px] outline-none focus:border-cyan-600 transition-all min-h-[140px] resize-none placeholder:text-white-500/40"
                />
              </div>

              <div className="flex justify-center md:justify-end">
                <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(6, 182, 212, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="group flex items-center space-x-6 bg-cyan-600 text-black font-black text-[11px] uppercase tracking-[0.6em] px-24 py-6 shadow-2xl transition-all"
              >
                <span>SEND</span>
                <FiSend className="text-lg transition-transform group-hover:translate-x-1" />
              </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <ToastContainer
        position="bottom-right"
        toastClassName="bg-black border border-cyan-500/30 text-white font-mono text-[9px] rounded-none backdrop-blur-xl"
        progressClassName="bg-cyan-600"
      />
    </div>
  );
};

export default Contact;