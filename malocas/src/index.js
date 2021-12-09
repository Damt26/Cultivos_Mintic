import React from 'react';
import ReactDOM from 'react-dom';
import {Landing} from './pages/landing.js';
import {Logn} from './pages/login.js';
import {Signp} from './pages/signup.js';
import {Router} from '@reach/router';
ReactDOM.render(
  <Router>
    <Landing path='/' />
    <Logn path='/login' />
    <Signp path='/signup' />
  </Router>
  ,
  document.getElementById('root')
);