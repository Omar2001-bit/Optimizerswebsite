import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import imgTopclientsResults4 from "../assets/f6cb95ddf6fbcaa6d79196a0ac804e1747a8b1c4.webp";
import '../styles/top-clients-scroll.css';

const BackgroundSlide = ({ Section, opacity, mouseX, mouseY, parallaxGain }: any) => {
    const display = useTransform(opacity, (v) => (v as number) > 0 ? "block" : "none");
    const pointerEvents = useTransform(opacity, (v) => (v as number) > 0.5 ? "auto" : "none");

    return (
        <motion.div
            className="tc-slide-wrapper"
            style={{
                opacity,
                zIndex: 0,
                display,
                pointerEvents,
                willChange: 'opacity'
            }}
        >
            <Section isActive={true} renderMode="bg" mouseX={mouseX} mouseY={mouseY} parallaxGain={parallaxGain} />
        </motion.div>
    );
};

const ContentSlide = ({ Section, opacity, counterY, mouseX, mouseY, parallaxGain }: any) => {
    const display = useTransform(opacity, (v) => (v as number) > 0 ? "block" : "none");
    const pointerEvents = useTransform(opacity, (v) => (v as number) > 0.5 ? "auto" : "none");

    return (
        <motion.div
            className="tc-slide-wrapper"
            style={{
                opacity,
                zIndex: 10,
                display,
                pointerEvents,
                willChange: 'opacity, transform'
            }}
        >
            <Section isActive={true} renderMode="content" counterY={counterY} mouseX={mouseX} mouseY={mouseY} parallaxGain={parallaxGain} />
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
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // ── Mouse tracking for Parallax ──
    const mouseX = useMotionValue(0); // Normalized -0.5 to 0.5
    const mouseY = useMotionValue(0);

    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

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

            // Mockup is centered approx at 50vw, 55vh
            const mouseX_raw = e.clientX / window.innerWidth;
            const mouseY_raw = e.clientY / window.innerHeight;

            const dx = mouseX_raw - 0.5;
            const dy = mouseY_raw - 0.55;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Weight: 1.0 at center, 0.0 at 0.35 distance (approx 35vw)
            const radius = 0.35;
            const weight = Math.max(0, 1 - (distance / radius));

            // INVERT values to create a "push" effect away from mouse
            mouseX.set(-dx * weight);
            mouseY.set(-(mouseY_raw - 0.5) * weight);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [isInView, mouseX, mouseY]);

    // ── Mount Gating (Only mount slides near viewport) ──
    const [mountedIndices, setMountedIndices] = useState<number[]>([0, 1]);
    const isSnapping = useRef(false);
    const lastSnapTime = useRef(0);
    const lastDirection = useRef<"down" | "up" | null>(null);
    const restTimeout = useRef<NodeJS.Timeout | null>(null);

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

            // ── Reactive Transition Triggering (Auto-Snap) ──
            const now = Date.now();
            if (isSnapping.current || (now - lastSnapTime.current < 1500) || !containerRef.current) return;

            // Use RAW velocity to capture intent without spring lag
            const velocity = scrollYProgress.getVelocity();
            const absVel = Math.abs(velocity);

            // Clear any pending "rest" snaps while user is moving
            if (restTimeout.current) clearTimeout(restTimeout.current);

            const handleSnap = (target: number) => {
                isSnapping.current = true;
                lastSnapTime.current = Date.now();
                const rect = containerRef.current!.getBoundingClientRect();
                const containerTop = rect.top + window.scrollY;
                const containerHeight = rect.height;
                const viewportHeight = window.innerHeight;
                const targetY = containerTop + (target * (containerHeight - viewportHeight));

                window.scrollTo({ top: targetY, behavior: 'smooth' });
                setTimeout(() => { isSnapping.current = false; }, 1500);
            };

            // LAYER 1: Active Velocity Triggers (Capture fast intent)
            if (absVel > 0.001) {
                lastDirection.current = velocity > 0 ? "down" : "up";
                if (velocity > 0) {
                    if (latest > 0.17 && latest < 0.23) handleSnap(0.32);
                    else if (latest > 0.41 && latest < 0.47) handleSnap(0.56);
                    else if (latest > 0.65 && latest < 0.71) handleSnap(0.80);
                    else if (latest > 0.89 && latest < 0.95) handleSnap(0.98);
                } else {
                    if (latest < 0.23 && latest > 0.17) handleSnap(0.08);
                    else if (latest < 0.47 && latest > 0.41) handleSnap(0.32);
                    else if (latest < 0.71 && latest > 0.65) handleSnap(0.56);
                    else if (latest < 0.95 && latest > 0.89) handleSnap(0.80);
                }
            }
            // LAYER 2: Rest-Zone Snapping (Catches slides that stop mid-way)
            else if (absVel < 0.0001) {
                restTimeout.current = setTimeout(() => {
                    if (isSnapping.current) return;

                    const zones = [
                        { range: [0.16, 0.24], targets: { down: 0.32, up: 0.08 } },
                        { range: [0.40, 0.48], targets: { down: 0.56, up: 0.32 } },
                        { range: [0.64, 0.72], targets: { down: 0.80, up: 0.56 } },
                        { range: [0.88, 0.96], targets: { down: 0.98, up: 0.80 } }
                    ];

                    for (const zone of zones) {
                        if (latest >= zone.range[0] && latest <= zone.range[1]) {
                            // Favor the direction the user was last moving
                            const target = lastDirection.current === "up" ? zone.targets.up : zone.targets.down;
                            handleSnap(target);
                            break;
                        }
                    }
                }, 150);
            }
        });
        return () => {
            unsubscribe();
            if (restTimeout.current) clearTimeout(restTimeout.current);
        };
    }, [smoothScroll, scrollYProgress]);

    // ─── Scroll timeline with REST ZONES (Sequential/Organized) ───
    // 1000vh total height
    // Slide 1: rest 0.00–0.16 | exit 0.16–0.20
    // Slide 2: enter 0.20–0.24 | rest 0.24–0.40 | exit 0.40–0.44
    // Slide 3: enter 0.44–0.48 | rest 0.48–0.64 | exit 0.64–0.68
    // Slide 4: enter 0.68–0.72 | rest 0.72–0.88 | exit 0.88–0.92
    // Slide 5: enter 0.92–0.96 | rest 0.96–1.00

    // ── Background opacities (crossfade, no movement) ──
    const bgOps = [
        useTransform(smoothScroll, [0.00, 0.16, 0.20], [1, 1, 0]),
        useTransform(smoothScroll, [0.16, 0.20, 0.24, 0.40, 0.44], [0, 0, 1, 1, 0]),
        useTransform(smoothScroll, [0.40, 0.44, 0.48, 0.64, 0.68], [0, 0, 1, 1, 0]),
        useTransform(smoothScroll, [0.64, 0.68, 0.72, 0.88, 0.92], [0, 0, 1, 1, 0]),
        useTransform(smoothScroll, [0.88, 0.92, 0.96, 1.0], [0, 0, 1, 1]),
    ];

    // ── Per-element counter Y (100% → 0% → -100%) ──
    const counterYs = [
        useTransform(smoothScroll, [0.00, 0.16, 0.20], ['0%', '0%', '-100%']),
        useTransform(smoothScroll, [0.16, 0.20, 0.24, 0.40, 0.44], ['100%', '100%', '0%', '0%', '-100%']),
        useTransform(smoothScroll, [0.40, 0.44, 0.48, 0.64, 0.68], ['100%', '100%', '0%', '0%', '-100%']),
        useTransform(smoothScroll, [0.64, 0.68, 0.72, 0.88, 0.92], ['100%', '100%', '0%', '0%', '-100%']),
        useTransform(smoothScroll, [0.88, 0.92, 0.96, 1.0], ['100%', '100%', '0%', '0%']),
    ];

    // ── Parallax Gain (1 during rest, 0 during exit/enter) ──
    const parallaxGains = [
        useTransform(smoothScroll, [0.00, 0.16, 0.20], [1, 1, 0]),
        useTransform(smoothScroll, [0.16, 0.20, 0.24, 0.40, 0.44], [0, 0, 1, 1, 0]),
        useTransform(smoothScroll, [0.40, 0.44, 0.48, 0.64, 0.68], [0, 0, 1, 1, 0]),
        useTransform(smoothScroll, [0.64, 0.68, 0.72, 0.88, 0.92], [0, 0, 1, 1, 0]),
        useTransform(smoothScroll, [0.88, 0.92, 0.96, 1.0], [0, 0, 1, 1]),
    ];

    // ── Visibility gate (sharp on/off — NOT a fade) ──
    const visGates = [
        useTransform(smoothScroll, [0.00, 0.20, 0.201], [1, 1, 0]),
        useTransform(smoothScroll, [0.199, 0.20, 0.44, 0.441], [0, 1, 1, 0]),
        useTransform(smoothScroll, [0.439, 0.44, 0.68, 0.681], [0, 1, 1, 0]),
        useTransform(smoothScroll, [0.679, 0.68, 0.92, 0.921], [0, 1, 1, 0]),
        useTransform(smoothScroll, [0.919, 0.92, 1.0], [0, 1, 1]),
    ];

    return (
        <div ref={containerRef} className="tc-scroll-container">
            <div className="tc-sticky-wrapper">
                {/* Background Layer — crossfade, no y movement */}
                {sections.map((Section, i) => mountedIndices.includes(i) && (
                    <BackgroundSlide
                        key={`bg-${i}`}
                        Section={Section}
                        opacity={bgOps[i]}
                        mouseX={smoothMouseX}
                        mouseY={smoothMouseY}
                        parallaxGain={parallaxGains[i]}
                    />
                ))}


                {/* Persistent Title — always visible, no movement */}
                <div className="tc-persistent-ui" style={{ zIndex: 20 }}>
                    <p
                        className="absolute bg-center bg-clip-text bg-cover bg-no-repeat font-['Sora',sans-serif] font-semibold leading-[1.1] left-[5.5vw] lowercase text-[76.3px] top-[7vh] tracking-[-0.04em]"
                        style={{
                            WebkitTextFillColor: "transparent",
                            backgroundImage: `url('${imgTopclientsResults4}')`,
                            textShadow: 'none',
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

                {/* Content Layer — per-element counter animation */}
                {sections.map((Section, i) => mountedIndices.includes(i) && (
                    <ContentSlide
                        key={`content-${i}`}
                        Section={Section}
                        opacity={visGates[i]}
                        counterY={counterYs[i]}
                        mouseX={smoothMouseX}
                        mouseY={smoothMouseY}
                        parallaxGain={parallaxGains[i]}
                    />
                ))}

                {/* Persistent CTA — always on top */}
                <div className="tc-persistent-ui" style={{ zIndex: 50 }}>
                    <div className="absolute left-[5.5vw] top-[80vh] flex flex-col gap-[3vh] items-start">
                        <p className="font-['Sora',sans-serif] font-normal leading-normal text-white text-[20px]">
                            Ready to be our next success story?
                        </p>
                        <div
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-[rgba(2,6,1,0.7)] backdrop-blur-md h-auto relative rounded-[100px] border border-[#6ae499]/50 px-[32px] py-[16px] cursor-pointer hover:scale-105 hover:bg-[rgba(106,228,153,0.1)] transition-all shadow-[0px_0px_30px_0px_rgba(106,228,153,0.3)]"
                        >
                            <p className="font-['Sora',sans-serif] font-semibold text-white text-[21.6px]">
                                Book Your Free Consultation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
