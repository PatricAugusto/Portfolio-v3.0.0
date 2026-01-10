'use client';
import styled from 'styled-components';
import GlassCard from './GlassCard';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const Input = styled.input`
  background: rgba(0,0,0,0.2);
  border: 1px solid ${props => props.theme.colors.border};
  padding: 12px;
  color: #fff;
  border-radius: 8px;
  &:focus { border-color: ${props => props.theme.colors.secondary}; outline: none; }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 120px;
`;

export default function Contact() {
  return (
    <GlassCard style={{ maxWidth: '700px' }} id="contact">
      <h2 style={{color: '#fff', textAlign: 'center'}}>Get in <span>Touch_</span></h2>
      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <TextArea placeholder="Mensagem" />
        <button style={{padding: '12px', background: '#00f2ff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'}}>Enviar</button>
      </Form>
    </GlassCard>
  );
}