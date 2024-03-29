
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBtcmt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M5.246 7.757c-.236-.128-.532.035-.532.3v2.169c0 .244.137.471.356.6l5.743 3.244a2.44 2.44 0 0 0 2.374 0l5.743-3.244a.7.7 0 0 0 .356-.6V8.057c0-.265-.3-.428-.532-.3L12.831 11.1a1.69 1.69 0 0 1-1.662 0zm0 4.166a.357.357 0 0 0-.532.3v2.083a.7.7 0 0 0 .352.6l3.831 2.185a.356.356 0 0 0 .532-.3V14.71a.7.7 0 0 0-.352-.6zm14.04.3a.356.356 0 0 0-.532-.3l-3.831 2.186a.71.71 0 0 0-.351.6v2.082a.357.357 0 0 0 .53.3l3.832-2.185a.71.71 0 0 0 .352-.6z"/>

        </>
      ) : (
        <>
          
    <path fill="#6DD9BF" d="M5.245 7.757c-.235-.128-.531.035-.531.3v2.169c0 .244.137.471.356.6l5.742 3.244a2.44 2.44 0 0 0 2.375 0l5.743-3.244a.7.7 0 0 0 .355-.6V8.057c0-.265-.3-.428-.531-.3L12.83 11.1a1.69 1.69 0 0 1-1.663 0zm0 4.166a.357.357 0 0 0-.531.3v2.083a.7.7 0 0 0 .351.6l3.832 2.185a.356.356 0 0 0 .531-.3V14.71a.7.7 0 0 0-.351-.6zm14.04.3a.356.356 0 0 0-.531-.3l-3.832 2.186a.71.71 0 0 0-.351.6v2.082a.356.356 0 0 0 .531.3l3.832-2.185a.71.71 0 0 0 .351-.6z"/>

        </>
      )}
    </BaseIcon>
));

IconBtcmt.displayName = 'Btcmt';

export default IconBtcmt;
