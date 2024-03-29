
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDck = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m17.443 8.357-.017.004-8.25 8.418a1.187 1.187 0 0 1-1.702.008l-3.63-3.673c-.887-.891-.265-2.4.973-2.4h2.087c.365 0 .716.142.982.399l1.928 1.856-.985 1.071L6.9 12.214H4.941l3.382 3.36 8.091-8.28a1.44 1.44 0 0 1 1.029-.437h1.568c1.393 0 2.088 1.732 1.093 2.739l-7.097 7.17a1.26 1.26 0 0 1-1.808-.017l-.485-.502 1.029-1.033.368.386 6.986-7.029c.077-.077.022-.214-.086-.214H17.44z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#DCK__a)" d="m17.443 8.357-.017.004-8.25 8.418a1.187 1.187 0 0 1-1.702.008l-3.63-3.673c-.887-.891-.265-2.4.973-2.4h2.087c.365 0 .716.142.982.399l1.928 1.856-.985 1.071L6.9 12.214H4.941l3.382 3.36 8.091-8.28a1.44 1.44 0 0 1 1.029-.437h1.568c1.393 0 2.088 1.732 1.093 2.739l-7.097 7.17a1.26 1.26 0 0 1-1.808-.017l-.485-.502 1.029-1.033.368.386 6.986-7.029c.077-.077.022-.214-.086-.214H17.44z"/>
    <defs>
        <linearGradient id="DCK__a" x1="20.559" x2="3.429" y1="8.421" y2="8.421" gradientUnits="userSpaceOnUse">
            <stop stopColor="#097CB8"/>
            <stop offset="1" stopColor="#8ADECF"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconDck.displayName = 'Dck';

export default IconDck;
