import React from "react";
import { Separator } from "@/components/ui/separator";

export const FooterSection = (): JSX.Element => {
  const backgroundStripes = Array.from({ length: 36 }, (_, index) => index);

  const quickLinks = ["About", "Services", "ROI Calculator", "Contact"];

  const services = [
    "Conversion Rate Optimization",
    "A/B Testing",
    "User Experience Design",
    "Analytics & Tracking",
  ];

  const contactInfo = [
    {
      icon: "/figmaAssets/communication---location-on.svg",
      text: "Ras Al Khaimah Economic Zone Office",
      width: "w-[268px]",
    },
    {
      icon: "/figmaAssets/communication---location-on.svg",
      text: "Office Business Hub, New Cairo, Egypt",
      width: "w-[271px]",
    },
    {
      icon: "/figmaAssets/communication---call.svg",
      text: "+971 564800881",
      width: "w-[115px]",
    },
    {
      icon: "/figmaAssets/communication---call.svg",
      text: "+2 01021001000",
      width: "w-[120px]",
    },
  ];

  return (
    <footer className="relative w-full h-[477px] bg-dark-mode300">
      <div className="flex h-[477px] items-center absolute top-[calc(50.00%_-_238px)] left-[calc(50.00%_-_720px)] bg-dark-mode700">
        {backgroundStripes.map((index) => (
          <div
            key={`stripe-${index}`}
            className="relative h-full w-10 backdrop-blur-[17.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17.5px)_brightness(100%)] bg-[linear-gradient(270deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.1)_100%)]"
          />
        ))}
      </div>

      <div className="absolute top-[calc(50.00%_-_190px)] left-[calc(50.00%_-_672px)] w-[1344px] h-[381px] flex flex-col gap-[72px] bg-dark-mode900 rounded-2xl">
        <div className="flex h-[164px] w-[1176px] self-center relative mt-14 items-start gap-[100px]">
          <div className="flex flex-col items-start gap-[18px] px-0 py-px relative flex-[0_0_auto]">
            <img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/figmaAssets/frame-2131328446.svg"
            />

            <div className="relative flex items-center justify-center w-[250px] font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p1-regular-font-size)] tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
              Leading CRO agency specializing in GCC e-commerce optimization.
              Boost your conversions without extra ad spend.
            </div>

            <img
              className="relative flex-[0_0_auto]"
              alt="Div social media"
              src="/figmaAssets/div-social-media-container.svg"
            />
          </div>

          <div className="flex flex-col w-[109px] items-start gap-6 relative">
            <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-secondary-500 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
              Quick Links
            </div>

            <div className="flex flex-col gap-2 self-stretch w-full items-start relative flex-[0_0_auto]">
              {quickLinks.map((link, index) => (
                <div
                  key={`quick-link-${index}`}
                  className={`relative flex items-center justify-center self-stretch ${index === 0 ? "mt-[-1.00px]" : ""} font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p1-regular-font-size)] tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)] cursor-pointer hover:text-secondary-500 transition-colors`}
                >
                  {link}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 items-start relative flex-[0_0_auto]">
            <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-secondary-500 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
              Services
            </div>

            <div className="flex flex-col items-start gap-2 relative flex-[0_0_auto]">
              {services.map((service, index) => (
                <div
                  key={`service-${index}`}
                  className={`${index === 0 ? "flex items-center justify-center w-fit mt-[-1.00px] text-shadeswhite text-[length:var(--paragraph-p1-regular-font-size)] leading-[var(--paragraph-p1-regular-line-height)] whitespace-nowrap relative font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] tracking-[var(--paragraph-p1-regular-letter-spacing)] [font-style:var(--paragraph-p1-regular-font-style)]" : "relative flex items-center justify-center self-stretch font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p1-regular-font-size)] tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]"} cursor-pointer hover:text-secondary-500 transition-colors`}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 items-start relative flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-secondary-500 text-[length:var(--paragraph-p2-semi-bold-font-size)] leading-[var(--paragraph-p2-semi-bold-line-height)] relative flex items-center justify-center font-paragraph-p2-semi-bold tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
              Contact Us
            </div>

            <div className="flex flex-col w-[303px] items-start gap-2 relative flex-[0_0_auto]">
              {contactInfo.map((contact, index) => (
                <div
                  key={`contact-${index}`}
                  className={`${index < 2 ? "flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]" : "flex items-start gap-2 relative flex-[0_0_auto]"}`}
                >
                  <img
                    className="relative w-6 h-6"
                    alt={index < 2 ? "Communication" : "Communication call"}
                    src={contact.icon}
                  />

                  <div
                    className={`relative flex items-center justify-center ${index < 2 ? "self-stretch" : "self-stretch"} ${contact.width} mt-[-1.00px] font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p1-regular-font-size)] tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]`}
                  >
                    {contact.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex ml-[84px] w-[1176px] h-[41px] relative flex-col items-start gap-6">
          <Separator className="mt-[-1.00px] self-stretch w-full h-px bg-[url('/figmaAssets/line-266.svg')] bg-cover" />

          <div className="relative flex items-center justify-center self-stretch font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-[#6a6d6a] text-[length:var(--paragraph-p1-regular-font-size)] tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
            © 2025 Optimizers. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
