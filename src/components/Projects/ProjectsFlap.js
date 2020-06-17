import React from 'react';
import styled from 'styled-components';

const StyledProjectsFlap = styled.a`
  width: 80%;
  margin: auto;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  cursor: pointer;
  color: rgb(200, 200, 200);
  transition: color 250ms, border 500ms;
  border-bottom: 2px solid #232332;
  transform: ${({ fullyVisible }) => (fullyVisible ? 'translateY(-125px)' : 'translateY(-100px)')};
  transition: transform 250ms, color 500ms, left 500ms;
  text-decoration: none;
  background: rgb(35, 35, 50);

  &:hover {
    color: #ffffff;
    transform: translateY(-125px);
  }

  &::before {
    box-sizing: inherit;
    content: '';
    position: absolute;
    top: 0;
    border-top: 2px solid ${({ fullyVisible }) => (fullyVisible ? '#ffffff' : 'transparent')};
    border-right: 2px solid ${({ fullyVisible }) => (fullyVisible ? '#ffffff' : 'transparent')};
    border-left: 2px solid ${({ fullyVisible }) => (fullyVisible ? '#ffffff' : 'transparent')};
    width: ${({ fullyVisible }) => (fullyVisible ? 'calc(100% - 2px)' : '0')};
    height: ${({ fullyVisible }) => (fullyVisible ? '100%' : '0')};
    left: ${({ fullyVisible }) => (fullyVisible ? '0' : '50%')};
    transition: ${({ fullyVisible }) =>
      fullyVisible
        ? 'width 500ms ease-out, left 500ms ease-out, height 500ms ease-out 500ms, border 500ms ease-out'
        : 'width 500ms ease-out 500ms, left 500ms ease-out 500ms, height 500ms ease-out, border 500ms ease-out 500ms'};
  }

  &::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    top: 0;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    border-left: 2px solid transparent;
    width: 0;
    height: 0;
    left: 50%;
    /* background: red; */

    transition: width 500ms ease-out 500ms, left 500ms ease-out 500ms, height 500ms ease-out,
      border 500ms ease-out 500ms;
  }

  &:hover {
    color: white;
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

  &:hover::after {
    left: 0;
    width: 100%;
    height: 100%;
    border-top-color: orange;
    border-right-color: orange;
    border-left-color: orange;
    transition: width 500ms ease-out, left 500ms ease-out, height 500ms ease-out 500ms,
      border 500ms ease-out;
  }
`;

export default React.forwardRef(({ fullyVisible }, ref) => {
  return (
    <StyledProjectsFlap
      href='#projects'
      ref={ref}
      fullyVisible={fullyVisible}
      onClick={(e) => {
        if (e.target) {
          e.target.scrollIntoView({
            behavior : 'smooth',
            block    : 'start',
            inline   : 'nearest',
          });
        }
      }}>
      <h2>Projects</h2>
    </StyledProjectsFlap>
  );
});
