
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBake = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M19.714 11.842V12a7.715 7.715 0 1 1-7.937-7.71q.094.015.214.017c.742.03 1.037.502 1.106 1.042a4.406 4.406 0 0 0 5.794 5.361c.536.154.768.776.823 1.131m-5.593 2.28A3 3 0 1 1 9.88 9.877a3 3 0 0 1 4.242 4.243M8.37 5.681l.005-.004H8.37zM6.12 7.69a7.3 7.3 0 0 1 2.25-2.01 2.297 2.297 0 0 0 1.467 3.122 3.857 3.857 0 1 0 5.648 4.843c.227-.138.497-.189.776-.013.428.274.54.758.184 1.448-.355.69-.557 1.119-.355 1.745.09.274.39.492.711.651A7.286 7.286 0 0 1 6.12 7.691m.612 3.326a.429.429 0 1 1-.607-.606.429.429 0 0 1 .607.606m5.571 6a.428.428 0 1 0-.606-.606.428.428 0 0 0 .606.606m-2.206.795a.643.643 0 1 1-.909-.91.643.643 0 0 1 .91.91" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#AD5428" d="M19.715 12v-.159c-.056-.355-.287-.977-.823-1.131a4.405 4.405 0 0 1-5.794-5.361c-.069-.54-.365-1.012-1.106-1.042a2 2 0 0 1-.214-.017A7.714 7.714 0 1 0 19.715 12M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#BAKE__a)" d="M8.374 5.678A7.286 7.286 0 1 0 16.8 17.477c-.321-.159-.621-.377-.711-.651-.202-.626 0-1.055.355-1.745.356-.69.245-1.174-.184-1.448-.279-.176-.549-.124-.776.013a3.858 3.858 0 1 1-5.648-4.843A2.297 2.297 0 0 1 8.37 5.678zM6.43 11.143a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857m6 5.571a.428.428 0 1 1-.857 0 .428.428 0 0 1 .857 0M9.643 18a.643.643 0 1 0 0-1.285.643.643 0 0 0 0 1.285" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="BAKE__a" x1="10.761" x2="4.826" y1="12.06" y2="18.806" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEC773"/>
            <stop offset="1" stopColor="#FFA92C"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconBake.displayName = 'Bake';

export default IconBake;
