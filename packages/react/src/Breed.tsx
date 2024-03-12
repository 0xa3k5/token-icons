
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBreed = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M14.777 8.143h-3.205l-.857-.857h4.062c2.486 0 4.509 2.25 4.509 4.714s-2.019 4.714-4.509 4.714H10.5l1.072-.857h3.205c1.959 0 3.652-1.92 3.652-3.857s-1.693-3.857-3.652-3.857"/><path fill="currentColor" d="M14.683 10.286h-1.826v-.857h1.826A2.515 2.515 0 0 1 17.143 12c0 1.419-1.101 2.572-2.46 2.572h-1.826v-.858h1.826c.874 0 1.603-.801 1.603-1.714s-.729-1.714-1.603-1.714"/><path fill="currentColor" d="M5.987 7.762c0-.262-.154-.476-.415-.476-.258 0-.429.214-.429.476v7.285c0 1.003.81 1.667 1.804 1.667h3.973a2.615 2.615 0 0 0 1.312-4.705 2.6 2.6 0 0 0 1.054-2.152c0-1.285-.9-2.408-2.164-2.571H8.4a1.52 1.52 0 0 0-1.543 1.5c0 .84.592 1.5 1.427 1.5h2.388c.257 0 .471-.167.471-.429 0-.3-.214-.428-.471-.428H8.284c-.312 0-.57-.326-.57-.643s.37-.643.686-.643h2.743c.793.124 1.286.913 1.286 1.714 0 .875-.763 1.603-1.586 1.715H8.37a1.52 1.52 0 0 0-1.513 1.52 1.483 1.483 0 0 0 1.513 1.48h2.302c.257 0 .471-.172.471-.43 0-.265-.214-.428-.471-.428H8.284c-.312 0-.57-.325-.57-.643 0-.317.258-.642.57-.642.772 0 1.813.008 2.59 0h.158c.793.124 1.397.912 1.397 1.714 0 .874-.763 1.603-1.586 1.714H6.85a.86.86 0 0 1-.857-.865V7.757zM14.572 12a.428.428 0 1 1-.857 0 .428.428 0 0 1 .857 0"/>
        </>
      ) : (
        <>
          <path fill="url(#BREED__a)" d="M14.777 8.143H11.57l-.857-.857h4.063c2.486 0 4.508 2.25 4.508 4.714s-2.018 4.714-4.508 4.714H10.5l1.071-.857h3.206c1.958 0 3.651-1.92 3.651-3.857s-1.693-3.857-3.651-3.857"/><path fill="url(#BREED__b)" d="M14.683 10.286h-1.826v-.857h1.826A2.516 2.516 0 0 1 17.143 12c0 1.419-1.102 2.572-2.46 2.572h-1.826v-.858h1.826c.874 0 1.602-.801 1.602-1.714s-.728-1.714-1.602-1.714"/><path fill="url(#BREED__c)" d="M5.987 7.762c0-.262-.154-.476-.416-.476-.257 0-.428.214-.428.476v7.285c0 1.003.81 1.667 1.804 1.667h3.973a2.614 2.614 0 0 0 1.311-4.705 2.6 2.6 0 0 0 1.054-2.152c0-1.285-.9-2.408-2.164-2.571H8.4a1.52 1.52 0 0 0-1.543 1.5c0 .84.591 1.5 1.427 1.5h2.387c.257 0 .472-.167.472-.429 0-.3-.215-.428-.472-.428H8.284c-.313 0-.57-.326-.57-.643s.369-.643.686-.643h2.743c.792.124 1.285.913 1.285 1.714 0 .875-.763 1.603-1.585 1.715H8.37a1.52 1.52 0 0 0-1.513 1.52 1.483 1.483 0 0 0 1.513 1.48h2.301c.257 0 .472-.172.472-.43 0-.265-.215-.428-.472-.428H8.284c-.313 0-.57-.325-.57-.643 0-.317.257-.642.57-.642.771 0 1.813.008 2.589 0h.158c.793.124 1.397.912 1.397 1.714 0 .874-.763 1.603-1.585 1.714H6.848a.86.86 0 0 1-.857-.865V7.757z"/><path fill="url(#BREED__d)" d="M14.571 12a.428.428 0 1 1-.857 0 .428.428 0 0 1 .857 0"/><defs><linearGradient id="BREED__a" x1="12.386" x2="12.386" y1="7.286" y2="16.714" gradientUnits="userSpaceOnUse"><stop stopColor="#0AE0BE"/><stop offset=".55" stopColor="#7C75DC"/><stop offset="1" stopColor="#E90DF5"/></linearGradient><linearGradient id="BREED__b" x1="3.856" x2="17.784" y1="12" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#0AE0BE"/><stop offset=".55" stopColor="#7C75DC"/><stop offset="1" stopColor="#E90DF5"/></linearGradient><linearGradient id="BREED__c" x1="17.779" x2="12.205" y1="7.873" y2="19.509" gradientUnits="userSpaceOnUse"><stop stopColor="#EC0AF8"/><stop offset=".31" stopColor="#9360E8"/><stop offset=".67" stopColor="#6589D9"/><stop offset="1" stopColor="#10DDBC"/></linearGradient><linearGradient id="BREED__d" x1="13.628" x2="14.567" y1="12" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#0AE0BE"/><stop offset=".55" stopColor="#7C75DC"/><stop offset="1" stopColor="#E90DF5"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconBreed.displayName = 'Breed';
IconBreed.variants = 'brandedmono';

export default IconBreed;
