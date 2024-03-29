
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconYam = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M5.451 11.623a2.8 2.8 0 0 1-.325-1.329c2.232-1.478 6.801-4.453 7.208-4.508.284-.049.576-.004.832.128 3.48 3.995 4.208 7.333 4.384 9.502.081.57-.022 1.83-1.063 2.34-1.303.643-2.417-.155-3.321-.369-.9-.218-2.743-.921-3.596-1.47-.849-.553-1.187-.973-1.65-1.406-.467-.437-2.117-2.275-2.469-2.888"/>
    <path fill="currentColor" d="M14.58 8.211c.167-.231.446.129.566.335 1.032 1.324 1.971 4.23 1.932 4.23-.287-.926-2.7-4.277-2.498-4.565m-5.255.624c2.103-1.28 3.627-2.626 3.405-3.006-.223-.38-2.107.35-4.21 1.63s-3.627 2.626-3.404 3.006 2.107-.35 4.21-1.63m-4.115 2.149c-.103-.094-.038-.24.009-.3.326.155 1.448-.137 1.971-.3-.617.236-1.877.695-1.98.6"/>

        </>
      ) : (
        <>
          
    <path fill="url(#YAM__a)" d="M5.452 11.623a2.8 2.8 0 0 1-.326-1.329c2.233-1.478 6.802-4.453 7.209-4.508.283-.049.575-.004.831.128 3.48 3.995 4.209 7.333 4.384 9.502.082.57-.021 1.83-1.062 2.34-1.303.643-2.418-.155-3.322-.369-.9-.218-2.743-.921-3.596-1.47-.848-.553-1.187-.973-1.65-1.406-.467-.437-2.117-2.275-2.468-2.888"/>
    <path fill="#EBDDD5" d="M14.58 8.211c.168-.231.446.129.566.335 1.033 1.324 1.971 4.23 1.933 4.23-.287-.926-2.7-4.277-2.499-4.565" fillOpacity=".7"/>
    <path fill="#E6DE95" d="M9.326 8.835c2.102-1.28 3.627-2.626 3.404-3.006s-2.107.35-4.21 1.63-3.626 2.626-3.404 3.006c.223.38 2.107-.35 4.21-1.63"/>
    <path fill="url(#YAM__b)" d="M5.212 10.984c-.103-.094-.039-.24.008-.3.326.155 1.449-.137 1.972-.3-.617.236-1.877.695-1.98.6"/>
    <defs>
        <linearGradient id="YAM__a" x1="16.124" x2="8.678" y1="8.258" y2="16.014" gradientUnits="userSpaceOnUse">
            <stop offset=".01" stopColor="#F374AB"/>
            <stop offset=".3" stopColor="#ED4892"/>
            <stop offset=".91" stopColor="#A71C2D"/>
            <stop offset="1" stopColor="#B91F2B"/>
        </linearGradient>
        <linearGradient id="YAM__b" x1="5.212" x2="6.866" y1="10.86" y2="10.869" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EAC4CF"/>
            <stop offset="1" stopColor="#E76D9E" stopOpacity="0"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconYam.displayName = 'Yam';

export default IconYam;
