
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconFactr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M17.636 5.571 12.664 6a.73.73 0 0 0-.662.788c.01.128.054.25.126.356l2.838 4.123a.73.73 0 0 0 1.251-.107l2.139-4.53a.74.74 0 0 0-.343-.986.73.73 0 0 0-.377-.068zM5.57 6.364 6 11.336a.73.73 0 0 0 .787.663.74.74 0 0 0 .357-.123l4.123-2.846a.73.73 0 0 0-.107-1.243L6.63 5.644a.737.737 0 0 0-.986.343.73.73 0 0 0-.068.377zm.79 12.066 4.971-.416a.73.73 0 0 0 .6-.42.74.74 0 0 0-.06-.733l-2.845-4.127a.73.73 0 0 0-1.248.107L5.64 17.383a.737.737 0 0 0 .351.977.73.73 0 0 0 .369.064zm12.068-.78-.42-4.98a.73.73 0 0 0-.788-.665.7.7 0 0 0-.36.129l-4.127 2.846a.73.73 0 0 0 .107 1.251l4.543 2.13a.738.738 0 0 0 1.045-.711"/>

        </>
      ) : (
        <>
          
    <path fill="#5A5BEB" d="M17.636 5.571 12.665 6a.73.73 0 0 0-.663.788c.01.128.054.25.127.356l2.837 4.123a.73.73 0 0 0 1.252-.107l2.138-4.53a.734.734 0 0 0-.72-1.054zm-12.064.793L6 11.336a.73.73 0 0 0 .788.663.74.74 0 0 0 .357-.123l4.123-2.846a.73.73 0 0 0-.108-1.243L6.63 5.644a.737.737 0 0 0-1.054.72zM6.36 18.43l4.972-.416a.73.73 0 0 0 .6-.42.74.74 0 0 0-.06-.733l-2.846-4.127a.73.73 0 0 0-1.247.107L5.64 17.383a.737.737 0 0 0 .352.977.73.73 0 0 0 .368.064zm12.069-.78-.42-4.98a.73.73 0 0 0-.789-.665.7.7 0 0 0-.36.129l-4.127 2.846a.73.73 0 0 0 .107 1.251l4.543 2.13a.738.738 0 0 0 1.046-.711"/>

        </>
      )}
    </BaseIcon>
));

IconFactr.displayName = 'Factr';

export default IconFactr;
