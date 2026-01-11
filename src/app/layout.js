import StyledProvider from '@/lib/StyledProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Meu Portfólio Full Stack',
  description: 'Desenvolvedor focado em UI moderna e performance',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <StyledProvider>
          <Navbar />
          {children}
          <Footer />
        </StyledProvider>
      </body>
    </html>
  );
}