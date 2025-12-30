type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div className="border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-blue-400"
      >
        View Project
      </a>
    </div>
  );
}
