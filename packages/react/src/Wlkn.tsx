
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconWlkn = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 1.286a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M8.786 11.109c-.343 0-.57.308-.643.463v2.357c0 .857.857 1.928 2.143 1.928 1.028 0 1.5-.428 1.714-.857.214.429.999.857 1.5.857 1.5 0 2.357-1.071 2.357-1.813V9.887c0-.15-.128-.458-.643-.458-.514 0-.643.308-.643.463v3.822c0 .309-.214.857-1.07.857-.858 0-.858-.548-.858-.857V10.75c0-.155-.129-.463-.643-.463s-.643.308-.643.463v2.965c0 .309-.385.857-1.071.857s-.857-.548-.857-.857v-2.142c0-.232-.215-.463-.643-.463"/>

        </>
      ) : (
        <>
          
    <path fill="#FBB935" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 1.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#FFB830" d="M8.785 11.109c-.343 0-.57.308-.643.463v2.357c0 .857.858 1.928 2.143 1.928 1.029 0 1.5-.428 1.715-.857.214.429.998.857 1.5.857 1.5 0 2.357-1.071 2.357-1.813V9.887c0-.15-.129-.458-.643-.458s-.643.308-.643.463v3.822c0 .309-.214.857-1.071.857-.858 0-.858-.548-.858-.857V10.75c0-.155-.128-.463-.642-.463-.515 0-.643.308-.643.463v2.965c0 .309-.386.857-1.072.857-.685 0-.857-.548-.857-.857v-2.142c0-.232-.214-.463-.643-.463"/>

        </>
      )}
    </BaseIcon>
));

IconWlkn.displayName = 'Wlkn';

export default IconWlkn;
