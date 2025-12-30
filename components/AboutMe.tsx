import SkillCard from "@/components/SkillCard";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Vue 3", icon: "/icons/vue3.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "JavaScript (ES6+)", icon: "/icons/javascript.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "Material-UI", icon: "/icons/material-ui.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Flask", icon: "/icons/flask.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Java", icon: "/icons/java.svg" },
];

export default function About() {
  return (
    <section id="about" className="py-20 pb-0">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-300 mb-20">
        Senior Software Engineer with extensive experience in designing, developing, and optimizing
        scalable web applications using React, Next Js, Vue3, Angular Js, TypeScript, and modern
        frontend frameworks. Strong background in building responsive interfaces, transforming
        Figma designs into interactive UIs, and working in agile environments. Passionate about
        delivering high-quality code and collaborating across product, design, and backend teams to
        deliver meaningful solutions.
      </p>
      <h3 className="text-2xl font-semibold mb-6">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}>
            <SkillCard key={skill.name} {...skill} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
