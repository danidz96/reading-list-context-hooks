import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
	const [ theme, setTheme ] = useState({
		isLightTheme: false,
		light: { ui: 'white', bg: 'white', syntax: 'var(--color-grey-dark-1)', syntaxAlt: 'var(--color-grey-dark-2)' },
		dark: { ui: '#253341', bg: '#15202B', syntax: 'white', syntaxAlt: 'var(--color-grey-dark-2)' }
	});
	return <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
