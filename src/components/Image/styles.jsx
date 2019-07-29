import styled, { css } from "styled-components";
import propTypes from "prop-types";

const RoundedMixin = css`
	border-radius: ${props => props.rounded && "15px"};
`;

const WidthMixin = css`
	width: ${props => props.width && `${props.width}px`};
`;

const ImageUi = styled.img`
	${props => props.rounded && RoundedMixin};
	${props => props.width && WidthMixin};
`;

ImageUi.propTypes = {
	rounded: propTypes.bool,
	width: propTypes.number,
};

ImageUi.defaultProps = {
	rounded: false,
	width: null,
};

export { ImageUi as default, ImageUi };
