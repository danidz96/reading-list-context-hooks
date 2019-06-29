import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import BookList from './components/BookList/BookList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeContext } from '../src/context/ThemeContext';
import BooksContextProvider from './context/BooksContext';

const AppContainer = styled.div`
	max-width: 45rem;
	margin: 30px auto;
	border-radius: 2rem;
	overflow: hidden;
	background-color: ${({ theme }) => (theme.isLightTheme ? theme.light.ui : theme.dark.ui)};
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
	const { theme } = React.useContext(ThemeContext);
	return (
		<Router>
			<AppContainer theme={theme}>
				<BooksContextProvider>
					<Header />
					<Route exact path={'/'} component={(props) => <BookList {...props} status="pending" />} />
					<Route
						exact
						path={'/completed'}
						component={(props) => <BookList {...props} status="completed" />}
					/>
					<Route exact path={'/favorites'} component={(props) => <BookList {...props} status="favorite" />} />
				</BooksContextProvider>
			</AppContainer>
		</Router>
	);
};

export default App;
