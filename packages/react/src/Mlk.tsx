
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMlk = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m17.768 7.6-4.733-2.62a2.12 2.12 0 0 0-2.06 0L6.238 7.6a2.13 2.13 0 0 0-1.094 1.851v5.098c0 .77.42 1.475 1.094 1.85l4.733 2.62a2.12 2.12 0 0 0 2.06 0l4.733-2.62a2.12 2.12 0 0 0 1.094-1.85V9.45a2.12 2.12 0 0 0-1.089-1.85m-7.482 7.003c0 .7-.583 1.254-1.286 1.254s-1.286-.554-1.286-1.254v-4.34C7.714 9.563 8.297 9 9 9s1.286.562 1.286 1.263zM12 12.428a1.29 1.29 0 0 1-1.286-1.285A1.29 1.29 0 0 1 12 9.857c.708 0 1.286.58 1.286 1.286A1.29 1.29 0 0 1 12 12.428m4.286 2.175c0 .7-.583 1.254-1.286 1.254s-1.286-.554-1.286-1.254v-4.34c0-.7.583-1.263 1.286-1.263s1.286.562 1.286 1.263z"/>

        </>
      ) : (
        <>
          
    <path fill="#5DBAB8" d="m17.768 7.6-4.734-2.62a2.12 2.12 0 0 0-2.059 0L6.237 7.6a2.13 2.13 0 0 0-1.094 1.851v5.098c0 .77.42 1.475 1.094 1.85l4.733 2.62a2.12 2.12 0 0 0 2.06 0l4.733-2.62a2.12 2.12 0 0 0 1.094-1.85V9.45a2.12 2.12 0 0 0-1.09-1.85m-7.483 7.003c0 .7-.582 1.254-1.285 1.254s-1.286-.554-1.286-1.254v-4.34C7.714 9.563 8.297 9 9 9s1.285.562 1.285 1.263zM12 12.428a1.29 1.29 0 0 1-1.286-1.285A1.29 1.29 0 0 1 12 9.857c.708 0 1.285.58 1.285 1.286A1.29 1.29 0 0 1 12 12.428m4.285 2.175c0 .7-.582 1.254-1.285 1.254s-1.286-.554-1.286-1.254v-4.34c0-.7.583-1.263 1.286-1.263s1.285.562 1.285 1.263z"/>

        </>
      )}
    </BaseIcon>
));

IconMlk.displayName = 'Mlk';

export default IconMlk;
