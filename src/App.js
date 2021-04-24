import React, {useState, useEffect, useReducer} from 'react';
import './App.css';

function SecretComponent() {
  return <h1>For authorized user only</h1>;
}

function RegularComponent() {
  return <h1>Everyone can see the component</h1>
}

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
    <footer>
      <p> Copyright {props.date} </p>
    </footer>
  );
}

//function App({ authorized }) { // when obj destructuring
  function App() { //when array destructuring using useState
  /* return (
    <div className="App">
      <Header name='Lany' />
      <Main adjective='amazing' dishes={objDishes} />
      <Footer date={new Date().getFullYear()}/>
    </div>
  ); */
  /* return ( 
    <>
      {authorized ? <SecretComponent /> : <RegularComponent />} 
    </>
  ); */
  
  //const [arrItem, setArrVal] = useState('firstVal'); 
  // useState has two argument, undefined (needs to fill with val which is inital state var) and fn is second arg to update the state.
  //console.log(arrItem);

  /* useEffect(() => {
    console.log('It's ${emotion} around here!');
  },  [emotion]); */
  //cause sideeffect, means to load data using api. It takes two arg, second one called dependecy arr
  // correctly shows the useEffect Hook used with the dependency array argument to track values
  
  /* return ( 
    <>
      <h1> use useState for destrucruing {arrItem} </h1> 
      <button onClick={() => setArrVal('changedVal')}> Change </button>
      <button onClick={() => setArrVal('happy')}> Initial </button>
    </>
  ); */
  
  //const [checked, setChecked] = useState(false);
  const [checked, toggler] = useReducer(
    (checked) => !checked,
    false);
  //another way using useReducer - takes two arg, fn to update the state, and initial state
  /* function toggler(){
    setChecked((checked) => !checked)
  } */


  return ( 
    <>
      <input 
        type="checkbox" 
        value={checked} 
        //onChange={() => setChecked((checked) => !checked)} />
        onChange={toggler} />

      <p> {checked ? "chekcked" : "unchecked"} </p>
    </>
  );
}

export default App;
//object destructuring and array destrucruing