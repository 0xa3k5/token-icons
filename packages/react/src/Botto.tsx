
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBotto = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M13.042 18.429c2.768 0 4.53-1.299 4.53-3.6 0-1.998-1.71-2.988-4.072-3.043v-.039c2.203-.197 3.686-1.345 3.686-3.231 0-2.014-1.714-2.944-4.444-2.944H6.429v.038L7.556 6.76c.141.15.158.201.158.441v9.6c0 .24-.017.291-.158.441l-1.127 1.145v.043zm-1.235-6.857h-1.093V6.364c0-.308.052-.364.318-.364h.844c1.286 0 1.838 1.033 1.838 2.662 0 1.812-.57 2.91-1.907 2.91M11.14 18h.737c1.624 0 2.267-1.071 2.267-3.064 0-1.959-.66-2.936-2.319-2.936h-1.11v5.666c0 .317.065.334.425.334" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#1C1C1C" d="M13.042 18.429c2.768 0 4.53-1.299 4.53-3.6 0-1.998-1.71-2.988-4.072-3.043v-.039c2.203-.197 3.686-1.345 3.686-3.231 0-2.014-1.714-2.944-4.444-2.944H6.429v.038L7.556 6.76c.141.15.158.201.158.441v9.6c0 .24-.017.291-.158.441l-1.127 1.145v.043zm-1.235-6.857h-1.093V6.364c0-.308.052-.364.318-.364h.844c1.286 0 1.838 1.033 1.838 2.662 0 1.812-.57 2.91-1.907 2.91M11.14 18h.737c1.624 0 2.267-1.071 2.267-3.064 0-1.959-.66-2.936-2.319-2.936h-1.11v5.666c0 .317.065.334.425.334" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconBotto.displayName = 'Botto';
IconBotto.variants = 'brandedmono';

export default IconBotto;
