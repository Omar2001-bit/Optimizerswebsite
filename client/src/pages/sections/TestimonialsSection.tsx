"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input"; // Assuming you have a basic Input component

// Main Component
export const TestimonialsSection = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    conversionVolume: "",
    primaryObjective: "",
    website: "",
    firstName: "",
    email: "",
    // Changed to handle a full Date object
    scheduleDate: null as Date | null,
  });

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Handle final submission logic here
      alert(`Your strategy call has been scheduled for: ${formData.scheduleDate?.toLocaleString()}`);
      console.log("Final Form Data:", formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Generic handler for simple fields
  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Specific handler for the schedule date
  const handleScheduleSelect = (date: Date | null) => {
    setFormData(prev => ({ ...prev, scheduleDate: date }));
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const stepperData = useMemo(() => [
      { number: 1, title: "Conversions", subtitle: "Conversion Volume" },
      { number: 2, title: "Objective", subtitle: "Business Objective" },
      { number: 3, title: "Website", subtitle: "Website" },
      { number: 4, title: "Contact", subtitle: "Contact Details" },
      { number: 5, title: "Schedule", subtitle: "Schedule" },
    ].map(step => ({
      ...step,
      isActive: step.number <= currentStep,
      isCurrent: step.number === currentStep,
    })), [currentStep]);

  const isNextDisabled = () => {
    switch (currentStep) {
      case 1: return !formData.conversionVolume;
      case 2: return !formData.primaryObjective;
      case 3: return !formData.website;
      case 4: return !formData.firstName || !formData.email;
      // Now checks for the scheduleDate object
      case 5: return !formData.scheduleDate;
      default: return true;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Step1_Conversions selectedOption={formData.conversionVolume} onSelect={(value) => handleSelect("conversionVolume", value)} />;
      case 2:
        return <Step2_Objective selectedOption={formData.primaryObjective} onSelect={(value) => handleSelect("primaryObjective", value)} />;
      case 3:
        return <Step3_Website value={formData.website} onChange={handleInputChange} />;
      case 4:
        return <Step4_Contact values={formData} onChange={handleInputChange} />;
      case 5:
        // Pass the date object and the handler function
        return <Step5_Schedule selectedSchedule={formData.scheduleDate} onScheduleSelect={handleScheduleSelect} />;
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full bg-dark-mode900 py-[100px]">
      <div className="flex flex-col items-center gap-[60px] max-w-[1176px] mx-auto px-4">
        <header className="flex flex-col items-center gap-6">
          <h1 className="font-heading-h1-semi-bold text-shadeswhite text-center">
            Book Your Free Strategy Session
          </h1>
        </header>

        <Card className="w-full max-w-[1176px] bg-[#ffffff0a] rounded-3xl border border-solid border-[#ffffff1a] shadow-[0px_0px_16px_10px_#6ae4991a] p-3">
          <CardContent className="flex flex-col items-center gap-[60px] px-6 py-8 rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.3)_100%),radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)]">
            <nav className="flex items-start w-full rounded-md relative">
               {stepperData.map((step) => (
                  <div key={step.number} className="flex flex-col items-center justify-center gap-2.5 px-6 py-4 flex-1">
                    <div className="flex items-center gap-4 w-full">
                       <div className={`flex w-5 h-5 items-center justify-center rounded-full border border-solid ${step.isCurrent ? 'border-[#6ae499]' : step.isActive ? 'border-neutral-400' : 'border-neutral-600'}`}>
                        <span className={`text-xs ${step.isCurrent ? 'text-secondary-500' : step.isActive ? 'text-neutral-400' : 'text-neutral-600'}`}>
                           {step.number}
                         </span>
                       </div>
                       <div className="flex flex-col">
                        <span className={`font-semibold ${step.isCurrent ? 'text-secondary-500' : step.isActive ? 'text-neutral-400' : 'text-neutral-600'}`}>
                           {step.title}
                         </span>
                        <span className={`text-xs ${step.isCurrent ? 'text-secondary-500' : step.isActive ? 'text-neutral-400' : 'text-neutral-600'}`}>
                           {step.subtitle}
                         </span>
                       </div>
                     </div>
                   </div>
               ))}
             </nav>

            {renderStepContent()}

            <div className="flex items-center gap-4">
              {currentStep > 1 && (
                <Button onClick={handleBack} variant="outline" className="px-5 py-3.5 border-[#a0abbb] text-[#a0abbb] hover:bg-neutral-700 hover:text-white">
                  Back
                </Button>
              )}
              <Button onClick={handleNext} disabled={isNextDisabled()} className="px-5 py-3.5 border border-solid border-[#6ae499] bg-transparent hover:bg-[#6ae499]/10 disabled:border-neutral-600 disabled:text-neutral-600 disabled:cursor-not-allowed">
                <span className="font-semibold text-secondary-500">
                  {currentStep === 5 ? "Schedule Call" : "Next"}
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

// --- Step Components (1-4 are unchanged) ---
const Step1_Conversions = ({ selectedOption, onSelect }: { selectedOption: string; onSelect: (value: string) => void; }) => {
  const options = ["Fewer Than 100", "From 100 to 1K", "From 100 to 10K", "10K+"];
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <h2 className="font-heading-h1-small-semi-bold text-shadeswhite text-center">Number of conversions per MONTH on average?</h2>
      <div className="grid grid-cols-2 gap-6">
        {options.map((text) => (
          <SelectableCard key={text} text={text} isSelected={selectedOption === text} onSelect={() => onSelect(text)} />
        ))}
      </div>
    </div>
  );
};

const Step2_Objective = ({ selectedOption, onSelect }: { selectedOption: string; onSelect: (value: string) => void; }) => {
  const options = [
    { title: "Signups", subtitle: "(SaaS/eLearning)" },
    { title: "Online Sales", subtitle: "(eCommerce)" },
    { title: "Lead Gen", subtitle: "(Professional Services)" },
    { title: "Other", subtitle: "" },
  ];
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <h2 className="font-heading-h1-small-semi-bold text-shadeswhite text-center">What is your primary conversion objective?</h2>
      <div className="grid grid-cols-2 gap-6">
        {options.map((opt) => (
          <SelectableCard key={opt.title} text={opt.title} subtitle={opt.subtitle} isSelected={selectedOption === opt.title} onSelect={() => onSelect(opt.title)} />
        ))}
      </div>
    </div>
  );
};

const Step3_Website = ({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }) => {
  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-md">
      <h2 className="font-heading-h1-small-semi-bold text-shadeswhite text-center">What is your website?</h2>
      <div className="w-full text-left">
          <label className="text-sm text-neutral-300 mb-2 block">Your Website URL</label>
          <Input name="website" value={value} onChange={onChange} placeholder="https://yourwebsite.com" className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500 rounded-lg"/>
          <p className="text-xs text-neutral-400 mt-2">Please enter a valid URL with or without http/https.</p>
      </div>
    </div>
  );
};

const Step4_Contact = ({ values, onChange }: { values: { firstName: string, email: string }; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }) => {
  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-md">
        <h2 className="font-heading-h1-small-semi-bold text-shadeswhite text-center">Contact Information</h2>
        <div className="w-full flex flex-col gap-6">
            <div className="w-full text-left">
                <label className="text-sm text-neutral-300 mb-2 block">First Name</label>
                <Input name="firstName" value={values.firstName} onChange={onChange} placeholder="First Name" className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500 rounded-lg"/>
            </div>
            <div className="w-full text-left">
                <label className="text-sm text-neutral-300 mb-2 block">Email</label>
                <Input name="email" value={values.email} onChange={onChange} type="email" placeholder="Email" className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500 rounded-lg"/>
            </div>
        </div>
    </div>
  );
};


// --- REVAMPED Step 5 Component ---

const Step5_Schedule = ({ selectedSchedule, onScheduleSelect }: { selectedSchedule: Date | null; onScheduleSelect: (date: Date | null) => void }) => {
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<Date | null>(selectedSchedule ? new Date(selectedSchedule.toDateString()) : null);
  const [selectedTime, setSelectedTime] = useState<string | null>(selectedSchedule ? selectedSchedule.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : null);
  const [duration, setDuration] = useState(30);

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today to the start of the day for accurate comparison

  const handleMonthChange = (offset: number) => {
    setViewDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + offset);
      return newDate;
    });
  };

  const handleDaySelect = (day: Date) => {
    if (day < today) return; // Prevent selecting past dates
    setSelectedDay(day);
    setSelectedTime(null); // Reset time when date changes
    onScheduleSelect(null); // Reset final selection
  };
  
  const handleTimeSelect = (time: string) => {
    if (!selectedDay) return;
  
    // Parse the time string (e.g., "03:30 PM")
    const [timePart, ampm] = time.split(' ');
    let [hours, minutes] = timePart.split(':').map(Number);
  
    if (ampm.toLowerCase() === 'pm' && hours < 12) {
      hours += 12;
    }
    if (ampm.toLowerCase() === 'am' && hours === 12) {
      hours = 0;
    }
  
    const finalDate = new Date(selectedDay);
    finalDate.setHours(hours, minutes);
    
    setSelectedTime(time);
    onScheduleSelect(finalDate); // Update the parent component
  };

  const timeSlots = ["03:30 PM", "04:00 PM", "04:30 PM", "10:00 PM", "10:30 PM"];
  
  // Create calendar grid
  const getCalendarGrid = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const grid: (Date | null)[] = Array(firstDayOfMonth).fill(null);
    for (let i = 1; i <= daysInMonth; i++) {
      grid.push(new Date(year, month, i));
    }
    return grid;
  };
  const calendarGrid = getCalendarGrid();

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <h2 className="font-heading-h1-small-semi-bold text-shadeswhite text-center">Schedule Your Strategy Call</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
        {/* Interactive Calendar */}
        <div className="w-full max-w-xs bg-neutral-800/50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => handleMonthChange(-1)} className="text-white p-2 rounded-full hover:bg-neutral-700">&lt;</button>
            <span className="font-semibold text-white">{viewDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
            <button onClick={() => handleMonthChange(1)} className="text-white p-2 rounded-full hover:bg-neutral-700">&gt;</button>
          </div>
          <div className="grid grid-cols-7 text-center text-sm text-neutral-400 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => <div key={day}>{day}</div>)}
          </div>
          <div className="grid grid-cols-7 text-center text-sm">
            {calendarGrid.map((day, i) => (
              <div key={i} className="py-1">
                {day && (
                  <button
                    onClick={() => handleDaySelect(day)}
                    disabled={day < today}
                    className={`w-8 h-8 rounded-full transition-colors 
                      ${day < today ? 'text-neutral-600 cursor-not-allowed' : 'text-white hover:bg-neutral-700'} 
                      ${selectedDay?.getTime() === day.getTime() ? 'bg-secondary-500 text-black font-semibold' : ''}`}
                  >
                    {day.getDate()}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <div>
            <h3 className="text-neutral-300 text-sm mb-2">Meeting Duration</h3>
            <div className="flex gap-2">
              {[15, 30, 60].map(d => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`px-3 py-2 rounded-lg border text-sm transition-colors ${duration === d ? 'bg-secondary-500 border-secondary-500 text-black font-semibold' : 'text-white bg-neutral-800 border-neutral-600 hover:border-neutral-400'}`}
                >
                  {d} mins
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-neutral-300 text-sm">What time works best? <span className="text-neutral-400">UTC+02:00</span></h3>
            <div className={`grid grid-cols-2 gap-3 mt-2 ${!selectedDay ? 'opacity-50' : ''}`}>
              {timeSlots.map(time => {
                // Time validation logic
                const now = new Date();
                const [timePart, ampm] = time.split(' ');
                let [hours] = timePart.split(':').map(Number);
                if (ampm.toLowerCase() === 'pm' && hours < 12) hours += 12;
                const isPast = selectedDay?.toDateString() === now.toDateString() && hours < now.getHours();

                return (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    disabled={!selectedDay || isPast}
                    className={`p-3 rounded-lg border text-white transition-colors disabled:bg-neutral-800/50 disabled:border-neutral-700 disabled:text-neutral-600 disabled:cursor-not-allowed ${selectedTime === time ? 'bg-secondary-500 border-secondary-500 text-black font-semibold' : 'bg-neutral-800 border-neutral-600 hover:border-neutral-400'}`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Reusable Helper Component ---

const SelectableCard = ({ text, subtitle, isSelected, onSelect }: { text: string; subtitle?: string; isSelected: boolean; onSelect: () => void; }) => (
  <Card
    onClick={onSelect}
    className={`w-[300px] h-[150px] rounded-2xl border border-solid transition-colors cursor-pointer flex items-center justify-center text-center p-6
    ${isSelected ? "border-[#6ae499] bg-[#6ae499]/10" : "border-[#6ae49933] bg-transparent hover:border-[#6ae499]"}
    [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)]`}
  >
    <div className="flex flex-col">
      <span className="font-semibold text-shadeswhite text-lg">{text}</span>
      {subtitle && <span className="text-neutral-400 text-sm">{subtitle}</span>}
    </div>
  </Card>
);