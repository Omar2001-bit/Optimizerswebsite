"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { RotateCcwIcon, ArrowLeftRightIcon, MinusIcon, PlusIcon } from 'lucide-react';

// --- Default Values for Reset ---
const defaultValues = {
  currency: "SAR",
  monthlyUsers: 12000,
  currentCR: 2.5,
  currentAOV: 260,
  newCR: 3.5,
  newAOV: 280,
};

// --- Reusable Number Input with +/- Controls ---
const NumberInputWithControls = ({ id, value, onChange, onDecrement, onIncrement, prefix, suffix, className }: {
    id: string;
    value: number | string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onDecrement: () => void;
    onIncrement: () => void;
    prefix?: string;
    suffix?: string;
    className?: string;
}) => (
    <div className={`inline-flex items-center h-12 rounded-md bg-[#2d2d2d] border border-neutral-700 ${className}`}>
        <Button id={`btn-decrement-${id}`} onClick={onDecrement} variant="ghost" size="icon" className="w-12 h-full rounded-r-none hover:bg-white/10">
            <MinusIcon className="w-4 h-4 text-white" />
        </Button>
        <div className="relative flex items-center justify-center w-[180px] h-full">
            <Input
                id={id}
                type="number"
                value={value}
                onChange={onChange}
                className="w-full h-full p-0 text-center font-paragraph-p3-semi-bold text-shadeswhite bg-transparent border-x border-neutral-700 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
             {suffix && <span className="absolute right-4 font-paragraph-p3-semi-bold text-shadeswhite pointer-events-none">{suffix}</span>}
             {prefix && <span className="absolute left-4 font-paragraph-p3-semi-bold text-shadeswhite pointer-events-none">{prefix}</span>}
        </div>
        <Button id={`btn-increment-${id}`} onClick={onIncrement} variant="ghost" size="icon" className="w-12 h-full rounded-l-none hover:bg-white/10">
            <PlusIcon className="w-4 h-4 text-white" />
        </Button>
    </div>
);

export const InfoWrapperSection = (): JSX.Element => {
  const [currency, setCurrency] = useState(defaultValues.currency);
  const [monthlyUsers, setMonthlyUsers] = useState(defaultValues.monthlyUsers);
  const [currentCR, setCurrentCR] = useState(defaultValues.currentCR);
  const [currentAOV, setCurrentAOV] = useState(defaultValues.currentAOV);
  const [newCR, setNewCR] = useState(defaultValues.newCR);
  const [newAOV, setNewAOV] = useState(defaultValues.newAOV);

  const calculatedValues = useMemo(() => {
    const currentConversions = Math.round(monthlyUsers * (currentCR / 100));
    const newConversions = Math.round(monthlyUsers * (newCR / 100));
    const currentMonthlyRevenue = currentConversions * currentAOV;
    const newMonthlyRevenue = newConversions * newAOV;
    const additionalMonthlyRevenue = newMonthlyRevenue - currentMonthlyRevenue;
    const percentageIncrease = currentMonthlyRevenue > 0 ? (additionalMonthlyRevenue / currentMonthlyRevenue) * 100 : 0;
    return {
      currentMonthlyRevenue,
      currentAnnualRevenue: currentMonthlyRevenue * 12,
      newMonthlyRevenue,
      newAnnualRevenue: newMonthlyRevenue * 12,
      additionalMonthlyRevenue: Math.max(0, additionalMonthlyRevenue),
      percentageIncrease: Math.max(0, percentageIncrease),
      newConversions,
    };
  }, [monthlyUsers, currentCR, currentAOV, newCR, newAOV]);

  const formatCurrency = (value: number) => value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  const handleReset = () => {
    setCurrency(defaultValues.currency);
    setMonthlyUsers(defaultValues.monthlyUsers);
    setCurrentCR(defaultValues.currentCR);
    setCurrentAOV(defaultValues.currentAOV);
    setNewCR(defaultValues.newCR);
    setNewAOV(defaultValues.newAOV);
  };
  
  const getCurrencySymbol = () => {
      switch(currency) {
          case 'SAR': return '﷼';
          case 'USD': return '$';
          case 'EGP': return '£';
          default: return '﷼';
      }
  };

  return (
    <section id="roi-calculator-section" className="w-full bg-dark-mode900 py-[100px]">
      <div className="flex flex-col max-w-[1144px] mx-auto items-center gap-[60px] px-4">
        <header id="roi-calculator-header" className="flex flex-col items-start gap-6 w-full">
            <h1 className="w-full font-heading-h1-semi-bold text-shadeswhite">ROI Calculator</h1>
            <p className="max-w-[980px] font-subheading-regular text-shadeswhite">
                See the real impact CRO can have on your business. Enter just a few numbers and instantly discover what a 10–40% lift in conversions could mean for your monthly revenue.
            </p>
        </header>

        <div id="roi-calculator-body" className="flex flex-col items-start gap-10 w-full">
          <div id="roi-inputs-container" className="flex flex-col items-center gap-6 w-full">
            <h2 className="w-full font-heading-h5-semi-bold text-shadeswhite">1. Start Entering Your Data</h2>
            <div className="flex items-end gap-6 w-full flex-wrap">
              <div className="inline-flex flex-col items-start gap-3">
                <label id="label-currency" htmlFor="select-currency-trigger" className="font-paragraph-p3-regular text-shadeswhite">Currency</label>
                <Select value={currency} onValueChange={setCurrency}>
                    <SelectTrigger id="select-currency-trigger" className="w-[300px] h-12 text-shadeswhite bg-[#2d2d2d] border-neutral-700"><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="SAR">SAR</SelectItem><SelectItem value="USD">USD</SelectItem><SelectItem value="EGP">EGP</SelectItem></SelectContent>
                </Select>
              </div>
              <div className="inline-flex flex-col items-start gap-3">
                <label id="label-monthly-users" htmlFor="input-monthly-users" className="font-paragraph-p3-regular text-shadeswhite">Monthly Website Users</label>
                <NumberInputWithControls
                    id="input-monthly-users"
                    value={monthlyUsers}
                    onChange={(e) => setMonthlyUsers(parseInt(e.target.value) || 0)}
                    onDecrement={() => setMonthlyUsers(prev => Math.max(0, prev - 100))}
                    onIncrement={() => setMonthlyUsers(prev => prev + 100)}
                />
              </div>
              <Button id="btn-reset-calculator" onClick={handleReset} variant="outline" className="h-12 px-[18px] py-3 bg-transparent border-[#66d992] text-[#66d992] hover:bg-[#66d992]/10 hover:text-[#66d992]">
                  <span>Reset</span>
                  <RotateCcwIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div id="roi-projections-container" className="flex flex-col items-center gap-6 w-full">
            <h2 className="w-full font-heading-h5-semi-bold text-shadeswhite">2. Now Calculate Your ROI Projection</h2>
            <div className="flex items-center justify-between w-full gap-6 flex-wrap lg:flex-nowrap">
              {/* CURRENT Card */}
              <Card id="card-current-projection" className="w-full lg:w-[500px] p-8 rounded-2xl border border-solid border-white/20 bg-[#1c1c1c] relative bottom-[111px]">
                <CardContent className="p-0 flex flex-col gap-12">
                  <h3 className="w-full font-heading-h5-semi-bold text-center text-shadeswhite">CURRENT</h3>
                  <div className="flex flex-col items-center gap-5 w-full">
                      <label id="label-current-cr" htmlFor="slider-current-cr" className="font-paragraph-p2-regular text-white text-center">Your CURRENT conversion rate</label>
                      <Slider id="slider-current-cr" value={[currentCR]} onValueChange={([val]) => setCurrentCR(val)} max={20} step={0.1} className="bg-neutral-700 [&>span:first-child]:bg-[#66d992]" />
                      <NumberInputWithControls id="input-current-cr" value={currentCR.toFixed(1)} onChange={e => setCurrentCR(parseFloat(e.target.value) || 0)} onDecrement={() => setCurrentCR(p => Math.max(0.1, p - 0.1))} onIncrement={() => setCurrentCR(p => p + 0.1)} suffix="%" />
                  </div>
                  <div className="flex flex-col items-center gap-5 w-full">
                      <label id="label-current-aov" htmlFor="slider-current-aov" className="font-paragraph-p2-regular text-white text-center">Your CURRENT average order value</label>
                      <Slider id="slider-current-aov" value={[currentAOV]} onValueChange={([val]) => setCurrentAOV(val)} max={2000} step={10} className="bg-neutral-700 [&>span:first-child]:bg-[#66d992]" />
                      <NumberInputWithControls id="input-current-aov" value={currentAOV} onChange={e => setCurrentAOV(parseInt(e.target.value) || 0)} onDecrement={() => setCurrentAOV(p => Math.max(0, p - 10))} onIncrement={() => setCurrentAOV(p => p + 10)} prefix={getCurrencySymbol()} />
                  </div>
                  <div className="flex gap-3 w-full pt-6 relative right-[20px]">
                      <InfoCard id="card-current-monthly-revenue" title="Current Monthly Revenue" value={formatCurrency(calculatedValues.currentMonthlyRevenue)} currencySymbol={getCurrencySymbol()} />
                      <InfoCard id="card-current-annual-revenue" title="Current Annual Revenue" value={formatCurrency(calculatedValues.currentAnnualRevenue)} currencySymbol={getCurrencySymbol()} />
                  </div>
                </CardContent>
              </Card>

              <div id="projection-separator-icon" className="flex items-center justify-center w-12 h-12 rounded bg-[#66d992] shrink-0">
                <ArrowLeftRightIcon className="w-6 h-6 text-black" />
              </div>

              {/* NEW Card */}
              <Card id="card-new-projection" className="w-full lg:w-[500px] p-8 rounded-2xl border border-solid border-white/20 bg-[#1c1c1c]">
                <CardContent className="p-0 flex flex-col gap-12">
                  <h3 className="w-full font-heading-h5-semi-bold text-center text-shadeswhite">NEW</h3>
                  <div className="flex flex-col items-center gap-5 w-full">
                      <label id="label-new-cr" htmlFor="slider-new-cr" className="font-paragraph-p2-regular text-white text-center">Your NEW conversion rate</label>
                      <Slider id="slider-new-cr" value={[newCR]} onValueChange={([val]) => setNewCR(val)} max={20} step={0.1} className="bg-neutral-700 [&>span:first-child]:bg-[#66d992]" />
                      <NumberInputWithControls id="input-new-cr" value={newCR.toFixed(1)} onChange={e => setNewCR(parseFloat(e.target.value) || 0)} onDecrement={() => setNewCR(p => Math.max(0.1, p - 0.1))} onIncrement={() => setNewCR(p => p + 0.1)} suffix="%" />
                  </div>
                  <div className="flex flex-col items-center gap-5 w-full">
                      <label id="label-new-aov" htmlFor="slider-new-aov" className="font-paragraph-p2-regular text-white text-center">Your NEW average order value</label>
                      <Slider id="slider-new-aov" value={[newAOV]} onValueChange={([val]) => setNewAOV(val)} max={2000} step={10} className="bg-neutral-700 [&>span:first-child]:bg-[#66d992]" />
                      <NumberInputWithControls id="input-new-aov" value={newAOV} onChange={e => setNewAOV(parseInt(e.target.value) || 0)} onDecrement={() => setNewAOV(p => Math.max(0, p - 10))} onIncrement={() => setNewAOV(p => p + 10)} prefix={getCurrencySymbol()} />
                  </div>
                  {/* --- MODIFIED LAYOUT FOR "NEW" CARD RESULTS --- */}
                  <div className="flex flex-col items-center gap-3 w-full pt-6">
                      <div className="grid grid-cols-2 gap-3 w-full max-w-md">
                          <InfoCard id="card-new-monthly-revenue" title="New Monthly Revenue" value={formatCurrency(calculatedValues.newMonthlyRevenue)} currencySymbol={getCurrencySymbol()} textColor="text-[#66d992]"/>
                          <InfoCard id="card-new-annual-revenue" title="New Annual Revenue" value={formatCurrency(calculatedValues.newAnnualRevenue)} currencySymbol={getCurrencySymbol()} textColor="text-[#66d992]"/>
                          <InfoCard id="card-additional-monthly-revenue" title="Additional Revenue / Month" value={`+${formatCurrency(calculatedValues.additionalMonthlyRevenue)}`} currencySymbol={getCurrencySymbol()} textColor="text-[#66d992]" />
                          <InfoCard id="card-percentage-increase" title="% Increase in Revenue" value={`${calculatedValues.percentageIncrease.toFixed(1)}%`} textColor="text-[#66d992]" />
                      </div>
                      <div className="w-full max-w-md">
                          <InfoCard id="card-new-conversions" title="New number of conversions / Month" value={calculatedValues.newConversions.toLocaleString()} textColor="text-[#66d992]" />
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

// --- Reusable Helper Component for Display Cards (Now with ID prop) ---
const InfoCard = ({ id, title, value, textColor = "text-neutral-200", currencySymbol }: { id: string, title: string, value: string, textColor?: string, currencySymbol?: string }) => (
    <Card id={id} className="flex-1 p-5 rounded-2xl border border-solid border-white/10 bg-[#2d2d2d]">
        <CardContent className="p-0 flex flex-col items-center justify-center gap-2">
            <p className="font-paragraph-p1-regular text-shadeswhite text-center whitespace-nowrap">{title}</p>
            <div className="flex items-center justify-center gap-1.5 w-full">
                <span id={`value-${id}`} className={`font-heading-h6-semi-bold ${textColor}`}>{value}</span>
                {currencySymbol && <span id={`currency-${id}`} className={`font-heading-h6-semi-bold ${textColor}`}>{currencySymbol}</span>}
            </div>
        </CardContent>
    </Card>
);