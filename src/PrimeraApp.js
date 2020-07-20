import React from 'react';
//import { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo } ) =>{

    return (
        <>
            <h1>{ saludo }</h1>
            <p>Prueba para varios objetos en un return.</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;