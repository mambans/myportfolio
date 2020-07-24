import React, { useContext } from 'react';
import { TitleLink } from '../SharedStyledComponents';
import styled from 'styled-components';
import ThemeContext from '../Theme/ThemeContext';
import LazyLoading from '../LazyLoading';
import Icons from './Icons';

const Container = styled.div`
  color: ${({ theme }) => theme.color};
  margin: 100px auto;
  width: 50%;
  max-width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  svg {
    margin: 15px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Item = styled.div`
  text-align: center;
  display: flex;
  flex-flow: column;
  width: max-content;
  width: 150px;

  svg {
    margin: 15px auto;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color2};
  font-weight: bold;
  flex-wrap: wrap;
  justify-content: center;
`;

const knownLanguages = [
  'JavaScript',
  'ReactJs',
  'AWS',
  'HTML',
  'CSS',
  'NodeJs',
  'Sass',
  'Less',
  'Github',
  'SQL',
];

export default () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <TitleLink href='#knowledge'>{'< Languages, Frameworks I know />'}</TitleLink>
      <ItemsContainer theme={theme}>
        <LazyLoading
          transition='fadeSlideRight'
          delay={100}
          increment={100}
          width={150}
          height={150}
        >
          {Icons(knownLanguages, 100, true).map((item, index) => (
            <Item key={index}>
              {item && item.icon}
              {item && item.name}
            </Item>
          ))}
        </LazyLoading>
      </ItemsContainer>
    </Container>
  );
};
