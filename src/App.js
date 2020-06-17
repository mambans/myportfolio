import React, { useEffect } from 'react';
import './App.css';
import Banner from './components/Home';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';

function App() {
  useEffect(() => {
    if (window.location.hash) {
      const hashElement = document.querySelector(`[href*="${window.location.hash}"]`);
      if (hashElement) {
        setTimeout(() => {
          hashElement.scrollIntoView({
            behavior : 'smooth',
            block    : 'start',
            inline   : 'nearest',
          });
        }, 0);
      }
    }
  }, []);

  return (
    <div className='App'>
      <Banner />
      <Projects />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default App;
