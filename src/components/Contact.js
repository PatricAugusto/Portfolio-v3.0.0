'use client';

import styled from 'styled-components';
import GlassCard from './GlassCard';

const Section = styled.section`
  padding: 100px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 700;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  padding: 15px;
  color: ${props => props.theme.colors.light};
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.secondary};
    box-shadow: 0 0 15px ${props => props.theme.colors.secondary}33;
    background: rgba(255, 255, 255, 0.06);
  }
`;

const TextArea = styled(Input).as('textarea')`
  min-height: 150px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, ${props => props.theme.colors.secondary} 0%, ${props => props.theme.colors.accent} 100%);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    filter: brightness(1.2);
    transform: translateY(-2px);
    box-shadow: 0 5px 20px ${props => props.theme.colors.accent}66;
  }

  &:active {
    transform: translateY(0);
  }
`;

export default function Contact() {
  return (
    <Section id="contact">
      <GlassCard>
        <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Get in <span>Touch_</span></h2>
        <p style={{ textAlign: 'center', opacity: 0.7, fontSize: '0.9rem' }}>
          Interessado em colaborar ou apenas quer dar um oi? Mande uma mensagem!
        </p>
        
        <Form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <Label>Name</Label>
            <Input type="text" placeholder="Seu nome oficial..." />
          </InputGroup>

          <InputGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="seu@email.com" />
          </InputGroup>

          <InputGroup>
            <Label>Message</Label>
            <TextArea placeholder="Descreva seu projeto ou ideia..." />
          </InputGroup>

          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </GlassCard>
    </Section>
  );
}