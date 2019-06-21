import React, { Component } from 'react';

export default class BookList extends Component {
	render() {
		return (
			<div>
				<div className="book-list">
					<ul>
						<li>El imperio final</li>
						<li>El pozo de la ascensión</li>
						<li>El Héroe de las eras</li>
					</ul>
				</div>
			</div>
		);
	}
}
