
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBdp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M3 13.185V10.52c0-.188.205-.377.429-.377.223 0 .428.206.428.377v2.665c0 .168-.14.386-.428.386-.3 0-.429-.176-.429-.386m8.143-.01v-2.67c0-.187.204-.362.428-.362s.429.191.429.362v2.67a.41.41 0 0 1-.428.395c-.289 0-.43-.185-.43-.395m8.143.01v-2.69c0-.188.204-.352.428-.352s.429.18.429.352v2.69c0 .169-.141.385-.429.385-.287 0-.428-.174-.428-.384M3.775 8.004c-.643.036-.784.451-.775.655 0 .618.583.654.875.595 1.228.035 2.357 1.374 2.768 2.038.126-.274.483-.758.645-.967C5.983 8.45 4.578 7.96 3.775 8.003m15.593 7.709c.643-.037.784-.456.774-.662 0-.624-.582-.66-.874-.6-1.228-.036-2.357-1.388-2.768-2.059-.126.277-.483.767-.645.977 1.305 1.893 2.71 2.389 3.513 2.344"/><path fill="currentColor" d="M3.537 14.477c-.336.077-.53.363-.53.596 0 .633.645.665.894.633 1.688 0 3.16-1.996 4.285-3.729.95-1.465 1.681-2.742 3.413-2.742 1.627 0 2.597 1.331 3.028 2.112l.675-1.075C14.78 9.497 13.307 8 11.6 8S8.795 9.07 8.261 9.877c-1.494 2.26-2.403 3.699-3.247 4.235-.784.5-1.058.27-1.477.365"/><path fill="currentColor" d="M19.614 9.237c.336-.077.529-.362.529-.595 0-.634-.645-.665-.894-.634-1.688 0-3.16 1.997-4.285 3.73-.95 1.464-1.68 2.742-3.413 2.742-1.626 0-2.596-1.332-3.028-2.113l-.675 1.076c.523.774 1.996 2.271 3.703 2.271 1.708 0 2.804-1.07 3.339-1.877 1.494-2.26 2.403-3.698 3.246-4.235.785-.5 1.059-.269 1.478-.365"/>
        </>
      ) : (
        <>
          <path fill="url(#BDP__a)" d="M3.429 13.328v-2.665c0-.188.205-.377.428-.377.224 0 .429.206.429.377v2.665c0 .168-.141.386-.429.386-.299 0-.428-.176-.428-.386m8.143-.01v-2.67c0-.187.204-.362.428-.362s.429.191.429.362v2.67a.41.41 0 0 1-.429.395c-.288 0-.428-.185-.428-.395m8.143.01v-2.69c0-.188.204-.352.428-.352s.429.18.429.352v2.69c0 .169-.141.385-.429.385s-.428-.174-.428-.384M4.204 8.147c-.643.035-.785.451-.775.654 0 .62.583.655.875.596 1.228.035 2.357 1.374 2.768 2.038.126-.274.483-.759.645-.967-1.305-1.875-2.71-2.366-3.513-2.322m15.593 7.709c.643-.037.784-.456.774-.662 0-.624-.583-.66-.875-.6-1.227-.037-2.357-1.388-2.767-2.059-.127.276-.483.766-.646.977 1.305 1.893 2.71 2.389 3.514 2.344"/><path fill="url(#BDP__b)" d="M3.965 14.62c-.335.077-.529.363-.529.596 0 .633.645.665.894.633 1.688 0 3.16-1.997 4.285-3.729.95-1.465 1.68-2.742 3.413-2.742 1.627 0 2.596 1.331 3.028 2.112l.675-1.076c-.523-.774-1.995-2.271-3.703-2.271s-2.804 1.07-3.339 1.877c-1.493 2.26-2.403 3.699-3.246 4.235-.784.5-1.059.269-1.478.365"/><path fill="url(#BDP__c)" d="M20.043 9.38c.335-.077.529-.362.529-.596 0-.633-.645-.665-.894-.633-1.688 0-3.16 1.997-4.285 3.73-.95 1.464-1.68 2.742-3.413 2.742-1.626 0-2.596-1.332-3.028-2.113l-.675 1.076c.523.774 1.996 2.271 3.703 2.271s2.804-1.07 3.338-1.877c1.494-2.26 2.404-3.699 3.247-4.235.784-.5 1.058-.269 1.478-.365"/><defs><linearGradient id="BDP__a" x1="6.179" x2="9.382" y1="9.311" y2="17.853" gradientUnits="userSpaceOnUse"><stop stopColor="#746EF3"/><stop offset="1" stopColor="#C346D5"/></linearGradient><linearGradient id="BDP__b" x1="6.179" x2="9.382" y1="9.311" y2="17.853" gradientUnits="userSpaceOnUse"><stop stopColor="#746EF3"/><stop offset="1" stopColor="#C346D5"/></linearGradient><linearGradient id="BDP__c" x1="6.179" x2="9.382" y1="9.311" y2="17.853" gradientUnits="userSpaceOnUse"><stop stopColor="#746EF3"/><stop offset="1" stopColor="#C346D5"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconBdp.displayName = 'Bdp';
IconBdp.variants = 'brandedmono';

export default IconBdp;
