import React, { useState } from 'react';
import { getCategoryLabel } from '../../constants/categories';

const ProjectDetail = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <p className="text-neutral-600">Project not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Image */}
      <div className="relative h-[60vh] mb-12">
        <img
          src={project.images[selectedImage]}
          alt={`${project.title} - Image ${selectedImage + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Image Thumbnails */}
      {project.images.length > 1 && (
        <div className="container-custom mb-12">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? 'border-neutral-900 opacity-100'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Project Info */}
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="heading-2 mb-4">{project.title}</h1>
            <p className="body-large text-neutral-600 mb-8">
              {project.description}
            </p>

            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-700 leading-relaxed">
                {project.details}
              </p>
            </div>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="mt-8">
                <h3 className="font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-50 p-8 rounded-lg sticky top-24">
              <h3 className="font-semibold mb-6">Project Details</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Category</p>
                  <p className="font-medium">{getCategoryLabel(project.category)}</p>
                </div>

                <div>
                  <p className="text-sm text-neutral-500 mb-1">Location</p>
                  <p className="font-medium">{project.location}</p>
                </div>

                <div>
                  <p className="text-sm text-neutral-500 mb-1">Year</p>
                  <p className="font-medium">{project.year}</p>
                </div>

                <div>
                  <p className="text-sm text-neutral-500 mb-1">Area</p>
                  <p className="font-medium">{project.area}</p>
                </div>

                <div>
                  <p className="text-sm text-neutral-500 mb-1">Client</p>
                  <p className="font-medium">{project.client}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;