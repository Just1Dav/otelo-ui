import React, { Fragment } from "react";
import { TextUi } from "./styles";

const Text = props => (
	<Fragment>
		<TextUi {...props}>{props.children}</TextUi>
	</Fragment>
);

export default Text;
