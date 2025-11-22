import React from 'react';
import content from '../../data/content.json';
import { PLACEHOLDER_IMAGES } from '../../constants/images';

const AboutHero = () => {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={PLACEHOLDER_IMAGES.aboutHero}
          alt="About us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 container-custom text-center text-white">
        <h1 className="heading-1 mb-4">About Us</h1>
        <p className="body-large max-w-2xl mx-auto">
          {content.about.mission.description}
        </p>
      </div>
    </section>
  );
};

export default AboutHero;