
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconKp3r = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M8.571 8.006c0-1.818 1.484-3.292 3.315-3.292h.228c1.83 0 3.314 1.474 3.314 3.292v2.712a1.394 1.394 0 0 1 1.286 1.395v4.917c0 .772-.621 1.399-1.387 1.399H8.673a1.393 1.393 0 0 1-1.387-1.399v-4.917c0-.738.567-1.342 1.285-1.395zm.857 2.708h5.143v-2.77c0-1.31-1.15-2.372-2.571-2.372-1.42 0-2.572 1.062-2.572 2.372zm-.828.857a.457.457 0 0 0-.457.457v5.087c0 .252.205.457.457.457h6.8a.457.457 0 0 0 .457-.457v-5.087a.457.457 0 0 0-.458-.457zm3.4 1.286a.43.43 0 0 0-.429.429v.857q0 .056.014.107a.857.857 0 1 0 .83 0 .4.4 0 0 0 .014-.107v-.857a.43.43 0 0 0-.43-.429" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#0277FD" d="M8.572 8.006c0-1.818 1.484-3.292 3.314-3.292h.229c1.83 0 3.314 1.474 3.314 3.292v2.712a1.394 1.394 0 0 1 1.286 1.395v4.917c0 .772-.622 1.399-1.388 1.399H8.673a1.393 1.393 0 0 1-1.387-1.399v-4.917c0-.738.567-1.342 1.286-1.395zm.857 2.708h5.143v-2.77c0-1.31-1.151-2.372-2.572-2.372-1.42 0-2.571 1.062-2.571 2.372zm-.828.857a.457.457 0 0 0-.458.457v5.087c0 .252.205.457.458.457H15.4a.457.457 0 0 0 .458-.457v-5.087a.457.457 0 0 0-.458-.457zm3.4 1.286a.43.43 0 0 0-.43.429v.857q0 .056.014.107a.857.857 0 1 0 .83 0 .4.4 0 0 0 .014-.107v-.857a.43.43 0 0 0-.429-.429" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconKp3r.displayName = 'Kp3r';
IconKp3r.variants = 'brandedmono';

export default IconKp3r;
