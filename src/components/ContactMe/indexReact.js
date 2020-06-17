import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';

const StyledFormControl = styled(Form)`
  width: 500px;
  margin: 200px auto;

  > div {
    margin-bottom: 20px;
  }


 label,textarea,input {
  color: white;
 }
`;

export default () => {
  const [ value, setValue ] = useState();
  const [ validated, setValidated ] = useState(false);

  const useInput = (initialValue) => {
    return {
      value,
      setValue,
      reset     : () => setValue(''),
      manualSet : {
        onClick : (event) => {
          setValue(event.target.textContent.trim());
        },
      },
      bind      : {
        value,
        onChange : (event) => {
          setValue(event.target.value.trim());
        },
      },
    };
  };

  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: text, bind: bindText, reset: resetText } = useInput('');

  const handleSubmit = (evt) => {
    console.log('handleSubmit -> evt', evt);
    console.log('handleSubmit -> evt.target', evt.target);
    evt.preventDefault();

    const form = evt.currentTarget;
    console.log('handleSubmit -> form', form);
    console.log('name', name);

    console.log('email', email);

    console.log('Text', Text);
    // if (form.checkValidity() === false) {
    //   evt.preventDefault();
    //   evt.stopPropagation();
    // } else {
    //   setValidated(true);
    //   setValidatedUsername(true);
    //   setValidatedPassword(true);
    //   loginAccount();
    // }
  };

  return (
    <StyledFormControl onSubmit={handleSubmit} noValidate validated={validated}>
      <Form.Group controlId='formGroupUserName'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Name'
          required
          // {...bindName}
          // isInvalid={!validatedUsername}
        />
        <Form.Control.Feedback type='invalid'>Invalid Username</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='formGroupPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='text'
          placeholder='...@gmail.com'
          required
          // {...bindEmail}
          // isInvalid={!validatedPassword}
        />
        <Form.Control.Feedback type='invalid'>Invalid Password</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='formGroupPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='text'
          as='textarea'
          rows='3'
          placeholder='Text'
          required
          // {...bindText}
          // isInvalid={!validatedPassword}
        />
        <Form.Control.Feedback type='invalid'>Invalid Password</Form.Control.Feedback>
      </Form.Group>
      <Button variant='primary' type='submit' disabled={!name || !email || !text}>
        Submit
      </Button>
    </StyledFormControl>
  );
};
