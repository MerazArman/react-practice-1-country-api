import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, population, capital, borders, callingCodes, flag } = props.countries

    return (
        <div className="country" >

          <div className="country-box">
            <img src= {flag} alt="" />
            <h4> Country:  {name} </h4>
            <p>Capital: {capital} </p>
            <p> Borders: {borders} </p>
            <p> PhoneCode: {callingCodes} </p>
            <h6> Population: {population} </h6>
            <button onClick={()=> props.countryHandle(props.countries)} >add country</button>

            </div>
        </div>
    );
};

export default Country;