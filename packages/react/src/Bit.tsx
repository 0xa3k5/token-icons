
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBit = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M5.571 6.857v10.286h4.295c.99-.107 1.585-.9 1.705-1.856v-2.331c-.043-.665-.385-1.17-1.028-1.359v-.12c.377-.137.523-.433.6-.814V8.666c0-.965-.75-1.809-1.71-1.809zm6.857 0v1.286h1.286V6.857zm3 0v3h-3v7.286h1.286v-6h1.714v6h3v-1.286h-1.714v-4.714h1.714V9.857h-1.714v-3zm-6.21 1.286c.313.077.605.347.639.668v1.856c-.06.292-.351.42-.651.476H6.857v-3zm.493 4.286c.292.072.532.231.575.527v2.267a.765.765 0 0 1-.575.634H6.857V12.43z"/>

        </>
      ) : (
        <>
          
    <path fill="#ACFE00" d="M5.571 6.857v10.286h4.295c.99-.107 1.585-.9 1.705-1.856v-2.331c-.043-.665-.385-1.17-1.028-1.359v-.12c.377-.137.523-.433.6-.814V8.666c0-.965-.75-1.809-1.71-1.809zm6.857 0v1.286h1.286V6.857zm3 0v3h-3v7.286h1.286v-6h1.714v6h3v-1.286h-1.714v-4.714h1.714V9.857h-1.714v-3zm-6.21 1.286c.313.077.605.347.639.668v1.856c-.06.292-.351.42-.651.476H6.857v-3zm.493 4.286c.292.072.532.231.575.527v2.267a.765.765 0 0 1-.575.634H6.857V12.43z"/>

        </>
      )}
    </BaseIcon>
));

IconBit.displayName = 'Bit';

export default IconBit;
