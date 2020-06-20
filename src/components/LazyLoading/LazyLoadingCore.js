import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
// import styles from './LazyLoading.module.scss';
import './styles.scss';

const ItemPlaceholder = styled.div`
  height: ${({ height }) =>
    height && typeof height === 'string' ? height : height + 'px' || '300px'};
  width: ${({ height, width }) =>
    width && typeof width === 'string'
      ? width
      : width ? width + 'px' : 16 / 9 * (typeof height === 'string' ? height : height) + 'px'};
  /* width: calc(calc(100% / 3) - 50px); */
  /* margin: 25px; */
  padding: 25px;
  border-radius: 25px;
`;

export default ({
  children,
  transition = 'fade',
  height = 50,
  width = 50,
  threshold = 0.5,
  delay = null,
}) => {
  const [ show, setShow ] = useState();
  const placeholderRef = useRef();
  const delayTimer = useRef();

  useEffect(
    () => {
      const placeholder = placeholderRef.current;

      if (placeholder) {
        const observer = new IntersectionObserver(
          function(entries) {
            if (entries[0].isIntersecting === true) {
              if (delay) {
                delayTimer.current = setTimeout(() => {
                  setShow(true);
                }, delay);
              } else {
                setShow(true);
              }
            }
            return false;
          },
          { threshold },
        );

        observer.observe(placeholder);

        return () => {
          observer.unobserve(placeholder);
          clearTimeout(delayTimer.current);
        };
      }
    },
    [ delay, threshold ],
  );

  if (show) {
    return (
      <CSSTransition in={show} timeout={500} classNames={transition} appear>
        {children}
      </CSSTransition>
    );
  }

  return <ItemPlaceholder ref={placeholderRef} height={height} width={width} />;
};
