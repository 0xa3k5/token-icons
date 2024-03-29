
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSoul = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M7.448 6h9.061c1.282 0 2.305 1.071 2.348 2.402v8.002c0 .696-.82 1.028-1.267.507l-.014-.015a1.34 1.34 0 0 0-2.032 0l-.735.854a.71.71 0 0 1-1.08 0l-.734-.854a1.34 1.34 0 0 0-2.032 0l-.735.84a.71.71 0 0 1-1.08 0l-.706-.825a1.32 1.32 0 0 0-2.031-.015c-.447.522-1.268.189-1.268-.506V8.402C5.143 7.071 6.18 6 7.448 6m1.98 5.143a1.285 1.285 0 0 0 1.16-1.84.429.429 0 1 1-.605-.606 1.285 1.285 0 1 0-.554 2.446M15 9c0-.114.045-.223.125-.303a1.286 1.286 0 1 0 .606.606A.429.429 0 0 1 15 9" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#17B1E8" d="M16.509 6H7.447C6.18 6 5.143 7.071 5.143 8.402v7.988c0 .695.82 1.028 1.267.506a1.32 1.32 0 0 1 2.032.015l.705.825a.71.71 0 0 0 1.08 0l.736-.84a1.34 1.34 0 0 1 2.031 0l.735.854a.71.71 0 0 0 1.08 0l.735-.854a1.34 1.34 0 0 1 2.031 0l.014.015c.447.521 1.268.189 1.268-.507V8.402C18.814 7.072 17.79 6 16.509 6"/>
    <path fill="#fff" d="M14.572 11.143a1.285 1.285 0 1 0 0-2.571 1.285 1.285 0 0 0 0 2.57" opacity=".5" fillOpacity=".667"/>
    <path fill="#fff" d="M14.571 10.714a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714" fillOpacity=".667"/>
    <path fill="#fff" d="M9.428 11.143a1.285 1.285 0 1 0 0-2.57 1.285 1.285 0 0 0 0 2.57" opacity=".5" fillOpacity=".667"/>
    <path fill="#fff" d="M9.428 10.714a.857.857 0 1 0 0-1.713.857.857 0 0 0 0 1.713" fillOpacity=".667"/>
    <path fill="#17B1E8" d="M10.715 9a.429.429 0 1 0-.858 0 .429.429 0 0 0 .858 0m5.142 0A.428.428 0 1 0 15 9a.428.428 0 0 0 .857 0" opacity=".5"/>

        </>
      )}
    </BaseIcon>
));

IconSoul.displayName = 'Soul';

export default IconSoul;
