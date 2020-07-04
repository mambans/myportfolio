import React from 'react';
import LazyLoadingCore from './LazyLoadingCore';

/**
 * Wrapper for Lazy loading an array of childrens
 * @param {Array} children - Childrens to render
 * @param {Strign | Number} [height=300] - Height of the placeholder element
 * @param {Strign | Number} [width=height * (16/9)] - Width of the placeholder element
 */
export default ({
  children,
  height,
  width,
  transition,
  threshold = 0.5,
  delay = 0,
  increment = 0,
}) => {
  if (children.length >= 1) {
    let delayTime = delay;
    return children.map((item, index) => {
      delayTime =
        delayTime +
        (index === 0
          ? 0
          : Array.isArray(increment)
          ? increment[index - 1] || increment[increment.length - 1]
          : increment);
      return (
        <LazyLoadingCore
          key={index}
          height={Array.isArray(height) ? height[index] || height[height.length - 1] : height}
          width={Array.isArray(width) ? width[index] || width[width.length - 1] : width}
          delay={delayTime}
          transition={
            Array.isArray(transition)
              ? transition[index] || transition[transition.length - 1]
              : transition || `fadeSlide${index % 2 === 0 ? 'Right' : 'Left'}`
          }
        >
          {item}
        </LazyLoadingCore>
      );
    });
  }
  return (
    <LazyLoadingCore
      height={height}
      width={width}
      transition={transition}
      threshold={threshold}
      delay={delay}
    >
      {children}
    </LazyLoadingCore>
  );
};
