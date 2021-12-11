import React from 'react';
import ReactDOM from 'react-dom';
import {Landing} from './pages/landing.js';
import {Logn} from './pages/login.js';
import {Signp} from './pages/signup.js';
import {Dash} from './pages/dashboard';
import {Router} from '@reach/router';
ReactDOM.render(
  <Router>
    <Landing path='/' />
    <Logn path='/login' />
    <Signp path='/signup' />
    <Dash path='/dashboard' />
  </Router>
  ,
  document.getElementById('root')
);