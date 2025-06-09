import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://aurivra-solutions.vercel.app/'),  // << OVO DODAJ
  title: 'Aurivra Solutions | Web Development & Digital Solutions',
  description: 'Custom web development, SEO optimization, and digital product design for businesses looking to lead in the digital age.',
  keywords: ['Web Development', 'SEO Optimization', 'Web application', 'Digital Solutions', 'Aurivra Solutions', 'Web Design', 'Custom Applications'],
  authors: [{ name: 'Ivan Gudelj', url: 'https://aurivra-solutions.vercel.app/' }],
  creator: 'Aurivra Solutions',
  publisher: 'Aurivra Solutions',
  openGraph: {
    title: 'Aurivra Solutions | Web Development & Digital Solutions',
    description: 'Custom web development and SEO-optimized digital products crafted with cutting-edge technologies.',
    url: 'https://aurivra-solutions.vercel.app/',
    siteName: 'Aurivra Solutions',
    images: [
      {
        url: '/logo1.png',
        width: 1200,
        height: 630,
        alt: 'Aurivra Solutions - Web Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurivra Solutions | Web Development & Digital Solutions',
    description: 'Custom web development and SEO-optimized digital products crafted with cutting-edge technologies.',
    images: ['/logo1.png'],
  },
  icons: {
    icon: '/logo1.png',
  },
  other: {
    'google-site-verification': 'O4pkhmAcaR_PUIaL1TR6CfJ5Sd_Vi8MNfLFWfqCJPbg'
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
