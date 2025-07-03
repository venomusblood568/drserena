"use client"
import HeroSection from "./component/header";
import HeroVideoBox from "./component/herovideo";
import InfoSection from "./component/info";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <HeroVideoBox/>
      <InfoSection/>
    </div>
  );
}
