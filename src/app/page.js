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
  padding: 100px 20px 20px 20px; 
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  flex-direction: row;

  @media (max-width: 968px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;
  }
`;

const TextSection = styled.div`
  flex: 1;
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; 
  background: linear-gradient(135deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.accent});
  padding: 5px; 
  box-shadow: 0 0 30px rgba(0, 242, 255, 0.3);
  animation: morph 8s ease-in-out infinite;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    filter: grayscale(40%) contrast(110%);
  }

  @keyframes morph {
    0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
    50% { border-radius: 50% 50% 30% 70% / 50% 60% 40% 50%; }
    100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.light};

  span {
    display: block;
    color: ${props => props.theme.colors.secondary};
    text-shadow: 0 0 15px ${props => props.theme.colors.secondary}55;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.light}aa;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const BackgroundBlob = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 242, 255, 0.1) 0%, transparent 70%);
  filter: blur(80px);
  z-index: -1;
  top: -100px;
  left: -100px;
`;

export default function Home() {
  return (
    <PageWrapper>
      <BackgroundBlob />
      <GlassCard style={{ maxWidth: '1000px' }}>
        <HeroContent>
          <TextSection>
            <Title>
              Crafting Digital <span>Experiences.</span>
            </Title>
            <Description>
              Sou um Desenvolvedor Full Stack especializado em construir sistemas robustos 
              e interfaces futuristas. Foco em performance, estética e código limpo.
            </Description>
          </TextSection>

          <ImageSection>
            <ImageWrapper>
              <img src="/PerfilOficialFoto.png" alt="Sua Foto" />
            </ImageWrapper>
          </ImageSection>
        </HeroContent>
      </GlassCard>
    </PageWrapper>
  );
}