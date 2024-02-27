import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from '../Register/styled';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const dispatch = useDispatch();
  const id = useSelector(state => state.auth.user.id);
  const nomeStored = useSelector(state => state.auth.user.nome);
  const emailStored = useSelector(state => state.auth.user.email);

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if(!id) return;

    setNome(nomeStored);
    setEmail(emailStored);

  },[emailStored, id, nomeStored]);

  async function handleSubmit(e){
    e.preventDefault();

    let formErrors = false;

    if(nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }

    if (!isEmail(email)){
      formErrors = true;
      toast.error('Email deve ser valido');
    }

    if(!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if(formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password, id}));

  }

  return (
    <Container>
      <h1>{ !id ? 'Crie sua Conta' : 'Editar dados' }</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor='nome'>
          Nome:
          <input
            type='text'
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder='Seu nome'/>
        </label>
        <label htmlFor='email'>
          Email:
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Seu e-mail'/>
        </label>
        <label htmlFor='senha'>
          Senha:
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Sua Senha'/>
        </label>
        <button type='submit'>{ !id ? 'Criar Conta' : 'Salvar ' }</button>
      </Form>
    </Container>
  );
}