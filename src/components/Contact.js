'use client';
import { useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import GlassCard from './GlassCard';
import emailjs from '@emailjs/browser';

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
  const form = useRef(); 
  const [status, setStatus] = useState('idle'); 

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          e.target.reset(); 
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <GlassCard style={{ maxWidth: '700px' }} id="contact">
      <h2 style={{ color: '#fff', textAlign: 'center', fontSize: '2rem' }}>
        Começar <span style={{ color: '#00f2ff' }}>Transmissão_</span>
      </h2>
      <p style={{ textAlign: 'center', opacity: 0.7, marginBottom: '20px' }}>
        Tem um projeto em mente? Vamos conectar os pontos.
      </p>

      {status === 'success' ? (
        <StatusMessage $type="success">
          Transmissão concluída. Mensagem recebida.
          <button 
            onClick={() => setStatus('idle')} 
            style={{ display: 'block', margin: '15px auto 0', background: 'transparent', border: '1px solid currentColor', color: 'inherit', padding: '5px 15px', cursor: 'pointer', borderRadius: '4px' }}>
            Enviar outro
          </button>
        </StatusMessage>
      ) : (
        <Form ref={form} onSubmit={sendEmail} $loading={status === 'loading'}>
          <InputGroup>
            <Label>Codename / Nome</Label>
            <Input 
              type="text"
              name="name" 
              placeholder="John Doe" 
              required
              disabled={status === 'loading'}
            />
          </InputGroup>

          <InputGroup>
            <Label>Canal de comunicação / Email</Label>
            <Input 
              type="email"
              name="email" 
              placeholder="dev@example.com" 
              required
              disabled={status === 'loading'}
            />
          </InputGroup>

          <InputGroup>
            <Label>Payload / Mensagem</Label>
            <TextArea 
              name="message" 
              placeholder="Descreva a missão..." 
              required
              disabled={status === 'loading'}
            />
          </InputGroup>
          
          {status === 'error' && (
            <StatusMessage $type="error">
              Falha na conexão. Tente novamente ou verifique o console.
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