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

const FontWeightMixin = css`
	font-weight: ${props => (props.fontWeight ? props.fontWeight : 500)};
`;

const ButtonUi = styled.button`
	border: none;
	height: 40px;
	font-family: "Quicksand", sans-serif;
	padding: 8px 65px;
	box-shadow: -1px 2px 4px 0px rgba(0, 0, 0, 0.35);
	transition: box-shadow 0.2s ease-in-out;
	${props => props.fontWeight && FontWeightMixin}
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
		transition: box-shadow 0.2s ease-in-out;
	}
`;

ButtonUi.propTypes = {
	fontWeight: propTypes.number,
	bgColor: propTypes.string,
	textColor: propTypes.string,
	rounded: propTypes.bool,
};

ButtonUi.defaultProps = {
	fontWeight: 600,
	bgColor: "#FFF",
	textColor: "#000",
	rounded: true,
};

export { ButtonUi as default, ButtonUi };
