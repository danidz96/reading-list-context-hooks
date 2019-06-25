import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import { BooksContext } from '../../context/BooksContext';

const BookContainer = styled.div`
	background: white;
	padding: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	border-radius: .6rem;
	box-shadow: var(--shadow-light);
	background-color: ${({ theme }) => (theme.isLightTheme ? theme.light.bg : theme.dark.bg)};

	&:not(:last-child) {
		margin-bottom: 3rem;
	}
`;

const Title = styled.h3`
	margin-bottom: 1.5rem;
	font-weight: 600;
	color: ${({ theme }) => (theme.isLightTheme ? theme.light.syntax : theme.dark.syntax)};
`;

const Author = styled.p`
	font-size: 1rem;
	font-weight: 200;
	color: var(--color-grey-dark-2);
`;

const Icon = styled.i`
	color: var(--color-grey-dark-3);
	font-size: 1.5rem;

	&:hover {
		cursor: pointer;
		color: #b40000;
	}
`;

const BookItem = (props) => {
	const { theme } = React.useContext(ThemeContext);
	const { deleteBook } = React.useContext(BooksContext);
	const { book } = props;

	const handleDeleteBook = () => {
		deleteBook(book);
	};

	return (
		<BookContainer theme={theme}>
			<div>
				<Title theme={theme}>{book.title}</Title>
				<Author>{book.author}</Author>
			</div>
			<Icon className="fa fa-trash-o" onClick={() => handleDeleteBook()} />
		</BookContainer>
	);
};

export default BookItem;
