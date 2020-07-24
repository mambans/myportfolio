import React, { useContext } from 'react';
import styled from 'styled-components';

import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Button from '@material-ui/core/Button';
import ThemeContext, { themes } from './ThemeContext';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = styled(Button)`
  &&& {
    position: fixed;
    margin: 10px;
    top: 0;
    right: 0;
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.background};
    font-weight: bold;
    z-index: 10;
    opacity: 0.7;

    span {
      color: unset;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

const Tooltips = withStyles((theme) => ({
  arrow: {
    // color: theme.color2,
    color: 'rgb(200, 200, 200)',
  },
  tooltip: {
    // backgroundColor: theme.background,
    backgroundColor: 'rgb(35, 35, 45)',
    fontSize: '1rem',
  },
}))(Tooltip);

export default ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  return (
    <Tooltips
      theme={theme}
      title={`Change to ${theme.name === 'Dark' ? 'Light' : 'Dark'} theme`}
      placement='left'
    >
      <StyledButton onClick={toggleTheme} theme={theme}>
        {theme.name}
        {theme === themes.dark ? (
          <Brightness2Icon style={{ color: 'rgb(250,250,250)' }} />
        ) : (
          <WbSunnyIcon style={{ color: 'rgb(50,50,50)' }} />
        )}
      </StyledButton>
    </Tooltips>
  );
};
