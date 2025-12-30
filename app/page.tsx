import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS",
    link: "https://github.com/YOUR_GITHUB/portfolio",
  },
  {
    title: "Todo App",
    description: "Full CRUD app using React and TypeScript",
    link: "https://github.com/YOUR_GITHUB/todo-app",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6">
      <section className="max-w-5xl mx-auto py-32">
        <h1 className="text-5xl font-bold leading-tight">
          Hi, I’m <span className="text-blue-500">Pavan Sai</span>
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-2xl">
          Frontend Developer building fast, modern web applications with
          Next.js, TypeScript, and Tailwind CSS.
        </p>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-5xl mx-auto py-20"
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
