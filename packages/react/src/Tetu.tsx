
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconTetu = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 11.143a2.572 2.572 0 1 0 0-5.144 2.572 2.572 0 0 0 0 5.144"/>
    <path fill="currentColor" d="M11.996 12.429A4.25 4.25 0 0 1 7.779 8.25c.098-1.093-.879-1.093-1.145-.797l-.06.06a6.4 6.4 0 0 0-1.43 4.016c0 1.328 1.315 2.185 2.712 2.185h8.289c1.384 0 2.712-.848 2.712-2.185a6.36 6.36 0 0 0-1.491-4.072c-.274-.3-1.251-.3-1.153.793 0 2.224-1.886 4.179-4.217 4.179m.776 6.467 2.057-2.889c.433-.6-.009-1.436-.772-1.436H9.943c-.763 0-1.204.832-.771 1.436l2.057 2.889a.956.956 0 0 0 1.543 0"/>

        </>
      ) : (
        <>
          
    <path fill="#04A8F0" d="M12 11.143A2.572 2.572 0 1 0 12 6a2.572 2.572 0 0 0 0 5.143"/>
    <path fill="#686DF1" d="M11.995 12.429A4.25 4.25 0 0 1 7.778 8.25c.099-1.093-.878-1.093-1.144-.797l-.06.06a6.4 6.4 0 0 0-1.431 4.016c0 1.328 1.315 2.185 2.712 2.185h8.289c1.384 0 2.713-.848 2.713-2.185a6.36 6.36 0 0 0-1.492-4.072c-.274-.3-1.251-.3-1.152.793 0 2.224-1.886 4.179-4.218 4.179"/>
    <path fill="#04A8F0" d="m12.771 18.896 2.057-2.889c.433-.6-.008-1.436-.771-1.436H9.943c-.763 0-1.205.832-.772 1.436l2.057 2.889a.956.956 0 0 0 1.543 0"/>

        </>
      )}
    </BaseIcon>
));

IconTetu.displayName = 'Tetu';

export default IconTetu;
