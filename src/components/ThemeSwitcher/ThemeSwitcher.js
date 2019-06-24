import React from 'react';
import { Toggle } from 'react-toggle-component';
import styled from 'styled-components';

const Label = styled.label`
	font-weight: bold;
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: min-content;
	white-space: nowrap;
	align-items: center;
	cursor: pointer;
`;

const ThemeSwitcher = () => {
	return (
		<Label htmlFor="themeSwitcher">
			Dark Theme
			<Toggle name="themeSwitcher" onToggle={(e) => console.log('onToggle', e.target)} />
		</Label>
	);
};

export default ThemeSwitcher;
