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

const checklist = [
  'boots', 'meets', 'light'
];
//console.log(checklist[0]) 
const [, , light] = [
  'boots', 'meets', 'light'
];
console.log(light); // array destrucruting way


ReactDOM.render(
  /* <React.StrictMode>
    <App />
  </React.StrictMode> */ // You will be warned when your code is in violation of React's best practices and rules.
  /* <React.Fragment>
    <App />
    <AppTwo />
  </React.Fragment>, */
  <App authorized={false} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();