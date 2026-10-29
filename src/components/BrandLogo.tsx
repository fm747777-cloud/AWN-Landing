import React, { useState } from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'dark', className = '' }) => {
  const [imgError, setImgError] = useState(false);
  const isLight = variant === 'light';

  return (
    <span className={`inline-flex items-center gap-3 select-none whitespace-nowrap shrink-0 ${className}`}>
      {!imgError && !isLight ? (
        <img
          src="/assets/official/awn-logo.png"
          alt="عون لخدمات الأعمال - AWN Business Services"
          className="h-11 w-auto object-contain shrink-0"
          onError={() => setImgError(true)}
        />
      ) : !imgError && isLight ? (
        <span className="inline-flex items-center gap-3">
          <img
            src="/assets/official/awn-emblem.png"
            alt=""
            aria-hidden="true"
            className="h-10 w-auto object-contain shrink-0"
            onError={() => setImgError(true)}
          />
          <span className="flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-[#F8FAFA]">
              عون
            </span>
            <span className="text-sm font-semibold tracking-wider uppercase text-[#D5B76A]">
              AWN
            </span>
          </span>
        </span>
      ) : (
        <span className="flex items-baseline gap-2">
          <span
            className={`text-2xl font-bold tracking-tight ${
              isLight ? 'text-[#F8FAFA]' : 'text-[#24545A]'
            }`}
          >
            عون
          </span>
          <span
            className={`text-sm font-semibold tracking-wider uppercase ${
              isLight ? 'text-[#D5B76A]' : 'text-[#087F87]'
            }`}
          >
            AWN
          </span>
        </span>
      )}
    </span>
  );
};
