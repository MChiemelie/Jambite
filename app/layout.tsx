'use client'

import './globals.css'
import SupabaseProvider from "./supabase-provider";
import { Assistant } from 'next/font/google';
 
const inter = Assistant({
  subsets: ['latin'],
  display: 'swap',
});
 
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={inter.className}>
      <body className='bg-gradient-to-r from-blue-300 to-sky-500'>
        <SupabaseProvider session={null}>{children}</SupabaseProvider></body>
    </html>
  );
}

export default RootLayout;