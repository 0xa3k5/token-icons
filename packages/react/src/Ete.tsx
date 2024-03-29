
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEte = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M7.954 11.726c-.351.158-1.063.475-1.097.484l4.929-8.353v.866l-4.166 7.05.428-.171 3.738-6.665v6.592l-1.402.523-2.469-.172.04-.15z"/>
    <path fill="currentColor" d="M11.786 10.123 7.903 11.88l3.883 2.331v-.342l-3.3-1.946 3.3-1.474zm0 .566-2.812 1.264 2.812 1.654v-.355L9.71 12.009l2.075-.935zm0 .638-1.552.686 1.552.943zm-4.93.999 4.93 2.961v-.857l-4.123-2.486zm9.19-.592c.35.155 1.062.472 1.097.48l-4.929-8.357v.866l4.166 7.054-.429-.171-3.737-6.669v6.592l1.402.527 2.468-.172z"/>
    <path fill="currentColor" d="m12.214 10.123 3.883 1.749-3.883 2.322v-.343l3.3-1.937-3.3-1.465zm0 .561 2.811 1.26-2.81 1.646v-.351L14.287 12l-2.074-.934v-.386zm0 2.259v-1.62l1.551.686zm4.929-.63-4.929 2.957v-.857l4.123-2.473z"/>
    <path fill="currentColor" d="M11.97 16.2c-.06 0-3.433-1.941-5.113-2.914l5.113 6.857 5.173-6.857A265 265 0 0 1 11.97 16.2"/>

        </>
      ) : (
        <>
          
    <path fill="#141414" d="M7.955 11.726c-.352.158-1.063.475-1.098.484l4.929-8.353v.866l-4.166 7.05.429-.171 3.737-6.665v6.592l-1.401.523-2.469-.172.039-.15z"/>
    <path fill="#0FABFF" d="M11.786 10.123 7.903 11.88l3.883 2.331v-.342l-3.3-1.946 3.3-1.474zm0 .566-2.811 1.264 2.811 1.654v-.355l-2.074-1.243 2.074-.935zm0 .638-1.551.686 1.551.943zm-4.929.999 4.929 2.961v-.857l-4.123-2.486z"/>
    <path fill="#393939" d="M16.046 11.734c.351.155 1.063.472 1.097.48l-4.928-8.357v.866l4.165 7.054-.428-.171-3.737-6.669v6.592l1.401.527 2.469-.172z"/>
    <path fill="#10ACF9" d="m12.215 10.123 3.882 1.749-3.882 2.322v-.343l3.3-1.937-3.3-1.465zm0 .561 2.811 1.26-2.811 1.646v-.351L14.289 12l-2.074-.934v-.386zm0 2.259v-1.62l1.551.686zm4.928-.63-4.928 2.957v-.857l4.122-2.473z"/>
    <path fill="#8C8C8C" d="M11.97 16.2c-.06 0-3.433-1.941-5.113-2.914l5.113 6.857 5.173-6.857q-2.57 1.486-5.173 2.914"/>

        </>
      )}
    </BaseIcon>
));

IconEte.displayName = 'Ete';

export default IconEte;
