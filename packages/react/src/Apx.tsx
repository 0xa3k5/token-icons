
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconApx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M17.717 8.183a12.8 12.8 0 0 1-4.582 5.51 12.76 12.76 0 0 1-6.822 2.175 6.89 6.89 0 0 1 4.34-10.589 6.86 6.86 0 0 1 7.064 2.904M18 8.14v-.853q0-.013.007-.025a.1.1 0 0 1 .018-.018l.764-.432a.046.046 0 0 1 .065.018q.005.012.003.025v.853q0 .015-.003.025a.1.1 0 0 1-.018.019l-.764.432a.046.046 0 0 1-.065-.019.1.1 0 0 1-.007-.024m-.427 7.84a6.9 6.9 0 0 0 1.284-4.007c0-1.06-.245-2.104-.716-3.052-2.147 2.778-3.507 6.021-3.94 9.508 1.358-.465 2.537-1.28 3.372-2.449" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <g clipPath="url(#APX__a)"><path fill="url(#APX__b)" d="M24 0H0v24h24z"/><path fill="#fff" d="M17.717 8.183a12.8 12.8 0 0 1-4.582 5.51 12.76 12.76 0 0 1-6.822 2.175 6.89 6.89 0 0 1 4.34-10.589 6.86 6.86 0 0 1 7.064 2.904M18 8.14v-.853q0-.013.007-.025a.1.1 0 0 1 .018-.018l.764-.432a.046.046 0 0 1 .065.018q.005.012.003.025v.853q0 .015-.003.025a.1.1 0 0 1-.018.019l-.764.432a.046.046 0 0 1-.065-.019.1.1 0 0 1-.007-.024m-.427 7.84a6.9 6.9 0 0 0 1.284-4.007c0-1.06-.245-2.104-.716-3.052-2.147 2.778-3.507 6.021-3.94 9.508 1.358-.465 2.537-1.28 3.372-2.449" fillRule="evenodd" clipRule="evenodd"/></g><defs><linearGradient id="APX__b" x1="4.481" x2="19.97" y1="5.14" y2="21.148" gradientUnits="userSpaceOnUse"><stop stopColor="#AA42FC"/><stop offset="1" stopColor="#5A49FF"/></linearGradient><clipPath id="APX__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconApx.displayName = 'Apx';

export default IconApx;