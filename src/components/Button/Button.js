import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	background: transparent;
	border: 0;
	padding: 0;
	cursor: pointer;
	outline: 0;
	display: inline-block;
	position: relative;
	padding: 1.5rem 3rem;
	top: 0;
	color: #fff;
	font-size: 1.4rem;
	font-weight: 600;
	border-radius: 5rem;
	background-color: var(--color-primary);
	transition: all 0.2s ease;

	&:hover {
		top: -.6rem;
		box-shadow: var(--shadow-blue-dark);
	}

	&:active {
		background-color: var(--color-primary-dark);
		top: 0;
		box-shadow: none;
	}

	&:focus {
		@media only screen and (max-width: 600px) {
			top: 0;
			box-shadow: none;
		}
	}
`;

const Button = (props) => {
	return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
