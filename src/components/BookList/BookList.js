import React, { useState } from 'react';
import BookItem from '../BookItem/BookItem';
import styles from './BookList.module.css';

const BookList = () => {
	const [ books, setBooks ] = useState([
		{ title: 'El Imperio Final', author: 'Brandon Sanderson' },
		{ title: 'El Pozo de la Ascensión', author: 'Brandon Sanderson' },
		{ title: 'El Héroe de las Eras', author: 'Brandon Sanderson' }
	]);

	return <ul className={styles.list}>{books.map((book) => <BookItem book={book} key={book.title} />)}</ul>;
};

export default BookList;
