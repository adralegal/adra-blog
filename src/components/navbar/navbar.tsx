import React, { FunctionComponent } from "react";
import classes from "./navbar.module.css";
import NavbarItems from "./navbar-items/navbar-items";

const Navbar: FunctionComponent = () => {
    return (
        <div className={classes.Navbar}>
            <h1>ADRA.</h1>
            <NavbarItems/>
        </div>
    )
}

export default Navbar;
