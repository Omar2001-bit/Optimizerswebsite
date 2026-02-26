import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import '../styles/case-studies-animations.css';

import CaseStudy3 from './CaseStudy3';
import CaseStudy4 from './CaseStudy4';
import CaseStudy5 from './CaseStudy5';
import CaseStudy6 from './CaseStudy6';

const CONTENT_WIDTH = 1440;
const CONTENT_HEIGHT = 935.24;
// Bars open to 3% from each edge of the 1440px content
const BAR_OPEN_PX = CONTENT_WIDTH / 2 - CONTENT_WIDTH * 0.03; // ~677px from center
// Bar width in px — used to bake centering into the motion x (CSS transform is overridden by motion)
const BAR_WIDTH = 12;

export default function AnimatedCaseStudies() {
    const containerRef = useRef<HTMLDivElement>(null);

    // ── Compute scale so the 1440px content fits the viewport exactly ──
    // We scale both width AND height to ensure nothing is clipped.
    const [scale, setScale] = useState(1);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const update = () => {
            const scaleX = window.innerWidth / CONTENT_WIDTH;
            const scaleY = window.innerHeight / CONTENT_HEIGHT;
            setScale(Math.min(scaleX, scaleY, 1));
        };
        update();

        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.01 }
        );
        if (containerRef.current) observer.observe(containerRef.current);

        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('resize', update);
            observer.disconnect();
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 0.4', 'end end'],
    });

    const roundedScroll = useSpring(scrollYProgress, {
        stiffness: 25,
        damping: 18,
        restDelta: 0.001,
    });

    // ── Wheel-event hijack: one tick = one slide (slides 2-4 only) ──
    const isSnapping = useRef(false);
    // Only the gate opening is scroll-driven; all 4 case study slides snap
    const SNAP_TARGETS = [0.17, 0.36, 0.57, 0.84];
    const SNAP_THRESHOLD = 0.13; // hijack only after gate animation finishes
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

            const progress = scrollYProgress.get();

            // Let the first two slides (gate + slide 1) scroll naturally
            if (progress < SNAP_THRESHOLD) return;

            // Ignore tiny trackpad inertia/bounce events — let them pass through
            if (Math.abs(e.deltaY) < 3) return;

            // If already animating, consume the event but do nothing
            if (isSnapping.current) {
                e.preventDefault();
                return;
            }

            const direction = e.deltaY > 0 ? 1 : -1;

            // Find the current snap index
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

    const gateProgress = useTransform(scrollYProgress, [0, 0.12], [0, 1]);

    // Motion x overrides CSS transform, so we bake the centering offset into x:
    // Left bar: left edge at 50%, so subtract half bar width to center it, then move left when open
    // Right bar: right edge at 50%, so add half bar width to center it, then move right when open
    const leftBarX = useTransform(gateProgress, [0, 1], [-BAR_WIDTH / 2, -BAR_OPEN_PX - BAR_WIDTH / 2]);
    const rightBarX = useTransform(gateProgress, [0, 1], [BAR_WIDTH / 2, BAR_OPEN_PX + BAR_WIDTH / 2]);

    const leftSkew = useTransform(gateProgress, [0, 1], [0, -40]);
    const rightSkew = useTransform(gateProgress, [0, 1], [0, 40]);

    const titleClipPct = useTransform(gateProgress, [0, 1], [50, 3]);
    const titleClipPath = useTransform(titleClipPct, (v: number) => `inset(0 ${v}% 0 ${v}%)`);

    const titleOpacity = useTransform(scrollYProgress, [0, 0.06, 0.10, 0.15], [0, 1, 1, 0]);
    const titleY = useTransform(gateProgress, [0, 1], ['40%', '0%']);

    const barColor = useTransform(
        roundedScroll,
        [0.10, 0.20, 0.38, 0.62, 0.82],
        ['#ffffff', '#ff8979', '#6ae499', '#fcd34d', '#5a8cd6']
    );

    const slide1Y = useTransform(roundedScroll, [0.08, 0.12, 0.23, 0.26], ['30%', '0%', '0%', '-30%']);
    const slide2Y = useTransform(roundedScroll, [0.25, 0.29, 0.44, 0.47], ['30%', '0%', '0%', '-30%']);
    const slide3Y = useTransform(roundedScroll, [0.46, 0.50, 0.65, 0.68], ['30%', '0%', '0%', '-30%']);
    const slide4Y = useTransform(roundedScroll, [0.67, 0.71, 1, 1], ['30%', '0%', '0%', '0%']);

    const slide1Opacity = useTransform(roundedScroll, [0.08, 0.10, 0.24, 0.26], [0, 1, 1, 0]);
    const slide2Opacity = useTransform(roundedScroll, [0.25, 0.27, 0.45, 0.47], [0, 1, 1, 0]);
    const slide3Opacity = useTransform(roundedScroll, [0.46, 0.48, 0.66, 0.68], [0, 1, 1, 0]);
    const slide4Opacity = useTransform(roundedScroll, [0.67, 0.69, 1, 1], [0, 1, 1, 1]);

    return (
        <div ref={containerRef} className="cs-scroll-container">
            <div className="cs-sticky-wrapper">
                {/* Spotlight — always covers full viewport */}
                <div className="cs-spotlight" />

                {/*
                  cs-content-box: a viewport-sized container (100vw × 100vh).
                  Inside it, cs-content-scaler is exactly 1440×935px and is
                  scaled down via transform so it fits the viewport perfectly.
                  Because the scaler uses position:absolute centered, the layout
                  box stays viewport-sized — no overflow, no clipping.
                */}
                <div className="cs-content-box">
                    {isInView && (
                        <div
                            className="cs-content-scaler"
                            style={{
                                transform: `scale(${scale})`,
                                transformOrigin: 'center center',
                            }}
                        >
                            {/* Slides */}
                            <div className="cs-slides-clip">
                                <motion.div className="cs-slide-wrapper" style={{ opacity: slide1Opacity, y: slide1Y }}>
                                    <CaseStudy3 />
                                </motion.div>
                                <motion.div className="cs-slide-wrapper" style={{ opacity: slide2Opacity, y: slide2Y }}>
                                    <CaseStudy4 />
                                </motion.div>
                                <motion.div className="cs-slide-wrapper" style={{ opacity: slide3Opacity, y: slide3Y }}>
                                    <CaseStudy5 />
                                </motion.div>
                                <motion.div className="cs-slide-wrapper" style={{ opacity: slide4Opacity, y: slide4Y }}>
                                    <CaseStudy6 />
                                </motion.div>
                            </div>

                            {/* Ground Reflections */}
                            <motion.div
                                className="cs-ground-glow cs-ground-glow--left"
                                style={{ backgroundColor: barColor, x: leftBarX, skewX: leftSkew }}
                            />
                            <motion.div
                                className="cs-ground-glow cs-ground-glow--right"
                                style={{ backgroundColor: barColor, x: rightBarX, skewX: rightSkew }}
                            />

                            {/* Center floor ellipse */}
                            <motion.div className="cs-floor-ellipse" style={{ backgroundColor: barColor }} />

                            {/* Left Gate Bar */}
                            <motion.div
                                className="t-gate-wrapper t-gate-wrapper--left"
                                style={{ color: barColor, x: leftBarX }}
                            >
                                <div className="t-gate-blur-2" />
                                <div className="t-gate-blur-1" />
                                <div className="t-gate-core" />
                            </motion.div>

                            {/* Right Gate Bar */}
                            <motion.div
                                className="t-gate-wrapper t-gate-wrapper--right"
                                style={{ color: barColor, x: rightBarX }}
                            >
                                <div className="t-gate-blur-2" />
                                <div className="t-gate-blur-1" />
                                <div className="t-gate-core" />
                            </motion.div>

                            {/* Title Text */}
                            <motion.div
                                className="cs-title-text-gate"
                                style={{ opacity: titleOpacity, clipPath: titleClipPath, y: titleY }}
                            >
                                <div className="cs-title-inner">
                                    <p style={{ margin: 0 }}>CASE</p>
                                    <p style={{ margin: 0 }}>STUDIES</p>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </div>

                {/* Scroll Hint */}
                <motion.div
                    className="cs-scroll-hint"
                    style={{ opacity: useTransform(roundedScroll, [0, 0.05], [1, 0]) }}
                >
                    <div className="cs-scroll-hint-line" />
                    <span className="cs-scroll-hint-text">Scroll to Open</span>
                </motion.div>
            </div>
        </div>
    );
}
