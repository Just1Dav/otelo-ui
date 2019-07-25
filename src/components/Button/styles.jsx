import styled, { css } from "styled-components";

const BackgroundMixin = css`
	background-color: ${props => props.bgColor};
`;

const TextColorMixin = css`
	color: ${props => props.textColor};
`;

const RadiusMixin = css`
	border-radius: ${props => (props.rounded ? "25px" : "none")};
`;

const ButtonUi = styled.button`
	border: none;
	margin: 20px 16px;
	padding: 8px 65px;
	box-shadow: -1px 2px 4px 0px rgba(0, 0, 0, 0.35);
	font-weight: 500;
	${props => props.bgColor && BackgroundMixin};
	${props => props.textColor && TextColorMixin};
	${props => props.rounded && RadiusMixin};
	&:focus {
		outline: unset;
	}
	&:hover {
		cursor: pointer;
	}
	&:active {
		box-shadow: -1px 2px 12px 1px rgba(0, 0, 0, 0.35);
	}
`;

export { ButtonUi as default, ButtonUi };
