
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBsw = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M17.315 7.723c-.48.094-.93.227-1.303.308a2.33 2.33 0 0 0-1.826 2.04c-.154 1.068.206 1.526.047 2.769-.274 2.164-2.357 2.914-3.326 3.364-.557.257-1.924.857-2.974 1.316a6.858 6.858 0 0 0 9.429-9.789l-.052-.008z"/>
    <path fill="currentColor" d="M11.229 10.993c.527-1.14.338-1.144.737-2.216A1.54 1.54 0 0 1 13.5 7.714c.395 0 .806.125.982.146.715.099.9-.159 2.413-.399l.214-.03A6.853 6.853 0 0 0 5.807 9.047c2.268.557 4.71 1.779 5.422 1.946m-1.5-4.65c.201.03 1.17 1.23 1.35 4.32 0 0-1.243-.3-1.513-.943-.219-.523.068-1.217.163-3.377m7.628 1.371.013.013-.056-.004c.018-.009.03-.009.043-.009M5.143 12q.002-.825.184-1.586.373.307.798.699c1.787 1.654 4.692 2.961 5.75 1.748h.005c-.193.258-.891 1.003-2.301.75l-2.272 3.39A6.84 6.84 0 0 1 5.143 12"/>

        </>
      ) : (
        <>
          
    <path fill="url(#BSW__a)" d="M17.314 7.723c-.48.094-.93.227-1.303.308a2.33 2.33 0 0 0-1.826 2.04c-.154 1.068.206 1.526.048 2.769-.275 2.164-2.358 2.914-3.326 3.364-.557.257-1.924.857-2.974 1.316a6.858 6.858 0 0 0 9.428-9.789l-.051-.008z"/>
    <path fill="url(#BSW__b)" d="M11.228 10.993c.527-1.14.339-1.144.737-2.216A1.54 1.54 0 0 1 13.5 7.714c.394 0 .805.125.981.146.716.099.9-.159 2.413-.399l.214-.03A6.853 6.853 0 0 0 5.807 9.047c2.267.557 4.71 1.779 5.421 1.946m-1.5-4.65c.202.03 1.17 1.23 1.35 4.32 0 0-1.243-.3-1.513-.943-.218-.523.069-1.217.163-3.377m7.629 1.371.013.013-.056-.004c.017-.009.03-.009.043-.009M5.143 12q.002-.825.184-1.586.372.307.797.699c1.787 1.654 4.693 2.961 5.751 1.748h.005c-.193.258-.892 1.003-2.302.75l-2.271 3.39A6.84 6.84 0 0 1 5.143 12"/>
    <defs>
        <linearGradient id="BSW__a" x1="15.421" x2="13.46" y1="7.353" y2="18.35" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF496A"/>
            <stop offset="1" stopColor="#E42648"/>
        </linearGradient>
        <linearGradient id="BSW__b" x1="8.451" x2="12.03" y1="15.244" y2="5.143" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1158F1"/>
            <stop offset="1" stopColor="#119BED"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconBsw.displayName = 'Bsw';

export default IconBsw;
