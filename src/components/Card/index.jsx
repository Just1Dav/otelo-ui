import React from "react";
import { CardUi } from "./styles";

const Card = props => <CardUi {...props}>{props.children}</CardUi>;

export default Card;
