import React from 'react';
import AboutHero from '../components/about/AboutHero';
import Philosophy from '../components/about/Philosophy';
import Team from '../components/about/Team';

const About = () => {
  return (
    <div className="pt-20">
      <AboutHero />
      <Philosophy />
      <Team />
    </div>
  );
};

export default About;