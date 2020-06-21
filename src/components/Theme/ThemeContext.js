import React from 'react';

export const themes = {
  light : {
    name        : 'Light',
    background  : 'rgb(250,250,250)',
    color       : 'black',
    color2      : 'rgb(50,50,50)',
    color3      : 'rgb(125,125,125)',
    borderColor : '#00b7ff',
    linkColor   : '#fd2672',
  },
  dark  : {
    name        : 'Dark',
    background  : 'rgb(35, 35, 45)',
    color       : '#ffffff',
    color2      : 'rgb(200,200,200)',
    color3      : 'rgb(175,175,175)',
    borderColor : 'white',
    linkColor   : '#fd2672',
  },
};

export default React.createContext(themes.dark);
