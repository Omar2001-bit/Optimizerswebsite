"use client";

import { CheckIcon, XIcon } from "lucide-react";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  // This ref is now specifically for the table container
  const tableContainerRef = useRef(null); 
  const { scrollYProgress } = useScroll({
    target: tableContainerRef,
    // This offset directly maps scroll progress to the element's visibility percentage
    offset: ["start end", "end end"], 
  });

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
    <section className="relative w-full min-h-[790px] bg-dark-mode900 overflow-hidden py-[100px] md:py-[200px]">
      <div className="flex flex-wrap w-full items-center gap-0 absolute top-0 left-0">
        {gridItems.map((index) => (
          <div key={index} className="relative w-20 h-20" />
        ))}
      </div>

      <div className="flex w-full max-w-[969px] items-center absolute top-[60px] md:top-[160px] left-1/2 transform -translate-x-1/2 flex-col gap-[40px] md:gap-[60px] px-4">
        <h1 className="relative self-stretch mt-[-1.00px] font-semibold text-shadeswhite text-[32px] md:text-[48px] text-center tracking-[-1.92px] leading-[40px] md:leading-[56px]">
          What Makes CRO the Smarter Investment
        </h1>
      </div>

      {/* The ref is now attached to this specific container */}
      <div ref={tableContainerRef} className="flex flex-col w-full max-w-[1246px] items-start justify-center p-[9px] absolute top-[170px] md:top-[270px] left-1/2 transform -translate-x-1/2 bg-[#6ae49914] rounded-3xl overflow-hidden border-2 border-solid border-[#6ae4994c] shadow-[inset_0px_0px_0px_9px_#ffffff08] mx-4">
        <Card className="inline-flex flex-col items-center justify-center p-6 relative flex-[0_0_auto] rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(2,6,1,0.4)_0%,rgba(2,6,1,0.4)_100%)] overflow-hidden">
          <CardContent className="relative w-full max-w-[1176px] flex-[0_0_auto] rounded-lg overflow-x-auto p-0">
            <Table className="w-full min-w-[800px] overflow-hidden">
              <TableHeader>
                <TableRow className="border-b border-[#0a381c]">
                  <TableHead className="w-[366px] h-[72px] p-4 bg-[#0b130e] text-left">
                    <div className="font-semibold text-secondary-400 text-[18px] tracking-[0px] leading-[21.6px]">
                      Feature / Pain Point
                    </div>
                  </TableHead>
                  <TableHead className="w-[270px] h-[72px] p-4 bg-[#0b130e] text-center">
                    <div className="font-semibold text-secondary-400 text-[18px] tracking-[0px] leading-[21.6px]">
                      Running Ads
                    </div>
                  </TableHead>
                  <TableHead className="w-[270px] h-[72px] p-4 bg-[#0b130e] text-center">
                    <div className="font-semibold text-secondary-400 text-[18px] tracking-[0px] leading-[21.6px]">
                      Website Redesign
                    </div>
                  </TableHead>
                  <TableHead className="w-[270px] h-[72px] p-4 bg-[#0b130e] text-center">
                    <div className="font-semibold text-secondary-400 text-[18px] tracking-[0px] leading-[21.6px]">
                      Conversion Optimization
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => {
                  const start = 0.12 + (index * 0.07);
                  const end = start + 0.26;

                  const x = useTransform(scrollYProgress, [start, end], [index % 2 === 0 ? -300 : 300, 0]);
                  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

                  return (
                    <motion.tr
                      key={index}
                      className={`${index === tableData.length - 1 ? "border-0" : "border-b border-[#0a381c]"}`}
                      style={{ x, opacity }}
                    >
                    <TableCell className="w-[366px] h-14 p-4 bg-[#0b130e] align-top">
                      <div className="mt-[-1.00px] font-normal text-shadeswhite text-[16px] tracking-[0px] leading-[19px] whitespace-nowrap">
                        {row.feature}
                      </div>
                    </TableCell>
                    <TableCell className="w-[270px] h-14 p-4 bg-[#0b130e] text-center">
                      {row.runningAds ? (
                        <div className="w-6 h-6 mx-auto rounded-full bg-[#1c4a2c] border border-[#2c8b4a] flex items-center justify-center">
                          <CheckIcon className="w-4 h-4 text-[#6ae499]" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 mx-auto rounded-full bg-[#4a1c1c] border border-[#8b2c2c] flex items-center justify-center">
                          <XIcon className="w-4 h-4 text-[#d64545]" />
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="w-[270px] h-14 p-4 bg-[#0b130e] text-center">
                      {row.websiteRedesign ? (
                        <div className="w-6 h-6 mx-auto rounded-full bg-[#1c4a2c] border border-[#2c8b4a] flex items-center justify-center">
                          <CheckIcon className="w-4 h-4 text-[#6ae499]" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 mx-auto rounded-full bg-[#4a1c1c] border border-[#8b2c2c] flex items-center justify-center">
                          <XIcon className="w-4 h-4 text-[#d64545]" />
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="w-[270px] h-14 p-4 bg-[#0b130e] text-center">
                      {row.conversionOptimization ? (
                        <div className="w-6 h-6 mx-auto rounded-full bg-[#1c4a2c] border border-[#2c8b4a] flex items-center justify-center">
                          <CheckIcon className="w-4 h-4 text-[#6ae499]" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 mx-auto rounded-full bg-[#4a1c1c] border border-[#8b2c2c] flex items-center justify-center">
                          <XIcon className="w-4 h-4 text-[#d64545]" />
                        </div>
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