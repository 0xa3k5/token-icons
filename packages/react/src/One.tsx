
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOne = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M15.917 5.143a3.086 3.086 0 0 0-3.06 2.949v3.287c-.3 0-.514.043-.857.043s-.557 0-.857.042V8.092c0-1.625-1.444-2.992-3.103-2.949-1.577 0-2.854 1.367-2.897 2.949v7.86a2.957 2.957 0 0 0 3.026 2.905c1.615-.043 2.974-1.328 2.974-2.905V12.66c.3 0 .514-.043.857-.043s.557 0 .857-.043v3.335a3.064 3.064 0 0 0 3.103 2.948 2.97 2.97 0 0 0 2.897-2.948V8.092a2.95 2.95 0 0 0-2.94-2.949M8.126 6.43c.977 0 1.731.681 1.731 1.663v3.458a10.4 10.4 0 0 0-2.498.729 4.3 4.3 0 0 0-.93.6V8.087c0-.942.715-1.662 1.697-1.662zm1.731 9.523c0 .985-.754 1.62-1.731 1.62-.982 0-1.697-.639-1.697-1.62v-.772c0-.681.501-1.363 1.44-1.748.643-.3 1.264-.472 1.988-.6zm6.06 1.62c-.977 0-1.774-.639-1.774-1.62v-3.459a10.7 10.7 0 0 0 2.541-.729 4 4 0 0 0 .888-.6v4.788c0 .985-.716 1.62-1.655 1.62m.257-6.917c-.642.3-1.307.47-2.03.6V8.092c0-.986.796-1.663 1.773-1.663a1.58 1.58 0 0 1 1.655 1.663v.771c.043.724-.459 1.363-1.398 1.792"/>
        </>
      ) : (
        <>
          <path fill="url(#ONE__a)" d="M15.917 5.143a3.086 3.086 0 0 0-3.06 2.949v3.287c-.3 0-.514.043-.857.043s-.557 0-.857.042V8.092c0-1.625-1.445-2.992-3.103-2.949-1.577 0-2.855 1.367-2.897 2.949v7.86a2.957 2.957 0 0 0 3.025 2.905c1.616-.043 2.975-1.328 2.975-2.905V12.66c.3 0 .514-.043.857-.043s.557 0 .857-.043v3.335a3.064 3.064 0 0 0 3.103 2.948 2.97 2.97 0 0 0 2.897-2.948V8.092a2.95 2.95 0 0 0-2.94-2.949M8.125 6.43c.978 0 1.732.681 1.732 1.663v3.458a10.4 10.4 0 0 0-2.499.729 4.3 4.3 0 0 0-.93.6V8.087c0-.942.716-1.662 1.697-1.662zm1.732 9.523c0 .985-.754 1.62-1.732 1.62-.981 0-1.697-.639-1.697-1.62v-.772c0-.681.502-1.363 1.44-1.748.643-.3 1.265-.472 1.989-.6zm6.06 1.62c-.977 0-1.774-.639-1.774-1.62v-3.459a10.7 10.7 0 0 0 2.541-.729 4 4 0 0 0 .887-.6v4.788c0 .985-.716 1.62-1.654 1.62m.257-6.917c-.643.3-1.307.47-2.031.6V8.092c0-.986.797-1.663 1.774-1.663a1.58 1.58 0 0 1 1.654 1.663v.771c.043.724-.458 1.363-1.397 1.792"/><defs><linearGradient id="ONE__a" x1="16.79" x2="7.909" y1="7.038" y2="17.285" gradientUnits="userSpaceOnUse"><stop stopColor="#00E8A2"/><stop offset="1" stopColor="#00B1E2"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconOne.displayName = 'One';
IconOne.variants = 'brandedmono';

export default IconOne;
