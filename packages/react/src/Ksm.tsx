
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconKsm = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="currentColor" d="M18.818 7.401c-.297-.267-.628-.468-1.024-.535-.495-.067-.99.268-1.32.502-.33.235-.992.838-1.256 1.072s-.925.368-2.014 1.039c-1.09.67-5.318 3.416-5.318 3.416h1.09l-4.92 2.58h.494l-.693.535c.396.101.793.034 1.156-.167v.167s5.845-2.344 6.968-1.741l-.693.201c.066 0 1.156.067 1.156.067.066.469.33.904.727 1.139.66.435.693.703.693.703s-.33.134-.33.335a3 3 0 0 1 1.882 0s-.033-.201-.495-.335a2.63 2.63 0 0 1-1.156-.938c-.264-.368-.363-.837-.198-1.273s.726-.67 1.882-1.272c1.355-.704 1.685-1.24 1.85-1.676s.495-1.239.628-1.641c.131-.369.363-.67.66-.938a8 8 0 0 1 1.123-.502c.066.033-.66-.57-.892-.738"/>
    </BaseIcon>
));

IconKsm.displayName = 'Ksm';
IconKsm.variants = 'mono';

export default IconKsm;
