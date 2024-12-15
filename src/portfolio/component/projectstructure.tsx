import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-gray-100 shadow-md p-4 rounded-lg">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
