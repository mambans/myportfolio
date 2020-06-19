import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';

const HEIGHT = 300;

const Item = styled.div`
  height: ${HEIGHT}px;
  /* width: calc(100% / 3); */
  /* width: calc(calc(100% / 3) - 50px); */
  width: ${16 / 9 * HEIGHT}px;
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

  h1 {
    z-index: 1;
    height: 50px;
    margin: 15px 0;
    position: relative;
    transition: transform 500ms cubic-bezier(.35, .89, .34, .92);
    transform: translateY(calc(${HEIGHT / 2}px - 40px));
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

    h1 {
      transform: translateY(0);
    }

    #LanguagesUsed {
      opacity: 0.8;
    }
  }
`;

const HoverPlaceholder = styled.a`
  opacity: 0.75;
  transition: opacity 400ms;
  font-size: 2rem;
  height: ${HEIGHT}px;
  position: absolute;
  /* width: calc(calc(100% / 3) - 50px); */
  width: ${16 / 9 * HEIGHT}px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  transform: translateY(-77.5px);
  background-position: center;

  div {
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    background-image: url(/images/${({ backgroundImg }) => backgroundImg || 'woodCoffe.jpg'});
    background-size: cover;
    filter: blur(5px);
    border-radius: inherit;
    background-position: center;
    /* position: absolute; */
  }

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
    padding: 2px;
  }
`;

const ProjectItem = ({ title, text, link, githubLink, backgroundImg, languagesIcons }) => {
  return (
    <Item backgroundImg={backgroundImg}>
      <GithubIconLink href={githubLink}>
        <GitHubIcon />
      </GithubIconLink>
      <h1>{title}</h1>
      <HoverPlaceholder className='hoverCover' href={link} backgroundImg={backgroundImg}>
        <div />
        {/* <p>{title}</p> */}
      </HoverPlaceholder>
      <p>{text}</p>
      <LanguagesUsed id='LanguagesUsed'>
        {languagesIcons &&
          languagesIcons.map((item, index) => {
            return { ...item, key: index };
          })}
      </LanguagesUsed>
    </Item>
  );
};

export default {
  Container : styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    transform: translateY(-75px);
    /* padding-top: 220px; */
  `,
  Item      : ProjectItem,
};
