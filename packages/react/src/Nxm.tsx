
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNxm = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M15.429 6.643a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.085 9.24a1.123 1.123 0 0 0 1.594 0l1.423-1.436a1.355 1.355 0 0 1 1.928 0 1.38 1.38 0 0 1 0 1.942l-3.321 3.343a1.14 1.14 0 0 0 0 1.607l1.38 1.388a1.38 1.38 0 0 1-.442 2.24 1.355 1.355 0 0 1-1.487-.298l-3.244-3.266a1.123 1.123 0 0 0-1.594 0l-1.423 1.436a1.355 1.355 0 0 1-1.929 0 1.38 1.38 0 0 1 0-1.942l3.322-3.342a1.14 1.14 0 0 0 0-1.608l-1.38-1.388a1.38 1.38 0 0 1 .441-2.24 1.35 1.35 0 0 1 1.487.298zM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5.357 1.929a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-5.785 2.357a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-4.929-6.163a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
        </>
      ) : (
        <>
          <path fill="#0AB682" d="M15.428 6.643a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.084 9.24a1.123 1.123 0 0 0 1.594 0l1.423-1.436a1.355 1.355 0 0 1 1.929 0 1.38 1.38 0 0 1 0 1.942l-3.322 3.343a1.14 1.14 0 0 0 0 1.607l1.38 1.388a1.38 1.38 0 0 1-.441 2.24 1.355 1.355 0 0 1-1.487-.298l-3.245-3.266a1.12 1.12 0 0 0-1.594 0l-1.423 1.436a1.355 1.355 0 0 1-1.928 0 1.38 1.38 0 0 1 0-1.942l3.321-3.342a1.14 1.14 0 0 0 0-1.608l-1.38-1.388a1.38 1.38 0 0 1 .442-2.24 1.35 1.35 0 0 1 1.487.298zM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5.357 1.929a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-5.786 2.357a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-4.928-6.163a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
        </>
      )}
    </BaseIcon>
));

IconNxm.displayName = 'Nxm';
IconNxm.variants = 'brandedmono';

export default IconNxm;
