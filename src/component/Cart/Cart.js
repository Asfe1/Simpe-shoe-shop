import React from 'react';
import './Cart.css'


const Cart = ({ cart }) => {
    let price = 0
    let sPrice = 0;
    cart.map(product => {
        price = price + product.price;
        sPrice = sPrice + product.shipping;
    })
    const tax = price * 0.1;
    const gTotal = price + sPrice + parseFloat(tax.toFixed(2))
    return (
        <div id="cart"  >
            <h4 className='text-center' id='heading'>Order summary</h4>
            <h6 className='ps-3'>Selected Item: {cart.length} </h6>
            <hr />
            <h6 className='px-3'>Total Price: ${price} </h6>
            <h6 className='px-3'>Total Shipping: ${sPrice}</h6>
            <h6 className='px-3'>Tax: ${tax.toFixed(2)} </h6>
            <hr />
            <h6 className='px-3 fw-bold fs-4'>Grand Total: ${gTotal.toFixed(2)} </h6>

        </div>
    );
};

export default Cart;