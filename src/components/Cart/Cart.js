import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;


    }

    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;
    return (
        <div className='carte'>
            <h3>Order Sammery:</h3>
            <h5> items-Odered:{props.cart.length}</h5>
            <br />
            <p>Total:{total.toFixed(2)}</p>
            <p>Shipping:{shipping}</p>
            <p>text:{tax.toFixed(2)}</p>
            <p className='grand'>Grand Total:{grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;