
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBoson = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M4.286 6.857h15.428v10.715H4.286zM5.57 8.143H18.43v8.143H5.57zm12 7.286h-.068a3.13 3.13 0 0 1-2.67-1.513c-.3.317-.874.754-1.522.754-.758 0-1.238-.66-1.341-.904-.103-.236-.202-.536-.309-.849-.295-.87-.625-1.843-1.088-1.843-.36 0-.737.87-.965 1.586a3.167 3.167 0 0 1-3.18 2.769V14.25h.065a2.015 2.015 0 0 0 1.997-2.036 2.014 2.014 0 0 0-2.062-2.035V9h.065a3.13 3.13 0 0 1 2.734 1.624c.244-.373.711-.848 1.346-.848.784 0 1.354.386 1.521.857l.189.557c.321.986.711 2.177 1.264 2.177.502 0 .716-.956.849-1.646A3.17 3.17 0 0 1 17.57 9v1.179h-.068a2.015 2.015 0 0 0-1.993 2.035 2.015 2.015 0 0 0 2.061 2.036z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="url(#BOSON__a)" d="M4.286 6.857h15.429v10.715H4.286zm1.286 1.286h12.857v8.143H5.572zm12 7.286h-.069a3.13 3.13 0 0 1-2.67-1.513c-.3.317-.874.754-1.521.754-.759 0-1.239-.66-1.342-.904-.102-.236-.201-.536-.308-.849-.296-.87-.626-1.843-1.089-1.843-.36 0-.737.87-.964 1.586a3.167 3.167 0 0 1-3.18 2.769V14.25h.064a2.015 2.015 0 0 0 1.997-2.036A2.014 2.014 0 0 0 6.43 10.18V9h.064a3.13 3.13 0 0 1 2.735 1.624c.244-.373.711-.848 1.345-.848.785 0 1.355.386 1.522.857l.188.557c.322.986.712 2.177 1.265 2.177.501 0 .715-.956.848-1.646A3.17 3.17 0 0 1 17.572 9v1.179h-.069a2.015 2.015 0 0 0-1.993 2.035 2.016 2.016 0 0 0 2.062 2.036z" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="BOSON__a" x1="17.572" x2="6.429" y1="12.214" y2="12.214" gradientUnits="userSpaceOnUse"><stop stopColor="#1EF6AD"/><stop offset="1" stopColor="#5DF6BD"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconBoson.displayName = 'Boson';
IconBoson.variants = 'brandedmono';

export default IconBoson;
