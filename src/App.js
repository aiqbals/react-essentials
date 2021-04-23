import React from 'react';
import './App.css';

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1> {props.name} component </h1>
    </header>
  );
}

function Main(props) {
  return (
    <header>
      <p> Main component {props.adjective} </p>
    </header>
  );
}

function Footer(props) {
  return (
    <header>
      <p> {props.date} </p>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header name='Lany' />
      <Main adjective='amazing' />
      <Footer date={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
