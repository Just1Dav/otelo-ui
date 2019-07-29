import React from "react";
import { NavbarUi } from "./styles";

const Navbar = props => <NavbarUi {...props}>{props.children}</NavbarUi>;

export default Navbar;
