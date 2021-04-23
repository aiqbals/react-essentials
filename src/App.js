import React from 'react';
import './App.css';

function Header(props) {
  //console.log(props);
  return (
    <header>
      <h1> {props.name} component </h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p> Main component {props.adjective} </p>
      <img src='https://cdn5.vectorstock.com/i/1000x1000/25/89/home-button-black-glass-3d-icon-with-metal-frame-vector-22832589.jpg' height={200} alt='imp to use alt' />
      <ul style={{textAlign: 'left'}}>
        {/* {dishes.map((e, id) => <li key={id} > {e} </li>)} */}
        {props.dishes.map((e) => <li key={e.id} > {e.dish} </li>)}
      </ul>
    </section>
  );
} 
// puting id is not best practices from react perspective, instead convert the dishes into obj
const dishes = [
  'vegi',
  'meat',
  'fruts'
];
const objDishes = dishes.map( (e, i) => ({id:i, dish: e}))
//console.log(objDishes);
// when we retrun an obj from fn like this, it needs to be wrapped in parenthesis 

function Footer(props) {
  return (
    <header>
      <p> Copyright {props.date} </p>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header name='Lany' />
      <Main adjective='amazing' dishes={objDishes} />
      <Footer date={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
