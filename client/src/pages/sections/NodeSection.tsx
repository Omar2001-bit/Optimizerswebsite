import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Mohamed Neamatalla",
    role: "Founder & CEO",
    image: "..//figmaAssets/frame-37644.png",
  },
  {
    name: "Alia Mahran",
    role: "Operation Manager",
    image: "..//figmaAssets/frame-37641.png",
  },
  {
    name: "Omar Maged",
    role: "Tech Manager",
    image: "..//figmaAssets/frame-37645.png",
  },
  {
    name: "Alaa Abdullah",
    role: "Quality Assurance",
    image: "..//figmaAssets/frame-37646.png",
  },
];

export const NodeSection = (): JSX.Element => {
  return (
    <section id="section-team" className="w-full bg-dark-mode900 py-[100px] md:py-[200px] px-4 md:px-8">
      <div className="flex flex-col max-w-[1376px] mx-auto items-center gap-[40px] md:gap-[60px]">
        <header className="flex flex-col items-center gap-6">
          <h1 className="text-shadeswhite text-[32px] md:text-[48px] font-semibold text-center tracking-[-1.92px] leading-[40px] md:leading-[56px]">
            Meet The Team
          </h1>

          <p className="max-w-[986px] text-shadeswhite text-[20px] font-normal text-center tracking-[0px] leading-6">
            We&apos;re a hands-on team of CRO specialists with deep GCC market
            knowledge and a proven track record. When you work with us, you work
            directly with the experts driving your growth.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="w-full h-[382px] rounded-xl overflow-hidden border-none bg-cover bg-center bg-no-repeat relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(180deg,rgba(176,241,201,0.3)_0%,rgba(12,68,34,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              style={{
                backgroundImage: `url(${member.image}), linear-gradient(0deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 100%)`,
              }}
            >
              <CardContent className="flex flex-col w-[308px] items-center justify-center gap-3 p-6 absolute bottom-6 left-1/2 transform -translate-x-1/2 rounded-xl border-none backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(176,241,201,0.3)_0%,rgba(6,35,17,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(59,126,85,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <h3 className="text-shadeswhite text-[23px] font-semibold text-center tracking-[-0.46px] leading-[28px]">
                  {member.name}
                </h3>

                <p className="text-shadeswhite text-[16px] font-normal text-center tracking-[0px] leading-[19px]">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
