const names = [
    { name: "John LBF", id: 1 },
    { name: "Baim Wong", id: 2 },
    { name: "Rafi Ahmad", id: 3 },
    { name: "Sandiaga Uno", id: 4 },
  ];
  
import { BUSINESS_UNIT } from "@/lib/data"; 
import Image from "next/image";
import Link from "next/link"; 

export default function Card() {
    return (
      <div className="flex items-start justify-end gap-4 overflow-hidden p-6">
        {BUSINESS_UNIT.map((item) => (
          <Link key={item.id} href={item.link} target="blank">
            <div className={`w-[500px] py-36 px-12 bg-[#345DA3] rounded-lg text-2xl text-white`}>
              {/* <Image src={item.image} width={100} height={100} alt="imae"/> */}
              <h2>{item.name}</h2>
              <p className="text-sm">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  };