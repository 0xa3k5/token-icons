
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconZz = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M8.82 4.372a.68.68 0 0 0-.784.09l-.827.745c-.364.33-.3.943.137 1.175l6.677 3.6-4.671 3.428a.54.54 0 0 0 .068.917l7.706 3.896-1.072.776-9.2-5.164 4.34-3.086a.545.545 0 0 0-.03-.904L8.5 8.207l-.394.592 2.472 1.517-4.354 3.098a.547.547 0 0 0 .047.913l9.45 5.302a.68.68 0 0 0 .729-.043l1.075-.78a.73.73 0 0 0-.09-1.226l-7.448-3.763 4.671-3.42a.546.546 0 0 0-.06-.912l-6.93-3.742.823-.746 8.662 4.8-4.693 3.433a.55.55 0 0 0 .056.913l4.264 2.366.373-.656-4.063-2.207 4.693-3.433a.55.55 0 0 0-.056-.913zm-1.08 4.2.395-.587-.79-.485-.355.613.75.463z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#ZZ__a)" d="M8.82 4.372a.68.68 0 0 0-.784.09l-.827.745c-.364.33-.3.943.137 1.175l6.677 3.6-4.671 3.428a.54.54 0 0 0 .068.917l7.706 3.896-1.072.776-9.2-5.164 4.34-3.086a.545.545 0 0 0-.03-.904L8.5 8.207l-.394.592 2.472 1.517-4.354 3.098a.547.547 0 0 0 .047.913l9.45 5.302a.68.68 0 0 0 .729-.043l1.075-.78a.73.73 0 0 0-.09-1.226l-7.448-3.763 4.671-3.42a.546.546 0 0 0-.06-.912l-6.93-3.742.823-.746 8.662 4.8-4.693 3.433a.55.55 0 0 0 .056.913l4.264 2.366.373-.656-4.063-2.207 4.693-3.433a.55.55 0 0 0-.056-.913zm-1.08 4.2.395-.587-.79-.485-.355.613.75.463z"/>
    <defs>
        <linearGradient id="ZZ__a" x1="6.429" x2="16.5" y1="6.215" y2="19.072" gradientUnits="userSpaceOnUse">
            <stop stopColor="#02EEE4"/>
            <stop offset="1" stopColor="#07A9FC"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconZz.displayName = 'Zz';

export default IconZz;
