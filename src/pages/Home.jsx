import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Services from '../components/home/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Services />
    </>
  );
};

export default Home;