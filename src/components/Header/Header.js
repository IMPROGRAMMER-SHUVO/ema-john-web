import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faAd, faShare } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className='log'>
                <img className="logo" src={logo} alt="" />
            </div>

            <nav>
                <a href="/shop"> <FontAwesomeIcon icon={faShoppingCart} /> shop</a>
                <a href="/ordres"><FontAwesomeIcon icon={faAd} /> ordres Reviews</a>
                <a href="/inventory"><FontAwesomeIcon icon={faShare} /> Manage Inverntory</a>
            </nav>
        </div>
    );
};

export default Header;
