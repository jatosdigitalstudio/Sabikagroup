// components/Layout/HamburgerMenu.js
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on scroll or outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => setIsOpen(false);

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="md:hidden z-100" ref={menuRef}>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="relative w-8 h-8">
          <span className={`absolute left-0 block w-full h-0.5 bg-gray-900 transform transition duration-300 ease-in-out 
            ${isOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-1.5'}`} />
          <span className={`absolute left-0 block w-full h-0.5 bg-gray-900 transform transition duration-300 ease-in-out 
            ${isOpen ? 'opacity-0' : 'opacity-100 translate-y-1.5'}`} />
          <span className={`absolute left-0 block w-full h-0.5 bg-gray-900 transform transition duration-300 ease-in-out 
            ${isOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-4.5'}`} />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        
        {/* Menu Content */}
        <div className={`absolute right-0 top-0 h-full w-3/4 max-w-xs bg-white/95 backdrop-blur-lg shadow-2xl 
          transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          <nav className="flex flex-col h-full p-8 space-y-6 overflow-y-auto">
            <Link href="#about" onClick={() => setIsOpen(false)} 
              className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#business" onClick={() => setIsOpen(false)} 
              className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              Business Units
            </Link>
            <Link href="#news" onClick={() => setIsOpen(false)} 
              className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              News & Events
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} 
              className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            
            <div className="mt-auto pt-8 border-t border-gray-200">
              <p className="text-gray-500">Call us: +1 (555) 123-4567</p>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}