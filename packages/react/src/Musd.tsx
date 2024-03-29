
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMusd = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M5.571 15.857h12.857v2.572H5.571zm5.572-11.143h1.285v9.858h-1.285z"/>
    <path fill="currentColor" d="M13.067 8.143h2.344s.026-.142.017-.356c-.034-.703-.342-2.215-3.492-2.215-3.489 0-3.558 2.104-3.558 2.417 0 .244-.141 1.795 1.912 2.314 2.057.518 2.996.57 2.996 1.329 0 .762-.665.985-1.218.985-.557 0-1.354-.056-1.354-1.046H8.143s-.18 2.572 3.793 2.572c3.972 0 3.921-2.4 3.921-2.764 0-.343-.077-1.685-2.331-2.242-2.25-.557-2.812-.566-2.812-1.35 0-.643.892-.715 1.329-.715.313 0 1.024-.005 1.024 1.07"/>

        </>
      ) : (
        <>
          
    <path fill="#F0F3FA" d="M5.571 15.857h12.857v2.572H5.571zm5.572-11.143h1.285v9.858h-1.285z"/>
    <path fill="#F0F3FA" d="M13.067 8.143h2.344s.026-.142.017-.356c-.034-.703-.342-2.215-3.492-2.215-3.489 0-3.558 2.104-3.558 2.417 0 .244-.141 1.795 1.912 2.314 2.057.518 2.996.57 2.996 1.329 0 .762-.665.985-1.218.985-.557 0-1.354-.056-1.354-1.046H8.143s-.18 2.572 3.793 2.572c3.972 0 3.921-2.4 3.921-2.764 0-.343-.077-1.685-2.331-2.242-2.25-.557-2.812-.566-2.812-1.35 0-.643.892-.715 1.329-.715.313 0 1.024-.005 1.024 1.07"/>

        </>
      )}
    </BaseIcon>
));

IconMusd.displayName = 'Musd';

export default IconMusd;
