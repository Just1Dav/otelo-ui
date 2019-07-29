import styled, { css } from "styled-components";
import propTypes from "prop-types";

const TextColorMixin = css`
	color: ${props => props.textColor};
`;

const FontSizeMixin = css`
	font-size: ${props => props.fontSize && `${props.fontSize}px`};
`;

const FontWeightMixin = css`
	font-weight: ${props => (props.fontWeight ? props.fontWeight : 500)};
`;

const LineHeightMixin = css`
	line-height: ${props => props.lineHeight && `${props.lineHeight}em`};
`;

const TextUi = styled.span`
	font-family: "Quicksand", sans-serif;
	${props => props.fontWeight && FontWeightMixin}
    ${props => props.lineHeight && LineHeightMixin}
	${props => props.textColor && TextColorMixin};
	${props => props.fontSize && FontSizeMixin};
`;

TextUi.propTypes = {
	textColor: propTypes.string,
	fontSize: propTypes.number,
	fontWeight: propTypes.number,
	lineHeight: propTypes.number,
};

TextUi.defaultProps = {
	textColor: null,
	fontSize: null,
	fontWeight: null,
	lineHeight: null,
};

export { TextUi as default, TextUi };
