import React from "react";
import { ColumnUi } from "./styles";

const Column = props => <ColumnUi {...props}>{props.children}</ColumnUi>;

export default Column;
