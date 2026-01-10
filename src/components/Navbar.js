'use client';

import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 0 20px;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  
  background: rgba(10, 11, 16, 0.6);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 50px; 
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 1.4rem;
  letter-spacing: 1px;
  color: ${props => props.theme.colors.light};
  text-transform: uppercase;

  span {
    color: ${props => props.theme.colors.secondary};
    text-shadow: 0 0 10px ${props => props.theme.colors.secondary};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;

  li a {
    text-decoration: none;
    color: ${props => props.theme.colors.light};
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    opacity: 0.7;

    &:hover {
      opacity: 1;
      color: ${props => props.theme.colors.secondary};
      text-shadow: 0 0 12px ${props => props.theme.colors.secondary};
    }
  }
`;

const ContactButton = styled.button`
  background: linear-gradient(135deg, ${props => props.theme.colors.secondary} 0%, ${props => props.theme.colors.accent} 100%);
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 242, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(112, 0, 255, 0.4);
    filter: brightness(1.1);
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <Logo>Dev<span>_</span></Logo>
        <NavLinks>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#about">About</a></li>
        </NavLinks>
        <ContactButton>Hire Me</ContactButton>
      </NavContainer>
    </Nav>
  );
}