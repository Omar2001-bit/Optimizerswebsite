import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValue, useMotionValueEvent, animate, useTransform } from 'motion/react';
import '../styles/case-studies-animations.css';

import CaseStudy3 from './CaseStudy3';
import CaseStudy4 from './CaseStudy4';
import CaseStudy5 from './CaseStudy5';
import CaseStudy6 from './CaseStudy6';

const CONTENT_WIDTH = 1440;
const CONTENT_HEIGHT = 935.24;
const BAR_OPEN_PX = CONTENT_WIDTH / 2 - CONTENT_WIDTH * 0.03;
const BAR_WIDTH = 12;

export default function AnimatedCaseStudies() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);
    const [isInView, setIsInView] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const update = () => {
            setScale(Math.min(window.innerWidth / CONTENT_WIDTH, window.innerHeight / CONTENT_HEIGHT, 1));
        };
        update();
        const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0.01 });
        if (containerRef.current) observer.observe(containerRef.current);
        window.addEventListener('resize', update);
        return () => { window.removeEventListener('resize', update); observer.disconnect(); };
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 0.9', 'end end'],
    });

    // Detect active slide based on scroll thresholds
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.min(Math.floor(latest / 0.2), 4);
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    });

    // ─── GATE ANIMATION (Scroll-Based) ───
    const gateProgress = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

    const leftBarX = useTransform(gateProgress, [0, 1], [-BAR_WIDTH / 2, -BAR_OPEN_PX - BAR_WIDTH / 2]);
    const rightBarX = useTransform(gateProgress, [0, 1], [BAR_WIDTH / 2, BAR_OPEN_PX + BAR_WIDTH / 2]);
    const leftSkew = useTransform(gateProgress, [0, 1], [0, -40]);
    const rightSkew = useTransform(gateProgress, [0, 1], [0, 40]);

    // Title reveal and fade-out as slide 1 comes in
    const titleClipPct = useTransform(gateProgress, [0, 1], [50, 3]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.18], [0, 1, 1, 0]);
    const titleY = useTransform(gateProgress, [0, 1], ['40%', '0%']);
    const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

    // ─── SLIDE ANIMATIONS (Time-Based) ───
    const slideOpacities = [useMotionValue(0), useMotionValue(0), useMotionValue(0), useMotionValue(0)];
    const slideYs = [useMotionValue('30%'), useMotionValue('30%'), useMotionValue('30%'), useMotionValue('30%')];
    const barColor = useMotionValue('#ffffff');

    const colors = ['#ffffff', '#ff8979', '#6ae499', '#fcd34d', '#5a8cd6'];

    useEffect(() => {
        const DURATION = 0.5;
        const EASE = "easeInOut";

        // Animate Bar Color
        animate(barColor, colors[activeIndex], { duration: DURATION });

        // Animate Slides
        [0, 1, 2, 3].forEach((i) => {
            const slideIdx = i + 1; // Slide 1 is at activeIndex 1

            // Opacity
            animate(slideOpacities[i], activeIndex === slideIdx ? 1 : 0, { duration: DURATION, ease: EASE });

            // Y Position
            let targetY = '0%';
            if (activeIndex < slideIdx) targetY = '30%';
            if (activeIndex > slideIdx) targetY = '-30%';
            animate(slideYs[i], targetY, { duration: DURATION, ease: EASE });
        });
    }, [activeIndex]);

    const titleClipPath = useTransform(titleClipPct, (v: number) => `inset(0 ${v}% 0 ${v}%)`);

    return (
        <div ref={containerRef} className="cs-scroll-container" style={{ minHeight: '350vh' }}>
            <div className="cs-sticky-wrapper">
                <div className="cs-spotlight" />
                <div className="cs-content-box">
                    {isInView && (
                        <div className="cs-content-scaler" style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}>
                            <div className="cs-slides-clip">
                                <motion.div className="cs-slide-wrapper" style={{ opacity: slideOpacities[0], y: slideYs[0] }}><CaseStudy3 /></motion.div>
                                <motion.div className="cs-slide-wrapper" style={{ opacity: slideOpacities[1], y: slideYs[1] }}><CaseStudy4 /></motion.div>
                                <motion.div className="cs-slide-wrapper" style={{ opacity: slideOpacities[2], y: slideYs[2] }}><CaseStudy5 /></motion.div>
                                <motion.div className="cs-slide-wrapper" style={{ opacity: slideOpacities[3], y: slideYs[3] }}><CaseStudy6 /></motion.div>
                            </div>

                            {/* Reflections & Gate */}
                            <motion.div className="cs-ground-glow cs-ground-glow--left" style={{ backgroundColor: barColor, x: leftBarX, skewX: leftSkew }} />
                            <motion.div className="cs-ground-glow cs-ground-glow--right" style={{ backgroundColor: barColor, x: rightBarX, skewX: rightSkew }} />
                            <motion.div className="cs-floor-ellipse" style={{ backgroundColor: barColor }} />

                            <motion.div className="t-gate-wrapper t-gate-wrapper--left" style={{ color: barColor, x: leftBarX }}><div className="t-gate-core" /></motion.div>
                            <motion.div className="t-gate-wrapper t-gate-wrapper--right" style={{ color: barColor, x: rightBarX }}><div className="t-gate-core" /></motion.div>

                            <motion.div
                                className="cs-title-text-gate"
                                style={{
                                    opacity: titleOpacity,
                                    y: titleY,
                                    clipPath: titleClipPath
                                }}
                            >
                                <div className="cs-title-inner"><p>CASE</p><p>STUDIES</p></div>
                            </motion.div>
                        </div>
                    )}
                </div>
                <motion.div className="cs-scroll-hint" style={{ opacity: scrollHintOpacity }}>
                    <div className="cs-scroll-hint-line" /><span className="cs-scroll-hint-text">Scroll to Open</span>
                </motion.div>
            </div>
        </div>
    );
}
