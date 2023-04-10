import React, {useState, useContext}from 'react';
import "@styles/Header.scss"
import MenuComponent from "@components/Menu.jsx"
//imagenes
import MenuIcon from "@icons/icon_menu.svg";
import Logo from "../assets/logos/logo_yard_sale.svg";
import ShoppingCart from "@icons/icon_shopping_cart.svg";
import AppContext from '../context/AppContext';
import MyOrder from "@containers/MyOrder"


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const {state} = useContext(AppContext);
    const [toggleOrders, setToggleOrders] = useState(false);
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
                        <li className="navbar-shopping-cart" onClick={()=>{setToggleOrders(!toggleOrders)}}>
                            <img src={ShoppingCart} alt="shopping cart"/>
                            {state.cart.length > 0 ? <div>{state.cart.length}</div>: null}
                        </li>
                    </ul>
                </div>
                {toggle && <MenuComponent />}
                {toggleOrders && <MyOrder />}
        </nav>

    );
}

export default Header;