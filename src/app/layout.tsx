import type { Metadata } from "next";
import './globals.css';
import ThemeProviderClient from '../components/ThemeProviderClient';

export const metadata: Metadata = {
  title: 'Portafolio Marcos Santana',
  description: 'Portafolio profesional de Marcos Santana Delgado',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ThemeProviderClient>
          {children}
        </ThemeProviderClient>
      </body>
    </html>
  );
}
