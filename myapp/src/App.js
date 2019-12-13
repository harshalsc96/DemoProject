import React from 'react';
import { Header } from './Learning/Components/Header/Header';
import { Basket } from './Learning/Components/Basket/Basket';
import './App.css';

export class App extends React.Component {

  render(){
    return (
      <div className = "myapp-parent">
          <Header />
          <Basket />
      </div>
    );
  }
}
