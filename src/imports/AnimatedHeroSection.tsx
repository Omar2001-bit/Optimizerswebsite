import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import imgTopclientsResults4 from "../assets/f6cb95ddf6fbcaa6d79196a0ac804e1747a8b1c4.webp";
import '../styles/top-clients-scroll.css';

const SectionSlide = ({ Section, bgOpacity, contentOpacity, counterY, mockupX, mockupY }: any) => {
    // Sharp visibility gate for rendering
    const isVisible = useTransform(bgOpacity, (v) => (v as number) > 0);

    return (
        <motion.div
            className="tc-slide-wrapper"
            style={{
                display: useTransform(isVisible, (v) => v ? "block" : "none"),
                pointerEvents: useTransform(bgOpacity, (v) => (v as number) > 0.5 ? "auto" : "none"),
                zIndex: 10,
                willChange: 'opacity'
            }}
        >
            {/* Background Layer moved inside Section via renderMode */}
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

const sections = [Section1, Section2, Section3, Section4, Section5];

export default function AnimatedHeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 25,
        damping: 18,
        restDelta: 0.001,
    });

    // ── Mouse tracking for Parallax ──
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Centralize parallax transforms
    const rawX = useTransform(smoothMouseX, [-0.5, 0.5], [-60, 60]);
    const rawY = useTransform(smoothMouseY, [-0.5, 0.5], [-60, 60]);

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
            if (isSnapping.current) {
                mouseX.set(0);
                mouseY.set(0);
                return;
            }
            const mouseX_raw = e.clientX / window.innerWidth;
            const mouseY_raw = e.clientY / window.innerHeight;
            const dx = mouseX_raw - 0.5;
            const dy = mouseY_raw - 0.55;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const radius = 0.35;
            const weight = Math.max(0, 1 - (distance / radius));
            mouseX.set(-dx * weight);
            mouseY.set(-(mouseY_raw - 0.5) * weight);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [isInView, mouseX, mouseY]);

    const [mountedIndices, setMountedIndices] = useState<number[]>([0, 1]);
    const isSnapping = useRef(false);

    // ── Mount/unmount slides based on scroll progress ──
    useEffect(() => {
        const unsubscribe = smoothScroll.on("change", (latest: number) => {
            const active: number[] = [];
            if (latest <= 0.25) active.push(0);
            if (latest >= 0.11 && latest <= 0.49) active.push(1);
            if (latest >= 0.35 && latest <= 0.73) active.push(2);
            if (latest >= 0.59 && latest <= 0.97) active.push(3);
            if (latest >= 0.83) active.push(4);

            setMountedIndices((prev: number[]) => {
                if (prev.length === active.length && prev.every((v, i) => v === active[i])) return prev;
                return active;
            });
        });
        return () => unsubscribe();
    }, [smoothScroll]);

    // ── Wheel-event hijack: one tick = one slide ──
    const SNAP_TARGETS = [0.08, 0.32, 0.56, 0.80, 0.98];
    const LOCK_DURATION = 1800;

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const handleWheel = (e: WheelEvent) => {
            // Disable scroll hijack on tablet/mobile
            if (window.innerWidth < 1024) return;
            // Only hijack if the sticky wrapper is filling the viewport
            const rect = el.getBoundingClientRect();
            if (rect.top > 0 || rect.bottom < window.innerHeight) return;

            // Ignore tiny trackpad inertia/bounce events — let them pass through
            if (Math.abs(e.deltaY) < 3) return;

            // If already animating, consume the event but do nothing
            if (isSnapping.current) {
                e.preventDefault();
                return;
            }

            const progress = scrollYProgress.get();
            const direction = e.deltaY > 0 ? 1 : -1;

            // Find the current snap index (closest target at or before current progress)
            let currentIdx = 0;
            for (let i = SNAP_TARGETS.length - 1; i >= 0; i--) {
                if (progress >= SNAP_TARGETS[i] - 0.02) {
                    currentIdx = i;
                    break;
                }
            }

            const nextIdx = currentIdx + direction;

            // If scrolling beyond the section bounds, let the page scroll naturally
            if (nextIdx < 0 || nextIdx >= SNAP_TARGETS.length) return;

            e.preventDefault();
            isSnapping.current = true;

            const target = SNAP_TARGETS[nextIdx];
            const containerHeight = el.scrollHeight;
            const viewportHeight = window.innerHeight;
            const containerTop = rect.top + window.scrollY;
            const targetY = containerTop + (target * (containerHeight - viewportHeight));

            window.scrollTo({ top: targetY, behavior: 'instant' });
            setTimeout(() => { isSnapping.current = false; }, LOCK_DURATION);
        };

        el.addEventListener('wheel', handleWheel, { passive: false });
        return () => el.removeEventListener('wheel', handleWheel);
    }, [scrollYProgress]);

    // ── STABLE TRANSFORM ARRAYS (Prevents re-creation on re-render) ──
    const bgOpacityRefs = useRef([
        [0.00, 0.16, 0.20],
        [0.16, 0.20, 0.24, 0.40, 0.44],
        [0.40, 0.44, 0.48, 0.64, 0.68],
        [0.64, 0.68, 0.72, 0.88, 0.92],
        [0.88, 0.92, 0.96, 1.0],
    ]);

    const counterYRefs = useRef([
        ['0%', '0%', '-100%'],
        ['100%', '100%', '0%', '0%', '-100%'],
        ['100%', '100%', '0%', '0%', '-100%'],
        ['100%', '100%', '0%', '0%', '-100%'],
        ['100%', '100%', '0%', '0%'],
    ]);

    const bgOps = bgOpacityRefs.current.map((range, i) =>
        useTransform(smoothScroll, range, i === 0 ? [1, 1, 0] : i === 4 ? [0, 0, 1, 1] : [0, 0, 1, 1, 0])
    );

    const counterYs = counterYRefs.current.map((output, i) =>
        useTransform(smoothScroll, bgOpacityRefs.current[i], output)
    );

    const visGates = bgOpacityRefs.current.map((range, i) => {
        const r = [...range];
        if (i === 0) return useTransform(smoothScroll, [0.00, 0.20, 0.201], [1, 1, 0]);
        if (i === 4) return useTransform(smoothScroll, [0.919, 0.92, 1.0], [0, 1, 1]);
        return useTransform(smoothScroll, [r[0] - 0.001, r[0], r[3], r[3] + 0.001], [0, 1, 1, 0]);
    });

    // Centralized mockup parallax mockupX/mockupY
    const parallaxGains = bgOpacityRefs.current.map((range, i) =>
        useTransform(smoothScroll, range, i === 0 ? [1, 1, 0] : i === 4 ? [0, 0, 1, 1] : [0, 0, 1, 1, 0])
    );

    // Final mockupX/Y per section
    const mockupXs = parallaxGains.map(gain => useTransform([rawX, gain], ([x, g]) => (x as number) * (g as number)));
    const mockupYs = parallaxGains.map(gain => useTransform([rawY, gain], ([y, g]) => (y as number) * (g as number)));

    return (
        <div ref={containerRef} className="tc-scroll-container">
            <div className="tc-sticky-wrapper">
                {/* Unified Section Layer */}
                {sections.map((Section, i) => mountedIndices.includes(i) && (
                    <SectionSlide
                        key={`slide-${i}`}
                        Section={Section}
                        bgOpacity={bgOps[i]}
                        contentOpacity={visGates[i]}
                        counterY={counterYs[i]}
                        mockupX={mockupXs[i]}
                        mockupY={mockupYs[i]}
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
