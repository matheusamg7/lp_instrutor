import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['400', '600', '800'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Instrutor Ideal - A maneira mais segura de aprender a dirigir',
  description: 'A plataforma que conecta instrutores autônomos a alunos.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-sans`}>{children}</body>
    </html>
  );
}
