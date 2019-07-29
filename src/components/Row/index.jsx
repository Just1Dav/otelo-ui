import React from "react";
import { RowUi } from "./styles";

const Row = props => <RowUi {...props}>{props.children}</RowUi>;

export default Row;
