import React, { Component } from 'react';
import styles from './Header.module.css';

export default class Header extends Component {
	render() {
		return (
			<div className={styles.header}>
				<h1>Reading List</h1>
				<p>Currently you have 3 books to read</p>
			</div>
		);
	}
}
