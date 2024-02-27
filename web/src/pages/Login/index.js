import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/loading';


export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const isLoading = useSelector(state => state.auth.isLoading);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)){
      formErrors = true;
      toast.error('Email deve ser valido');
    }

    if(password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha incorreta');
    }

    if(formErrors) return;

    dispatch(actions.loginRequest({ email, password, prevPath }));

  }

  return (
    <Container>
      <Loading isLoading={isLoading}/>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          E-mail
          <input
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='E-mail'
        />
        </label>
        <label>
          Senha
          <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Senha'
        />
        </label>
        <button type='submit'>
          Entrar
        </button>

      </Form>
    </Container>
  );
}
