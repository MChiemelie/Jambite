import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'
import './globals.css'
import SupabaseProvider from '../utils/supabase-provider'
import { Assistant } from 'next/font/google';

export const metadata = {
  title: 'Jambite | Ace Your JAMB',
  description: 'Practice your JAMB Computer Based Test, and put yourself ahead the game. With a wide range of 17 subjects available, Prepare effectively for your exams by accessing a comprehensive collection of over 20,000 past questions.',
}

const inter = Assistant({
  subsets: ['latin'],
  display: 'swap',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en" className={inter.className}>
      <body  className='bg-gradient-to-r from-blue-300 to-sky-500'>
        <SupabaseProvider session={session}>{children}</SupabaseProvider>
      </body>
    </html>
  )
}