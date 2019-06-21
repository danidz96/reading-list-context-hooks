import React from 'react';
import styles from './Header.module.css';

const Header = () => {
	return (
		<div>
			<div className={styles.header}>
				<h1>Reading List</h1>
				<p>Currently you have 3 books to read</p>
			</div>
		</div>
	);
};

export default Header;
