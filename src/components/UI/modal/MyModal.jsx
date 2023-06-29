import React from "react";
import { styled } from "styled-components";

const ModalStyled = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	display: ${(props) => (props.visible ? "flex" : "none")};
	justify-content: center;
	align-items: center;
	padding: 15px;
	background: rgba(0, 0, 0, 0.4);

	& .modal-content {
		padding: 25px;
		background: white;
		border-radius: 16px;
		min-width: 250px;
	}
`;

const MyModal = ({ children, visible, setVisible }) => {
	return (
		<ModalStyled visible={visible} onClick={() => setVisible(false)}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</ModalStyled>
	);
};

export default MyModal;
