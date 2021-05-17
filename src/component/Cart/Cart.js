import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let x = 0 ;
                           // --------------------  for loop dara ----------

    // for (let i = 0; i < cart.length; i++) {
    //     const y = cart[i];
    //     x = x + y.population 
    // }
                            // ---------------- map er dara ---------------------------
    // let total= cart.map((add)=> {
    //     x = x + add.population;
    //     return x
    // })
   
                             //---------------  reduce er daara --------------------------
     const total = cart.reduce((initialCountry, sumCountry) => sumCountry.population + initialCountry, 0)

    
    return (
        <div>
            <h4> cart added:{cart.length} </h4>
            <h5>{total} </h5>
        </div>
    );
};

export default Cart;