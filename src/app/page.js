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

  @media (max-width: 768px) {
    gap: 40px; 
    padding: 100px 15px 40px 15px;
  }
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
  
  @media (max-width: 968px) {
    flex-direction: column-reverse; 
    text-align: center;
    gap: 30px;
  }
`;

const Title = styled.h1`
  font-size: 3.8rem;
  line-height: 1;
  color: ${props => props.theme.colors.light};
  margin: 0;

  span {
    display: block;
    color: ${props => props.theme.colors.secondary};
    text-shadow: 0 0 20px ${props => props.theme.colors.secondary}44;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem; 
    text-align: center;
  }
`;

const TextSection = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ExpandedDescription = styled.p`
  font-size: 1.15rem;
  color: ${props => props.theme.colors.light}cc;
  line-height: 1.8;
  max-width: 600px;
  
  strong {
    color: ${props => props.theme.colors.secondary};
    font-weight: 600;
  }
`;

const HeroButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  @media (max-width: 968px) { justify-content: center; }
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  
  &.linkedin {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 20px ${props => props.theme.colors.secondary}33;

    &:hover {
      transform: translateY(-3px);
      filter: brightness(1.1);
      box-shadow: 0 0 30px ${props => props.theme.colors.secondary}55;
    }
  }

  &.github {
    border: 1px solid ${props => props.theme.colors.secondary}44;
    color: ${props => props.theme.colors.secondary};
    background: transparent;

    &:hover {
      background: ${props => props.theme.colors.secondary}11;
      border-color: ${props => props.theme.colors.secondary};
      transform: translateY(-3px);
    }
  }
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

      <GlassCard style={{ maxWidth: '1150px' }}>
        <HeroContent>
          
          <TextSection>
            <Title>
              Full Stack <span>AI Engineer.</span>
            </Title>
            
            <ExpandedDescription>
              Especialista em unir a potência da <strong>Inteligência Artificial</strong> com arquiteturas escaláveis em <strong>C# e .NET</strong>. 
              Desenvolvo experiências digitais de alta performance utilizando <strong>React e Next.js</strong>, 
              focando em transformar dados complexos em interfaces intuitivas e modernas.
            </ExpandedDescription>

            <HeroButtonGroup>
              <SocialButton href="https://linkedin.com/in/seu-usuario" target="_blank" className="linkedin">
                LinkedIn
              </SocialButton>
              <SocialButton href="https://github.com/seu-usuario" target="_blank" className="github">
                GitHub
              </SocialButton>
            </HeroButtonGroup>
          </TextSection>

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