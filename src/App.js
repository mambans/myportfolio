import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Banner from './components/Home';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import ThemeButton from './components/Theme';
import ThemeContext, { themes } from './components/Theme/ThemeContext';
import getLocalstorage from './components/getLocalstorage';

const AppContainer = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.background};
  transition: all 500ms;
`;

function App() {
  const [ theme, setTheme ] = useState(
    getLocalstorage('activeTheme')
      ? themes[getLocalstorage('activeTheme').toLowerCase() || 'dark']
      : themes.dark,
  );

  const toggleTheme = () => {
    setTheme((curr) => {
      const newTheme = curr === themes.dark ? themes.light : themes.dark;
      localStorage.setItem('activeTheme', newTheme.name);
      return newTheme;
    });
  };

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
    <ThemeContext.Provider value={theme}>
      <AppContainer theme={theme}>
        <Banner />
        <ThemeButton toggleTheme={toggleTheme} />
        <Projects />
        <AboutMe />
        <ContactMe />
      </AppContainer>
    </ThemeContext.Provider>
  );
}

export default App;
