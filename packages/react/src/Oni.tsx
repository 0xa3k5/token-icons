
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOni = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 14.151a2.143 2.143 0 1 0 0-4.285 2.143 2.143 0 0 0 0 4.285m0 1.715a3.856 3.856 0 1 0 0-7.713 3.856 3.856 0 0 0 0 7.713" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M12.343 17.859c-.094-.412-.472-.686-.892-.733a5.24 5.24 0 0 1-4.564-4.269C6.81 12.386 6.43 12 5.953 12c-.472 0-.866.386-.806.857a6.985 6.985 0 0 0 6.407 6c.536.034.909-.476.789-.998m5.516-5.379c.514.12 1.024-.244.998-.771a7.05 7.05 0 0 0-6.505-6.566c-.45-.026-.802.351-.802.801 0 .497.429.879.926.935 2.413.257 4.427 2.262 4.65 4.692.038.429.317.815.733.909"/>
        </>
      ) : (
        <>
          <path fill="#43ADB2" d="M12 14.151a2.143 2.143 0 1 0 0-4.285 2.143 2.143 0 0 0 0 4.285m0 1.715a3.856 3.856 0 1 0 0-7.713 3.856 3.856 0 0 0 0 7.713" fillRule="evenodd" clipRule="evenodd"/><path fill="#43ADB2" d="M12.342 17.859c-.094-.412-.471-.686-.891-.733a5.24 5.24 0 0 1-4.564-4.269C6.81 12.386 6.428 12 5.952 12c-.471 0-.865.386-.805.857a6.985 6.985 0 0 0 6.407 6c.535.034.908-.476.788-.998m5.516-5.379c.514.12 1.024-.244.999-.771a7.05 7.05 0 0 0-6.506-6.566c-.45-.026-.802.351-.802.801 0 .497.43.879.926.935 2.413.257 4.427 2.262 4.65 4.692.039.429.317.815.733.909"/>
        </>
      )}
    </BaseIcon>
));

IconOni.displayName = 'Oni';
IconOni.variants = 'brandedmono';

export default IconOni;
