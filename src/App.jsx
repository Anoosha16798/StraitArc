import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingAnimation from './components/common/LoadingAnimation';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetailPage from './pages/ProjectDetailPage';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const handleAnimationComplete = () => {
    setShowContent(true);
    // Delay logo appearance slightly for smooth transition
    setTimeout(() => {
      setShowLogo(true);
    }, 100);
  };

  return (
    <Router>
      {!showContent && (
        <LoadingAnimation onComplete={handleAnimationComplete} />
      )}
      
      {showContent && (
        <div className="min-h-screen flex flex-col">
          <Header showLogo={showLogo} />
          
          <main className="flex-grow">
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.PROJECTS} element={<Projects />} />
              <Route path={ROUTES.PROJECT_DETAIL} element={<ProjectDetailPage />} />
              <Route path={ROUTES.ABOUT} element={<About />} />
              <Route path={ROUTES.CONTACT} element={<Contact />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
