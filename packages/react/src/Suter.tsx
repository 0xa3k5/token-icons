
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSuter = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M7.334 10.228a.93.93 0 0 1 0-1.312l5.21-5.216a.927.927 0 1 1 1.31 1.313l-5.21 5.215a.925.925 0 0 1-1.31 0m9.408 3.544a.93.93 0 0 1 0 1.313l-5.21 5.214a.927.927 0 1 1-1.311-1.312l5.21-5.216a.93.93 0 0 1 1.311 0m-9.744 1.113a.93.93 0 0 1 0-1.312l3.297-3.302a.93.93 0 0 1 1.311 0 .93.93 0 0 1 0 1.313L8.31 14.885a.927.927 0 0 1-1.311 0m10.079-5.77a.93.93 0 0 1 0 1.313l-3.297 3.3a.928.928 0 1 1-1.312-1.312l3.298-3.301a.927.927 0 0 1 1.311 0"/>

        </>
      ) : (
        <>
          
    <path fill="#38276D" d="M7.334 10.228a.93.93 0 0 1 0-1.312l5.21-5.216a.927.927 0 1 1 1.311 1.313l-5.21 5.215a.925.925 0 0 1-1.31 0m9.408 3.544a.93.93 0 0 1 0 1.313l-5.21 5.214a.927.927 0 1 1-1.312-1.312l5.21-5.216a.927.927 0 0 1 1.312 0m-9.745 1.113a.93.93 0 0 1 0-1.312l3.298-3.302a.93.93 0 0 1 1.31 0 .93.93 0 0 1 0 1.313L8.31 14.885a.927.927 0 0 1-1.31 0"/>
    <path fill="#A674FF" d="M17.079 9.115a.93.93 0 0 1 0 1.313l-3.298 3.3a.928.928 0 1 1-1.311-1.312l3.297-3.301a.926.926 0 0 1 1.312 0"/>

        </>
      )}
    </BaseIcon>
));

IconSuter.displayName = 'Suter';

export default IconSuter;
