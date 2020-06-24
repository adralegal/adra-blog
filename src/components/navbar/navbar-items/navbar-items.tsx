import React, { FunctionComponent } from "react"
import classes from './navbar-items.module.css';
import NavbarItem from "./navbar-item";

const NavbarItems: FunctionComponent = () => {
    return (
        <ul className={classes.Wrapper}>
            <NavbarItem>Home</NavbarItem>
            <NavbarItem>Law</NavbarItem>
            <NavbarItem>Politics</NavbarItem>
            <NavbarItem>Judgements &amp; Legislations</NavbarItem>
            <NavbarItem>Critique</NavbarItem>
            <NavbarItem>Misc</NavbarItem>
            <NavbarItem>About</NavbarItem>
        </ul>
    )
}

export default NavbarItems;
