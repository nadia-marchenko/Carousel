import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Header from './components/Header';
import Carousel from './components/Carousel';

const App = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
    </div>
  );
};

const mountNode = document.querySelector('#app');
ReactDOM.render(<App />, mountNode);