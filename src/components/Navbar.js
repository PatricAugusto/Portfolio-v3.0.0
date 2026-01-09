'use client';

import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 0 20px;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  
  background: rgba(60, 84, 106, 0.2); 
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(182, 192, 198, 0.1); 
  border-radius: 20px;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.light};
  cursor: pointer;

  span {
    color: ${props => props.theme.colors.secondary};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  li a {
    text-decoration: none;
    color: ${props => props.theme.colors.light};
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;

const ContactButton = styled.button`
  background: ${props => props.theme.colors.accent}; 
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <Logo>Dev<span>Portfolio</span></Logo>
        <NavLinks>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
        </NavLinks>
        <ContactButton>Contato</ContactButton>
      </NavContainer>
    </Nav>
  );
}