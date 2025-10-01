import React from "react";
import { Separator } from "@/components/ui/separator";

export const FooterSection = (): JSX.Element => {
  const backgroundStripes = Array.from({ length: 36 }, (_, index) => index);

  const quickLinks = [
    { label: "About", sectionId: "section-learn-cro" },
    { label: "Services", sectionId: "section-services" },
    { label: "ROI Calculator", sectionId: "roi-calculator-section" },
    { label: "Contact", sectionId: "section-contact" },
  ];

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
    <footer className="relative w-full min-h-[477px] bg-dark-mode300">
      <div className="hidden md:flex h-[477px] items-center absolute top-[calc(50.00%_-_238px)] left-[calc(50.00%_-_720px)] bg-dark-mode700">
        {backgroundStripes.map((index) => (
          <div
            key={`stripe-${index}`}
            className="relative h-full w-10 backdrop-blur-[17.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17.5px)_brightness(100%)] bg-[linear-gradient(270deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.1)_100%)]"
          />
        ))}
      </div>

      <div className="relative md:absolute md:top-[calc(50.00%_-_190px)] md:left-[calc(50.00%_-_672px)] w-full max-w-[1344px] mx-auto min-h-[381px] flex flex-col gap-[40px] md:gap-[72px] bg-dark-mode900 rounded-2xl px-4 md:px-[84px] py-8 md:py-0">
        <div className="flex flex-col md:flex-row md:h-[164px] w-full relative mt-0 md:mt-14 items-start gap-8 md:gap-[100px]">
          <div className="flex flex-col items-start gap-[18px] px-0 py-px relative flex-[0_0_auto]">
            <img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/figmaAssets/frame-2131328446.svg"
            />

            <div className="relative text-left w-[250px] text-shadeswhite text-[14px] font-normal tracking-[0px] leading-[1.5]">
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
            <div className="relative text-left self-stretch mt-[-1.00px] text-secondary-500 text-[16px] font-semibold tracking-[0px] leading-[1.5]">
              Quick Links
            </div>

            <div className="flex flex-col gap-2 self-stretch w-full items-start relative flex-[0_0_auto]">
              {quickLinks.map((link, index) => (
                <div
                  key={`quick-link-${index}`}
                  className={`relative text-left self-stretch ${index === 0 ? "mt-[-1.00px]" : ""} text-shadeswhite text-[14px] font-normal tracking-[0px] leading-[1.5] cursor-pointer hover:text-secondary-500 transition-colors`}
                  onClick={() => {
                    document.getElementById(link.sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  {link.label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 items-start relative flex-[0_0_auto]">
            <div className="relative text-left self-stretch mt-[-1.00px] text-secondary-500 text-[16px] font-semibold tracking-[0px] leading-[1.5]">
              Services
            </div>

            <div className="flex flex-col items-start gap-2 relative flex-[0_0_auto]">
              {services.map((service, index) => (
                <div
                  key={`service-${index}`}
                  className={`${index === 0 ? "text-left w-fit mt-[-1.00px] text-shadeswhite text-[14px] font-normal tracking-[0px] leading-[1.5] whitespace-nowrap relative" : "relative text-left self-stretch text-shadeswhite text-[14px] font-normal tracking-[0px] leading-[1.5]"} cursor-pointer hover:text-secondary-500 transition-colors`}
                  onClick={() => {
                    document.getElementById('section-services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 items-start relative flex-[0_0_auto]">
            <div className="self-stretch mt-[-1.00px] text-secondary-500 text-[16px] font-semibold leading-[1.5] relative text-left tracking-[0px]">
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
                    className={`relative text-left ${index < 2 ? "self-stretch" : "self-stretch"} ${contact.width} mt-[-1.00px] text-shadeswhite text-[14px] font-normal tracking-[0px] leading-[1.5]`}
                  >
                    {contact.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full min-h-[41px] relative flex-col items-start gap-4 md:gap-6">
          <Separator className="mt-[-1.00px] self-stretch w-full h-px bg-[url('/figmaAssets/line-266.svg')] bg-cover" />

          <div className="relative text-left self-stretch text-[#6a6d6a] text-[14px] font-normal tracking-[0px] leading-[1.5]">
            © 2025 Optimizers. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
