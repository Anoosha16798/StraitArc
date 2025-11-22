import React from 'react';
import { PROJECT_CATEGORIES } from '../../constants/categories';

const ProjectFilter = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {PROJECT_CATEGORIES.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            activeCategory === category.value
              ? 'bg-neutral-900 text-white'
              : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-300'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
