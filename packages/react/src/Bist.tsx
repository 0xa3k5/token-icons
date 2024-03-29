
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBist = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M10.916 4.586a2.14 2.14 0 0 1 2.169 0l4.714 2.764a2.14 2.14 0 0 1 1.058 1.85v5.597A2.14 2.14 0 0 1 17.8 16.65l-4.714 2.768a2.14 2.14 0 0 1-2.17 0L6.203 16.65a2.14 2.14 0 0 1-1.059-1.852V9.201A2.14 2.14 0 0 1 6.202 7.35l4.714-2.769zm-3.63 6.128h.009c.342.133 1.157.442 1.277 1.714l-.017-.004c-.536-.197-1.226-.45-1.27-1.71m3.428-3.857c-1.118.489-1.928 1.564-1.928 2.636v4.221h.008a3.428 3.428 0 1 0 6.365-1.971 2.44 2.44 0 0 0-2.087-1.029c-1.912 0-2.229 1.097-2.353 1.522l-.005.017zm0 5.4.103-.06a2.9 2.9 0 0 1 1.385-.433c.651 0 1.512.472 1.512 1.522 0 1.44-1.5 1.5-1.5 1.5s-1.5-.099-1.5-1.38v-1.153z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#BIST__a)" d="M10.915 4.586a2.14 2.14 0 0 1 2.169 0l4.714 2.764a2.14 2.14 0 0 1 1.059 1.85v5.597a2.14 2.14 0 0 1-1.059 1.852l-4.714 2.768a2.14 2.14 0 0 1-2.169 0L6.201 16.65a2.14 2.14 0 0 1-1.058-1.852V9.201A2.14 2.14 0 0 1 6.2 7.35l4.714-2.769zm-3.63 6.128h.009c.343.133 1.157.442 1.277 1.714l-.017-.004c-.536-.197-1.226-.45-1.269-1.71m3.429-3.857c-1.119.489-1.929 1.564-1.929 2.636v4.221h.009a3.428 3.428 0 1 0 6.364-1.971 2.44 2.44 0 0 0-2.087-1.029c-1.911 0-2.228 1.097-2.353 1.522l-.004.017zm0 5.4.103-.06a2.9 2.9 0 0 1 1.384-.433c.652 0 1.513.472 1.513 1.522 0 1.44-1.5 1.5-1.5 1.5s-1.5-.099-1.5-1.38v-1.153z" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="BIST__a" x1="4.476" x2="18.858" y1="12.002" y2="12.261" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F68C1E"/>
            <stop offset="1" stopColor="#FAB242"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconBist.displayName = 'Bist';

export default IconBist;
