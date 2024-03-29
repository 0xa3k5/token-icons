
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOrai = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="#07ACEE" d="M11.143 4.764a7.29 7.29 0 0 0-6.378 6.379H6.06a6 6 0 0 1 5.082-5.082zm1.714 1.297V4.764a7.29 7.29 0 0 1 6.38 6.379h-1.298a6 6 0 0 0-5.082-5.082m0 11.878a6 6 0 0 0 5.082-5.082h1.297a7.29 7.29 0 0 1-6.379 6.38zm-6.796-5.082a6 6 0 0 0 5.082 5.082v1.297a7.29 7.29 0 0 1-6.378-6.379z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#1B70EF" d="M8.572 9.03c0-.254.202-.458.452-.458h5.952c.25 0 .453.204.453.457v5.942a.455.455 0 0 1-.453.458H9.024a.454.454 0 0 1-.452-.458z"/>
    <path fill="url(#ORAI__a)" d="M14.572 10.929a.214.214 0 0 1 .214-.215h.857a.214.214 0 0 1 0 .429h-.857a.215.215 0 0 1-.214-.214m0 1.071a.214.214 0 0 1 .214-.214h.857a.215.215 0 0 1 0 .428h-.857a.214.214 0 0 1-.214-.214m.643.857a.214.214 0 0 0 0 .429h.428a.214.214 0 0 0 0-.429z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#ORAI__b)" d="M9.429 10.929a.214.214 0 0 0-.214-.215h-.858a.214.214 0 0 0 0 .429h.858a.215.215 0 0 0 .214-.214m0 1.071a.214.214 0 0 0-.214-.214h-.858a.215.215 0 0 0 0 .428h.858A.214.214 0 0 0 9.429 12m-.643.857a.214.214 0 0 1 0 .429h-.429a.214.214 0 0 1 0-.429z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#ORAI__c)" d="M10.715 8.357a.214.214 0 0 1 .428 0v.857a.214.214 0 0 1-.429 0zm1.07 0a.214.214 0 0 1 .43 0v.429a.214.214 0 0 1-.43 0zm1.287-.214a.214.214 0 0 0-.215.214v.429a.214.214 0 1 0 .429 0v-.429a.214.214 0 0 0-.214-.214" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#ORAI__d)" d="M10.715 15.643a.214.214 0 1 0 .428 0v-.857a.214.214 0 1 0-.429 0zm1.07 0a.214.214 0 1 0 .43 0v-.429a.214.214 0 0 0-.43 0zm1.287.214a.214.214 0 0 1-.215-.214v-.429a.214.214 0 1 1 .429 0v.429a.214.214 0 0 1-.214.214" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#F0F3FA" d="M10.5 12a.857.857 0 1 1 1.714 0v.857H12v-.428h-1.286v.428H10.5zm.214.214H12V12a.643.643 0 1 0-1.286 0zm1.715-1.071H13.5v.214h-.428v1.286h.428v.214h-1.07v-.214h.428v-1.286h-.428z" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="ORAI__a" x1="4.765" x2="19.921" y1="12.034" y2="12.034" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9BD2FF"/>
            <stop offset="1" stopColor="#E4EFF8"/>
        </linearGradient>
        <linearGradient id="ORAI__b" x1="4.765" x2="15.985" y1="12" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E8F1F8"/>
            <stop offset="1" stopColor="#9BD2FF"/>
        </linearGradient>
        <linearGradient id="ORAI__c" x1="12" x2="12" y1="4.764" y2="19.236" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E6F0F8"/>
            <stop offset="1" stopColor="#9BD2FF"/>
        </linearGradient>
        <linearGradient id="ORAI__d" x1="12" x2="12" y1="9.579" y2="19.164" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9BD2FF"/>
            <stop offset="1" stopColor="#E6F0F8"/>
        </linearGradient>
    </defs>

    </BaseIcon>
));

IconOrai.displayName = 'Orai';

export default IconOrai;
