import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            Goodie Bag
            <div id="linksToStyle">
                <Link to="/"> Home </Link>
                <Link to="/candies"> Candies </Link>
            </div>
        </nav>
    )
}

export default Navbar
