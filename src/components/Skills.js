'use client';

import styled, { keyframes } from 'styled-components';
import GlassCard from './GlassCard';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * 5)); } 
`;

const MarqueeContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 20px 0;

  &::before, &::after {
    content: "";
    height: 100%;
    position: absolute;
    width: 150px;
    z-index: 2;
    pointer-events: none;
  }
  &::before {
    left: 0;
    top: 0;
    background: linear-gradient(to right, ${props => props.theme.colors.primary} 0%, transparent 100%);
  }
  &::after {
    right: 0;
    top: 0;
    background: linear-gradient(to left, ${props => props.theme.colors.primary} 0%, transparent 100%);
  }
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: calc(250px * 10); 
  animation: ${scroll} 25s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const SkillCard = styled.div`
  width: 230px;
  height: 120px;
  margin: 0 10px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.secondary};
    background: rgba(0, 242, 255, 0.05);
    box-shadow: 0 0 20px ${props => props.theme.colors.secondary}22;
  }

  span.label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${props => props.theme.colors.accent};
    font-weight: 800;
  }

  span.value {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${props => props.theme.colors.light};
  }
`;

export default function Skills() {
  const coreStack = [
    { label: "Expertise", value: "AI Specialist" },
    { label: "Frontend", value: "React & Next.js" },
    { label: "Backend", value: "C# & .NET" },
    { label: "Database", value: "SQL" },
    { label: "Languages", value: "TS & JS" },
  ];

  const fullList = [...coreStack, ...coreStack];

  return (
    <GlassCard style={{ maxWidth: '1100px', overflow: 'hidden' }} id="skills">
      <h2 style={{ color: '#fff', fontSize: '2rem', textAlign: 'center' }}>
        Core <span>Tech_Stack</span>
      </h2>
      
      <MarqueeContainer>
        <MarqueeTrack>
          {fullList.map((skill, index) => (
            <SkillCard key={index}>
              <span className="label">{skill.label}</span>
              <span className="value">{skill.value}</span>
            </SkillCard>
          ))}
        </MarqueeTrack>
      </MarqueeContainer>
    </GlassCard>
  );
}