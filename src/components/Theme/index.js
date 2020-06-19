import React, { useContext } from 'react';
import styled from 'styled-components';

import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { Button } from '@material-ui/core';
import ThemeContext, { themes } from './ThemeContext';

const StyledButton = styled(Button)`
&&& {
  position: fixed;
  margin: 10px;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
  font-weight: bold;

  span {
    color: unset;
  }
}
`;

export default ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledButton onClick={toggleTheme} theme={theme}>
      {theme.name}
      {theme === themes.dark ? (
        <Brightness2Icon style={{ color: 'rgb(50,50,50)' }} />
      ) : (
        <WbSunnyIcon style={{ color: 'rgb(50,50,50)' }} />
      )}
    </StyledButton>
  );
};
