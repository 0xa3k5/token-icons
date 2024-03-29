
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconM87 = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="M12 19.286a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57m-.017-.429a3.857 3.857 0 1 1 .03 0h.004c2.597-.008 4.697-2.211 4.697-4.928C16.714 11.207 14.606 9 12 9s-4.714 2.207-4.714 4.929c0 2.717 2.1 4.92 4.697 4.928m3.446-3.428a3.43 3.43 0 0 1-3.412 3.428c1.415-.008 2.555-1.063 2.555-2.357 0-1.303-1.153-2.357-2.572-2.357-1.418 0-2.571 1.054-2.571 2.357 0 1.294 1.14 2.349 2.554 2.357a3.429 3.429 0 1 1 3.446-3.428m2.143-1.929c0 2.949-2.473 5.34-5.533 5.357a6.428 6.428 0 1 0-.078 0C8.901 18.84 6.43 16.45 6.43 13.5c0-2.957 2.494-5.357 5.571-5.357s5.572 2.4 5.572 5.357m-4.745 5.057a2.078 2.078 0 1 0-1.654 0 1.286 1.286 0 1 1 1.654 0" fillRule="evenodd" clipRule="evenodd"/>

    </BaseIcon>
));

IconM87.displayName = 'M87';

export default IconM87;
