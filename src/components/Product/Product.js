import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    //console.log(props);
    const { price, name, img, stock, seller } = props.product;


    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className="prooduct-name">{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>price:{price}</p>
                <p><small>only {stock} left in stock-oder soon</small></p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-reguler"
                > <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>

        </div>
    );
};

export default Product;