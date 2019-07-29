import styled, { css, keyframes } from "styled-components";

const BackgroundMixin = css`
	background-color: ${props => props.bgColor};
`;

const marquee = keyframes`
from  { text-indent:  100% }
to    { text-indent: -100% }
`;

const MarqueeUi = styled.div`
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
	white-space: nowrap;
	box-sizing: border-box;
	animation: ${marquee} 30s linear infinite;
	${props => props.bgColor && BackgroundMixin};
	& span {
		padding-left: 100px;
	}
	&:hover {
		cursor: pointer;
		animation-play-state: paused;
	}
`;

export { MarqueeUi as default, MarqueeUi };
