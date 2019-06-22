import React, { useState } from 'react';
import BookItem from '../BookItem/BookItem';
import styles from './BookList.module.css';
import Button from '../Button/Button';

const BookList = () => {
	const [ books, setBooks ] = useState([
		{ title: 'El Imperio Final', author: 'Brandon Sanderson' },
		{ title: 'El Pozo de la Ascensión', author: 'Brandon Sanderson' },
		{ title: 'El Héroe de las Eras', author: 'Brandon Sanderson' }
	]);

	return (
		<React.Fragment>
			<div className={styles.addBookBtn}>
				<Button />
			</div>
			<ul className={styles.list}>{books.map((book) => <BookItem book={book} key={book.title} />)}</ul>;
		</React.Fragment>
	);
};

export default BookList;
