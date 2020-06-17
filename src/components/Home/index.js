import React from 'react';
import styled from 'styled-components';
import TypingText from './TypingText';

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

const MeImage = styled.div`
  width: 295px;
  height: 375px;
  img {
    width: 90%;
    height: 100%;
    /* width: 350px;
    height: 400px; */
    transform: rotate(-45deg) scale(1.5);
    object-fit: cover;
    box-shadow: 10px 10px 10px black;
  }
  display: block;
  margin: auto;
  transform: rotate(45deg);
  overflow: hidden;
  box-shadow: 10px 10px 10px black;

  opacity: 0.4;
`;

const Center = styled.div`
  display: flex;
  min-width: 1100px;
`;

export default () => {
  return (
    <Banner>
      <Center>
        <MeImage>
          <img src={`${process.env.PUBLIC_URL}/images/me.jpg`} alt='' />
        </MeImage>
        <TypingText />
      </Center>
    </Banner>
  );
};
