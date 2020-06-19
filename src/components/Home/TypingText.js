import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

const StyledTypist = styled(Typist)`
  /* height: 100px; */
  /* width: 250px; */
  /* min-width: 600px; */
  max-width: 100%;
  /* margin-left: 5rem; */
  padding: 10px;
	color: rgb(240,240,240);
	position: relative;
	text-align: initial;
	/* position: absolute; */
	font-size: 1.8rem;

	code {
    font-size: 1.4rem;
    max-width: 100%;
display: flex;
  }

   a{
     color: white;
     font-size: 3rem;
     text-decoration: none;
   }

   /* @media screen and (min-width: 1000px) {
    min-width: 100px;
  } */
`;

export default () => {
  const time = new Date().getHours();
  // const welcomeMsg =
  //   time <= 5 ? 'night' : time <= 10 ? 'morning' : time <= 18 ? 'evening' : 'night';
  const welcomeMsg = time <= 5 ? 1 : time <= 10 ? 2 : time <= 17 ? 3 : time <= 20 ? 4 : 1;
  const msgs = [ 'evening', 'night', 'morning', 'day', 'evening' ];
  const charDelay = 1500 / (`good${msgs[welcomeMsg]}`.length + 10);

  return (
    <StyledTypist cursor={{ hideWhenDone: true, show: false }} avgTypingDelay={charDelay}>
      <a href='/' alt=''>
        Good {msgs[welcomeMsg - 1].padEnd(5, ' ').substring(0, 5)}
        <Typist.Backspace count={5} delay={charDelay * 5} />
        {msgs[welcomeMsg]}
      </a>
    </StyledTypist>
  );
};
