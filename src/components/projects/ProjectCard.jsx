import React from 'react';
import { Link } from 'react-router-dom';
import { getProjectDetailRoute } from '../../constants/routes';
import { getCategoryLabel } from '../../constants/categories';

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={getProjectDetailRoute(project.id)}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden mb-4">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="image-overlay"></div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-neutral-900">
          {getCategoryLabel(project.category)}
        </div>
      </div>

      <div>
        <h3 className="heading-3 text-xl mb-2 group-hover:text-neutral-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-neutral-500 text-sm mb-2">
          {project.location} • {project.year}
        </p>
        <p className="text-neutral-600 line-clamp-2">{project.description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
