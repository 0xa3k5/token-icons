
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLqdr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M13.221 4.286s0 3.621 1.8 5.811c1.8 2.194 2.122 3.622 2.122 4.629 0 1.011-.828 4.56-4.783 4.56s-5.503-3.656-5.503-6.022 1.834-6.96 6.364-8.978m-.784 1.667s.33 2.918 1.941 4.71c1.616 1.787 1.907 3.068 1.907 3.93 0 .866-.14 2.691-3 3.857 0 0 .643-.973.643-2.336 0-.69-.428-1.5-.921-2.434-.66-1.256-1.436-2.73-1.436-4.414 0-2.293.866-3.313.866-3.313m-4.723 7.221c0-3.493 3.857-6.805 3.857-6.805s-.857 1.474-.857 3.334c0 1.508.806 3.073 1.479 4.371.471.917.878 1.702.878 2.242 0 .72-.085 2.138-1.534 2.138-1.444 0-3.823-1.791-3.823-5.28" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#4DD9F6" d="M13.222 4.286s0 3.621 1.8 5.811c1.8 2.194 2.121 3.622 2.121 4.629 0 1.011-.827 4.56-4.783 4.56-3.955 0-5.503-3.656-5.503-6.022s1.835-6.96 6.365-8.978m-.785 1.667s.33 2.918 1.942 4.71c1.616 1.787 1.907 3.068 1.907 3.93 0 .866-.141 2.691-3 3.857 0 0 .643-.973.643-2.336 0-.69-.429-1.5-.922-2.434-.66-1.256-1.435-2.73-1.435-4.414 0-2.293.865-3.313.865-3.313m-4.722 7.221c0-3.493 3.857-6.805 3.857-6.805s-.857 1.474-.857 3.334c0 1.508.805 3.073 1.478 4.371.472.917.879 1.702.879 2.242 0 .72-.086 2.138-1.535 2.138-1.444 0-3.822-1.791-3.822-5.28" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconLqdr.displayName = 'Lqdr';
IconLqdr.variants = 'brandedmono';

export default IconLqdr;
