import styled, { css } from "styled-components";
import propTypes from "prop-types";

const FlexMixin = css`
	display: flex;
	flex-direction: ${props => (props.row ? "row" : "column")};
	align-items: ${props => props.alignItems};
	justify-content: ${props => props.justifyContent};
`;

const FormUi = styled.form`
	width: 100%;
	${props => props.flex && FlexMixin}
`;

FormUi.propTypes = {
	row: propTypes.bool,
	flex: propTypes.bool,
	alignItems: propTypes.string,
	justifyContent: propTypes.string,
};

FormUi.defaultProps = {
	row: false,
	flex: false,
	alignItems: "flex-start",
	justifyContent: "flex-start",
};

export { FormUi as default, FormUi };
