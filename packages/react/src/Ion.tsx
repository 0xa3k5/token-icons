
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconIon = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6.251 14.226a1.69 1.69 0 0 1-1.886-1.683 1.69 1.69 0 0 1 1.672-1.694c.598-2.75 3.036-4.807 5.95-4.807a6 6 0 0 1 1.575.206 1.682 1.682 0 0 1 2.598-.256c.316.317.492.748.491 1.196a1.7 1.7 0 0 1-.203.806 6.1 6.1 0 0 1 1.631 4.168 6.1 6.1 0 0 1-1.81 4.355c.21.29.324.638.323.997a1.69 1.69 0 0 1-1.687 1.694 1.69 1.69 0 0 1-1.57-1.075c-.442.1-.894.15-1.347.15-2.644 0-4.894-1.692-5.737-4.057m.306-.065a5.784 5.784 0 0 0 6.692 3.673 1.69 1.69 0 0 1 1.656-2.015c.449 0 .858.176 1.16.464a5.8 5.8 0 0 0 1.705-4.12 5.8 5.8 0 0 0-1.499-3.903 1.68 1.68 0 0 1-1.952.493 1.69 1.69 0 0 1-1.04-1.565c0-.233.047-.456.132-.658a5.8 5.8 0 0 0-1.423-.177c-2.753 0-5.057 1.932-5.64 4.522a1.694 1.694 0 0 1 1.39 1.668 1.69 1.69 0 0 1-1.181 1.618"/>
    <path fill="currentColor" d="M12 13.714a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428"/>

        </>
      ) : (
        <>
          
    <path fill="#fff" d="M6.25 14.226a1.69 1.69 0 0 1-1.886-1.683 1.69 1.69 0 0 1 1.673-1.694c.598-2.75 3.035-4.807 5.95-4.807.545 0 1.072.072 1.574.206a1.682 1.682 0 0 1 2.598-.256 1.7 1.7 0 0 1 .289 2.002 6.12 6.12 0 0 1 1.63 4.168 6.12 6.12 0 0 1-1.81 4.355c.211.29.324.638.323.997a1.69 1.69 0 0 1-1.686 1.694 1.69 1.69 0 0 1-1.57-1.075q-.666.15-1.347.15a6.095 6.095 0 0 1-5.737-4.057m.306-.065a5.784 5.784 0 0 0 6.692 3.673 1.69 1.69 0 0 1 1.657-2.015c.448 0 .857.176 1.159.464a5.8 5.8 0 0 0 1.706-4.12 5.8 5.8 0 0 0-1.5-3.903 1.68 1.68 0 0 1-1.952.493 1.69 1.69 0 0 1-1.04-1.565c0-.233.047-.456.132-.658a5.8 5.8 0 0 0-1.423-.177c-2.753 0-5.057 1.932-5.64 4.522a1.694 1.694 0 0 1 1.39 1.668 1.69 1.69 0 0 1-1.18 1.618"/>
    <path fill="#55B8E3" d="M12 13.714a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428"/>

        </>
      )}
    </BaseIcon>
));

IconIon.displayName = 'Ion';

export default IconIon;
