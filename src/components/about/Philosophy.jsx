import React from 'react';
import content from '../../data/content.json';

const Philosophy = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-2 text-center mb-12">Our Design Philosophy</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {content.about.philosophy.map((item, index) => (
            <div key={index} className="p-8 bg-neutral-50 rounded-lg">
              <h3 className="heading-3 text-xl mb-4">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {content.about.achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                {achievement.number}
              </p>
              <p className="text-neutral-600">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
