import { BUSINESS_UNIT } from "@/lib/data"; 
import Image from "next/image";
import Link from "next/link"; 

export default function Card() {
    return (
      <div className="flex items-start justify-end gap-4 overflow-hidden p-6">
        {BUSINESS_UNIT.map((item) => (
          <Link key={item.id} href={item.link} target="blank" className="group relative w-full overflow-hidden shadow-md rounded-lg transition-all hover:shadow-xl">
            <div className={`flex flex-col w-[280px] h-[350px] md:w-[450px] md:h-[400px] py-10 px-6 bg-black text-2xl text-white`}>
              <Image
                src={item.image}
                alt={item.name}
                fill={true}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />

              <div className="relative flex h-full flex-col items-start justify-end p-2 md:p-4 text-left text-white">
                <h2 className="text-xl mb-2">{item.name}</h2>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  };