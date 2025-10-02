import React from "react";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[800px] md:h-[1200px] bg-dark-mode900 py-[100px]">
      <img
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1820px] h-[1170px]"
        alt="Frame"
        src="/figmaAssets/frame-2131328359.svg"
      />

      <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-6">
        <h1 className="text-shadeswhite text-[34px] font-semibold text-center tracking-[-1.36px] leading-[40px]">
          Our Partners &amp; Tools
        </h1>

        <p className="w-[526px] text-shadeswhite text-[18px] font-normal text-center tracking-[0px] leading-[21.6px]">
          Powered by Industry-Leading Platforms.
          <br />
          We work with the most trusted tools and platforms in the GCC and
          globally to ensure accurate tracking, effective testing, and scalable
          growth.
        </p>
      </div>
    </section>
  );
};
