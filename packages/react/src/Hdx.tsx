
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconHdx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M11.623 19.616a.76.76 0 0 0 .754 0l6.103-3.484a.76.76 0 0 0 .377-.648V8.516a.74.74 0 0 0-.377-.643l-6.103-3.489a.76.76 0 0 0-.754 0L5.52 7.87a.75.75 0 0 0-.377.647v6.968a.74.74 0 0 0 .377.643zM11.657 6a.71.71 0 0 1 .703 0l4.865 2.687a.67.67 0 0 1 .342.605v5.391a.69.69 0 0 1-.351.6L12.343 18a.71.71 0 0 1-.703 0l-4.86-2.687a.69.69 0 0 1-.347-.604V9.317a.7.7 0 0 1 .356-.6L11.662 6zm-.034 10.187a.71.71 0 0 0 .703 0l3.171-1.8a.7.7 0 0 0 .36-.587v-3.6a.68.68 0 0 0-.351-.596l-.934-.617V13.5l-1.715.939v-2.015l-1.714.386v3.129l.484.257zm-3.171-1.8.977.622v-4.616l1.714-.943v1.77l1.714-.364V8.044l-.527-.235a.71.71 0 0 0-.703 0l-3.171 1.8a.65.65 0 0 0-.257.248c-.056.095-.056.197-.056.3v3.686c0 .103 0 .206.051.3.065.103.15.193.258.253z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#HDX__a)" d="M11.623 19.616a.76.76 0 0 0 .754 0l6.103-3.484a.76.76 0 0 0 .377-.648V8.516a.74.74 0 0 0-.377-.643l-6.103-3.489a.76.76 0 0 0-.754 0L5.52 7.87a.75.75 0 0 0-.377.647v6.968a.74.74 0 0 0 .377.643zM11.657 6a.71.71 0 0 1 .703 0l4.864 2.687a.67.67 0 0 1 .343.605v5.391a.69.69 0 0 1-.352.6L12.343 18a.71.71 0 0 1-.703 0l-4.86-2.687a.69.69 0 0 1-.347-.604V9.317a.7.7 0 0 1 .355-.6L11.661 6zm-.034 10.187a.71.71 0 0 0 .702 0l3.172-1.8a.7.7 0 0 0 .36-.587v-3.6a.68.68 0 0 0-.352-.596l-.934-.617V13.5l-1.714.939v-2.015l-1.714.386v3.129l.484.257zm-3.172-1.8.977.622v-4.616l1.715-.943v1.77l1.714-.364V8.044l-.527-.235a.71.71 0 0 0-.703 0l-3.172 1.8a.65.65 0 0 0-.257.248c-.055.095-.055.197-.055.3v3.686c0 .103 0 .206.051.3.064.103.15.193.257.253z"/>
    <defs>
        <linearGradient id="HDX__a" x1="11.991" x2="11.991" y1="4.363" y2="19.629" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7F5F6"/>
            <stop offset=".88" stopColor="#A69696"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconHdx.displayName = 'Hdx';

export default IconHdx;
