
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAgix = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M11.195 4.774c-.648.54-1.766 1.762-1.766 3.137 0 1.71 2.048 2.872 3.115 3.493l.343.206c.892.549 2.97 1.92 2.97 4.114 0 2.083-1.8 3.459-2.751 3.965a.235.235 0 0 1-.266-.039.21.21 0 0 1-.045-.247.2.2 0 0 1 .054-.07c.685-.6 1.723-1.894 1.723-3.193 0-1.787-1.535-2.743-2.722-3.429l-.141-.085c-1.479-.853-3.566-2.057-3.566-4.445 0-1.83 1.74-3.291 2.743-3.857a.284.284 0 0 1 .369.077c.085.12.055.279-.06.373"/><path fill="currentColor" d="M14.572 7.843c0-1.397-1.106-2.593-1.74-3.112-.095-.077-.12-.214-.043-.308a.24.24 0 0 1 .3-.064c.986.54 2.67 1.92 2.67 3.775 0 1.093-.472 1.98-1.106 2.688-.206.12-.441.158-.686.02-.467-.26-.24-.796-.013-1.212a3 3 0 0 0 .618-1.791zm-4.543 6.574h.026c-.381.488-.6 1.083-.626 1.702 0 1.303 1.084 2.622 1.744 3.223.09.085.099.222.009.304a.24.24 0 0 1-.283.03l-.013-.004c-.686-.386-2.64-1.48-2.64-3.828 0-.964.411-1.774.951-2.43.257-.223.557-.368.832-.214.514.296.21.917 0 1.213z"/>
        </>
      ) : (
        <>
          <path fill="#311879" d="M11.194 4.774c-.647.54-1.766 1.762-1.766 3.137 0 1.71 2.049 2.872 3.116 3.493l.343.206c.891.549 2.97 1.92 2.97 4.114 0 2.083-1.8 3.459-2.752 3.965a.235.235 0 0 1-.265-.039.215.215 0 0 1 .008-.317c.686-.6 1.723-1.894 1.723-3.193 0-1.787-1.534-2.743-2.721-3.429l-.142-.085c-1.478-.853-3.565-2.057-3.565-4.445 0-1.83 1.74-3.291 2.742-3.857a.284.284 0 0 1 .369.077c.086.12.056.279-.06.373"/><path fill="#311879" d="M14.571 7.843c0-1.397-1.106-2.593-1.74-3.112-.094-.077-.12-.214-.043-.308a.24.24 0 0 1 .3-.064c.986.54 2.67 1.92 2.67 3.775 0 1.093-.471 1.98-1.105 2.688-.206.12-.442.158-.686.02-.467-.26-.24-.796-.013-1.212a3 3 0 0 0 .617-1.791zm-4.543 6.574h.026c-.38.488-.6 1.083-.626 1.702 0 1.303 1.085 2.622 1.745 3.223.09.085.098.222.008.304a.24.24 0 0 1-.283.03l-.013-.004c-.685-.386-2.64-1.48-2.64-3.828 0-.964.412-1.774.952-2.43.257-.223.557-.368.831-.214.515.296.21.917 0 1.213z"/>
        </>
      )}
    </BaseIcon>
));

IconAgix.displayName = 'Agix';
IconAgix.variants = 'brandedmono';

export default IconAgix;
