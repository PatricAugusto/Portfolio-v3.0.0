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
      title: "O Corte Perfeito",
      desc: "website oficial da Barbearia Premium, refletindo digitalmente a experiência impecável e a excelência no corte.",
      image: "/barbearia.png",
      demo: "https://barber-glass-neo.vercel.app/",
      github: "https://github.com/PatricAugusto/barber-glass-neo"
    },
    {
      title: "Escritório de Advocacia",
      desc: "Este projeto foi desenvolvido para um escritório de advocacia, focada em um design moderno, elegante e de alta conversão, alinhado com as tendências de UI/UX de 2025.",
      image: "/escritorio.png",
      demo: "https://free-template-juridico-v1.vercel.app/",
      github: "https://github.com/PatricAugusto/Free-Template-Juridico-v1"
    },
    {
      title: "Coffee Blend",
      desc: "Cafeteria que busca combinar um design acolhedor com funcionalidades de e-commerce (carrinho/checkout)",
      image: "/cafeteria.png",
      demo: "https://free-template-cafeteria-v1.vercel.app/",
      github: "https://github.com/PatricAugusto/Free-Template-Cafeteria-v1"
    }
  ];

  return (
    <GlassCard style={{ maxWidth: '1100px' }} id="projects">
      <h2 style={{ color: '#fff', fontSize: '2rem' }}>Projetos em <span>Destaque_</span></h2>
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