
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGyen = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M20.572 12c0 2.841-3.836 5.143-8.572 5.143S3.43 14.84 3.43 12c0-2.842 3.835-5.143 8.571-5.143 3.172 0 5.944 1.033 7.423 2.571h-3.501c-.944-.788-2.35-1.285-3.923-1.285-2.841 0-5.143 1.628-5.143 3.643S9.16 15.428 12 15.428c2.314 0 4.273-1.084 4.916-2.571h-4.929a.85.85 0 0 1-.844-.857c0-.472.377-.857.849-.857h8.46q.12.418.12.857"/>

        </>
      ) : (
        <>
          
    <path fill="#005BAC" d="M20.572 12c0 2.841-3.836 5.143-8.572 5.143S3.43 14.84 3.43 12c0-2.842 3.835-5.143 8.571-5.143 3.172 0 5.944 1.033 7.423 2.571h-3.501c-.944-.788-2.35-1.285-3.923-1.285-2.841 0-5.143 1.628-5.143 3.643S9.16 15.428 12 15.428c2.314 0 4.273-1.084 4.916-2.571h-4.929a.85.85 0 0 1-.844-.857c0-.472.377-.857.849-.857h8.46q.12.418.12.857"/>

        </>
      )}
    </BaseIcon>
));

IconGyen.displayName = 'Gyen';

export default IconGyen;
