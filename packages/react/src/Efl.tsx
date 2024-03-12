
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEfl = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m11.191 9.836-1.84-.413-.143.55 1.786.42c-.477 1.991-1.55 6.207-2.018 7.14-.578 1.15-1.33 1.015-1.374.838a.857.857 0 0 0-.309-1.657.86.86 0 0 0-.86.82c-.073 1.005.942 1.323 1.64 1.323 3.048-.233 4.83-5.33 5.34-7.85l1.836.449.15-.582-1.801-.48c.8-3.787 1.818-4.933 2.402-4.833.12.02.213.065.283.123a.856.856 0 0 0 .427 1.602.86.86 0 0 0 .85-.995l-.002-.012a.85.85 0 0 0-.148-.35c-.383-.6-1.276-.798-1.712-.785-2.685.11-4.123 3.174-4.507 4.692"/>
        </>
      ) : (
        <>
          <path fill="url(#EFL__a)" d="m11.191 9.836-1.84-.413-.143.55 1.786.42c-.477 1.991-1.55 6.207-2.018 7.14-.578 1.15-1.33 1.015-1.374.838a.857.857 0 0 0-.309-1.657.86.86 0 0 0-.86.82c-.073 1.005.942 1.323 1.64 1.323 3.048-.233 4.83-5.33 5.34-7.85l1.836.449.15-.582-1.801-.48c.8-3.787 1.818-4.933 2.402-4.833.12.02.213.065.283.123a.856.856 0 0 0 .427 1.602.86.86 0 0 0 .85-.995l-.002-.012a.85.85 0 0 0-.148-.35c-.383-.6-1.276-.798-1.712-.785-2.685.11-4.123 3.174-4.507 4.692"/><defs><linearGradient id="EFL__a" x1="8.021" x2="16.967" y1="7.242" y2="16.041" gradientUnits="userSpaceOnUse"><stop stopColor="#FF9B13"/><stop offset="1" stopColor="#F58D0B"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconEfl.displayName = 'Efl';
IconEfl.variants = 'brandedmono';

export default IconEfl;
