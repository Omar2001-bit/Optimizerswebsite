import { memo } from "react";
import { motion, useTransform } from "motion/react";
import svgPaths from "@/imports/svg-sec5";
import imgIPhone17 from "../assets/9f8f278f482336f0475810eb8d279e3e1acb7ca6.webp";
import imgProfilePhoto5 from "../assets/28ae360f5ef1294530a445760980d0b0cc4fce99.webp";

const Section5 = memo(({ isActive, renderMode = 'full', counterY, mouseX, mouseY, parallaxGain }: {
    isActive: boolean;
    renderMode?: 'bg' | 'content' | 'full';
    counterY?: any;
    mouseX?: any;
    mouseY?: any;
    parallaxGain?: any;
}) => {
    const showBg = renderMode === 'bg' || renderMode === 'full';
    const showContent = renderMode === 'content' || renderMode === 'full';

    // ── Parallax Transforms (Strictly for mockup image, gated by parallaxGain) ──
    const rawX = useTransform(mouseX || 0, [-0.5, 0.5], [-60, 60]);
    const rawY = useTransform(mouseY || 0, [-0.5, 0.5], [-60, 60]);

    const mockupX = useTransform([rawX, parallaxGain || 1], ([x, gain]) => `${(x as number) * (gain as number)}px`);
    const mockupY = useTransform([rawY, parallaxGain || 1], ([y, gain]) => `${(y as number) * (gain as number)}px`);

    return (
        <div className={`${renderMode === 'content' ? 'bg-transparent' : 'bg-[#020601]'} relative w-full h-full overflow-hidden`} style={{ willChange: 'opacity' }}>
            {/* Background SVG — Static div */}
            {showBg && <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                data-name="bg_5"
                style={{ willChange: 'opacity' }}
            >
                <div className="absolute inset-[-28.23%_-11.01%_-20.96%_-9.99%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2425.07 1598.54">
                        <g id="bg_5" opacity="0.7">
                            <g id="light_5">
                                <g filter="url(#filter0_iif_sec5)" id="Vector10_5">
                                    <path d={svgPaths.p30326f80} stroke="url(#paint0_linear_sec5)" strokeWidth="137.142" />
                                </g>
                            </g>
                            <g filter="url(#filter1_f_sec5)" id="light2_5">
                                <path d={svgPaths.p1c0fb80} fill="#1D1F23" />
                            </g>
                        </g>
                        <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1247.83" id="filter0_iif_sec5" width="2419.08" x="0" y="316.1">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect3_foregroundBlur_sec5" stdDeviation="40" />
                            </filter>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1598.54" id="filter1_f_sec5" width="1582.37" x="842.698" y="0">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_sec5" stdDeviation="40" />
                            </filter>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_sec5" x1="1829.54" x2="586.351" y1="477.125" y2="1492.92">
                                <stop stopColor="#04060A" />
                                <stop offset="0.403657" stopColor="#A0ABBB" />
                                <stop offset="0.615" stopColor="#1E2228" />
                                <stop offset="1" stopColor="#04060A" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>}

            {/* Content */}
            {showContent && <div className="absolute inset-0 pointer-events-none z-10" style={{ willChange: 'opacity' }}>

                {/* iPhone Mockup — Outer container is static */}
                <div className="absolute left-[15vw] top-[15vh] w-[70vw] h-[80vh] z-0 pointer-events-none overflow-hidden">
                    <motion.div
                        style={{
                            ...(counterY ? { y: counterY } : {}),
                            willChange: 'transform'
                        }}
                        className="w-full h-full"
                    >
                        <motion.img
                            alt=""
                            style={{ x: mockupX, y: mockupY, willChange: 'transform' }}
                            className="absolute inset-0 max-w-none object-contain pointer-events-none size-full drop-shadow-[0px_40px_80px_rgba(0,0,0,0.6)]"
                            src={imgIPhone17}
                            decoding="async"
                        />
                    </motion.div>
                </div>

                {/* Left side content — Static relative to mouse */}
                <div className="absolute left-[5.5vw] top-[30vh] flex flex-col gap-[6vh] w-[25vw] min-w-[300px] z-10" style={{ pointerEvents: "auto" }}>

                    {/* Client Info */}
                    <div className="overflow-hidden w-full">
                        <motion.div
                            style={{
                                ...(counterY ? { y: counterY } : {}),
                                willChange: 'transform'
                            }}
                        >
                            <div className="content-stretch flex flex-col gap-[3vh] items-start relative shrink-0 w-full">
                                <div className="content-stretch flex gap-[1.5vh] h-auto items-center relative shrink-0 w-full">
                                    <div className="relative shrink-0 size-[7.3vh] min-w-[50px] min-h-[50px]">
                                        <img alt="" className="block max-w-none size-full" src={imgProfilePhoto5} decoding="async" />
                                    </div>
                                    <div className="content-stretch flex flex-col gap-[1vh] items-start justify-center relative shrink-0">
                                        <div className="flex flex-col font-['Sora',sans-serif] font-semibold h-auto justify-center leading-[1.2] relative shrink-0 text-[32px] text-white tracking-[-0.02em] w-full">
                                            <p>Dubai Phone</p>
                                        </div>
                                        <div className="bg-[rgba(160,171,187,0.2)] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[100px] shrink-0">
                                            <p className="font-['Sora',sans-serif] font-normal leading-normal relative shrink-0 text-[#d0d5dd] text-[14px]">Electronics</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                                    <p className="font-['Sora',sans-serif] font-normal leading-relaxed relative shrink-0 text-[18px] text-white w-full">Leading mobile phone retailer providing the latest smartphones, accessories, and digital solutions.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Goals & Improvements */}
                    <div className="overflow-hidden w-[20vw] min-w-[250px]">
                        <motion.div
                            style={{
                                ...(counterY ? { y: counterY } : {}),
                                willChange: 'transform'
                            }}
                        >
                            <div className="content-stretch flex flex-col gap-[2.4vh] items-start relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col gap-[0.8vh] items-start relative shrink-0 w-full">
                                    <p className="font-['Sora',sans-serif] font-semibold leading-normal min-w-full relative shrink-0 text-[#d0d5dd] text-[18px]">Our Goal:</p>
                                    <p className="font-['Sora',sans-serif] font-normal leading-normal relative shrink-0 text-[14px] text-white">Improve mobile checkout experience.</p>
                                </div>
                                <div className="content-stretch flex flex-col gap-[0.8vh] items-start relative shrink-0 w-full">
                                    <p className="font-['Sora',sans-serif] font-semibold leading-normal min-w-full relative shrink-0 text-[#d0d5dd] text-[18px]">Areas of Improvement:</p>
                                    <p className="font-['Sora',sans-serif] font-normal leading-normal relative shrink-0 text-[14px] text-white">Mobile optimization, payment flow.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* Metrics */}
                <div className="absolute right-[5.5vw] top-[40vh] w-[18vw] min-w-[220px] z-10 overflow-hidden" style={{ pointerEvents: "auto" }}>
                    <motion.div
                        style={{
                            ...(counterY ? { y: counterY } : {}),
                            willChange: 'transform'
                        }}
                    >
                        <div className="content-stretch flex flex-col gap-[4.8vh] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col gap-[0.8vh] items-start justify-center relative shrink-0 w-full">
                                <p className="font-['Sora',sans-serif] font-semibold leading-tight relative shrink-0 text-[#a0abbb] text-[48px] tracking-[-0.04em]">+65%</p>
                                <p className="font-['Sora',sans-serif] font-normal leading-normal relative shrink-0 text-[18px] text-white">Mobile conversion rate</p>
                            </div>
                            <div className="content-stretch flex flex-col gap-[0.8vh] items-start justify-center relative shrink-0 w-full">
                                <p className="font-['Sora',sans-serif] font-semibold leading-tight relative shrink-0 text-[#a0abbb] text-[48px] tracking-[-0.04em]">+28%</p>
                                <p className="font-['Sora',sans-serif] font-normal leading-normal relative shrink-0 text-[18px] text-white">Customer retention</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>}
        </div>
    );
});

export default Section5;
