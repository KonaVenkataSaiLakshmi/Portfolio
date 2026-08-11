import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";


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
            <div className="relative overflow-hidden aspect-video rounded-[1.5rem] m-2 bg-black">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

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
    </section>
  );
};

export default Portfolio; 