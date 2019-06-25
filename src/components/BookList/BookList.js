import React from 'react';
import styled from 'styled-components';
import BookItem from '../BookItem/BookItem';
import Button from '../Button/Button';
import { BooksContext } from '../../context/BooksContext';

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 3rem;
	background-color: ${(props) => props.isLightTheme && 'red'};
`;

const List = styled.ul`padding: 3rem 2rem;`;

const BookList = (props) => {
	const { books } = React.useContext(BooksContext);

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
