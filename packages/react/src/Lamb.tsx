
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLamb = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M5.571 5.143h1.984v-.004c.043.008.168.09.258.334l1.17 3.051 1.602-3.214c.035-.056.142-.171.27-.171h1.929c.086.021.227.137.086.403-.142.27-.823 1.718-1.145 2.412l6.776-2.562c.12-.039.356-.048.356.227v1.894c0 .06-.06.197-.296.274-.231.072-2.1.78-3.055 1.142l-.052.02 3.283 1.645c.043.022.12.099.12.27v1.826c-.009.112-.103.3-.424.167-.322-.133-1.758-.814-2.435-1.135l2.563 6.762c.052.125.099.369-.128.369h-1.916c-.12 0-.232-.099-.33-.369l-1.17-3.055-1.607 3.252c-.022.056-.12.176-.322.176h-1.761c-.133-.013-.369-.111-.232-.368.129-.258.828-1.766 1.158-2.495l-6.746 2.563c-.116.052-.343.077-.343-.214a56 56 0 0 1 0-1.899c0-.064.064-.21.257-.27.153-.047 1.423-.528 2.423-.907L8.55 15l-3.287-1.624a.27.27 0 0 1-.125-.249c.013-.141.017-1.333.017-1.907-.004-.103.069-.266.378-.129.277.122 1.459.684 2.208 1.04l.264.126-2.554-6.78c-.043-.111-.077-.334.12-.334m4.843 5.743 2.109-.78.54.274.814 2.1-.27.549-2.066.814-.664-.343-.763-1.967z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#LAMB__a)" d="M5.571 5.143h1.984v-.004c.043.008.168.09.258.334l1.17 3.051 1.602-3.214c.035-.056.142-.171.27-.171h1.929c.086.021.227.137.086.403-.142.27-.823 1.718-1.145 2.412l6.776-2.562c.12-.039.356-.048.356.227v1.894c0 .06-.06.197-.296.274-.231.072-2.1.78-3.055 1.142l-.052.02 3.283 1.645c.043.022.12.099.12.27v1.826c-.009.112-.103.3-.424.167-.322-.133-1.758-.814-2.435-1.135l2.563 6.762c.052.125.099.369-.128.369h-1.916c-.12 0-.232-.099-.33-.369l-1.17-3.055-1.607 3.252c-.022.056-.12.176-.322.176h-1.761c-.133-.013-.369-.111-.232-.368.129-.258.828-1.766 1.158-2.495l-6.746 2.563c-.116.052-.343.077-.343-.214a56 56 0 0 1 0-1.899c0-.064.064-.21.257-.27.153-.047 1.423-.528 2.423-.907L8.55 15l-3.287-1.624a.27.27 0 0 1-.125-.249c.013-.141.017-1.333.017-1.907-.004-.103.069-.266.378-.129.277.122 1.459.684 2.208 1.04l.264.126-2.554-6.78c-.043-.111-.077-.334.12-.334m4.843 5.743 2.109-.78.54.274.814 2.1-.27.549-2.066.814-.664-.343-.763-1.967z" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="LAMB__a" x1="7.637" x2="16.409" y1="6.219" y2="17.295" gradientUnits="userSpaceOnUse">
            <stop stopColor="#58BFC3"/>
            <stop offset="1" stopColor="#0685BE"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconLamb.displayName = 'Lamb';

export default IconLamb;
