'use client';

import styled from 'styled-components';
import GlassCard from './GlassCard';

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;

const SkillCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CategoryHeader = styled.h3`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, ${props => props.theme.colors.secondary}44, transparent);
  }
`;

const BadgeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillBadge = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${props => props.theme.colors.border};
  padding: 10px 18px;
  border-radius: 4px; /* Mais retangular para um look 'corporate' */
  font-size: 0.85rem;
  color: ${props => props.theme.colors.light};
  transition: all 0.3s ease;
  font-family: 'Fira Code', monospace; /* Fonte tech se disponível */

  &:hover {
    background: ${props => props.theme.colors.secondary}11;
    border-color: ${props => props.theme.colors.secondary};
    box-shadow: 0 0 15px ${props => props.theme.colors.secondary}33;
    transform: translateY(-2px);
  }
`;

export default function Skills() {
  const stack = [
    {
      category: "Artificial Intelligence",
      skills: ["Machine Learning", "LLMs", "Prompt Engineering", "Python", "OpenAI API"]
    },
    {
      category: "Backend & Core",
      skills: ["C#", ".NET Core", "Entity Framework", "SQL Server", "Architecture"]
    },
    {
      category: "Frontend & Web",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Styled Components"]
    }
  ];

  return (
    <GlassCard style={{ maxWidth: '1100px' }} id="skills">
      <h2 style={{ color: '#fff', fontSize: '2.2rem' }}>Technical <span>Proficiency_</span></h2>
      <p style={{ color: '#e0e0e6', opacity: 0.6, marginTop: '10px' }}>
        Combinando o poder da IA com arquiteturas escaláveis em .NET e interfaces modernas.
      </p>
      
      <SkillsWrapper>
        {stack.map((group, index) => (
          <SkillCategory key={index}>
            <CategoryHeader>{group.category}</CategoryHeader>
            <BadgeGrid>
              {group.skills.map(skill => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </BadgeGrid>
          </SkillCategory>
        ))}
      </SkillsWrapper>
    </GlassCard>
  );
}