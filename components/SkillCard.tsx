type SkillCardProps = {
  name: string;
  icon?: string;
};

export default function SkillCard({ name }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center p-4 border border-white rounded-lg hover:border-blue-500 transition">
      <p>{name}</p>
    </div>
  );
}
