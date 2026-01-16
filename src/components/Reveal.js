'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

const RevealContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center; 
`;

export default function Reveal({ children, delay = 0 }) {
  return (
    <RevealContainer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
    >
      {children}
    </RevealContainer>
  );
}