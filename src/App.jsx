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

function App() {
  const [showFixedContent, setShowFixedContent] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  
  // Must match the duration-700 class in SidebarSocials.jsx
  const TRANSITION_DURATION = 700; 

  useEffect(() => {
    const scrollThreshold = window.innerHeight * 0.9; 
    let timeoutId;

    const handleScroll = () => {
      const shouldBeVisible = window.scrollY > scrollThreshold;

      if (shouldBeVisible) {
        // --- ENTERING: Triggers the smooth mount/entry animation ---
        clearTimeout(timeoutId);
        // 1. Immediately render component
        setShouldRender(true); 
        // 2. Immediately tell component to SHOW (triggers the transition end state)
        setShowFixedContent(true); 
      } else if (!shouldBeVisible && showFixedContent) {
        // --- EXITING: Triggers the smooth exit animation ---
        // 1. Tell component to HIDE (triggers the smooth exit transition in CSS)
        setShowFixedContent(false); 
        
        // 2. Unmount component *after* CSS transition ends
        timeoutId = setTimeout(() => {
            setShouldRender(false);
        }, TRANSITION_DURATION);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId); 
    };
  }, [showFixedContent]);

  return (
    <div className='max-w-screen min-h-screen text-[var(--color-primary-content)] bg-[var(--color-base-300)] font-jetbrains'>
      <Navbar></Navbar>
      <Homepage></Homepage>
      
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