import React from 'react';

export const themes = {
  light : {
    name        : 'Light',
    background  : 'rgb(230,230,230)',
    color       : 'black',
    color2      : 'rgb(50,50,50)',
    color3      : 'rgb(125,125,125)',
    borderColor : '#00b7ff',
  },
  dark  : {
    name        : 'Dark',
    background  : 'rgb(35, 35, 50)',
    color       : '#ffffff',
    color2      : 'rgb(200,200,200)',
    color3      : 'rgb(175,175,175)',
    borderColor : 'white',
  },
};

export default React.createContext(themes.dark);
