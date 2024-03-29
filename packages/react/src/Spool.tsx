
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSpool = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M8.366 13.714 7.033 11.28a1.414 1.414 0 0 1 .544-1.912l7.663-4.337c.098-.098.248-.36.098-.587l.27-.158 1.449 2.541c.146.407.21 1.35-.681 1.856-.888.501-5.396 2.987-7.54 4.166-.145.08-.402.334-.273.707a2 2 0 0 1-.197.158m0 6L7.033 17.28a1.414 1.414 0 0 1 .544-1.912l7.663-4.337c.098-.098.248-.36.098-.587l.27-.158 1.449 2.541c.146.407.21 1.35-.681 1.856-.888.501-5.396 2.987-7.54 4.166-.145.08-.402.334-.273.707a2 2 0 0 1-.197.158"/>

        </>
      ) : (
        <>
          
    <path fill="#24B4E6" d="M8.366 13.714 7.033 11.28a1.414 1.414 0 0 1 .544-1.912l7.663-4.337c.098-.098.248-.36.098-.587l.27-.158 1.449 2.541c.146.407.21 1.35-.681 1.856-.888.501-5.396 2.987-7.54 4.166-.145.08-.402.334-.273.707a2 2 0 0 1-.197.158m0 6L7.033 17.28a1.414 1.414 0 0 1 .544-1.912l7.663-4.337c.098-.098.248-.36.098-.587l.27-.158 1.449 2.541c.146.407.21 1.35-.681 1.856-.888.501-5.396 2.987-7.54 4.166-.145.08-.402.334-.273.707a2 2 0 0 1-.197.158"/>

        </>
      )}
    </BaseIcon>
));

IconSpool.displayName = 'Spool';

export default IconSpool;
