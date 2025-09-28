import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const stepperData = [
    {
      number: 1,
      title: "Conversions",
      subtitle: "Conversion Volume",
      isActive: true,
      borderColor: "border-[#6ae499]",
      textColor: "text-secondary-500",
    },
    {
      number: 2,
      title: "Objective",
      subtitle: "Business Objective",
      isActive: false,
      borderColor: "border-[#a0abbb]",
      textColor: "text-neutral-400",
    },
    {
      number: 3,
      title: "Website",
      subtitle: "Website",
      isActive: false,
      borderColor: "border-[#a0abbb]",
      textColor: "text-neutral-400",
    },
    {
      number: 4,
      title: "Contact",
      subtitle: "Contact Details",
      isActive: false,
      borderColor: "border-[#a0abbb]",
      textColor: "text-neutral-400",
    },
    {
      number: 5,
      title: "Schedule",
      subtitle: "Schedule",
      isActive: false,
      borderColor: "border-[#a0abbb]",
      textColor: "text-neutral-400",
    },
  ];

  const conversionOptions = [
    {
      id: "fewer-100",
      text: "Fewer Than 100",
      fontWeight: "font-paragraph-p3-regular",
    },
    {
      id: "100-1k",
      text: "From 100 to 1K",
      fontWeight: "font-paragraph-p3-semi-bold",
    },
    {
      id: "100-10k",
      text: "From 100 to 10K",
      fontWeight: "font-paragraph-p3-regular",
    },
    {
      id: "10k-plus",
      text: "10K+",
      fontWeight: "font-paragraph-p3-regular",
    },
  ];

  const arrowPositions = [
    "left-[181px]",
    "left-[402px]",
    "left-[622px]",
    "left-[842px]",
  ];

  return (
    <section className="relative w-full bg-dark-mode900 py-[100px]">
      <div className="flex flex-col items-center gap-[60px] max-w-[1176px] mx-auto px-4">
        <header className="flex flex-col items-center gap-6">
          <h1 className="font-heading-h1-semi-bold font-[number:var(--heading-h1-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h1-semi-bold-font-size)] tracking-[var(--heading-h1-semi-bold-letter-spacing)] leading-[var(--heading-h1-semi-bold-line-height)] [font-style:var(--heading-h1-semi-bold-font-style)] text-center">
            Book Your Free Strategy Session
          </h1>
        </header>

        <Card className="w-full max-w-[1176px] bg-[#ffffff0a] rounded-3xl border border-solid border-[#ffffff1a] shadow-[0px_0px_16px_10px_#6ae4991a] p-3">
          <CardContent className="flex flex-col items-center gap-[60px] px-6 py-8 rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.3)_100%),radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)]">
            <div className="flex flex-col items-center gap-10 w-full">
              <nav className="flex items-start w-full rounded-md relative">
                <div className="flex w-full">
                  {stepperData.map((step, index) => (
                    <div
                      key={step.number}
                      className="flex flex-col items-center justify-center gap-2.5 px-6 py-4 flex-1"
                    >
                      <div className="flex items-start gap-4 w-full">
                        <div className="inline-flex h-5 items-center gap-4">
                          <div
                            className={`flex flex-col w-5 h-5 items-center justify-center gap-2.5 rounded-[10px] border border-solid ${step.borderColor}`}
                          >
                            <div
                              className={`flex items-center justify-center w-fit font-[number:var(--caption-regular-font-weight)] ${step.textColor} text-[length:var(--caption-regular-font-size)] text-center tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] whitespace-nowrap font-caption-regular [font-style:var(--caption-regular-font-style)]`}
                            >
                              {step.number}
                            </div>
                          </div>
                        </div>

                        <div className="inline-flex flex-col items-start justify-center gap-2">
                          <div
                            className={`flex items-center justify-center w-fit mt-[-1.00px] font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] ${step.textColor} text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p1-regular-font-style)]`}
                          >
                            {step.title}
                          </div>

                          <div
                            className={`flex items-center justify-center w-fit font-[number:var(--caption-regular-font-weight)] ${step.textColor} text-[length:var(--caption-regular-font-size)] leading-[var(--caption-regular-line-height)] whitespace-nowrap font-caption-regular text-center tracking-[var(--caption-regular-letter-spacing)] [font-style:var(--caption-regular-font-style)]`}
                          >
                            {step.subtitle}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {arrowPositions.map((position, index) => (
                  <img
                    key={`arrow-${index}`}
                    className={`${position} absolute top-[calc(50.00%_-_13px)] w-10 h-px object-cover`}
                    alt="Arrow"
                    src="/figmaAssets/arrow-4.svg"
                  />
                ))}
              </nav>

              <div className="flex w-[870px] items-center flex-col gap-6">
                <h2 className="font-heading-h1-small-semi-bold font-[number:var(--heading-h1-small-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h1-small-semi-bold-font-size)] text-center tracking-[var(--heading-h1-small-semi-bold-letter-spacing)] leading-[var(--heading-h1-small-semi-bold-line-height)] [font-style:var(--heading-h1-small-semi-bold-font-style)]">
                  Number of conversions per MONTH on average?
                </h2>
              </div>
            </div>

            <div className="inline-flex flex-col gap-6 items-start">
              <div className="inline-flex items-start gap-6">
                {conversionOptions.slice(0, 2).map((option) => (
                  <Card
                    key={option.id}
                    className={`w-[300px] h-[150px] rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)] cursor-pointer hover:border-[#6ae499] transition-colors ${
                      selectedOption === option.id ? "border-[#6ae499]" : ""
                    }`}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    <CardContent className="flex items-center justify-center h-full p-6">
                      <div
                        className={`${option.fontWeight} font-[number:var(--paragraph-p3-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p3-regular-font-size)] text-center tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] [font-style:var(--paragraph-p3-regular-font-style)]`}
                      >
                        {option.text}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="inline-flex items-start gap-6">
                {conversionOptions.slice(2, 4).map((option) => (
                  <Card
                    key={option.id}
                    className={`w-[300px] h-[150px] rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)] cursor-pointer hover:border-[#6ae499] transition-colors ${
                      selectedOption === option.id ? "border-[#6ae499]" : ""
                    }`}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    <CardContent className="flex items-center justify-center h-full p-6">
                      <div
                        className={`${option.fontWeight} font-[number:var(--paragraph-p3-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p3-regular-font-size)] text-center tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] [font-style:var(--paragraph-p3-regular-font-style)]`}
                      >
                        {option.text}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Button
              className="px-5 py-3.5 border border-solid border-[#6ae499] bg-transparent hover:bg-[#6ae499]/10 rounded h-auto"
              disabled={!selectedOption}
            >
              <div className="font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-secondary-500 text-[length:var(--paragraph-p3-semi-bold-font-size)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap w-fit mt-[-1.00px] font-paragraph-p3-semi-bold tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                Next
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
