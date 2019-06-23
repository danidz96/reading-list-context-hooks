import React from 'react';
import styled from 'styled-components';

const BookContainer = styled.div`
	background: white;
	padding: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	border-radius: .6rem;
	box-shadow: var(--shadow-light);

	&:not(:last-child) {
		margin-bottom: 3rem;
	}
`;

const Title = styled.h3`
	margin-bottom: 1.5rem;
	font-weight: 600;
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
	const { book } = props;
	return (
		<BookContainer>
			<div>
				<Title>{book.title}</Title>
				<Author>{book.author}</Author>
			</div>
			<Icon className="fa fa-trash-o" />
		</BookContainer>
	);
};

export default BookItem;
