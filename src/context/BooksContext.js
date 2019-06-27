import React, { createContext, useState } from 'react';

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
	const [ books, setBooks ] = useState([
		{
			id: 1,
			title: 'The Final Empire',
			author: 'Brandon Sanderson',
			completed: true,
			favorite: true,
			reading: false
		},
		{
			id: 2,
			title: 'The Well of Ascension',
			author: 'Brandon Sanderson',
			completed: true,
			favorite: true,
			reading: false
		},
		{
			id: 3,
			title: 'The Hero of Ages',
			author: 'Brandon Sanderson',
			completed: true,
			favorite: true,
			reading: true
		},
		{
			id: 4,
			title: 'The Alloy of Law',
			author: 'Brandon Sanderson',
			completed: false,
			favorite: false,
			reading: false
		},
		{
			id: 5,
			title: 'Shadows of Self',
			author: 'Brandon Sanderson',
			completed: false,
			favorite: false,
			reading: false
		}
	]);

	const [ modal, setModal ] = useState({
		isOpen: false
	});

	const saveBook = (book) => {
		setBooks([ ...books, { id: books.length + 1, ...book } ]);
		setModal({ isOpen: false });
	};

	const deleteBook = (selectedBook) => {
		const newBooks = books.filter((book) => selectedBook.id !== book.id);
		setBooks(newBooks);
	};

	const openModal = () => {
		setModal({ isOpen: true });
	};

	const closeModal = () => {
		setModal({ isOpen: false });
	};

	return (
		<BooksContext.Provider value={{ books, deleteBook, saveBook, modal, openModal, closeModal }}>
			{props.children}
		</BooksContext.Provider>
	);
};

export default BooksContextProvider;
