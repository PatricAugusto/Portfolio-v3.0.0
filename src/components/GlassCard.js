import styled from 'styled-components';

const GlassCard = styled.div`
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${props => props.theme.colors.secondary}, transparent);
  }

  @media (max-width: 768px) {
    padding: 1.5rem; 
    border-radius: 16px;
  }
`;

export default GlassCard;