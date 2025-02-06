'use client'
import { useEffect,useState } from 'react';
import { usePathname } from "next/navigation";
import { Inter, Arimo } from "next/font/google";
import "@/styles/globals.css"
import Head from './head';
import Loading from "./loading";
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ScrollToTopButton from '@/components/UI/ScrollToTopButton';

const inter = Arimo({ 
  weight: ['400','500','600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'] 
});

export default  function RootLayout({children}) {
  const [loading,setLoading] = useState(true)
  const path = usePathname();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <html lang="id">
      <body className={inter.className}>
          <>
            {/* <ScrollToTopButton/> */}
            <Header />
              {children}
            <Footer />
          </>
      </body>
    </html>
  );
}
