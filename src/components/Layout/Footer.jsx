import Image from "next/image";
import Link from "next/link";
import { RiInstagramFill,RiFacebookCircleFill, RiLinkedinBoxFill  } from "react-icons/ri";

export default function Footer() {
    return (
      <footer className="bg-[#345DA3] text-white py-12 px-8 m-6 md:m-12 rounded-xl">
        <div className="container mx-auto px-2 md:px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-32">
            <div className="mb-2 max-w-md">
              <Image src="/logo-white.png" width={300} height={100} alt="Sabika Group" className="ml-[-15px]" />
              <p className="text-md opacity-75">
                A diversified holding company driving innovation, collaboration, and sustainable success across industries
              </p>
            </div>
            
            <div className="grid grid-rows md:grid-cols-3 gap-8">
                <div>
                <h5 className="font-bold text-xl mb-4">Company</h5>
                  <ul className="space-y-2 text-xl">
                      <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                      <li><Link href="/" className="text-gray-300 hover:text-white">Vision & Mission</Link></li>
                      <li><Link href="/" className="text-gray-300 hover:text-white">Network Stories</Link></li>
                      <li><Link href="/" className="text-gray-300 hover:text-white">News & Events</Link></li>
                  </ul>
                </div>

                <div>
                <h5 className="font-bold text-xl mb-4">Businesses</h5>
                <ul className="space-y-2 text-xl">
                    <li><Link href="/" className="text-gray-300 hover:text-white">Worker</Link></li>
                    <li><Link href="/" className="text-gray-300 hover:text-white">Real Estate</Link></li>
                    <li><Link href="/" className="text-gray-300 hover:text-white">Technology</Link></li>
                    <li><Link href="/" className="text-gray-300 hover:text-white">Otomotif</Link></li>
                    <li><Link href="/" className="text-gray-300 hover:text-white">Food & Beverages</Link></li>
                </ul>
                </div>

                <div>
                <h5 className="font-bold text-xl mb-4">Partner With Us</h5>
                <ul className="space-y-2 text-xl">
                    <li><Link href="/" className="text-gray-300 hover:text-white">Investment</Link></li>
                    <li><Link href="/" className="text-gray-300 hover:text-white">Collaboration</Link></li>
                </ul>
                </div>
            </div>
          </div>

          <div className="flex flex-row mb-6 gap-2">
            <Link href="/">
              <RiFacebookCircleFill size={40} className="hover:text-white text-gray-300" />
            </Link>
            <Link href="/">
              <RiInstagramFill size={40} className="hover:text-white text-gray-300" />
            </Link>
            <Link href="/">
              <RiLinkedinBoxFill size={40} className="hover:text-white text-gray-300" />
            </Link>
          </div>
  
          <div className="border-t border-white mt-6 md:mt-2 pt-8 text-center text-md">
            <p>© 2025 Sabika Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }