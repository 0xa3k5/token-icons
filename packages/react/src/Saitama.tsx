
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSaitama = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M7.8 4.714a8.3 8.3 0 0 0 0 5.726l.026.034-1.397 1.2 1.885 1.23L6 14.966l3.133 1.886.66 2.862 2.143-1.911 2.228 1.911.673-2.862L18 14.966l-2.31-2.044 1.881-1.248-1.405-1.191.038-.043c.386-.904.926-3.321 0-5.726l-2.863 3.39a2.5 2.5 0 0 0-1.354-.39c-.6 0-1.088.206-1.35.365zm-.347 10.067 1.581-1.41.943.613.42 1.445h3.112l.454-1.363 1.114-.742-.146.129 1.616 1.329-2.46 1.5-.39 1.868-1.766-1.418-1.641 1.414-.497-1.869-2.34-1.5zM14 12.994l2.13-1.414-2.481-2.13-.343 1.543zM12.926 8.88a2 2 0 0 0-.939-.253 1.9 1.9 0 0 0-.994.292l.523 2.19-.832 2.511.36.952h.527v-1.286h.858v1.286h.445l.339-.952-.81-2.511zm-2.645.617L7.83 11.58l2.16 1.376.651-1.967zM10 8.606 8.3 6.6c-.111.334-.171.943-.158 1.543.013.626.15 1.273.386 1.723zm3.977.03 1.483 1.251a3.94 3.94 0 0 0 .398-1.77 8 8 0 0 0-.128-1.328L15.7 6.6z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#SAITAMA__a)" d="M7.8 4.714a8.3 8.3 0 0 0 0 5.726l.026.034-1.397 1.2 1.885 1.23L6 14.966l3.133 1.886.66 2.862 2.143-1.911 2.228 1.911.673-2.862L18 14.966l-2.31-2.044 1.881-1.248-1.405-1.191.038-.043c.386-.904.926-3.321 0-5.726l-2.863 3.39a2.5 2.5 0 0 0-1.354-.39c-.6 0-1.088.206-1.35.365zm-.347 10.067 1.581-1.41.943.613.42 1.445h3.112l.454-1.363 1.114-.742-.146.129 1.616 1.329-2.46 1.5-.39 1.868-1.766-1.418-1.641 1.414-.497-1.869-2.34-1.5zM14 12.994l2.13-1.414-2.481-2.13-.343 1.543zM12.926 8.88a2 2 0 0 0-.939-.253 1.9 1.9 0 0 0-.994.292l.523 2.19-.832 2.511.36.952h.527v-1.286h.858v1.286h.445l.339-.952-.81-2.511zm-2.645.617L7.83 11.58l2.16 1.376.651-1.967zM10 8.606 8.3 6.6c-.111.334-.171.943-.158 1.543.013.626.15 1.273.386 1.723zm3.977.03 1.483 1.251a3.94 3.94 0 0 0 .398-1.77 8 8 0 0 0-.128-1.328L15.7 6.6z" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="SAITAMA__a" x1="6" x2="17.304" y1="12.214" y2="12.214" gradientUnits="userSpaceOnUse">
            <stop offset=".27" stopColor="#2F239F"/>
            <stop offset="1" stopColor="#81BBE3"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconSaitama.displayName = 'Saitama';

export default IconSaitama;
