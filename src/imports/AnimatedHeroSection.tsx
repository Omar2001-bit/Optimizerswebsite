import { useRef, useEffect, useState, useMemo } from "react";
import { motion, useScroll, useSpring, useMotionValue, useMotionValueEvent, animate } from "motion/react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import imgTopclientsResults4 from "../assets/f6cb95ddf6fbcaa6d79196a0ac804e1747a8b1c4.webp";
import '../styles/top-clients-scroll.css';

const sections = [Section1, Section2, Section3, Section4, Section5];

const SectionSlide = ({ Section, bgOpacity, contentOpacity, counterY, mockupX, mockupY }: any) => {
    return (
        <motion.div
            className="tc-slide-wrapper"
            style={{
                opacity: bgOpacity,
                zIndex: 10,
                willChange: 'opacity'
            }}
        >
            <Section
                isActive={true}
                renderMode="full"
                bgOpacity={bgOpacity}
                contentOpacity={contentOpacity}
                counterY={counterY}
                mockupX={mockupX}
                mockupY={mockupY}
            />
        </motion.div>
    );
};

export default function AnimatedHeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Detect active slide based on scroll position
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.min(Math.floor(latest / 0.2), 4);
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    });

    // Motion values for each slide (5 slides)
    // We only need to animate the "current" and "previous" slides
    const bgOpacities = [
        useMotionValue(1), useMotionValue(0), useMotionValue(0), useMotionValue(0), useMotionValue(0)
    ];
    const counterYs = [
        useMotionValue('0%'), useMotionValue('100%'), useMotionValue('100%'), useMotionValue('100%'), useMotionValue('100%')
    ];

    // Trigger animations when activeIndex changes
    useEffect(() => {
        const DURATION = 1; // 1 second as requested
        const EASE = "easeInOut";

        sections.forEach((_, i) => {
            // Animate Opacity
            animate(bgOpacities[i], i === activeIndex ? 1 : 0, {
                duration: DURATION,
                ease: EASE
            });

            // Animate Y Position (Counter)
            let targetY = '0%';
            if (i < activeIndex) targetY = '-100%';
            if (i > activeIndex) targetY = '100%';

            animate(counterYs[i], targetY, {
                duration: DURATION,
                ease: EASE
            });
        });
    }, [activeIndex]);

    // ── Mouse tracking for Parallax ──
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
    const rawX = useSpring(useMemo(() => smoothMouseX, [smoothMouseX]), { stiffness: 300, damping: 30 });
    const rawY = useSpring(useMemo(() => smoothMouseY, [smoothMouseY]), { stiffness: 300, damping: 30 });

    const [isInView, setIsInView] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, { threshold: 0.05 });
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView) return;
        const handleMouseMove = (e: MouseEvent) => {
            const dx = (e.clientX / window.innerWidth) - 0.5;
            const dy = (e.clientY / window.innerHeight) - 0.55;
            mouseX.set(dx * 60);
            mouseY.set(dy * 60);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [isInView, mouseX, mouseY]);

    return (
        <div ref={containerRef} className="tc-scroll-container" style={{ minHeight: '350vh' }}>
            <div className="tc-sticky-wrapper">
                {sections.map((Section, i) => (
                    <SectionSlide
                        key={`slide-${i}`}
                        Section={Section}
                        bgOpacity={bgOpacities[i]}
                        contentOpacity={bgOpacities[i]} // Tie content to bg for simplicity in time-trigger
                        counterY={counterYs[i]}
                        mockupX={mouseX} // Simplified parallax
                        mockupY={mouseY}
                    />
                ))}

                {/* Persistent Title */}
                <div className="tc-persistent-ui" style={{ zIndex: 20 }}>
                    <p
                        className="absolute bg-center bg-clip-text bg-cover bg-no-repeat font-['Sora',sans-serif] font-semibold leading-[1.1] left-[5.5vw] lowercase tracking-[-0.04em]"
                        style={{
                            WebkitTextFillColor: "transparent",
                            backgroundImage: `url('${imgTopclientsResults4}')`,
                            textShadow: 'none',
                            fontSize: '5.58vw',
                            top: '5vw',
                        }}
                    >
                        <span className="uppercase">T</span>
                        <span>OP </span>
                        <span className="uppercase">C</span>
                        <span>LIENTS & </span>
                        <span className="uppercase">R</span>
                        <span>ESULTS</span>
                    </p>
                </div>

                {/* Persistent CTA */}
                <div className="tc-persistent-ui" style={{ zIndex: 50 }}>
                    <div className="absolute left-[5.5vw] flex flex-col items-start" style={{ bottom: '5vw', gap: '1.5vw' }}>
                        <p className="font-['Sora',sans-serif] font-normal leading-normal text-white" style={{ fontSize: '1.46vw' }}>
                            Ready to be our next success story?
                        </p>
                        <div
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-[rgba(2,6,1,0.7)] backdrop-blur-md h-auto relative rounded-[100px] border border-[#6ae499]/50 cursor-pointer hover:scale-105 hover:bg-[rgba(106,228,153,0.1)] transition-all shadow-[0px_0px_30px_0px_rgba(106,228,153,0.3)]"
                            style={{ padding: '1.17vw 2.34vw' }}
                        >
                            <p className="font-['Sora',sans-serif] font-semibold text-white" style={{ fontSize: '1.58vw' }}>
                                Book Your Free Consultation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
