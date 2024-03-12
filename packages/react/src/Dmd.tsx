
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDmd = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M18.747 13.23c.15-.831.147-1.683-.01-2.513l-2.451-.433v3.42zm-.122.546-2.24.43v.005l.875 2.19a6.8 6.8 0 0 0 1.365-2.625m-1.755 3.051-.02.02-2.352-.94 1.435-1.436zm-.44.407a6.8 6.8 0 0 1-2.584 1.371l.396-2.25zm-3.13 1.5.436-2.448H10.32l.477 2.466c.828.147 1.676.14 2.503-.018m-3.05-.102-.436-2.273-2.229.888a6.8 6.8 0 0 0 2.666 1.386zm-3.474-2.19.89-2.228-2.28-.4a6.8 6.8 0 0 0 1.39 2.628M5.26 13.269a6.9 6.9 0 0 1-.007-2.496l2.461-.48v3.416zm.114-3.042 2.288-.44-.884-2.23a6.8 6.8 0 0 0-1.404 2.67m1.79-3.089 2.381.953-1.431 1.435zm.423-.386a6.8 6.8 0 0 1 2.615-1.37l-.396 2.257zm3.157-1.494-.433 2.479h3.421l-.479-2.48a6.9 6.9 0 0 0-2.509 0m3.056.124.433 2.253 2.196-.87a6.84 6.84 0 0 0-2.63-1.383m3.046 1.766.026.027-.938 2.351-1.436-1.435zm.409.446a6.8 6.8 0 0 1 1.355 2.577l-2.232-.392zm-5.231 3.832 1.602-3.283h-3.2zM8.143 10.4v3.2l3.31-1.602zm7.452-.49-1.484-1.48-1.509 2.989zm.262 3.69v-3.2l-3.267 1.598zM9.553 15.91l-.003-.003h.003zm-.003-.003-2.386.95.954-2.382zm6.045-1.819-.003-.001.003-.003zm-2.988-1.509 2.985 1.508-1.477 1.48zm-.583-.016-1.598 3.294h3.2zM8.457 9.91l2.988 1.509L9.936 8.43zm0 4.175.002.003-.002.001zm.002.003 1.478 1.48 1.508-2.987z"/>
        </>
      ) : (
        <>
          <path fill="#0245B2" d="M18.747 13.23c.15-.831.147-1.683-.01-2.513l-2.451-.433v3.42zm-.122.546-2.24.43v.005l.875 2.19a6.8 6.8 0 0 0 1.365-2.625m-1.755 3.051-.02.02-2.352-.94 1.435-1.436zm-.44.407a6.8 6.8 0 0 1-2.584 1.371l.396-2.25zm-3.13 1.5.436-2.448H10.32l.477 2.466c.828.147 1.676.14 2.503-.018m-3.05-.102-.436-2.273-2.229.888a6.8 6.8 0 0 0 2.666 1.386zm-3.474-2.19.89-2.228-2.28-.4a6.8 6.8 0 0 0 1.39 2.628M5.26 13.269a6.9 6.9 0 0 1-.007-2.496l2.461-.48v3.416zm.114-3.042 2.288-.44-.884-2.23a6.8 6.8 0 0 0-1.404 2.67m1.79-3.089 2.381.953-1.431 1.435zm.423-.386a6.8 6.8 0 0 1 2.615-1.37l-.396 2.257zm3.157-1.494-.433 2.479h3.421l-.479-2.48a6.9 6.9 0 0 0-2.509 0m3.056.124.433 2.253 2.196-.87a6.84 6.84 0 0 0-2.63-1.383m3.046 1.766.026.027-.938 2.351-1.436-1.435zm.409.446a6.8 6.8 0 0 1 1.355 2.577l-2.232-.392zm-5.231 3.832 1.602-3.283h-3.2zM8.143 10.4v3.2l3.31-1.602zm7.452-.49-1.484-1.48-1.509 2.989zm.262 3.69v-3.2l-3.267 1.598zM9.553 15.91l-.003-.003h.003zm-.003-.003-2.386.95.954-2.382zm6.045-1.819-.003-.001.003-.003zm-2.988-1.509 2.985 1.508-1.477 1.48zm-.583-.016-1.598 3.294h3.2zM8.457 9.91l2.988 1.509L9.936 8.43zm0 4.175.002.003-.002.001zm.002.003 1.478 1.48 1.508-2.987z"/>
        </>
      )}
    </BaseIcon>
));

IconDmd.displayName = 'Dmd';
IconDmd.variants = 'brandedmono';

export default IconDmd;
