import React from "react";

const partners = [
  {
    id: 1,
    logo: "/figmaAssets/358-3589718-shopify-logo-white-transparent-1.png",
    name: "Shopify",
    position: "top-[264px] left-[719px]" // Calculated from SVG positions
  },
  {
    id: 2,
    logo: "/figmaAssets/b9b3c47f-590c-9afc-97bc-b866bad86a72.png",
    name: "WooCommerce",
    position: "top-[202px] left-[978px]"
  },
  {
    id: 3,
    logo: "/figmaAssets/6687d1be6301f78fecf93bc7-63bd507de1ccf48089402fa4-uoyhhm4z-weg3a.png",
    name: "Partner 3",
    position: "top-[356px] left-[413px]"
  },
  {
    id: 4,
    logo: "/figmaAssets/2fe3278a-ce58-4000-b160-a7415574aac1.png",
    name: "Partner 4",
    position: "top-[711px] left-[572px]"
  },
  {
    id: 5,
    logo: "/figmaAssets/frame-37613.png",
    name: "Partner 5",
    position: "top-[721px] left-[160px]"
  },
  {
    id: 6,
    logo: "/figmaAssets/frame-37614.png",
    name: "Partner 6",
    position: "top-[446px] left-[0px]"
  },
  {
    id: 7,
    logo: "/figmaAssets/el-kalb-el-4a2y---white-and-no-background.png",
    name: "Partner 7",
    position: "top-[282px] left-[178px]"
  },
  {
    id: 8,
    logo: "/figmaAssets/add-image-2.png",
    name: "Partner 8",
    position: "top-[497px] left-[1075px]"
  }
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[800px] md:h-[1200px] bg-dark-mode900 py-[100px]">
      <style>{`
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(106, 228, 153, 0.3),
              0 0 40px rgba(106, 228, 153, 0.2),
              0 0 60px rgba(106, 228, 153, 0.1),
              inset 0 0 20px rgba(255, 255, 255, 0.05);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(106, 228, 153, 0.5),
              0 0 60px rgba(106, 228, 153, 0.3),
              0 0 90px rgba(106, 228, 153, 0.2),
              inset 0 0 30px rgba(255, 255, 255, 0.1);
          }
        }
        
        .partner-circle {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .partner-circle:nth-child(1) {
          animation-delay: 0s;
        }
        .partner-circle:nth-child(2) {
          animation-delay: 0.2s;
        }
        .partner-circle:nth-child(3) {
          animation-delay: 0.4s;
        }
        .partner-circle:nth-child(4) {
          animation-delay: 0.6s;
        }
        .partner-circle:nth-child(5) {
          animation-delay: 0.8s;
        }
        .partner-circle:nth-child(6) {
          animation-delay: 1s;
        }
        .partner-circle:nth-child(7) {
          animation-delay: 1.2s;
        }
        .partner-circle:nth-child(8) {
          animation-delay: 1.4s;
        }
      `}</style>

      {/* Concentric circles background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-[597px] h-[597px] rounded-full border border-[#0A391C]" 
             style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div className="absolute w-[848px] h-[848px] rounded-full border border-[#0A391C]" 
             style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div className="absolute w-[1083px] h-[1083px] rounded-full border border-[#0A391C]" 
             style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div className="absolute w-[404px] h-[404px] rounded-full border border-[#0A391C]" 
             style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      </div>

      {/* Partner logos in circular containers */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[900px]">
        {partners.map((partner, index) => (
          <div
            key={partner.id}
            data-testid={`partner-logo-${partner.id}`}
            className={`partner-circle absolute ${partner.position} w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/10 border border-white/20`}
            style={{
              background: 'radial-gradient(50% 50% at 50% 0%, rgba(31, 170, 84, 0.04) 0%, rgba(31, 170, 84, 0) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
            }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-10 h-10 object-contain mix-blend-plus-lighter"
            />
          </div>
        ))}
      </div>

      {/* Content */}
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
    </section>
  );
};
