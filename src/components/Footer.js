'use client';

import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 50px 20px;
  background: rgba(10, 11, 16, 0.8);
  border-top: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 2px;
    background: ${props => props.theme.colors.secondary};
    box-shadow: 0 0 15px ${props => props.theme.colors.secondary};
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.light};
  opacity: 0.5;
  font-size: 0.8rem;
  font-family: 'Courier New', Courier, monospace; 
  letter-spacing: 1px;
`;

const TechStackInfo = styled.div`
  display: flex;
  gap: 15px;
  font-size: 0.7rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondary};
  font-weight: 700;
  opacity: 0.8;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <TechStackInfo>
        <span>Next.js</span>
        <span>•</span>
        <span>React</span>
        <span>•</span>
        <span>Styled Components</span>
      </TechStackInfo>
      
      <Copyright>
        © {currentYear} PORTFOLIO_V3.0 - CODED_BY_PATRIC
      </Copyright>
    </FooterContainer>
  );
}