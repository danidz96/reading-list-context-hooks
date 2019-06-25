import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { BooksContext } from '../../context/BooksContext';
import Button from '../Button/Button';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '42rem'
	}
};

const StyledInput = styled.input`
	border: none;
	padding: 1rem 0;
	width: 100%;
	border-bottom: 2px solid var(--color-grey-light-4);
	outline: none;
	color: var(--color-grey-dark-1);
	margin: 2rem 0;
	font-size: 1.5rem;

	&:focus {
		border-bottom: 2px solid var(--color-primary);
	}
`;

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

Modal.setAppElement('#modal');

const AddBookForm = () => {
	const { modal, closeModal, saveBook } = React.useContext(BooksContext);
	const [ book, setBook ] = useState({
		title: '',
		author: ''
	});

	const handleCloseModal = () => {
		closeModal();
	};

	const onChange = (input) => {
		setBook({ ...book, [input.name]: input.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		saveBook(book);
	};

	return (
		<Modal
			isOpen={modal.isOpen}
			// onAfterOpen={this.afterOpenModal}
			onRequestClose={handleCloseModal}
			style={customStyles}
			contentLabel="Add Book Modal"
		>
			<FormContainer>
				<h2>Add Book</h2>
				<StyledForm onSubmit={onSubmit}>
					<StyledInput
						name="title"
						type="text"
						placeholder="Book Name"
						onChange={(e) => onChange(e.target)}
					/>
					<StyledInput
						name="author"
						type="text"
						placeholder="Author Name"
						onChange={(e) => onChange(e.target)}
					/>
					<Button text="Save" />
				</StyledForm>
			</FormContainer>
		</Modal>
	);
};

export default AddBookForm;
