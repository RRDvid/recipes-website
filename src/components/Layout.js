import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import "../assets/css/main.css"

const Layout = ({children}) => {
    return ( <div>
        <Navbar/>
         {children}
        <Footer/>
    </div> );
}

export default Layout;