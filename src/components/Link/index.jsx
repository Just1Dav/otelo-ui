import React from "react";
import { LinkUi } from "./styles";

const Link = props => <LinkUi {...props}>{props.children}</LinkUi>;

export default Link;
