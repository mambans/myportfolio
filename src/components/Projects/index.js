import React, { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import LazyLoading from '../LazyLoading';
import ProjectsFlap from './ProjectsFlap';
import Project from './Project';
import ThemeContext from './../Theme/ThemeContext';

const Container = styled.div`
  min-height: 1000px;
  background: ${({ theme }) => theme.background};
  /* background: rgb(35, 35, 50); */
  padding: 0 10%;
  transition: background 500ms;

  &::before {
    box-sizing: inherit;
    content: '';
    position: absolute;
    border-top: 2px solid ${({ fullyVisible, theme }) =>
      fullyVisible ? theme.borderColor : 'transparent'};
    width: ${({ fullyVisible }) => (fullyVisible ? '100%' : 'calc(80% * 0.8)')};
    left: ${({ fullyVisible }) => (fullyVisible ? '0' : '18%')};
    /* left: ${({ fullyVisible }) => (fullyVisible ? '0' : 'calc((80% * 1.2) * 0.2)')}; */
    border-bottom: 0;
    transition: width 2000ms linear 950ms, left 2000ms linear 950ms;
  }
`;

export default () => {
  const ProjectsFlapRef = useRef();
  const [ show, setShow ] = useState();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const ProjectsFlap = ProjectsFlapRef.current;

    if (ProjectsFlap) {
      const observer = new IntersectionObserver(
        function(entries) {
          if (entries[0].isIntersecting === true) {
            setShow(true);
          }
          return false;
        },
        { threshold: 1 },
      );
      observer.observe(ProjectsFlap);
      return () => {
        observer.unobserve(ProjectsFlap);
      };
    }
  }, []);

  return (
    <Container fullyVisible={show || window.location.hash === '#projects'} theme={theme}>
      <ProjectsFlap
        ref={ProjectsFlapRef}
        fullyVisible={show || window.location.hash === '#projects'}
      />
      <Project.Container>
        <LazyLoading>
          <Project.Item
            title='AioFeed'
            text='View Twitch & Youtube feeds and a Twitter list in one page, with Twitch (live/offline/update) notifications.'
            link={'https://aiofeed.com'}
            githubLink={'https://github.com/mambans/aiofeed'}
            backgroundImg={'site_aiofeed.png'}
          />
        </LazyLoading>

        <LazyLoading>
          <Project.Item
            title='Watchist'
            text='Create a variety of lists with auto fetching details(for movies/tv series) from public API&#39;s.'
            link={'http://watchist.mambans.com.s3-website.eu-north-1.amazonaws.com/'}
            githubLink={'https://github.com/mambans/watchist'}
            backgroundImg={'site_watchist.png'}
          />
        </LazyLoading>
        <LazyLoading>
          <Project.Item
            title='Felix'
            text='Hello, this is my some context about me and who I am.'
            link={'https://www.google.com'}
            githubLink={'https://github.com/mambans/aiofeed'}
          />
        </LazyLoading>
        <LazyLoading>
          <Project.Item
            title='Alex'
            text='Hello, this is my some context about me and who I am.'
            link={'https://www.google.com'}
            githubLink={'https://github.com/mambans/aiofeed'}
          />
        </LazyLoading>
        <LazyLoading>
          <Project.Item
            title='Demozar'
            text='Hello, this is my some context about me and who I am.'
            link={'https://www.google.com'}
            githubLink={'https://github.com/mambans/aiofeed'}
          />
        </LazyLoading>
      </Project.Container>
    </Container>
  );
};
