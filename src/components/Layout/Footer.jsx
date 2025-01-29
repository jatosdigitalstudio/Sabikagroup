import Image from "next/image";

export default function Footer() {
    return (
      <footer className="bg-[#345DA3] text-white py-12 px-8 m-6 md:m-12 rounded-xl">
        <div className="container mx-auto px-2 md:px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-48">
            <div className="mb-2">
              <Image src="/logo-white.png" width={300} height={100} alt="Sabika Group" />
              {/* <h4 className="text-xl font-bold mb-4">Sabika Group</h4> */}
              <p className="text-sm opacity-75">Building sustainable futures since 1995</p>
            </div>
            
            <div className="grid grid-rows md:grid-cols-3 gap-8">
                <div>
                <h5 className="font-bold text-xl mb-4">Company</h5>
                <ul className="space-y-2 text-md opacity-75">
                    <li><a href="#" className="!hover:opacity-100">About Us</a></li>
                    <li><a href="#" className="hover:opacity-100">Vision & Mission</a></li>
                    <li><a href="#" className="hover:opacity-100">Network Stories</a></li>
                    <li><a href="#" className="hover:opacity-100">News & Events</a></li>
                </ul>
                </div>

                <div>
                <h5 className="font-bold text-xl mb-4">Businesses</h5>
                <ul className="space-y-2 text-md">
                    <li><a href="#" className="hover:opacity-75">Worker</a></li>
                    <li><a href="#" className="hover:opacity-75">Real Estate</a></li>
                    <li><a href="#" className="hover:opacity-75">Technology</a></li>
                    <li><a href="#" className="hover:opacity-75">Otomotif</a></li>
                    <li><a href="#" className="hover:opacity-75">Food & Beverages</a></li>
                </ul>
                </div>

                <div>
                <h5 className="font-bold text-xl mb-4">Contact Us</h5>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:opacity-75">Energy</a></li>
                    <li><a href="#" className="hover:opacity-75">Real Estate</a></li>
                    <li><a href="#" className="hover:opacity-75">Technology</a></li>
                </ul>
                </div>
            </div>
          </div>
  
          <div className="border-t border-white mt-6 md:mt-2 pt-8 text-center text-sm">
            <p>© 2024 Sabika Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }