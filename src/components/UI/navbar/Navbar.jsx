import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const NavStyled = styled.div`
	height: 50px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0 15px;
	background: teal;
	color: #fff;

	& a {
		margin-right: 10px;
		color: inherit;
		text-decoration: none;

		&:last-child {
			margin: 0;
		}
	}
`;

const Navbar = ({ links }) => {
	return (
		<NavStyled>
			{links.map((link) => {
				return (
					<Link key={link.path} to={link.path}>
						{link.label}
					</Link>
				);
			})}
		</NavStyled>
	);
};

export default Navbar;
