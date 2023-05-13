import './globals.css'

import { Assistant } from 'next/font/google';
 
const inter = Assistant({
  subsets: ['latin'],
  display: 'swap',
});
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className='bg-gradient-to-r from-sky-300 to-sky-500 '>{children}</body>
    </html>
  );
}