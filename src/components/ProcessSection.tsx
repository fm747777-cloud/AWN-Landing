import React, { useState } from 'react';
import {
  ClipboardCheck,
  FileSignature,
  KeyRound,
  Rocket,
  Users,
} from 'lucide-react';
import { Language, SiteContent } from '../data/content';

interface ProcessSectionProps {
  lang: Language;
  content: SiteContent;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  content,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    ClipboardCheck,
    FileSignature,
    Users,
    KeyRound,
    Rocket,
  ];

  return (
    <section
      id="process"
      className="bg-[#E8F2F1] py-16 lg:py-24 border-b border-[#E9E5DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <p className="text-sm font-semibold text-[#087F87] tracking-wide mb-2">
            {content.processSection.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24545A] leading-tight">
            {content.processSection.title}
          </h2>
          <p className="text-base text-[#24545A]/80 mt-4 leading-relaxed">
            {content.processSection.subtitle}
          </p>
        </div>

        {/* Connected Interactive 5-Step Timeline (Open Architectural Track, Not Boxy Clones) */}
        <div className="relative">
          {/* Desktop Continuous Track Line */}
          <div
            className="hidden lg:block absolute top-7 inset-x-10 h-0.5 bg-[#24545A]/15"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {content.processSection.steps.map((step, index) => {
              const StepIcon = stepIcons[index] || ClipboardCheck;
              const isCurrent = index === activeStep;
              const isCompleted = index <= activeStep;

              return (
                <li
                  key={step.number}
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  className="group relative"
                >
                  <button
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className="w-full text-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087F87] rounded-xl cursor-pointer"
                  >
                    {/* Step Node Header */}
                    <div className="flex items-center gap-4 lg:flex-col lg:items-start mb-4">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200 border-2 ${
                          isCurrent
                            ? 'bg-[#24545A] text-[#D5B76A] border-[#D5B76A] shadow-sm scale-105'
                            : isCompleted
                            ? 'bg-[#087F87] text-[#F8FAFA] border-[#087F87]'
                            : 'bg-[#F8FAFA] text-[#24545A] border-[#E9E5DC] group-hover:border-[#087F87]'
                        }`}
                      >
                        <StepIcon className="w-6 h-6" aria-hidden="true" />
                      </div>

                      <div className="lg:mt-3">
                        <span
                          className={`text-xs font-mono font-bold tracking-wider uppercase block ${
                            isCurrent ? 'text-[#087F87]' : 'text-[#24545A]/55'
                          }`}
                        >
                          {step.number}
                        </span>
                        <h3
                          className={`text-lg font-bold leading-snug mt-0.5 transition-colors ${
                            isCurrent
                              ? 'text-[#087F87]'
                              : 'text-[#24545A] group-hover:text-[#087F87]'
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Step Description */}
                    <p
                      className={`text-sm leading-relaxed ps-18 lg:ps-0 transition-colors ${
                        isCurrent ? 'text-[#24545A]' : 'text-[#24545A]/75'
                      }`}
                    >
                      {step.description}
                    </p>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
