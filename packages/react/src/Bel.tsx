
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBel = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M7.866 4.714A1.825 1.825 0 0 0 6.042 6.54v5.475c0 1.008.6 1.7 1.672 1.7h.429v3.318a1.825 1.825 0 0 0 1.825 1.825h4.285a4.562 4.562 0 0 0 2.17-8.576q.111-.486.112-1.005a4.56 4.56 0 0 0-4.562-4.562zm8.558 5.567c-.375-.203-1.21-.424-2.281-.424h-3.995c-1.008 0-2.005.693-2.005 1.7v2.157h3.83c2.174 0 3.993-1.397 4.45-3.433" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M6 6.54c0-1.009.858-1.826 1.866-1.826h4.107a4.562 4.562 0 0 1 4.45 5.57s-.891-.427-2.28-.427h-1.291c-.215.004-1.46.02-2.704.01-1.142-.01-2.005.779-2.005 1.69v2.157H7.5c-.857 0-1.5-.692-1.5-1.7z"/>
        </>
      ) : (
        <>
          <path fill="#00B2FA" d="M7.866 4.714A1.825 1.825 0 0 0 6.042 6.54v5.475c0 1.008.6 1.7 1.672 1.7h.429v3.318a1.825 1.825 0 0 0 1.825 1.825h4.285a4.562 4.562 0 0 0 2.17-8.576q.111-.486.112-1.005a4.56 4.56 0 0 0-4.562-4.562zm8.558 5.567c-.375-.203-1.21-.424-2.281-.424h-3.995c-1.008 0-2.005.693-2.005 1.7v2.157h3.83c2.174 0 3.993-1.397 4.45-3.433" fillRule="evenodd" clipRule="evenodd"/><path fill="#63CAAB" d="M6 6.54c0-1.009.858-1.826 1.866-1.826h4.107a4.562 4.562 0 0 1 4.45 5.57s-.891-.427-2.28-.427h-1.291c-.215.004-1.46.02-2.704.01-1.142-.01-2.005.779-2.005 1.69v2.157H7.5c-.857 0-1.5-.692-1.5-1.7z"/>
        </>
      )}
    </BaseIcon>
));

IconBel.displayName = 'Bel';
IconBel.variants = 'brandedmono';

export default IconBel;
