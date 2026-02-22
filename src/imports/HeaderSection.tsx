import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
    BackgroundLayer,
    HeroTextLayer,
    TabletLayer,
    HeaderNav,
} from "./Frame2147223128";

const CANVAS_WIDTH = 1440;

export default function HeaderSection() {
    const [scale, setScale] = useState(1);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const update = () => {
            const s = Math.min(window.innerWidth / CANVAS_WIDTH, 1);
            setScale(s);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // Scroll progress: 0 at top, 1 at bottom of scroll container
    const { scrollYProgress } = useScroll({
        target: scrollContainerRef,
        offset: ["start start", "end end"],
    });

    // --- Hero Text Animations ---
    const heroScale = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 0.85, 0.65]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.6], [1, 0.7, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, -40, -120]);

    // --- Tablet Animations ---
    const tabletY = useTransform(scrollYProgress, [0, 0.3, 1], [300, 50, -750]);
    const tabletScale = useTransform(scrollYProgress, [0, 0.4, 1], [0.85, 0.95, 1]);

    return (
        <div ref={scrollContainerRef} className="header-scroll-container">
            <div className="header-sticky-viewport">
                <div className="header-content-box">
                    <div
                        className="header-content-scaler"
                        style={{
                            transform: `scale(${scale})`,
                            transformOrigin: "top center",
                        }}
                    >
                        {/* Layer 3 – Background (static, lowest z-index) */}
                        <div className="header-scroll-layer header-bg-layer">
                            <BackgroundLayer />
                        </div>

                        {/* Layer 1 – Hero Text (scales down + fades on scroll) */}
                        <motion.div
                            className="header-scroll-layer header-hero-layer"
                            style={{
                                scale: heroScale,
                                opacity: heroOpacity,
                                y: heroY,
                            }}
                        >
                            <HeroTextLayer />
                        </motion.div>

                        {/* Layer 2 – Tablet (slides up from below on scroll) */}
                        <motion.div
                            className="header-scroll-layer header-tablet-layer"
                            style={{
                                y: tabletY,
                                scale: tabletScale,
                            }}
                        >
                            <TabletLayer />
                        </motion.div>

                        {/* Header Nav (stays fixed, unaffected) */}
                        <div className="header-scroll-layer header-nav-layer">
                            <HeaderNav />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
