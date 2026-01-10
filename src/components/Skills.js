'use client';

import styled from 'styled-components';

const Section = styled.section`
  padding: 60px 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;
`;

const SkillBadge = styled.div`
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(5px);
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.light};
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: default;
  position: relative;
  overflow: hidden;

  &:hover {
    color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};
    transform: scale(1.1);
    box-shadow: 0 0 20px ${props => props.theme.colors.secondary}33;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, transparent, ${props => props.theme.colors.secondary}11, transparent);
    }
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.accent};
  margin-top: 40px;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export default function Skills() {
  const techStack = [
    "JavaScript", "React", "Next.js", "Node.js", 
    "TypeScript", "Styled Components", "PostgreSQL", 
    "Git", "Docker", "AWS", "Python"
  ];

  return (
    <Section id="skills">
      <CategoryTitle>Technical Stack_</CategoryTitle>
      <SkillsContainer>
        {techStack.map((skill) => (
          <SkillBadge key={skill}>
            {skill}
          </SkillBadge>
        ))}
      </SkillsContainer>
    </Section>
  );
}