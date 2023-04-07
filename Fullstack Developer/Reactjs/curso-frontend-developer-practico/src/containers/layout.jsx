import React from 'react';
import { Link } from 'react-router-dom';


const Layout = ({ children }) => {
    return (
    <div className="layout"> 
        {children}
    </div>
    );
}

export default Layout;
