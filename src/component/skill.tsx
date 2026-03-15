const skills = [
  {
    name: "React",
    size: "text-xl md:text-lg",
    color: "hover:text-sky-400",
    rotate: "-rotate-2",
    weight: "font-extrabold",
    opacity: "opacity-90",
  },
  {
    name: "Next.js",
    size: "text-lg md:text-xl",
    color: "hover:text-red-300",
    rotate: "rotate-1",
    weight: "font-medium",
    opacity: "opacity-80",
  },
  {
    name: "JavaScript",
    size: "text-lg md:text-xl",
    color: "hover:text-yellow-400",
    rotate: "-rotate-1",
    weight: "font-bold",
    opacity: "opacity-90",
  },
  {
    name: "Tailwind",
    size: "text-lg md:text-xl",
    color: "hover:text-cyan-400",
    rotate: "rotate-2",
    weight: "font-extrabold",
    opacity: "opacity-90",
  },
  {
    name: "MySQL",
    size: "text-xl md:text-lg",
    color: "hover:text-blue-400",
    rotate: "-rotate-1",
    weight: "font-semibold",
    opacity: "opacity-80",
  },
  {
    name: "AWS",
    size: "text-lg md:text-xl",
    color: "hover:text-orange-400",
    rotate: "rotate-1",
    weight: "font-semibold",
    opacity: "opacity-70",
  },
  {
    name: "HTML",
    size: "text-lg md:text-xl",
    color: "hover:text-orange-500",
    rotate: "-rotate-2",
    weight: "font-semibold",
    opacity: "opacity-75",
  },
  {
    name: "CSS",
    size: "text-base md:text-lg",
    color: "hover:text-blue-500",
    rotate: "rotate-2",
    weight: "font-medium",
    opacity: "opacity-70",
  },
  {
    name: "UI/UX",
    size: "text-lg md:text-xl",
    color: "hover:text-pink-400",
    rotate: "-rotate-1",
    weight: "font-bold",
    opacity: "opacity-85",
  },
  {
    name: "GitHub",
    size: "text-lg md:text-xl",
    color: "hover:text-purple-500 dark:hover:text-gray-100",
    rotate: "-rotate-1",
    weight: "font-semibold",
    opacity: "opacity-75",
  },
  {
    name: "Responsive Design",
    size: "text-lg md:text-lg",
    color: "hover:text-emerald-700",
    rotate: "rotate-1",
    weight: "font-bold",
    opacity: "opacity-80",
  },
  {
    name: "VSCode",
    size: "text-lg md:text-xl",
    color: "hover:text-rose-500",
    rotate: "-rotate-1",
    weight: "font-bold",
    opacity: "opacity-85",
  },
  {
    name: "Adobe Photoshop",
    size: "text-lg md:text-xl",
    color: "hover:text-blue-700 dark:hover:text-blue-700",
    rotate: "-rotate-1",
    weight: "font-bold",
    opacity: "opacity-75",
  },
]

export default function SkillCloud() {
  return (
    <section className="w-full">
      {/* <h2 className="mb-4 text-xl font-extrabold uppercase tracking-wide text-slate-800">
        Skills
      </h2> */}

      <div className="flex flex-wrap items-center gap-1 md:gap-2 xl:gap-x-4 xl:gap-y-3 leading-none text-slate-700">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`
              inline-block cursor-default select-none
              transition-all duration-300 ease-out
              hover:scale-110 hover:-translate-y-1 tracking-tighter
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
  )
}