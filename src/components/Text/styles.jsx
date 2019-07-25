import styled, { css } from "styled-components";

const TextColorMixin = css`
	color: ${props => props.textColor};
`;

const FontSizeMixin = css`
	font-size: ${props => props.fontSize && `${props.fontSize}px`};
`;

const TextUi = styled.span`
	font-family: "Source Sans Pro", sans-serif;
	font-weight: 600;
	${props => props.textColor && TextColorMixin};
	${props => props.fontSize && FontSizeMixin};
`;

export { TextUi as default, TextUi };
