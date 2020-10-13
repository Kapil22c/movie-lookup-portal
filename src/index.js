import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './Search';
import List from './List';
// 

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div className='container'>
    {/* <h1 className='title'>React movie search</h1> */}
    <Search />
    <List />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
