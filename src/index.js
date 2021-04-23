import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

/* function AppTwo() {
  return (
    <h1> This the second App </h1>
  );
} */


ReactDOM.render(
  /* <React.StrictMode>
    <App />
  </React.StrictMode> */ // You will be warned when your code is in violation of React's best practices and rules.
  /* <React.Fragment>
    <App />
    <AppTwo />
  </React.Fragment>, */
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();