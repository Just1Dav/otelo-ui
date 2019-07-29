import styled, { css } from "styled-components";

const RowUi = styled.div`
	&::after {
		content: "";
		clear: both;
		display: table;
	}
`;

export { RowUi as default, RowUi };

