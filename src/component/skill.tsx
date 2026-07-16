const skills = [
  {
    name: "React",
    size: "text-2xl md:text-[clamp(1.25rem,1.35vw,1.75rem)]",
    color: "hover:text-sky-400",
    rotate: "-rotate-2",
    weight: "font-extrabold",
    opacity: "opacity-90",
  },
  {
    name: "Next.js",
    size: "text-xl md:text-[clamp(1.7rem,1.15vw,1.5rem)]",
    color: "hover:text-red-300",
    rotate: "rotate-1",
    weight: "font-medium",
    opacity: "opacity-80",
  },
  {
    name: "JavaScript",
    size: "text-xl md:text-[clamp(1.7rem,1.15vw,1.5rem)]",
    color: "hover:text-yellow-400",
    rotate: "-rotate-1",
    weight: "font-bold",
    opacity: "opacity-90",
  },
  {
    name: "Tailwind",
    size: "text-xl md:text-[clamp(1.7rem,1.15vw,1.5rem)]",
    color: "hover:text-cyan-400",
    rotate: "rotate-2",
    weight: "font-extrabold",
    opacity: "opacity-90",
  },
  {
    name: "MySQL",
    size: "text-xl md:text-[clamp(1.4rem,1vw,1.35rem)]",
    color: "hover:text-blue-400",
    rotate: "-rotate-1",
    weight: "font-semibold",
    opacity: "opacity-80",
  },
  {
    name: "AWS",
    size: "text-xl md:text-[clamp(1.7rem,1.15vw,1.5rem)]",
    color: "hover:text-orange-400",
    rotate: "rotate-1",
    weight: "font-semibold",
    opacity: "opacity-70",
  },
  {
    name: "HTML",
    size: "text-xl md:text-[clamp(1.7rem,1.15vw,1.5rem)]",
    color: "hover:text-orange-500",
    rotate: "-rotate-2",
    weight: "font-semibold",
    opacity: "opacity-75",
  },
  {
    name: "CSS",
    size: "text-xl md:text-[clamp(1.4rem,1vw,1.35rem)]",
    color: "hover:text-blue-500",
    rotate: "rotate-2",
    weight: "font-medium",
    opacity: "opacity-70",
  },
  {
    name: "UI/UX",
    size: "text-xl md:text-[clamp(1.35rem,1.25vw,1.6rem)]",
    color: "hover:text-pink-400",
    rotate: "-rotate-1",
    weight: "font-bold",
    opacity: "opacity-85",
  },
  {
    name: "GitHub",
    size: "text-xl md:text-[clamp(1.7rem,1.15vw,1.5rem)]",
    color: "hover:text-purple-500 dark:hover:text-gray-100",
    rotate: "-rotate-1",
    weight: "font-semibold",
    opacity: "opacity-75",
  },
  {
    name: "Responsive Design",
    size: "text-xl md:text-[clamp(1.7rem,1.15vw,1.5rem)]",
    color: "hover:text-emerald-700",
    rotate: "rotate-1",
    weight: "font-bold",
    opacity: "opacity-80",
  },
  {
    name: "VSCode",
    size: "text-xl md:text-[clamp(1.7rem,1.15vw,1.5rem)]",
    color: "hover:text-rose-500",
    rotate: "-rotate-1",
    weight: "font-bold",
    opacity: "opacity-85",
  },
  {
    name: "Adobe Photoshop",
    size: "text-xl md:text-[clamp(1.7rem,1.15vw,1.5rem)]",
    color: "hover:text-blue-700 dark:hover:text-blue-700",
    rotate: "-rotate-1",
    weight: "font-bold",
    opacity: "opacity-75",
  },
];

export default function SkillCloud() {
  return (
    <section className="w-full">
      <div
        className="
          flex flex-wrap items-center
          gap-x-4 gap-y-4
          md:gap-x-[clamp(0.75rem,1vw,1.25rem)]
          md:gap-y-[clamp(0.65rem,0.8vw,1.4rem)]
          leading-none text-slate-700
        "
      >
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`
              inline-block cursor-default select-none
              tracking-tighter
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:scale-110
              ${skill.size}
              ${skill.color}
              ${skill.rotate}
              ${skill.weight}
              ${skill.opacity}
            `}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
