
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconKcs = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m10.208 12 3.876 3.997 2.452-2.52a1.1 1.1 0 0 1 1.567 0 1.175 1.175 0 0 1 0 1.613l-3.232 3.33a1.106 1.106 0 0 1-1.567 0l-4.733-4.8v2.85c.009.61-.461 1.128-1.071 1.14-.613-.008-1.08-.527-1.072-1.14V7.53c0-.63.457-1.14 1.072-1.14.607 0 1.071.51 1.071 1.14v2.85l4.733-4.8a1.106 1.106 0 0 1 1.568 0l3.224 3.33a1.173 1.173 0 0 1 0 1.612 1.097 1.097 0 0 1-1.56 0l-2.452-2.52zm3.884-1.14c.607 0 1.102.51 1.102 1.14s-.495 1.14-1.102 1.14-1.11-.51-1.11-1.14.495-1.14 1.11-1.14"/>
        </>
      ) : (
        <>
          <path fill="#23AF91" d="m10.208 12 3.877 3.997 2.452-2.52a1.1 1.1 0 0 1 1.567 0 1.175 1.175 0 0 1 0 1.613l-3.232 3.33a1.106 1.106 0 0 1-1.568 0l-4.732-4.8v2.85c.008.61-.462 1.128-1.072 1.14-.613-.008-1.08-.527-1.071-1.14V7.53c0-.63.456-1.14 1.071-1.14.608 0 1.072.51 1.072 1.14v2.85l4.733-4.8a1.106 1.106 0 0 1 1.567 0l3.224 3.33a1.173 1.173 0 0 1 0 1.612 1.097 1.097 0 0 1-1.56 0l-2.451-2.52zm3.884-1.14c.607 0 1.102.51 1.102 1.14s-.495 1.14-1.102 1.14-1.11-.51-1.11-1.14.495-1.14 1.11-1.14"/>
        </>
      )}
    </BaseIcon>
));

IconKcs.displayName = 'Kcs';
IconKcs.variants = 'brandedmono';

export default IconKcs;
