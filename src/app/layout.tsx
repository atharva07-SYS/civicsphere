import type { Metadata } from 'next'
import { GeistSans, GeistMono } from 'geist/font'
import { Analytics } from '@vercel/analytics/react'
import { config } from '../config'
import './globals.css'

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: config.appName,
  description: "A platform for civic engagement and community building",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {config.features.analytics && <Analytics />}
      </body>
    </html>
  );
}
