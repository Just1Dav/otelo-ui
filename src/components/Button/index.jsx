import React from "react";
import { ButtonUi } from "./styles";

const Button = props => <ButtonUi {...props}>{props.children}</ButtonUi>;

export default Button;
