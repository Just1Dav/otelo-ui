import styled, { css } from "styled-components";
import propTypes from "prop-types";

const BackgroundMixin = css`
	background-color: ${props => props.bgColor};
`;

const WidthMixin = css`
	width: ${props => props.width && `${props.width}%`};
`;

const TextCenterMixin = css`
	text-align: ${props => props.textCenter && "center"};
`;

const CardUi = styled.div`
	border-radius: 5px;
	box-shadow: 0px 0px 5px 1px #33333338;
	${props => props.width && WidthMixin};
	${props => props.bgColor && BackgroundMixin};
	${props => props.textCenter && TextCenterMixin};
`;

CardUi.propTypes = {
	padding: propTypes.number,
	width: propTypes.number,
	bgColor: propTypes.string,
	textCenter: propTypes.bool,
};

CardUi.defaultProps = {
	padding: null,
	width: 40,
	bgColor: "#FFF",
	textCenter: false,
};

export { CardUi as default, CardUi };
