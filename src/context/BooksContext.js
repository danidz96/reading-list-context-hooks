import React, { createContext, useState } from 'react';

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
	const [ books, setBooks ] = useState([
		{ id: 1, title: 'El Imperio Final', author: 'Brandon Sanderson' },
		{ id: 2, title: 'El Pozo de la Ascensión', author: 'Brandon Sanderson' },
		{ id: 3, title: 'El Héroe de las Eras', author: 'Brandon Sanderson' }
	]);

	const deleteBook = (selectedBook) => {
		const newBooks = books.filter((book) => selectedBook.id !== book.id);
		setBooks(newBooks);
	};

	return <BooksContext.Provider value={{ books, deleteBook }}>{props.children}</BooksContext.Provider>;
};

export default BooksContextProvider;
