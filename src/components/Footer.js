'use client';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 40px 20px;
  margin-top: 80px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  box-sizing: border-box;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha no mobile */
    text-align: center;
    gap: 15px;
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  
  span {
    color: ${props => props.theme.colors.secondary};
  }
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © {currentYear} PORTFOLIO_V3.0 - <span>CODED_BY_PATRIC</span>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}

