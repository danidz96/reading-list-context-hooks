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
		{ id: 1, title: 'El Imperio Final', author: 'Brandon Sanderson' },
		{ id: 2, title: 'El Pozo de la Ascensión', author: 'Brandon Sanderson' },
		{ id: 3, title: 'El Héroe de las Eras', author: 'Brandon Sanderson' }
	]);

	const deleteBook = (selectedBook) => {
		const newBooks = books.filter((book) => selectedBook.id !== book.id);
		setBooks(newBooks);
	};

	return (
		<React.Fragment>
			<ButtonContainer>
				<Button text="Add Book" />
			</ButtonContainer>
			<List>{books.map((book) => <BookItem book={book} key={book.title} handleDeleteBook={deleteBook} />)}</List>
		</React.Fragment>
	);
};

export default BookList;
