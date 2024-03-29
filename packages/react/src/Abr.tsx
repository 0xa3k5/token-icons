
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAbr = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="M11.152 6c0-.42.343-.857.771-.857 3.463 0 6.716 2.276 6.934 5.918v5.319c0 .42-.428.763-.857.763-.428 0-.857-.343-.857-.763v-5.271C16.954 8.253 14.786 6.857 12 6.857c-.428 0-.848-.437-.848-.857m1.697 12c0 .42-.343.857-.772.857-3.463 0-6.715-2.276-6.934-5.918V7.62c0-.42.429-.763.857-.763.429 0 .857.343.857.763v5.271c.189 2.855 2.357 4.252 5.143 4.252.429 0 .849.437.849.857"/>
    <path fill="currentColor" d="M7.715 5.923c0-.429.342-.78.767-.78a.77.77 0 0 1 .762.78v2.794A4.286 4.286 0 0 1 16.286 12v6.077c0 .429-.343.78-.767.78a.77.77 0 0 1-.763-.78v-2.794A4.286 4.286 0 0 1 7.715 12zM9.245 12a2.755 2.755 0 1 0 0-.017z"/>

    </BaseIcon>
));

IconAbr.displayName = 'Abr';

export default IconAbr;
