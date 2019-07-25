import styled, { css } from "styled-components";

const RadiusMixin = css`
	border-radius: ${props => (props.rounded ? "25px" : "none")};
`;

const InputUi = styled.input`
	width: 35%;
	height: 40px;
	background-color: #fff;
	border: none;
	margin: 20px 15px;
	padding: 10px 20px;
	${props => props.rounded && RadiusMixin};
	&:focus {
		outline: unset;
	}
`;

export { InputUi as default, InputUi };
