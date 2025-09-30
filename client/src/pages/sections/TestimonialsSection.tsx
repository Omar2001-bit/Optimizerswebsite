"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { InlineWidget } from "react-calendly";

// Validation functions
const validateWebsite = (url: string): string => {
  if (!url.trim()) return "";
  
  // Try to add protocol if missing
  let urlToValidate = url.trim();
  if (!urlToValidate.startsWith('http://') && !urlToValidate.startsWith('https://')) {
    urlToValidate = 'https://' + urlToValidate;
  }
  
  try {
    const urlObj = new URL(urlToValidate);
    // Check if it has a valid domain
    if (!urlObj.hostname.includes('.')) {
      return "Please enter a valid website URL";
    }
    return "";
  } catch {
    return "Please enter a valid website URL";
  }
};

const validateEmail = (email: string): string => {
  if (!email.trim()) return "";
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  return "";
};

// Main Component
export const TestimonialsSection = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    conversionVolume: "",
    primaryObjective: "",
    website: "",
    firstName: "",
    email: "",
    scheduleDate: null as Date | null,
  });
  
  const [validationErrors, setValidationErrors] = useState({
    website: "",
    email: "",
  });

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Auto-advance for steps 1 and 2
    if (currentStep === 1 || currentStep === 2) {
      setTimeout(() => {
        handleNext();
      }, 300);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Validate on change
    if (name === "website") {
      setValidationErrors((prev) => ({ ...prev, website: validateWebsite(value) }));
    } else if (name === "email") {
      setValidationErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    }
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
      case 3: return !formData.website || !!validationErrors.website;
      case 4: return !formData.firstName || !formData.email || !!validationErrors.email;
      default: return false; // Always enabled on final step
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Step1_Conversions selectedOption={formData.conversionVolume} onSelect={(value) => handleSelect("conversionVolume", value)} />;
      case 2:
        return <Step2_Objective selectedOption={formData.primaryObjective} onSelect={(value) => handleSelect("primaryObjective", value)} />;
      case 3:
        return <Step3_Website value={formData.website} onChange={handleInputChange} error={validationErrors.website} />;
      case 4:
        return <Step4_Contact values={formData} onChange={handleInputChange} emailError={validationErrors.email} />;
      case 5:
        return <Step5_Schedule prefill={{ email: formData.email, name: formData.firstName }} />;
      default:
        return null;
    }
  };

  return (
    <section id="testimonials-booking-section" className="relative w-full bg-dark-mode900 py-[100px]">
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

            <div className="flex items-center gap-4 min-h-[44px]"> {/* Added min-height to prevent layout shift */}
              {currentStep > 1 && (
                <Button onClick={handleBack} variant="outline" className="px-5 py-3.5 border-[#a0abbb] text-[#a0abbb] hover:bg-neutral-700 hover:text-white">
                  Back
                </Button>
              )}
              {currentStep >= 3 && currentStep < 5 && (
                <Button onClick={handleNext} disabled={isNextDisabled()} className="px-5 py-3.5 border border-solid border-[#6ae499] bg-transparent hover:bg-[#6ae499]/10 disabled:border-neutral-600 disabled:text-neutral-600 disabled:cursor-not-allowed">
                  <span className="font-semibold text-secondary-500">
                    Next
                  </span>
                </Button>
              )}
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

const Step3_Website = ({ value, onChange, error }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; error: string; }) => {
  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-md">
      <h2 className="font-heading-h1-small-semi-bold text-shadeswhite text-center">What is your website?</h2>
      <div className="w-full text-left">
          <label className="text-sm text-neutral-300 mb-2 block">Your Website URL</label>
          <Input 
            name="website" 
            value={value} 
            onChange={onChange} 
            placeholder="https://yourwebsite.com" 
            className={`bg-neutral-800 text-white placeholder:text-neutral-500 rounded-lg ${error ? 'border-red-500' : 'border-neutral-600'}`}
          />
          {error ? (
            <p className="text-xs text-red-500 mt-2">{error}</p>
          ) : (
            <p className="text-xs text-neutral-400 mt-2">Please enter a valid URL with or without http/https.</p>
          )}
      </div>
    </div>
  );
};

const Step4_Contact = ({ values, onChange, emailError }: { values: { firstName: string, email: string }; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; emailError: string; }) => {
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
                <Input 
                  name="email" 
                  value={values.email} 
                  onChange={onChange} 
                  type="email" 
                  placeholder="Email" 
                  className={`bg-neutral-800 text-white placeholder:text-neutral-500 rounded-lg ${emailError ? 'border-red-500' : 'border-neutral-600'}`}
                />
                {emailError && (
                  <p className="text-xs text-red-500 mt-2">{emailError}</p>
                )}
            </div>
        </div>
    </div>
  );
};

// --- REVAMPED Step 5 with YOUR Calendly Link ---
const Step5_Schedule = ({ prefill }: { prefill: { name: string, email: string } }) => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <h2 className="font-heading-h1-small-semi-bold text-shadeswhite text-center">Schedule Your Strategy Call</h2>
      <div className="w-full min-h-[700px]">
        <InlineWidget
          url="https://calendly.com/neamatalla/60min"
          styles={{ height: '700px', width: '100%' }}
          prefill={prefill}
          pageSettings={{
            backgroundColor: '1a1a1a',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '6ae499',
            textColor: 'ffffff',
          }}
        />
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