"use client"


export default function HeroVideoBox() {
  return (
    <section className="relative h-fit bg-[#F2F0E8] w-full flex justify-center items-center px-4 md:px-20 overflow-hidden">
      {/* Video Container */}
      <div className="relative w-[3000px] h-full">
        {/* Video */}
        <video
          className="w-full h-full object-cover "
          src="/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay Text */}
        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center rounded-lg font-[Georgia]">
          <div className="text-center text-white px-4">
            <h1
              className="text-[66.22px] leading-[81.583px] mb-4 p-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Psychological Care for
            </h1>
            <h1
              className="text-[66.22px] leading-[81.583px] mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Change, Insight, and Well-Being
            </h1>
            <span className="text-2xl block mb-6">
              Offering individual psychotherapy for adults via telehealth in{" "}
              <span className="underline">most U.S. states</span> through
              PSYPACT participation.
            </span>

            {/* CTA Button */}
            <div className="flex justify-center mt-5">
              <button className="flex justify-center items-center w-[285px] h-[98px] px-[35.2px] bg-[#94B0B0] text-white text-[16px] font-sans uppercase tracking-[1.6px] rounded-full  transition-opacity duration-100 ease-linear cursor-pointer text-center">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
