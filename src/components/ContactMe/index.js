import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FormControl, TextField, Button } from '@material-ui/core';
import { TitleLink } from '../SharedStyledComponents';
import getLocalstorage from './../getLocalstorage';
import ThemeContext from '../Theme/ThemeContext';
import LazyLoading from '../LazyLoading';

const StyledFormControl = styled(FormControl)`

&&&{
  width: 500px;
  margin: 50px auto;
  max-width: 95%;
  padding: 10px;

  > div.input {
    margin-bottom: 20px;
  }

  > * {
    z-index: 1;
  }
}




 label,textarea,input {
/* font-size: 1.3rem; */
  color: ${({ theme }) => theme.color};
 }

 p.MuiFormHelperText-root.MuiFormHelperText-contained {
	 color: red;
 }

  &::after {
  box-sizing: inherit;
  content: '';
  position: absolute;
  bottom: 50px;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
  border-left: 3px solid transparent;
  width: 0;
  height: 0;
  border-radius: 0 0 4px 4px;
  left: ${({ emailsent }) => (emailsent === 'true' ? '-3px' : '50%')};
  width: ${({ emailsent }) => (emailsent === 'true' ? '100%' : '0')};
  height: ${({ emailsent }) => (emailsent === 'true' ? 'calc(100% - 53px)' : '0')};
  border-bottom-color: ${({ emailsent }) => (emailsent === 'true' ? 'green' : 'transparent')};
  border-right-color: ${({ emailsent }) => (emailsent === 'true' ? 'green' : 'transparent')};
  border-left-color: ${({ emailsent }) => (emailsent === 'true' ? 'green' : 'transparent')};
  transition: width 500ms ease-out, left 500ms ease-out, height 500ms ease-out 500ms,
    border 500ms ease-out, border-top 2000ms ease-in 1000ms;
  /* z-index: -1; */
}

  &::before {
  box-sizing: inherit;
  content: 'Email has been sent';
  position: absolute;
  bottom: 50px;
  border-top: 3px solid transparent;
  width: 0;
  height: calc(100% - 53px);
  border-radius: 0 0 4px 4px;
  color: #e0e0e0;
  left: ${({ emailsent }) => (emailsent === 'true' ? '0  ' : '45%')};
  width: ${({ emailsent }) => (emailsent === 'true' ? '100%' : '10%')};
  border-top-color: ${({ emailsent }) => (emailsent === 'true' ? 'green' : 'transparent')};
  opacity: ${({ emailsent }) => (emailsent === 'true' ? '1' : '0')};
  transition: width 500ms ease-out 1000ms, left 500ms ease-out 1000ms, border 500ms ease-out, opacity 250ms ease-out 1000ms;
  font-weight: bold;
  /* z-index: -1; */
}
`;

const SendButton = styled(Button)`
background: ${({ emailsent }) =>
  emailsent === 'true'
    ? 'linear-gradient(217deg, rgba(0,150,0,.8), rgba(0,200,0,0.8) 70.71%),linear-gradient(127deg, rgba(0,50,0,.8), rgba(0,10,0,0.8) 70.71%),linear-gradient(336deg, rgba(0,100,0,.8), rgba(0,0,255,0) 70.71%)'
    : 'unset'};
color: 'white';

span {
  font-weight: ${({ emailsent }) => (emailsent === 'true' ? 'bold' : 'unset')};
  font-size: ${({ emailsent }) => (emailsent === 'true' ? '1.1rem' : 'unset')};
  height: 35px;
  transition: font-wight 200ms, font-size 200ms;
}
`;

const EmailLink = styled.div`
  font-weight: bold;
  text-align: start;
  height: 50px;
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: start;
  margin-bottom: 0;

  a {
    color: rgb(200, 200, 200);
    text-decoration: none;
    color: ${({ theme }) => theme.color3};

    &:hover {
      color: ${({ theme }) => theme.color};
    }
  }
`;

const sendEmail = (variables, setEmailsent, resetForm) => {
  window.emailjs
    .send('gmail_mambansmyportfolio', 'myportfolio_contactme', variables)
    .then((res) => {
      console.log('Email successfully sent!');
      localStorage.removeItem('Form-Name');
      localStorage.removeItem('Form-Email');
      localStorage.removeItem('Form-Text');
    })
    // Handle errors here however you like, or use a React error boundary
    .catch((err) => {
      setEmailsent(false);
      console.error('Oh well, you failed. Here some thoughts on the error that occured:', err);
    });
  resetForm();
};

export default () => {
  const [ emailsent, setEmailsent ] = useState();
  const theme = useContext(ThemeContext);

  const useInput = (initialValue) => {
    const [ value, setValue ] = useState(initialValue);

    return {
      value,
      setValue,
      reset    : () => setValue(''),
      bind     : (field) => {
        return {
          value,
          onChange : (event) => {
            setValue(event.target.value);
            localStorage.setItem(`Form-${field}`, event.target.value);
          },
        };
      },
    };
  };

  const { value: name, bind: bindName, reset: resetName } = useInput(
    getLocalstorage('Form-Name') || '',
  );
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput(
    getLocalstorage('Form-Email') || '',
  );
  const { value: text, bind: bindText, reset: resetText } = useInput(
    getLocalstorage('Form-Text') || '',
  );

  const resetForm = () => {
    resetName();
    resetEmail();
    resetText();
  };

  const invalidEmail = () => {
    const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return !re.test(String(email).toLowerCase()) === false ? false : email === '' ? false : true;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setEmailsent(true);
    sendEmail(
      {
        from_name  : name,
        from_email : email,
        text       : text,
      },
      setEmailsent,
      resetForm,
    );
  };

  return (
    <StyledFormControl onSubmit={handleSubmit} emailsent={String(emailsent)} theme={theme}>
      <LazyLoading width={500} height={[ 50, 50, 50, 115, 50, 50 ]} threshhold={0.2}>
        <TitleLink href='#contact_me' style={{ marginTop: '35px' }}>
          Contact me
        </TitleLink>
        <TextField
          className='input'
          id='filled-basic'
          label='Name'
          variant='filled'
          color='secondary'
          placeholder='Robin Persson'
          {...bindName('Name')}
        />
        <TextField
          className='input'
          id='filled-basic'
          label='Email'
          variant='filled'
          color='secondary'
          placeholder='robin@example.com'
          helperText={invalidEmail() && 'Invalid email'}
          error={invalidEmail()}
          {...bindEmail('Email')}
        />
        <TextField
          className='input'
          multiline
          rows={4}
          rowsMax={100}
          id='filled-basic'
          label='Text'
          variant='filled'
          color='secondary'
          placeholder='Good evening, my name is...'
          {...bindText('Text')}
        />
        <SendButton
          type='submit'
          variant='contained'
          color='secondary'
          size='large'
          onClick={handleSubmit}
          disabled={!name || !email || !text || invalidEmail()}
          emailsent={String(emailsent)}>
          {emailsent ? 'Message sent' : 'Send message'}
        </SendButton>
        <EmailLink theme={theme}>
          <a href='mailto:perssons1996@gmail.com'>Or direcly via email</a>
        </EmailLink>
      </LazyLoading>
    </StyledFormControl>
  );
};
