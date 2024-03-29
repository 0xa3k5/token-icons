
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGora = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M9.287 6c-.317 0-.566.107-.741.364l-3.283 4.779a.94.94 0 0 0-.043.998l1.2 2.062c.068-.41.21-.803.42-1.162l2.54-4.645a1.35 1.35 0 0 1 1.175-.682h3.347a.8.8 0 0 1 .578.257l1.299-1.474C15.506 6.06 15 6 14.81 6H9.283zm-2.486 8.863L8.37 17.57c.171.292.489.425.831.425h5.928c.355 0 .685-.146.848-.455l2.816-5.507c.338-.63-.129-1.324-.849-1.324h-1.328c.051.086.085.12.102.214.042.319-.007.642-.14.934l-.01.009-1.97 3.321c-.245.369-.665.665-1.115.665h-2.949c-.471 0-.908-.322-1.153-.72l-1.397-2.276v-.004a1.7 1.7 0 0 1-.188-.733l-.626 1.114c-.09.146-.214.407-.304.716-.086.3-.129.626-.065.917zm1.526-3.69L9.716 8.58c.171-.3.488-.437.84-.437h3.347c.3 0 .424.261.535.488l1.8-2.091-.055-.107a1.56 1.56 0 0 0-1.32-.862H9.334c-.441 0-.857.215-1.11.583l-3.278 4.774a1.31 1.31 0 0 0-.056 1.402l3.15 5.43a1.33 1.33 0 0 0 1.161.668h5.928c.497 0 .955-.274 1.187-.707l2.82-5.507a1.324 1.324 0 0 0-1.192-1.937H13.23c-.48 0-.921.253-1.162.664l-1.14 1.873c-.218.377.056.9.498.9h3.582l-.728 1.269a.98.98 0 0 1-.806.445h-2.948a.99.99 0 0 1-.823-.484L8.314 12.66a1.9 1.9 0 0 1 .009-1.487zm6.93 2.113h-3.831a.19.19 0 0 1-.163-.283l1.131-1.873c.172-.296.489-.416.836-.416h2.589c.62 0 .6.532.402.986z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#GORA__a)" d="M9.287 6c-.317 0-.566.107-.741.364l-3.283 4.779a.94.94 0 0 0-.043.998l1.2 2.062c.068-.41.21-.803.42-1.162l2.54-4.645a1.35 1.35 0 0 1 1.175-.682h3.347a.8.8 0 0 1 .578.257l1.299-1.474C15.506 6.06 15 6 14.81 6H9.283zm-2.486 8.863L8.37 17.57c.171.292.489.425.831.425h5.928c.355 0 .685-.146.848-.455l2.816-5.507c.338-.63-.129-1.324-.849-1.324h-1.328c.051.086.085.12.102.214.042.319-.007.642-.14.934l-.01.009-1.97 3.321c-.245.369-.665.665-1.115.665h-2.949c-.471 0-.908-.322-1.153-.72l-1.397-2.276v-.004a1.7 1.7 0 0 1-.188-.733l-.626 1.114c-.09.146-.214.407-.304.716-.086.3-.129.626-.065.917zm1.526-3.69L9.716 8.58c.171-.3.488-.437.84-.437h3.347c.3 0 .424.261.535.488l1.8-2.091-.055-.107a1.56 1.56 0 0 0-1.32-.862H9.334c-.441 0-.857.215-1.11.583l-3.278 4.774a1.31 1.31 0 0 0-.056 1.402l3.15 5.43a1.33 1.33 0 0 0 1.161.668h5.928c.497 0 .955-.274 1.187-.707l2.82-5.507a1.324 1.324 0 0 0-1.192-1.937H13.23c-.48 0-.921.253-1.162.664l-1.14 1.873c-.218.377.056.9.498.9h3.582l-.728 1.269a.98.98 0 0 1-.806.445h-2.948a.99.99 0 0 1-.823-.484L8.314 12.66a1.9 1.9 0 0 1 .009-1.487zm6.93 2.113h-3.831a.19.19 0 0 1-.163-.283l1.131-1.873c.172-.296.489-.416.836-.416h2.589c.62 0 .6.532.402.986z" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="GORA__a" x1="6.056" x2="17.319" y1="10.676" y2="15.514" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5CCB38"/>
            <stop offset=".35" stopColor="#EEFDFE"/>
            <stop offset=".48" stopColor="#77D264"/>
            <stop offset=".79" stopColor="#E9F6FA"/>
            <stop offset="1" stopColor="#DCFDF0"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconGora.displayName = 'Gora';

export default IconGora;
