
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGzil = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M9.96 6h3.63l.09.009c.9.017 1.8.064 2.687.227.502.09.986.227 1.44.458A2.32 2.32 0 0 1 19.03 8.05c.184.544.257 1.101.257 1.671v.137h-3l-.013-.291a1.2 1.2 0 0 0-.039-.215c-.227-.848-1.594-.771-2.275-.78-1.346 0-2.696 0-4.042.009-.771.009-1.525.18-1.911.917a2.9 2.9 0 0 0-.292 1.217h3.815l-.107.065c-1.235.758-2.41 1.594-3.643 2.348-.052.03-.073.064-.065.12.035.292.052.583.103.87.056.339.146.634.429.857.205.159.45.257.707.309a7 7 0 0 0 1.466.146h2.751c.626 0 1.277-.022 1.899-.12.587-.099 1.2-.352 1.217-1.042.017-.368 0-.608 0-.981H12l.3-.176c1.247-.767 2.687-1.633 3.939-2.396h3.047v.163c0 .634-.013 1.269-.013 1.907 0 .545-.004 1.089-.06 1.637-.043.455-.111.909-.257 1.342a2.66 2.66 0 0 1-1.316 1.59 4.5 4.5 0 0 1-1.307.428 13.6 13.6 0 0 1-2.366.21c-1.058.009-2.117.005-3.171.009-.746 0-1.492 0-2.233-.077a8 8 0 0 1-1.414-.249 2.89 2.89 0 0 1-2.169-2.113 7.2 7.2 0 0 1-.236-1.478l-.03-.403V10.8l.009-.064c.03-.399.051-.793.094-1.187.043-.429.124-.845.266-1.252.257-.716.694-1.281 1.38-1.654.484-.257 1.003-.394 1.543-.484a14 14 0 0 1 1.843-.155c.043.005.077 0 .111-.004"/>
    <path fill="currentColor" d="m7.384 13.029.099-.382c.009-.043.03-.068.073-.09.737-.343 1.474-.686 2.203-1.041.904-.446 1.804-.909 2.7-1.363l.381-.189a.1.1 0 0 1 .064-.013l-5.318 3.27c-.069-.055-.129-.111-.202-.162v-.035zm2.859 1.328c1.851-1.148 4.144-2.494 6-3.643.09.107.021.292.107.403.026.03.021.086.026.129.008.073.034.154.004.205-.03.048-.116.069-.18.099-1.864.887-4.097 1.916-5.957 2.807"/>

        </>
      ) : (
        <>
          
    <path fill="url(#GZIL__a)" d="M9.96 6h3.63l.09.009c.9.017 1.8.064 2.687.227.501.09.985.227 1.44.458a2.32 2.32 0 0 1 1.221 1.355 5.2 5.2 0 0 1 .257 1.671v.137h-3l-.013-.291a1.2 1.2 0 0 0-.038-.215c-.227-.848-1.594-.771-2.276-.78-1.346 0-2.696 0-4.041.009-.772.009-1.526.18-1.912.917-.184.38-.283.795-.291 1.217h3.814l-.107.065c-1.234.758-2.409 1.594-3.643 2.348-.051.03-.073.064-.064.12.034.292.051.583.103.87.055.339.145.634.428.857.206.159.45.257.707.309a7 7 0 0 0 1.466.146h2.752c.625 0 1.277-.022 1.898-.12.587-.099 1.2-.352 1.217-1.042.017-.368 0-.608 0-.981H12l.3-.176c1.247-.767 2.687-1.633 3.938-2.396h3.047v.163c0 .634-.013 1.269-.013 1.907 0 .545-.004 1.089-.06 1.637-.042.455-.111.909-.257 1.342a2.66 2.66 0 0 1-1.315 1.59 4.5 4.5 0 0 1-1.308.428c-.78.146-1.568.202-2.365.21-1.059.009-2.117.005-3.172.009-.745 0-1.491 0-2.233-.077a8 8 0 0 1-1.414-.249 2.89 2.89 0 0 1-2.168-2.113 7.2 7.2 0 0 1-.236-1.478l-.03-.403V10.8l.008-.064c.03-.399.052-.793.095-1.187.043-.429.124-.845.265-1.252.258-.716.695-1.281 1.38-1.654.485-.257 1.003-.394 1.543-.484a14 14 0 0 1 1.843-.155c.043.005.077 0 .112-.004"/>
    <path fill="url(#GZIL__b)" d="m7.384 13.029.098-.382c.009-.043.03-.068.073-.09.737-.343 1.475-.686 2.203-1.041.904-.446 1.804-.909 2.7-1.363l.382-.189a.1.1 0 0 1 .064-.013l-5.319 3.27c-.068-.055-.128-.111-.201-.162v-.035z"/>
    <path fill="url(#GZIL__c)" d="M10.242 14.357c1.852-1.148 4.145-2.494 6-3.643.09.107.022.292.108.403.025.03.021.086.025.129.009.073.035.154.005.205-.03.048-.116.069-.18.099-1.865.887-4.098 1.916-5.958 2.807"/>
    <defs>
        <linearGradient id="GZIL__a" x1="12.008" x2="12.008" y1="17.854" y2="5.957" gradientUnits="userSpaceOnUse">
            <stop stopColor="#009C8B"/>
            <stop offset=".5" stopColor="#3F2D87"/>
            <stop offset="1" stopColor="#AA2B87"/>
        </linearGradient>
        <linearGradient id="GZIL__b" x1="12" x2="12" y1="34.995" y2="-8.649" gradientUnits="userSpaceOnUse">
            <stop stopColor="#009C8B"/>
            <stop offset=".5" stopColor="#3F2D87"/>
            <stop offset="1" stopColor="#AA2B87"/>
        </linearGradient>
        <linearGradient id="GZIL__c" x1="13.462" x2="13.462" y1="17.854" y2="5.957" gradientUnits="userSpaceOnUse">
            <stop stopColor="#009C8B"/>
            <stop offset=".5" stopColor="#3F2D87"/>
            <stop offset="1" stopColor="#AA2B87"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconGzil.displayName = 'Gzil';

export default IconGzil;
