import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import thumbnailImage from "@assets/image_1759422899595.png";

export const ContentSection = (): JSX.Element => {
  const gradientBars = Array.from({ length: 12 }, (_, index) => index);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="section-learn-cro" className="flex flex-col items-start gap-2 px-0 py-[100px] md:py-[200px] relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex items-center gap-[13px] relative self-stretch w-full flex-[0_0_auto] bg-dark-mode700">
        <div className="max-w-[1440px] mx-auto relative w-full h-[681px] flex items-center gap-[13px]">
          <div className="inline-flex h-[681px] items-center relative flex-[0_0_auto] bg-dark-mode700">
            {gradientBars.map((index) => (
              <div
                key={`gradient-bar-${index}`}
                className="relative self-stretch w-10 backdrop-blur-[17.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17.5px)_brightness(100%)] bg-[linear-gradient(270deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.1)_100%)]"
              />
            ))}
          </div>

          <div className="hidden lg:block absolute top-[calc(50%_-_230px)] right-[60px] w-[800px] h-[460px] rounded-2xl overflow-hidden border border-solid border-[#6ae49966] shadow-[0_0_20px_rgba(106,228,153,0.3)]">
            {!isPlaying ? (
              <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                <img 
                  src={thumbnailImage} 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors shadow-lg border-2 border-[#6ae499]">
                    <svg className="w-12 h-12 text-[#6ae499] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <iframe 
                width="800" 
                height="460" 
                src="https://www.youtube.com/embed/8zECN_jyCG4?si=xzQ0dnm87zr0_Cp9&autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>

          <div className="flex w-96 items-start absolute top-20 left-[calc(50.00%_-_688px)] flex-col gap-6">
            <h1 className="relative self-stretch mt-[-1.00px] text-shadeswhite text-[32px] md:text-[48px] font-semibold tracking-[-1.92px] leading-[40px] md:leading-[56px]">
              Learn CRO From Our CEO
            </h1>

            <p className="relative self-stretch text-shadeswhite text-[16px] md:text-[20px] font-semibold tracking-[0px] leading-5 md:leading-6">
              Get insider insights into the strategies that have generated
              millions in additional revenue for Gulf-based e-commerce brands.
            </p>

            <Button
              variant="outline"
              className="px-5 py-3.5 relative flex-[0_0_auto] border border-solid border-[#6ae499] inline-flex items-center justify-center gap-2 rounded bg-transparent h-auto hover:bg-transparent hover:text-secondary-500"
              onClick={() => setIsPlaying(true)}
            >
              <span className="font-semibold text-secondary-500 text-[18px] leading-[21.6px] underline tracking-[0px]">
                Watch Now
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
