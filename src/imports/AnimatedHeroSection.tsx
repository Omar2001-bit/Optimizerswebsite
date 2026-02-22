import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import svgPaths from "./svg-26ylxxv0ig";

const sections = [Section1, Section2, Section3, Section4, Section5];

export default function AnimatedHeroSection() {
    const [index, setIndex] = useState(0);

    const nextSection = useCallback(
        () => setIndex((prev) => (prev + 1) % sections.length),
        []
    );

    const prevSection = useCallback(
        () => setIndex((prev) => (prev - 1 + sections.length) % sections.length),
        []
    );

    useEffect(() => {
        const timer = setInterval(nextSection, 6000);
        return () => clearInterval(timer);
    }, [nextSection]);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#020601]">
            {/* Stacked Sections – crossfade via AnimatePresence */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    {(() => {
                        const Section = sections[index];
                        return <Section isActive={true} />;
                    })()}
                </motion.div>
            </AnimatePresence>

            {/* Persistent UI – always on top */}

            {/* Book Consultation CTA */}
            <div className="absolute left-[5vw] top-[80vh] flex flex-col gap-[3.2vh] items-start z-50">
                <p className="font-['Sora',sans-serif] font-normal leading-normal text-white text-[1.4vw] min-text-[18px]">
                    Ready to be our next success story?
                </p>
                <div
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[rgba(2,6,1,0.7)] backdrop-blur-md h-auto relative rounded-[100px] border border-[#6ae499]/50 px-[2.8vh] py-[1.2vh] cursor-pointer hover:scale-105 hover:bg-[rgba(106,228,153,0.1)] transition-all shadow-[0px_0px_30px_0px_rgba(106,228,153,0.3)]"
                >
                    <p className="font-['Sora',sans-serif] font-semibold text-white text-[1.25vw] min-text-[16px]">
                        Book Your Free Consultation
                    </p>
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-[5vh] right-[5vw] z-50 flex items-end gap-6">
                {/* Prev Arrow */}
                <div
                    className="flex flex-col items-center gap-2 cursor-pointer group"
                    onClick={prevSection}
                >
                    <div className="size-[40px] rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-[rgba(135,162,207,0.3)] transition-all group-hover:scale-110">
                        <svg className="size-[20px] rotate-[90deg]" fill="none" viewBox="0 0 28 28">
                            <path d={svgPaths.pb6487e0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </div>
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-['Sora'] transition-colors group-hover:text-white/80">Prev</p>
                </div>

                {/* Next Arrow */}
                <div
                    className="flex flex-col items-center gap-2 cursor-pointer group"
                    onClick={nextSection}
                >
                    <div className="size-[40px] rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-[rgba(135,162,207,0.3)] transition-all group-hover:scale-110">
                        <svg className="size-[20px] rotate-[-90deg]" fill="none" viewBox="0 0 28 28">
                            <path d={svgPaths.pb6487e0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </div>
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-['Sora'] transition-colors group-hover:text-white/80">Next</p>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute right-[2vw] top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
                {sections.map((_, i) => (
                    <div
                        key={i}
                        className={`w-[4px] transition-all duration-500 rounded-full ${i === index ? 'h-[24px] bg-[#6ae499]' : 'h-[8px] bg-white/20'}`}
                    />
                ))}
            </div>
        </div>
    );
}
