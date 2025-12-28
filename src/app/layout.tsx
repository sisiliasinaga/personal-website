import '../styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Sisilia Sinaga',
  description: 'Sisilia Sinaga is a portfolio website for Sisilia, a software engineer, researcher, musician, dancer, technologist, and creative.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scrollbar-thin">
      <body className="bg-gradient-soft dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}