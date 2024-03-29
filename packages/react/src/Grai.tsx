
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGrai = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M16.2 14.143a4.715 4.715 0 0 1-7.766.942 1.4 1.4 0 0 0-1.028-.514c-.845 0-1.406.857-.9 1.53a6.857 6.857 0 0 0 12.008-1.958h.771a.857.857 0 1 0 0-1.715h-3.857a.857.857 0 1 0 0 1.715zm.394-4.715c-.399 0-.767-.21-1.029-.514a4.715 4.715 0 0 0-7.765.943h.771a.857.857 0 1 1 0 1.714H4.714a.857.857 0 1 1 0-1.714h.772a6.857 6.857 0 0 1 12.008-1.959c.506.673-.051 1.53-.9 1.53"/>

        </>
      ) : (
        <>
          
    <path fill="#A101F8" d="M16.2 14.143a4.716 4.716 0 0 1-7.765.942 1.4 1.4 0 0 0-1.029-.514c-.844 0-1.406.857-.9 1.53a6.857 6.857 0 0 0 12.009-1.958h.771a.857.857 0 0 0 0-1.715h-3.857a.857.857 0 1 0 0 1.715zm.395-4.715c-.399 0-.768-.21-1.029-.514a4.715 4.715 0 0 0-7.766.943h.772a.857.857 0 1 1 0 1.714H4.715a.857.857 0 1 1 0-1.714h.771a6.857 6.857 0 0 1 12.009-1.959c.505.673-.052 1.53-.9 1.53"/>

        </>
      )}
    </BaseIcon>
));

IconGrai.displayName = 'Grai';

export default IconGrai;
