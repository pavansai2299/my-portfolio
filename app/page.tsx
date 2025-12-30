"use client";

import About from "@/components/AboutMe";
import Contact from "@/components/ContactMe";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import BlobBackground from "@/components/BlobBackground";

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js, TypeScript, Tailwind CSS.",
    link: "https://github.com/pavansai2299/my-portfolio",
  },
  {
    title: "Todo App",
    description: "CRUD Todo app using React + TypeScript",
    link: "https://github.com/YOUR_GITHUB/todo-app",
  },
];

export default function Home() {
  return (
    <main className="pt-24 px-6 mx-auto bg-black">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-32 text-center relative overflow-hidden"
      >
        <BlobBackground />
        <div className="relative">
          <img
            src="/profile.jpeg"
            alt="Pavan Sai"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500"
          />
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Pavan Sai Mucherla</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Senior Software Engineer building fast, scalable web apps with React, Next.js, TypeScript, and Vue Js. Skilled in modular, maintainable UI and modern frontend tooling.
          </p>
        </div>
      </motion.section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <Contact/>
    </main>
  );
}
