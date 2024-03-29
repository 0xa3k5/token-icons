
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPpt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M11.143 19.86V6.858h4.024c.154 0 .261.125.261.273v7.168c0 .149-.107.274-.253.274h-2.316v5.289c0 .148-.116.282-.27.282h-1.22c-.186-.01-.227-.124-.226-.282m-.857-5.289h-1.43a.29.29 0 0 1-.285-.264V7.13c0-.148.131-.273.285-.273h1.43zm0-9.43c0 .706.858 1.286 1.928 1.286s1.929-.58 1.929-1.285c0-.713-.86-1.285-1.929-1.285-1.07 0-1.928.58-1.928 1.285"/>

        </>
      ) : (
        <>
          
    <path fill="#1E375E" d="M11.143 19.86V6.858h4.024c.154 0 .261.125.261.273v7.168c0 .149-.107.274-.253.274h-2.316v5.289c0 .148-.116.282-.27.282h-1.22c-.186-.01-.227-.124-.226-.282m-.857-5.289h-1.43a.29.29 0 0 1-.285-.264V7.13c0-.148.131-.273.285-.273h1.43zm0-9.43c0 .706.858 1.286 1.928 1.286s1.929-.58 1.929-1.285c0-.713-.86-1.285-1.929-1.285-1.07 0-1.928.58-1.928 1.285"/>

        </>
      )}
    </BaseIcon>
));

IconPpt.displayName = 'Ppt';

export default IconPpt;
