import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header/>
    </div>
  );
};

const mountNode = document.querySelector('#app');
ReactDOM.render(<App />, mountNode);