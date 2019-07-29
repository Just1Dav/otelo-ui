import React from "react";
import { TextUi } from "./styles";

const Text = props => <TextUi {...props}>{props.children}</TextUi>;

export default Text;
