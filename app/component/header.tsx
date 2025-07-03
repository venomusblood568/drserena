import Image from "next/image";

export default function HeroSection() {
  return (
    <header className="bg-[#F2F0E8] p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Image src="/logo.jpg" alt="Logo" width={274} height={70} />
      </div>
    </header>
  );
}
