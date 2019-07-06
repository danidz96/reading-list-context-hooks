import React, { useState, useContext } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import { BooksContext } from '../../context/BooksContext';

const slideOutRight = keyframes`
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
	}
	
	20% {
		-webkit-transform: translateX(-2rem);
            transform: translateX(-2rem);
	}
  100% {
    -webkit-transform: translateX(100rem);
            transform: translateX(100rem);
    opacity: 0;
  }
}`;

const animationRule = css`${slideOutRight} .5s linear;`;

const BookContainer = styled.div`
	background: white;
	padding: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	border-radius: .6rem;
	animation: ${({ deleting }) => deleting && animationRule};
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
	transition: all ease .2s;
	color: ${(props) => props.active && props.color};
	padding: .5rem;

	&:not(:last-child) {
		margin-right: 1rem;
	}

	&:hover {
		@media only screen and (min-width: 600px) {
			cursor: pointer;
			box-shadow: 0 0 1rem ${({ color }) => color};
			border-radius: 2.5rem;
		}
	}

	&:active {
		transform: scale(1.3);
	}
`;

const BookItem = (props) => {
	const { theme } = useContext(ThemeContext);
	const { deleteBook, addStatus, isFavorite } = useContext(BooksContext);
	const [ deleting, setDeleting ] = useState(false);
	const { book } = props;

	const handleDeleteBook = () => {
		setDeleting(true);
		setTimeout(() => {
			deleteBook(book);
		}, 500);
	};

	return (
		<BookContainer deleting={deleting} theme={theme}>
			<div>
				<Title theme={theme}>{book.title}</Title>
				<Author>{book.author}</Author>
			</div>
			<div>
				<Icon
					className="fa fa-heart"
					title="Favorite"
					color="#E0245E"
					active={book.favorite}
					onClick={() => isFavorite(book)}
				/>
				<Icon
					className="fa fa-check"
					title="Completed"
					color="#17BF63"
					active={book.status === 'completed'}
					onClick={() => addStatus(book, 'completed')}
				/>
				<Icon
					className="fa fa-eye"
					title="Reading"
					color="var(--color-primary)"
					active={book.status === 'reading'}
					onClick={() => addStatus(book, 'reading')}
				/>
				<Icon className="fa fa-trash-o" color="#a00000" title="Delete" onClick={() => handleDeleteBook()} />
			</div>
		</BookContainer>
	);
};

export default BookItem;
