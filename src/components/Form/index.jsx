import React from "react";
import { FormUi } from "./styles";

const Form = props => <FormUi {...props}>{props.children}</FormUi>;

export default Form;
