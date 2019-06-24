import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';

const Icon = styled.i`
	color: white;
	font-size: 1.5rem;

	&:hover {
		cursor: pointer;
	}
`;

const ThemeSwitcher = () => {
	const { toggleTheme } = React.useContext(ThemeContext);
	return <Icon className="fa fa-adjust" onClick={(e) => toggleTheme()} />;
};

export default ThemeSwitcher;
