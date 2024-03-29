
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconIcx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m16.544 8.596-1.483 1.49a3.603 3.603 0 0 1-4.975 4.975l-1.49 1.483a5.673 5.673 0 0 0 7.948-7.948m-8.128 3.429a3.603 3.603 0 0 1 5.467-3.092l1.496-1.496a5.673 5.673 0 0 0-7.942 7.942l1.496-1.49a3.6 3.6 0 0 1-.524-1.864zm9.195-4.389a1.247 1.247 0 1 0 .065-2.493 1.247 1.247 0 0 0-.065 2.493M6.39 18.857a1.248 1.248 0 1 0 .064-2.495 1.248 1.248 0 0 0-.065 2.495"/>

        </>
      ) : (
        <>
          
    <path fill="#35B7BA" d="m16.544 8.596-1.484 1.49a3.603 3.603 0 0 1-4.974 4.975l-1.49 1.483a5.673 5.673 0 0 0 7.948-7.948m-8.129 3.429a3.603 3.603 0 0 1 5.467-3.092l1.496-1.496a5.673 5.673 0 0 0-7.941 7.942l1.495-1.49a3.6 3.6 0 0 1-.523-1.864zm9.195-4.389a1.247 1.247 0 1 0 .065-2.493 1.247 1.247 0 0 0-.065 2.493M6.39 18.857a1.248 1.248 0 1 0 .064-2.495 1.248 1.248 0 0 0-.064 2.495"/>

        </>
      )}
    </BaseIcon>
));

IconIcx.displayName = 'Icx';

export default IconIcx;
