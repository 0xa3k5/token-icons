
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCusdc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M10.972 8.143A3.98 3.98 0 0 0 8.142 12c0 1.843 1.2 3.39 2.83 3.857v-.741A3.29 3.29 0 0 1 8.829 12c0-1.444.9-2.674 2.143-3.116zm2.057 6.973A3.29 3.29 0 0 0 15.172 12c0-1.444-.9-2.674-2.143-3.116v-.741A3.98 3.98 0 0 1 15.857 12c0 1.843-1.2 3.39-2.828 3.857z"/>
    <path fill="currentColor" d="M11.572 9.429h.857V9.9a1.53 1.53 0 0 1 1.17 1.166h-.742c0-.386-.458-.66-.857-.66s-.857.274-.857.604.548.48 1.2.604c1.38.266 1.371.943 1.371 1.235v.03c0 .244-.227 1.058-1.285 1.23v.463h-.857V14.1a1.71 1.71 0 0 1-1.286-1.243h.741c0 .275.287.737.973.737s.857-.385.857-.66c0-.274 0-.548-1.084-.715-1.089-.163-1.371-.823-1.371-1.153 0-.292.175-1.016 1.17-1.174z"/>
    <path fill="currentColor" d="M17.143 6.386a8.02 8.02 0 0 0-4.929-1.672c-4.14 0-7.5 3.262-7.5 7.286s3.36 7.286 7.5 7.286a7.64 7.64 0 0 0 4.929-1.783l-.814-.986A6.36 6.36 0 0 1 12.214 18C8.786 18 6 15.313 6 12s2.786-6 6.214-6c1.509 0 3.035.514 4.115 1.38z"/>

        </>
      ) : (
        <>
          
    <path fill="#657786" d="M10.971 8.143A3.98 3.98 0 0 0 8.142 12c0 1.843 1.2 3.39 2.829 3.857v-.741A3.29 3.29 0 0 1 8.828 12c0-1.444.9-2.674 2.143-3.116zm2.057 6.973A3.29 3.29 0 0 0 15.171 12c0-1.444-.9-2.674-2.143-3.116v-.741A3.98 3.98 0 0 1 15.857 12c0 1.843-1.2 3.39-2.829 3.857z"/>
    <path fill="#283947" d="M11.571 9.429h.857V9.9a1.53 1.53 0 0 1 1.17 1.166h-.741c0-.386-.459-.66-.857-.66-.399 0-.858.274-.858.604s.549.48 1.2.604c1.38.266 1.372.943 1.372 1.235v.03c0 .244-.227 1.058-1.286 1.23v.463h-.857V14.1a1.71 1.71 0 0 1-1.286-1.243h.742c0 .275.287.737.973.737s.857-.385.857-.66c0-.274 0-.548-1.085-.715-1.088-.163-1.371-.823-1.371-1.153 0-.292.176-1.016 1.17-1.174z"/>
    <path fill="url(#CUSDC__a)" d="M17.142 6.386a8.02 8.02 0 0 0-4.928-1.672c-4.14 0-7.5 3.262-7.5 7.286s3.36 7.286 7.5 7.286a7.64 7.64 0 0 0 4.928-1.783l-.814-.986A6.36 6.36 0 0 1 12.214 18C8.785 18 6 15.313 6 12s2.785-6 6.214-6c1.508 0 3.034.514 4.114 1.38z"/>
    <defs>
        <linearGradient id="CUSDC__a" x1="10.928" x2="10.928" y1="4.714" y2="19.286" gradientUnits="userSpaceOnUse">
            <stop stopColor="#27D3A2"/>
            <stop offset="1" stopColor="#9388FD"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconCusdc.displayName = 'Cusdc';

export default IconCusdc;
