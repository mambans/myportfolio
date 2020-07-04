import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import Icons from '../Knowledge/Icons';

const HEIGHT = 300;

const Item = styled.div`
  height: ${HEIGHT}px;
  /* width: calc(100% / 3); */
  /* width: calc(calc(100% / 3) - 50px); */
  width: ${(16 / 9) * HEIGHT}px;
  max-width: 100%;
  /* min-width:  */
  /* width: calc((100% / 3) - 20px); */
  background-image: url(/images/${({ backgroundImg }) => backgroundImg || 'woodCoffe.jpg'});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 25px;
  border-radius: 25px;
  color: white;
  box-shadow: 0px 0px 2px 0px black;
  text-decoration: none;
  text-shadow: 0px 0px 5px black;
  background-position: center;
  cursor: pointer;

  a#title {
    z-index: 1;
    height: 50px;
    margin: 15px 0;
    position: relative;
    transition: transform 500ms cubic-bezier(0.35, 0.89, 0.34, 0.92);
    transform: translateY(calc(${HEIGHT / 2}px - 40px));
    display: block;
    text-decoration: none;
    color: white;
    font-size: 2em;
    font-weight: bolder;
  }

  p {
    transition: opacity 1000ms;
    opacity: 0;
  }

  &:hover {
    p {
      opacity: 1;
    }

    .hoverCover {
      opacity: 0;
    }

    a#title {
      transform: translateY(10px);
    }

    #LanguagesUsed {
      opacity: 0.8;
    }
  }
`;

const HoverPlaceholder = styled.div`
  opacity: 0.75;
  transition: opacity 400ms;
  font-size: 2rem;
  height: ${HEIGHT}px;
  position: absolute;
  /* width: calc(calc(100% / 3) - 50px); */
  width: ${(16 / 9) * HEIGHT}px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  transform: translateY(-77.5px);
  background-position: center;

  background-image: url(/images/${({ backgroundImg }) => backgroundImg || 'woodCoffe.jpg'});
  background-size: cover;
  -webkit-filter: blur(5px);
  filter: blur(5px);

  p {
    opacity: 1;
    /* z-index: 10px; */
    position: absolute;
  }
`;

const GithubIconLink = styled.a`
  color: #ffffff;
  opacity: 0.5;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  /* bottom: 0; */
  margin: 20px;
  transition: opacity 250ms;

  &:hover {
    opacity: 1;
  }
`;

const LanguagesUsed = styled.div`
  position: absolute;
  bottom: 0;
  opacity: 0.2;
  padding-left: 10px;
  transition: opacity 250ms;

  svg {
    margin: 2px;
  }
`;

const ProjectItem = ({
  title,
  text,
  link,
  githubLink,
  backgroundImg,
  languages,
  selectProject,
}) => {
  return (
    <Item backgroundImg={backgroundImg}>
      <GithubIconLink href={githubLink}>
        <GitHubIcon />
      </GithubIconLink>
      <a id='title' href={link}>
        {title}
      </a>
      <HoverPlaceholder
        onClick={selectProject}
        className='hoverCover'
        href={link}
        backgroundImg={backgroundImg}
      />
      <p>{text}</p>
      <LanguagesUsed id='LanguagesUsed'>{languages && Icons(languages, 20)}</LanguagesUsed>
    </Item>
  );
};

export default {
  Container: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    transform: translateY(-75px);
    /* padding-top: 220px; */
  `,
  Item: ProjectItem,
};
