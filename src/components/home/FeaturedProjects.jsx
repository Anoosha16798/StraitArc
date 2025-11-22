import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../data/projects.json';
import { getProjectDetailRoute } from '../../constants/routes';

const FeaturedProjects = () => {
  const featuredProjects = projectsData.projects.filter(p => p.featured);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Featured Projects</h2>
          <p className="body-large text-neutral-600 max-w-2xl mx-auto">
            Explore our latest architectural masterpieces that showcase innovation,
            sustainability, and timeless design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to={getProjectDetailRoute(project.id)}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="image-overlay"></div>
              </div>

              <div>
                <h3 className="heading-3 text-xl mb-2 group-hover:text-neutral-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-500 text-sm mb-2">
                  {project.location} • {project.year}
                </p>
                <p className="text-neutral-600">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;