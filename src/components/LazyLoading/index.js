import React from 'react';
import LazyLoadingCore from './LazyLoadingCore';

/**
 * Wrapper for Lazy loading an array of childrens
 * @param {Array} children - Childrens to render
 * @param {Strign | Number} [height=300] - Height of the placeholder element
 * @param {Strign | Number} [width=height * (16/9)] - Width of the placeholder element
 */
export default ({ children, height, width, transition, threshold }) => {
  if (children.length >= 1) {
    return children.map((item, index) => (
      <LazyLoadingCore
        key={index}
        height={height}
        width={width}
        transition={`fadeSlide${index % 2 === 0 ? 'Right' : 'Left'}`}>
        {item}
      </LazyLoadingCore>
    ));
  }
  return (
    <LazyLoadingCore height={height} width={width} transition={transition} threshold={threshold}>
      {children}
    </LazyLoadingCore>
  );
};
