import React from 'react';
import content from '../../data/content.json';
import { ICON_IMAGES } from '../../constants/images';

const Services = () => {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Our Services</h2>
          <p className="body-large text-neutral-600 max-w-2xl mx-auto">
            Comprehensive design solutions tailored to your vision and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{ICON_IMAGES[service.icon]}</div>
              <h3 className="heading-3 text-xl mb-3">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;