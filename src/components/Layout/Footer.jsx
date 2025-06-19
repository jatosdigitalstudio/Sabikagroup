import Image from "next/image";
import Link from "next/link";
import { RiInstagramFill,RiFacebookCircleFill, RiLinkedinBoxFill } from "react-icons/ri";
import { HiPhone, HiOfficeBuilding} from "react-icons/hi";

export default function Footer() {
    return (
      <footer className="bg-[#245CA1] text-white py-8 px-6 md:py-12 md:px-8 m-6 md:m-12 rounded-xl" id="contact">
        <div className="container mx-auto px-2 md:px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="mb-2 max-w-md space-y-4">
              <div className="">
                <Image src="/logo-white.png" width={300} height={100} alt="Sabika Group" className="ml-[-15px]" />
                <p className="text-md text-gray-200">
                  A diversified holding company driving innovation, collaboration, and sustainable success across industries
                </p>
              </div>
              <Link href="/" className="flex flex-row items-center gap-3">
                <HiPhone size={35} className="bg-white rounded-full text-[#245CA1] p-2"/>
                <p className="text-md text-gray-200">
                  (021) 8299273
                </p>
              </Link>
              <Link href="https://g.co/kgs/MiKYfvZ" className="flex items-start justify-center gap-3" target="_blank">
                <HiOfficeBuilding fontSize={35} className="bg-white rounded-full text-[#245CA1] p-2"/>
                <p className="-mt-0.5 flex-1 not-italic text-gray-100">
                  Jl. Asem Baris Raya No.3, RT.4/RW.12, Kb. Baru, Kec. Tebet, Kota Jakarta Selatan, DKI Jakarta 12830
                </p>
              </Link>
            
            </div>
            
            <div className="grid grid-rows md:grid-cols-3 gap-8">
                <div>
                <h3 className="font-bold text-xl mb-4">Company</h3>
                  <ul className="space-y-2 text-md md:text-xl">
                      <li><Link href="/about" className="text-gray-200 hover:text-white">About Us</Link></li>
                      <li><Link href="/network-stories" className="text-gray-200 hover:text-white">Network Stories</Link></li>
                      {/* <li><Link href="/news-events" className="text-gray-200 hover:text-white">News & Events</Link></li> */}
                  </ul>
                </div>

                <div>
                <h3 className="font-bold text-xl mb-4">Businesses</h3>
                <ul className="space-y-2 text-md md:text-xl">
                    <li><Link href="/businesses" className="text-gray-200 hover:text-white">Worker</Link></li>
                    <li><Link href="/businesses" className="text-gray-200 hover:text-white">Real Estate</Link></li>
                    <li><Link href="/businesses" className="text-gray-200 hover:text-white">Technology</Link></li>
                    <li><Link href="/businesses" className="text-gray-200 hover:text-white">Otomotif</Link></li>
                    <li><Link href="/businesses" className="text-gray-200 hover:text-white">Food & Beverages</Link></li>
                </ul>
                </div>

                <div>
                <h3 className="font-bold text-xl mb-4">Partner With Us</h3>
                <ul className="space-y-2 text-md md:text-xl">
                    <li><Link href="/partner" className="text-gray-200 hover:text-white">Investment</Link></li>
                    <li><Link href="/partner" className="text-gray-200 hover:text-white">Collaboration</Link></li>
                </ul>
                </div>
            </div>
          </div>

          <div className="flex flex-row mb-6 gap-2">
            <Link aria-label="facebook" href="www.facebook.com">
              <RiFacebookCircleFill size={40} className="hover:text-white text-gray-200" />
            </Link>
            <Link aria-label="instagram" href="https://www.instagram.com/sabika.propertindo/?hl=en">
              <RiInstagramFill size={40} className="hover:text-white text-gray-200" />
            </Link>
            <Link aria-label="linkedin" href="https://www.linkedin.com/company/sabika-garuda-kapital/?originalSubdomain=id">
              <RiLinkedinBoxFill size={40} className="hover:text-white text-gray-200" />
            </Link>
          </div>
  
          <div className="border-t border-white mt-6 md:mt-2 pt-8 text-center text-sm md:text-md">
            <p>© 2025 Sabika Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }