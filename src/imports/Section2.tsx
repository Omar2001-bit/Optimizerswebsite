import { motion } from "motion/react";
import svgPaths from "@/imports/svg-sec2";
import imgIPhone17 from "../assets/d2910da25aaf2e477099caca0265707a5d96d1ef.png";
import imgProfilePhoto3 from "../assets/bde38689905fa705ea1cd171fd5425c46f8945de.png";
import imgTopclientsResults4 from "../assets/f6cb95ddf6fbcaa6d79196a0ac804e1747a8b1c4.png";

// Animation variants for content elements
const contentVariants = {
    initial: { opacity: 0 },
    animate: (delay: number) => ({
        opacity: 1,
        transition: {
            duration: 0.8,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94] as const
        }
    }),
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: [0.42, 0, 1, 1] as const
        }
    }
};

export default function Section2({ isActive }: { isActive: boolean }) {
    return (
        <div className="bg-[#020601] relative w-full h-full overflow-hidden">
            {/* Background */}
            <motion.div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                data-name="bg_2"
                initial={{ scale: 1.1 }}
                animate={isActive ? { scale: 1 } : { scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div className="absolute inset-[-28.23%_-11.01%_-20.96%_-9.99%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2425.07 1598.54">
                        <g id="bg_2" opacity="0.7">
                            <g id="light_2">
                                <g filter="url(#filter0_iif_sec2)" id="Vector10_2">
                                    <path d={svgPaths.p30326f80} stroke="url(#paint0_linear_sec2)" strokeWidth="137.142" />
                                </g>
                            </g>
                            <g filter="url(#filter1_f_sec2)" id="light2_2">
                                <path d={svgPaths.p1c0fb80} fill="#1A3A27" />
                            </g>
                        </g>
                        <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1247.83" id="filter0_iif_sec2" width="2419.08" x="0" y="316.1">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect3_foregroundBlur_sec2" stdDeviation="80.405" />
                            </filter>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1598.54" id="filter1_f_sec2" width="1582.37" x="842.698" y="0">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_sec2" stdDeviation="171.427" />
                            </filter>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_sec2" x1="1829.54" x2="586.351" y1="477.125" y2="1492.92">
                                <stop stopColor="#04060A" />
                                <stop offset="0.403657" stopColor="#5CC685" />
                                <stop offset="0.615" stopColor="#162237" />
                                <stop offset="1" stopColor="#04060A" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </motion.div>

            {/* Animated Content Elements */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {/* Main Title */}
                <motion.p
                    variants={contentVariants}
                    custom={0.5}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute bg-center bg-clip-text bg-cover bg-no-repeat font-['Sora',sans-serif] font-semibold leading-[0] left-[5vw] lowercase text-[5vw] top-[10vh] tracking-[-3.0571px] z-10"
                    style={{
                        WebkitTextFillColor: "transparent",
                        backgroundImage: `url('${imgTopclientsResults4}')`,
                        pointerEvents: "auto"
                    }}
                >
                    <span className="leading-[1.17] uppercase">T</span>
                    <span className="leading-[1.17]">OP </span>
                    <span className="leading-[1.17] uppercase">C</span>
                    <span className="leading-[1.17]">LIENTS & </span>
                    <span className="leading-[1.17] uppercase">R</span>
                    <span className="leading-[1.17]">ESULTS</span>
                </motion.p>

                {/* iPhone Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 0.8, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute left-[15vw] top-[15vh] w-[70vw] h-[80vh] z-0 pointer-events-none"
                >
                    <div className="relative w-full h-full">
                        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIPhone17} />
                    </div>
                </motion.div>

                {/* Left Column - Client Info */}
                <motion.div
                    variants={contentVariants}
                    custom={0.65}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute content-stretch flex flex-col gap-[4vh] h-auto items-start left-[5vw] top-[30vh] w-[25vw] min-w-[300px] z-10"
                    style={{ pointerEvents: "auto" }}
                >
                    <div className="content-stretch flex flex-col gap-[2.4vh] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[1.2vh] h-auto items-center relative shrink-0 w-full">
                            <div className="relative shrink-0 size-[7.3vh] min-w-[50px] min-h-[50px]">
                                <img alt="" className="block max-w-none size-full" src={imgProfilePhoto3} />
                            </div>
                            <div className="content-stretch flex flex-col gap-[1vh] items-start justify-center relative shrink-0">
                                <div className="flex flex-col font-['Sora',sans-serif] font-semibold h-auto justify-center leading-[1.2] relative shrink-0 text-[2.2vw] min-text-[24px] text-white tracking-[-0.02em] w-full">
                                    <p>Ribal Magic</p>
                                </div>
                                <div className="bg-[rgba(106,228,153,0.15)] content-stretch flex items-center justify-center px-[1.2vh] py-[0.6vh] relative rounded-[100px] shrink-0">
                                    <p className="font-['Sora',sans-serif] font-normal leading-normal relative shrink-0 text-[#92ebb4] text-[0.9vw] min-text-[12px]">Entertainment</p>
                                </div>
                            </div>
                        </div>
                        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                            <p className="font-['Sora',sans-serif] font-normal leading-relaxed relative shrink-0 text-[1.25vw] min-text-[16px] text-white w-full">Entertainment and events company in Saudi Arabia specializing in magical performances.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Left Column - Goals & Improvements */}
                <motion.div
                    variants={contentVariants}
                    custom={0.8}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute content-stretch flex flex-col gap-[4vh] h-auto items-start left-[5vw] top-[55vh] w-[20vw] min-w-[250px] z-10"
                    style={{ pointerEvents: "auto" }}
                >
                    <div className="content-stretch flex flex-col gap-[2.4vh] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col gap-[0.8vh] items-start relative shrink-0 w-full">
                            <p className="font-['Sora',sans-serif] font-semibold leading-normal min-w-full relative shrink-0 text-[#92ebb4] text-[1.25vw] min-text-[16px]">Our Goal:</p>
                            <p className="font-['Sora',sans-serif] font-normal leading-normal relative shrink-0 text-[1vw] min-text-[14px] text-white">Reduce cart abandonment & increase AOV.</p>
                        </div>
                        <div className="content-stretch flex flex-col gap-[0.8vh] items-start relative shrink-0 w-full">
                            <p className="font-['Sora',sans-serif] font-semibold leading-normal min-w-full relative shrink-0 text-[#92ebb4] text-[1.25vw] min-text-[16px]">Areas of Improvement:</p>
                            <p className="font-['Sora',sans-serif] font-normal leading-normal relative shrink-0 text-[1vw] min-text-[14px] text-white">Checkout flow, product pages.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Metrics Section */}
                <motion.div
                    variants={contentVariants}
                    custom={0.95}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute content-stretch flex flex-col gap-[4vh] h-auto items-start right-[5vw] top-[40vh] w-[18vw] min-w-[220px] z-10"
                    style={{ pointerEvents: "auto" }}
                >
                    <div className="content-stretch flex flex-col gap-[4.8vh] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col gap-[0.8vh] items-start justify-center relative shrink-0 w-full">
                            <p className="font-['Sora',sans-serif] font-semibold leading-tight relative shrink-0 text-[#6ae499] text-[3.3vw] min-text-[32px] tracking-[-0.04em]">+11.9%</p>
                            <p className="font-['Sora',sans-serif] font-normal leading-normal relative shrink-0 text-[1.25vw] min-text-[16px] text-white">E-commerce conversion rate</p>
                        </div>
                        <div className="content-stretch flex flex-col gap-[0.8vh] items-start justify-center relative shrink-0 w-full">
                            <p className="font-['Sora',sans-serif] font-semibold leading-tight relative shrink-0 text-[#6ae499] text-[3.3vw] min-text-[32px] tracking-[-0.04em]">+5.99%</p>
                            <p className="font-['Sora',sans-serif] font-normal leading-normal relative shrink-0 text-[1.25vw] min-text-[16px] text-white">Average order value</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
