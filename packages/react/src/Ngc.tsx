
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNgc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m15.428 12.673-2.262.184 1.928-5.065-5.893.827-.63 5.61 1.41-.082-.257 6.429zM9.201 8.156l5.82-.729-2.743-1.187s.352-2.087-1.65-2.811l-.24.707s1.299.257 1.115 2.156z"/>

        </>
      ) : (
        <>
          
    <path fill="#EC1B2E" d="m15.428 12.673-2.262.184 1.928-5.065-5.893.827-.63 5.61 1.41-.082-.257 6.429zM9.201 8.156l5.82-.729-2.743-1.187s.352-2.087-1.65-2.811l-.24.707s1.299.257 1.115 2.156z"/>

        </>
      )}
    </BaseIcon>
));

IconNgc.displayName = 'Ngc';

export default IconNgc;
