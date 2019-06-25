import React from 'react';
import styled from 'styled-components';
import BookItem from '../BookItem/BookItem';
import Button from '../Button/Button';
import { BooksContext } from '../../context/BooksContext';
import AddBookForm from '../AddBookForm/AddBookForm';

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 3rem;
`;

const List = styled.ul`padding: 3rem 2rem;`;

const BookList = (props) => {
	const { books, openModal } = React.useContext(BooksContext);

	const handleAddBook = (e) => {
		openModal();
	};

	return (
		<React.Fragment>
			<ButtonContainer>
				<Button text="Add Book" onClick={handleAddBook} />
				<AddBookForm />
			</ButtonContainer>
			<List>{books.map((book) => <BookItem book={book} key={book.id} />)}</List>
		</React.Fragment>
	);
};

export default BookList;
