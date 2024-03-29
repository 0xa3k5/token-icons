
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMplx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12.557 14.074a.33.33 0 0 0 .013-.347L8.79 7.016a.3.3 0 0 0-.257-.16H5.876c-.236 0-.382.27-.262.485l4.963 8.94a.298.298 0 0 0 .514.022zm6.857 2.64c.232 0 .377-.27.257-.48l-5.1-9.218a.3.3 0 0 0-.265-.16h-2.649c-.231 0-.377.27-.257.485l5.117 9.214a.3.3 0 0 0 .257.16zm-11.443-.57c.116.214-.03.57-.265.57H5.889c-.172 0-.318-.231-.318-.407V13.07c0-.325.42-.445.579-.163l1.817 3.236z"/>

        </>
      ) : (
        <>
          
    <path fill="#fff" d="M12.557 14.074a.33.33 0 0 0 .013-.347L8.79 7.016a.3.3 0 0 0-.257-.16H5.876c-.236 0-.382.27-.262.485l4.963 8.94a.298.298 0 0 0 .514.022zm6.857 2.64c.232 0 .377-.27.257-.48l-5.1-9.218a.3.3 0 0 0-.265-.16h-2.649c-.231 0-.377.27-.257.485l5.117 9.214a.3.3 0 0 0 .257.16zm-11.443-.57c.116.214-.03.57-.265.57H5.889c-.172 0-.318-.231-.318-.407V13.07c0-.325.42-.445.579-.163l1.817 3.236z"/>

        </>
      )}
    </BaseIcon>
));

IconMplx.displayName = 'Mplx';

export default IconMplx;
