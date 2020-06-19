import React, { useContext } from 'react';
import { TitleLink } from '../SharedStyledComponents';
import styled from 'styled-components';
import { DiJavascript } from 'react-icons/di';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import {
  FaReact,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaSass,
  FaLess,
  FaGithub,
} from 'react-icons/fa';
import ThemeContext from '../Theme/ThemeContext';
import LazyLoading from '../LazyLoading';

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
`;

const ItemsContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color2};
  font-weight: bold;
`;

export default () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <TitleLink href='#knowledge'>{'< Languages, Frameworks I know >'}</TitleLink>
      <ItemsContainer theme={theme}>
        <LazyLoading transition='fadeSlideLeft' delay={100} increment={75} width={150} height={150}>
          <Item>
            <DiJavascript style={{ color: 'yellow' }} size={100} />
            JavaScript
          </Item>
          <Item>
            <FaReact style={{ color: '#65ffff' }} size={100} />
            ReactJs
          </Item>
          <Item>
            <FaAws style={{ color: '#ffc940' }} size={100} />
            AWS
          </Item>
          <Item>
            <FaHtml5 style={{ color: '#ff8a58' }} size={100} />
            HTML
          </Item>
          <Item>
            <FaCss3Alt style={{ color: 'rgb(33, 100, 243)' }} size={100} />
            CSS
          </Item>
          <Item>
            <FaNodeJs style={{ color: 'green' }} size={100} />
            NodeJs
          </Item>
          <Item>
            <FaSass style={{ color: '#c96195' }} size={100} />
            Sass
          </Item>
          <Item>
            <FaLess style={{ color: 'black' }} size={100} />
            Less
          </Item>
          <Item>
            <FaGithub style={{ color: 'white' }} size={100} />
            Github
          </Item>
          <Item>
            <AiOutlineConsoleSql style={{ color: '#313131' }} size={100} />
            SQL
          </Item>
        </LazyLoading>
      </ItemsContainer>
    </Container>
  );
};
