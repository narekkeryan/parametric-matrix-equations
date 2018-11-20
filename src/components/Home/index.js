import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../static/logo.svg';
import './style.scss';

const Home = (props) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>Parametric Matrix Equations</p>
    <Link
      className="App-link"
      to="/math/matrix"
      rel="noopener noreferrer"
    >
      Enroll
    </Link>
  </header>
);

export default Home;