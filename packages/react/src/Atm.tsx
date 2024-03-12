
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAtm = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#2C305F" d="M6.544 15.703 12 19.877l5.456-4.174a.83.83 0 0 0 .33-.664V5.33c-.429-.63-2.743-1.264-5.786-1.264-3.257 0-5.357.634-5.786 1.264v9.712c0 .257.12.506.33.664z"/><path fill="#fff" d="m9.429 18.099-1.715-1.325v-2.571l1.702-1.286h.013v5.186zm3.428 1.328-.857.66-.857-.664v-7.804l1.714-1.295zm3.429-2.653-1.715 1.329V9.026l1.715-1.295z"/><path fill="#CB3522" d="m12.857 10.324 1.714-1.294v9.069l-1.714 1.328V10.32zM9.43 12.913l1.714-1.294v7.804l-1.714-1.324zm-3 2.263 1.285-.973v2.571L6.43 15.78zm9.857 1.598V7.736l1.285-.969v9.013z"/><path fill="#2C305F" d="M6.429 15.043c0 .193.09.377.248.497L12 19.607l5.323-4.071c.158-.12.248-.3.248-.497V5.4c-.085-.099-.257-.219-.531-.343a6.6 6.6 0 0 0-1.217-.394c-.994-.232-2.314-.386-3.823-.386-1.616 0-2.936.154-3.9.386a6 6 0 0 0-1.166.39c-.257.124-.415.244-.505.343zM7.997 4.26C9 4.016 10.36 3.857 12 3.857c1.534 0 2.893.159 3.921.403.515.12.956.257 1.299.416.334.154.6.33.746.54l.034.051v9.772c0 .325-.154.63-.416.831L12 20.143 6.416 15.87A1.05 1.05 0 0 1 6 15.039V5.267l.034-.051c.142-.206.395-.386.712-.536.325-.159.745-.3 1.251-.42"/><path fill="#F0F3FA" d="m11.871 4.474.142.437h.471l-.381.27.146.438-.378-.27-.377.27.142-.438-.377-.27h.467zm4.873.647.146.438h.467l-.377.27.146.437-.382-.27-.377.27.146-.437-.377-.27h.467zm-3.06 2.863.142.437h.471l-.381.27.145.438-.377-.275-.381.275.146-.438-.378-.27h.468zm-3.411 2.392.146.437h.467l-.377.27.141.437-.377-.27-.377.27.145-.437-.381-.27h.471zm-3.429 2.533.146.437h.467l-.377.27.141.437-.377-.27-.377.27.146-.437-.382-.27h.472zm0-4.218.146.438h.467l-.377.27.141.437-.377-.27-.377.27.146-.437-.382-.27h.472zM6.827 5.32l.142.437h.471l-.381.27.145.437-.377-.27-.381.27.145-.437-.377-.27h.467zm.887.857v5.691l.429-.33v-.934a.38.38 0 0 0-.103-.249c-.086-.102-.107-.265-.021-.368.266-.33.455-.715.552-1.127.112-.476.146-.986 0-1.415-.107-.325.215-.214.215-.214.073-.073.214-.214.428-.214l.429-.206c.073.069.146.231-.039.596-.171.334.06.57.253.668.15.073.459-.355.587-.548l.013-.022c.026-.034.043-.068.082-.098a.43.43 0 0 1 .304-.133c-.129.716-.472 1.856-.986 1.856h.214c0 .21-.128.925-.642 1.264v.163l2.142-1.642V7.02c-.428.069-1.328.086-1.5-.424-.287.073-1.071.214-1.285-.63zm7.715-.21-3 2.314V6.814c.514.335 1.071 0 1.071-.214.686.171 1.144-.351 1.286-.63h.643z"/>
    </BaseIcon>
));

IconAtm.displayName = 'Atm';
IconAtm.variants = 'branded';

export default IconAtm;
