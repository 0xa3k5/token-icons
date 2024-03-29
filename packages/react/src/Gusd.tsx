
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGusd = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M14.106 5.143c-2.412 0-4.42 1.898-4.677 4.286-2.39.258-4.286 2.264-4.286 4.676a4.754 4.754 0 0 0 4.752 4.752c2.412 0 4.427-1.897 4.677-4.285 2.389-.258 4.285-2.265 4.285-4.677a4.754 4.754 0 0 0-4.751-4.752M18 10.286c-.236 1.553-1.873 3.191-3.428 3.428v-3.428zM6 13.714c.234-1.56 1.868-3.19 3.429-3.428v3.428zm7.714.858c-.26 1.774-2.029 3.43-3.82 3.428-1.802.002-3.631-1.65-3.894-3.428zm0-4.286v3.428h-3.428v-3.428zM18 9.429h-7.714c.263-1.782 2.02-3.43 3.82-3.429 1.8-.002 3.632 1.648 3.894 3.429"/>

        </>
      ) : (
        <>
          
    <path fill="#24DDF9" d="M14.105 5.143c-2.412 0-4.419 1.898-4.677 4.286-2.389.258-4.285 2.264-4.285 4.676a4.754 4.754 0 0 0 4.751 4.752c2.412 0 4.428-1.897 4.677-4.285 2.389-.258 4.286-2.265 4.286-4.677a4.755 4.755 0 0 0-4.752-4.752M18 10.286c-.237 1.553-1.873 3.191-3.429 3.428v-3.428zM6 13.714c.234-1.56 1.867-3.19 3.428-3.428v3.428zm7.714.858c-.261 1.774-2.03 3.43-3.82 3.428-1.802.002-3.632-1.65-3.894-3.428zm0-4.286v3.428h-3.429v-3.428zM18 9.429h-7.715c.263-1.782 2.02-3.43 3.82-3.429 1.8-.002 3.632 1.648 3.895 3.429"/>

        </>
      )}
    </BaseIcon>
));

IconGusd.displayName = 'Gusd';

export default IconGusd;
