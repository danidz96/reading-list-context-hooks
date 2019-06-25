import React, { createContext, useState } from 'react';

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
	const [ books, setBooks ] = useState([
		{ id: 1, title: 'El Imperio Final', author: 'Brandon Sanderson' },
		{ id: 2, title: 'El Pozo de la Ascensión', author: 'Brandon Sanderson' },
		{ id: 3, title: 'El Héroe de las Eras', author: 'Brandon Sanderson' }
	]);

	const [ modal, setModal ] = useState({
		isOpen: false
	});

	const saveBook = (book) => {
		setBooks([ ...books, { id: books.length + 1, ...book } ]);
		console.log(books);
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
