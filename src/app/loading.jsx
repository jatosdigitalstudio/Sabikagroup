import Image from "next/image";

export default function Loading() {
    return (
      <div className="flex h-screen items-center justify-center z-10!important">
        <div className="loader z-20!important">
          <Image src="/icon-sabika.png" width={80} height={80} alt="icon sabika"/>
        </div>
      </div>
    );
  }
  