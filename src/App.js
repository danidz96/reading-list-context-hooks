import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import BookList from './components/BookList/BookList';

const AppContainer = styled.div`
	max-width: 45rem;
	margin: 30px auto;
	border-radius: 2rem;
	overflow: hidden;
	background-color: white;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);
	min-height: 100vh;

	@media only screen and (max-width: 600px) {
		max-width: none;
		margin: 0;
		width: 100vw;
		border-radius: 0;
	}
`;

const App = () => {
	return (
		<AppContainer>
			<Header />
			<BookList />
		</AppContainer>
	);
};

export default App;
