import { CheckIcon, XIcon } from "lucide-react";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const DataTableSection = (): JSX.Element => {
  const gridItems = Array.from({ length: 234 }, (_, index) => index);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });

  const tableData = [
    {
      feature: "Revenue Growth Without More Ad Spend",
      runningAds: false,
      websiteRedesign: false,
      conversionOptimization: true,
    },
    {
      feature: "Low Risk / Data-Driven Decisions",
      runningAds: false,
      websiteRedesign: false,
      conversionOptimization: true,
    },
    {
      feature: "Fast, Sustainable Results",
      runningAds: false,
      websiteRedesign: false,
      conversionOptimization: true,
    },
    {
      feature: "Improves All Marketing Channels",
      runningAds: false,
      websiteRedesign: false,
      conversionOptimization: true,
    },
    {
      feature: "Cost Efficiency / Higher ROI",
      runningAds: false,
      websiteRedesign: false,
      conversionOptimization: true,
    },
    {
      feature: "Ongoing Improvements (Not One-Off)",
      runningAds: false,
      websiteRedesign: false,
      conversionOptimization: true,
    },
  ];

  return (
    <section ref={ref} className="relative w-full min-h-[790px] bg-dark-mode900 overflow-hidden">
      <div className="flex flex-wrap w-full items-center gap-0 absolute top-0 left-0">
        {gridItems.map((index) => (
          <div key={index} className="relative w-20 h-20" />
        ))}
      </div>

      <div className="flex w-full max-w-[969px] items-center absolute top-[100px] left-1/2 transform -translate-x-1/2 flex-col gap-6">
        <h1 className="relative self-stretch mt-[-1.00px] font-heading-h1-semi-bold font-[number:var(--heading-h1-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h1-semi-bold-font-size)] text-center tracking-[var(--heading-h1-semi-bold-letter-spacing)] leading-[var(--heading-h1-semi-bold-line-height)] [font-style:var(--heading-h1-semi-bold-font-style)]">
          What Makes CRO the Smarter Investment
        </h1>
      </div>

      <div className="flex flex-col w-full max-w-[1246px] items-start justify-center p-[9px] absolute top-[214px] left-1/2 transform -translate-x-1/2 bg-[#6ae49914] rounded-3xl overflow-hidden border-2 border-solid border-[#6ae4994c] shadow-[inset_0px_0px_0px_9px_#ffffff08]">
        <Card className="inline-flex flex-col items-center justify-center p-6 relative flex-[0_0_auto] rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(2,6,1,0.4)_0%,rgba(2,6,1,0.4)_100%)] overflow-hidden">
          <CardContent className="relative w-full max-w-[1176px] flex-[0_0_auto] rounded-lg overflow-hidden p-0">
            <Table className="w-full overflow-hidden">
              <TableHeader>
                <TableRow className="shadow-[inset_0px_-1px_0px_#0a391c] border-0">
                  <TableHead className="w-[366px] h-[72px] p-4 bg-[#0b130e] text-left">
                    <div className="font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-secondary-400 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                      Feature / Pain Point
                    </div>
                  </TableHead>
                  <TableHead className="w-[270px] h-[72px] p-4 bg-[#0b130e] text-center">
                    <div className="font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-secondary-400 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                      Running Ads
                    </div>
                  </TableHead>
                  <TableHead className="w-[270px] h-[72px] p-4 bg-[#0b130e] text-center">
                    <div className="font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-secondary-400 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                      Website Redesign
                    </div>
                  </TableHead>
                  <TableHead className="w-[270px] h-[72px] p-4 bg-[#0b130e] text-center">
                    <div className="font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-secondary-400 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                      Conversion Optimization
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => {
                  // Alternating animation: even rows from left, odd rows from right
                  const animateFrom = index % 2 === 0 ? { x: -300, opacity: 0 } : { x: 300, opacity: 0 };
                  const animateTo = { x: 0, opacity: 1 };
                  
                  return (
                    <motion.tr
                      key={index}
                      className={`shadow-[inset_0px_-1px_0px_#0a391c] border-0 ${index === tableData.length - 1 ? "shadow-none" : ""}`}
                      initial={animateFrom}
                      animate={isInView ? animateTo : animateFrom}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.15,
                        ease: [0.25, 0.4, 0.25, 1],
                      }}
                    >
                    <TableCell className="w-[366px] h-14 p-4 bg-[#0b130e] align-top">
                      <div className="mt-[-1.00px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-regular-font-style)]">
                        {row.feature}
                      </div>
                    </TableCell>
                    <TableCell className="w-[270px] h-14 p-4 bg-[#0b130e] text-center">
                      {row.runningAds ? (
                        <CheckIcon className="w-6 h-6 mx-auto text-green-500" />
                      ) : (
                        <XIcon className="w-6 h-6 mx-auto text-red-500" />
                      )}
                    </TableCell>
                    <TableCell className="w-[270px] h-14 p-4 bg-[#0b130e] text-center">
                      {row.websiteRedesign ? (
                        <CheckIcon className="w-6 h-6 mx-auto text-green-500" />
                      ) : (
                        <XIcon className="w-6 h-6 mx-auto text-red-500" />
                      )}
                    </TableCell>
                    <TableCell className="w-[270px] h-14 p-4 bg-[#0b130e] text-center">
                      {row.conversionOptimization ? (
                        <CheckIcon className="w-6 h-6 mx-auto text-green-500" />
                      ) : (
                        <XIcon className="w-6 h-6 mx-auto text-red-500" />
                      )}
                    </TableCell>
                  </motion.tr>
                );
                })}
              </TableBody>
            </Table>
          </CardContent>

          <img
            className="absolute top-0 right-[57px] w-[381px] h-2"
            alt="Mask group"
            src="/figmaAssets/mask-group-26.svg"
          />

          <img
            className="absolute left-[57px] bottom-[-7px] w-[381px] h-2"
            alt="Mask group"
            src="/figmaAssets/mask-group-20.svg"
          />
        </Card>
      </div>
    </section>
  );
};
