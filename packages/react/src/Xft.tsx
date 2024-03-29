
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconXft = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M16.286 12a4.285 4.285 0 0 1-7.56 2.765 4 4 0 0 0-.532.355c-.382.348-.676.78-.857 1.265-.073.167-.129.33-.171.48A6.857 6.857 0 0 0 17.45 7.839c-.1.467-.323.9-.647 1.251-.328.31-.731.53-1.17.639.427.68.653 1.468.652 2.271m-8.049 2.057a4.286 4.286 0 0 1 6.806-5.078l.06-.009c.406-.05.788-.22 1.097-.488.248-.245.407-.673.484-1.17l.039-.288a6.857 6.857 0 0 0-10.209 9.09l.022-.06a4.1 4.1 0 0 1 1.122-1.607c.189-.154.386-.282.575-.394z"/>

        </>
      ) : (
        <>
          
    <path fill="#410083" d="M16.286 12a4.285 4.285 0 0 1-7.56 2.765 4 4 0 0 0-.531.355c-.382.348-.676.78-.857 1.265-.073.167-.13.33-.172.48a6.857 6.857 0 0 0 10.286-9.026c-.1.467-.323.9-.647 1.251-.329.31-.732.53-1.17.639A4.27 4.27 0 0 1 16.286 12m-8.048 2.057a4.286 4.286 0 0 1 6.805-5.078l.06-.009c.406-.05.789-.22 1.097-.488.249-.245.408-.673.485-1.17l.038-.288a6.857 6.857 0 0 0-10.208 9.09l.021-.06a4.1 4.1 0 0 1 1.123-1.607c.189-.154.386-.282.574-.394z"/>

        </>
      )}
    </BaseIcon>
));

IconXft.displayName = 'Xft';

export default IconXft;
