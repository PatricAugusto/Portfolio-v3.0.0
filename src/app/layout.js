import StyledComponentsRegistry from '@/lib/registry';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/GlobalStyles';

export const metadata = {
  title: 'Meu Portfólio Full Stack',
  description: 'Desenvolvedor focado em UI moderna e performance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}