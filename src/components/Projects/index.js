import React, { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import LazyLoading from '../LazyLoading';
import ProjectsFlap from './ProjectsFlap';
import Project from './Project';
import ThemeContext from './../Theme/ThemeContext';
import { DiJavascript } from 'react-icons/di';
import { FaReact, FaAws, FaCss3Alt, FaSass } from 'react-icons/fa';
import ProjectSelected from './ProjectSelected';
import { CSSTransition } from 'react-transition-group';

const Container = styled.div`
  min-height: 1000px;
  /* background: ${({ theme }) => theme.background}; */
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

const ProjectsObject = {
  aiofeed  : {
    title          : 'AioFeed',
    text           :
      'View Twitch & Youtube feeds and a Twitter list in one page, with Twitch (live/offline/update) notifications.',
    bigText        :
      'View Twitch & Youtube feeds and a Twitter list in one page, with Twitch (live/offline/update) notifications.',
    link           : 'https://aiofeed.com',
    githubLink     : 'https://github.com/mambans/aiofeed',
    backgroundImg  : 'site_aiofeed.png',
    languagesIcons : [
      <DiJavascript title='JavaScript' style={{ color: 'yellow' }} size={20} />,
      <FaReact title='React' style={{ color: '#65ffff' }} size={20} />,
      <FaAws title='Aws' style={{ color: '#ffc940' }} size={20} />,
      <FaCss3Alt title='Css' style={{ color: 'rgb(33, 100, 243)' }} size={20} />,
    ],
  },
  watchist : {
    title          : 'Watchist',
    text           :
      "Create a variety of lists with auto fetching details(for movies/tv series) from public API's.",
    bigText        :
      "Create a variety of lists with auto fetching details(for movies/tv series) from public API's.",
    link           : 'http://watchist.mambans.com.s3-website.eu-north-1.amazonaws.com/',
    githubLink     : 'https://github.com/mambans/watchist',
    backgroundImg  : 'site_watchist.png',
    languagesIcons : [
      <DiJavascript title='JavaScript' style={{ color: 'yellow' }} size={20} />,
      <FaReact title='React' style={{ color: '#65ffff' }} size={20} />,
      <FaAws title='Aws' style={{ color: '#ffc940' }} size={20} />,
      <FaSass title='Sass' style={{ color: '#c96195' }} size={20} />,
    ],
  },
  felix    : {
    title      : 'Felix',
    text       : 'Hello, this is my some context about me and who I am.',
    bigText    : 'Hello, this is my some context about me and who I am.',
    link       : 'https://www.google.com',
    githubLink : 'https://github.com/mambans/aiofeed',
  },
  alex     : {
    title      : 'Alex',
    text       : 'Hello, this is my some context about me and who I am.',
    bigText    : 'Hello, this is my some context about me and who I am.',
    link       : 'https://www.google.com',
    githubLink : 'https://github.com/mambans/aiofeed',
  },
  demosar  : {
    title      : 'Demozar',
    text       : 'Hello, this is my some context about me and who I am.',
    bigText    : 'Hello, this is my some context about me and who I am.',
    link       : 'https://www.google.com',
    githubLink : 'https://github.com/mambans/aiofeed',
  },
};

export default () => {
  const [ show, setShow ] = useState();
  const [ selected, setSelected ] = useState(false);
  const theme = useContext(ThemeContext);
  const ProjectsFlapRef = useRef();
  const selectedRef = useRef();

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
        <LazyLoading transition='fadeSlideUp' height={350} width={16 / 9 * 300 + 50}>
          {Object.values(ProjectsObject).map((project) => {
            return (
              <Project.Item
                selectProject={() => {
                  setSelected(project);
                  setTimeout(() => {
                    if (selectedRef.current) {
                      selectedRef.current.scrollIntoView({
                        behavior : 'smooth',
                        block    : 'end',
                        inline   : 'nearest',
                      });
                    }
                  }, 0);
                }}
                title={project.title}
                text={project.text}
                link={project.link}
                githubLink={project.githubLink}
                backgroundImg={project.backgroundImg}
                languagesIcons={project.languagesIcons}
              />
            );
          })}
        </LazyLoading>
        <CSSTransition
          key={selected.title}
          in={selected}
          classNames={'fadeSlideLeft'}
          timeout={1500}
          appear
          unmountOnExit>
          <ProjectSelected selected={selected} ref={selectedRef} timeout={0} />
        </CSSTransition>
      </Project.Container>
    </Container>
  );
};
