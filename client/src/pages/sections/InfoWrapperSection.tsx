import React from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { RotateCcwIcon, ArrowRightIcon, ArrowLeftRightIcon } from 'lucide-react';

const inputFields = [
  {
    label: "Monthly Website Users",
    value: "12000",
    hasSlider: false
  }
];

const currentMetrics = [
  {
    label: "Your CURRENT conversion rate",
    value: "2.5%",
    sliderWidth: "w-[294px]"
  },
  {
    label: "Your CURRENT average order value", 
    value: "260",
    currency: true,
    sliderWidth: "w-[216px]"
  }
];

const newMetrics = [
  {
    label: "Your NEW conversion rate",
    value: "2.5%",
    sliderWidth: "w-[294px]"
  },
  {
    label: "Your NEW average order value",
    value: "260", 
    currency: true,
    sliderWidth: "w-[216px]"
  }
];

const currentRevenueCards = [
  {
    title: "Current Monthly Revenue",
    value: "50,000",
    currency: true
  },
  {
    title: "Current Annual Revenue", 
    value: "600,000",
    currency: true
  }
];

const newRevenueCards = [
  {
    title: "New Monthly Revenue",
    value: "50,000",
    currency: true,
    textColor: "text-secondary-200"
  },
  {
    title: "New Annual Revenue",
    value: "600,000", 
    currency: true,
    textColor: "text-secondary-200"
  }
];

const additionalMetrics = [
  {
    title: "Additional Revenue / Month",
    value: "+27,400",
    currency: true,
    textColor: "text-secondary-500"
  },
  {
    title: "% Increase in Revenue", 
    value: "32%",
    currency: false,
    textColor: "text-secondary-500"
  }
];

export const InfoWrapperSection = (): JSX.Element => {
  return (
    <section className="w-full bg-dark-mode900 py-[100px]">
<div className="flex flex-col max-w-[1144px] mx-auto items-center gap-[60px] px-4">
<header className="flex flex-col items-start gap-6 w-full">
<h1 className="w-full font-heading-h1-semi-bold font-[number:var(--heading-h1-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h1-semi-bold-font-size)] tracking-[var(--heading-h1-semi-bold-letter-spacing)] leading-[var(--heading-h1-semi-bold-line-height)] [font-style:var(--heading-h1-semi-bold-font-style)]">
ROI Calculator
          </h1>
<p className="max-w-[980px] font-subheading-regular font-[number:var(--subheading-regular-font-weight)] text-shadeswhite text-[length:var(--subheading-regular-font-size)] tracking-[var(--subheading-regular-letter-spacing)] leading-[var(--subheading-regular-line-height)] [font-style:var(--subheading-regular-font-style)]">
See the real impact CRO can have on your business. Enter just a few
            numbers and instantly discover what a 10–40% lift in conversions
            could mean for your monthly revenue.
          </p>
</header>
<div className="flex flex-col items-start gap-10 w-full">
<div className="flex flex-col items-center gap-6 w-full">
<div className="flex flex-col items-center gap-6 w-full">
<h2 className="w-full font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h5-semi-bold-font-size)] tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]">
Start&nbsp;&nbsp;Entering Your Data
              </h2>
</div>
<div className="flex items-end gap-6 w-full flex-wrap">
<div className="inline-flex flex-col items-start gap-3">
<div className="inline-flex items-center gap-2">
<label className="font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
Currency
                  </label>
</div>
<Select defaultValue="SAR">
<SelectTrigger className="w-[324px] h-12 px-4 py-0 rounded border-none backdrop-blur-[3.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.3px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[0.5px] before:rounded before:[background:linear-gradient(212deg,rgba(255,255,255,0.2)_0%,rgba(49,218,114,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
<SelectValue className="font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-shadeswhite text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] [font-style:var(--paragraph-p3-semi-bold-font-style)]" />
</SelectTrigger>
<SelectContent>
<SelectItem value="SAR">SAR</SelectItem>
</SelectContent>
</Select>
</div>
{inputFields.map((field, index) => (
                <div key={index} className="inline-flex flex-col items-start gap-3">
<div className="inline-flex items-center gap-2">
<label className="font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
{field.label}
                    </label>
</div>
<div className="inline-flex items-center gap-1 rounded-md border-[0.5px] border-solid border-[#1e211d]">
<img
                      className="w-12 h-12"
                      alt="Background overlay"
                      src="/figmaAssets/background-overlay-border-overlayblur-8.svg"
                    />
<Input
                      defaultValue={field.value}
                      className="w-[220px] h-12 p-[7.04px] rounded border-none backdrop-blur-[3.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.3px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[0.5px] before:rounded before:[background:linear-gradient(212deg,rgba(255,255,255,0.2)_0%,rgba(49,218,114,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-shadeswhite text-[length:var(--paragraph-p3-semi-bold-font-size)] text-center tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] [font-style:var(--paragraph-p3-semi-bold-font-style)]"
                    />
<img
                      className="w-12 h-12"
                      alt="Background overlay"
                      src="/figmaAssets/background-overlay-border-overlayblur-9.svg"
                    />
</div>
</div>
))}

              <Button 
                variant="outline" 
                className="h-auto px-[18px] py-3 border border-solid border-[#6ae499] bg-transparent hover:bg-transparent"
              >
<span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-secondary-500 text-[length:var(--paragraph-p2-semi-bold-font-size)] leading-[var(--paragraph-p2-semi-bold-line-height)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
Reset
                </span>
<RotateCcwIcon className="w-4 h-4 ml-2" />
</Button>
</div>
</div>
<div className="flex flex-col items-center gap-6 w-full">
<div className="flex flex-col items-center gap-6 w-full">
<h2 className="w-full font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h5-semi-bold-font-size)] tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]">
Now Calculate Your ROI Projection
              </h2>
</div>
<div className="flex items-center justify-between w-full gap-6 flex-wrap lg:flex-nowrap">
<Card className="w-full lg:w-[500px] p-6 rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.3)_100%),radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(106,228,153,0.05)_0%,rgba(106,228,153,0.05)_100%)]">
<CardContent className="p-0 space-y-6">
<div className="flex flex-col items-center gap-3">
<h3 className="w-full font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h5-semi-bold-font-size)] text-center tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]">
CURRENT
                    </h3>
</div>
<div className="flex flex-col items-start gap-12">
<div className="flex flex-col items-start gap-8 w-full">
{currentMetrics.map((metric, index) => (
                        <div key={index} className="flex flex-col items-center gap-5 w-full">
<div className="[font-family:'Sora',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
<span className="leading-[var(--paragraph-p2-regular-line-height)] font-paragraph-p2-regular [font-style:var(--paragraph-p2-regular-font-style)] font-[number:var(--paragraph-p2-regular-font-weight)] tracking-[var(--paragraph-p2-regular-letter-spacing)] text-[length:var(--paragraph-p2-regular-font-size)]">
Your
                            </span>
<span className="text-lg leading-[21.6px]">&nbsp;</span>
<span className="font-[number:var(--paragraph-p2-semi-bold-font-weight)] leading-[var(--paragraph-p2-semi-bold-line-height)] font-paragraph-p2-semi-bold [font-style:var(--paragraph-p2-semi-bold-font-style)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] text-[length:var(--paragraph-p2-semi-bold-font-size)]">
CURRENT
                            </span>
<span className="text-lg leading-[21.6px]">&nbsp;</span>
<span className="leading-[var(--paragraph-p2-regular-line-height)] font-paragraph-p2-regular [font-style:var(--paragraph-p2-regular-font-style)] font-[number:var(--paragraph-p2-regular-font-weight)] tracking-[var(--paragraph-p2-regular-letter-spacing)] text-[length:var(--paragraph-p2-regular-font-size)]">
{metric.label.includes('conversion') ? 'conversion rate' : 'average order value'}
                            </span>
</div>
<div className="flex flex-col items-center justify-center gap-5 w-full">
<div className="w-full h-2 bg-dark-mode300 rounded-[290.91px] relative">
<div className={`relative -top-1.5 ${metric.sliderWidth} h-5`}>
<div className="absolute w-[calc(100%_-_20px)] top-1.5 left-0 h-2 bg-secondary-500 rounded-[290.91px_0px_0px_290.91px]" />
<div className="absolute top-[calc(50.00%_-_10px)] right-[18px] w-5 h-5 bg-secondary-50 rounded-[290.91px]" />
</div>
</div>
<div className="inline-flex items-center gap-1 rounded-md border-[0.5px] border-solid border-[#1e211d]">
<img
                                className="w-12 h-12"
                                alt="Background overlay"
                                src={index === 0 ? "/figmaAssets/background-overlay-border-overlayblur-7.svg" : "/figmaAssets/background-overlay-border-overlayblur-13.svg"}
                              />
<div className="w-[220px] h-12 p-[7.04px] flex items-center justify-center rounded border-none backdrop-blur-[3.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.3px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[0.5px] before:rounded before:[background:linear-gradient(212deg,rgba(255,255,255,0.2)_0%,rgba(49,218,114,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
<span className="font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-shadeswhite text-[length:var(--paragraph-p3-semi-bold-font-size)] text-center tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
{metric.value}
                                </span>
{metric.currency && (
                                  <img
                                    className="w-[14.37px] h-4 ml-2"
                                    alt="Saudi riyal symbol"
                                    src="/figmaAssets/saudi-riyal-symbol-2--1--1.svg"
                                  />
)}
                              </div>
<img
                                className="w-12 h-12"
                                alt="Background overlay"
                                src={index === 0 ? "/figmaAssets/background-overlay-border-overlayblur-5.svg" : "/figmaAssets/background-overlay-border-overlayblur-14.svg"}
                              />
</div>
</div>
</div>
))}
                    </div>
<div className="flex gap-3 w-full">
{currentRevenueCards.map((card, index) => (
                        <Card key={index} className="flex-1 p-5 rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)]">
<CardContent className="p-0 flex flex-col items-center justify-center gap-3">
<p className="font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
{card.title}
                            </p>
<div className="flex items-center justify-center gap-3 w-full">
<span className="font-heading-h6-semi-bold font-[number:var(--heading-h6-semi-bold-font-weight)] text-neutral-200 text-[length:var(--heading-h6-semi-bold-font-size)] text-center tracking-[var(--heading-h6-semi-bold-letter-spacing)] leading-[var(--heading-h6-semi-bold-line-height)] whitespace-nowrap [font-style:var(--heading-h6-semi-bold-font-style)]">
{card.value}
                              </span>
{card.currency && (
                                <img
                                  className="w-[18.13px] h-[20.18px]"
                                  alt="Saudi riyal symbol"
                                  src="/figmaAssets/saudi-riyal-symbol-2--1--1-1.svg"
                                />
)}
                            </div>
</CardContent>
</Card>
))}
                    </div>
</div>
</CardContent>
</Card>
<div className="flex items-center justify-center w-12 h-12 p-[7.04px] rounded border-none backdrop-blur-[3.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.3px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(106,228,153,1)_0%,rgba(106,228,153,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[0.5px] before:rounded before:[background:linear-gradient(212deg,rgba(255,255,255,0.2)_0%,rgba(49,218,114,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
<ArrowLeftRightIcon className="w-6 h-6" />
</div>
<Card className="w-full lg:w-[500px] p-6 rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.3)_100%),radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(106,228,153,0.05)_0%,rgba(106,228,153,0.05)_100%)]">
<CardContent className="p-0 space-y-6">
<div className="flex flex-col items-center gap-3">
<h3 className="w-full font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h5-semi-bold-font-size)] text-center tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]">
NEW
                    </h3>
</div>
<div className="flex flex-col items-start gap-12">
<div className="flex flex-col items-start gap-8 w-full">
{newMetrics.map((metric, index) => (
                        <div key={index} className="flex flex-col items-center gap-5 w-full">
<div className="[font-family:'Sora',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
<span className="leading-[var(--paragraph-p2-regular-line-height)] font-paragraph-p2-regular [font-style:var(--paragraph-p2-regular-font-style)] font-[number:var(--paragraph-p2-regular-font-weight)] tracking-[var(--paragraph-p2-regular-letter-spacing)] text-[length:var(--paragraph-p2-regular-font-size)]">
Your
                            </span>
<span className="text-lg leading-[21.6px]">&nbsp;</span>
<span className="font-[number:var(--paragraph-p2-semi-bold-font-weight)] leading-[var(--paragraph-p2-semi-bold-line-height)] font-paragraph-p2-semi-bold [font-style:var(--paragraph-p2-semi-bold-font-style)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] text-[length:var(--paragraph-p2-semi-bold-font-size)]">
NEW
                            </span>
<span className="text-lg leading-[21.6px]">&nbsp;</span>
<span className="leading-[var(--paragraph-p2-regular-line-height)] font-paragraph-p2-regular [font-style:var(--paragraph-p2-regular-font-style)] font-[number:var(--paragraph-p2-regular-font-weight)] tracking-[var(--paragraph-p2-regular-letter-spacing)] text-[length:var(--paragraph-p2-regular-font-size)]">
{metric.label.includes('conversion') ? 'conversion rate' : 'average order value'}
                            </span>
</div>
<div className="flex flex-col items-center justify-center gap-5 w-full">
<div className="w-full h-2 bg-dark-mode300 rounded-[290.91px] relative">
<div className={`relative -top-1.5 ${metric.sliderWidth} h-5`}>
<div className="absolute w-[calc(100%_-_20px)] top-1.5 left-0 h-2 bg-secondary-500 rounded-[290.91px_0px_0px_290.91px]" />
<div className="absolute top-[calc(50.00%_-_10px)] right-[18px] w-5 h-5 bg-secondary-50 rounded-[290.91px]" />
</div>
</div>
<div className="inline-flex items-center gap-1 rounded-md border-[0.5px] border-solid border-[#1e211d]">
<img
                                className="w-12 h-12"
                                alt="Background overlay"
                                src={index === 0 ? "/figmaAssets/background-overlay-border-overlayblur-6.svg" : "/figmaAssets/background-overlay-border-overlayblur-12.svg"}
                              />
<div className="w-[220px] h-12 p-[7.04px] flex items-center justify-center rounded border-none backdrop-blur-[3.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.3px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[0.5px] before:rounded before:[background:linear-gradient(212deg,rgba(255,255,255,0.2)_0%,rgba(49,218,114,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
<span className="font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-shadeswhite text-[length:var(--paragraph-p3-semi-bold-font-size)] text-center tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
{metric.value}
                                </span>
{metric.currency && (
                                  <img
                                    className="w-[14.37px] h-4 ml-2"
                                    alt="Saudi riyal symbol"
                                    src="/figmaAssets/saudi-riyal-symbol-2--1--1.svg"
                                  />
)}
                              </div>
<img
                                className="w-12 h-12"
                                alt="Background overlay"
                                src={index === 0 ? "/figmaAssets/background-overlay-border-overlayblur-10.svg" : "/figmaAssets/background-overlay-border-overlayblur-11.svg"}
                              />
</div>
</div>
</div>
))}
                    </div>
<div className="flex flex-col gap-3 w-full">
<div className="flex gap-3 w-full">
{newRevenueCards.map((card, index) => (
                          <Card key={index} className="flex-1 p-5 rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)]">
<CardContent className="p-0 flex flex-col items-center justify-center gap-3">
<p className="font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
{card.title}
                              </p>
<div className="flex items-center justify-center gap-3 w-full">
<span className={`font-heading-h6-semi-bold font-[number:var(--heading-h6-semi-bold-font-weight)] ${card.textColor || 'text-neutral-200'} text-[length:var(--heading-h6-semi-bold-font-size)] text-center tracking-[var(--heading-h6-semi-bold-letter-spacing)] leading-[var(--heading-h6-semi-bold-line-height)] whitespace-nowrap [font-style:var(--heading-h6-semi-bold-font-style)]`}>
{card.value}
                                </span>
{card.currency && (
                                  <img
                                    className="w-[18.13px] h-[20.18px]"
                                    alt="Saudi riyal symbol"
                                    src="/figmaAssets/saudi-riyal-symbol-2--1--1-1.svg"
                                  />
)}
                              </div>
</CardContent>
</Card>
))}
                      </div>
<div className="flex flex-col w-full gap-3">
<div className="flex gap-3 w-full">
{additionalMetrics.map((metric, index) => (
                            <Card key={index} className="flex-1 p-5 rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)]">
<CardContent className="p-0 flex flex-col items-center justify-center gap-3">
<p className="font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
{metric.title.includes('Additional') ? (
                                    <>
Additional Revenue <br />/ Month
                                    </>
) : (
                                    <>
% Increase in <br />
Revenue
                                    </>
)}
                                </p>
<div className="flex items-center justify-center gap-3 w-full">
<span className={`font-heading-h6-semi-bold font-[number:var(--heading-h6-semi-bold-font-weight)] ${metric.textColor} text-[length:var(--heading-h6-semi-bold-font-size)] text-center tracking-[var(--heading-h6-semi-bold-letter-spacing)] leading-[var(--heading-h6-semi-bold-line-height)] whitespace-nowrap [font-style:var(--heading-h6-semi-bold-font-style)]`}>
{metric.value}
                                  </span>
{metric.currency && (
                                    <img
                                      className="w-[18.13px] h-[20.18px]"
                                      alt="Saudi riyal symbol"
                                      src="/figmaAssets/saudi-riyal-symbol-2--1--1-1.svg"
                                    />
)}
                                </div>
</CardContent>
</Card>
))}
                        </div>
<Card className="w-full p-5 rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)]">
<CardContent className="p-0 flex flex-col items-center justify-center gap-3">
<p className="font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
New number of conversions / Month
                            </p>
<div className="flex items-center justify-center gap-3 w-full">
<span className="font-heading-h6-semi-bold font-[number:var(--heading-h6-semi-bold-font-weight)] text-secondary-500 text-[length:var(--heading-h6-semi-bold-font-size)] text-center tracking-[var(--heading-h6-semi-bold-letter-spacing)] leading-[var(--heading-h6-semi-bold-line-height)] whitespace-nowrap [font-style:var(--heading-h6-semi-bold-font-style)]">
150
                              </span>
</div>
</CardContent>
</Card>
</div>
</div>
</div>
</CardContent>
</Card>
</div>
</div>
</div>
</div>
</section>
);
};