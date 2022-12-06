import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement('button', {
    onClick: ()=>console.log('Click')
  }, 'Push me!')
);
