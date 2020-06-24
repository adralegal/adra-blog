import React, { FunctionComponent } from "react";
import classes from "./navbar-item.module.css";

type NavbarItemProps = {
    subItems?: Array<String>,
}

const NavbarItem: FunctionComponent<NavbarItemProps> = ({subItems, children}) => {
    return (
      <li title={children + ""} className={classes.NavbarItem}>
        <span>{children}</span>
      </li>
    )
}

export default NavbarItem;
