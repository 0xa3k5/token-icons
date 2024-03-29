
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSph = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 12.857a3.857 3.857 0 1 0 0-7.714 3.857 3.857 0 0 0 0 7.714m-3 3.858c1.893 0 3.428-.672 3.428-1.5 0-.829-1.535-1.5-3.428-1.5s-3.429.671-3.429 1.5c0 .828 1.535 1.5 3.429 1.5"/>
    <path fill="currentColor" d="M15 16.715c1.893 0 3.428-.672 3.428-1.5 0-.829-1.535-1.5-3.428-1.5s-3.429.671-3.429 1.5c0 .828 1.535 1.5 3.429 1.5"/>
    <path fill="currentColor" d="M12 15.943c.274-.214.428-.463.428-.729s-.154-.514-.428-.728c-.274.214-.429.463-.429.728 0 .266.155.515.429.73"/>
    <path fill="currentColor" d="M12 18.857c1.893 0 3.428-.671 3.428-1.5 0-.828-1.535-1.5-3.428-1.5s-3.429.672-3.429 1.5c0 .829 1.535 1.5 3.429 1.5"/>
    <path fill="currentColor" d="M15.098 16.715H15c-1.367 0-2.546-.352-3.099-.858H12c1.367 0 2.546.352 3.098.858"/>
    <path fill="currentColor" d="M12.098 15.857c-.552.506-1.731.858-3.098.858h-.1c.553-.506 1.732-.858 3.099-.858z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#SPH__a)" d="M12 12.857a3.857 3.857 0 1 0 0-7.714 3.857 3.857 0 0 0 0 7.714"/>
    <path fill="#CCB806" d="M9 16.715c1.893 0 3.428-.672 3.428-1.5 0-.829-1.535-1.5-3.428-1.5s-3.429.671-3.429 1.5c0 .828 1.535 1.5 3.429 1.5"/>
    <path fill="#BC266E" d="M15 16.715c1.893 0 3.428-.672 3.428-1.5 0-.829-1.535-1.5-3.428-1.5s-3.429.671-3.429 1.5c0 .828 1.535 1.5 3.429 1.5"/>
    <path fill="#F2C01C" d="M12 15.943c.274-.214.428-.463.428-.729s-.154-.514-.428-.728c-.274.214-.429.463-.429.728 0 .266.155.515.429.73"/>
    <path fill="#5DC9B5" d="M12 18.857c1.893 0 3.428-.671 3.428-1.5 0-.828-1.535-1.5-3.428-1.5s-3.429.672-3.429 1.5c0 .829 1.535 1.5 3.429 1.5"/>
    <path fill="#CF4E92" d="M15.098 16.715H15c-1.367 0-2.546-.352-3.099-.858H12c1.367 0 2.546.352 3.098.858"/>
    <path fill="#DFE02A" d="M12.098 15.857c-.552.506-1.731.858-3.098.858h-.1c.553-.506 1.732-.858 3.099-.858z"/>
    <defs>
        <linearGradient id="SPH__a" x1="9.5" x2="14.681" y1="6.286" y2="18.243" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CCC"/>
            <stop offset=".49" stopColor="#EDEDED"/>
            <stop offset="1" stopColor="#C5C5C5"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconSph.displayName = 'Sph';

export default IconSph;
