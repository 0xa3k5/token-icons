
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSnc = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="m5.062 15.857-.348 1.286c1.273 0 1.625-.082 2.092-.403.471-.322.84-1.153.968-1.526l1.483-5.803c.073-.355.313-1.273.6-1.285.287-.01.472.762.549 1.028l1.328 4.989c.3 1.002.759 3.004 2.443 3.004 1.689 0 2.34-2.769 2.675-4.286h1.834l.394-1.286h-1.586l-.343.215c.202-.746.746-2.717.93-3.197s.686-.502.91-.446l.295-1.286h-1.277c-1.076 0-1.715 1.56-1.925 2.297L14.7 14.666c-.077.3-.3 1.19-.557 1.19s-.412-.642-.506-.92l-.985-3.798c-.31-1.371-.918-4.281-2.795-4.281-1.641 0-2.451 2.837-2.798 4.714H5.21l-.308 1.286h1.629l.278-.163c-.506 2.327-.836 2.751-1.033 2.961-.163.172-.54.206-.711.202z"/>

    </BaseIcon>
));

IconSnc.displayName = 'Snc';

export default IconSnc;
