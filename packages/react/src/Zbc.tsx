
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconZbc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M4.581 12.994c-.681-.737-.107-1.937.879-1.851l13.268 1.178c.866.078 1.29 1.115.733 1.8l-2.49 3.052-.278-.236.274.236a1.07 1.07 0 0 1-.823.394H9.253c-.3 0-.583-.128-.785-.347l-3.887-4.23zm.815-1.114c-.326-.03-.515.368-.292.613l3.887 4.23a.36.36 0 0 0 .262.116h6.891a.36.36 0 0 0 .274-.13l2.495-3.055c.184-.227.043-.574-.245-.6L5.396 11.876zM7.063 7.5c.21-.767 1.054-1.23 1.877-1.024l8.216 2.061A1.08 1.08 0 0 1 18 9.566v.085c0 .63-.587 1.123-1.265 1.059L8.22 9.857c-.922-.09-1.543-.917-1.316-1.757zm1.675-.339c-.411-.102-.831.129-.934.515l-.163.6c-.111.42.197.831.66.878l8.516.849c.223.021.42-.142.42-.352v-.085a.36.36 0 0 0-.283-.343L8.738 7.166z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#ZBC__a)" d="M4.581 12.994c-.681-.737-.107-1.937.879-1.851l13.268 1.178c.866.078 1.29 1.115.733 1.8l-2.49 3.052-.278-.236.274.236a1.07 1.07 0 0 1-.823.394H9.253c-.3 0-.583-.128-.785-.347l-3.887-4.23zm.815-1.114c-.326-.03-.515.368-.292.613l3.887 4.23a.36.36 0 0 0 .262.116h6.891a.36.36 0 0 0 .274-.13l2.495-3.055c.184-.227.043-.574-.245-.6L5.396 11.876z"/>
    <path fill="url(#ZBC__b)" d="M7.063 7.5c.21-.767 1.054-1.23 1.877-1.024l8.216 2.061A1.08 1.08 0 0 1 18 9.566v.085c0 .63-.587 1.123-1.265 1.059L8.22 9.857c-.922-.09-1.543-.917-1.316-1.757zm1.675-.339c-.411-.102-.831.129-.934.515l-.163.6c-.111.42.197.831.66.878l8.516.849c.223.021.42-.142.42-.352v-.085a.36.36 0 0 0-.283-.343L8.738 7.166z"/>
    <defs>
        <linearGradient id="ZBC__a" x1="4.277" x2="18.577" y1="9.323" y2="10.774" gradientUnits="userSpaceOnUse">
            <stop stopColor="#45C1CB"/>
            <stop offset=".82" stopColor="#A274BF"/>
            <stop offset="1" stopColor="#6A66B2"/>
        </linearGradient>
        <linearGradient id="ZBC__b" x1="6.574" x2="17.931" y1="7.959" y2="10.397" gradientUnits="userSpaceOnUse">
            <stop stopColor="#45C1CB"/>
            <stop offset=".72" stopColor="#A991CB"/>
            <stop offset="1" stopColor="#6A66B2"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconZbc.displayName = 'Zbc';

export default IconZbc;
