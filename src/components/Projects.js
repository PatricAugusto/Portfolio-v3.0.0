'use client';

import styled from 'styled-components';
import GlassCard from './GlassCard';

const Section = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.light};
  margin-bottom: 50px;
  text-align: center;

  span {
    color: ${props => props.theme.colors.secondary};
    text-shadow: 0 0 15px ${props => props.theme.colors.secondary}55;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled(GlassCard)`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: ${props => props.theme.colors.secondary};
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const Tag = styled.span`
  font-size: 0.7rem;
  background: ${props => props.theme.colors.secondary}22;
  color: ${props => props.theme.colors.secondary};
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.secondary}44;
  text-transform: uppercase;
  font-weight: 700;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.light};
  margin-bottom: 10px;
`;

const ProjectDesc = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.light}99;
  line-height: 1.5;
  flex-grow: 1; 
  margin-bottom: 20px;
`;

const ViewLink = styled.a`
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Projects() {
  const projects = [
    {
      title: "E-commerce API",
      desc: "API robusta desenvolvida com Node.js e MongoDB para gerenciamento de inventário.",
      tags: ["Node.js", "MongoDB"]
    },
    {
      title: "Cyber Dashboard",
      desc: "Interface de monitoramento em tempo real com gráficos dinâmicos e Glassmorphism.",
      tags: ["React", "Styled Components"]
    },
    {
      title: "AI Chat Interface",
      desc: "Aplicação front-end integrada com GPT-4 para conversas inteligentes.",
      tags: ["Next.js", "OpenAI"]
    }
  ];

  return (
    <Section id="projects">
      <SectionTitle>Featured <span>Projects_</span></SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <TagGroup>
              {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </TagGroup>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDesc>{project.desc}</ProjectDesc>
            <ViewLink href="#">View Repository →</ViewLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
}