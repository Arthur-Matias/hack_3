import React from 'react';
import './App.css';
import Routes from './routes'
import GlobalStyles from './GlobalStyles'

function ff(){
  alert("OI");
}

function AAA(props) {
  return (
    <div onClick = {props.onClick}>
      <h1>{props.text}</h1>
      <h1>{typeof(props.onClick)}</h1>

    </div>
  )
}

/*


*/

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles/>
    </>
  );
}

export default App;
