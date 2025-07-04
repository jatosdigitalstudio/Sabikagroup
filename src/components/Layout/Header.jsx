import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../UI/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: 'About Company', path: '/about' },
    { name: 'Network Stories', path: '/network-stories' },
    { name: 'Our Businesses', path: '/businesses' },
    // { name: 'News & Events', path: '/news-events' },
    { name: 'Partner with Us', path: '/partner' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router]);

  return (
    <nav className={`fixed border-b border-gray-300 w-full z-50 transition-all md:px-12 duration-300 ${isScrolled ? 'bg-white/75 backdrop-blur-xl border-b border-gray-300' : 'bg-transparent'}`}>
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
            <Link href="/#contact">
              <Button>
                  Contact Us
              </Button>
            </Link>
          </div>

          <button 
            className="md:hidden p-2 flex flex-col justify-center items-center"
            aria-label='hamburger'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span 
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }`} >
            </span>
            <span 
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} >
            </span>
            <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
              ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
            </span>  
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="px-4 flex flex-col md:hidden my-4 space-y-4 transition-all duration-500 ease-out">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isScrolled ? 'text-black' : 'text-black'} font-medium transition-colors hover-underline-animation`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}