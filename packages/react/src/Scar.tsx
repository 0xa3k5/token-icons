
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconScar = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="#8C8B8A" d="M12 18.857a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713m0 .429a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"/>
    <path fill="url(#SCAR__a)" d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"/>
    <path fill="url(#SCAR__b)" d="M9.429 7.714c-.514 0-.784-.57-.857-.857l1.714.429c-.073.14-.343.428-.857.428m5.143 0c-.343 0-.716-.287-.857-.428l1.714-.43c-.141.288-.514.858-.857.858m-4.714.857c-1.372 0-2.285 1.427-2.572 2.143.514-.514 1.5-.93 1.929-1.071-.857.514-1.072 2.357-1.072 3.214L9.43 14.57v-2.143c0-.214 0-1.285 2.571-1.285 2.058 0 2.572.857 2.572 1.285v2.143l1.286-1.714c0-1.543-.716-2.786-1.072-3.214.686 0 1.573.715 1.929 1.071-.172-1.543-1.929-2.07-2.786-2.143h-1.5V9c0 .171-.287.356-.429.428-.171 0-.355-.287-.428-.428v-.43zM10.715 12c-.287 0-.857.085-.857.428h4.285c0-.141-.171-.428-.857-.428zm2.571 1.071H10.5c.288-.141.986-.428 1.5-.428.515 0 1.072.287 1.286.428M12 17.571 9.858 13.5h.857L12 16.07l1.286-2.571h.857zm-2.357-7.286.022-.055c.111-.129.583-.159.835-.159.288.215.986.643 1.5.643.515 0 1.213-.428 1.5-.643l.643.215C13.972 9.77 13.5 9.214 13.286 9c-.141.428-.6 1.286-1.286 1.286-.685 0-1.144-.858-1.285-1.286-.489.163-.887.857-1.05 1.23a.1.1 0 0 0-.022.056" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="SCAR__a" x1="16.285" x2="7.714" y1="7.072" y2="17.143" gradientUnits="userSpaceOnUse">
            <stop stopColor="#878585"/>
            <stop offset="1" stopColor="#010101"/>
        </linearGradient>
        <linearGradient id="SCAR__b" x1="14.358" x2="4.929" y1="6.857" y2="13.286" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDFCFD"/>
            <stop offset="1" stopColor="#5C5B5A"/>
        </linearGradient>
    </defs>

    </BaseIcon>
));

IconScar.displayName = 'Scar';

export default IconScar;
