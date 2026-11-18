import type { Metadata, Viewport } from 'next';
import Analytics from '@/components/Analytics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://topgpacalculator.com'),
  title: 'GPA Calculator - Free & Accurate GPA Calculator for Students',
  description: 'Estimate your GPA with a free calculator for college and high school coursework. Grading scales vary, so check your school’s policy for official results.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    siteName: 'Top GPA Calculator',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Top GPA Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://topgpacalculator.com',
  },
  verification: {
    google: 'sOKuDeXdAwkrZahqPDQMw4dLHFjmANUvm4cWywafui8',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0066cc" />
        <style dangerouslySetInnerHTML={{ __html: `
          /* Critical above-the-fold CSS */
          *{margin:0;padding:0;box-sizing:border-box}
          :root{--font-inter:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Helvetica Neue',sans-serif;--font-poppins:'Trebuchet MS','Segoe UI Semibold','Arial Narrow','Avenir Next','Arial',sans-serif}
          html{scroll-behavior:smooth;scroll-padding-top:5rem}
          body{font-family:var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#ffffff;color:#1e293b;line-height:1.6}
          h1,h2,h3,h4,h5,h6{font-family:var(--font-poppins),var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif}
          ::-webkit-scrollbar{width:8px}
          ::-webkit-scrollbar-track{background:#f8fafc}
          ::-webkit-scrollbar-thumb{background:linear-gradient(135deg,#3b82f6 0%,#1d4ed8 100%);border-radius:4px}
          ::-webkit-scrollbar-thumb:hover{background:linear-gradient(135deg,#1d4ed8 0%,#1e40af 100%)}
          img{max-width:100%;height:auto;border-radius:0.5rem}
          a{color:#2563eb;text-decoration:none;transition:all 0.2s ease}
          a:hover{color:#1d4ed8;text-decoration:underline}
          button{cursor:pointer;font-weight:500;transition:all 0.2s ease;border:none;outline:none}
          button:focus{outline:2px solid #3b82f6;outline-offset:2px}
          input,select,textarea{font-family:inherit;font-size:inherit;transition:all 0.2s ease}
          input:focus,select:focus,textarea:focus{outline:2px solid #3b82f6;outline-offset:2px}
          section{margin:0;padding:5rem 0}
          section:first-of-type{padding-top:0}
          @media(max-width:640px){section{padding:3rem 0}}
        `}} />
      </head>
      <body className="bg-white">
        <Analytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}




