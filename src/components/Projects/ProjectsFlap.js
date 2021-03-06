import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from './../Theme/ThemeContext';

const StyledProjectsFlap = styled.a`
  width: 80%;
  margin: auto;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color2};
  border-bottom: ${({ theme }) => `2px solid ${theme.background}`};
  transform: ${({ fullyVisible }) => (fullyVisible ? 'translateY(-125px)' : 'translateY(-100px)')};
  transition: transform 250ms, color 500ms, left 500ms, background 500ms, border 500ms,
    opacity 500ms;
  text-decoration: none;
  background: ${({ theme }) => theme.background};
  box-sizing: unset;
  opacity: ${({ fullyVisible }) => (fullyVisible ? '1' : '0.75')};

  &:hover {
    color: ${({ theme }) => theme.color};
    transform: translateY(-125px);
    opacity: 1;
  }

  &::before {
    box-sizing: inherit;
    content: '';
    position: absolute;
    top: 0;
    border-top: 2px solid
      ${({ fullyVisible, theme }) => (fullyVisible ? theme.borderColor : 'transparent')};
    border-right: 2px solid
      ${({ fullyVisible, theme }) => (fullyVisible ? theme.borderColor : 'transparent')};
    border-left: 2px solid
      ${({ fullyVisible, theme }) => (fullyVisible ? theme.borderColor : 'transparent')};
    width: ${({ fullyVisible }) => (fullyVisible ? 'calc(100% - 2px)' : '0')};
    height: ${({ fullyVisible }) => (fullyVisible ? '100%' : '0')};
    left: ${({ fullyVisible }) => (fullyVisible ? '0' : '50%')};
    transition: ${({ fullyVisible }) =>
      fullyVisible
        ? 'width 500ms ease-out, left 500ms ease-out, height 500ms ease-out 500ms, border 500ms ease-out'
        : 'width 500ms ease-out 500ms, left 500ms ease-out 500ms, height 500ms ease-out, border 500ms ease-out 500ms'};
  }

  &:hover::before {
    left: 0;
    width: 100%;
    height: 100%;
    border-top-color: white;
    border-right-color: white;
    border-left-color: white;
    transition: width 500ms ease-out, left 500ms ease-out, height 500ms ease-out 500ms,
      border 500ms ease-out;
  }
`;

export default React.forwardRef(({ fullyVisible }, ref) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledProjectsFlap
      theme={theme}
      href='#projects'
      ref={ref}
      fullyVisible={fullyVisible}
      onClick={(e) => {
        if (e.target) {
          e.target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      }}
    >
      <h2>Projects</h2>
    </StyledProjectsFlap>
  );
});
