import React from 'react';
import { Link } from 'react-router-dom';
import content from '../../data/content.json';
import { PLACEHOLDER_IMAGES } from '../../constants/images';
import { ROUTES } from '../../constants/routes';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={PLACEHOLDER_IMAGES.hero}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <h1 className="heading-1 mb-6 animate-fade-in">
          {content.hero.title}
        </h1>
        <p className="body-large mb-8 max-w-2xl mx-auto animate-slide-up">
          {content.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={ROUTES.PROJECTS}
            className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100"
          >
            {content.hero.cta.primary}
          </Link>
          <Link
            to={ROUTES.CONTACT}
            className="btn-secondary border-white text-white hover:bg-white hover:text-neutral-900"
          >
            {content.hero.cta.secondary}
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;