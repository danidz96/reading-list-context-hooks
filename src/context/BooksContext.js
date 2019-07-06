import React, { createContext, useState } from 'react';

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
	const [ books, setBooks ] = useState([
		{
			id: 1,
			title: 'The Final Empire',
			author: 'Brandon Sanderson',
			status: 'completed',
			favorite: true
		},
		{
			id: 2,
			title: 'The Well of Ascension',
			author: 'Brandon Sanderson',
			status: 'completed',
			favorite: false
		},
		{
			id: 3,
			title: 'The Hero of Ages',
			author: 'Brandon Sanderson',
			status: 'reading',
			favorite: false
		},
		{
			id: 4,
			title: 'The Alloy of Law',
			author: 'Brandon Sanderson',
			status: 'pending',
			favorite: false
		},
		{
			id: 5,
			title: 'Shadows of Self',
			author: 'Brandon Sanderson',
			status: 'pending',
			favorite: false
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

	const addStatus = (selectedBook, status) => {
		const newBooks = books.map((book) => {
			if (selectedBook.id === book.id) {
				return { ...book, status: status };
			} else {
				return book;
			}
		});
		setBooks(newBooks);
	};

	const isFavorite = (selectedBook) => {
		const newBooks = books.map((book) => {
			if (selectedBook.id === book.id) {
				return { ...book, favorite: !book.favorite };
			} else {
				return book;
			}
		});
		setBooks(newBooks);
	};

	return (
		<BooksContext.Provider
			value={{ books, deleteBook, saveBook, modal, openModal, closeModal, addStatus, isFavorite }}
		>
			{props.children}
		</BooksContext.Provider>
	);
};

export default BooksContextProvider;
