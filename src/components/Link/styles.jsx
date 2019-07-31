import styled, { css } from "styled-components";
import propTypes from "prop-types";

const TextColorMixin = css`
	color: ${props => props.textColor};
`;

const TextDecorationMixin = css`
	text-decoration: ${props => (props.underline ? "underline" : "none")};
`;

const LinkUi = styled.a`
	${props => props.textColor && TextColorMixin};
	&:hover {
		${props => props.underline && TextDecorationMixin};
		cursor: pointer;
	}
`;

LinkUi.propTypes = {
	textColor: propTypes.string,
	underline: propTypes.bool,
};

LinkUi.defaultProps = {
	textColor: null,
	underline: true,
};

export { LinkUi as default, LinkUi };
