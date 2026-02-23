import { useState, useEffect, useCallback, useRef } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import svgPaths from "./svg-26ylxxv0ig";

const sections = [Section1, Section2, Section3, Section4, Section5];
const AUTO_SCROLL_INTERVAL = 6000;
const PAUSE_AFTER_CLICK = 15000;
const TRANSITION_MS = 800;

export default function AnimatedHeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    // Track which sections should be visible (for CSS transition purposes)
    const [visibleSet, setVisibleSet] = useState<Set<number>>(new Set([0]));
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const goTo = useCallback((getNext: (prev: number) => number) => {
        setActiveIndex((prev) => {
            const next = getNext(prev);
            // Make both sections visible during transition
            setVisibleSet(new Set([prev, next]));

            // After transition, hide the old section
            if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
            transitionTimerRef.current = setTimeout(() => {
                setVisibleSet(new Set([next]));
            }, TRANSITION_MS + 50);

            return next;
        });
    }, []);

    const nextSection = useCallback(() => {
        goTo((prev) => (prev + 1) % sections.length);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => startAutoScroll(), PAUSE_AFTER_CLICK);
    }, [goTo]);

    const prevSection = useCallback(() => {
        goTo((prev) => (prev - 1 + sections.length) % sections.length);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => startAutoScroll(), PAUSE_AFTER_CLICK);
    }, [goTo]);

    const startAutoScroll = useCallback(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        const tick = () => {
            goTo((prev) => (prev + 1) % sections.length);
            timerRef.current = setTimeout(tick, AUTO_SCROLL_INTERVAL);
        };
        timerRef.current = setTimeout(tick, AUTO_SCROLL_INTERVAL);
    }, [goTo]);

    useEffect(() => {
        startAutoScroll();
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
        };
    }, [startAutoScroll]);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#020601]">
            {/* All sections pre-mounted, inactive ones hidden via visibility */}
            {sections.map((Section, i) => {
                const isActive = i === activeIndex;
                const isVisible = visibleSet.has(i);
                return (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            opacity: isActive ? 1 : 0,
                            visibility: isVisible ? 'visible' : 'hidden',
                            zIndex: isActive ? 1 : 0,
                            transition: `opacity ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                            willChange: isVisible ? 'opacity' : 'auto',
                            transform: 'translate3d(0,0,0)',
                            pointerEvents: isActive ? 'auto' : 'none',
                        }}
                    >
                        <Section isActive={isActive} />
                    </div>
                );
            })}

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
                        className={`w-[4px] transition-all duration-500 rounded-full ${i === activeIndex ? 'h-[24px] bg-[#6ae499]' : 'h-[8px] bg-white/20'}`}
                    />
                ))}
            </div>
        </div>
    );
}
