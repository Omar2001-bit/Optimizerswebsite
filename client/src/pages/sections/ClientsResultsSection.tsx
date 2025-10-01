import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clientsData = [
  {
    id: 1,
    name: "Dubai Phone",
    industry: "Electronics",
    description:
      "Leading mobile phone retailer providing the latest smartphones, accessories, and digital solutions.",
    market: "Egypt Market",
    profileImage: "/figmaAssets/profile-photo-11.svg",
    flagImage: "/figmaAssets/egypt-1.svg",
    goal: "Improve mobile checkout experience.",
    improvements: "Mobile optimization, payment flow.",
    results: [
      { percentage: "+65%", metric: "Mobile conversion rate" },
      { percentage: "+28%", metric: "Customer retention" },
    ],
    maskImage1: "/figmaAssets/mask-group-10.svg",
    maskImage2: "/figmaAssets/mask-group.svg",
    opacity: "opacity-40",
    blur: "blur-sm",
    position: "left-[calc(50.00%_+_504px)]",
  },
  {
    id: 2,
    name: "Squadio",
    industry: "Technology",
    description:
      "Technology solutions provider in Saudi Arabia offering innovative software development.",
    market: "Saudi Market",
    profileImage: "/figmaAssets/profile-photo-5.svg",
    flagImage: "/figmaAssets/saudi-arabia-1.svg",
    goal: "Increase lead generation and conversions.",
    improvements: "Landing pages, contact forms.",
    results: [
      { percentage: "+833%", metric: "Signup Rate" },
      { percentage: "+44.02%", metric: "Funnel Progression" },
    ],
    maskImage1: "/figmaAssets/mask-group-64.svg",
    maskImage2: "/figmaAssets/mask-group-60.svg",
    opacity: "opacity-40",
    blur: "blur-sm",
    position: "right-[1390px]",
  },
  {
    id: 3,
    name: "Vitrine Furniture",
    industry: "Furniture",
    description:
      "Leading furniture retailer in Egypt providing modern and contemporary furniture solutions.",
    market: "Egypt Market",
    profileImage: "/figmaAssets/profile-photo-1.svg",
    flagImage: "/figmaAssets/egypt.svg",
    goal: "Increase conversion to partner products.",
    improvements: "Product comparison pages.",
    results: [
      { percentage: "+64.5%", metric: "E-commerce conversion rate" },
      { percentage: "+19.48%", metric: "Average order value" },
    ],
    maskImage1: "/figmaAssets/mask-group-65.svg",
    maskImage2: "/figmaAssets/mask-group-62.svg",
    opacity: "opacity-60",
    blur: "",
    position: "left-[calc(50.00%_+_236px)]",
  },
  {
    id: 4,
    name: "Regal Honey",
    industry: "Food & Beverage",
    description:
      "Premium honey retailer offering natural and organic honey products across Kuwait.",
    market: "Kuwait Market",
    profileImage: "/figmaAssets/profile-photo-7.svg",
    flagImage: "/figmaAssets/kuwait-1.svg",
    goal: "ECR uplift across all product categories.",
    improvements: "Homepage, product details page.",
    results: [
      { percentage: "+44.15%", metric: "E-commerce conversion rate" },
      { percentage: "+34.6%", metric: "Average order value" },
    ],
    maskImage1: "/figmaAssets/mask-group-1.svg",
    maskImage2: "/figmaAssets/mask-group-5.svg",
    opacity: "",
    blur: "",
    position: "left-[calc(50.00%_-_240px)]",
  },
  {
    id: 5,
    name: "Ribal Magic",
    industry: "Entertainment",
    description:
      "Entertainment and events company in Saudi Arabia specializing in magical performances.",
    market: "Saudi Market",
    profileImage: "/figmaAssets/profile-photo.svg",
    flagImage: "/figmaAssets/saudi-arabia.svg",
    goal: "Reduce cart abandonment & increase AOV.",
    improvements: "Checkout flow, product pages.",
    results: [
      { percentage: "+11.9%", metric: "E-commerce conversion rate" },
      { percentage: "+5.99%", metric: "Average order value" },
    ],
    maskImage1: "/figmaAssets/mask-group-63.svg",
    maskImage2: "/figmaAssets/mask-group-66.svg",
    opacity: "opacity-60",
    blur: "",
    position: "right-[1122px]",
  },
];

export const ClientsResultsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [isManualControl, setIsManualControl] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && !isManualControl) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isDragging, isManualControl]);

  // Reset manual control after 5 seconds of inactivity
  useEffect(() => {
    if (isManualControl) {
      const timeout = setTimeout(() => {
        setIsManualControl(false);
      }, 5000); // Resume auto-advance after 5 seconds

      return () => clearTimeout(timeout);
    }
  }, [isManualControl, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsManualControl(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsManualControl(true);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseDown = (e: React.MouseEvent, cardIndex: number) => {
    // Only allow dragging on the center card
    if (cardIndex !== currentIndex) return;
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragDistance(0);
  };

  const handleMouseMove = (e: React.MouseEvent, cardIndex: number) => {
    // Only allow dragging on the center card
    if (!isDragging || cardIndex !== currentIndex) return;
    const distance = e.clientX - dragStart;
    setDragDistance(distance);
  };

  const handleMouseUp = (cardIndex: number) => {
    // Only allow dragging on the center card
    if (!isDragging || cardIndex !== currentIndex) return;
    
    const threshold = 80;
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    setIsDragging(false);
    setDragDistance(0);
  };

  const handleMouseLeave = (cardIndex: number) => {
    // Only allow dragging on the center card
    if (cardIndex !== currentIndex) return;
    setIsDragging(false);
    setDragDistance(0);
  };

  return (
    <section id="section-clients-results" className="w-full bg-dark-mode900 overflow-hidden pt-0 pb-[200px]">
      <div id="clients-results-header" className="flex flex-col items-center gap-[60px] mb-[60px] px-4">
        <h1 id="clients-results-title" className="font-semibold text-shadeswhite text-[48px] text-center tracking-[-1.92px] leading-[56px]">
          TOP CLIENTS & RESULTS
        </h1>
        <p id="clients-results-description" className="max-w-[770px] font-semibold text-shadeswhite text-[20px] text-center tracking-[0px] leading-[24px]">
          See how we&apos;ve helped leading e-commerce brands increase
          conversions, revenue, and customer loyalty through CRO.
        </p>
      </div>

      <div id="carousel-container" className="relative px-4 mb-[60px] max-w-7xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 flex items-center justify-center rounded-full bg-[#ffffff1a] backdrop-blur-sm hover:bg-[#ffffff2a] transition-all duration-300 border border-solid border-[#ffffff33]"
          aria-label="Previous slide"
          data-testid="button-prev-slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 flex items-center justify-center rounded-full bg-[#ffffff1a] backdrop-blur-sm hover:bg-[#ffffff2a] transition-all duration-300 border border-solid border-[#ffffff33]"
          aria-label="Next slide"
          data-testid="button-next-slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Stacked Carousel Content */}
        <div id="carousel-wrapper" className="relative h-[600px] flex items-center justify-center">
          {/* Render cards around current index for infinite effect */}
          {[-2, -1, 0, 1, 2].map((offset) => {
            const cardIndex = currentIndex + offset;
            const clientIndex = ((cardIndex % clientsData.length) + clientsData.length) % clientsData.length;
            const client = clientsData[clientIndex];
            const position = offset;
            const isCenter = position === 0;
            const isVisible = Math.abs(position) <= 2;
            
            if (!isVisible) return null;
            
            return (
              <Card
                key={client.id}
                id={`client-card-${client.id}`}
                onClick={() => !isCenter && !isDragging && goToSlide(cardIndex)}
                onMouseDown={(e) => handleMouseDown(e, cardIndex)}
                onMouseMove={(e) => handleMouseMove(e, cardIndex)}
                onMouseUp={() => handleMouseUp(cardIndex)}
                onMouseLeave={() => handleMouseLeave(cardIndex)}
                className={`absolute w-[400px] bg-[#6ae4990f] rounded-3xl border border-solid border-[#ffffff1a] overflow-hidden transition-all duration-700 ease-in-out select-none ${
                  isCenter 
                    ? 'scale-100 opacity-100 cursor-grab active:cursor-grabbing' 
                    : Math.abs(position) === 1 
                      ? 'scale-90 opacity-60 cursor-pointer' 
                      : 'scale-80 opacity-30 cursor-pointer'
                } ${isDragging ? 'transition-none' : ''}`}
                style={{
                  transform: `translateX(${(position * 280) + (isDragging ? dragDistance : 0)}px) scale(${
                    isCenter ? 1 : Math.abs(position) === 1 ? 0.9 : 0.8
                  })`,
                  zIndex: isCenter ? 50 : Math.abs(position) === 1 ? 40 : 30
                }}
                data-testid={`card-client-${client.id}`}
              >
            <CardContent id={`card-content-${client.id}`} className="p-3">
              <div id={`card-inner-content-${client.id}`} className="flex flex-col items-start justify-center gap-5 px-6 py-8 rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.3)_100%),radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)]">
                <div id={`client-profile-section-${client.id}`} className="flex flex-col h-[284px] items-center justify-center gap-6 p-6 w-full rounded-xl overflow-hidden border-[none] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(176,241,201,0.3)_0%,rgba(6,35,17,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(59,126,85,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
                  <div id={`client-header-${client.id}`} className="flex items-center gap-4 w-full">
                    <img
                      id={`client-profile-image-${client.id}`}
                      className="w-20 h-20 object-cover rounded-full"
                      alt="Profile photo"
                      src={client.profileImage}
                    />
                    <div id={`client-info-${client.id}`} className="flex flex-col items-start gap-3 flex-1">
                      <h3 id={`client-name-${client.id}`} className="font-semibold text-shadeswhite text-[28px] tracking-[-0.56px] leading-[34px]">
                        {client.name}
                      </h3>
                      <Badge id={`client-industry-badge-${client.id}`} className="bg-[#6ae49926] text-secondary-300 border-none px-3 py-1.5 rounded-[100px]">
                        <span id={`client-industry-text-${client.id}`} className="font-normal text-[14px] tracking-[0px] leading-[17px]">
                          {client.industry}
                        </span>
                      </Badge>
                    </div>
                  </div>

                  <div id={`client-description-section-${client.id}`} className="flex flex-col gap-5 w-full">
                    <p id={`client-description-${client.id}`} className="font-normal text-shadeswhite text-[20px] tracking-[0px] leading-[24px]">
                      {client.description}
                    </p>
                    <div id={`client-market-info-${client.id}`} className="flex items-center gap-2">
                      <img
                        id={`client-flag-${client.id}`}
                        className="w-10 h-10"
                        alt="Country flag"
                        src={client.flagImage}
                      />
                      <span id={`client-market-${client.id}`} className="font-semibold text-shadeswhite text-[18px] tracking-[0px] leading-[21.6px]">
                        {client.market}
                      </span>
                    </div>
                  </div>
                </div>

                <div id={`client-details-cards-${client.id}`} className="flex flex-col gap-3 w-full">
                  <Card id={`client-goal-card-${client.id}`} className="bg-transparent border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)]">
                    <CardContent id={`client-goal-content-${client.id}`} className="flex flex-col items-start justify-center gap-3 p-6">
                      <h4 id={`client-goal-title-${client.id}`} className="font-semibold text-shadeswhite text-[20px] tracking-[0px] leading-[24px]">
                        Our Goal:
                      </h4>
                      <p id={`client-goal-text-${client.id}`} className="font-normal text-shadeswhite text-[16px] tracking-[0px] leading-[19px] text-left">
                        {client.goal}
                      </p>
                    </CardContent>
                  </Card>

                  <Card id={`client-improvements-card-${client.id}`} className="bg-transparent border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)]">
                    <CardContent id={`client-improvements-content-${client.id}`} className="flex flex-col items-start justify-center gap-3 p-6">
                      <h4 id={`client-improvements-title-${client.id}`} className="font-semibold text-shadeswhite text-[20px] tracking-[0px] leading-[24px]">
                        Areas of Improvement:
                      </h4>
                      <p id={`client-improvements-text-${client.id}`} className="font-normal text-shadeswhite text-[16px] tracking-[0px] leading-[19px] text-left">
                        {client.improvements}
                      </p>
                    </CardContent>
                  </Card>

                  <Card id={`client-results-card-${client.id}`} className="bg-transparent border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)]">
                    <CardContent id={`client-results-content-${client.id}`} className="flex flex-col items-start justify-center gap-3 p-6">
                      <h4 id={`client-results-title-${client.id}`} className="font-semibold text-shadeswhite text-[20px] tracking-[0px] leading-[24px]">
                        Results:
                      </h4>
                      <div id={`client-results-list-${client.id}`} className="flex flex-col gap-2 w-full">
                        {client.results.map((result, index) => (
                          <div
                            key={index}
                            id={`client-result-item-${client.id}-${index}`}
                            className="[font-family:'Sora',Helvetica] font-normal text-shadeswhite text-lg tracking-[0] leading-[18px]"
                          >
                            <span id={`client-result-percentage-${client.id}-${index}`} className="font-semibold text-[#6ae499] text-[18px] tracking-[0px] leading-[21.6px]">
                              {result.percentage}
                            </span>
                            <span className="text-white leading-[21.6px]">
                              &nbsp;&nbsp;
                            </span>
                            <span id={`client-result-metric-${client.id}-${index}`} className="text-white font-normal text-[16px] tracking-[0px] leading-[19px]">
                              {result.metric}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <img
                id={`client-mask-image-1-${client.id}`}
                className="absolute top-0 right-3 w-[308px] h-2"
                alt="Mask group"
                src={client.maskImage1}
              />
              <img
                id={`client-mask-image-2-${client.id}`}
                className="absolute top-[-1274px] right-[6271px] w-[308px] h-2"
                alt="Mask group"
                src={client.maskImage2}
              />
            </CardContent>
          </Card>
        );
          })}
        </div>
      </div>

      <div id="clients-results-cta-section" className="flex flex-col items-center justify-center gap-8 px-4">
        <h2 id="clients-results-cta-title" className="font-semibold text-white text-[20px] text-center tracking-[0px] leading-[24px]">
          Ready to be our next success story?
        </h2>
        <Button 
          id="clients-results-cta-button" 
          className="h-auto bg-secondary-500 text-neutral-900 px-5 py-3.5 rounded hover:bg-secondary-500"
          onClick={() => {
            document.getElementById('testimonials-booking-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          <span id="clients-results-cta-button-text" className="font-semibold text-[18px] tracking-[0px] leading-[21.6px]">
            Book Your Free Consultation
          </span>
        </Button>
      </div>
    </section>
  );
};
