import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

const StyledTypist = styled(Typist)`
  min-height: 375px;
  min-width: 600px;
  margin-left: 50px;
	color: rgb(240,240,240);
	position: relative;
	text-align: initial;
	/* position: absolute; */
	font-size: 1.8rem;

	code {
		font-size: 1.4rem;
  }

   a{
     color: white;
     font-size: 3rem;
     text-decoration: none;
   }
`;

const EnjoyText = styled.b`
  text-align: end;
  display: block;
  color: rgb(0, 150, 0);
`;

export default () => {
  const time = new Date().getHours();
  // const welcomeMsg =
  //   time <= 5 ? 'night' : time <= 10 ? 'morning' : time <= 18 ? 'evening' : 'night';
  const welcomeMsg = time <= 5 ? 1 : time <= 10 ? 2 : time <= 18 ? 3 : 1;
  const msgs = [ 'night', 'night', 'morning', 'evening' ];

  return (
    <StyledTypist cursor={{ hideWhenDone: true, show: false }} avgTypingDelay={35}>
      <a href='/' alt=''>
        Good {msgs[welcomeMsg - 1].substring(0, 5)}
        <Typist.Backspace count={5} delay={220} />
        {msgs[welcomeMsg]}
      </a>
      <code>
        <pre>
          {`const Me = () => (
  My name is Robin Persson and I
  I'm focusing on web programming.
);`}
        </pre>
      </code>
      <Typist.Delay ms={800} />
      <EnjoyText>Enjoy</EnjoyText>
      {/* <span>{typingDone && "Done"}</span> */}
    </StyledTypist>
  );
};
