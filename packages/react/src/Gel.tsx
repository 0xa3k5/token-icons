
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGel = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M16.046 9.086c0 .205-.193.351-.403.33a7 7 0 0 0-1.423 0c-.96.098-1.757.42-2.49.694l-.133.047c-.78.292-1.5.536-2.352.557a5 5 0 0 1-1.11-.103.9.9 0 0 1-.69-.707 4.342 4.342 0 1 1 8.601-.823zm-8.254 2.155a.42.42 0 0 0-.506.369.4.4 0 0 0 .043.197l4.08 7.813a.182.182 0 0 0 .321 0l4.92-8.623a.56.56 0 0 0 .065-.283.496.496 0 0 0-.403-.475 7 7 0 0 0-2.019-.108c-.866.09-1.586.356-2.331.635l-.116.043a7.8 7.8 0 0 1-2.584.6 5.4 5.4 0 0 1-1.47-.172z"/>
    <path fill="currentColor" d="M11.572 11.014c0-.094.055-.171.141-.205l.12-.043c.79-.313 1.617-.526 2.46-.635a7 7 0 0 1 2.019.108.5.5 0 0 1 .402.514.55.55 0 0 1-.064.244l-4.92 8.623a.18.18 0 0 1-.158.094z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#GEL__a)" d="M16.046 9.086c0 .205-.193.351-.403.33a7 7 0 0 0-1.423 0c-.96.098-1.757.42-2.49.694l-.133.047c-.78.292-1.5.536-2.352.557a5 5 0 0 1-1.11-.103.9.9 0 0 1-.69-.707 4.342 4.342 0 1 1 8.601-.823z"/>
    <path fill="url(#GEL__b)" d="M7.792 11.241a.42.42 0 0 0-.506.369.4.4 0 0 0 .043.197l4.08 7.813a.182.182 0 0 0 .321 0l4.92-8.623a.56.56 0 0 0 .065-.283.496.496 0 0 0-.403-.475 7 7 0 0 0-2.019-.108c-.866.09-1.586.356-2.331.635l-.116.043a7.8 7.8 0 0 1-2.584.6 5.4 5.4 0 0 1-1.47-.172z"/>
    <path fill="url(#GEL__c)" d="M11.572 11.014c0-.094.055-.171.141-.205l.12-.043c.79-.313 1.617-.526 2.46-.635a7 7 0 0 1 2.019.108.5.5 0 0 1 .402.514.55.55 0 0 1-.064.244l-4.92 8.623a.18.18 0 0 1-.158.094z"/>
    <defs>
        <linearGradient id="GEL__a" x1="14.143" x2="14.143" y1="10.101" y2="19.714" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC4A4"/>
            <stop offset="1" stopColor="#FE858C"/>
        </linearGradient>
        <linearGradient id="GEL__b" x1="14.143" x2="14.143" y1="10.101" y2="19.714" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC4A4"/>
            <stop offset="1" stopColor="#FE858C"/>
        </linearGradient>
        <linearGradient id="GEL__c" x1="14.143" x2="14.143" y1="10.101" y2="19.714" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC4A4"/>
            <stop offset="1" stopColor="#FE858C"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconGel.displayName = 'Gel';

export default IconGel;
