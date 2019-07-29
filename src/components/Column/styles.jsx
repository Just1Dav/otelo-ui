import styled, { css } from "styled-components";
import propTypes from "prop-types";

function getWidth(span) {
	if (!span) return;

	let width = (span / 12) * 100;
	return `width: ${width}%`;
}

const FlexMixin = css`
	display: flex;
	flex-direction: ${props => (props.row ? "row" : "column")};
	align-items: ${props => props.alignItems};
	justify-content: ${props => props.justifyContent};
`;

const TextCenterMixin = css`
	text-align: ${props => props.textCenter && "center"};
`;

const ScreenHeightMixin = css`
	height: ${props => props.screenHeight && "100vh"};
`;

const GradientMixin = css`
	background: ${props =>
		props.gradient &&
		"linear-gradient(45deg, #223258 0%, #223258 22%, #1e70c9 98%, #1e72cc 100%);"};
`;

const ColumnUi = styled.div`
	float: left;
    ${props => props.gradient && GradientMixin}
    ${props => props.screenHeight && ScreenHeightMixin}
    ${props => props.textCenter && TextCenterMixin}
	${props => props.xsFlex && FlexMixin}
	${props => (props.xs ? getWidth(props.xs) : "width: 100%")};
	@media only screen and (min-width: 768px) {
		${props => props.sm && getWidth(props.sm)};
	    ${props => props.smFlex && FlexMixin}
	}
	@media only screen and (min-width: 992px) {
		${props => props.md && getWidth(props.md)};
	    ${props => props.mdFlex && FlexMixin};
	}
	@media only screen and (min-width: 1200px) {
		${props => props.lg && getWidth(props.lg)};
	    ${props => props.lgFlex && FlexMixin};
	}
`;

ColumnUi.propTypes = {
	xs: propTypes.string,
	sm: propTypes.string,
	md: propTypes.string,
	lg: propTypes.string,
	row: propTypes.bool,
	xsFlex: propTypes.bool,
	msFlex: propTypes.bool,
	mdFlex: propTypes.bool,
	lgFlex: propTypes.bool,
	alignItems: propTypes.string,
	justifyContent: propTypes.string,
	textCenter: propTypes.bool,
	gradient: propTypes.bool,
};

ColumnUi.defaultProps = {
	xs: null,
	sm: null,
	md: null,
	lg: null,
	row: false,
	xsFlex: false,
	smFlex: false,
	mdFlex: false,
	lgFlex: false,
	alignItems: "flex-start",
	justifyContent: "flex-start",
	textCenter: false,
	gradient: false,
};

export { ColumnUi as default, ColumnUi };
