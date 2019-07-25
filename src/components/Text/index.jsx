import React, { Fragment } from "react";
import { TextUi } from "./styles";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700&display=swap');
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

const Text = props => (
	<Fragment>
		<GlobalStyle />
		<TextUi {...props}>{props.children}</TextUi>
	</Fragment>
);

export default Text;
