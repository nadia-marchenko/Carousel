import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';

const App = () => {
  return (
    <div>
      <h2 id="heading">Carousel </h2>
      <header />
    </div>
  );
};

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);