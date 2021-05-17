import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { useEffect, useState } from 'react';
import Country from './component/Country/Country';
import Cart from './component/Cart/Cart';

function App() {
const [countries , setCountries] = useState([])
const [addCountry, setAddCountry] = useState([]);
  useEffect( ()=> {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then( data => setCountries(data) )
   // .catch(error => console.log(error))
    
  },[])

 const countryHandle = (country) => {
   const newAddCountry = [...addCountry , country]
   setAddCountry(newAddCountry)
   console.log(addCountry)
 } 

  return (


    <div className="container">

           <Header></Header>
           <Cart cart={ addCountry} ></Cart>
           
         {
          
          countries.map(countryList => <Country countries={countryList} countryHandle= {countryHandle}  > </Country>)
         } 

            
    
    
    </div>
  );
}

export default App;
