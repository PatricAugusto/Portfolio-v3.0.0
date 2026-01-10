'use client';
import styled from 'styled-components';
import GlassCard from './GlassCard';

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const InnerCard = styled.div`
  background: rgba(255,255,255,0.03);
  padding: 20px;
  border-radius: 15px;
  border: 1px solid rgba(0, 242, 255, 0.1);
`;

export default function Projects() {
  return (
    <GlassCard style={{ maxWidth: '1100px' }} id="projects">
      <h2 style={{color: '#fff'}}>Featured <span>Projects_</span></h2>
      <ProjectGrid>
        <InnerCard>
          <h3 style={{color: '#00f2ff'}}>E-commerce API</h3>
          <p style={{color: '#e0e0e6', opacity: 0.6, fontSize: '0.9rem', marginTop: '10px'}}>Node.js & MongoDB</p>
        </InnerCard>
        {/* Adicione mais InnerCards aqui */}
      </ProjectGrid>
    </GlassCard>
  );
}