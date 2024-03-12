
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDrep = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#014A7F" d="m5.143 18 1.89-8.143h2.074l.48-2.143h2.074l.39-1.675c6.086-.446 7.042 3.342 6.763 5.292C17.918 16.534 13.401 18 10.8 18z"/><path fill="#014A7F" d="M17.807 10.02c-.686-2.957-3.647-3.33-5.044-3.163l-.219.857c4.221.09 4.444 3.15 3.999 4.616-1.003 2.927-4.226 3.956-5.512 3.956H7.603L8.9 10.714h-1.2l-1.448 6.429h4.032c2.315 0 3.592-.6 4.243-.969 1.419-.805 3.969-3.193 3.283-6.154z"/><path fill="#014A7F" d="M13.084 8.571h-2.841l-.279 1.286h2.91c.583 0 1.449.304 1.371 1.359-.085 1.127-1.217 1.71-1.774 1.86l.609 1.868c.913-.351 2.695-1.671 2.773-3.621.077-1.95-1.912-2.752-2.773-2.752z"/><path fill="#014A7F" d="m8.674 15.429 1.123-4.715h1.984c.549 0 1.492-.055 1.432.643-.065.759-.982.904-1.432.883h-1.586l-.192.823h1.414l.63 2.237c-.202.064-.506.129-.63.129z"/>
    </BaseIcon>
));

IconDrep.displayName = 'Drep';
IconDrep.variants = 'branded';

export default IconDrep;
