
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCls = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 19.286a7.286 7.286 0 1 0-6.54-4.072l5.4-3.218-2.25-1.286a.66.66 0 0 1-.245-.891.66.66 0 0 1 .892-.245l2.314 1.299V8.276c0-.356.257-.562.613-.562s.673.206.673.562v2.597l2.254-1.299a.66.66 0 0 1 .892.245.66.66 0 0 1-.24.891l-2.267 1.286 2.254 1.285c.304.176.42.57.24.888a.66.66 0 0 1-.673.321.6.6 0 0 1-.206-.077l-2.254-1.299v2.61c0 .356-.317.562-.673.562s-.613-.206-.613-.562v-2.623l-5.443 3.215A7.28 7.28 0 0 0 12 19.286"/>
        </>
      ) : (
        <>
          <path fill="#0053F1" d="M12 19.286a7.286 7.286 0 1 0-6.54-4.072l5.4-3.218-2.25-1.286a.66.66 0 0 1-.244-.891.66.66 0 0 1 .891-.245l2.315 1.299V8.276c0-.356.257-.562.613-.562.355 0 .672.206.672.562v2.597l2.255-1.299a.66.66 0 0 1 .891.245.66.66 0 0 1-.24.891l-2.267 1.286 2.254 1.285c.305.176.42.57.24.888a.665.665 0 0 1-.673.321.6.6 0 0 1-.205-.077l-2.255-1.299v2.61c0 .356-.317.562-.672.562s-.613-.206-.613-.562v-2.623l-5.443 3.215A7.28 7.28 0 0 0 12 19.286"/>
        </>
      )}
    </BaseIcon>
));

IconCls.displayName = 'Cls';
IconCls.variants = 'brandedmono';

export default IconCls;
