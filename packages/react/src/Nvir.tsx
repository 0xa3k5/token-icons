
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNvir = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M3.857 16.286h1.286v-3.934c0-1.509 1.285-2.923 2.785-2.923s2.786 1.418 2.786 2.923v1.791H12V12.27c0-2.27-1.757-4.127-3.913-4.127H7.77c-2.156 0-3.913 1.851-3.913 4.127zm6.857 0V15H12v1.286zm.857-8.143h1.749l2.726 5.884a.21.21 0 0 0 .175.116q.127.001.176-.107l2.031-4.179 1.5.643-2.378 4.976a1.42 1.42 0 0 1-1.294.81 1.41 1.41 0 0 1-1.29-.81zm7.929-.429L18.857 9l1.5.643L21 8.357z"/>

        </>
      ) : (
        <>
          
    <path fill="#044AEF" d="M3.857 16.286h1.286v-3.934c0-1.509 1.286-2.923 2.786-2.923s2.786 1.418 2.786 2.923v1.791H12V12.27c0-2.27-1.757-4.127-3.913-4.127H7.77c-2.155 0-3.913 1.851-3.913 4.127zm6.857 0V15H12v1.286zm.857-8.143h1.749l2.726 5.884a.21.21 0 0 0 .175.116q.127.001.176-.107l2.031-4.179 1.5.643-2.378 4.976a1.42 1.42 0 0 1-1.294.81 1.41 1.41 0 0 1-1.29-.81zm7.929-.429L18.857 9l1.5.643L21 8.357z"/>

        </>
      )}
    </BaseIcon>
));

IconNvir.displayName = 'Nvir';

export default IconNvir;
