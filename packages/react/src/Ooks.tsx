
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOoks = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M14.357 5.143H6v11.014l2.7 2.7h6.943c.39 0 .973-.115 1.466-.471A2.2 2.2 0 0 0 18 16.5V8.786c0-.167-.034-.42-.154-.639a.77.77 0 0 0-.703-.433h-.429V7.5c0-.411-.175-.69-.411-.857a1.17 1.17 0 0 0-.66-.214h-.214v-.215c0-.175-.052-.437-.215-.66a1.01 1.01 0 0 0-.857-.41m2.357 10.286V8.143h.429c.158 0 .257.082.326.21a1 1 0 0 1 .102.433V16.5c0 .789-.321 1.26-.715 1.543a2.2 2.2 0 0 1-1.213.386H8.87l-.857-.857h6.129c.994 0 1.646-.343 2.048-.797.328-.374.513-.85.523-1.346m-2.571 1.714H7.586l-.857-.857h7.2c.248 0 .617-.073.93-.3a1.4 1.4 0 0 0 .57-1.2V6.857h.214c.107 0 .274.035.411.129.125.09.232.24.232.514v7.929c0 .278-.103.707-.42 1.063-.305.351-.832.651-1.723.651M6.429 5.572v10.285h7.5c.18 0 .454-.055.677-.214.214-.154.394-.411.394-.857V6.215a.77.77 0 0 0-.129-.412c-.09-.124-.24-.231-.514-.231zm.857 4.714c-.343 2.057 1.144 3.428 1.928 3.857l-.428.643c.073.073.471.214 1.5.214 1.285 0 3.643-.857 3.857-3.857.171-2.4-1.213-3.429-1.929-3.643l.643-1.071h-1.286c-1.5 0-3.857 1.285-4.285 3.857m2.143-.429c.514-.857 1.5-.643 1.928-.428l.214-.857c.643.428.858 1.071.858 2.143 0 1.07-.952 1.714-1.715 1.714-.428 0-.715-.287-.857-.429v1.072c-.643-.429-1.071-2.143-.428-3.215" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="url(#OOKS__a)" d="M14.357 5.143H6v11.014l2.7 2.7h6.943c.39 0 .973-.115 1.466-.471A2.2 2.2 0 0 0 18 16.5V8.786c0-.167-.034-.42-.154-.639a.77.77 0 0 0-.703-.433h-.429V7.5c0-.411-.175-.69-.411-.857a1.17 1.17 0 0 0-.66-.214h-.214v-.215c0-.175-.052-.437-.215-.66a1.01 1.01 0 0 0-.857-.41m2.357 10.286V8.143h.429c.158 0 .257.082.326.21a1 1 0 0 1 .102.433V16.5c0 .789-.321 1.26-.715 1.543a2.2 2.2 0 0 1-1.213.386H8.87l-.857-.857h6.129c.994 0 1.646-.343 2.048-.797.328-.374.513-.85.523-1.346m-2.571 1.714H7.586l-.857-.857h7.2c.248 0 .617-.073.93-.3a1.4 1.4 0 0 0 .57-1.2V6.857h.214c.107 0 .274.035.411.129.125.09.232.24.232.514v7.929c0 .278-.103.707-.42 1.063-.305.351-.832.651-1.723.651M6.429 5.572v10.285h7.5c.18 0 .454-.055.677-.214.214-.154.394-.411.394-.857V6.215a.77.77 0 0 0-.129-.412c-.09-.124-.24-.231-.514-.231zm.857 4.714c-.343 2.057 1.144 3.428 1.928 3.857l-.428.643c.073.073.471.214 1.5.214 1.285 0 3.643-.857 3.857-3.857.171-2.4-1.213-3.429-1.929-3.643l.643-1.071h-1.286c-1.5 0-3.857 1.285-4.285 3.857m2.143-.429c.514-.857 1.5-.643 1.928-.428l.214-.857c.643.428.858 1.071.858 2.143 0 1.07-.952 1.714-1.715 1.714-.428 0-.715-.287-.857-.429v1.072c-.643-.429-1.071-2.143-.428-3.215" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="OOKS__a" x1="6" x2="18" y1="12" y2="13.286" gradientUnits="userSpaceOnUse"><stop stopColor="#0A3B65"/><stop offset=".64" stopColor="#BC1B1F"/><stop offset="1" stopColor="#C91819"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconOoks.displayName = 'Ooks';
IconOoks.variants = 'brandedmono';

export default IconOoks;
