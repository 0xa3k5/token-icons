
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPoly = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m20.572 8.181-.037-.58-.172.482-.949.846-1.102.165-.324-.306.955-1.347.986-.3-1.06.024-1.542 1.133-1.408-.104-.056-.037-2.026-1.016-1.2.245-3.753 3.159-1.794.581-.753.874H5.008l-.649 1.153-.93.264.869.134.82-1.108 1.243.251-.012 1.194-.624 1.702-.368 1.586-.385.637.98-.215-.11-.661.831-1.739 1.61-.649.613-1.04 1.053-.772 2.076.312 2.1-.936-.368 1.601h-.918l-.27 1.172.797-.545 1.316-.576 1.175-1.64v-.79l.49.594 1.604 1.016.918-.435-.06-2.161-.252-.845 1.194-.306z"/>

        </>
      ) : (
        <>
          
    <path fill="#3F4B80" d="m20.572 8.181-.037-.58-.172.482-.949.846-1.102.165-.324-.306.955-1.347.986-.3-1.06.024-1.542 1.133-1.408-.104-.056-.037-2.026-1.016-1.2.245-3.753 3.159-1.794.581-.753.874H5.008l-.649 1.153-.93.264.869.134.82-1.108 1.243.251-.012 1.194-.624 1.702-.368 1.586-.385.637.98-.215-.11-.661.831-1.739 1.61-.649.613-1.04 1.053-.772 2.076.312 2.1-.936-.368 1.601h-.918l-.27 1.172.797-.545 1.316-.576 1.175-1.64v-.79l.49.594 1.604 1.016.918-.435-.06-2.161-.252-.845 1.194-.306z"/>

        </>
      )}
    </BaseIcon>
));

IconPoly.displayName = 'Poly';

export default IconPoly;
