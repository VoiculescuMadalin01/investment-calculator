import React from "react";
import Logo from "../assets/investment-calculator-logo.png";

function Header() {
    return (
        <header id="header">
            <img src={Logo} alt="logo" />
            <h1>Investment calculator</h1>
        </header>
    );
}

export default Header;
