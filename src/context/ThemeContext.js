import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
	const [ theme, setTheme ] = useState({
		isLightTheme: true,
		light: { ui: 'white', bg: 'white', syntax: 'var(--color-grey-dark-1)', syntaxAlt: 'var(--color-grey-dark-2)' },
		dark: { ui: '#253341', bg: '#15202B', syntax: 'white', syntaxAlt: 'var(--color-grey-dark-2)' }
	});

	const toggleTheme = () => {
		setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
