import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
	padding: 5px 15px;
	color: teal;
	font-size: 14px;
	background: transparent;
	border: 1px solid teal;
	cursor: pointer;

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

const MyButton = ({ children, ...props }) => {
	return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default MyButton;
