import React, { useContext } from 'react';
import styled from 'styled-components';
import LazyLoading from '../LazyLoading';
import { TitleLink } from '../SharedStyledComponents';
import ThemeContext from '../Theme/ThemeContext';

const Container = styled.div`
  min-height: 400px;
  color: ${({ theme }) => theme.color};
  margin: 100px auto;
  width: 50%;
  max-width: 100%;
  font-size: 1.1rem;
  text-align: start;
  letter-spacing: 0.5px;
  padding: 10px;

  a.link {
    color: ${({ theme }) => theme.linkColor};
  }

  img {
    height: 300px;
    margin-right: 25px;
    border-radius: 10px;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const SubContainer = styled.div`
  display: flex;
  /* display: grid;
  grid-template-areas: 'img text';
  grid-template-columns: min-content;
  grid-gap: 25px;

  p {
    grid-area: text;
  }

  img {
    grid-area: img;
  } */
`;

const TextContainer = styled.div``;

export default () => {
  const theme = useContext(ThemeContext);
  return (
    <Container theme={theme}>
      <TitleLink href='#about_me'>A little bit about me</TitleLink>
      <SubContainer>
        <LazyLoading height={300} width={'auto%'} delay={50} transition='fadeSlideRight'>
          <img src={`${process.env.PUBLIC_URL}/images/me22.jpg`} alt=''></img>
        </LazyLoading>
        <TextContainer>
          <LazyLoading height={25} width={'100%'} delay={50}>
            <p>
              My name is Robin Persson and I'm from Skåne (southern) Sweden. I have a big interest
              in movies/tv series, audio and "all" things computer related and I'm a also a huge fan
              of coffee. I started light programming by my self after highschool but it wasn't until
              univeristy i started coding complete applications that I use myself.
            </p>

            <p>
              I went one year in univeristy for "web programming" and towards the end and after I
              worked on applications that I used my self, which inturn gave me passion for my
              projects. My first big project was also my first time with ReactJS, DNS and Aws.
            </p>

            <p>
              My first big project at{' '}
              <a className='link' href='www.aiofeed.com'>
                www.aiofeed.com
              </a>{' '}
              is an application which combines Twitch/Youtube/Twitter feeds in one page. I started
              this project because there were features I personally wanted and thought were missing
              from{' '}
              <a className='link' href='www.aiofeed.com'>
                www.Twitch.tv
              </a>
              .
            </p>
          </LazyLoading>
        </TextContainer>
      </SubContainer>
    </Container>
  );
};
