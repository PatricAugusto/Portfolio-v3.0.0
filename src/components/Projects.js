'use client';

import styled from 'styled-components';
import GlassCard from './GlassCard';

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(clamp(280px, 100%, 350px), 1fr));
  gap: clamp(20px, 4vw, 35px);
  margin-top: 40px;
`;

const InnerCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.colors.secondary};
    box-shadow: 0 10px 30px rgba(0, 242, 255, 0.1);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  height: 200px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid ${props => props.theme.colors.border};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${InnerCard}:hover img {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: clamp(15px, 3vw, 25px);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.4rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.light};
  opacity: 0.7;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;

const ActionLink = styled.a`
  flex: 1;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &.primary {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
    &:hover { filter: brightness(1.2); }
  }

  &.secondary {
    border: 1px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
    &:hover { background: ${props => props.theme.colors.secondary}11; }
  }
`;

export default function Projects() {
  const projects = [
    {
      title: "AI Dashboard",
      desc: "Plataforma de análise de dados com integração de IA.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      demo: "#",
      github: "#"
    },
    {
      title: "Crypto Wallet",
      desc: "App para gestão de ativos digitais com segurança avançada.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      demo: "#",
      github: "#"
    },
    {
      title: "Crypto Wallet",
      desc: "App para gestão de ativos digitais com segurança avançada.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      demo: "#",
      github: "#"
    },
    {
      title: "Crypto Wallet",
      desc: "App para gestão de ativos digitais com segurança avançada.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      demo: "#",
      github: "#"
    }
  ];

  return (
    <GlassCard style={{ maxWidth: '1100px' }} id="projects">
      <h2 style={{ color: '#fff', fontSize: '2rem' }}>Featured <span>Projects_</span></h2>
      <ProjectGrid>
        {projects.map((p, i) => (
          <InnerCard key={i}>
            <ImageContainer>
              <img src={p.image} alt={p.title} />
            </ImageContainer>
            <CardContent>
              <ProjectTitle>{p.title}</ProjectTitle>
              <ProjectDescription>{p.desc}</ProjectDescription>
              <ButtonGroup>
                <ActionLink href={p.demo} className="primary">Live Demo</ActionLink>
                <ActionLink href={p.github} className="secondary">Source Code</ActionLink>
              </ButtonGroup>
            </CardContent>
          </InnerCard>
        ))}
      </ProjectGrid>
    </GlassCard>
  );
}