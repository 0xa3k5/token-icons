
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPerp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m11.25 18.534-6.3-6.048c-.53-.558-1.028-1.97-.298-2.654.198-.186.53-.493.93-.865 1.033-.958 2.522-2.34 3.347-3.137.771-.743 1.721-1.001 2.638-.174a77 77 0 0 1 2.212 2.088l-1.758 4.976-1.672 1.561 1.705 1.67zm-4.325-7.572 3.473-3.228 1.654 1.622-3.432 3.261z" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="m10.29 11.032 3.427 3.32-2.51 2.379c-.303.302-.727 1.085 0 1.803s1.604.073 1.952-.34l5.94-5.732c.385-.447 1.081-1.763.156-2.677a117 117 0 0 0-2.671-2.532c-.438-.35-1.625-.742-2.873.492a173 173 0 0 1-3.42 3.287m3.484.001 1.712 1.677 1.698-1.589-1.766-1.667z" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="m13.778 11.028-1.745 1.661-1.744-1.66 1.744-1.655z"/>
        </>
      ) : (
        <>
          <path fill="#3BEBAA" d="m11.25 18.534-6.3-6.048c-.53-.558-1.028-1.97-.298-2.654.198-.186.53-.493.93-.865 1.033-.958 2.522-2.34 3.347-3.137.771-.743 1.721-1.001 2.638-.174a77 77 0 0 1 2.212 2.088l-1.758 4.976-1.672 1.561 1.705 1.67zm-4.325-7.572 3.473-3.228 1.654 1.622-3.432 3.261z" fillRule="evenodd" clipRule="evenodd"/><path fill="#02BCE4" d="m10.29 11.032 3.427 3.32-2.51 2.379c-.303.302-.727 1.085 0 1.803s1.604.073 1.952-.34l5.94-5.732c.385-.447 1.081-1.763.156-2.677a117 117 0 0 0-2.671-2.532c-.438-.35-1.625-.742-2.873.492a173 173 0 0 1-3.42 3.287m3.484.001 1.712 1.677 1.698-1.589-1.766-1.667z" fillRule="evenodd" clipRule="evenodd"/><path fill="#01A5E2" d="m13.778 11.028-1.745 1.661-1.744-1.66 1.744-1.655z"/>
        </>
      )}
    </BaseIcon>
));

IconPerp.displayName = 'Perp';
IconPerp.variants = 'brandedmono';

export default IconPerp;
