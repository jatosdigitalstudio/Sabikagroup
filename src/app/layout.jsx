'use client'
import { useEffect,useState } from 'react';
import { usePathname } from "next/navigation";
import { Arimo } from "next/font/google";
import "@/styles/globals.css"
import Loading from "./loading";
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Head from './head';

const inter = Arimo({ 
  weight: ['400','500','600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'] 
});

export default  function RootLayout({children}) {
  const [loading,setLoading] = useState(true)
  const path = usePathname();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <html lang="id">
      <Head/>
      <body className={inter.className}>
         {loading ? <Loading/> : (
          <>
            <Header />
              {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
