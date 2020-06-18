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
  color: white;
}
`;

export default ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledButton onClick={toggleTheme}>
      {theme.name}
      {theme === themes.dark ? (
        <Brightness2Icon style={{ color: 'rgb(20,20,20)' }} />
      ) : (
        <WbSunnyIcon style={{ color: 'rgb(255,255,255)' }} />
      )}
    </StyledButton>
  );
};
