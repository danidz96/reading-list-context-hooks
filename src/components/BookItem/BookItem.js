import React from 'react';

const BookItem = (props) => {
	const { book } = props;
	return (
		<div>
			<h3>{book.title}</h3>
			<p>{book.author}</p>
		</div>
	);
};

export default BookItem;
