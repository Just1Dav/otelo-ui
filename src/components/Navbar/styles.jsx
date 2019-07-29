import styled, { css } from "styled-components";
import propTypes from "prop-types";

const BackgroundMixin = css`
	background-color: ${props => props.bgColor};
`;

const HeightMixin = css`
	height: ${props => props.height && `${props.height}px`};
`;

const FlexMixin = css`
	display: flex;
	flex-direction: ${props => (props.row ? "row" : "column")};
	align-items: ${props => props.alignItems};
	justify-content: ${props => props.justifyContent};
`;

const NavbarUi = styled.nav`
	width: 100%;
	${props => props.flex && FlexMixin}
	${props => props.height && HeightMixin}
	${props => props.bgColor && BackgroundMixin};
`;

NavbarUi.propTypes = {
	bgColor: propTypes.string,
	height: propTypes.number,
	row: propTypes.bool,
	alignItems: propTypes.string,
	justifyContent: propTypes.string,
	flex: propTypes.bool,
};

NavbarUi.defaultProps = {
	bgColor: "#19375E",
	height: 80,
	row: true,
	alignItems: "flex-start",
	justifyContent: "flex-start",
	flex: true,
};

export { NavbarUi as default, NavbarUi };
