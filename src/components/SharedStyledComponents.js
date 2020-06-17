import React from 'react';
import styled from 'styled-components';

export const H1Link = styled.a`
  text-align: center;
  color: inherit;
  text-decoration: none;
  width: 100%;
  display: block;
  font-weight: bold;
  font-size: 2.2rem;
  transition: color 250ms, opacity 250ms;
  color: rgb(200, 200, 200);

  &:hover {
    color: #ffffff;
  }
`;

export const TitleLink = ({ title, href }) => (
  <H1Link
    href={href}
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
