
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEosdt = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="m5.143 8.016 6.824-3.73 7.319 3.79v1.948l-1.924 1.258-5.147-2.987-1.25.75 1.464.845v2.037L10.5 13.148 9 12.253v1.355l5.143 2.904v2.004l-1.929 1.198-7.07-3.909zm.428 2.225 1.286.816v1.594l-1.286-.797zm0-1.93 1.286.762v1.606l-1.286-.756zm1.715 1.007 1.285.765v1.61l-1.285-.762zM9 10.338l1.286.78v1.595L9 11.939zm-3.43 1.817 1.286.815v1.594l-1.286-.797zm0 1.9 1.286.769v1.682l-1.286-.722zm1.715 1.01 1.285.746v1.655l-1.285-.722zm1.714.99 1.286.752v1.624L9 17.702zm1.714.99 1.286.74v1.595l-1.286-.723zm3-.13-1.286.816v1.594l1.286-.797zm-5.143-4.75-1.285.815v1.594l1.285-.797zM12 10.303l-1.286.815v1.532L12 11.854zm0-3.868-1.286.815v1.594L12 8.048zm.428 0 1.286.759V8.79l-1.286-.75zm1.716 1.012 1.286.76v1.595l-1.286-.767zm1.713 1.01 1.286.756v1.598l-1.286-.763zm3.002-.018-1.286.784v1.59l1.286-.763zM7.286 11.294v1.267l1.115-.637zm1.851-3.247 1.149-.66v1.34z" fillRule="evenodd" clipRule="evenodd"/>

    </BaseIcon>
));

IconEosdt.displayName = 'Eosdt';

export default IconEosdt;
