
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconHandy = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12.857 7.102c0-1.08.96-1.959 2.143-1.959s2.143.879 2.143 1.959v9.797c0 1.08-.96 1.958-2.143 1.958s-2.143-.878-2.143-1.958z"/>
    <path fill="currentColor" d="M11.151 14.143a2.135 2.135 0 0 0 1.505-3.66 2.14 2.14 0 0 0-1.513-.626zM9 5.143c-1.183 0-2.143.879-2.143 1.959v9.797c0 1.08.96 1.958 2.143 1.958s2.143-.878 2.143-1.958V7.102c0-1.08-.96-1.959-2.143-1.959m2.143 4.714-.009 4.286a2.135 2.135 0 0 1-1.504-3.66 2.14 2.14 0 0 1 1.513-.626"/>

        </>
      ) : (
        <>
          
    <path fill="#FFAA4D" d="M12.857 7.102c0-1.08.96-1.959 2.143-1.959s2.143.879 2.143 1.959v9.797c0 1.08-.96 1.958-2.143 1.958s-2.143-.878-2.143-1.958z"/>
    <path fill="#FFAA4D" d="M11.152 14.143a2.135 2.135 0 0 0 1.504-3.66 2.14 2.14 0 0 0-1.513-.626zM9 5.143c-1.183 0-2.143.879-2.143 1.959v9.797c0 1.08.96 1.958 2.143 1.958s2.143-.878 2.143-1.958V7.102c0-1.08-.96-1.959-2.143-1.959m2.143 4.714-.008 4.286a2.135 2.135 0 0 1-1.505-3.66 2.14 2.14 0 0 1 1.513-.626"/>

        </>
      )}
    </BaseIcon>
));

IconHandy.displayName = 'Handy';

export default IconHandy;
