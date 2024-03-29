
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconZee = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M9 12.053V7.304A5.57 5.57 0 0 0 6.428 12c0 1.705.766 3.231 1.973 4.253l.06-.05c2.458-2.016 5.04-4.135 5.49-4.458.501-.36 1.032-.104 1.049.212v4.738A5.57 5.57 0 0 0 17.57 12a5.56 5.56 0 0 0-1.99-4.268c-2.517 2.003-5.207 4.114-5.66 4.44-.663.475-.905.196-.921-.12m5.143 5.091v-4.287l-4.856 4.01a5.55 5.55 0 0 0 2.713.704c.76 0 1.483-.152 2.143-.427m-5.558.303a6.429 6.429 0 0 0 7.68-10.259c.906-.724 1.76-1.41 2.441-1.963.114-.129.273-.463 0-.771-.272-.309-.72-.129-.909 0l-2.491 2.031a6.429 6.429 0 0 0-7.577 10.319c-.9.739-1.751 1.436-2.436 1.994-.113.128-.272.463 0 .772.263.298.62.055.814-.079l.022-.014zm1.272-6.519V6.855A5.6 5.6 0 0 1 12 6.428a5.55 5.55 0 0 1 2.593.639z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#1741C3" d="M9 12.053V7.304A5.57 5.57 0 0 0 6.428 12c0 1.705.766 3.231 1.973 4.253l.06-.05c2.458-2.016 5.04-4.135 5.49-4.458.501-.36 1.032-.104 1.049.212v4.738A5.57 5.57 0 0 0 17.57 12a5.56 5.56 0 0 0-1.99-4.268c-2.517 2.003-5.207 4.114-5.66 4.44-.663.475-.905.196-.921-.12m5.143 5.091v-4.287l-4.856 4.01a5.55 5.55 0 0 0 2.713.704c.76 0 1.483-.152 2.143-.427m-5.558.303a6.429 6.429 0 0 0 7.68-10.259c.906-.724 1.76-1.41 2.441-1.963.114-.129.273-.463 0-.771-.272-.309-.72-.129-.909 0l-2.491 2.031a6.429 6.429 0 0 0-7.577 10.319c-.9.739-1.751 1.436-2.436 1.994-.113.128-.272.463 0 .772.263.298.62.055.814-.079l.022-.014zm1.272-6.519V6.855A5.6 5.6 0 0 1 12 6.428a5.55 5.55 0 0 1 2.593.639z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconZee.displayName = 'Zee';

export default IconZee;
