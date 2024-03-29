
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconStars = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M9.231 9.724a.22.22 0 0 0-.235-.287l-4.093.583a.22.22 0 0 0-.129.369l2.915 3.008a.215.215 0 0 0 .364-.085zM7.744 18.15a.214.214 0 0 0 .305.257l3.827-1.817a.22.22 0 0 1 .18 0l3.998 1.813a.219.219 0 0 0 .296-.27c-.754-2.271-1.436-4.517-2.164-6.784a.214.214 0 0 0-.386-.043l-1.616 2.897a.22.22 0 0 1-.193.111h-.068a.21.21 0 0 1-.189-.115l-1.568-2.885a.22.22 0 0 0-.189-.115h-.021a.215.215 0 0 0-.21.154 197 197 0 0 0-2.002 6.797m8.173-4.903a.215.215 0 0 0 .36.086l2.944-2.944a.22.22 0 0 0-.124-.373l-4.071-.57a.218.218 0 0 0-.24.283z"/>
    <path fill="currentColor" d="M13.637 9.373a.26.26 0 0 0 0-.202l-.021-.051-1.445-4.68a.214.214 0 0 0-.415 0L10.34 9.12l-.021.069a.23.23 0 0 0 .009.162l1.401 3.232a.23.23 0 0 0 .197.128h.052a.22.22 0 0 0 .197-.128l1.457-3.21z"/>

        </>
      ) : (
        <>
          
    <path fill="#E2BB5E" d="M9.231 9.724a.22.22 0 0 0-.235-.287l-4.093.583a.22.22 0 0 0-.129.369l2.915 3.008a.215.215 0 0 0 .364-.085z"/>
    <path fill="url(#STARS__a)" d="M7.744 18.15a.214.214 0 0 0 .305.257l3.827-1.817a.22.22 0 0 1 .18 0l3.998 1.813a.219.219 0 0 0 .296-.27c-.754-2.271-1.436-4.517-2.164-6.784a.214.214 0 0 0-.386-.043l-1.616 2.897a.22.22 0 0 1-.193.111h-.068a.21.21 0 0 1-.189-.115l-1.568-2.885a.22.22 0 0 0-.189-.115h-.021a.215.215 0 0 0-.21.154 197 197 0 0 0-2.002 6.797"/>
    <path fill="#DBA527" d="M15.917 13.247a.215.215 0 0 0 .36.086l2.944-2.944a.22.22 0 0 0-.124-.373l-4.071-.57a.218.218 0 0 0-.24.283z"/>
    <path fill="url(#STARS__b)" d="M13.637 9.373a.26.26 0 0 0 0-.202l-.021-.051-1.445-4.68a.214.214 0 0 0-.415 0L10.34 9.12l-.021.069a.23.23 0 0 0 .009.162l1.401 3.232a.23.23 0 0 0 .197.128h.052a.22.22 0 0 0 .197-.128l1.457-3.21z"/>
    <defs>
        <linearGradient id="STARS__a" x1="-.386" x2="24.225" y1="2.844" y2="2.844" gradientUnits="userSpaceOnUse">
            <stop offset=".49" stopColor="#E2BB5E"/>
            <stop offset=".5" stopColor="#DBA527"/>
        </linearGradient>
        <linearGradient id="STARS__b" x1="4.715" x2="19.286" y1="10.466" y2="10.466" gradientUnits="userSpaceOnUse">
            <stop offset=".49" stopColor="#E2BB5E"/>
            <stop offset=".5" stopColor="#DBA527"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconStars.displayName = 'Stars';

export default IconStars;
