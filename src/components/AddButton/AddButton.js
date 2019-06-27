import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { BooksContext } from '../../context/BooksContext';
import AddBookForm from '../AddBookForm/AddBookForm';

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 3rem;
`;

const AddButton = () => {
	const { openModal } = React.useContext(BooksContext);

	const handleAddBook = (e) => {
		openModal();
	};

	return (
		<ButtonContainer>
			<Button text="Add Book" onClick={handleAddBook} />
			<AddBookForm />
		</ButtonContainer>
	);
};

export default AddButton;
