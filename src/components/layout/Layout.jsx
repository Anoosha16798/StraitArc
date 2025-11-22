import React from 'react';
import Header from './Header';
import Footer from './Footer';
import useScrollToTop from '../../hooks/useScrollToTop';

const Layout = ({ children }) => {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
