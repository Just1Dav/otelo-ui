import styled, { css, keyframes } from "styled-components";
import propTypes from "prop-types";

const BackgroundMixin = css`
	background-color: ${props => props.bgColor};
`;

const marquee = keyframes`
 0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`;

const MarqueeUi = styled.div`
	width: 100%;
	margin: 0 auto;
	white-space: nowrap;
	overflow: hidden;
	box-sizing: border-box;
	${props => props.bgColor && BackgroundMixin};
	& span {
		display: inline-block;
		margin-left: 35px;
		animation: ${marquee} ${props => props.itemAmount * 1.3}s linear infinite;
	}
	& span:hover {
		cursor: pointer;
		animation-play-state: paused;
	}
`;

MarqueeUi.propTypes = {
	bgColor: propTypes.string,
	itemAmount: propTypes.number,
};

MarqueeUi.defaultProps = {
	bgColor: "#FFF",
	itemAmount: 1,
};

export { MarqueeUi as default, MarqueeUi };
