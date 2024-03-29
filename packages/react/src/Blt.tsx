
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBlt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M11.705 4.798c-.746.604-1.89 1.892-1.89 3.407 0 1.164.952 2.108 2.127 2.108a2.117 2.117 0 0 0 2.125-2.108c0-1.515-1.143-2.803-1.889-3.407a.375.375 0 0 0-.473 0m.236 8.889a2.117 2.117 0 0 0-2.125 2.109c0 1.515 1.143 2.802 1.889 3.406a.375.375 0 0 0 .473 0c.746-.603 1.89-1.892 1.89-3.407a2.117 2.117 0 0 0-2.126-2.108m3.826.422A2.117 2.117 0 0 1 13.642 12c0-1.164.952-2.108 2.125-2.108 1.528 0 2.826 1.133 3.435 1.874a.37.37 0 0 1 0 .469c-.61.74-1.908 1.874-3.435 1.874M4.8 11.766c.608-.74 1.907-1.874 3.434-1.874 1.174 0 2.126.944 2.126 2.108a2.117 2.117 0 0 1-2.126 2.109c-1.527 0-2.826-1.134-3.434-1.874a.37.37 0 0 1 0-.47"/>

        </>
      ) : (
        <>
          
    <path fill="#616AE9" d="M11.704 4.798c-.745.604-1.889 1.892-1.889 3.407 0 1.164.952 2.108 2.126 2.108a2.117 2.117 0 0 0 2.126-2.108c0-1.515-1.143-2.803-1.89-3.407a.375.375 0 0 0-.473 0m.237 8.889a2.117 2.117 0 0 0-2.126 2.109c0 1.515 1.143 2.802 1.89 3.406a.375.375 0 0 0 .473 0c.746-.603 1.889-1.892 1.889-3.407a2.117 2.117 0 0 0-2.126-2.108m3.826.422A2.117 2.117 0 0 1 13.64 12c0-1.164.952-2.108 2.126-2.108 1.527 0 2.826 1.133 3.434 1.874a.37.37 0 0 1 0 .469c-.609.74-1.907 1.874-3.434 1.874M4.798 11.766c.609-.74 1.908-1.874 3.435-1.874 1.173 0 2.125.944 2.125 2.108a2.117 2.117 0 0 1-2.125 2.109c-1.528 0-2.826-1.134-3.435-1.874a.37.37 0 0 1 0-.47"/>

        </>
      )}
    </BaseIcon>
));

IconBlt.displayName = 'Blt';

export default IconBlt;
