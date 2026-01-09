import StyledProvider from '@/lib/StyledProvider';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Meu Portfólio Full Stack',
  description: 'Desenvolvedor focado em UI moderna e performance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <StyledProvider>
          <Navbar />
          {children}
        </StyledProvider>
      </body>
    </html>
  );
}