
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDiko = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M9.493 6.776a.61.61 0 0 1 .557-.347h2.623a.61.61 0 0 1 .523.29l5.571 9.09a.58.58 0 0 1 .009.6.61.61 0 0 1-.532.3h-2.742a.59.59 0 0 1-.433-.17 7.2 7.2 0 0 0-3.695-1.843c-1.551-.245-3.385.09-5.185 1.842a.62.62 0 0 1-.785.07.59.59 0 0 1-.205-.738l4.29-9.099zm1.65.938 4.714 7.714h1.308l-4.843-7.714zm2.46 6.425-3.488-5.825-2.786 5.902c1.3-.69 2.79-.935 4.243-.699a8.2 8.2 0 0 1 2.031.617z"/>
        </>
      ) : (
        <>
          <path fill="#212937" d="M9.493 6.776a.61.61 0 0 1 .557-.347h2.623a.61.61 0 0 1 .523.29l5.571 9.09a.58.58 0 0 1 .009.6.61.61 0 0 1-.532.3h-2.742a.59.59 0 0 1-.433-.17 7.2 7.2 0 0 0-3.695-1.843c-1.551-.245-3.385.09-5.185 1.842a.62.62 0 0 1-.785.07.59.59 0 0 1-.205-.738l4.29-9.099zm1.65.938 4.714 7.714h1.308l-4.843-7.714zm2.46 6.425-3.488-5.825-2.786 5.902c1.3-.69 2.79-.935 4.243-.699a8.2 8.2 0 0 1 2.031.617z"/>
        </>
      )}
    </BaseIcon>
));

IconDiko.displayName = 'Diko';
IconDiko.variants = 'brandedmono';

export default IconDiko;
