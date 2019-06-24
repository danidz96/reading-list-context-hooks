import React, { useState } from 'react';
import styled from 'styled-components';
import BookItem from '../BookItem/BookItem';
import Button from '../Button/Button';
import { ThemeContext } from '../../context/ThemeContext';

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 3rem;
	background-color: ${(props) => props.isLightTheme && 'red'};
`;

const List = styled.ul`padding: 3rem 2rem;`;

const BookList = (props) => {
	const [ books, setBooks ] = useState([
		{ title: 'El Imperio Final', author: 'Brandon Sanderson' },
		{ title: 'El Pozo de la Ascensión', author: 'Brandon Sanderson' },
		{ title: 'El Héroe de las Eras', author: 'Brandon Sanderson' }
	]);

	return (
		<React.Fragment>
			<ButtonContainer>
				<Button text="Add Book" />
			</ButtonContainer>
			<List>{books.map((book) => <BookItem book={book} key={book.title} />)}</List>
		</React.Fragment>
	);
};

export default BookList;
