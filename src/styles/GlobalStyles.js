import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.light};
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }
`;