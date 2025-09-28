import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    id: 1,
    company: "Ribal Magic",
    industry: "Home Appliances Industry",
    market: "Saudi Market",
    profileImage: "/figmaAssets/profile-photo.svg",
    flagImage: "/figmaAssets/saudi-arabia.svg",
    challenge:
      "PDPs failed to drive conversions\nVisual clarity and structure were lacking\nNo sense of urgency to purchase\nUsers bounced before exploring products fully",
    hypothesis:
      "Improve visual clarity on PDPs\nOrganize product info for easier reading\nAdd scarcity & urgency triggers\nAim to boost engagement and conversions",
    solution:
      "Enhanced imagery & layout for clarity\nStructured benefits, features & reviews\nAdded scarcity & urgency cues\nStrengthened CTAs & streamlined checkout",
    results: [
      { metric: "+8.95%", label: "Conversion Rate" },
      { metric: "+9.41%", label: "Revenue Growth" },
      { metric: "+9.43%", label: "Products per Visitor" },
    ],
    beforeImage: "/figmaAssets/add-image-2.png",
    afterImage: "/figmaAssets/add-image-3.png",
  },
  {
    id: 2,
    company: "Vitrine Furniture",
    industry: "Furniture Industry",
    market: "Egypt Market",
    profileImage: "/figmaAssets/profile-photo-1.svg",
    flagImage: "/figmaAssets/egypt.svg",
    challenge:
      "Users bypassing PLP showed higher conversion\nPreference for faster, direct product access\nHomepage buried products too deep\nMissed chances to guide users to convert",
    hypothesis:
      "Surface products directly on homepage\nSimplify and speed up user journey\nEncourage stronger engagement\nDrive higher conversions and revenue",
    solution:
      'Increased product visibility with ratings & CTAs\nOptimized categories for smoother browsing\nAdded "Best Sellers" for social proof\nUsed banners to highlight trending products',
    results: [
      { metric: "+28.47%", label: "Conversion Rate" },
      { metric: "+70.73%", label: "Revenue per Visitor" },
      { metric: "+23.88%", label: "Products per Visitor" },
    ],
    beforeImage: "/figmaAssets/add-image-6.png",
    afterImage: "/figmaAssets/add-image-7.png",
  },
  {
    id: 3,
    company: "Squadio",
    industry: "Hiring Industry",
    market: "Saudi Market",
    profileImage: "/figmaAssets/profile-photo-5.svg",
    flagImage: "/figmaAssets/saudi-arabia.svg",
    challenge:
      "Homepage not converting well\nValue proposition unclear\nNavigation distracted users\nMissing trust signals led to drop-offs",
    hypothesis:
      "Clarified value proposition\nSimplified navigation flow\nBoosted CTA visibility\nShowcased client credibility early",
    solution:
      "Clearer value proposition messaging\nSimplified navigation (removed toggle)\nEnhanced CTA design and copy\nShowcased client logos above the fold",
    results: [
      { metric: "+44.02%", label: "Funnel Progression" },
      { metric: "+4.33%", label: "Conversion Rate" },
      { metric: "+6.49%", label: "Boost Engagement" },
    ],
    beforeImage: "/figmaAssets/add-image-10.png",
    afterImage: "/figmaAssets/add-image-11.png",
  },
  {
    id: 4,
    company: "Regal Honey",
    industry: "Honey Industry",
    market: "Kuwait Market",
    profileImage: "/figmaAssets/profile-photo-7.svg",
    flagImage: "/figmaAssets/kuwait.svg",
    challenge:
      "Customers enjoyed browsing but hesitated to buy.\nQuestions about honey's quality, source, and benefits.\nKey info on product pages often went unnoticed.\nSurveys showed low brand trust.",
    hypothesis:
      "Focused on transparency and authenticity\nUsed engaging video content\nAddressed customer questions upfront\nAimed to build trust and boost confidence",
    solution:
      "Added short videos on product pages\nShowed real factory and beehive footage\nExplained ingredients, benefits, and uses\nBuilt credibility through clear visuals",
    results: [
      { metric: "+6.4%", label: "Conversion Rate" },
      { metric: "+8.03%", label: "Revenue per Visitor" },
      { metric: "+6.42%", label: "Products per Visitor" },
    ],
    beforeImage: "/figmaAssets/add-image-14.png",
    afterImage: "/figmaAssets/add-image-15.png",
  },
];

export const OverviewSection = (): JSX.Element => {
  return (
    <section className="w-full bg-dark-mode900 py-24">
      <div className="flex flex-col items-center gap-6 mb-16 px-4">
        <h1 className="font-heading-h1-semi-bold font-[number:var(--heading-h1-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h1-semi-bold-font-size)] text-center tracking-[var(--heading-h1-semi-bold-letter-spacing)] leading-[var(--heading-h1-semi-bold-line-height)] [font-style:var(--heading-h1-semi-bold-font-style)]">
          Case Studies
        </h1>

        <h2 className="font-heading-h1-small-semi-bold font-[number:var(--heading-h1-small-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h1-small-semi-bold-font-size)] text-center tracking-[var(--heading-h1-small-semi-bold-letter-spacing)] leading-[var(--heading-h1-small-semi-bold-line-height)] [font-style:var(--heading-h1-small-semi-bold-font-style)]">
          We Don&apos;t Guess. We Deliver.
        </h2>

        <p className="max-w-4xl font-subheading-regular font-[number:var(--subheading-regular-font-weight)] text-shadeswhite text-[length:var(--subheading-regular-font-size)] text-center tracking-[var(--subheading-regular-letter-spacing)] leading-[var(--subheading-regular-line-height)] [font-style:var(--subheading-regular-font-style)]">
          Instead of relying on &quot;best practices&quot; or guesswork, every
          change we make is backed by data, testing, and proven CRO strategies.
          Here&apos;s a glimpse of the revenue and conversion growth we&apos;ve
          created for stores like yours.
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 pb-4">
        {caseStudies.map((study) => (
          <div key={study.id} className="flex-shrink-0 w-[1045px]">
            <Card className="rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.3)_100%),radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)]">
              <CardContent className="p-6">
                <Card className="rounded-xl border-none backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(176,241,201,0.3)_0%,rgba(6,35,17,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(59,126,85,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <img
                        className="w-10 h-16 object-cover"
                        alt="Profile photo"
                        src={study.profileImage}
                      />

                      <div className="flex-1 flex flex-col gap-2.5">
                        <h3 className="font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h5-semi-bold-font-size)] tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]">
                          {study.company}
                        </h3>

                        <Badge className="gap-2 px-3 py-1.5 rounded-[100px] bg-[#6ae49926] text-secondary-300 font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-[length:var(--paragraph-p1-regular-font-size)] tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)] w-fit">
                          {study.industry}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2">
                        <img
                          className="w-8 h-8"
                          alt="Country flag"
                          src={study.flagImage}
                        />

                        <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-shadeswhite text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)] whitespace-nowrap">
                          {study.market}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4 mt-6">
                  <div className="flex flex-col gap-3 w-[491px]">
                    <Card className="rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)]">
                      <CardContent className="p-5">
                        <h4 className="font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-secondary-200 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] [font-style:var(--paragraph-p3-semi-bold-font-style)] mb-2.5">
                          The Challenge:
                        </h4>
                        <p className="font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p1-regular-font-size)] tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)] whitespace-pre-line">
                          {study.challenge}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)]">
                      <CardContent className="p-5">
                        <h4 className="font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-secondary-200 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] [font-style:var(--paragraph-p3-semi-bold-font-style)] mb-2.5">
                          Our Hypothesis:
                        </h4>
                        <p className="font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p1-regular-font-size)] tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)] whitespace-pre-line">
                          {study.hypothesis}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)]">
                      <CardContent className="p-5">
                        <h4 className="font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-secondary-200 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] [font-style:var(--paragraph-p3-semi-bold-font-style)] mb-2.5">
                          The Solution:
                        </h4>
                        <p className="font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p1-regular-font-size)] tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)] whitespace-pre-line">
                          {study.solution}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)]">
                      <CardContent className="p-5">
                        <h4 className="font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-secondary-200 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] [font-style:var(--paragraph-p3-semi-bold-font-style)] mb-2.5">
                          The Results:
                        </h4>
                        <div className="flex items-center gap-6">
                          {study.results.map((result, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center gap-1.5"
                            >
                              <span className="font-heading-h4-semi-bold font-[number:var(--heading-h4-semi-bold-font-weight)] text-secondary-500 text-[length:var(--heading-h4-semi-bold-font-size)] text-center tracking-[var(--heading-h4-semi-bold-letter-spacing)] leading-[var(--heading-h4-semi-bold-line-height)] [font-style:var(--heading-h4-semi-bold-font-style)]">
                                {result.metric}
                              </span>
                              <span className="font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
                                {result.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="w-[490px] rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)] relative">
                    <CardContent className="p-6">
                      <div className="flex justify-between mb-6">
                        <span className="font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-secondary-200 text-[length:var(--paragraph-p3-semi-bold-font-size)] text-center tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                          Before
                        </span>
                        <span className="font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-secondary-200 text-[length:var(--paragraph-p3-semi-bold-font-size)] text-center tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                          After
                        </span>
                      </div>
                      <div className="flex gap-4 justify-center">
                        <img
                          className="w-[201px] h-[465px] rounded-[19.89px] border-[7.46px] border-solid border-[#4b5768] object-cover"
                          alt="Before image"
                          src={study.beforeImage}
                        />
                        <img
                          className="w-[201px] h-[465px] rounded-[19.89px] border-[7.46px] border-solid border-[#4b5768] object-cover"
                          alt="After image"
                          src={study.afterImage}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
