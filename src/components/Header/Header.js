import React from 'react';
import styled from 'styled-components';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { BooksContext } from '../../context/BooksContext';
import Navbar from '../Navbar/Navbar';

const HeaderContainer = styled.div`
	padding: 3rem 3rem 1rem 3rem;
	background-color: var(--color-primary);
	color: white;
	border-radius: 2rem;
	overflow: hidden;
	text-align: center;
	position: relative;

	@media only screen and (max-width: 600px) {
		margin: 0;
		width: 100%;
		border-radius: 0;
	}
`;

const ThemeSwitcherContainer = styled.div`
	position: absolute;
	right: 2rem;
	top: 2rem;
`;

const Header = () => {
	const { books } = React.useContext(BooksContext);
	return (
		<HeaderContainer>
			<ThemeSwitcherContainer>
				<ThemeSwitcher />
			</ThemeSwitcherContainer>
			<h1>Reading List</h1>
			<p>Currently you have {books.length} books to read</p>
			<Navbar />
		</HeaderContainer>
	);
};

export default Header;
