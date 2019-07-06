import React from 'react';
import styled from 'styled-components';
import BookItem from '../BookItem/BookItem';
import { BooksContext } from '../../context/BooksContext';
import AddButton from '../AddButton/AddButton';

const List = styled.ul`padding: 3rem 2rem;`;

const BookList = (props) => {
	const { books } = React.useContext(BooksContext);
	const filteredBooks = books.filter(
		(book) => book.status.includes(props.status) || book.favorite === props.status.favorite
	);

	return (
		<React.Fragment>
			<AddButton status={props.status} />
			<List>{filteredBooks.map((book) => <BookItem book={book} key={book.id} />)}</List>
		</React.Fragment>
	);
};

export default BookList;
