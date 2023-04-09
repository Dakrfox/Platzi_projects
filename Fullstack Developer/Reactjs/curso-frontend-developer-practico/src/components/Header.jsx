import React, {useState}from 'react';
import "@styles/Header.scss"
import MenuComponent from "@components/Menu.jsx"
//imagenes
import MenuIcon from "@icons/icon_menu.svg";
import Logo from "../assets/logos/logo_yard_sale.svg";
import ShoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () =>{
        setToggle(true);
    }


    return (
        <nav>
            <img src={MenuIcon} alt="menu" className="menu"/>

                <div className="navbar-left">
                    <img src={Logo} alt="logo" className="nav-logo"/>

                        <ul>
                            <li>
                                <a href="/">All</a>
                            </li>
                            <li>
                                <a href="/">Clothes</a>
                            </li>
                            <li>
                                <a href="/">Electronics</a>
                            </li>
                            <li>
                                <a href="/">Furnitures</a>
                            </li>
                            <li>
                                <a href="/">Toys</a>
                            </li>
                            <li>
                                <a href="/">Others</a>
                            </li>
                        </ul>
                </div>

                <div className="navbar-right">
                    <ul>
                        <li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
                        <li className="navbar-shopping-cart">
                            <img src={ShoppingCart} alt="shopping cart"/>
                                <div>2</div>
                        </li>
                    </ul>
                </div>
                {toggle && <MenuComponent />}
        </nav>

    );
}

export default Header;