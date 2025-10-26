import React, { useState, useEffect } from 'react';
import './App.css';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import SideBarSocials from "./components/SideBarSocials";
import SideBarEmail from "./components/SideBarEmail";
import ScrollAnimationWrapper from "./wrappers/ScrollAnimationWrapper";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [showFixedContent, setShowFixedContent] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Must match the duration-700 class in SidebarSocials.jsx
  const TRANSITION_DURATION = 700;
  const APP_LOAD_TIME = 1500;

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoading(false); // Trigger the reveal animation
    }, APP_LOAD_TIME);

    const scrollThreshold = window.innerHeight * 0.9; 
    let timeoutId;

    const handleScroll = () => {
      const shouldBeVisible = window.scrollY > scrollThreshold;

      if (shouldBeVisible) {
        clearTimeout(timeoutId);
        setShouldRender(true); 
        setShowFixedContent(true); 
      } else if (!shouldBeVisible && showFixedContent) {
        setShowFixedContent(false); 
        
        // Unmount component *after* CSS transition ends
        timeoutId = setTimeout(() => {
            setShouldRender(false);
        }, TRANSITION_DURATION);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId); 
      clearTimeout(loadTimer);
    };
  }, [showFixedContent]);

  return (
    <div className='max-w-screen min-h-screen text-[var(--color-primary-content)] bg-[var(--color-base-300)] font-jetbrains'>
      
      <LoadingScreen isLoading={isLoading} />
      <Navbar></Navbar>
      <Homepage isLoading={isLoading}></Homepage>
      
      {shouldRender && (
          <>
            <SideBarSocials isVisible={showFixedContent} />
            <SideBarEmail isVisible={showFixedContent} />
          </>
      )}

      <div className="md:px-16 lg:px-16">
        <ScrollAnimationWrapper>
          <About></About>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Experience></Experience>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Projects></Projects>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <Contact></Contact>
        </ScrollAnimationWrapper>

        <Footer></Footer>
      </div>
    </div>
  )
}

export default App