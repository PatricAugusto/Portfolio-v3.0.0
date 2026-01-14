'use client';

import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 60px 20px;
  margin-top: 100px;
  background: rgba(10, 11, 16, 0.4);
  border-top: 1px solid rgba(0, 242, 255, 0.05);
  box-sizing: border-box;
  position: relative;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const SystemStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .terminal-text {
    font-family: 'Fira Code', monospace;
    font-size: 0.75rem;
    color: ${props => props.theme.colors.secondary};
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .status-indicator {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.light}88;

    &::before {
      content: '';
      width: 8px;
      height: 8px;
      background: #00ff64;
      border-radius: 50%;
      box-shadow: 0 0 10px #00ff64;
      animation: pulse 2s infinite;
    }
  }

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: ${props => props.theme.colors.light}cc;
    text-decoration: none;
    font-size: 0.85rem;
    font-family: 'Fira Code', monospace;
    transition: all 0.3s ease;
    padding: 5px 10px;
    border: 1px solid transparent;

    &:hover {
      color: ${props => props.theme.colors.secondary};
      border: 1px solid ${props => props.theme.colors.secondary}44;
      background: ${props => props.theme.colors.secondary}11;
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  font-size: 0.7rem;
  color: ${props => props.theme.colors.light}44;
  font-family: 'Fira Code', monospace;
  text-transform: uppercase;
  margin-top: 20px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <SystemStatus>
          <span className="terminal-text">{">"} SYSTEM_STATUS: OPERATIONAL</span>
          <span className="status-indicator">Disponível para novos projetos</span>
          <Copyright>© 2026 PATRIC AUGUSTO</Copyright>
        </SystemStatus>

        <SocialLinks>
          <a href="https://github.com/PatricAugusto" target="_blank" rel="noopener noreferrer">
            [ GITHUB ]
          </a>
          <a href="https://www.linkedin.com/in/patric-augusto-bab47b240/" target="_blank" rel="noopener noreferrer">
            [ LINKEDIN ]
          </a>
          <a href="https://wa.me/5555992066795" target="_blank" rel="noopener noreferrer">
            [ WHATSAPP ]
          </a>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
}