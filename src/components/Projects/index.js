import React, { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import LazyLoading from '../LazyLoading';
import ProjectsFlap from './ProjectsFlap';
import Project from './Project';
import ThemeContext from './../Theme/ThemeContext';
import ProjectSelected from './ProjectSelected';
import { CSSTransition } from 'react-transition-group';

function importAll(r) {
  return r.keys().map(r);
}

const CreateProject = ({
  title,
  text,
  bigText,
  link,
  languages,
  githubLink = `https://github.com/mambans/${title.toLowerCase()}`,
  images,
}) => ({
  title,
  text,
  bigText,
  link,
  languages,
  githubLink,
  backgroundImg: require(`./../../assets/${title.toLowerCase()}/0.webp`),
  images,
});

const Container = styled.div`
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
  aiofeed: CreateProject({
    title: 'AioFeed',
    text:
      'View Twitch & Youtube feeds and a Twitter list in one page, with Twitch (live/offline/update) notifications.',
    bigText:
      'View Twitch & Youtube feeds and a Twitter list in one page, with Twitch (live/offline/update) notifications.',
    link: 'https://aiofeed.com',
    languages: ['JavaScript', 'ReactJs', 'AWS', 'Css'],
    images: importAll(
      require.context(`./../../assets/${'aiofeed'}/`, false, /\.(png|jpe?g|webp)$/),
    ),
  }),
  watchist: CreateProject({
    title: 'Watchist',
    text:
      "Create a variety of lists with auto fetching details(for movies/tv series) from public API's.",
    bigText:
      "Create a variety of lists with auto fetching details(for movies/tv series) from public API's.",
    link: 'http://watchist.mambans.com.s3-website.eu-north-1.amazonaws.com/',
    languages: ['JavaScript', 'ReactJs', 'AWS', 'Sass'],
    images: importAll(
      require.context(`./../../assets/${'watchist'}/`, false, /\.(png|jpe?g|webp)$/),
    ),
  }),
  myportfolio: CreateProject({
    title: 'MyPortfolio',
    text: 'My portfolio site to my projects and information about me.',
    bigText: 'Hello, this is my some context about me and who I am.',
    link: 'http://myportfolio.mambans.com.s3-website.eu-north-1.amazonaws.com/',
    languages: ['JavaScript', 'ReactJs', 'AWS', 'Sass'],
    images: importAll(
      require.context(`./../../assets/${'myportfolio'}/`, false, /\.(png|jpe?g|webp)$/),
    ),
  }),
};

export default () => {
  const [show, setShow] = useState();
  const [selected, setSelected] = useState(false);
  const theme = useContext(ThemeContext);
  const ProjectsFlapRef = useRef();
  const selectedRef = useRef();

  useEffect(() => {
    const ProjectsFlap = ProjectsFlapRef.current;

    if (ProjectsFlap) {
      const observer = new IntersectionObserver(
        function (entries) {
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
        <LazyLoading transition='fadeSlideUp' height={350} width={(16 / 9) * 300 + 50}>
          {Object.values(ProjectsObject).map((project, index) => {
            return (
              <Project.Item
                key={index}
                selectProject={() => {
                  setSelected(project);
                  setTimeout(() => {
                    if (selectedRef.current) {
                      selectedRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end',
                        inline: 'nearest',
                      });
                    }
                  }, 0);
                }}
                title={project.title}
                text={project.text}
                link={project.link}
                githubLink={project.githubLink}
                backgroundImg={project.backgroundImg}
                languages={project.languages}
              />
            );
          })}
        </LazyLoading>
      </Project.Container>
      <CSSTransition
        key={selected.title}
        in={Boolean(selected)}
        classNames={'fadeSlideLeft'}
        timeout={1500}
        appear
        unmountOnExit
      >
        <ProjectSelected selected={selected} ref={selectedRef} timeout={0} />
      </CSSTransition>
    </Container>
  );
};
