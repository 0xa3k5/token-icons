
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMona = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m17.164 9.795-.98-4.395-1.92 3.024a9.7 9.7 0 0 0-4.527 0L7.817 5.4l-.98 4.395c-1.05.844-1.694 1.948-1.694 3.155 0 2.647 3.072 4.793 6.857 4.793s6.857-2.146 6.857-4.8c0-1.2-.644-2.304-1.693-3.148m-8.976 1.776h-.453l1.11-1.285h.817zm3.771 3.38-1.892-3.338.466-.268.425.655h2.07l.447-.662.459.275-1.968 3.339zm3.854-3.38-1.475-1.285h.823l1.111 1.285zm-3.84 2.311-.823-1.453h1.716z"/>

        </>
      ) : (
        <>
          
    <path fill="#D0B47A" d="m17.163 9.795-.98-4.395-1.92 3.024a9.7 9.7 0 0 0-4.526 0L7.817 5.4l-.98 4.395c-1.05.844-1.694 1.948-1.694 3.155 0 2.647 3.072 4.793 6.857 4.793s6.857-2.146 6.857-4.8c0-1.2-.645-2.304-1.694-3.148m-8.976 1.776h-.452l1.11-1.285h.816zm3.772 3.38-1.893-3.338.466-.268.425.655h2.071l.446-.662.46.275-1.969 3.339zm3.853-3.38-1.474-1.285h.823l1.11 1.285zm-3.84 2.311-.823-1.453h1.717z"/>

        </>
      )}
    </BaseIcon>
));

IconMona.displayName = 'Mona';

export default IconMona;
