import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";


const projectData = [
  {
    image: `${import.meta.env.BASE_URL}/Reddis+kafka.gif`,
    title: "Microservices + Redis — Enterprise Inquire & Manage Platform",
    tags: [
      "Java 8/11/17",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "Redis",
      "Azure App Service",
      "OAuth2/OIDC",
      "Entra ID",
      "Async Processing",
      "Callbacks",
      "Retry",
      "Monitoring & Alerting",
    ],
    link: "#",
    github: "#",
  },
  {
    image: `${import.meta.env.BASE_URL}/EDF.gif`,
    title: "EDF — Databricks Enterprise Data Framework",
    tags: [
      "Databricks",
      "PySpark",
      "Delta Lake",
      "DLT",
      "Unity Catalog",
      "Auto Loader",
      "Kafka",
      "Oracle GoldenGate",
      "SFTP",
      "REST APIs",
      "CDC",
      "SCD Type 1/2",
      "Medallion Architecture",
      "SQL",
      "YAML",
    ],
    link: "#",
    github: "#",
  },
  {
    image: `${import.meta.env.BASE_URL}/security.gif`,
    title: "Bug Bounty & Enterprise Security Remediat",
    tags: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "OAuth2",
      "OIDC",
      "Microsoft Entra ID",
      "SQL",
      "WebLogic",
      "Azure",
      "Secure Coding",
      "Vulnerability Remediation",
    ],
    link: "#",
    github: "#",
  },
  {
    image: `${import.meta.env.BASE_URL}/Event-Driven.gif`,
    title: "DMAAP → Kafka/IEBUS Migration",
    tags: [
      "Kafka",
      "IEBUS",
      "DMAAP",
      "Java",
      "Spring Boot",
      "Event-Driven Architecture",
      "Retry",
      "Dead Letter Queues",
      "Monitoring",
    ],
    link: "#",
    github: "#",
  },
  {
    image: `${import.meta.env.BASE_URL}/enterprise.gif`,
    title: "Global Login → Microsoft Entra ID Migration",
    tags: [
      "Microsoft Entra ID",
      "OAuth2",
      "OIDC",
      "Java",
      "Spring Boot",
      "REST APIs",
      "Kafka",
      "Confluent Cloud",
      "MECHID",
      "Enterprise Authentication",
    ],
    link: "#",
    github: "#",
  },
  {
    image: `${import.meta.env.BASE_URL}/DSM.gif`,
    title: "Legacy CORBA → REST / Spring Boot Modernization",
    tags: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "CORBA",
      "DMAAP",
      "DSAP",
      "IBM MQ",
      "Kafka/IEBUS",
      "OAuth2/OIDC",
      "Entra ID",
      "WebLogic",
      "Azure",
    ],
    link: "#",
    github: "#",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="bg-[#020202] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-mono tracking-[0.4em] uppercase text-[10px] mb-4"
        >
          Project Showcase
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter"
        >
          Selected Works<span className="text-blue-500"></span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              aria-label={`Expand image for ${project.title}`}
              className="relative overflow-hidden aspect-video rounded-[1.5rem] m-2 bg-black w-[calc(100%-1rem)] block cursor-zoom-in"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white bg-black/60 px-4 py-2 rounded-full border border-white/20">
                  Click to Expand
                </span>
              </div>
            </button>

            <div className="p-8">
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest font-mono px-3 py-1 bg-white/10 text-blue-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              {/* <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Github Repository" className="p-3 bg-white/5 text-white rounded-xl hover:bg-blue-600 transition-all border border-white/10">
                  <FiGithub size={20} />
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="p-3 bg-white/5 text-white rounded-xl hover:bg-blue-600 transition-all border border-white/10">
                  <FiExternalLink size={20} />
                </a>
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal — rendered via portal so it always centers on
          the real viewport, even if a parent has a CSS transform
          (e.g. from another framer-motion animation) that would
          otherwise hijack `position: fixed`. */}
      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full my-auto max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-[1.5rem]"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 p-3 bg-black/60 hover:bg-blue-600 text-white rounded-full border border-white/20 transition-colors"
              >
                <FiX size={20} />
              </button>

              <div className="bg-black flex items-center justify-center max-h-[60vh] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain max-h-[60vh]"
                />
              </div>

              <div className="p-6 md:p-8 border-t border-white/10">
                <h3 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight uppercase">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest font-mono px-3 py-1 bg-white/10 text-blue-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Portfolio;
