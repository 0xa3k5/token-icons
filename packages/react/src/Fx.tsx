
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconFx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M7.286 10.715H5.57v-.858h1.715c0 .022 0-.025 0 0 0-.283-.018-.711 0-.994.034-.536 0-1.029.304-1.47.308-.44.77-.749 1.294-.866a3.9 3.9 0 0 1 1.294-.077c.45.043.896.146 1.316.317l.077.035-.291.762-.176-.072a3.2 3.2 0 0 0-1.723-.18c-.668.111-1.238.608-1.238 1.371v1.174h2.571v.857H8.143v6h-.857zM16.071 13.715l1.072-2.143h-.857l-.858 1.714-.857-1.714h-.857l1.072 2.143-1.072 2.142h.857l.857-1.714.858 1.714h.857zm-2.768 2.537-.536.463c-1.509-1.47-1.671-4.29-.009-6l.54.47c-.685.832-.87 1.445-.87 2.53 0 .835.348 1.902.875 2.537m4.251 0 .54.463c1.5-1.47 1.672-4.29.004-6l-.54.47c.686.832.87 1.428.87 2.53 0 .878-.351 1.89-.874 2.537"/>
        </>
      ) : (
        <>
          <path fill="#fff" d="M7.286 10.715H5.57v-.858h1.715c0 .022 0-.025 0 0 0-.283-.018-.711 0-.994.034-.536 0-1.029.304-1.47.308-.44.77-.749 1.294-.866a3.9 3.9 0 0 1 1.294-.077c.45.043.896.146 1.316.317l.077.035-.291.762-.176-.072a3.2 3.2 0 0 0-1.723-.18c-.668.111-1.238.608-1.238 1.371v1.174h2.571v.857H8.143v6h-.857z"/><path fill="#F7D509" d="m16.071 13.715 1.072-2.143h-.857l-.858 1.714-.857-1.714h-.857l1.072 2.143-1.072 2.142h.857l.857-1.714.858 1.714h.857zm-2.768 2.537-.536.463c-1.509-1.47-1.671-4.29-.009-6l.54.47c-.685.832-.87 1.445-.87 2.53 0 .835.348 1.902.875 2.537m4.251 0 .54.463c1.5-1.47 1.672-4.29.004-6l-.54.47c.686.832.87 1.428.87 2.53 0 .878-.351 1.89-.874 2.537"/>
        </>
      )}
    </BaseIcon>
));

IconFx.displayName = 'Fx';
IconFx.variants = 'brandedmono';

export default IconFx;
