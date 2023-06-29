import React from "react";
import { styled } from "styled-components";

const InputStyled = styled.input`
	width: 100%;
	padding: 5px 15px;
	margin: 5px 0;
	border: 1px solid teal;
`;

const MyInput = React.forwardRef((props, ref) => {
	return <InputStyled {...props} ref={ref} />;
});

export default MyInput;
