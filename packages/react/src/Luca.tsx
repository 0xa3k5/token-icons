
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLuca = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M15.429 6.429a.857.857 0 1 0-.742-1.286h-3.973V6h3.973a.85.85 0 0 0 .742.429m0 3.428a.857.857 0 1 0-.742-1.285h-3.973v.857h3.973a.85.85 0 0 0 .742.428m1.714 9.429a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715"/>
    <path fill="currentColor" d="M17.571 8.143a.857.857 0 1 0-.741-1.286h-6.116v.857h6.116a.85.85 0 0 0 .741.429"/>
    <path fill="currentColor" d="M9.566 5.143c-1.02 0-1.852.673-1.852 1.671C6.823 6.814 6 7.66 6 8.53v6.985c0 .9.746 1.629 1.663 1.629 0 .973.806 1.714 1.8 1.714h7.187c.133.193.24 0 .493 0 .407 0 .857-.008.857-.407s-.45-.45-.857-.45c-.274 0-.394-.214-.523 0H9.463c-.562 0-1.016-.308-1.016-.857H15V14.57h-4.714V5.143zM9.429 6v8.572H8.57V6.814c0-.497.348-.814.858-.814M7.714 7.714c-.458 0-.857.369-.857.815v7.123c.03.402.343.634.759.634h6.527v-.857H7.714z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#FACA8C" d="M15.429 6.429a.857.857 0 1 0-.742-1.286h-3.973V6h3.973a.85.85 0 0 0 .742.429m0 3.428a.857.857 0 1 0-.742-1.285h-3.973v.857h3.973a.85.85 0 0 0 .742.428m1.714 9.429a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715"/>
    <path fill="#FACA8C" d="M17.571 8.143a.857.857 0 1 0-.741-1.286h-6.116v.857h6.116a.85.85 0 0 0 .741.429"/>
    <path fill="#FACA8C" d="M9.566 5.143c-1.02 0-1.852.673-1.852 1.671C6.823 6.814 6 7.66 6 8.53v6.985c0 .9.746 1.629 1.663 1.629 0 .973.806 1.714 1.8 1.714h7.187c.133.193.24 0 .493 0 .407 0 .857-.008.857-.407s-.45-.45-.857-.45c-.274 0-.394-.214-.523 0H9.463c-.562 0-1.016-.308-1.016-.857H15V14.57h-4.714V5.143zM9.429 6v8.572H8.57V6.814c0-.497.348-.814.858-.814M7.714 7.714c-.458 0-.857.369-.857.815v7.123c.03.402.343.634.759.634h6.527v-.857H7.714z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconLuca.displayName = 'Luca';

export default IconLuca;
