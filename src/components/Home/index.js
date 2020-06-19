import React, { useContext } from 'react';
import styled from 'styled-components';
import TypingText from './TypingText';
import LazyLoading from '../LazyLoading';
import ThemeContext from '../Theme/ThemeContext';

const Banner = styled.header`
  /* background-color: rgb(15, 15, 15); */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/images/woodCoffe.jpg");
    background-size: cover;
    background-repeat: none;
    filter: brightness(0.75);
  }
`;

const MeImage = styled.img`
  width: 300px;
  height: 300px;
  max-width: 100vw;
  max-height: calc(100vw - 50px);
  border-radius: 50%;
  padding: 25px;
  box-shadow: 0px 0px 2px 0px black;
  opacity: 0.55;
  object-fit: cover;
`;

const Center = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  margin: auto;

  @media screen and (max-width: 500px) {
    margin-top: 0;
  }
`;

const WelcomeText = styled.p`
  color: ${({ theme }) => theme.color2};
  z-index: 1;
  font-size: ${({ fontSize }) => fontSize};
  width: 500px;
  max-width: 100%;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color2};
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.color};
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 100%;
  max-height: 300px;
`;

const knowledgeOnClick = () => {
  const knowledgeSection = document.querySelectorAll(`[href*="#knowledge"]`)[1];
  if (knowledgeSection) {
    setTimeout(() => {
      knowledgeSection.scrollIntoView({
        behavior : 'smooth',
        block    : 'start',
        inline   : 'nearest',
      });
    }, 0);
  }
};

export default () => {
  const theme = useContext(ThemeContext);

  return (
    <Banner>
      <Center theme={theme}>
        <MeImage src={`${process.env.PUBLIC_URL}/images/me.jpg`} alt='' />
        <TextContainer>
          <TypingText />
          <LazyLoading transition='fade' delay={1500}>
            <WelcomeText theme={theme} fontSize={'1.5rem'}>
              My name is Robin Persson and I love computers and programming.
            </WelcomeText>
            <WelcomeText theme={theme} fontSize={'1.1rem'}>
              My focus within programing is <b>JavaScript</b>, <b>Reactjs</b>,
              <b> AWS</b> and{' '}
              <a href='#knowledge' onClick={knowledgeOnClick}>
                more
              </a>.
            </WelcomeText>
          </LazyLoading>
        </TextContainer>
      </Center>
    </Banner>
  );
};
