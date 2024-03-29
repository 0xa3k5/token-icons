
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDlc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6.857 5.974v3.9l1.256 1.543-1.256 1.92v4.693c0 .223.18.403.399.403h5.73c.308-.004 5.87-.326 5.87-6.261 0-4.74-3.668-6.6-5.875-6.6H7.26a.403.403 0 0 0-.403.402m.857 3.322.939 1.307.814-1.449A.28.28 0 0 1 9.71 9h5.439c.098 0 .188.056.236.137l1.34 2.156a.27.27 0 0 1-.02.3l-3.85 4.95a.43.43 0 0 1-.316.176.42.42 0 0 1-.326-.172L8.657 12.16l-.943 1.47v3.673c0 .15.12.27.27.27h4.984c1.676-.06 5.032-1.256 5.032-5.55 0-4.29-3.356-5.516-5.032-5.593H7.984a.27.27 0 0 0-.27.27zm4.192.561-.832 1.286H9.296l.728-1.286zm-2.358 1.715 2.143 2.914-.651-2.915zm5.229-1.715H12.9l.831 1.286h1.774zm.48 1.715-2.143 2.982.647-2.982h1.5zm-3.652-.429h1.578l-.78-1.286zm1.69.428h-1.8l.908 3.643z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#DLC__a)" d="M6.857 5.974v3.9l1.256 1.543-1.256 1.92v4.693c0 .223.18.403.399.403h5.73c.309-.004 5.871-.326 5.871-6.261 0-4.74-3.668-6.6-5.875-6.6H7.26a.403.403 0 0 0-.403.402m.858 3.322.938 1.307.814-1.449A.28.28 0 0 1 9.712 9h5.438c.099 0 .189.056.236.137l1.341 2.156a.27.27 0 0 1-.021.3l-3.849 4.95a.43.43 0 0 1-.317.176.42.42 0 0 1-.325-.172L8.657 12.16l-.942 1.47v3.673c0 .15.12.27.27.27h4.984c1.676-.06 5.031-1.256 5.031-5.55 0-4.29-3.355-5.516-5.031-5.593H7.985a.27.27 0 0 0-.27.27zm4.191.561-.831 1.286H9.296l.729-1.286zm-2.357 1.715 2.143 2.914-.652-2.915zm5.228-1.715H12.9l.832 1.286h1.774zm.48 1.715-2.142 2.982.647-2.982h1.5zm-3.651-.429h1.577l-.78-1.286zm1.689.428h-1.8l.908 3.643z" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="DLC__a" x1="6.857" x2="18.857" y1="12.002" y2="12.002" gradientUnits="userSpaceOnUse">
            <stop stopColor="#16E0B0"/>
            <stop offset="1" stopColor="#14C5D7"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconDlc.displayName = 'Dlc';

export default IconDlc;
