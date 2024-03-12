
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBeta = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M17.152 17.152A7.285 7.285 0 1 1 6.849 6.849a7.285 7.285 0 0 1 10.303 10.303M13.62 8.974c-.047-.06.009-.145.082-.124 1.054.296 1.74.78 1.74 1.337 0 .905-1.83 1.633-4.085 1.633-1.47 0-2.76-.309-3.476-.78-.06-.034-.025-.124.043-.111a9.4 9.4 0 0 0 1.8.162c2.255 0 4.085-.728 4.085-1.628a.8.8 0 0 0-.189-.489m.806 2.846c-.056-.069.013-.167.098-.146 1.226.348 2.028.918 2.028 1.565 0 1.05-2.135 1.907-4.77 1.907-1.72 0-3.228-.365-4.063-.913-.073-.043-.03-.146.055-.129.63.125 1.346.193 2.1.193 2.636 0 4.77-.853 4.77-1.907a.92.92 0 0 0-.218-.57" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="url(#BETA__a)" d="M17.151 17.152A7.286 7.286 0 1 1 6.848 6.848 7.286 7.286 0 0 1 17.15 17.152M13.62 8.974c-.048-.06.008-.145.081-.124 1.054.296 1.74.78 1.74 1.337 0 .905-1.83 1.633-4.084 1.633-1.47 0-2.76-.309-3.476-.78-.06-.034-.026-.124.043-.111a9.4 9.4 0 0 0 1.8.162c2.254 0 4.084-.728 4.084-1.628a.8.8 0 0 0-.188-.489m.805 2.846c-.055-.069.013-.167.099-.146 1.226.348 2.027.918 2.027 1.565 0 1.05-2.134 1.907-4.77 1.907-1.719 0-3.227-.365-4.063-.913-.073-.043-.03-.146.056-.129.63.125 1.346.193 2.1.193 2.636 0 4.77-.853 4.77-1.907a.92.92 0 0 0-.219-.57" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="BETA__a" x1="18.895" x2="6.015" y1="9.658" y2="16.944" gradientUnits="userSpaceOnUse"><stop stopColor="#CD9CBC"/><stop offset="1" stopColor="#AD8BD4"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconBeta.displayName = 'Beta';
IconBeta.variants = 'brandedmono';

export default IconBeta;
