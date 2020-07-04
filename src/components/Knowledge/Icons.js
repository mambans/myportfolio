import React from 'react';
import { DiJavascript } from 'react-icons/di';
import { AiOutlineConsoleSql } from 'react-icons/ai';

import {
  FaReact,
  FaAws,
  FaCss3Alt,
  FaSass,
  FaHtml5,
  FaNodeJs,
  FaLess,
  FaGithub,
} from 'react-icons/fa';

export default (languages, size = 20, includeText) => {
  const iconNames = {
    javascript: <DiJavascript title='JavaScript' style={{ color: 'yellow' }} size={size} />,
    reactjs: <FaReact title='React' style={{ color: '#65ffff' }} size={size} />,
    aws: <FaAws title='Aws' style={{ color: '#ffc940' }} size={size} />,
    css: <FaCss3Alt title='Css' style={{ color: 'rgb(33, 100, 243)' }} size={size} />,
    less: <FaLess style={{ color: 'black' }} size={size} />,
    sass: <FaSass title='Sass' style={{ color: '#c96195' }} size={size} />,
    github: <FaGithub style={{ color: 'white' }} size={size} />,
    html: <FaHtml5 style={{ color: '#ff8a58' }} size={size} />,
    nodejs: <FaNodeJs style={{ color: 'green' }} size={size} />,
    sql: <AiOutlineConsoleSql style={{ color: '#313131' }} size={size} />,
  };

  if (Array.isArray(languages) && languages.length >= 1) {
    if (!includeText) {
      return languages.map((name, index) => {
        const foundIcon = iconNames[name.toLowerCase()];
        return foundIcon && { ...foundIcon, key: index, title: name };
      });
    } else {
      return languages.map((name, index) => {
        const foundIcon = iconNames[name.toLowerCase()];
        return (
          foundIcon && {
            icon: { ...foundIcon, key: index, title: name },
            name,
          }
        );
      });
    }
  }

  return iconNames[languages.toLowerCase()];
};
