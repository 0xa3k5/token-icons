
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMyria = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6.857 10.286c0-.943.759-1.715 1.715-1.715.955 0 1.714.772 1.714 1.715A1.71 1.71 0 0 0 12 12c1.033 0 1.714-.789 1.714-1.714 0-.943.759-1.715 1.715-1.715.955 0 1.684.772 1.684 1.715 0 1.05.759 1.692 1.744 1.714.875 0 1.715.793 1.715 1.714a1.723 1.723 0 0 1-2.938 1.211 1.7 1.7 0 0 1-.491-1.21c0-.944-.759-1.715-1.714-1.715a1.67 1.67 0 0 0-1.715 1.714A1.71 1.71 0 0 1 12 15.428a1.71 1.71 0 0 1-1.714-1.714A1.71 1.71 0 0 0 8.572 12a1.67 1.67 0 0 0-1.715 1.714c0 .943-.741 1.714-1.697 1.714a1.72 1.72 0 0 1-1.731-1.714c0-.934.788-1.714 1.731-1.714a1.66 1.66 0 0 0 1.697-1.714"/>

        </>
      ) : (
        <>
          
    <path fill="#fff" d="M6.857 10.286c0-.943.759-1.715 1.715-1.715.955 0 1.714.772 1.714 1.715A1.71 1.71 0 0 0 12 12c1.033 0 1.714-.789 1.714-1.714 0-.943.759-1.715 1.715-1.715.955 0 1.684.772 1.684 1.715 0 1.05.759 1.692 1.744 1.714.875 0 1.715.793 1.715 1.714a1.723 1.723 0 0 1-2.938 1.211 1.7 1.7 0 0 1-.491-1.21c0-.944-.759-1.715-1.714-1.715a1.67 1.67 0 0 0-1.715 1.714A1.71 1.71 0 0 1 12 15.428a1.71 1.71 0 0 1-1.714-1.714A1.71 1.71 0 0 0 8.572 12a1.67 1.67 0 0 0-1.715 1.714c0 .943-.741 1.714-1.697 1.714a1.72 1.72 0 0 1-1.731-1.714c0-.934.788-1.714 1.731-1.714a1.66 1.66 0 0 0 1.697-1.714"/>

        </>
      )}
    </BaseIcon>
));

IconMyria.displayName = 'Myria';

export default IconMyria;
