import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { Language, SiteContent } from '../data/content';

interface WorkflowHubSectionProps {
  lang: Language;
  content: SiteContent;
  onActionClick: () => void;
}

export const WorkflowHubSection: React.FC<WorkflowHubSectionProps> = ({
  lang,
  content,
  onActionClick,
}) => {
  const [activeStreamIndex, setActiveStreamIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const isRtl = lang === 'ar';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;
  const nodes = content.hero.workflowNodes;
  const activeNode = nodes[activeStreamIndex] || nodes[0];

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveStreamIndex((prev) => (prev + 1) % nodes.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [isPaused, nodes.length]);

  const hubPlatformIds = ['mc', 'qiwa', 'gosi', 'muqeem', 'mudad', 'hrsd'];
  const hubPlatforms = hubPlatformIds
    .map((id) => content.platforms.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section
      id="workflow-hub"
      aria-labelledby="workflow-hub-heading"
      className="bg-[#F8FAFA] py-14 lg:py-20 border-b border-[#E9E5DC]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Section Context & Stream Selector */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-sm font-semibold text-[#087F87] tracking-wide mb-2">
                {content.hero.visualHeaderLabel}
              </p>
              <h2
                id="workflow-hub-heading"
                className="text-2xl sm:text-3xl font-bold text-[#24545A] leading-tight"
              >
                {content.hero.visualTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#24545A]/80 mt-3 leading-relaxed">
                {content.hero.visualSubtitle}
              </p>
            </div>

            {/* Interactive Stream Selector Buttons */}
            <div
              role="tablist"
              aria-label={content.hero.visualHeaderLabel}
              className="space-y-2.5"
            >
              {nodes.map((node, index) => {
                const isActive = index === activeStreamIndex;
                return (
                  <button
                    key={node.id}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setActiveStreamIndex(index)}
                    className={`w-full text-start p-4 rounded-xl border transition-all duration-150 cursor-pointer flex items-start justify-between gap-4 focus-visible:outline-2 focus-visible:outline-[#087F87] ${
                      isActive
                        ? 'bg-[#24545A] text-[#F8FAFA] border-[#24545A] shadow-xs'
                        : 'bg-white text-[#24545A] border-[#E9E5DC] hover:border-[#087F87]/50'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono font-bold tabular-nums ${
                            isActive ? 'text-[#D5B76A]' : 'text-[#087F87]'
                          }`}
                        >
                          {node.stepIndex}.
                        </span>
                        <span className="text-base font-bold truncate">
                          {node.title}
                        </span>
                      </div>
                      <p
                        className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                          isActive ? 'text-[#E8F2F1]/85' : 'text-[#24545A]/75'
                        }`}
                      >
                        {node.subtitle}
                      </p>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                        isActive
                          ? 'bg-[#087F87] text-[#F8FAFA]'
                          : 'bg-[#E8F2F1] text-[#087F87]'
                      }`}
                    >
                      {index === 0 ? (
                        <Building2 className="w-4 h-4" aria-hidden="true" />
                      ) : index === 1 ? (
                        <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <Layers className="w-4 h-4" aria-hidden="true" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Connected Platform Diagram Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E9E5DC] rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#E9E5DC]">
                <div>
                  <span className="text-xs font-mono font-bold text-[#087F87]">
                    {activeNode.stepIndex} / 0{nodes.length}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#24545A] mt-0.5">
                    {activeNode.title}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#F8FAFA] border border-[#E9E5DC] rounded-lg">
                  <img
                    src="/assets/official/awn-logo.png"
                    alt="AWN"
                    className="h-5 w-auto object-contain"
                  />
                  <span className="text-xs font-semibold text-[#24545A]">
                    {isRtl ? 'إدارة وتفويض مركزي' : 'Managed Portal Hub'}
                  </span>
                </div>
              </div>

              {/* Connected Official Government Platform Nodes (3x2 Matrix) */}
              <div className="py-6">
                <p className="text-xs font-semibold text-[#24545A]/70 mb-4">
                  {content.hero.connectedPortalsLabel}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {hubPlatforms.map((platform) => {
                    const isConnected = activeNode.activePortals.includes(
                      platform.id
                    );
                    return (
                      <a
                        key={platform.id}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group rounded-xl p-3.5 flex flex-col items-center justify-center text-center transition-all duration-200 ${
                          isConnected
                            ? 'bg-[#F8FAFA] border-2 border-[#087F87] shadow-xs'
                            : 'bg-[#F8FAFA]/50 border border-[#E9E5DC] opacity-50 hover:opacity-100'
                        }`}
                      >
                        <div className="h-9 flex items-center justify-center mb-2">
                          <img
                            src={platform.logoSrc}
                            alt={platform.name}
                            className="max-h-8 max-w-[105px] w-auto h-auto object-contain"
                          />
                        </div>
                        <span
                          className={`text-xs font-semibold line-clamp-1 ${
                            isConnected ? 'text-[#24545A]' : 'text-[#24545A]/70'
                          }`}
                        >
                          {platform.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Outcome Bar */}
              <div className="pt-4 border-t border-[#E9E5DC] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#24545A]">
                  <CheckCircle2
                    className="w-4 h-4 text-[#087F87] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{activeNode.outcomeLabel}</span>
                </div>

                <button
                  type="button"
                  onClick={onActionClick}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#087F87] hover:text-[#24545A] transition-colors cursor-pointer"
                >
                  <span>
                    {isRtl ? 'اطلب هذا المسار' : 'Request This Stream'}
                  </span>
                  <DirectionalArrow className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
