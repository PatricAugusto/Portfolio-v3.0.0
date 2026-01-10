'use client';
import styled from 'styled-components';
import GlassCard from './GlassCard';

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
`;

const SkillBadge = styled.span`
  padding: 10px 20px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
  &:hover { background: #00f2ff11; }
`;

export default function Skills() {
  const skills = ["React", "Next.js", "Node.js", "TypeScript", "AWS"];
  return (
    <GlassCard style={{ maxWidth: '900px' }} id="skills">
      <h2 style={{color: '#fff', textAlign: 'center'}}>Technical <span>Stack_</span></h2>
      <SkillsGrid>
        {skills.map(s => <SkillBadge key={s}>{s}</SkillBadge>)}
      </SkillsGrid>
    </GlassCard>
  );
}