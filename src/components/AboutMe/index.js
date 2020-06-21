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

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export default () => {
  const theme = useContext(ThemeContext);
  return (
    <Container theme={theme}>
      <TitleLink href='#about_me'>A little bit about me</TitleLink>
      <LazyLoading height={25} width={'100%'} delay={50}>
        <p>
          My name is Robin Persson and I'm from Skåne (southern) Sweden. I movies, tv series and
          love "all" things computer related and I started light programming by my self after
          highschool but it wasn't until univeristy i started coding working applications.
        </p>

        <p>
          I went one year in univeristy for "web programming" and towards the end and after I worked
          on applications that I used my self, which inturn gave me passion for my projects. My
          first big project was also my first time with ReactJS, DNS and Aws.
        </p>

        <p>
          My first big project at{' '}
          <a className='link' href='www.aiofeed.com'>
            www.aiofeed.com
          </a>{' '}
          is an application which combines Twitch/Youtube/Twitter feeds in one page. I started this
          project because there were features I personally wanted and thought were missing from
          Twitch.tv.
        </p>

        <p>
          Nullam a risus at odio dignissim mattis. In hac habitasse platea dictumst. Sed id eleifend
          neque. Cras maximus urna lobortis, suscipit lacus quis, pellentesque mi. Morbi convallis
          dapibus diam non tristique. Proin eu massa dignissim, euismod ipsum et, posuere mi. Donec
          sed gravida quam. Cras ut venenatis lacus. Morbi in scelerisque purus. Praesent quis
          lobortis lectus. Quisque aliquet dolor vel consequat malesuada.
        </p>

        <p>
          Ut ac lacus sed justo pulvinar volutpat sed sit amet sapien. Integer nisl mi, pretium ac
          massa et, pretium porttitor elit. Maecenas iaculis lobortis arcu. Nullam quis laoreet
          mauris. Maecenas vel eros sit amet lectus viverra euismod vel eget urna. Aenean purus
          massa, lobortis sit amet venenatis eget, ultrices vitae sapien. Nunc vel nunc at lacus
          laoreet aliquet. Phasellus sit amet dolor lorem. Cras consectetur posuere mi, sit amet
          euismod mauris consectetur id.
        </p>
      </LazyLoading>
    </Container>
  );
};
