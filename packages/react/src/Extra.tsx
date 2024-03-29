
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconExtra = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 19.286a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57m0-.857A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M11.606 15.429v-1.046H9.557a.814.814 0 0 1-.814-.823c0-.45.368-.917.814-.917h1.586v-.93H9.557a1.85 1.85 0 0 0-1.843 1.86c0 1.024.823 1.856 1.843 1.856z"/>
    <path fill="currentColor" d="M8.1 12.429c.3.18.771.342 1.299.24.467-.095.051-.472-.502-.832-.315.12-.59.325-.797.592"/>
    <path fill="currentColor" d="M11.606 9v1.046H9.557a.814.814 0 0 0-.814.823c0 .45.368.703.814.703h1.586v1.07H9.557a1.786 1.786 0 0 1-1.843-1.786C7.714 9.832 8.537 9 9.557 9zm1.494 6.43 3.185-4.286h-1.132L12 15.429z"/>
    <path fill="currentColor" d="m13.474 13.423.536.78.502-.673-.605-.69-.428.583z"/>
    <path fill="currentColor" d="M15.184 15.429 12 11.143h1.132l3.154 4.286z"/>

        </>
      ) : (
        <>
          
    <path fill="#B0D1FA" d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.857A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#146AE5" d="M11.605 15.429v-1.046H9.557a.814.814 0 0 1-.815-.823c0-.45.369-.917.815-.917h1.585v-.93H9.557a1.85 1.85 0 0 0-1.843 1.86c0 1.024.823 1.856 1.843 1.856z"/>
    <path fill="#194989" d="M8.1 12.429c.3.18.771.342 1.298.24.467-.095.052-.472-.501-.832-.315.12-.59.325-.797.592"/>
    <path fill="#146AE5" d="M11.605 9v1.046H9.557a.814.814 0 0 0-.815.823c0 .45.369.703.815.703h1.585v1.07H9.557a1.786 1.786 0 0 1-1.843-1.786C7.714 9.832 8.537 9 9.557 9zm1.496 6.429 3.184-4.286h-1.131L12 15.429z"/>
    <path fill="#1D4988" d="m13.474 13.423.536.78.501-.673-.604-.69-.429.583z"/>
    <path fill="#146AE5" d="M15.184 15.429 12 11.143h1.131l3.154 4.286z"/>

        </>
      )}
    </BaseIcon>
));

IconExtra.displayName = 'Extra';

export default IconExtra;
