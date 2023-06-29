import React from "react";
import { keyframes, styled } from "styled-components";

const rotate = keyframes`
  			0% {
				transform: rotate(0deg) scale(1);
			}

			100% {
				transform: rotate(360deg) scale(1.2);
			}
`;

const LoaderStyled = styled.div`
	margin: 25px 0;
	display: flex;
	align-items: center;
	justify-content: center;

	& .loader-body {
		text-align: center;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 3px dashed teal;
		animation: ${rotate} 1000ms linear infinite;
	}
`;

const MyLoader = () => {
	return (
		<LoaderStyled>
			<div className="loader-body"></div>
		</LoaderStyled>
	);
};

export default MyLoader;
