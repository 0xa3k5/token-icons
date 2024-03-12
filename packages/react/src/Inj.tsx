
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconInj = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M6.806 7.513c.086-.108.171-.21.266-.313l.017-.013.03-.026.008-.008A3.1 3.1 0 0 1 8.19 6.51a2.76 2.76 0 0 1 2.859.66c1.17 1.093 1.067 2.858.128 4.028-1.174 1.749-3.201 4.188-.394 6.373.501.39.879.716 2.464 1.174-1.037.193-2.001.129-3.073-.141-.758-.428-1.95-1.346-2.357-2.584-.613-1.877 1.08-4.68 1.899-5.76 1.123-1.5-.694-3.116-2.032-1.307-.698.942-1.924 3.604-1.5 5.584.253 1.118.583 1.937 1.895 3.06a6.5 6.5 0 0 1-.707-.489 6.93 6.93 0 0 1-.566-9.595"/><path fill="currentColor" d="M17.194 16.487q-.126.16-.265.313l-.017.013-.03.025-.009.009a3.1 3.1 0 0 1-1.063.643c-.956.343-2.023.128-2.858-.66-1.17-1.093-1.063-2.859-.129-4.029 1.174-1.748 3.201-4.187.394-6.373-.501-.39-.878-.715-2.464-1.174a6.9 6.9 0 0 1 3.073.141c.758.43 1.95 1.346 2.357 2.585.613 1.877-1.08 4.68-1.899 5.76-1.122 1.5.695 3.115 2.032 1.307.698-.943 1.924-3.604 1.5-5.584-.253-1.119-.583-1.938-1.894-3.06q.366.218.707.488a6.93 6.93 0 0 1 .565 9.596"/>
        </>
      ) : (
        <>
          <path fill="url(#INJ__a)" d="M6.806 7.513c.086-.108.171-.21.266-.313l.017-.013.03-.026.008-.008A3.1 3.1 0 0 1 8.19 6.51a2.76 2.76 0 0 1 2.859.66c1.17 1.093 1.067 2.858.128 4.028-1.174 1.749-3.201 4.188-.394 6.373.501.39.879.716 2.464 1.174-1.037.193-2.001.129-3.073-.141-.758-.428-1.95-1.346-2.357-2.584-.613-1.877 1.08-4.68 1.899-5.76 1.123-1.5-.694-3.116-2.032-1.307-.698.942-1.924 3.604-1.5 5.584.253 1.118.583 1.937 1.895 3.06a6.5 6.5 0 0 1-.707-.489 6.93 6.93 0 0 1-.566-9.595"/><path fill="url(#INJ__b)" d="M17.194 16.487q-.126.16-.265.313l-.017.013-.03.025-.009.009a3.1 3.1 0 0 1-1.063.643c-.956.343-2.023.128-2.858-.66-1.17-1.093-1.063-2.859-.129-4.029 1.174-1.748 3.201-4.187.394-6.373-.501-.39-.878-.715-2.464-1.174a6.9 6.9 0 0 1 3.073.141c.758.43 1.95 1.346 2.357 2.585.613 1.877-1.08 4.68-1.899 5.76-1.122 1.5.695 3.115 2.032 1.307.698-.943 1.924-3.604 1.5-5.584-.253-1.119-.583-1.938-1.894-3.06q.366.218.707.488a6.93 6.93 0 0 1 .565 9.596"/><defs><linearGradient id="INJ__a" x1="5.143" x2="28.351" y1="11.334" y2="11.334" gradientUnits="userSpaceOnUse"><stop stopColor="#0082FA"/><stop offset="1" stopColor="#00F2FE"/></linearGradient><linearGradient id="INJ__b" x1="5.143" x2="18.857" y1="12" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#0082FA"/><stop offset="1" stopColor="#00F2FE"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconInj.displayName = 'Inj';
IconInj.variants = 'brandedmono';

export default IconInj;
