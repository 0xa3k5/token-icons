
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconUmami = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6.429 15H5.143v1.5c0 1.2 1.144 1.5 1.714 1.5h10.286c1.371 0 1.714-1.166 1.714-1.748V15h-8.571v.75c0 .249-.27.75-.857.75s-.857-.501-.857-.75V15h-.429v1.715c0 .642-.369.857-.857.857-.39 0-.857-.215-.857-.823zm-1.286-3.214c0-.356.33-.643.733-.643h12.253c.402 0 .732.287.732.643s-.33.643-.732.643H5.872c-.403 0-.733-.287-.733-.643z"/>
    <path fill="currentColor" d="M12 5.143c-5.066 0-6.857 2.533-6.857 4.05v1.521h13.714v-1.52c0-1.518-2.357-4.05-6.857-4.05m-1.226.506c-1.47 0-4.457.913-4.65 4.56h1.222c.086-1.097.883-3.544 3.428-4.56" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M5.143 13.77v-1.34c.244.27.883.806 1.47.806.733 0 1.011-.806 1.744-.806s.947.806 1.44.806c.489 0 .36-.806 1.346-.806s.857.806 1.59.806c.737 0 .184-.806 1.41-.806s.797.806 1.53.806c.737 0 .244-.806 1.47-.806.981 0 .981 1.071 1.714 1.071v1.072c-.981 0-1.071-.857-1.714-.857s-.489.857-1.47.857c-.977 0-.797-.857-1.53-.857s-.429.857-1.41.857c-.977 0-.857-.857-1.59-.857s-.369.857-1.346.857c-.981 0-.707-.857-1.44-.857s-.767.857-1.744.857a1.8 1.8 0 0 1-1.47-.806z"/>

        </>
      ) : (
        <>
          
    <path fill="#fff" d="M6.429 15H5.143v1.5c0 1.2 1.144 1.5 1.714 1.5h10.286c1.371 0 1.714-1.166 1.714-1.748V15h-8.571v.75c0 .249-.27.75-.857.75s-.857-.501-.857-.75V15h-.429v1.715c0 .642-.369.857-.857.857-.39 0-.857-.215-.857-.823zm-1.286-3.214c0-.356.33-.643.733-.643h12.253c.402 0 .732.287.732.643s-.33.643-.732.643H5.872c-.403 0-.733-.287-.733-.643z"/>
    <path fill="#fff" d="M12 5.143c-5.066 0-6.857 2.533-6.857 4.05v1.521h13.714v-1.52c0-1.518-2.357-4.05-6.857-4.05m-1.226.506c-1.47 0-4.457.913-4.65 4.56h1.222c.086-1.097.883-3.544 3.428-4.56" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#fff" d="M5.143 13.77v-1.34c.244.27.883.806 1.47.806.733 0 1.011-.806 1.744-.806s.947.806 1.44.806c.489 0 .36-.806 1.346-.806s.857.806 1.59.806c.737 0 .184-.806 1.41-.806s.797.806 1.53.806c.737 0 .244-.806 1.47-.806.981 0 .981 1.071 1.714 1.071v1.072c-.981 0-1.071-.857-1.714-.857s-.489.857-1.47.857c-.977 0-.797-.857-1.53-.857s-.429.857-1.41.857c-.977 0-.857-.857-1.59-.857s-.369.857-1.346.857c-.981 0-.707-.857-1.44-.857s-.767.857-1.744.857a1.8 1.8 0 0 1-1.47-.806z"/>

        </>
      )}
    </BaseIcon>
));

IconUmami.displayName = 'Umami';

export default IconUmami;
