
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconWnk = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 15.857a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.571"/>
    <path fill="currentColor" d="M15.24 16.535c-.506-.292-1.14-.129-1.637.175a2.7 2.7 0 0 1-1.419.399 2.59 2.59 0 0 1-2.64-2.537 2.59 2.59 0 0 1 2.64-2.537 2.7 2.7 0 0 1 1.427.402c.527.33 1.222.493 1.732.142.501-.343.634-1.046.18-1.457a4.98 4.98 0 0 0-3.343-1.265c-2.696 0-4.894 2.109-4.894 4.715s2.194 4.714 4.898 4.714c1.273 0 2.43-.467 3.3-1.234.493-.429.322-1.187-.244-1.517"/>
    <path fill="currentColor" d="M18.643 8.015c.287-.275.287-.72-.022-.973a10.53 10.53 0 0 0-6.664-2.327 10.54 10.54 0 0 0-6.579 2.258.638.638 0 0 0-.034.973c.292.283.771.287 1.097.039a9 9 0 0 1 5.516-1.86c2.13 0 4.08.72 5.589 1.915.32.257.8.257 1.092-.025zM16.8 9.775c.291-.273.291-.715-.022-.959a7.8 7.8 0 0 0-4.817-1.633c-1.8 0-3.458.592-4.753 1.582-.317.24-.321.685-.038.96.291.287.771.287 1.105.042a6.26 6.26 0 0 1 3.686-1.174c1.41 0 2.709.454 3.733 1.217.334.245.814.249 1.11-.034zm-2.096 2.294c.283-.275.287-.712-.034-.939a4.7 4.7 0 0 0-2.713-.844c-.999 0-1.92.3-2.67.814-.326.227-.326.665-.043.939.292.287.78.278 1.144.068a3.15 3.15 0 0 1 3.168.018c.36.214.848.227 1.144-.056z"/>

        </>
      ) : (
        <>
          
    <path fill="#fff" d="M12 15.857a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.571"/>
    <path fill="#fff" d="M15.24 16.535c-.506-.292-1.14-.129-1.637.175a2.7 2.7 0 0 1-1.419.399 2.59 2.59 0 0 1-2.64-2.537 2.59 2.59 0 0 1 2.64-2.537 2.7 2.7 0 0 1 1.427.402c.527.33 1.222.493 1.732.142.501-.343.634-1.046.18-1.457a4.98 4.98 0 0 0-3.343-1.265c-2.696 0-4.894 2.109-4.894 4.715s2.194 4.714 4.898 4.714c1.273 0 2.43-.467 3.3-1.234.493-.429.322-1.187-.244-1.517"/>
    <path fill="#E5B909" d="M18.643 8.015c.287-.275.287-.72-.022-.973a10.53 10.53 0 0 0-6.664-2.327 10.54 10.54 0 0 0-6.579 2.258.638.638 0 0 0-.034.973c.292.283.771.287 1.097.039a9 9 0 0 1 5.516-1.86c2.13 0 4.08.72 5.589 1.915.32.257.8.257 1.092-.025zM16.8 9.775c.291-.273.291-.715-.022-.959a7.8 7.8 0 0 0-4.817-1.633c-1.8 0-3.458.592-4.753 1.582-.317.24-.321.685-.038.96.291.287.771.287 1.105.042a6.26 6.26 0 0 1 3.686-1.174c1.41 0 2.709.454 3.733 1.217.334.245.814.249 1.11-.034zm-2.096 2.294c.283-.275.287-.712-.034-.939a4.7 4.7 0 0 0-2.713-.844c-.999 0-1.92.3-2.67.814-.326.227-.326.665-.043.939.292.287.78.278 1.144.068a3.15 3.15 0 0 1 3.168.018c.36.214.848.227 1.144-.056z"/>

        </>
      )}
    </BaseIcon>
));

IconWnk.displayName = 'Wnk';

export default IconWnk;