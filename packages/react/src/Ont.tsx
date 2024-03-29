
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOnt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M5.143 11.155V5.438l11.314 11.673c-.233.197-3.058 2.515-6.418 1.483-2.928-.9-4.999-3.948-4.89-7.446zm13.694 1.714.02 5.675L7.51 6.906c.233-.203 3.058-2.528 6.411-1.503 2.935.885 5.027 3.947 4.917 7.459z"/>

        </>
      ) : (
        <>
          
    <path fill="#49A3FF" d="M5.143 11.155V5.438l11.314 11.673c-.233.197-3.058 2.515-6.418 1.483-2.928-.9-5-3.948-4.89-7.446zm13.693 1.714.02 5.675L7.509 6.906c.233-.203 3.059-2.528 6.412-1.503 2.935.885 5.026 3.947 4.916 7.459z"/>

        </>
      )}
    </BaseIcon>
));

IconOnt.displayName = 'Ont';

export default IconOnt;
