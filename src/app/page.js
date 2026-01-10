'use client';

import styled from 'styled-components';
import GlassCard from '@/components/GlassCard';

const PageWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 20px;
`;

const BackgroundBlob = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 242, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  z-index: -1;
  filter: blur(80px);
  top: ${props => props.top || '10%'};
  left: ${props => props.left || '10%'};
  opacity: 0.6;
`;

const AccentBlob = styled(BackgroundBlob)`
  background: radial-gradient(circle, rgba(112, 0, 255, 0.15) 0%, transparent 70%);
  bottom: 10%;
  right: 10%;
  top: auto;
  left: auto;
  width: 300px;
  height: 300px;
  opacity: 0.4;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: ${props => props.theme.colors.light};
  margin-bottom: 1rem;
  
  span {
    color: ${props => props.theme.colors.secondary};
    text-shadow: 0 0 20px rgba(60, 84, 106, 0.5);
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.light}cc; 
  max-width: 600px;
`;

export default function Home() {
  return (
    <PageWrapper>
      <BackgroundBlob />
      <AccentBlob />

      <GlassCard>
        <HeroTitle>
          Olá, eu sou um <span>Full Stack Developer</span>
        </HeroTitle>
        <HeroDescription>
          Especialista em criar interfaces modernas com Next.js e experiências 
          digitais de alta performance. Bem-vindo ao meu portfólio.
        </HeroDescription>
      </GlassCard>
    </PageWrapper>
  );
}