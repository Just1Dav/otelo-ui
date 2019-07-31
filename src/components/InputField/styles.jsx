import styled, { css } from "styled-components";

const RadiusMixin = css`
	border-radius: ${props => (props.rounded ? "25px" : "none")};
`;

const HeightMixin = css`
	height: ${props => props.height && `${props.height}px`};
`;

const FontWeightMixin = css`
	font-weight: ${props => (props.fontWeight ? props.fontWeight : 500)};
`;

const InputUi = styled.input`
	width: 100%;
	background-color: #fff;
	font-family: "Quicksand", sans-serif;
	border: none;
	padding: 10px 20px;
	${props => props.fontWeight && FontWeightMixin}
	${props => props.rounded && RadiusMixin};
	${props => props.height && HeightMixin}
	&:focus {
		outline: unset;
	}
`;

InputUi.propTypes = {
	fontWeight: propTypes.number,
	height: propTypes.number,
	rounded: propTypes.bool,
};

InputUi.defaultProps = {
	fontWeight: 600,
	height: 40,
	rounded: true,
};

export { InputUi as default, InputUi };
