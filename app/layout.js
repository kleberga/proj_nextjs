import Layout from "@/components/layout"
import { UserProvider } from '../contexts/userContext'
import './globals.css'
import Head from 'next/head';

export const metadata = {
  title: 'Notícias de Economia',
  description: 'Notícias e informações de economia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider> 
          <Layout>{children}</Layout> 
        </UserProvider>
      </body>  
    </html>
  )
}

