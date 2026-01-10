'use client';

import styled from 'styled-components';
import GlassCard from './GlassCard';

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;

const SkillCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CategoryHeader = styled.h3`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.accent};
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: ${props => props.theme.colors.accent};
    box-shadow: 0 0 10px ${props => props.theme.colors.accent};
    border-radius: 50%;
  }
`;

const BadgeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillBadge = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${props => props.theme.colors.border};
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.85rem;
  color: ${props => props.theme.colors.light};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;

  &:hover {
    background: ${props => props.theme.colors.secondary}11;
    border-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
    transform: translateX(5px);
    box-shadow: -5px 0 15px ${props => props.theme.colors.secondary}22;
  }
`;

export default function Skills() {
  const skillData = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Styled Components", "Tailwind"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "PostgreSQL", "MongoDB", "Rest API", "GraphQL"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "AWS", "Git", "Figma", "Jest"]
    }
  ];

  return (
    <GlassCard style={{ maxWidth: '1100px' }} id="skills">
      <h2 style={{ color: '#fff', fontSize: '2rem' }}>Technical <span>Arsenal_</span></h2>
      <SkillsWrapper>
        {skillData.map((item, index) => (
          <SkillCategory key={index}>
            <CategoryHeader>{item.category}</CategoryHeader>
            <BadgeGrid>
              {item.skills.map(skill => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </BadgeGrid>
          </SkillCategory>
        ))}
      </SkillsWrapper>
    </GlassCard>
  );
}