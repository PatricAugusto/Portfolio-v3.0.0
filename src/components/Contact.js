'use client';
import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import GlassCard from './GlassCard';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  opacity: ${props => (props.$loading ? 0.5 : 1)};
  pointer-events: ${props => (props.$loading ? 'none' : 'all')};
  transition: opacity 0.3s ease;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 700;
  margin-left: 5px;
`;

const Input = styled.input`
  background: rgba(10, 11, 16, 0.6);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  padding: 16px;
  color: ${props => props.theme.colors.light};
  font-family: 'Fira Code', monospace; 
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.secondary};
    box-shadow: 0 0 15px ${props => props.theme.colors.secondary}22;
    background: rgba(10, 11, 16, 0.9);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    filter: brightness(1.2);
    transform: translateY(-2px);
    box-shadow: 0 5px 20px ${props => props.theme.colors.accent}66;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    transform: none;
  }
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const StatusMessage = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  animation: fadeIn 0.5s ease;
  
  ${props => props.$type === 'success' && css`
    background: rgba(0, 255, 100, 0.1);
    border: 1px solid #00ff64;
    color: #00ff64;
  `}

  ${props => props.$type === 'error' && css`
    background: rgba(255, 50, 50, 0.1);
    border: 1px solid #ff3232;
    color: #ff3232;
  `}

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus('error');
      }
    }, 2000);
  };

  return (
    <GlassCard style={{ maxWidth: '700px' }} id="contact">
      <h2 style={{ color: '#fff', textAlign: 'center', fontSize: '2rem' }}>
        Start <span style={{ color: '#00f2ff' }}>Transmission_</span>
      </h2>
      <p style={{ textAlign: 'center', opacity: 0.7, marginBottom: '20px' }}>
        Tem um projeto de IA ou .NET em mente? Vamos conectar os pontos.
      </p>

      {status === 'success' ? (
        <StatusMessage $type="success">
          Transmission Complete. Message Received.
          <button 
            onClick={() => setStatus('idle')} 
            style={{ display: 'block', margin: '15px auto 0', background: 'transparent', border: '1px solid currentColor', color: 'inherit', padding: '5px 15px', cursor: 'pointer', borderRadius: '4px' }}>
            Send Another
          </button>
        </StatusMessage>
      ) : (
        <Form onSubmit={handleSubmit} $loading={status === 'loading'}>
          <InputGroup>
            <Label>Codename / Name</Label>
            <Input 
              name="name" 
              placeholder="John Doe" 
              value={formData.name} 
              onChange={handleChange} 
              disabled={status === 'loading'}
            />
          </InputGroup>

          <InputGroup>
            <Label>Communication Channel / Email</Label>
            <Input 
              name="email" 
              type="email" 
              placeholder="dev@example.com" 
              value={formData.email} 
              onChange={handleChange}
              disabled={status === 'loading'}
            />
          </InputGroup>

          <InputGroup>
            <Label>Payload / Message</Label>
            <TextArea 
              name="message" 
              placeholder="Descreva a missão..." 
              value={formData.message} 
              onChange={handleChange}
              disabled={status === 'loading'}
            />
          </InputGroup>
          
          {status === 'error' && (
            <StatusMessage $type="error">
              Error: All fields are required to establish connection.
            </StatusMessage>
          )}

          <SubmitButton type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? <LoadingSpinner /> : 'Initiate Protocol'}
          </SubmitButton>
        </Form>
      )}
    </GlassCard>
  );
}