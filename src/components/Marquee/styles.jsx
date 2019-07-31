import styled, { css, keyframes } from "styled-components";

const BackgroundMixin = css`
	background-color: ${props => props.bgColor};
`;

const marquee = keyframes`
from  { text-indent:  250% }
to    { text-indent: -250% }
`;

const MarqueeUi = styled.div`
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
	white-space: nowrap;
	box-sizing: border-box;
	animation: ${marquee} 35s linear infinite;
	${props => props.bgColor && BackgroundMixin};
	& span {
		padding-left: 100px;
	}
	&:hover {
		cursor: pointer;
		animation-play-state: paused;
	}
`;

InputUi.propTypes = {
	bgColor: propTypes.string,
};

InputUi.defaultProps = {
	bgColor: "#FFF",
};

export { MarqueeUi as default, MarqueeUi };
