import React from 'react';
import './globals.css'

export const metadata = {
  title: 'Jambite | Ace In One Sitting',
  description: 'Jambite is prepares you for your JAMB',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
