import React, { useState, useMemo } from "react";
import svgPaths from "./svg-tq22mvqhgg";
import imgRoiCalculator from "../assets/5522a305e991d2984d5522a9865ed717796014a0.png";

const defaultValues = {
  currency: "SAR",
  monthlyUsers: 12000,
  currentCR: 2.5,
  currentAOV: 260,
  newCR: 3.5,
  newAOV: 280,
};

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center lg:items-start relative shrink-0 w-full px-4 lg:px-0 text-center lg:text-left">
      <p className="bg-center bg-clip-text bg-cover bg-no-repeat css-4hzbpn font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.2] lg:leading-[84.026px] min-w-full relative shrink-0 text-[40px] lg:text-[72.022px] tracking-[-2.8809px] w-full" style={{ WebkitTextFillColor: "transparent", backgroundImage: `url('${imgRoiCalculator}')` }}>
        ROI Calculator
      </p>
      <p className="css-4hzbpn font-['Sora:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] lg:text-[20px] text-[rgba(255,255,255,0.8)] w-full max-w-[980px]">See the real impact CRO can have on your business. Enter just a few numbers and instantly discover what a 10–40% lift in conversions could mean for your monthly revenue.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <ol className="block css-7ll8x1 font-['Sora:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[23px] text-white tracking-[-0.46px] w-full" start={1}>
        <li className="css-4hzbpn ms-[34.5px]">
          <span className="leading-[28px]">{`Start  Entering Your Data`}</span>
        </li>
      </ol>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Sora:Regular',sans-serif] font-normal leading-[21.6px] relative shrink-0 text-[18px] text-white">Currency</p>
    </div>
  );
}

function OutlineArrowsAltArrowRight() {
  return (
    <div className="relative size-[24px]" data-name="Outline / Arrows / Alt Arrow Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Outline / Arrows / Alt Arrow Right">
          <path clipRule="evenodd" d={svgPaths.p2aeb7980} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Frame13({ currency, onCurrencyChange }: { currency: string; onCurrencyChange: (v: string) => void }) {
  return (
    <div className="backdrop-blur-[3.3px] h-[48px] relative rounded-[8px] shrink-0 w-[324px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 324 48\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(23.283 0 0 2.4 162 0)\\\'><stop stop-color=\\\'rgba(168,127,255,0.04)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(168,127,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)" }}>
      <div className="content-stretch flex items-center justify-between overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        >
          <option value="SAR">SAR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        <div className="css-g0mm18 flex flex-col font-['Sora:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white">
          <p className="css-ew64yg leading-[21.6px]">{currency}</p>
        </div>
        <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <OutlineArrowsAltArrowRight />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame18({ currency, onCurrencyChange }: { currency: string; onCurrencyChange: (v: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Frame37 />
      <Frame13 currency={currency} onCurrencyChange={onCurrencyChange} />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Sora:Regular',sans-serif] font-normal leading-[21.6px] relative shrink-0 text-[18px] text-white">Monthly Website Users</p>
    </div>
  );
}

function LinearArrowsAltArrowDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Linear / Arrows / Alt Arrow Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Linear / Arrows / Alt Arrow Down">
          <path d={svgPaths.p1c9c30f0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundOverlayBorderOverlayBlur({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="cursor-pointer backdrop-blur-[3.3px] content-stretch flex flex-col h-[48px] items-center justify-center p-[7.04px] relative rounded-[8px] shrink-0 w-[64px]" data-name="Background+Overlay+Border+OverlayBlur" style={{ backgroundImage: "linear-gradient(90deg, rgba(106, 228, 153, 0.2) 0%, rgba(106, 228, 153, 0.2) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 64 48\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(4.599 0 0 2.4 32 0)\\\'><stop stop-color=\\\'rgba(168,127,255,0.04)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(168,127,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <LinearArrowsAltArrowDown />
    </div>
  );
}


function Frame14({ value, onChange }: { value: number; onChange: (val: number) => void }) {
  return (
    <div className="backdrop-blur-[3.3px] h-[48px] relative rounded-[8px] shrink-0 w-[220px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 220 48\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(15.809 0 0 2.4 110 0)\\\'><stop stop-color=\\\'rgba(168,127,255,0.04)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(168,127,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)" }}>
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[7.04px] relative rounded-[inherit] size-full">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value) || 0)}
          className="absolute inset-0 w-full h-full bg-transparent text-center text-white font-['Sora'] font-semibold text-[18px] focus:outline-none z-10"
        />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LinearArrowsAltArrowDown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Linear / Arrows / Alt Arrow Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Linear / Arrows / Alt Arrow Down">
          <path d={svgPaths.p35067c70} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundOverlayBorderOverlayBlur1({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="cursor-pointer backdrop-blur-[3.3px] content-stretch flex flex-col h-[48px] items-center justify-center p-[7.04px] relative rounded-[8px] shrink-0 w-[64px]" data-name="Background+Overlay+Border+OverlayBlur" style={{ backgroundImage: "linear-gradient(90deg, rgba(106, 228, 153, 0.2) 0%, rgba(106, 228, 153, 0.2) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 64 48\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(4.599 0 0 2.4 32 0)\\\'><stop stop-color=\\\'rgba(168,127,255,0.04)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(168,127,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <LinearArrowsAltArrowDown1 />
    </div>
  );
}

function Frame16({ value, onChange }: { value: number; onChange: (val: number) => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#1e211d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <BackgroundOverlayBorderOverlayBlur onClick={() => onChange(Math.max(0, value - 500))} />
      <Frame14 value={value} onChange={onChange} />
      <BackgroundOverlayBorderOverlayBlur1 onClick={() => onChange(value + 500)} />
    </div>
  );
}

function Frame19({ monthlyUsers, onMonthlyUsersChange }: { monthlyUsers: number; onMonthlyUsersChange: (v: number) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Frame39 />
      <Frame16 value={monthlyUsers} onChange={onMonthlyUsersChange} />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_9639)" id="Icon">
          <path d={svgPaths.pdf85900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p211a3d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p39c42de0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_9639">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DivBtnLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pr-[0.5px] relative shrink-0" data-name="div.btn-label">
      <div className="css-g0mm18 flex flex-col font-['Sora:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white">
        <p className="css-ew64yg leading-[19px]">Reset</p>
      </div>
      <Icon />
    </div>
  );
}

function Link({ onReset }: { onReset: () => void }) {
  return (
    <div onClick={onReset} className="cursor-pointer bg-[#020601] h-[48px] relative rounded-[100px] shrink-0" data-name="Link">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[28px] py-[12px] relative rounded-[inherit]">
        <DivBtnLabel />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_30px_0px_rgba(106,228,153,0.6)]" />
      <div aria-hidden="true" className="absolute border border-[#6ae499] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame38({ currency, onCurrencyChange, monthlyUsers, onMonthlyUsersChange, onReset }: any) {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full">
      <Frame18 currency={currency} onCurrencyChange={onCurrencyChange} />
      <Frame19 monthlyUsers={monthlyUsers} onMonthlyUsersChange={onMonthlyUsersChange} />
      <Link onReset={onReset} />
    </div>
  );
}

function Frame3({ currency, onCurrencyChange, monthlyUsers, onMonthlyUsersChange, onReset }: any) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame1 />
      <Frame38
        currency={currency}
        onCurrencyChange={onCurrencyChange}
        monthlyUsers={monthlyUsers}
        onMonthlyUsersChange={onMonthlyUsersChange}
        onReset={onReset}
      />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <ol className="block css-7ll8x1 font-['Sora:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[23px] text-white tracking-[-0.46px] w-full" start={2}>
        <li className="css-4hzbpn ms-[34.5px]">
          <span className="leading-[28px]">Now Calculate Your ROI Projection</span>
        </li>
      </ol>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Sora:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[23px] text-center text-white tracking-[-0.46px] w-full">CURRENT</p>
    </div>
  );
}

function Progress() {
  return <div className="absolute bg-gradient-to-r from-[#494e55] h-[8px] left-0 right-[20px] rounded-bl-[290.909px] rounded-tl-[290.909px] to-[#5f82bf] top-[6px]" data-name="Progress" />;
}

function Handle() {
  return <div className="absolute bg-[#f5fdf8] right-[18px] rounded-[290.909px] size-[20px] top-1/2 translate-y-[-50%]" data-name="Handle" />;
}

function SliderBar({ value, max }: { value: number; max: number }) {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className="absolute h-[20px] left-0 top-[-6px] w-full pointer-events-none" data-name="Slider Bar">
      <div className="absolute bg-gradient-to-r from-[#494e55] h-[8px] rounded-bl-[290.909px] rounded-tl-[290.909px] to-[#5f82bf] top-[6px]" style={{ width: `${percentage}%` }} />
      <div className="absolute bg-[#f5fdf8] rounded-[290.909px] size-[20px] top-1/2 translate-y-[1%]" style={{ left: `${percentage}%`, transform: 'translate(-50%, -65%)' }} />
    </div>
  );
}


function Slider({ value, onValueChange, max = 10, step = 0.1 }: { value: number; onValueChange: (v: number) => void; max?: number; step?: number }) {
  return (
    <div className="bg-[#282b27] h-[8px] relative rounded-[290.909px] shrink-0 w-full" data-name="Slider">
      <input
        type="range"
        min="0"
        max={max}
        step={step}
        value={value}
        onChange={(e) => onValueChange(parseFloat(e.target.value))}
        className="absolute -top-[6px] h-[20px] w-full opacity-0 cursor-pointer z-10"
      />
      <SliderBar value={value} max={max} />
    </div>
  );
}

function LinearArrowsAltArrowDown2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Linear / Arrows / Alt Arrow Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Linear / Arrows / Alt Arrow Down">
          <path d={svgPaths.p1c9c30f0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundOverlayBorderOverlayBlur2({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="cursor-pointer backdrop-blur-[3.3px] content-stretch flex flex-col h-[48px] items-center justify-center p-[7.04px] relative rounded-[8px] shrink-0 w-[64px]" data-name="Background+Overlay+Border+OverlayBlur" style={{ backgroundImage: "linear-gradient(90deg, rgba(95, 130, 191, 0.2) 0%, rgba(95, 130, 191, 0.2) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 64 48\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(4.599 0 0 2.4 32 0)\\\'><stop stop-color=\\\'rgba(168,127,255,0.04)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(168,127,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <LinearArrowsAltArrowDown2 />
    </div>
  );
}

function Frame17({ value, onChange }: { value: number; onChange: (val: number) => void }) {
  return (
    <div className="backdrop-blur-[3.3px] h-[48px] relative rounded-[8px] shrink-0 w-[220px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 220 48\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(15.809 0 0 2.4 110 0)\\\'><stop stop-color=\\\'rgba(168,127,255,0.04)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(168,127,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)" }}>
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[7.04px] relative rounded-[inherit] size-full">
        <input
          type="number"
          step="0.1"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="absolute inset-0 w-full h-full bg-transparent text-center text-white font-['Sora'] font-semibold text-[18px] focus:outline-none z-10"
        />
        <div className="css-g0mm18 flex flex-col font-['Sora:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white pointer-events-none">
          <p className="css-ew64yg leading-[21.6px]">{value}%</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LinearArrowsAltArrowDown3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Linear / Arrows / Alt Arrow Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Linear / Arrows / Alt Arrow Down">
          <path d={svgPaths.p35067c70} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundOverlayBorderOverlayBlur3({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="cursor-pointer backdrop-blur-[3.3px] content-stretch flex flex-col h-[48px] items-center justify-center p-[7.04px] relative rounded-[8px] shrink-0 w-[64px]" data-name="Background+Overlay+Border+OverlayBlur" style={{ backgroundImage: "linear-gradient(90deg, rgba(95, 130, 191, 0.2) 0%, rgba(95, 130, 191, 0.2) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 64 48\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(4.599 0 0 2.4 32 0)\\\'><stop stop-color=\\\'rgba(168,127,255,0.04)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(168,127,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <LinearArrowsAltArrowDown3 />
    </div>
  );
}

function Frame20({ value, onChange }: { value: number; onChange: (val: number) => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#1e211d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <BackgroundOverlayBorderOverlayBlur2 onClick={() => onChange(parseFloat((Math.max(0, value - 0.1)).toFixed(1)))} />
      <Frame17 value={value} onChange={onChange} />
      <BackgroundOverlayBorderOverlayBlur3 onClick={() => onChange(parseFloat((value + 0.1).toFixed(1)))} />
    </div>
  );
}

function Frame15({ value, onValueChange }: { value: number; onValueChange: (v: number) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Slider value={value} onValueChange={onValueChange} max={10} step={0.1} />
      <Frame20 value={value} onChange={onValueChange} />
    </div>
  );
}

function Frame21({ value, onValueChange }: { value: number; onValueChange: (v: number) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Sora:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-center text-white w-full">
        <span className="leading-[19px] text-[16px]">Your</span>
        <span className="leading-[21.6px] text-[18px]"> </span>
        <span className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[19px] text-[16px]">CURRENT</span>
        <span className="leading-[21.6px] text-[18px]"> </span>
        <span className="leading-[19px] text-[16px]">conversion rate</span>
      </p>
      <Frame15 value={value} onValueChange={onValueChange} />
    </div>
  );
}

function Progress1() {
  return <div className="absolute bg-gradient-to-r from-[#494e55] h-[8px] left-0 right-[20px] rounded-bl-[290.909px] rounded-tl-[290.909px] to-[#5f82bf] top-[6px]" data-name="Progress" />;
}

function Handle1() {
  return <div className="absolute bg-[#f5fdf8] right-[18px] rounded-[290.909px] size-[20px] top-1/2 translate-y-[-50%]" data-name="Handle" />;
}

function SliderBar1({ value, max }: { value: number; max: number }) {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className="absolute h-[20px] left-0 top-[-6px] w-full pointer-events-none" data-name="Slider Bar">
      <div className="absolute bg-gradient-to-r from-[#494e55] h-[8px] rounded-bl-[290.909px] rounded-tl-[290.909px] to-[#5f82bf] top-[6px]" style={{ width: `${percentage}%` }} />
      <div className="absolute bg-[#f5fdf8] rounded-[290.909px] size-[20px] top-1/2 translate-y-[1%]" style={{ left: `${percentage}%`, transform: 'translate(-50%, -65%)' }} />
    </div>
  );
}

function Slider1({ value, onValueChange, max = 500, step = 10 }: { value: number; onValueChange: (v: number) => void; max?: number; step?: number }) {
  return (
    <div className="bg-[#282b27] h-[8px] relative rounded-[290.909px] shrink-0 w-full" data-name="Slider">
      <input
        type="range"
        min="0"
        max={max}
        step={step}
        value={value}
        onChange={(e) => onValueChange(parseFloat(e.target.value))}
        className="absolute -top-[6px] h-[20px] w-full opacity-0 cursor-pointer z-10"
      />
      <SliderBar1 value={value} max={max} />
    </div>
  );
}

function LinearArrowsAltArrowDown4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Linear / Arrows / Alt Arrow Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Linear / Arrows / Alt Arrow Down">
          <path d={svgPaths.p1c9c30f0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundOverlayBorderOverlayBlur4({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="cursor-pointer backdrop-blur-[3.3px] content-stretch flex flex-col h-[48px] items-center justify-center p-[7.04px] relative rounded-[8px] shrink-0 w-[64px]" data-name="Background+Overlay+Border+OverlayBlur" style={{ backgroundImage: "linear-gradient(90deg, rgba(95, 130, 191, 0.2) 0%, rgba(95, 130, 191, 0.2) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 64 48\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(4.599 0 0 2.4 32 0)\\\'><stop stop-color=\\\'rgba(168,127,255,0.04)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(168,127,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <LinearArrowsAltArrowDown4 />
    </div>
  );
}

function SaudiRiyalSymbol() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14.373px]" data-name="Saudi_Riyal_Symbol-2 (1) 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3729 16">
        <g clipPath="url(#clip0_1_9635)" id="Saudi_Riyal_Symbol-2 (1) 1">
          <path d={svgPaths.p488a100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p122d0170} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_9635">
            <rect fill="white" height="16" width="14.3729" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame22({ value, currency }: { value: number, currency: string }) {
  return (
    <div className="backdrop-blur-[3.3px] h-[48px] relative rounded-[8px] shrink-0 w-[220px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 220 48\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(15.809 0 0 2.4 110 0)\\\'><stop stop-color=\\\'rgba(168,127,255,0.04)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(168,127,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)" }}>
      <div className="content-stretch flex gap-[7.04px] items-center justify-center overflow-clip p-[7.04px] relative rounded-[inherit] size-full">
        <div className="css-g0mm18 flex flex-col font-['Sora:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white">
          <p className="css-ew64yg leading-[21.6px]">{value}</p>
        </div>
        {currency === "SAR" ? <SaudiRiyalSymbol /> : <span className="text-white font-semibold">{currency}</span>}
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LinearArrowsAltArrowDown5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Linear / Arrows / Alt Arrow Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Linear / Arrows / Alt Arrow Down">
          <path d={svgPaths.p35067c70} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundOverlayBorderOverlayBlur5({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="cursor-pointer backdrop-blur-[3.3px] content-stretch flex flex-col h-[48px] items-center justify-center p-[7.04px] relative rounded-[8px] shrink-0 w-[64px]" data-name="Background+Overlay+Border+OverlayBlur" style={{ backgroundImage: "linear-gradient(90deg, rgba(95, 130, 191, 0.2) 0%, rgba(95, 130, 191, 0.2) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 64 48\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(4.599 0 0 2.4 32 0)\\\'><stop stop-color=\\\'rgba(168,127,255,0.04)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(168,127,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <LinearArrowsAltArrowDown5 />
    </div>
  );
}

function Frame23({ value, onChange, currency }: { value: number; onChange: (val: number) => void; currency: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#1e211d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <BackgroundOverlayBorderOverlayBlur4 onClick={() => onChange(Math.max(0, value - 10))} />
      <Frame22 value={value} currency={currency} />
      <BackgroundOverlayBorderOverlayBlur5 onClick={() => onChange(value + 10)} />
    </div>
  );
}

function Frame24({ value, onValueChange, currency }: { value: number; onValueChange: (v: number) => void; currency: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
      <Slider1 value={value} onValueChange={onValueChange} max={500} step={10} />
      <Frame23 value={value} onChange={onValueChange} currency={currency} />
    </div>
  );
}

function Frame25({ value, onValueChange, currency }: { value: number; onValueChange: (v: number) => void; currency: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Sora:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-center text-white w-full">
        <span className="leading-[19px] text-[16px]">Your</span>
        <span className="leading-[21.6px] text-[18px]"> </span>
        <span className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[19px] text-[16px]">CURRENT</span>
        <span className="leading-[21.6px] text-[18px]"> </span>
        <span className="leading-[19px] text-[16px]">average order value</span>
      </p>
      <Frame24 value={value} onValueChange={onValueChange} currency={currency} />
    </div>
  );
}

function Frame32({ currentCR, onCurrentCRChange, currentAOV, onCurrentAOVChange, currency }: any) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame21 value={currentCR} onValueChange={onCurrentCRChange} />
      <Frame25 value={currentAOV} onValueChange={onCurrentAOVChange} currency={currency} />
    </div>
  );
}

// ... Continuation in next chunk ...// appending part 2 logic

function Frame29({ value, onValueChange }: { value: number; onValueChange: (v: number) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Sora:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-center text-white w-full">
        <span className="leading-[19px] text-[16px]">Your</span>
        <span className="leading-[21.6px] text-[18px]"> </span>
        <span className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[19px] text-[16px]">NEW</span>
        <span className="leading-[21.6px] text-[18px]"> </span>
        <span className="leading-[19px] text-[16px]">conversion rate</span>
      </p >
      <Frame15 value={value} onValueChange={onValueChange} />
    </div >
  );
}

function Frame42({ value, onValueChange, currency }: { value: number; onValueChange: (v: number) => void; currency: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Sora:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-center text-white w-full">
        <span className="leading-[19px] text-[16px]">Your</span>
        <span className="leading-[21.6px] text-[18px]"> </span>
        <span className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[19px] text-[16px]">NEW</span>
        <span className="leading-[21.6px] text-[18px]"> </span>
        <span className="leading-[19px] text-[16px]">average order value</span>
      </p>
      <Frame24 value={value} onValueChange={onValueChange} currency={currency} />
    </div>
  );
}

function Frame33({ newCR, onNewCRChange, newAOV, onNewAOVChange, currency }: any) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame29 value={newCR} onValueChange={onNewCRChange} />
      <Frame42 value={newAOV} onValueChange={onNewAOVChange} currency={currency} />
    </div>
  );
}

function SaudiRiyalSymbol2() {
  return (
    <div className="h-[20.182px] relative shrink-0 w-[18.129px]" data-name="Saudi_Riyal_Symbol-2 (1) 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1294 20.1818">
        <g clipPath="url(#clip0_1_9629)" id="Saudi_Riyal_Symbol-2 (1) 1">
          <path d={svgPaths.p18609a00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1c43a480} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_9629">
            <rect fill="white" height="20.1818" width="18.1294" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9({ value, currency }: { value: number; currency: string }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <p className="css-ew64yg font-['Sora:SemiBold',sans-serif] font-semibold leading-[23px] relative shrink-0 text-[#87a2cf] text-[19px] text-center tracking-[-0.38px]">{value.toLocaleString()}</p>
      {currency === "SAR" ? <SaudiRiyalSymbol2 /> : <span className="text-[#87a2cf] font-semibold text-[19px]">{currency}</span>}
    </div >
  );
}

function BackgroundOverlayBorderOverlayBlur6({ value, currency }: { value: number; currency: string }) {
  return (
    <div className="backdrop-blur-[7.5px] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Background+Overlay+Border+OverlayBlur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\"0 0 220 92\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" preserveAspectRatio=\\\"none\\\"><rect x=\\\"0\\\" y=\\\"0\\\" height=\\\"100%\\\" width=\\\"100%\\\" fill=\\\"url(%23grad)\\\" opacity=\\\"1\\\"/><defs><radialGradient id=\\\"grad\\\" gradientUnits=\\\"userSpaceOnUse\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"10\\\" gradientTransform=\\\"matrix(15.809 0 0 4.6 110 0)\\\"><stop stop-color=\\\"rgba(168,127,255,0.04)\\\" offset=\\\"0\\\"/><stop stop-color=\\\"rgba(168,127,255,0)\\\" offset=\\\"1\\\"/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(135,162,207,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center p-[20px] relative w-full">
          <p className="css-4hzbpn font-['Sora:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[14px] text-center text-white w-full">Current Monthly Revenue</p>
          <Frame9 value={value} currency={currency} />
        </div>
      </div>
    </div>
  );
}

function Frame10({ value, currency }: { value: number; currency: string }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <p className="css-ew64yg font-['Sora:SemiBold',sans-serif] font-semibold leading-[23px] relative shrink-0 text-[#87a2cf] text-[19px] text-center tracking-[-0.38px]">{value.toLocaleString()}</p>
      {currency === "SAR" ? <SaudiRiyalSymbol2 /> : <span className="text-[#87a2cf] font-semibold text-[19px]">{currency}</span>}
    </div>
  );
}


function BackgroundOverlayBorderOverlayBlur7({ value, currency }: { value: number; currency: string }) {
  return (
    <div className="backdrop-blur-[7.5px] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Background+Overlay+Border+OverlayBlur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\"0 0 220 92\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" preserveAspectRatio=\\\"none\\\"><rect x=\\\"0\\\" y=\\\"0\\\" height=\\\"100%\\\" width=\\\"100%\\\" fill=\\\"url(%23grad)\\\" opacity=\\\"1\\\"/><defs><radialGradient id=\\\"grad\\\" gradientUnits=\\\"userSpaceOnUse\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"10\\\" gradientTransform=\\\"matrix(15.809 0 0 4.6 110 0)\\\"><stop stop-color=\\\"rgba(168,127,255,0.04)\\\" offset=\\\"0\\\"/><stop stop-color=\\\"rgba(168,127,255,0)\\\" offset=\\\"1\\\"/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(135,162,207,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center p-[20px] relative w-full">
          <p className="css-4hzbpn font-['Sora:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[14px] text-center text-white w-full">Current Annual Revenue</p>
          <Frame10 value={value} currency={currency} />
        </div>
      </div>
    </div>
  );
}

function Frame4({ results, currency }: any) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <BackgroundOverlayBorderOverlayBlur6 value={results.currentMonthlyRevenue} currency={currency} />
      <BackgroundOverlayBorderOverlayBlur7 value={results.currentAnnualRevenue} currency={currency} />
    </div>
  );
}

function Frame48({ results, currency, currentCR, onCurrentCRChange, currentAOV, onCurrentAOVChange }: any) {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
      <Frame32
        currentCR={currentCR} onCurrentCRChange={onCurrentCRChange}
        currentAOV={currentAOV} onCurrentAOVChange={onCurrentAOVChange}
        currency={currency}
      />
      <Frame4 results={results} currency={currency} />
    </div>
  );
}

function BackgroundOverlayBorderOverlayBlur8(props: any) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-center p-[24px] relative rounded-[16px] shrink-0 w-full max-w-[500px]" data-name="Background+Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[#505050] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame7 />
      <Frame48 {...props} />
    </div>
  );
}

function LinearArrowsTransferHorizontal() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Linear / Arrows / Transfer Horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Linear / Arrows / Transfer Horizontal">
          <path d="M20 10L4 10L9.5 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.5" />
          <path d="M4 14L20 14L14.5 20" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundOverlayBorderOverlayBlur9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[7.04px] relative rounded-[8px] shrink-0 size-[48px]" data-name="Background+Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <LinearArrowsTransferHorizontal />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[408px]">
      <p className="css-4hzbpn font-['Sora:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[23px] text-center text-white tracking-[-0.46px] w-full">NEW</p>
    </div>
  );
}

function Frame11({ value, currency }: { value: number; currency: string }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <p className="css-ew64yg font-['Sora:SemiBold',sans-serif] font-semibold leading-[23px] relative shrink-0 text-[#6ae499] text-[19px] text-center tracking-[-0.38px]">{value.toLocaleString()}</p>
      {currency === "SAR" ? <SaudiRiyalSymbol2 /> : <span className="text-[#6ae499] font-semibold text-[19px]">{currency}</span>}
    </div >
  );
}

function BackgroundOverlayBorderOverlayBlur14({ value, currency }: { value: number; currency: string }) {
  return (
    <div className="backdrop-blur-[7.5px] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Background+Overlay+Border+OverlayBlur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\"0 0 220 92\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" preserveAspectRatio=\\\"none\\\"><rect x=\\\"0\\\" y=\\\"0\\\" height=\\\"100%\\\" width=\\\"100%\\\" fill=\\\"url(%23grad)\\\" opacity=\\\"1\\\"/><defs><radialGradient id=\\\"grad\\\" gradientUnits=\\\"userSpaceOnUse\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"10\\\" gradientTransform=\\\"matrix(15.809 0 0 4.6 110 0)\\\"><stop stop-color=\\\"rgba(168,127,255,0.04)\\\" offset=\\\"0\\\"/><stop stop-color=\\\"rgba(168,127,255,0)\\\" offset=\\\"1\\\"/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(106,228,153,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center p-[20px] relative w-full">
          <p className="css-4hzbpn font-['Sora:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[14px] text-center text-white w-full">New Monthly Revenue</p>
          <Frame11 value={value} currency={currency} />
        </div>
      </div>
    </div>
  );
}

function Frame12({ value, currency }: { value: number; currency: string }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <p className="css-ew64yg font-['Sora:SemiBold',sans-serif] font-semibold leading-[23px] relative shrink-0 text-[#6ae499] text-[19px] text-center tracking-[-0.38px]">{value.toLocaleString()}</p>
      {currency === "SAR" ? <SaudiRiyalSymbol2 /> : <span className="text-[#6ae499] font-semibold text-[19px]">{currency}</span>}
    </div >
  );
}


function BackgroundOverlayBorderOverlayBlur15({ value, currency }: { value: number; currency: string }) {
  return (
    <div className="backdrop-blur-[7.5px] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Background+Overlay+Border+OverlayBlur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\"0 0 220 92\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" preserveAspectRatio=\\\"none\\\"><rect x=\\\"0\\\" y=\\\"0\\\" height=\\\"100%\\\" width=\\\"100%\\\" fill=\\\"url(%23grad)\\\" opacity=\\\"1\\\"/><defs><radialGradient id=\\\"grad\\\" gradientUnits=\\\"userSpaceOnUse\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"10\\\" gradientTransform=\\\"matrix(15.809 0 0 4.6 110 0)\\\"><stop stop-color=\\\"rgba(168,127,255,0.04)\\\" offset=\\\"0\\\"/><stop stop-color=\\\"rgba(168,127,255,0)\\\" offset=\\\"1\\\"/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(106,228,153,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center p-[20px] relative w-full">
          <p className="css-4hzbpn font-['Sora:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[14px] text-center text-white w-full">New Annual Revenue</p>
          <Frame12 value={value} currency={currency} />
        </div>
      </div>
    </div>
  );
}

function Frame5({ results, currency }: any) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <BackgroundOverlayBorderOverlayBlur14 value={results.newMonthlyRevenue} currency={currency} />
      <BackgroundOverlayBorderOverlayBlur15 value={results.newAnnualRevenue} currency={currency} />
    </div>
  );
}

function Frame43({ value, currency }: { value: number; currency: string }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <p className="css-ew64yg font-['Sora:SemiBold',sans-serif] font-semibold leading-[23px] relative shrink-0 text-[#6ae499] text-[19px] text-center tracking-[-0.38px]">+{value.toLocaleString()}</p>
      {currency === "SAR" ? <SaudiRiyalSymbol2 /> : <span className="text-[#6ae499] font-semibold text-[19px]">{currency}</span>}
    </div>
  );
}

function BackgroundOverlayBorderOverlayBlur16({ value, currency }: { value: number; currency: string }) {
  return (
    <div className="backdrop-blur-[7.5px] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Background+Overlay+Border+OverlayBlur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\"0 0 220 109\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" preserveAspectRatio=\\\"none\\\"><rect x=\\\"0\\\" y=\\\"0\\\" height=\\\"100%\\\" width=\\\"100%\\\" fill=\\\"url(%23grad)\\\" opacity=\\\"1\\\"/><defs><radialGradient id=\\\"grad\\\" gradientUnits=\\\"userSpaceOnUse\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"10\\\" gradientTransform=\\\"matrix(15.809 0 0 5.45 110 0)\\\"><stop stop-color=\\\"rgba(168,127,255,0.04)\\\" offset=\\\"0\\\"/><stop stop-color=\\\"rgba(168,127,255,0)\\\" offset=\\\"1\\\"/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(106,228,153,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center p-[20px] relative w-full">
          <div className="font-['Sora:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[14px] text-center text-white w-full">
            <p className="css-4hzbpn mb-0">{`Additional Revenue `}</p>
            <p className="css-4hzbpn">/ Month</p>
          </div>
          <Frame43 value={value} currency={currency} />
        </div>
      </div>
    </div>
  );
}

function Frame44({ value }: { value: number }) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="css-ew64yg font-['Sora:SemiBold',sans-serif] font-semibold leading-[23px] relative shrink-0 text-[#6ae499] text-[19px] text-center tracking-[-0.38px]">{value}%</p>
    </div>
  );
}


function BackgroundOverlayBorderOverlayBlur17({ value }: { value: number }) {
  return (
    <div className="backdrop-blur-[7.5px] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="Background+Overlay+Border+OverlayBlur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\"0 0 220 109\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" preserveAspectRatio=\\\"none\\\"><rect x=\\\"0\\\" y=\\\"0\\\" height=\\\"100%\\\" width=\\\"100%\\\" fill=\\\"url(%23grad)\\\" opacity=\\\"1\\\"/><defs><radialGradient id=\\\"grad\\\" gradientUnits=\\\"userSpaceOnUse\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"10\\\" gradientTransform=\\\"matrix(15.809 0 0 5.45 110 0)\\\"><stop stop-color=\\\"rgba(168,127,255,0.04)\\\" offset=\\\"0\\\"/><stop stop-color=\\\"rgba(168,127,255,0)\\\" offset=\\\"1\\\"/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(106,228,153,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center p-[20px] relative w-full">
          <div className="font-['Sora:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[14px] text-center text-white w-full">
            <p className="css-4hzbpn mb-0">{`% Increase in `}</p>
            <p className="css-4hzbpn">Revenue</p>
          </div>
          <Frame44 value={value} />
        </div>
      </div>
    </div>
  );
}

function Frame41({ results, currency }: any) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <BackgroundOverlayBorderOverlayBlur16 value={results.additionalMonthlyRevenue} currency={currency} />
      <BackgroundOverlayBorderOverlayBlur17 value={results.percentageIncrease} />
    </div>
  );
}

function Frame45({ value }: { value: number }) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="css-ew64yg font-['Sora:SemiBold',sans-serif] font-semibold leading-[23px] relative shrink-0 text-[#6ae499] text-[19px] text-center tracking-[-0.38px]">{value.toLocaleString()}</p>
    </div>
  );
}


function BackgroundOverlayBorderOverlayBlur18({ value }: { value: number }) {
  return (
    <div className="backdrop-blur-[7.5px] relative rounded-[16px] shrink-0 w-full" data-name="Background+Overlay+Border+OverlayBlur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\"0 0 452 92\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" preserveAspectRatio=\\\"none\\\"><rect x=\\\"0\\\" y=\\\"0\\\" height=\\\"100%\\\" width=\\\"100%\\\" fill=\\\"url(%23grad)\\\" opacity=\\\"1\\\"/><defs><radialGradient id=\\\"grad\\\" gradientUnits=\\\"userSpaceOnUse\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"10\\\" gradientTransform=\\\"matrix(32.481 0 0 4.6 226 0)\\\"><stop stop-color=\\\"rgba(168,127,255,0.04)\\\" offset=\\\"0\\\"/><stop stop-color=\\\"rgba(168,127,255,0)\\\" offset=\\\"1\\\"/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(106,228,153,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center p-[20px] relative w-full">
          <p className="css-4hzbpn font-['Sora:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[14px] text-center text-white w-full">New number of conversions / Month</p>
          <Frame45 value={value} />
        </div>
      </div>
    </div>
  );
}

function Frame40({ results, currency }: any) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[452px]">
      <Frame41 results={results} currency={currency} />
      <BackgroundOverlayBorderOverlayBlur18 value={results.newConversions} />
    </div>
  );
}

function Frame6({ results, currency }: any) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame5 results={results} currency={currency} />
      <Frame40 results={results} currency={currency} />
    </div>
  );
}


function Frame49({ results, newCR, onNewCRChange, newAOV, onNewAOVChange, currency }: any) {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
      <Frame33
        newCR={newCR} onNewCRChange={onNewCRChange}
        newAOV={newAOV} onNewAOVChange={onNewAOVChange}
        currency={currency}
      />
      <Frame6 results={results} currency={currency} />
    </div>
  );
}

function BackgroundOverlayBorderOverlayBlur19(props: any) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[733px] items-center p-[24px] relative rounded-[16px] shrink-0 w-[500px]" data-name="Background+Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[#505050] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame8 />
      <Frame49 {...props} />
    </div>
  );
}

function Frame46(props: any) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <BackgroundOverlayBorderOverlayBlur8 {...props} />
      </div>
      <BackgroundOverlayBorderOverlayBlur9 />
      <BackgroundOverlayBorderOverlayBlur19 {...props} />
    </div>
  );
}

function Frame35(props: any) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame2 />
      <Frame46 {...props} />
    </div>
  );
}

function Frame47(props: any) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame3 {...props} />
      <Frame35 {...props} />
    </div>
  );
}

function Frame34() {
  const [currency, setCurrency] = useState(defaultValues.currency);
  const [monthlyUsers, setMonthlyUsers] = useState(defaultValues.monthlyUsers);
  const [currentCR, setCurrentCR] = useState(defaultValues.currentCR);
  const [currentAOV, setCurrentAOV] = useState(defaultValues.currentAOV);
  const [newCR, setNewCR] = useState(defaultValues.newCR);
  const [newAOV, setNewAOV] = useState(defaultValues.newAOV);

  const handleReset = () => {
    setCurrency(defaultValues.currency);
    setMonthlyUsers(defaultValues.monthlyUsers);
    setCurrentCR(defaultValues.currentCR);
    setCurrentAOV(defaultValues.currentAOV);
    setNewCR(defaultValues.newCR);
    setNewAOV(defaultValues.newAOV);
  };

  const results = useMemo(() => {
    const currentMonthlyRevenue = (monthlyUsers * (currentCR / 100)) * currentAOV;
    const currentAnnualRevenue = currentMonthlyRevenue * 12;

    const newMonthlyRevenue = (monthlyUsers * (newCR / 100)) * newAOV;
    const newAnnualRevenue = newMonthlyRevenue * 12;

    const additionalMonthlyRevenue = newMonthlyRevenue - currentMonthlyRevenue;
    const percentageIncrease = currentMonthlyRevenue > 0
      ? Math.round(((newMonthlyRevenue - currentMonthlyRevenue) / currentMonthlyRevenue) * 100)
      : 0;

    const newConversions = Math.round(monthlyUsers * (newCR / 100));

    return {
      currentMonthlyRevenue: Math.round(currentMonthlyRevenue),
      currentAnnualRevenue: Math.round(currentAnnualRevenue),
      newMonthlyRevenue: Math.round(newMonthlyRevenue),
      newAnnualRevenue: Math.round(newAnnualRevenue),
      additionalMonthlyRevenue: Math.round(additionalMonthlyRevenue),
      percentageIncrease,
      newConversions
    };
  }, [monthlyUsers, currentCR, currentAOV, newCR, newAOV]);

  const props = {
    currency, onCurrencyChange: setCurrency,
    monthlyUsers, onMonthlyUsersChange: setMonthlyUsers,
    currentCR, onCurrentCRChange: setCurrentCR,
    currentAOV, onCurrentAOVChange: setCurrentAOV,
    newCR, onNewCRChange: setNewCR,
    newAOV, onNewAOVChange: setNewAOV,
    results,
    onReset: handleReset
  };

  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative w-full max-w-[1144px] shrink-0">
      <Frame />
      <Frame47 {...props} />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-4 py-10 lg:px-[36px] lg:py-[60px] relative rounded-[24px] w-full max-w-[1240px] animate-wave-fast" data-name="Card" style={{ backgroundImage: "linear-gradient(140.657deg, rgba(255, 255, 255, 0.12) 2.6545%, rgba(255, 255, 255, 0) 44.796%), url('data:image/svg+xml;utf8,<svg viewBox=\\\"0 0 1240 1296\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" preserveAspectRatio=\\\"none\\\"><rect x=\\\"0\\\" y=\\\"0\\\" height=\\\"100%\\\" width=\\\"100%\\\" fill=\\\"url(%23grad)\\\" opacity=\\\"1\\\"/><defs><radialGradient id=\\\"grad\\\" gradientUnits=\\\"userSpaceOnUse\\\" cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"10\\\" gradientTransform=\\\"matrix(196.13 72.108 -59.815 125.23 573.8 180.72)\\\"><stop stop-color=\\\"rgba(0,0,0,1)\\\" offset=\\\"0\\\"/><stop stop-color=\\\"rgba(0,0,0,1)\\\" offset=\\\"0.55823\\\"/><stop stop-color=\\\"rgba(0,0,0,0.3)\\\" offset=\\\"0.73997\\\"/><stop stop-color=\\\"rgba(0,0,0,0)\\\" offset=\\\"1\\\"/></radialGradient></defs></svg>'), linear-gradient(88.4102deg, rgb(66, 102, 164) 0%, rgb(146, 235, 180) 25%, rgb(66, 102, 164) 50%, rgb(146, 235, 180) 75%, rgb(66, 102, 164) 100%)", backgroundSize: "100% 100%, 100% 100%, 400% 400%" }}>
      <style>{`
        @keyframes wave-gradient {
          0% { background-position: 0% 0%, 0% 0%, 0% 0%; }
          50% { background-position: 0% 0%, 0% 0%, 100% 100%; }
          100% { background-position: 0% 0%, 0% 0%, 0% 0%; }
        }
        .animate-wave-fast {
          animation: wave-gradient 8s ease-in-out infinite;
        }
      `}</style>
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none w-full">
          <Frame34 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-16.5px_36.9px_0px_rgba(255,255,255,0.4)]" />
    </div>
  );
}

export default function ROICalculator() {
  return (
    <div className="bg-[#020601] relative w-full flex items-center justify-center py-[60px] lg:py-[100px] px-4 overflow-hidden">
      <div className="w-full max-w-[1240px]">
        <div className="flex-none w-full">
          <Card />
        </div>
      </div>
    </div>
  );
}

