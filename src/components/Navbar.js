'use client';

import styled from 'styled-components';
import Link from 'next/link';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px; 
  display: flex;
  justify-content: center; 
  align-items: center;
  background: rgba(10, 11, 16, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 242, 255, 0.1);
  box-sizing: border-box; 
  overflow-x: hidden;
`;

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: transform 0.3s ease;
  flex-shrink: 1;

  &:hover {
    transform: scale(1.02);
  }
`;

const LogoImage = styled.img`
  width: 80px;  
  height: 80px;
  object-fit: contain;
  filter: drop-shadow(0 0 5px ${props => props.theme.colors.secondary}44);

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const LogoText = styled.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: ${props => props.theme.colors.light};
  white-space: nowrap;
  letter-spacing: -1px;
  font-family: 'Inter', sans-serif;

  span {
    color: ${props => props.theme.colors.secondary};
    text-shadow: 0 0 10px ${props => props.theme.colors.secondary}66;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: clamp(15px, 3vw, 30px);
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

const NavContent = styled.div`
  width: 100%;
  max-width: 1200px; 
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    padding: 0 12px;

    .nav-links-desktop {
      display: none;
    }
  }
`;

const HireButton = styled.a`
  background: transparent;
  border: 1px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondary};
  white-space: nowrap;
  padding: clamp(8px, 2vw, 12px) clamp(16px, 3vw, 28px);
  border-radius: 50px; 
  font-weight: 600;
  font-size: clamp(0.75rem, 1.5vw, 0.9rem);
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;
  flex-shrink: 0;
  gap: 8px;

  &::before {
    content: "Entre em contato!";
  }

  &:hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 15px ${props => props.theme.colors.secondary}44;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 8px 15px;
    font-size: 0.75rem;

    &::before {
      content: "Contato"; 
    }
  }
`;

export default function Navbar() {
  const whatsappNumber = "5555992066795"; 
  
  const message = "Olá! Vi o teu portfólio e gostaria de falar sobre um projeto.";
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <NavContainer>
      <NavContent>
      <LogoWrapper href="/">
          <LogoImage src="/logoPort.png" alt="Dev AI Logo" />
          <LogoText>
            Patric<span>.Augusto</span>
          </LogoText>
        </LogoWrapper>

      <NavLinks>
        <NavLink href="#projects">Projetos</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </NavLinks>

      <HireButton 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contactar via WhatsApp"
      >
      </HireButton>
      </NavContent>
    </NavContainer>
  );
}