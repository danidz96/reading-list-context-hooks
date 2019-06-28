import React from 'react';
import styled from 'styled-components';
import BookItem from '../BookItem/BookItem';
import { BooksContext } from '../../context/BooksContext';

const List = styled.ul`padding: 3rem 2rem;`;

const BookList = (props) => {
	const { books } = React.useContext(BooksContext);
	const filteredBooks = books.filter((book) => book[props.status]);

	return <List>{filteredBooks.map((book) => <BookItem book={book} key={book.id} />)}</List>;
};

export default BookList;
