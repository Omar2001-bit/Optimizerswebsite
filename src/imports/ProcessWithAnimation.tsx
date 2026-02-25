import svgPaths from "./svg-gpil48nekb";
import clsx from "clsx";
import imgOurProvenConversionOptimizationProcess from "../assets/f107a7f40e4d7ea19ffc42c38dbf8e17414a5f3b.webp";
import { AnimatedProcessCard } from "./AnimatedProcessCard";
import { AnimatedBeforeCard } from "./AnimatedBeforeCard";

type ProcessBackgroundImageProps = {
    additionalClassNames?: string;
    noRotation?: boolean;
};

function ProcessBackgroundImage({ children, additionalClassNames = "", noRotation = false }: React.PropsWithChildren<ProcessBackgroundImageProps>) {
    return (
        <div style={{ "--transform-inner-width": "2", "--transform-inner-height": "2" } as React.CSSProperties} className={clsx("flex h-[589px] items-center justify-center relative w-full lg:w-[570px] scale-[0.6] sm:scale-[0.8] lg:scale-100 origin-center", additionalClassNames)}>
            <div className={clsx("flex-none", !noRotation && "rotate-[90deg] scale-y-[-100%]")}>{children}</div>
        </div>
    );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className="backdrop-blur-[2px] backdrop-filter bg-[#141613] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[6px] w-[168px]">
            <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.17)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_-4px_4px_0px_black,0px_6px_4px_0px_black]" />
            <p className="font-['Sora:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[16px] text-center text-nowrap text-white">{children}</p>
        </div>
    );
}

type BackgroundImageAndText3Props = {
    text: string;
    additionalClassNames?: string;
};

function BackgroundImageAndText3({ text, additionalClassNames = "" }: BackgroundImageAndText3Props) {
    return (
        <div className={clsx("flex-none scale-y-[-100%]", additionalClassNames)}>
            <p className="font-['Sora:Regular',sans-serif] font-normal leading-[24px] relative text-[20px] text-center text-white w-[133px]">{text}</p>
        </div>
    );
}

type BackgroundImageAndText2Props = {
    text: string;
    additionalClassNames?: string;
};

function BackgroundImageAndText2({ text, additionalClassNames = "" }: BackgroundImageAndText2Props) {
    return (
        <div className={clsx("flex-none scale-y-[-100%]", additionalClassNames)}>
            <p className="font-['Sora:Regular',sans-serif] font-normal leading-[24px] relative text-[20px] text-center text-white w-[96px]">{text}</p>
        </div>
    );
}

type BackgroundImageAndText1Props = {
    text: string;
    additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
    return (
        <div className={clsx("flex-none scale-y-[-100%]", additionalClassNames)}>
            <p className="font-['Sora:Regular',sans-serif] font-normal leading-[24px] relative text-[20px] text-center text-nowrap text-white">{text}</p>
        </div>
    );
}

type BackgroundImageAndTextProps = {
    text: string;
    additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
    return (
        <div className={clsx("flex-none scale-y-[-100%]", additionalClassNames)}>
            <p className="font-['Sora:Regular',sans-serif] font-normal leading-[24px] relative text-[20px] text-center text-white w-[91px]">{text}</p>
        </div>
    );
}

export default function ProcessWithAnimation() {
    return (
        <div className="bg-[#020601] relative w-full min-h-screen py-20 shrink-0 overflow-hidden flex flex-col items-center gap-10" data-name="Process">

            {/* Title Section */}
            <div className="flex flex-col gap-[32px] items-center text-center z-10 px-4 max-w-full">
                <p className="bg-center bg-clip-text bg-cover bg-no-repeat font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[40px] lg:text-[72px] text-center tracking-[-2px] lg:tracking-[-2.88px] w-full max-w-[935px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: `url('${imgOurProvenConversionOptimizationProcess}')` }}>
                    Our Proven Conversion Optimization Process
                </p>
                <p className="font-['Sora:Regular',sans-serif] font-normal leading-[24px] lg:leading-[28px] relative shrink-0 text-[16px] lg:text-[20px] text-[rgba(255,255,255,0.8)] text-center w-full max-w-[797px]">We follow a systematic 6-step approach that has generated millions in additional revenue for e-commerce brands across the GCC.</p>
                <div className="bg-[#020601] h-[50px] relative rounded-[100px] shrink-0 cursor-pointer hover:scale-105 transition-transform" data-name="Link" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[28px] py-[12px] relative rounded-[inherit]">
                        <div className="content-stretch flex items-start justify-center pl-0 pr-[0.5px] py-0 relative shrink-0" data-name="div.btn-label">
                            <div className="flex flex-col font-['Sora:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white">
                                <p className="leading-[21.6px]">Book a Free CRO Audit</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_30px_0px_rgba(106,228,153,0.6)]" />
                    <div aria-hidden="true" className="absolute border border-[#6ae499] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full px-4 relative mt-10">
                {/* Before Card */}
                <div className="flex flex-col items-center relative">
                    <p className="font-['Sora:SemiBold',sans-serif] font-semibold text-[40px] lg:text-[88px] text-[rgba(255,255,255,0.2)] text-center tracking-[3.5px] -mb-[26px] lg:-mb-[50px] relative z-0">Before</p>
                    <div className="relative z-10">
                        <ProcessBackgroundImage additionalClassNames="" noRotation={true}>
                            <AnimatedBeforeCard />
                        </ProcessBackgroundImage>
                    </div>
                </div>

                {/* After Card */}
                <div className="flex flex-col items-center relative">
                    <p className="font-['Sora:SemiBold',sans-serif] font-semibold text-[40px] lg:text-[88px] text-[rgba(255,255,255,0.2)] text-center tracking-[3.5px] -mb-[26px] lg:-mb-[50px] relative z-0">After</p>
                    <div className="relative z-10">
                        <ProcessBackgroundImage additionalClassNames="" noRotation={true}>
                            <AnimatedProcessCard />
                        </ProcessBackgroundImage>
                    </div>
                </div>
            </div>
        </div>
    );
}