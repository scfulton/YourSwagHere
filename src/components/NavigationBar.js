import React from "react";

function NavigationBar(props) {
    const answer = props.handleAllNav;
    let Nav;
    if (answer) {
    }

    return (
        <nav className='nav_bar'>
            <h3>Logo here</h3>
            <ul className='nav_links'>
                <li>Home</li>
                <li>Account</li>
                <li>Shop</li>
                <li>Sign Out</li>
            </ul>
        </nav>
    );
}

export default NavigationBar;
