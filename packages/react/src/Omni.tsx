
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOmni = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M18.429 7.885V5.572h-2.434c.879.557 1.854 1.462 2.434 2.313M8.07 5.572h-2.5v2.371c.518-.982 1.485-1.881 2.5-2.371m-2.5 10.485v2.372h2.466c-.882-.567-1.889-1.51-2.465-2.372m10.464 2.372h2.394v-2.313c-.572.837-1.532 1.759-2.394 2.313"/><path fill="currentColor" d="M11.819 18.857v-.006c3.887 0 7.038-3.068 7.038-6.854 0-3.78-3.15-6.854-7.038-6.854-3.62.189-6.676 3.184-6.676 6.857S8.2 18.67 11.82 18.857m.174-12c-2.8.004-5.14 2.349-5.136 5.15s2.349 5.14 5.15 5.136 5.14-2.349 5.136-5.15c-.003-2.8-2.349-5.14-5.15-5.136" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#1D3F7B" d="M18.428 7.885V5.572h-2.434c.88.557 1.854 1.462 2.434 2.313M8.071 5.572h-2.5v2.371c.517-.982 1.485-1.881 2.5-2.371m-2.5 10.485v2.372h2.466c-.882-.567-1.889-1.51-2.466-2.372m10.464 2.372h2.393v-2.313c-.571.837-1.532 1.759-2.393 2.313"/><path fill="#1D3F7B" d="M11.818 18.857v-.006c3.888 0 7.039-3.068 7.039-6.854 0-3.78-3.151-6.854-7.039-6.854-3.62.189-6.675 3.184-6.675 6.857s3.056 6.669 6.675 6.857m.175-12c-2.801.004-5.14 2.349-5.136 5.15s2.348 5.14 5.15 5.136c2.8-.004 5.139-2.349 5.136-5.15-.004-2.8-2.349-5.14-5.15-5.136" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconOmni.displayName = 'Omni';
IconOmni.variants = 'brandedmono';

export default IconOmni;
