import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed border-b border-gray-300 w-full z-50 transition-all md:px-12 duration-300 ${isScrolled ? 'bg-white/55 backdrop-blur-xl border-b border-gray-300' : 'bg-transparent '}`}>
      <div className="lg:container mx-auto p-4 ">
        <div className="flex justify-between items-center">
          {/* <div className="text-2xl font-bold text-blue-900">Sabika Group</div> */}
          <Link href="/">
            <Image src="/logo-sabika.png" width={250} height={100} alt='Sabika Group' />
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

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
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
        )}
      </div>
    </nav>
  );
}