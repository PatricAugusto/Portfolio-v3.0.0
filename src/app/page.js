'use client';
import styled from 'styled-components';
import GlassCard from '@/components/GlassCard';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const PageWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px; 
  padding: 140px 20px 80px 20px;
  position: relative;
  background-color: ${props => props.theme.colors.primary};
`;

const BackgroundBlob = styled.div`
  position: fixed;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 242, 255, 0.08) 0%, transparent 70%);
  filter: blur(80px);
  z-index: 0;
  top: 10%;
  left: -10%;
  pointer-events: none;
`;

const AccentBlob = styled(BackgroundBlob)`
  background: radial-gradient(circle, rgba(112, 0, 255, 0.08) 0%, transparent 70%);
  top: 50%;
  left: 70%;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  @media (max-width: 968px) { flex-direction: column-reverse; text-align: center; }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.light};
  span { color: ${props => props.theme.colors.secondary}; text-shadow: 0 0 15px #00f2ff55; }
`;

const ImageWrapper = styled.div`
  width: 280px;
  height: 280px;
  background: linear-gradient(135deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.accent});
  padding: 5px;
  animation: morph 8s ease-in-out infinite;
  img { width: 100%; height: 100%; object-fit: cover; border-radius: inherit; }
  @keyframes morph {
    0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
    50% { border-radius: 50% 50% 30% 70% / 50% 60% 40% 50%; }
  }
`;

export default function Home() {
  return (
    <PageWrapper>
      <BackgroundBlob />
      <AccentBlob />

      <GlassCard style={{ maxWidth: '1100px' }}>
        <HeroContent>
          <div>
            <Title>Crafting Digital <span>Experiences.</span></Title>
            <p style={{opacity: 0.7, margin: '20px 0 30px'}}>Dev Full Stack focado em interfaces de alta performance.</p>
          </div>
          <ImageWrapper>
            <img src="/PerfilOficialFoto.png" alt="Profile" />
          </ImageWrapper>
        </HeroContent>
      </GlassCard>

      <Projects />
      <Skills />
      <Contact />
    </PageWrapper>
  );
}