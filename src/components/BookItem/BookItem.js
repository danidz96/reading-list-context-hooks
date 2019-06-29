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
	font-weight: 400;
	color: var(--color-grey-dark-2);
`;

const Icon = styled.i`
	color: var(--color-grey-dark-3);
	font-size: 1.5rem;
	transition: transform ease .2s;

	&:not(:last-child) {
		margin-right: 1rem;
	}

	&:hover {
		cursor: pointer;
		color: #b40000;
	}

	&:active {
		transform: scale(1.3);
	}
`;

const BookItem = (props) => {
	const { theme } = React.useContext(ThemeContext);
	const { deleteBook, addStatus } = React.useContext(BooksContext);
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
			<div>
				<Icon className="fa fa-heart" title="Favorite" onClick={() => addStatus(book, 'favorite')} />
				<Icon className="fa fa-check" title="Completed" onClick={() => addStatus(book, 'completed')} />
				<Icon className="fa fa-eye" title="Reading" onClick={() => addStatus(book, 'reading')} />
				<Icon className="fa fa-trash-o" title="Delete" onClick={() => handleDeleteBook()} />
			</div>
		</BookContainer>
	);
};

export default BookItem;
