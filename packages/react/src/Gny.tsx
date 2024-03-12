
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGny = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M9.673 5.143 11.57 6.24v11.023l-1.873 1.594L6 16.457v-1.341l-1.714-1.149V9.386l1.873-.827.368-1.775zM7.247 7.312 6.87 9.12l-1.727.78v3.643l1.714 1.144v1.338l2.786 1.757 1.071-.887v-10.2l-1.058-.643-2.409 1.255zm7.08-2.169L12.428 6.24v11.023l1.873 1.594 3.699-2.4v-1.341l1.714-1.149V9.386l-1.873-.827-.368-1.775zm2.426 2.169.377 1.808 1.727.78v3.643l-1.714 1.144v1.338l-2.773 1.83-1.084-.956v-10.2l1.058-.643z"/>
        </>
      ) : (
        <>
          <path fill="#CFEFFC" d="m9.673 5.143 1.899 1.097v11.023l-1.873 1.594L6 16.457v-1.341l-1.714-1.149V9.386l1.873-.827.369-1.775zM7.248 7.312 6.87 9.12l-1.727.78v3.643l1.715 1.144v1.338l2.785 1.757 1.072-.887v-10.2l-1.059-.643-2.408 1.255zm7.08-2.169L12.429 6.24v11.023l1.873 1.594 3.698-2.4v-1.341l1.715-1.149V9.386l-1.873-.827-.369-1.775zm2.425 2.169.377 1.808 1.728.78v3.643l-1.715 1.144v1.338l-2.773 1.83-1.084-.956v-10.2l1.059-.643z"/>
        </>
      )}
    </BaseIcon>
));

IconGny.displayName = 'Gny';
IconGny.variants = 'brandedmono';

export default IconGny;
