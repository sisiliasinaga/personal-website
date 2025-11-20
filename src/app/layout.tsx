import '../styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Sisilia.dev',
  description: 'Sisilia.dev is a portfolio website for Sisilia, a software engineer, researcher, musician, dancer, technologist, and creative.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </body>
  </html>
  );
}