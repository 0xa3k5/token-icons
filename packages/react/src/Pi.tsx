
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M13.864 17.143c-3.008-.064-5.288-.998-6.055-1.457 1.941.507 3.968.6 5.948.27.515-.107 1.86-.27 3.523-1.414a3.88 3.88 0 0 0 1.71-3.63c.536 1.928.223 3.287 0 3.728-.454.857-2.113 2.563-5.126 2.503"/><path fill="currentColor" d="M13.487 7.723c-1.654-.073-3.514.253-4.243.42.454 0 1.757.077 3.716.754 1.958.673 2.597 1.959 2.648 2.739a2.72 2.72 0 0 1-1.842 2.7c-1.582.54-5.032.835-6.557.917.6.248 2.72.621 4.91.621a8.83 8.83 0 0 0 5.002-1.534 3.78 3.78 0 0 0 1.702-3.291c-.069-2.246-3.262-3.232-5.336-3.326"/><path fill="currentColor" d="M15.373 11.722a2.18 2.18 0 0 1-.429 1.435c0-.394-.934-1.791-4.414-1.68-3.729.116-4.127.433-4.543.695-.634.394-.793 1.354-.69 1.808-1.084-1.727-.617-3.026.429-4.135.83-.883 1.97-1.286 2.442-1.376 5.829-.154 7.175 2.327 7.205 3.253"/><path fill="currentColor" d="M10.209 11.709c-3.973-.03-4.792 1.101-4.706 1.671.63-.536 1.74-.643 3.836-.643 1.5 0 2.76.176 3.458.459.656.265.527.844.343 1.114 1.093-.266 1.521-.729 1.603-.93.146-.544-.557-1.637-4.534-1.671"/><path fill="currentColor" d="M3.857 12.326C3.9 11.15 4.96 10.127 5.481 9.763c-.814.955-1.054 1.405-1.11 2.563-.042.921.776 1.971 1.192 2.378-.592-.304-1.749-1.208-1.706-2.378m.652 1.911c.111.163.428.536.822.703a3.3 3.3 0 0 0-.822-.703"/>
        </>
      ) : (
        <>
          <path fill="#265AA3" d="M13.864 17.143c-3.008-.064-5.288-.998-6.055-1.457 1.941.507 3.968.6 5.948.27.515-.107 1.86-.27 3.523-1.414a3.88 3.88 0 0 0 1.71-3.63c.536 1.928.223 3.287 0 3.728-.454.857-2.113 2.563-5.126 2.503"/><path fill="#265AA3" d="M13.488 7.723c-1.655-.073-3.515.253-4.243.42.454 0 1.757.077 3.715.754 1.959.673 2.598 1.959 2.649 2.739a2.72 2.72 0 0 1-1.843 2.7c-1.581.54-5.031.835-6.557.917.6.248 2.721.621 4.911.621a8.83 8.83 0 0 0 5.002-1.534 3.78 3.78 0 0 0 1.701-3.291c-.068-2.246-3.261-3.232-5.335-3.326"/><path fill="#265AA3" d="M15.373 11.722a2.18 2.18 0 0 1-.428 1.435c0-.394-.935-1.791-4.415-1.68-3.728.116-4.127.433-4.543.695-.634.394-.792 1.354-.69 1.808-1.084-1.727-.617-3.026.429-4.135.831-.883 1.971-1.286 2.443-1.376 5.828-.154 7.174 2.327 7.204 3.253"/><path fill="#265AA3" d="M10.209 11.709c-3.973-.03-4.792 1.101-4.706 1.671.63-.536 1.74-.643 3.836-.643 1.5 0 2.76.176 3.458.459.656.265.527.844.343 1.114 1.093-.266 1.521-.729 1.603-.93.146-.544-.557-1.637-4.534-1.671"/><path fill="#265AA3" d="M3.858 12.326c.042-1.175 1.101-2.199 1.624-2.563-.814.955-1.054 1.405-1.11 2.563-.043.921.776 1.971 1.191 2.378-.591-.304-1.748-1.208-1.705-2.378m.651 1.911c.111.163.429.536.823.703a3.3 3.3 0 0 0-.823-.703"/>
        </>
      )}
    </BaseIcon>
));

IconPi.displayName = 'Pi';
IconPi.variants = 'brandedmono';

export default IconPi;
