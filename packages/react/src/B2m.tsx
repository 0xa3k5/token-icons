
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconB2m = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M7.834 6.03a7.27 7.27 0 0 1 6.416-.96 7.263 7.263 0 0 1 4.672 9.18 7.3 7.3 0 0 1-1.299 2.383l-.686 2.001c-.025.086-.098.099-.154.039L16.114 18a7.23 7.23 0 0 1-6.634.823A7.25 7.25 0 0 1 5.992 7.886 1.32 1.32 0 0 1 7.83 6.03zm9.459 10.007c.454-.6.804-1.273 1.037-1.988a6.634 6.634 0 0 0-4.174-8.353l-.094-.03a6.66 6.66 0 0 0-5.816.84 1.328 1.328 0 0 1-1.779 1.787A6.63 6.63 0 0 0 9.94 18.322a6.6 6.6 0 0 0 5.73-.772l-.609-.613c-.056-.06-.043-.128.039-.154zm-3.214-4.423c-.293.447-.64.856-1.033 1.217l-1.286 1.312h2.812v1.286H9.429v-1.115L11.64 12.3c.429-.399.72-.72.9-.96q.275-.36.274-.694a.75.75 0 0 0-.235-.557.84.84 0 0 0-.6-.232q-.681 0-1.277.9l-1.273-.703q.495-.734 1.093-1.101c.398-.257.9-.377 1.517-.377a2.53 2.53 0 0 1 1.62.553 1.8 1.8 0 0 1 .698 1.5q.002.515-.278.99z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#B2M__a)" d="M7.834 6.03a7.27 7.27 0 0 1 6.416-.96 7.263 7.263 0 0 1 4.672 9.18 7.3 7.3 0 0 1-1.299 2.383l-.686 2.001c-.025.086-.098.099-.154.039L16.114 18a7.23 7.23 0 0 1-6.634.823A7.25 7.25 0 0 1 5.992 7.886 1.32 1.32 0 0 1 7.83 6.03zm9.459 10.007c.454-.6.804-1.273 1.037-1.988a6.634 6.634 0 0 0-4.174-8.353l-.094-.03a6.66 6.66 0 0 0-5.816.84 1.328 1.328 0 0 1-1.779 1.787A6.63 6.63 0 0 0 9.94 18.322a6.6 6.6 0 0 0 5.73-.772l-.609-.613c-.056-.06-.043-.128.039-.154zm-3.214-4.423c-.293.447-.64.856-1.033 1.217l-1.286 1.312h2.812v1.286H9.429v-1.115L11.64 12.3c.429-.399.72-.72.9-.96q.275-.36.274-.694a.75.75 0 0 0-.235-.557.84.84 0 0 0-.6-.232q-.681 0-1.277.9l-1.273-.703q.495-.734 1.093-1.101c.398-.257.9-.377 1.517-.377a2.53 2.53 0 0 1 1.62.553 1.8 1.8 0 0 1 .698 1.5q.002.515-.278.99z"/>
    <defs>
        <linearGradient id="B2M__a" x1="7.179" x2="15.499" y1="6.405" y2="18.506" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B569F"/>
            <stop offset="1" stopColor="#4596F2"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconB2m.displayName = 'B2m';

export default IconB2m;
