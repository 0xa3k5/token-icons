
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMed = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M16.804 7.672c.343-.75.969-1.02 1.552-.669.801.48.428 1.273.253 1.727l-2.88 7.706c-.33.638-.909.9-1.479.583-.574-.322-.583-1.037-.343-1.573 1.132-2.542 2.636-7.2 2.897-7.774M8.37 7.543c.232-.561.943-.754 1.397-.531.72.355.587.99.433 1.44l-3.278 8.207c-.313.488-.892.613-1.316.347-.519-.326-.506-1.08-.412-1.376.995-2.52 2.945-7.517 3.172-8.083zm4.53-.107c.163-.382.789-.707 1.226-.429.536.335.484.973.381 1.252l-1.693 4.328c-.278.557-.818.87-1.363.557-.54-.321-.394-.981-.257-1.307l1.702-4.401z"/>
    <path fill="currentColor" d="M17.786 9a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m-3 8.143a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"/>

        </>
      ) : (
        <>
          
    <path fill="#8FB9F4" d="M16.804 7.672c.343-.75.969-1.02 1.552-.669.801.48.428 1.273.253 1.727l-2.88 7.706c-.33.638-.909.9-1.479.583-.574-.322-.583-1.037-.343-1.573 1.132-2.542 2.636-7.2 2.897-7.774"/>
    <path fill="#2073E9" d="M8.37 7.543c.232-.561.943-.754 1.397-.531.72.355.587.99.433 1.44l-3.278 8.207c-.313.488-.892.613-1.316.347-.519-.326-.506-1.08-.412-1.376.995-2.52 2.945-7.517 3.172-8.083zm4.53-.107c.163-.382.789-.707 1.226-.429.536.335.484.973.381 1.252l-1.693 4.328c-.278.557-.818.87-1.363.557-.54-.321-.394-.981-.257-1.307l1.702-4.401zM17.786 9a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m-3 8.143a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"/>

        </>
      )}
    </BaseIcon>
));

IconMed.displayName = 'Med';

export default IconMed;
