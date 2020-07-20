import React from 'react'; // usar react para entender html en el js
import ReactDOM from 'react-dom'; // ayuda a renderizar codigo js en el html
//import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';

//const mensaje = <h1>Hola mundo desde React.</h1>;
//console.log(mensaje);

const divRoot = document.querySelector('#root');
//console.log(divRoot);

//llamar el objeto de react-dom para que coloque lo que yo quiero en el html
// ofrece unas caracteristica, ofrece para comunicar entre componentes
//ReactDOM.render( mensaje, divRoot );

// render desde un componente
//ReactDOM.render( <PrimeraApp />, divRoot ); // llamar el component

// tarea
ReactDOM.render( <CounterApp value = { 3 } />, divRoot ); // llamar el component
