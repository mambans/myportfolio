import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from './Theme/ThemeContext';

export const H1Link = styled.a`
  text-align: center;
  color: inherit;
  text-decoration: none;
  width: 100%;
  display: block;
  font-weight: bold;
  font-size: 2.2rem;
  transition: color 250ms, opacity 250ms;
  color: ${({ theme }) => theme.color2};
  margin: 20px auto;

  &:hover {
    color: ${({ theme }) => theme.color};
  }
`;

export const TitleLink = ({ title, href, style }) => {
  const theme = useContext(ThemeContext);
  return (
    <H1Link
      theme={theme}
      href={href}
      style={{ ...style }}
      onClick={(e) => {
        if (e.target) {
          e.target.scrollIntoView({
            behavior : 'smooth',
            block    : 'start',
            inline   : 'nearest',
          });
        }
      }}>
      {title}
    </H1Link>
  );
};
