
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconRegen = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m4.491 11.229 4.436.617-4.436.621-.634-.621.634-.622zm2.85 1.543h1.903l-1.586.934-.634-.309.317-.621zm2.216.625-1.586.617v.622h.639l.947-1.243zm-.63 2.477v-.617l1.264-.93-.634 1.547zm1.264 3.103.952-4.341-1.899 4.028.313.622zm1.586-2.79.317-1.551.317 1.551-.317.309zm1.264 0-.313-1.551.947 1.243v.617zm4.436.309-3.167-3.099 4.118 2.169v.93zm-.947-4.963-1.903.313 1.903.308.313-.308zm.947-4.337-3.167 3.098 4.118-1.86v-.93zm-3.802.93-.317 1.243.952-.935v-.621zm-1.264-.622-.317 1.552-.317-1.552.317-.308zm-2.22-2.481.952 4.341-1.899-4.028.313-.622zM8.927 8.434l.947 1.552-1.586-.93v-.622z"/>

        </>
      ) : (
        <>
          
    <path fill="#52B675" d="m4.492 11.229 4.435.617-4.435.621-.635-.621.635-.622zm2.85 1.543h1.903l-1.586.934-.634-.309.317-.621zm2.215.625-1.585.617v.622h.638l.947-1.243zm-.63 2.477v-.617l1.265-.93-.635 1.547zm1.265 3.103.951-4.341-1.898 4.028.312.622zm1.585-2.79.318-1.551.317 1.551-.317.309zm1.265 0-.313-1.551.947 1.243v.617zm4.435.309-3.167-3.099 4.119 2.169v.93zm-.947-4.963-1.903.313 1.903.308.313-.308zm.947-4.337-3.167 3.098 4.119-1.86v-.93zm-3.801.93-.317 1.243.951-.935v-.621zm-1.264-.622-.317 1.552-.318-1.552.318-.308zm-2.22-2.481.951 4.341-1.898-4.028.312-.622zM8.927 8.434l.948 1.552-1.586-.93v-.622z"/>

        </>
      )}
    </BaseIcon>
));

IconRegen.displayName = 'Regen';

export default IconRegen;
