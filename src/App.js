import React from 'react';
import './App.css';

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1> First component </h1>
    </header>
  );
}

function Main() {
  return (
    <header>
      <p> Main component </p>
    </header>
  );
}

function Footer() {
  return (
    <header>
      <p> Footer </p>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
