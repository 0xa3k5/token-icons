
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMth = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m14.319 14.743-1.89 1.543v-4.492c0-.75.42-1.478.998-1.928L15 8.57v4.269c0 .737-.12 1.457-.681 1.907zm-4.642.004C9.116 14.297 9 13.577 9 12.84V8.57l1.573 1.295a2.67 2.67 0 0 1 .999 1.928v4.492zm8.203 2.301-1.594 1.38V9c0-.784.201-1.552.814-2.04l1.757-1.389v9.437a2.62 2.62 0 0 1-.977 2.04m-11.76 0a2.61 2.61 0 0 1-.977-2.04V5.571L6.9 6.964c.609.484.814 1.252.814 2.036v9.428z"/>

        </>
      ) : (
        <>
          
    <path fill="#0072FF" d="m14.318 14.743-1.89 1.543v-4.492c0-.75.42-1.478.999-1.928L15 8.57v4.269c0 .737-.12 1.457-.682 1.907zm-4.641.004C9.115 14.297 9 13.577 9 12.84V8.57l1.573 1.295a2.67 2.67 0 0 1 .998 1.928v4.492zm8.203 2.301-1.595 1.38V9c0-.784.202-1.552.815-2.04l1.757-1.389v9.437a2.62 2.62 0 0 1-.977 2.04m-11.76 0a2.61 2.61 0 0 1-.977-2.04V5.571L6.9 6.964c.608.484.814 1.252.814 2.036v9.428z"/>

        </>
      )}
    </BaseIcon>
));

IconMth.displayName = 'Mth';

export default IconMth;
