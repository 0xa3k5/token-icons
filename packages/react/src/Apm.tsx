
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconApm = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M13.403 12.863c-.392.487-1.219.844-1.832.844-.589 0-1.285-.304-1.285-1.016 0-.679.563-.922 1.133-1.038.67-.139 1.67-.222 2.295-.524 0 .567.05 1.245-.311 1.734M12 7.337c1.078 0 1.714.335 1.714 1.102 0 .842-1.27.864-1.873.907-1.316.169-2.334.289-3.005.457-.695.144-1.241.336-1.614.624-.79.51-1.217 1.484-1.217 2.403-.05.84.248 1.561.87 2.138.62.6 1.564.89 2.88.89.794 0 1.465-.12 2.086-.337a5.9 5.9 0 0 0 1.688-1.033l.185 1.37H18c-.373-.265-.428-1.106-.428-1.563V9.131c0-3.098-2.442-3.988-5.358-3.988-2.474 0-5.557.55-5.785 3.428h3.857c.064-.803.637-1.234 1.714-1.234m5.572 10.234H6.429v1.286h11.143z"/>
        </>
      ) : (
        <>
          <path fill="url(#APM__a)" d="M13.402 12.863c-.392.487-1.218.844-1.831.844-.59 0-1.286-.304-1.286-1.016 0-.679.564-.922 1.133-1.038.671-.139 1.671-.222 2.296-.524 0 .567.05 1.245-.312 1.734M12 7.337c1.077 0 1.714.335 1.714 1.102 0 .842-1.27.864-1.873.907-1.317.169-2.335.289-3.005.457-.696.144-1.242.336-1.615.624-.789.51-1.217 1.484-1.217 2.403-.049.84.249 1.561.87 2.138.62.6 1.564.89 2.88.89.795 0 1.466-.12 2.086-.337a5.9 5.9 0 0 0 1.689-1.033l.185 1.37H18c-.373-.265-.429-1.106-.429-1.563V9.131c0-3.098-2.442-3.988-5.358-3.988-2.474 0-5.556.55-5.785 3.428h3.857c.065-.803.637-1.234 1.715-1.234m5.571 10.234H6.428v1.286h11.143z"/><defs><linearGradient id="APM__a" x1="8.232" x2="22.505" y1="7.521" y2="21.866" gradientUnits="userSpaceOnUse"><stop stopColor="#1A1E21"/><stop offset="1" stopColor="#06060A"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconApm.displayName = 'Apm';
IconApm.variants = 'brandedmono';

export default IconApm;
