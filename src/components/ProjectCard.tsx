import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  imageUrl,
}) => {
  return (
    <div className="group bg-dark-light/50 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50 hover:border-primary/50 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20">
      <div className="aspect-video mb-6 overflow-hidden rounded-lg">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-300 text-transparent bg-clip-text">{title}</h3>
      <p className="text-gray-300 mb-6 line-clamp-3">{description}</p>
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors group"
        >
          <Github size={20} className="group-hover:rotate-12 transition-transform" />
          <span>View Code</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;