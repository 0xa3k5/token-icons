
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNftbs = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m12.797 12.81-.356.904h-.9l-.334-.921.643-1.414h.094l-.017 1.328a.257.257 0 1 0 .146 0l.017-1.328h.094z"/>
    <path fill="currentColor" d="M14.224 14.43H9.78l-.026-.12c-.012-.064-.3-1.564.339-2.168q.36-.322.771-.558c.343-.214.613-.385.613-.587v-.12c0-.201-.27-.368-.613-.583a5 5 0 0 1-.771-.561c-.643-.6-.351-2.104-.339-2.169l.026-.12h4.444l.022.12c.013.065.3 1.565-.335 2.169q-.361.32-.775.561c-.343.215-.613.386-.613.583v.12c0 .202.27.369.613.583.274.163.536.351.771.562.643.604.352 2.104.343 2.168zm-4.135-.287h3.827c.073-.472.128-1.436-.279-1.822a5 5 0 0 0-.724-.522c-.399-.249-.746-.467-.746-.802v-.12c0-.334.343-.548.746-.801a4.6 4.6 0 0 0 .724-.523c.407-.386.352-1.372.279-1.839h-3.827c-.073.472-.129 1.457.278 1.839q.334.297.72.523c.403.248.746.467.746.801v.12c0 .335-.343.549-.746.802a5 5 0 0 0-.72.523c-.407.385-.351 1.354-.278 1.82m4.483-7.285H9.429v.429h5.143zm0 7.715H9.429V15h5.143z"/>
    <path fill="currentColor" d="m11.079 8.572-.373-.592.098-.069.129.215.021-.06a.14.14 0 0 1 .047-.043l.065-.026c.017 0 .034 0 .051.009a.07.07 0 0 1 .034.025l.043.07.103.158.034.06.01.042a.12.12 0 0 1-.065.095.13.13 0 0 1-.065.026.3.3 0 0 1-.055-.01l.021.044-.098.06zm.017-.416a.07.07 0 0 0-.034-.03.05.05 0 0 0-.048.008.06.06 0 0 0-.03.06c0 .005 0 .013.009.017l.103.172a.06.06 0 0 0 .06.026l.025-.009a.05.05 0 0 0 .026-.043.1.1 0 0 0-.013-.043zm.488.304a.3.3 0 0 1 .022-.051.1.1 0 0 1 .034-.039.16.16 0 0 1 .077-.026.2.2 0 0 1 .099.013q.044.02.077.052c.017.021.03.042.038.072a.1.1 0 0 1 0 .048l-.017.055-.06.159a.3.3 0 0 1-.021.051.1.1 0 0 1-.034.035.15.15 0 0 1-.073.03.3.3 0 0 1-.099-.018.2.2 0 0 1-.077-.05.16.16 0 0 1-.039-.074.1.1 0 0 1 0-.043l.018-.06zm.043.21a.06.06 0 0 0 0 .043.06.06 0 0 0 .039.03c.013.008.03.008.043 0a.06.06 0 0 0 .03-.034l.068-.185a.06.06 0 0 0 0-.042.06.06 0 0 0-.034-.03.06.06 0 0 0-.043 0 .06.06 0 0 0-.03.034l-.068.184zm.017.737a.3.3 0 0 1-.043-.038.1.1 0 0 1-.03-.043.15.15 0 0 1-.004-.077.24.24 0 0 1 .112-.155.15.15 0 0 1 .077-.017c.017 0 .034 0 .047.009l.051.03.129.098.043.039.03.043a.15.15 0 0 1 .004.077.2.2 0 0 1-.039.086.2.2 0 0 1-.072.064.15.15 0 0 1-.078.017.1.1 0 0 1-.047-.008l-.047-.03zm.215.013a.06.06 0 0 0 .043.013.06.06 0 0 0 .038-.026.06.06 0 0 0 .005-.067l-.018-.019-.158-.11a.06.06 0 0 0-.043-.014.06.06 0 0 0-.035.026.06.06 0 0 0-.017.043.06.06 0 0 0 .03.038zm-.125.93.236-.664.111.043-.14.394.21-.159.11.043-.2.146.06.334-.12-.043-.027-.244-.077.056-.051.128zM9.3 17.143v-1.714h.493c.094 0 .189.008.279.034a.6.6 0 0 1 .184.099.4.4 0 0 1 .107.137q.03.079.03.162v.06a.4.4 0 0 1-.017.12.2.2 0 0 1-.043.086.6.6 0 0 1-.171.116c.068.017.128.06.17.12a.36.36 0 0 1 .06.214v.099a.43.43 0 0 1-.15.347c-.102.081-.26.12-.483.12zm.334-1.483v.471h.155a.32.32 0 0 0 .227-.064.25.25 0 0 0 .06-.175.22.22 0 0 0-.065-.172.36.36 0 0 0-.235-.06zm0 .686v.548h.146a.5.5 0 0 0 .159-.021.2.2 0 0 0 .085-.06.2.2 0 0 0 .039-.09 1 1 0 0 0 0-.232.2.2 0 0 0-.043-.08.2.2 0 0 0-.09-.048.6.6 0 0 0-.15-.017zm1.055-.506c0-.06.017-.124.051-.18a.4.4 0 0 1 .133-.129.7.7 0 0 1 .18-.077.8.8 0 0 1 .596.077.4.4 0 0 1 .128.13.34.34 0 0 1 .052.18v.89a.33.33 0 0 1-.052.18.4.4 0 0 1-.128.13.8.8 0 0 1-.592.076.6.6 0 0 1-.184-.077.4.4 0 0 1-.129-.124.33.33 0 0 1-.051-.18v-.896zm.342.892c0 .025 0 .05.013.072a.14.14 0 0 0 .056.056.33.33 0 0 0 .322 0 .13.13 0 0 0 .064-.129v-.89c0-.027 0-.048-.013-.074a.15.15 0 0 0-.052-.056.33.33 0 0 0-.32 0 .15.15 0 0 0-.057.056.13.13 0 0 0-.013.073zm1.033-.892c0-.06.018-.124.052-.18a.4.4 0 0 1 .128-.129.79.79 0 0 1 .772 0 .4.4 0 0 1 .133.13c.034.055.051.12.051.18v.89a.3.3 0 0 1-.051.18.4.4 0 0 1-.129.13.8.8 0 0 1-.591.076.6.6 0 0 1-.18-.077.4.4 0 0 1-.133-.128.33.33 0 0 1-.052-.18zm.343.892a.1.1 0 0 0 .013.072.2.2 0 0 0 .052.056.33.33 0 0 0 .32 0 .13.13 0 0 0 .052-.056.13.13 0 0 0 .013-.072v-.892a.13.13 0 0 0-.013-.073.15.15 0 0 0-.051-.056.33.33 0 0 0-.321 0 .15.15 0 0 0-.07.13v.89zm2.126-.79a.7.7 0 0 0-.309-.093l.279-.408c.069-.102-.034-.218-.193-.218l-.424.66v-.454c-.189 0-.343.107-.343.244v1.457c.193 0 .343-.107.343-.24v-.664q.002-.04.017-.073a.2.2 0 0 1 .051-.056.41.41 0 0 1 .395 0 .2.2 0 0 1 .06.069q.019.04.012.085v.686c0 .107.13.197.28.197v-.883a.3.3 0 0 0-.04-.17.36.36 0 0 0-.128-.138"/>
    <path fill="currentColor" d="M12 19.286a7.286 7.286 0 1 1 0-14.571 7.286 7.286 0 0 1 0 14.57m0-14.409a7.123 7.123 0 1 0 0 14.246 7.123 7.123 0 0 0 0-14.246"/>

        </>
      ) : (
        <>
          
    <path fill="url(#NFTBS__a)" d="m12.797 12.81-.356.904h-.9l-.334-.921.643-1.414h.094l-.017 1.328a.257.257 0 1 0 .145 0l.018-1.328h.094z"/>
    <path fill="url(#NFTBS__b)" d="M14.224 14.43H9.78l-.026-.12c-.013-.064-.3-1.564.338-2.168q.36-.322.772-.558c.343-.214.613-.385.613-.587v-.12c0-.201-.27-.368-.613-.583a5 5 0 0 1-.772-.561c-.642-.6-.351-2.104-.338-2.169l.026-.12h4.444l.021.12c.013.065.3 1.565-.334 2.169q-.362.32-.776.561c-.343.215-.613.386-.613.583v.12c0 .202.27.369.613.583.275.163.536.351.772.562.643.604.351 2.104.343 2.168zm-4.136-.287h3.827c.073-.472.129-1.436-.278-1.822a5 5 0 0 0-.725-.522c-.398-.249-.745-.467-.745-.802v-.12c0-.334.343-.548.745-.801a4.6 4.6 0 0 0 .725-.523c.407-.386.351-1.372.278-1.839h-3.827c-.073.472-.128 1.457.279 1.839q.334.297.72.523c.403.248.745.467.745.801v.12c0 .335-.342.549-.745.802a5 5 0 0 0-.72.523c-.407.385-.352 1.354-.279 1.82"/>
    <path fill="url(#NFTBS__c)" d="M14.571 6.857H9.428v.429h5.143z"/>
    <path fill="url(#NFTBS__d)" d="M14.571 14.572H9.428V15h5.143z"/>
    <path fill="url(#NFTBS__e)" d="m11.078 8.572-.373-.592.099-.069.128.215.022-.06A.14.14 0 0 1 11 8.023l.064-.026c.017 0 .035 0 .052.009a.07.07 0 0 1 .034.025l.043.07.103.158.034.06.009.042a.12.12 0 0 1-.065.095.13.13 0 0 1-.064.026.3.3 0 0 1-.056-.01l.022.044-.099.06zm.017-.416a.07.07 0 0 0-.034-.03.05.05 0 0 0-.047.008.06.06 0 0 0-.03.06q-.002.01.008.017l.103.172a.06.06 0 0 0 .06.026l.026-.009a.05.05 0 0 0 .026-.043.1.1 0 0 0-.013-.043z"/>
    <path fill="url(#NFTBS__f)" d="M11.584 8.46a.3.3 0 0 1 .021-.051.1.1 0 0 1 .035-.039.16.16 0 0 1 .077-.026.2.2 0 0 1 .098.013q.045.02.077.052c.018.021.03.042.039.072a.1.1 0 0 1 0 .048l-.017.055-.06.159a.3.3 0 0 1-.022.051.1.1 0 0 1-.034.035.15.15 0 0 1-.073.03.3.3 0 0 1-.098-.018.2.2 0 0 1-.077-.05.16.16 0 0 1-.039-.074.1.1 0 0 1 0-.043l.017-.06zm.043.21a.06.06 0 0 0 0 .043.06.06 0 0 0 .038.03q.021.012.043 0a.06.06 0 0 0 .03-.034l.069-.185a.05.05 0 0 0 0-.042.06.06 0 0 0-.035-.03.06.06 0 0 0-.042 0 .06.06 0 0 0-.03.034l-.069.184z"/>
    <path fill="url(#NFTBS__g)" d="M11.644 9.407a.3.3 0 0 1-.043-.038.1.1 0 0 1-.03-.043.15.15 0 0 1-.004-.077.24.24 0 0 1 .111-.155.15.15 0 0 1 .077-.017c.017 0 .035 0 .047.009l.052.03.128.098.043.039.03.043a.15.15 0 0 1 .005.077.2.2 0 0 1-.039.086.2.2 0 0 1-.073.064.15.15 0 0 1-.077.017.1.1 0 0 1-.047-.008l-.047-.03zm.214.013a.06.06 0 0 0 .043.013.06.06 0 0 0 .039-.026.06.06 0 0 0 .012-.043.06.06 0 0 0-.025-.043l-.159-.11a.06.06 0 0 0-.043-.014.07.07 0 0 0-.034.026.06.06 0 0 0-.017.043.06.06 0 0 0 .03.038z"/>
    <path fill="url(#NFTBS__h)" d="m11.734 10.35.236-.664.111.043-.141.394.21-.159.111.043-.201.146.06.334-.12-.043-.026-.244-.077.056-.052.128z"/>
    <path fill="#A57F62" d="M9.3 17.143v-1.714h.492c.095 0 .189.008.279.034a.6.6 0 0 1 .184.099.4.4 0 0 1 .107.137q.03.079.03.162v.06a.4.4 0 0 1-.017.12.2.2 0 0 1-.043.086.6.6 0 0 1-.171.116c.069.017.129.06.171.12a.36.36 0 0 1 .06.214v.099a.43.43 0 0 1-.15.347q-.151.12-.484.12zm.334-1.483v.471h.154a.32.32 0 0 0 .227-.064.24.24 0 0 0 .06-.175.22.22 0 0 0-.064-.172.36.36 0 0 0-.236-.06zm0 .686v.548h.146a.5.5 0 0 0 .158-.021.2.2 0 0 0 .086-.06.2.2 0 0 0 .038-.09 1 1 0 0 0 0-.232.2.2 0 0 0-.042-.08.2.2 0 0 0-.09-.048.6.6 0 0 0-.15-.017zm1.054-.506c0-.06.017-.124.052-.18a.4.4 0 0 1 .132-.129.7.7 0 0 1 .18-.077.8.8 0 0 1 .596.077.4.4 0 0 1 .129.13c.034.055.051.12.051.18v.89a.33.33 0 0 1-.051.18.4.4 0 0 1-.129.13.8.8 0 0 1-.591.076.6.6 0 0 1-.185-.077.4.4 0 0 1-.128-.124.33.33 0 0 1-.052-.18v-.896zm.343.892c0 .025 0 .05.013.072a.14.14 0 0 0 .056.056.33.33 0 0 0 .321 0 .13.13 0 0 0 .064-.129v-.89c0-.027 0-.048-.013-.074a.15.15 0 0 0-.051-.056.33.33 0 0 0-.321 0 .15.15 0 0 0-.056.056.13.13 0 0 0-.013.073zm1.033-.892c0-.06.017-.124.051-.18a.4.4 0 0 1 .129-.129.79.79 0 0 1 .771 0 .4.4 0 0 1 .133.13.35.35 0 0 1 .052.18v.89a.3.3 0 0 1-.052.18.4.4 0 0 1-.128.13.8.8 0 0 1-.592.076.6.6 0 0 1-.18-.077.4.4 0 0 1-.133-.128.33.33 0 0 1-.051-.18zm.343.892a.1.1 0 0 0 .013.072.2.2 0 0 0 .051.056.33.33 0 0 0 .321 0 .13.13 0 0 0 .052-.056.13.13 0 0 0 .013-.072v-.892a.13.13 0 0 0-.013-.073.15.15 0 0 0-.052-.056.33.33 0 0 0-.321 0 .15.15 0 0 0-.069.13v.89zm2.125-.79a.7.7 0 0 0-.308-.093l.278-.408c.069-.102-.034-.218-.192-.218l-.425.66v-.454c-.188 0-.343.107-.343.244v1.457c.193 0 .343-.107.343-.24v-.664c0-.026.009-.052.017-.073a.2.2 0 0 1 .052-.056.41.41 0 0 1 .394 0 .2.2 0 0 1 .06.069q.02.04.013.085v.686c0 .107.129.197.279.197v-.883a.3.3 0 0 0-.039-.17.36.36 0 0 0-.129-.138"/>
    <path fill="url(#NFTBS__i)" d="M12 19.286a7.286 7.286 0 1 1 0-14.571 7.286 7.286 0 0 1 0 14.57m0-14.409a7.123 7.123 0 1 0 0 14.246 7.123 7.123 0 0 0 0-14.246"/>
    <defs>
        <linearGradient id="NFTBS__a" x1="-2.906" x2="22.088" y1="29.74" y2="-28.178" gradientUnits="userSpaceOnUse">
            <stop stopColor="#99644F"/>
            <stop offset=".32" stopColor="#A57F62"/>
            <stop offset=".71" stopColor="#DBC0B0"/>
        </linearGradient>
        <linearGradient id="NFTBS__b" x1="4.135" x2="12.34" y1="20.251" y2=".756" gradientUnits="userSpaceOnUse">
            <stop stopColor="#99644F"/>
            <stop offset=".32" stopColor="#A57F62"/>
            <stop offset=".71" stopColor="#DBC0B0"/>
            <stop offset="1" stopColor="#E8E1DA"/>
        </linearGradient>
        <linearGradient id="NFTBS__c" x1=".573" x2="46.938" y1="297.891" y2="293.276" gradientUnits="userSpaceOnUse">
            <stop offset=".32" stopColor="#A57F62"/>
            <stop offset=".71" stopColor="#DBC0B0"/>
            <stop offset="1" stopColor="#E8E1DA"/>
        </linearGradient>
        <linearGradient id="NFTBS__d" x1="9.911" x2="56.276" y1="64.311" y2="59.696" gradientUnits="userSpaceOnUse">
            <stop stopColor="#99644F"/>
            <stop offset=".32" stopColor="#A57F62"/>
        </linearGradient>
        <linearGradient id="NFTBS__e" x1="-67.159" x2="39.853" y1="129.935" y2="-46.951" gradientUnits="userSpaceOnUse">
            <stop offset=".32" stopColor="#A57F62"/>
            <stop offset=".71" stopColor="#DBC0B0"/>
        </linearGradient>
        <linearGradient id="NFTBS__f" x1="-106.873" x2="20.577" y1="165.999" y2="-78.765" gradientUnits="userSpaceOnUse">
            <stop offset=".32" stopColor="#A57F62"/>
            <stop offset=".71" stopColor="#DBC0B0"/>
        </linearGradient>
        <linearGradient id="NFTBS__g" x1="-80.327" x2="81" y1="169.066" y2="-67.38" gradientUnits="userSpaceOnUse">
            <stop offset=".32" stopColor="#A57F62"/>
            <stop offset=".71" stopColor="#DBC0B0"/>
        </linearGradient>
        <linearGradient id="NFTBS__h" x1="-66.248" x2="4.944" y1="94.558" y2="-76.123" gradientUnits="userSpaceOnUse">
            <stop offset=".32" stopColor="#A57F62"/>
            <stop offset=".71" stopColor="#DBC0B0"/>
        </linearGradient>
        <linearGradient id="NFTBS__i" x1="12.034" x2="11.965" y1="19.084" y2="4.543" gradientUnits="userSpaceOnUse">
            <stop stopColor="#99644F"/>
            <stop offset=".32" stopColor="#A57F62"/>
            <stop offset=".71" stopColor="#DBC0B0"/>
            <stop offset="1" stopColor="#E8E1DA"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconNftbs.displayName = 'Nftbs';

export default IconNftbs;
