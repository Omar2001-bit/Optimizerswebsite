import React from "react";

export const MainContentSection = (): JSX.Element => {
  const partners = [
    { name: "Google Analytics", position: "top-[150px] left-[200px]" },
    { name: "Shopify", position: "top-[150px] right-[200px]" },
    { name: "Hotjar", position: "top-[350px] left-[100px]" },
    { name: "Optimizely", position: "top-[350px] right-[100px]" },
    { name: "VWO", position: "top-[550px] left-[250px]" },
    { name: "Google Optimize", position: "top-[550px] right-[250px]" },
    { name: "Mixpanel", position: "top-[750px] left-[150px]" },
    { name: "Amplitude", position: "top-[750px] right-[150px]" },
  ];

  return (
    <section className="relative w-full min-h-[800px] md:h-[1200px] bg-dark-mode900 py-[100px]">
      <img
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1820px] h-[1170px] opacity-30"
        alt="Frame"
        src="/figmaAssets/frame-2131328359.svg"
      />

      <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-6 z-10">
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

      {partners.map((partner, index) => (
        <div
          key={index}
          className={`absolute ${partner.position} w-[120px] h-[120px] rounded-full bg-[#0b130e] border-2 border-[#6ae499] flex items-center justify-center shadow-[0_0_30px_rgba(106,228,153,0.5),inset_0_0_20px_rgba(106,228,153,0.1)] hover:shadow-[0_0_50px_rgba(106,228,153,0.8),inset_0_0_30px_rgba(106,228,153,0.2)] transition-all duration-300 hover:scale-110`}
          data-testid={`partner-logo-${index}`}
        >
          <span className="text-secondary-400 text-[12px] font-semibold text-center px-2">
            {partner.name}
          </span>
        </div>
      ))}
    </section>
  );
};
