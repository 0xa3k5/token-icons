
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGains = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M13.097 10.217c-.36-.03-.527-.043-.866.146q-2.402 1.324-4.8 2.657-.36.22-.767.334c-1.213.253-2.288-.9-1.851-2.023.223-.574.57-.75 1.183-1.088q3.934-2.185 7.881-4.35c.814-.446 1.59-.429 2.336.06.42.26.727.67.857 1.148.051.197.077.557.073 1.072v8.481c0 .887-.587 1.736-1.535 1.77-.257.009-.514.009-.75-.086a2.03 2.03 0 0 1-1.144-1.757V11.25c0-.442-.06-.772-.45-.986a.4.4 0 0 0-.167-.047"/>
    <path fill="currentColor" d="M9.981 18.107c-.831-.19-1.6-.59-2.233-1.161-.141-.129-.3-.275-.334-.455-.06-.3.163-.445.407-.583l2.135-1.191c.265-.15.608-.06.728.214.03.065.03.172.03.33v2.255q0 .289-.077.411c-.141.227-.394.244-.656.18m3.065-7.894c-.326-.03-.493-.03-.815.15q-2.402 1.324-4.8 2.657-.36.22-.767.334c-1.213.253-2.288-.9-1.851-2.023.158-.407.381-.613.715-.823 2.272-.741 5.915-1.508 7.518-.3z"/>
    <path fill="currentColor" d="m12.96 10.204.137.013a.5.5 0 0 1 .171.043c.343.193.429.446.442.806.056-3.446-2.683-3.202-3.686-3.052l-4.028 2.229-.06.034a7 7 0 0 0-.399.227c2.25-.741 5.837-1.5 7.423-.3"/>

        </>
      ) : (
        <>
          
    <path fill="url(#GAINS__a)" d="M13.098 10.217c-.36-.03-.528-.043-.866.146a1494 1494 0 0 0-4.8 2.657q-.362.22-.767.334c-1.213.253-2.289-.9-1.852-2.023.223-.574.57-.75 1.183-1.088a1760 1760 0 0 1 7.881-4.35c.815-.446 1.59-.429 2.336.06.421.26.728.67.857 1.148.052.197.078.557.073 1.072v8.481c0 .887-.587 1.736-1.534 1.77-.257.009-.514.009-.75-.086a2.03 2.03 0 0 1-1.144-1.757V11.25c0-.442-.06-.772-.45-.986a.4.4 0 0 0-.168-.047"/>
    <path fill="url(#GAINS__b)" d="M9.982 18.107c-.832-.19-1.6-.59-2.233-1.161-.141-.129-.3-.275-.334-.455-.06-.3.163-.445.407-.583l2.134-1.191c.266-.15.609-.06.729.214.03.065.03.172.03.33v2.255q0 .289-.078.411c-.14.227-.394.244-.655.18"/>
    <path fill="url(#GAINS__c)" d="M13.046 10.213c-.326-.03-.493-.03-.814.15a1494 1494 0 0 0-4.8 2.657q-.362.22-.767.334c-1.213.253-2.289-.9-1.852-2.023.159-.407.382-.613.716-.823 2.271-.741 5.914-1.508 7.517-.3z"/>
    <path fill="url(#GAINS__d)" d="m12.96 10.204.137.013a.5.5 0 0 1 .172.043c.343.193.428.446.441.806.056-3.446-2.683-3.202-3.685-3.052l-4.029 2.229-.06.034a7 7 0 0 0-.398.227c2.25-.741 5.837-1.5 7.422-.3"/>
    <defs>
        <linearGradient id="GAINS__a" x1="10.929" x2="10.929" y1="5.571" y2="18.428" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4AF78B"/>
            <stop offset="1" stopColor="#23BFEF"/>
        </linearGradient>
        <linearGradient id="GAINS__b" x1="5.862" x2="15.227" y1="9.637" y2="16.997" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3CD1C6"/>
            <stop offset="1" stopColor="#34C2D8"/>
        </linearGradient>
        <linearGradient id="GAINS__c" x1="13.244" x2="3.213" y1="5.578" y2="9.154" gradientUnits="userSpaceOnUse">
            <stop stopColor="#226A82"/>
            <stop offset="1" stopColor="#55DEB0"/>
        </linearGradient>
        <linearGradient id="GAINS__d" x1="11.267" x2="9.771" y1="7.941" y2="11.743" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2A687F"/>
            <stop offset="1" stopColor="#6CF7B6"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconGains.displayName = 'Gains';

export default IconGains;
