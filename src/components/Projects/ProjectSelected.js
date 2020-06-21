import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BigProjectItem = styled.div`
  background-image: url(/images/${({ selected }) => selected.backgroundImg || 'woodCoffe.jpg'});
  background-position: center;
  background-size: cover;

  border-radius: 25px;
  width: 50%;
  /* height: 500px; */
  padding-bottom: calc(56.25% * 0.5);
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  position: relative;
`;

const GithubIconLink = styled.a`
  display: block;
  color: #ffffff;
  opacity: 0.8;
  position: absolute;
  /* right: 0;
  top: 0; */
  z-index: 2;
  margin: 20px;
  transition: opacity 250ms;

  &:hover {
    opacity: 1;
  }
`;

const TextOverlay = styled.div`
  opacity: 0.9;
  transition: opacity 500ms, background 500ms;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  border-radius: 25px;

  h1,
  p,
  a {
    color: white;
    text-shadow: 0px 0px 20px black;
  }

  a#title {
    z-index: 1;
    height: 50px;
    margin: 15px 0;
    position: relative;
    display: block;
    text-decoration: none;
    color: white;
    font-size: 2em;
    font-weight: bolder;

    svg {
      margin-left: 10px;
    }
  }

  &:hover {
    opacity: 1;
    /* background: rgba(0, 0, 0, 0.4); */
  }
`;

const LanguagesUsed = styled.div`
  position: absolute;
  bottom: 10px;
  opacity: 1;
  transition: opacity 250ms;

  svg {
    margin: 10px;
  }
`;

export default React.forwardRef(({ selected }, ref) => {
  return (
    <Container ref={ref}>
      <BigProjectItem classNames='TextOverlay' selected={selected}>
        <TextOverlay>
          <GithubIconLink href={selected.githubLink}>
            <GitHubIcon />
          </GithubIconLink>
          <a id='title' href={selected.link}>
            {selected.title}
            <LaunchIcon size={'inherit'} />
          </a>
          <p>{selected.bigText}</p>
          <LanguagesUsed id='LanguagesUsed'>
            {selected.languagesIcons &&
              selected.languagesIcons.map((item, index) => {
                return { ...item, key: index, props: { ...item.props, size: 50 } };
              })}
          </LanguagesUsed>
        </TextOverlay>
      </BigProjectItem>
    </Container>
  );
});
