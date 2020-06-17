import React, { useState } from 'react';
import styled from 'styled-components';
import { FormControl, TextField, Button } from '@material-ui/core';
import { TitleLink } from '../SharedStyledComponents';

const StyledFormControl = styled(FormControl)`

&&&{
  width: 500px;
  margin: 50px auto;

  > div {
    margin-bottom: 20px;
  }
}


a {
	color: white;
	text-decoration: none;
	font-size: 2.5rem;
	font-weight: bold;
	margin: 20px auto;
}

 label,textarea,input {
/* font-size: 1.3rem; */
  color: white;
 }

 p.MuiFormHelperText-root.MuiFormHelperText-contained {
	 color: red;
 }
`;

export const getLocalstorage = (name) => {
  const item = localStorage.getItem(name);
  try {
    const itemParsed = JSON.parse(item);

    if (itemParsed === 'null') {
      return null;
    } else {
      return itemParsed;
    }
  } catch (error) {
    return item === '' ? null : item;
  }
};

export default () => {
  const [ name, setName ] = useState(getLocalstorage('Form-Name') || null);
  const [ email, setEmail ] = useState(getLocalstorage('Form-Email') || null);
  const [ text, setText ] = useState(getLocalstorage('Form-Text') || null);

  const invalidEmail = () => {
    const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email && email === '') return false;
    return email && email !== '' && !re.test(String(email).toLowerCase());
  };

  const handleChange = (field) => (e) => {
    if (field === 'name') {
      setName(e.target.value);
      localStorage.setItem('Form-Name', e.target.value);
    } else if (field === 'email') {
      setEmail(e.target.value);
      localStorage.setItem('Form-Email', e.target.value);
    } else if (field === 'text') {
      setText(e.target.value);
      localStorage.setItem('Form-Text', e.target.value);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // const form = evt.currentTarget;
    localStorage.removeItem('Form-Name');
    localStorage.removeItem('Form-Email');
    localStorage.removeItem('Form-Text');
  };

  return (
    <StyledFormControl onSubmit={handleSubmit}>
      <TitleLink title='Contact me' href='#contact_me' />
      <TextField
        id='standard-basic'
        label='Name'
        variant='filled'
        color='secondary'
        defaultValue={name}
        onChange={handleChange('name')}
        // {...bindName}
      />
      <TextField
        id='filled-basic'
        label='Email'
        variant='filled'
        color='secondary'
        helperText={invalidEmail() && 'Invalid email'}
        defaultValue={email}
        onChange={handleChange('email')}
        error={invalidEmail()}
        // {...bindEmail}
      />
      <TextField
        multiline
        rows={4}
        rowsMax={100}
        id='outlined-basic'
        label='Message'
        variant='filled'
        color='secondary'
        defaultValue={text}
        onChange={handleChange('text')}
        // {...bindMessageText}
      />
      <Button
        type='submit'
        variant='contained'
        color='secondary'
        size='large'
        onClick={handleSubmit}
        disabled={!name || !email || !text || invalidEmail()}>
        Submit
      </Button>
    </StyledFormControl>
  );
};
