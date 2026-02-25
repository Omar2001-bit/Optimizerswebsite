import { memo } from "react";
import { motion, useTransform } from "motion/react";
import svgPaths from "@/imports/svg-26ylxxv0ig";
import imgIPhone17 from "../assets/dc7b94025c6990629360e685e3f89e4c1a875b87.webp";
import imgProfilePhoto4 from "../assets/b05b5665ef7392ecc34632f1fe3e5a3f0f5ca9ea.webp";

const Section1 = memo(({ isActive, bgOpacity, contentOpacity, counterY, mockupX, mockupY }: {
    isActive: boolean;
    bgOpacity: any;
    contentOpacity: any;
    counterY?: any;
    mockupX?: any;
    mockupY?: any;
}) => {
    return (
        <div className="relative w-full h-full overflow-hidden mx-auto" style={{ willChange: 'opacity' }}>
            {/* Background SVG */}
            <motion.div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                data-name="bg_4"
                style={{ opacity: bgOpacity, willChange: 'opacity' }}
            >
                <div className="absolute inset-[-28.23%_-11.01%_-20.96%_-9.99%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2425.07 1598.54">
                        <g id="bg_4" opacity="0.7">
                            <g id="light_4">
                                <path d={svgPaths.p30326f80} stroke="url(#paint0_linear_1_1802)" strokeWidth="137.142" filter="url(#filter0_iif_1_1802)" />
                            </g>
                            <g id="light2_4">
                                <path d={svgPaths.p1c0fb80} fill="var(--fill-0, #1A3A27)" filter="url(#filter1_f_1_1802)" />
                            </g>
                        </g>
                        <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" id="filter0_iif_1_1802">
                                <feGaussianBlur stdDeviation="20" />
                            </filter>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" id="filter1_f_1_1802">
                                <feGaussianBlur stdDeviation="20" />
                            </filter>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1802" x1="1829.54" x2="586.351" y1="477.125" y2="1492.92">
                                <stop stopColor="#04060A" />
                                <stop offset="0.403657" stopColor="#5CC685" />
                                <stop offset="0.615" stopColor="#162237" />
                                <stop offset="1" stopColor="#04060A" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </motion.div>

            {/* Content Container */}
            <motion.div className="absolute inset-0 pointer-events-none z-10" style={{ opacity: contentOpacity, willChange: 'opacity' }}>

                {/* iPhone Mockup */}
                <div className="absolute left-[15vw] top-[15vh] w-[70vw] h-[80vh] z-0 pointer-events-none overflow-hidden">
                    <motion.div
                        style={{
                            y: counterY || 0,
                            willChange: 'transform'
                        }}
                        className="w-full h-full"
                    >
                        <motion.img
                            alt=""
                            style={{ x: mockupX || 0, y: mockupY || 0, willChange: 'transform' }}
                            className="absolute inset-0 max-w-none object-contain pointer-events-none size-full drop-shadow-[0px_40px_80px_rgba(0,0,0,0.6)]"
                            src={imgIPhone17}
                            decoding="async"
                            loading="eager"
                        />
                    </motion.div>
                </div>

                {/* Left side content */}
                <div className="absolute left-[5.5vw] top-[30vh] flex flex-col gap-[6vh] w-[25vw] min-w-[300px] z-10" style={{ pointerEvents: "auto" }}>
                    <div className="overflow-hidden w-full">
                        <motion.div style={{ y: counterY || 0, willChange: 'transform' }}>
                            <div className="content-stretch flex flex-col gap-[3vh] items-start relative shrink-0 w-full">
                                <div className="content-stretch flex gap-[1.5vh] h-auto items-center relative shrink-0 w-full">
                                    <div className="relative shrink-0 size-[7.3vh] min-w-[50px] min-h-[50px]">
                                        <img alt="" className="block max-w-none size-full" height="73" src={imgProfilePhoto4} width="73" decoding="async" />
                                    </div>
                                    <div className="content-stretch flex flex-col gap-[1vh] items-start justify-center relative shrink-0">
                                        <div className="flex flex-col font-['Sora',sans-serif] font-semibold h-auto justify-center leading-[1.2] relative shrink-0 text-[32px] text-white tracking-[-0.02em] w-full">
                                            <p>Vitrine Furniture</p>
                                        </div>
                                        <div className="bg-[rgba(135,162,207,0.2)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[100px] shrink-0">
                                            <p className="font-['Sora',sans-serif] font-normal leading-normal relative shrink-0 text-[#afc1df] text-[14px]">Furniture</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                                    <p className="font-['Sora',sans-serif] font-normal leading-relaxed relative shrink-0 text-[18px] text-white w-full">Leading furniture retailer in Egypt providing modern and contemporary furniture solutions.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="overflow-hidden w-[20vw] min-w-[250px]">
                        <motion.div style={{ y: counterY || 0, willChange: 'transform' }}>
                            <div className="content-stretch flex flex-col gap-[2.4vh] items-start relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col gap-[0.8vh] items-start relative shrink-0 w-full">
                                    <p className="font-['Sora',sans-serif] font-semibold leading-normal min-w-full relative shrink-0 text-[#afc1df] text-[18px]">Our Goal:</p>
                                    <p className="font-['Sora',sans-serif] font-normal leading-normal relative shrink-0 text-[14px] text-white">Increase conversion to partner products.</p>
                                </div>
                                <div className="content-stretch flex flex-col gap-[0.8vh] items-start relative shrink-0 w-full">
                                    <p className="font-['Sora',sans-serif] font-semibold leading-normal min-w-full relative shrink-0 text-[#afc1df] text-[18px]">Areas of Improvement:</p>
                                    <p className="font-['Sora',sans-serif] font-normal leading-normal relative shrink-0 text-[14px] text-white">Product comparison pages.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Metrics */}
                <div className="absolute right-[5.5vw] top-[40vh] w-[18vw] min-w-[220px] z-10 overflow-hidden" style={{ pointerEvents: "auto" }}>
                    <motion.div style={{ y: counterY || 0, willChange: 'transform' }}>
                        <div className="content-stretch flex flex-col gap-[4.8vh] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col gap-[0.8vh] items-start justify-center relative shrink-0 w-full">
                                <p className="font-['Sora',sans-serif] font-semibold leading-tight relative shrink-0 text-[#87a2cf] text-[48px] tracking-[-0.04em]">+64.5%</p>
                                <p className="font-['Sora',sans-serif] font-normal leading-normal relative shrink-0 text-[18px] text-white">E-commerce conversion rate</p>
                            </div>
                            <div className="content-stretch flex flex-col gap-[0.8vh] items-start justify-center relative shrink-0 w-full">
                                <p className="font-['Sora',sans-serif] font-semibold leading-tight relative shrink-0 text-[#87a2cf] text-[48px] tracking-[-0.04em]">+19.48%</p>
                                <p className="font-['Sora',sans-serif] font-normal leading-normal relative shrink-0 text-[18px] text-white">Average order value</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </motion.div>
        </div >
    );
});

export default Section1;
