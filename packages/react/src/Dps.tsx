
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDps = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M3.857 14.289c0-.78.87-2.139 1.303-2.717-.137.304-.416.878-.416 1.435 0 2.417 4.264 2.182 6.399 1.757-.716.365-2.589 1.093-4.342 1.093-2.185 0-2.944-.591-2.944-1.568M20.57 9.71c0 .78-.921 2.139-1.38 2.718.146-.305.442-.879.442-1.436 0-2.417-4.517-2.182-6.776-1.757.759-.365 2.743-1.093 4.599-1.093 2.314 0 3.115.591 3.115 1.568"/><path fill="currentColor" d="M18.45 12a6.433 6.433 0 0 1-11.126 4.406l.03.008c.994.077 4.911-.45 7.071-3.638-.857.476-3.068 1.427-5.027 1.427-1.748 0-2.867-.403-3.707-.964a6.433 6.433 0 0 1 11.023-5.632.3.3 0 0 0-.081-.021c-.986-.077-4.886.45-7.037 3.638.857-.475 3.055-1.427 5-1.427 1.78 0 2.894.42 3.738.994.077.39.116.798.116 1.209"/>
        </>
      ) : (
        <>
          <path fill="#D400A6" d="M3.857 14.289c0-.78.87-2.139 1.303-2.717-.137.304-.415.878-.415 1.435 0 2.417 4.264 2.182 6.398 1.757-.716.365-2.588 1.093-4.341 1.093-2.186 0-2.945-.591-2.945-1.568M20.572 9.71c0 .78-.922 2.139-1.38 2.718.145-.305.441-.879.441-1.436 0-2.417-4.517-2.182-6.776-1.757.759-.365 2.743-1.093 4.599-1.093 2.314 0 3.116.591 3.116 1.568"/><path fill="#7F16D3" d="M18.45 12a6.433 6.433 0 0 1-11.125 4.406l.03.008c.994.077 4.911-.45 7.071-3.638-.857.476-3.069 1.427-5.027 1.427-1.749 0-2.867-.403-3.707-.964a6.433 6.433 0 0 1 11.023-5.632.3.3 0 0 0-.082-.021c-.986-.077-4.886.45-7.037 3.638.857-.475 3.056-1.427 5.001-1.427 1.779 0 2.893.42 3.738.994.077.39.115.798.115 1.209"/>
        </>
      )}
    </BaseIcon>
));

IconDps.displayName = 'Dps';
IconDps.variants = 'brandedmono';

export default IconDps;
