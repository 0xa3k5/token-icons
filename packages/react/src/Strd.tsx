
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconStrd = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M14.237 9.33c-.094-1.033-1.097-1.616-2.065-1.616-.802 0-1.865.442-1.882 1.355-.03.694.54 1.028 1.114 1.234.249.085.532.163.84.227l1.17.261a8.7 8.7 0 0 1 1.779.575c.514.24.951.527 1.299.857.346.318.621.707.805 1.14q.271.644.279 1.448a3.7 3.7 0 0 1-.652 2.173 4.03 4.03 0 0 1-1.851 1.389 7.8 7.8 0 0 1-2.906.484c-2.37 0-5.318-1.166-5.738-4.046l3.214-.574c.086 1.384 1.277 2.049 2.486 2.049.947 0 1.997-.45 2.014-1.479-.009-.609-.3-.891-.857-1.114a7 7 0 0 0-1.226-.373l-1.423-.33c-1.174-.266-2.1-.69-2.781-1.286a3.04 3.04 0 0 1-1.007-2.413 3.54 3.54 0 0 1 .677-2.172 4.5 4.5 0 0 1 1.89-1.458 6.9 6.9 0 0 1 2.756-.518 5.67 5.67 0 0 1 5.121 3.283z"/>

        </>
      ) : (
        <>
          
    <path fill="#E91179" d="M14.237 9.33c-.094-1.033-1.097-1.616-2.065-1.616-.802 0-1.865.442-1.882 1.355-.03.694.54 1.028 1.114 1.234.249.085.532.163.84.227l1.17.261a8.7 8.7 0 0 1 1.779.575c.514.24.951.527 1.299.857.346.318.621.707.805 1.14q.271.644.279 1.448a3.7 3.7 0 0 1-.652 2.173 4.03 4.03 0 0 1-1.851 1.389 7.8 7.8 0 0 1-2.906.484c-2.37 0-5.318-1.166-5.738-4.046l3.214-.574c.086 1.384 1.277 2.049 2.486 2.049.947 0 1.997-.45 2.014-1.479-.009-.609-.3-.891-.857-1.114a7 7 0 0 0-1.226-.373l-1.423-.33c-1.174-.266-2.1-.69-2.781-1.286a3.04 3.04 0 0 1-1.007-2.413 3.54 3.54 0 0 1 .677-2.172 4.5 4.5 0 0 1 1.89-1.458 6.9 6.9 0 0 1 2.756-.518 5.67 5.67 0 0 1 5.121 3.283z"/>

        </>
      )}
    </BaseIcon>
));

IconStrd.displayName = 'Strd';

export default IconStrd;
