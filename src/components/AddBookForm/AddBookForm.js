import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { BooksContext } from '../../context/BooksContext';
import Button from '../Button/Button';
import { ThemeContext } from '../../context/ThemeContext';

const Wrapper = styled.div`position: relative;`;

const Title = styled.h2`color: ${({ theme }) => (theme.isLightTheme ? theme.light.syntax : theme.dark.syntax)};`;

const StyledInput = styled.input`
	border: none;
	padding: 1rem 0;
	width: 100%;
	border-bottom: 2px solid var(--color-grey-light-4);
	outline: none;
	color: ${({ theme }) => (theme.isLightTheme ? theme.light.syntax : theme.dark.syntax)};
	margin: 2rem 0;
	font-size: 1.5rem;
	background-color: ${({ theme }) => (theme.isLightTheme ? theme.light.ui : theme.dark.ui)};

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

const StyledModal = styled(Modal)`
  background-color: ${({ theme }) => (theme.isLightTheme ? theme.light.bg : theme.dark.bg)};
  width: 42rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  outline: none;
  border: 1px solid ${({ theme }) => (theme.isLightTheme ? theme.light.borderColor : theme.dark.borderColor)};
  border-radius: .7rem;
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
	const { theme } = React.useContext(ThemeContext);
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
		<Wrapper>
			<StyledModal
				isOpen={modal.isOpen}
				onRequestClose={handleCloseModal}
				contentLabel="Add Book Modal"
				theme={theme}
			>
				<FormContainer>
					<Title theme={theme}>Add Book</Title>
					<StyledForm onSubmit={onSubmit}>
						<StyledInput
							name="title"
							type="text"
							placeholder="Book Name"
							onChange={(e) => onChange(e.target)}
							theme={theme}
						/>
						<StyledInput
							name="author"
							type="text"
							placeholder="Author Name"
							onChange={(e) => onChange(e.target)}
							theme={theme}
						/>
						<Button text="Save" />
					</StyledForm>
				</FormContainer>
			</StyledModal>
		</Wrapper>
	);
};

export default AddBookForm;
