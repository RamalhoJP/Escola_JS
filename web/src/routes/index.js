import React from 'react'

import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login/index';
import page404 from '../pages/Page404';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos/';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';

export default function Routes(){
    return(
      <Switch>
          <PrivateRoute exact path='/' component={Alunos} isClosed={false}/>
          <PrivateRoute exact path='/aluno/:id/edit' component={Aluno} isClosed/>
          <PrivateRoute exact path='/aluno' component={Aluno} isClosed/>
          <PrivateRoute exact path='/fotos/:id' component={Fotos} isClosed/>
          <PrivateRoute exact path='/login' component={Login} isClosed={false}/>
          <PrivateRoute exact path='/register' component={Register} isClosed={false}/>
          <PrivateRoute path='*' component={page404}/>
      </Switch>
    )
}

