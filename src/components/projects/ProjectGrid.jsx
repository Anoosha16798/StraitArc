import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import projectsData from '../../data/projects.json';

const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsData.projects
    : projectsData.projects.filter(p => p.category === activeCategory);

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-2 mb-4">Our Projects</h1>
          <p className="body-large text-neutral-600 max-w-2xl mx-auto">
            A collection of our architectural works spanning residential, commercial, and cultural projects.
          </p>
        </div>

        <ProjectFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGrid;