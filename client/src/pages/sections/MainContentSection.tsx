import React from "react";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[800px] bg-dark-mode900">
      <img
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[900px]"
        alt="Frame"
        src="/figmaAssets/frame-2131328359.svg"
      />

      <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-6">
        <h1 className="font-heading-h1-small-semi-bold font-[number:var(--heading-h1-small-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h1-small-semi-bold-font-size)] text-center tracking-[var(--heading-h1-small-semi-bold-letter-spacing)] leading-[var(--heading-h1-small-semi-bold-line-height)] [font-style:var(--heading-h1-small-semi-bold-font-style)]">
          Our Partners &amp; Tools
        </h1>

        <p className="w-[526px] font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p3-regular-font-size)] text-center tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] [font-style:var(--paragraph-p3-regular-font-style)]">
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
