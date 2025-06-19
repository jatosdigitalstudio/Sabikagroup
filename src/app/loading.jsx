import Image from "next/image";

export default function Loading() {
    return (
      <div className="flex h-screen items-center justify-center z-10!important">
        <div className="flex flex-col justify-center items-center  gap-4">
          <Image src="/masterlogo.png" width={80} height={80} alt="icon sabika"/>
          <div className="loader z-20!important">
          </div>
        </div>
      </div>
    );
  }
  