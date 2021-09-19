import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Checkbox from '../common/Checkbox';
import { useState } from 'react';


function Contact(props) {
  const [checked, setChecked] = useState(true);

  function changeGdpr() {
    setChecked(!checked);
    console.log(checked);
  }

  return (
    <section>
      <ContactWrapper>
        <Message>
          <h1>Już wkrótce nowa wersja aplikacji!</h1>
          <p>Aplikacja <b>Washed.pl</b> jest jeszcze w wersji deweloperskiej. Oznacza to, że możemy przyjąć ograniczoną
            liczbę użytkowników.
            <br />
            <br />
            Zapisz się na listę oczekujących aby być na bierząco!</p>
        </Message>
        <Form>
          <form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field'>
            <input type='hidden' name='form-name' value='contact' />
            <label>Email: </label>
            <Email type='email' name='email' />
            <br />
            <Checkbox type='checkbox' name='gdpr' onChange={() => changeGdpr()} /> Zgadzam się na przetwarzanie moich
            danych osobowych
            <br />
            <input type='hidden' name='plan' value={extractVariable(props.plan)} />
            <SubmitButton disabled={checked}>Zapisz się</SubmitButton>
          </form>
        </Form>
      </ContactWrapper>
    </section>
  );
};

function extractVariable(variable) {
  return variable.replace('?', '');
}

const Email = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  border: none;
  border-bottom: 2px solid black;
  width: 400px;
  font-size: 30px;

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  color: white;
  text-decoration: none;
  background: black;
  border-radius: 30px;
  font-size: 18px;
  padding: 15px 40px;
  margin-right: 5px;

  &:disabled {
    background: #e3e2e2;
    color: #8c8c8c;
  }

  &:hover {
    color: black;
    background: #d7d3d3;
  }
`;

const Form = styled.div`
  width: 500px;
  margin-top: 100px;

  label {
    font-family: ${theme.font.tertiary};
    font-size: 30px;
  }
`;

const ContactWrapper = styled.header`
  padding: 15px;
  padding-top: 160px;
  max-width: 900px;

  margin-left: auto;
  margin-right: auto;
`;

const Message = styled.div`
  color: black;

  p {
    color: black;
  }

  h1 {
    margin-bottom: 30px;
  }
`;


export default Contact;