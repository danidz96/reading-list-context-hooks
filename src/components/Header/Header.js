import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
	padding: 3rem;
	background-color: var(--color-primary);
	color: white;
	border-radius: 2rem;
	overflow: hidden;
	text-align: center;

	@media only screen and (max-width: 600px) {
		margin: 0;
		width: 100%;
		border-radius: 0;
	}
`;

const Header = () => {
	return (
		<HeaderContainer>
			<h1>Reading List</h1>
			<p>Currently you have 3 books to read</p>
		</HeaderContainer>
	);
};

export default Header;
