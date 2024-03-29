
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPay = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M20.08 11.78a.8.8 0 0 0-.156-.221c-1.407-1.586-4.286-4.702-4.286-4.702l-3.636 3.953-3.68-3.916S5.422 10.038 4 11.64c-.185.176-.185.507-.022.698.74.83 4.368 4.797 4.368 4.797l3.657-3.96 3.628 3.968 4.383-4.813s.096-.095.111-.154a.54.54 0 0 0-.044-.396m-14.067.44c-.111-.147-.074-.367.037-.492.466-.521 2.317-2.498 2.317-2.498l2.591 2.718-2.59 2.814s-1.585-1.682-2.348-2.55zm11.845.088a2 2 0 0 1-.192.265l-2.006 2.16L13.068 12l2.547-2.77s1.474 1.506 2.147 2.314c.052.074.119.147.148.228.067.176.022.367-.052.536"/>

        </>
      ) : (
        <>
          
    <path fill="#fff" d="M20.08 11.78a.8.8 0 0 0-.156-.221c-1.407-1.586-4.286-4.702-4.286-4.702l-3.636 3.953-3.68-3.916S5.422 10.038 4 11.64c-.185.176-.185.507-.022.698.74.83 4.368 4.797 4.368 4.797l3.657-3.96 3.628 3.968 4.383-4.813s.096-.095.111-.154a.54.54 0 0 0-.044-.396m-14.067.44c-.111-.147-.074-.367.037-.492.466-.521 2.317-2.498 2.317-2.498l2.591 2.718-2.59 2.814s-1.585-1.682-2.348-2.55zm11.845.088a2 2 0 0 1-.192.265l-2.006 2.16L13.068 12l2.547-2.77s1.474 1.506 2.147 2.314c.052.074.119.147.148.228.067.176.022.367-.052.536"/>

        </>
      )}
    </BaseIcon>
));

IconPay.displayName = 'Pay';

export default IconPay;
