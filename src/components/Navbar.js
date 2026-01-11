'use client';

import styled from 'styled-components';
import Link from 'next/link';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(10, 11, 16, 0.8); 
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${props => props.theme.colors.light};
  letter-spacing: -1px;

  span {
    color: ${props => props.theme.colors.secondary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.light};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;
  opacity: 0.7;

  &:hover {
    color: ${props => props.theme.colors.secondary};
    opacity: 1;
  }
`;

const HireButton = styled.a`
  background: transparent;
  border: 1px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondary};
  padding: 10px 24px;
  border-radius: 50px; 
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 20px ${props => props.theme.colors.secondary}44;
    transform: translateY(-2px);
  }
`;

export default function Navbar() {
  const whatsappNumber = "5555992066795"; 
  
  const message = "Olá! Vi o teu portfólio e gostaria de falar sobre um projeto.";
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <NavContainer>
      <Logo>
        DEV<span>.AI</span>
      </Logo>

      <NavLinks>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>

      <HireButton 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contactar via WhatsApp"
      >
        Hire Me
      </HireButton>
    </NavContainer>
  );
}