
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconYgg = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="url(#YGG__a)" d="m16.864 8.383-4.646-2.186-4.937 2.186-.309.548.206 1.929.527 3.017 1.616 2.73 2.691 1.8 2.079-1.299 1.787-2.434.986-3.497z"/>
    <path fill="url(#YGG__b)" d="m12.261 11.07-1.5-3.086H7.834c.844 1.415 2.537 4.256 2.55 4.265.013.012.004 1.97 0 2.944l-.3.664h3.377l-.604-.836v-2.58l2.185-4.388H12.78l.407.925z"/>
    <path fill="url(#YGG__c)" d="M11.974 20.143C5.892 17.82 5.305 10.586 5.648 7.286l6.39-3 6.343 3c.514 8.301-3.536 11.957-6.407 12.857m0-.789c-5.473-2.091-6-8.605-5.696-11.575l5.756-2.7 5.713 2.7c.462 7.474-3.185 10.76-5.773 11.57zM6.8 8.13c-.279 2.734.201 8.734 5.177 10.658 2.353-.75 5.666-3.775 5.246-10.658l-5.19-2.486L6.805 8.13zm.66.51c-.154 1.526-.043 4.217 1.191 6.403l.686-.626.514 1.174.433-.501v-2.661a119 119 0 0 0-1.573-2.713 43 43 0 0 1-.48-.827 2.3 2.3 0 0 0-.394-.43zm4.517 9.33a6.3 6.3 0 0 1-1.804-1.072v-.407l.214.223h3.652c-.686.643-1.415 1.046-2.058 1.256zm4.582-9.33c.175 2.884-.395 4.993-1.265 6.484l-.827-.163-.454 1.097-.3-.428v-2.71l2.057-4.18-.412-.678zm-4.53-2.182.15.073L12 6.49l-.065.017.095-.043zm2.605 1.256L12.75 6.81l-.75.557c-.162-.163-.51-.411-.72-.548l-1.88.895h1.632l.814.772.574 1.255c.15-.265.386-.758.408-.96.017-.158-.266-.441-.493-.634a.25.25 0 0 1-.073-.291.25.25 0 0 1 .219-.142zm-6.595.429h2.811l.728.574.888 1.894.745-1.577c.043-.231.047-.707-.257-.891h2.053l.437.574-2.16 4.157v2.915l.395.497h-3.155l-.368-.339.557-.626v-3L8.712 8.837a1.65 1.65 0 0 0-.672-.694" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#9DE6E0" d="M12 6.93a.441.441 0 1 0 0-.883.441.441 0 0 0 0 .883m2.661 9.471a.441.441 0 1 0 0-.883.441.441 0 0 0 0 .883m-5.323 0a.441.441 0 1 0 0-.883.441.441 0 0 0 0 .883"/>
    <defs>
        <linearGradient id="YGG__a" x1="18.425" x2="6.529" y1="11.304" y2="11.304" gradientUnits="userSpaceOnUse">
            <stop stopColor="#012274"/>
            <stop offset=".51" stopColor="#0035B0"/>
            <stop offset="1" stopColor="#022372"/>
        </linearGradient>
        <linearGradient id="YGG__b" x1="11.998" x2="11.998" y1="4.286" y2="20.307" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5183E2"/>
            <stop offset="1" stopColor="#1150B9"/>
        </linearGradient>
        <linearGradient id="YGG__c" x1="17.057" x2="7.491" y1="10.161" y2="13.076" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B29F59"/>
            <stop offset=".54" stopColor="#FFFFB0"/>
            <stop offset="1" stopColor="#A7924D"/>
        </linearGradient>
    </defs>

    </BaseIcon>
));

IconYgg.displayName = 'Ygg';

export default IconYgg;
