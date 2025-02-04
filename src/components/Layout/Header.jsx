// 'use client';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Businesses', path: '/businesses' },
//     { name: 'Partner with Us', path: '/partner' },
//     { name: 'News & Events', path: '/news-events' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <Link href="/" className="text-2xl font-bold text-blue-600">
//             Sabika Group
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <motion.div whileHover={{ scale: 1.05 }} key={item.path}>
//                 <Link
//                   href={item.path}
//                   className="text-gray-600 hover:text-blue-600 transition-colors"
//                 >
//                   {item.name}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 rounded-md text-gray-600"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <XMarkIcon className="h-6 w-6" />
//             ) : (
//               <Bars3Icon className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
//             <div className="px-4 pt-2 pb-3 space-y-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.path}
//                   href={item.path}
//                   className="block text-gray-600 hover:text-blue-600"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import { Button } from '../UI/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About Company', path: '/about' },
    { name: 'Network Stories', path: '/network-stories' },
    { name: 'Businesses', path: '/businesses' },
    { name: 'News & Events', path: '/news-events' },
    { name: 'Partner with Us', path: '/partner' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed border-b border-gray-300 w-full z-50 transition-all px-12 duration-300 ${isScrolled ? 'bg-white/55 backdrop-blur-xl border-b border-gray-300' : 'bg-transparent '}`}>
      <div className="container mx-auto p-4 ">
        <div className="flex justify-between items-center">
          {/* <div className="text-2xl font-bold text-blue-900">Sabika Group</div> */}
          <Link href="/">
            <Image src="/logo-color.png" width={200} height={100} alt='Sabika Group' />
          </Link>
          {/* Desktop Menu */}


          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  href={item.path}
                  className={`${isScrolled ? 'text-black' : 'text-black'} font-medium transition-colors hover-underline-animation`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          <div className="hidden md:flex">
            {/* <div className="bg-[#345DA3] text-white px-6 py-4 rounded-md">
                Contact Us
            </div> */}
            <Button>
              Contact Us
            </Button>
          </div>

          <MobileMenu />

          {/* Mobile Menu Button */}
          {/* <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button> */}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block py-2">About</a>
            <a href="#business" className="block py-2">Business Units</a>
            <a href="#news" className="block py-2">News & Events</a>
            <a href="#contact" className="block py-2">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}