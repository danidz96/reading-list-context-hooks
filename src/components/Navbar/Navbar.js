import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, NavLink } from 'react-router-dom';

const NavbarContainer = styled.ul`
	display: flex;
	justify-content: space-between;
	margin-top: 2rem;
`;

const Li = styled.li`list-style: none;`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 600;
  padding: .5rem 1.5rem;
  border-radius: 2.5rem;
`;

const activeStyles = {
	backgroundColor: 'var(--color-primary-dark)'
};

const Navbar = () => {
	return (
		<BrowserRouter>
			<NavbarContainer>
				<Li>
					<StyledLink activeStyle={activeStyles} exact to="/">
						Pending
					</StyledLink>
				</Li>
				<Li>
					<StyledLink activeStyle={activeStyles} activeClassName="active" to="/completed">
						Completed
					</StyledLink>
				</Li>
				<Li>
					<StyledLink activeStyle={activeStyles} activeClassName="active" to="/favorites">
						Favorites
					</StyledLink>
				</Li>
			</NavbarContainer>
		</BrowserRouter>
	);
};

export default Navbar;
