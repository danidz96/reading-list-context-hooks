import React from 'react';
import styles from './BookItem.module.css';

const BookItem = (props) => {
	const { book } = props;
	return (
		<div className={styles.book}>
			<div className="book-data">
				<h3 className={styles.title}>{book.title}</h3>
				<p className={styles.author}>{book.author}</p>
			</div>
			<i className={`fa fa-trash-o ${styles.icon}`} />
		</div>
	);
};

export default BookItem;
