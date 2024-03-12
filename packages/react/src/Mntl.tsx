
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMntl = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M15 16.714a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"/><path fill="currentColor" d="M19.714 8.4v7.2a1.556 1.556 0 0 1-1.397 1.534c-.951.09-1.594-.63-1.603-1.534v-1.174c0-.326-.188-.643-.386-.9a1.543 1.543 0 0 0-2.485.017l-.802 1.123-1.29 1.812a1.543 1.543 0 0 1-2.494-1.804l5.134-7.2a1.54 1.54 0 0 1 1.217-.617h2.568A1.543 1.543 0 0 1 19.714 8.4M5.829 6.857h5.142a1.543 1.543 0 0 1 1.256 2.439l-5.143 7.2a1.543 1.543 0 0 1-2.798-.892V8.4a1.543 1.543 0 0 1 1.543-1.543m.814 3.857a1.072 1.072 0 1 0 0-2.143 1.072 1.072 0 0 0 0 2.143"/>
        </>
      ) : (
        <>
          <path fill="#0D0A03" d="M15 16.714a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"/><path fill="#FCBE33" d="M19.715 8.4v7.2a1.556 1.556 0 0 1-1.397 1.534c-.952.09-1.595-.63-1.603-1.534v-1.174c0-.326-.189-.643-.386-.9a1.543 1.543 0 0 0-2.486.017l-.801 1.123-1.29 1.812a1.543 1.543 0 0 1-2.494-1.804l5.134-7.2a1.54 1.54 0 0 1 1.217-.617h2.567A1.543 1.543 0 0 1 19.715 8.4"/><path fill="#0D0A03" d="M5.829 6.857h5.143a1.543 1.543 0 0 1 1.256 2.439l-5.143 7.2a1.543 1.543 0 0 1-2.799-.892V8.4A1.543 1.543 0 0 1 5.83 6.857m.814 3.857a1.072 1.072 0 1 0 0-2.143 1.072 1.072 0 0 0 0 2.143"/>
        </>
      )}
    </BaseIcon>
));

IconMntl.displayName = 'Mntl';
IconMntl.variants = 'brandedmono';

export default IconMntl;
