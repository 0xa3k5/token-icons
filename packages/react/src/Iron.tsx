
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconIron = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m20.524 11.829-2.657-4.372a.38.38 0 0 0-.317-.171h-5.314a.37.37 0 0 0-.313.171l-2.186 3.609a.17.17 0 0 1-.274.018.16.16 0 0 1-.034-.095V9.68c0-1.32-1.226-2.395-2.615-2.395h-2.16c-.197 0-.368.163-.368.347V9.68c0 .948.703 1.822 1.615 2.178.06.025.099.08.099.14 0 .065-.043.12-.099.147-.917.351-1.615 1.225-1.615 2.172v2.045c0 .193.171.351.368.351H6.81c1.393 0 2.614-1.075 2.614-2.4V13.01a.16.16 0 0 1 .163-.154.17.17 0 0 1 .146.077l2.185 3.605a.38.38 0 0 0 .322.175h5.31a.38.38 0 0 0 .317-.171l2.657-4.372a.34.34 0 0 0 0-.342M15 13.714a1.714 1.714 0 1 1 0-3.429 1.714 1.714 0 0 1 0 3.43"/>

        </>
      ) : (
        <>
          
    <path fill="#EE99D0" d="m20.525 11.829-2.657-4.372a.38.38 0 0 0-.318-.171h-5.314a.37.37 0 0 0-.313.171l-2.185 3.609a.17.17 0 0 1-.274.018.16.16 0 0 1-.035-.095V9.68c0-1.32-1.226-2.395-2.614-2.395h-2.16c-.197 0-.369.163-.369.347V9.68c0 .948.703 1.822 1.616 2.178.06.025.098.08.098.14 0 .065-.042.12-.098.147-.917.351-1.616 1.225-1.616 2.172v2.045c0 .193.172.351.369.351H6.81c1.393 0 2.615-1.075 2.615-2.4V13.01a.16.16 0 0 1 .163-.154.17.17 0 0 1 .145.077l2.186 3.605a.38.38 0 0 0 .321.175h5.31a.38.38 0 0 0 .318-.171l2.657-4.372a.33.33 0 0 0 0-.342M15 13.714a1.714 1.714 0 1 1 0-3.429 1.714 1.714 0 0 1 0 3.43"/>

        </>
      )}
    </BaseIcon>
));

IconIron.displayName = 'Iron';

export default IconIron;
