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

  // api call in useEffect
  const[data, setData] = useState(null); //initial state is null when app load
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    //if(!login) return; // jump out to useEffect call if no loging
    //setLoading(true);
    //fetch('https://api.github.com/users/${login}')
    // use to get dynmaic user, and use login as props to get the username from App's parrents
    fetch('https://api.github.com/users/')
    .then(response => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  }, []); //[login], login in the dependency array to call it when the login value changes

  if(loading) return <h1> Loading...</h1>

  return ( 
    <>
      <input 
        type="checkbox" 
        value={checked} 
        //onChange={() => setChecked((checked) => !checked)} />
        onChange={toggler} />

      <p> {checked ? JSON.stringify(data) : "No user available, check to get the data"} </p>

      {checked ? 
      <div>
        <h1> {data.name} </h1>
        <p> {data.location}</p>
        <img alt={data.login} src={data.avatar_url} /> 
      </div> : null }
    </>
  );
}

export default App;
//object destructuring and array destrucruing