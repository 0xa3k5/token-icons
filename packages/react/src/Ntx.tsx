
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNtx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M8.421 8.752c.566.6 1.71 1.812 1.728 1.842l-.206.258-2.272-1.03-2.09-.11a.484.484 0 0 1-.357-.776L6.763 6.89a.477.477 0 0 1 .814.086zm-.934.53q-.698-.072-1.393-.17a.16.16 0 0 1-.111-.07.21.21 0 0 1 .004-.243l.733-.96a.356.356 0 0 1 .609.055l.467.922a.34.34 0 0 1 0 .287.31.31 0 0 1-.313.18zM6.43 8.855l.805.095a.18.18 0 0 0 .18-.103.19.19 0 0 0 0-.172l-.274-.531a.206.206 0 0 0-.347-.03l-.429.557a.12.12 0 0 0 0 .142.12.12 0 0 0 .065.042" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M6.09 14.272c.073-.086.287-.356.437-.558a.159.159 0 0 0-.111-.257l-.515-.043a.18.18 0 0 0-.18.249l.21.566a.11.11 0 0 0 .1.068c.025 0 .042-.013.06-.03z"/>
    <path fill="currentColor" d="M6.926 12.746c.698-.146 2.828-.815 2.863-.815l.09.27-2.516 1.586-1.033 1.5a.412.412 0 0 1-.729-.086l-.78-2.074a.416.416 0 0 1 .433-.566zm-.043.934c-.257.347-.63.81-.754.956a.14.14 0 0 1-.103.051.18.18 0 0 1-.172-.115l-.364-.986a.313.313 0 0 1 .317-.42l.883.073a.274.274 0 0 1 .197.441z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M17.927 12.077a16 16 0 0 0-.561.206.137.137 0 0 0-.03.236l.347.257c.09.073.223.021.244-.09l.099-.506a.09.09 0 0 0-.043-.094.07.07 0 0 0-.056-.009"/>
    <path fill="currentColor" d="M16.65 12.802c-.566-.206-4.144-.99-4.166-1.008l.052-.235 4.26.291 1.406-.617a.352.352 0 0 1 .484.394l-.343 1.847a.35.35 0 0 1-.566.215zm.442-.656.968-.352a.12.12 0 0 1 .094.013.16.16 0 0 1 .078.163l-.172.87a.262.262 0 0 1-.416.163l-.604-.45a.235.235 0 0 1 .052-.407m-4.428-2.679a.9.9 0 0 0 .18-.321.5.5 0 0 0 .013-.112V7.727c0-.167.06-.325.18-.441l.45-.326c.103-.098.232-.094.373-.094h.986c.115-.004.227-.009.317.068l.493.425a.6.6 0 0 1 .205.45V9.02a.6.6 0 0 1-.05.245c-.06.141-.194.231-.327.313l-.124.085a.9.9 0 0 1-.27.159.7.7 0 0 1-.244.034h-.905a.6.6 0 0 0-.3.056l-1.508.943-.291-.326zm.622-1.667c0-.283.231-.514.514-.514h1.114c.283 0 .515.231.515.514v1.114a.516.516 0 0 1-.515.515H13.8a.514.514 0 0 1-.514-.515zM15 8.357a.643.643 0 1 1-1.286 0 .643.643 0 0 1 1.286 0m-5.786 6.592c-.073.12-.145.248-.137.385l.004.03.155 1.033a.5.5 0 0 1-.099.373l-.231.3a.48.48 0 0 1-.309.18l-.866.129a.47.47 0 0 1-.317-.065l-.441-.278a.48.48 0 0 1-.214-.335l-.142-.96a.5.5 0 0 1 .094-.364l.266-.356a.48.48 0 0 1 .326-.188l.728-.086q.026.002.056-.008c.12-.03.21-.12.296-.21l2.031-2.088.185.146L9.21 14.95zm-.428 1.414a.386.386 0 0 1-.326.437l-.814.124a.386.386 0 0 1-.433-.33l-.124-.827a.386.386 0 0 1 .325-.441l.815-.12a.385.385 0 0 1 .432.325l.125.828zm-1.329-.227a.49.49 0 0 1 .599-.547.492.492 0 0 1-.05.963.486.486 0 0 1-.549-.416m3.236-7.766a1.071 1.071 0 1 0-.643.202l.626 1.67.334-.042zm-.621-.227a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286M10.5 7.5a.429.429 0 1 1-.857 0 .429.429 0 0 1 .857 0m.334 6.283a1.17 1.17 0 0 0-.771 1.11 1.188 1.188 0 0 0 1.637 1.089 1.17 1.17 0 0 0 .72-1.09c0-.57-.407-1.045-.943-1.156l-.111-1.076-.335-.047zm.408.36a.744.744 0 0 0-.746.75c0 .416.343.75.754.75.416 0 .75-.334.746-.75a.757.757 0 0 0-.755-.75m-.446.746a.428.428 0 1 1 .857 0 .428.428 0 0 1-.857 0" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M12.429 5.786a.42.42 0 0 1-.42.428.433.433 0 0 1-.433-.428.426.426 0 1 1 .853 0"/>
    <path fill="currentColor" d="M12.334 6.81a1.06 1.06 0 0 0 .746-1.024 1.08 1.08 0 0 0-1.489-.99 1.06 1.06 0 0 0-.654.99c0 .458.296.848.703 1.003l-.497 3.604.326.09.874-3.673zm-.325-.381a.64.64 0 0 0 .643-.643.655.655 0 0 0-.652-.643.636.636 0 0 0-.639.643c0 .356.296.643.648.643" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M18.429 15.853a.43.43 0 0 1 0-.861.443.443 0 0 1 .428.437.423.423 0 0 1-.428.424"/>
    <path fill="currentColor" d="M17.143 15.399a1.303 1.303 0 0 0 1.286 1.303 1.27 1.27 0 0 0 1.285-1.273 1.303 1.303 0 0 0-1.285-1.299 1.27 1.27 0 0 0-.875.33l-5.207-2.631-.205.342 5.014 3.078-.013.154zm.428.013c0 .47.386.857.858.865a.85.85 0 0 0 .857-.848.87.87 0 0 0-.857-.866.847.847 0 0 0-.857.848" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M14.233 16.612c-.009.038-.227.51-.433.942a.86.86 0 0 0 .116.922l.788.943a.85.85 0 0 0 .755.287l.942-.129a.85.85 0 0 0 .643-.458l.532-1.072a.86.86 0 0 0-.086-.904l-.728-.93a.84.84 0 0 0-.755-.322l-.758.09-3.279-3.707-.129.215zm2.67 1.157a1.213 1.213 0 0 1-1.204 1.221 1.214 1.214 0 0 1-1.209-1.217 1.21 1.21 0 0 1 1.209-1.221 1.21 1.21 0 0 1 1.204 1.22zm-.6 0a.61.61 0 0 1-.604.613.607.607 0 0 1-.605-.61c0-.342.27-.612.6-.612.335 0 .605.274.605.613zm.3-7.153c.051.047.116.107.206.206a.48.48 0 0 0 .514.124L18 10.7a.5.5 0 0 0 .313-.35l.124-.554a.51.51 0 0 0-.116-.446l-.467-.514a.49.49 0 0 0-.51-.141l-.651.206a.51.51 0 0 0-.33.355l-.107.437-3.934 1.427.085.116 4.05-.771c.043.056.086.094.146.15m.754-1.397a.646.646 0 0 1 0 1.29.66.66 0 0 1-.643-.652c0-.355.288-.643.643-.638m.086.265a.356.356 0 0 1-.117.688.35.35 0 0 1-.334-.21.356.356 0 0 1 .31-.5.4.4 0 0 1 .137.022zM6.831 11.516l.558.66a.48.48 0 0 0 .672.06l.605-.514 1.243-.138.042-.342-1.23-.228-.557-.63a.474.474 0 0 0-.651-.055l-.617.492a.484.484 0 0 0-.065.695m.416-.06a.244.244 0 0 1 0-.343l.386-.386a.24.24 0 0 1 .334 0l.386.386c.09.094.09.248 0 .343l-.386.386a.24.24 0 0 1-.338 0zm.227-.069a.146.146 0 0 1 0-.206l.223-.227a.14.14 0 0 1 .156-.03.14.14 0 0 1 .046.03l.227.227a.15.15 0 0 1 0 .206l-.227.227a.14.14 0 0 1-.202 0z"/>
    <path fill="currentColor" d="M11.143 13.286a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429m0-.857a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#NTX__a)" d="M8.421 8.752c.566.6 1.71 1.812 1.727 1.842l-.206.258-2.271-1.03-2.091-.11a.484.484 0 0 1-.356-.776L6.762 6.89a.477.477 0 0 1 .815.086zm-.934.53q-.699-.072-1.393-.17a.16.16 0 0 1-.112-.07.21.21 0 0 1 .005-.243l.733-.96a.356.356 0 0 1 .608.055l.467.922a.34.34 0 0 1 0 .287.31.31 0 0 1-.313.18zm-1.059-.428.806.095a.18.18 0 0 0 .18-.103.19.19 0 0 0 0-.172l-.274-.531a.206.206 0 0 0-.348-.03l-.428.557a.12.12 0 0 0 0 .142c.013.02.038.034.064.042" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#00A69C" d="M6.09 14.272c.072-.086.287-.356.437-.558a.159.159 0 0 0-.112-.257l-.514-.043a.18.18 0 0 0-.18.249l.21.566a.11.11 0 0 0 .099.068c.025 0 .042-.013.06-.03z"/>
    <path fill="url(#NTX__b)" d="M6.925 12.746c.699-.146 2.829-.815 2.863-.815l.09.27-2.516 1.586-1.032 1.5a.412.412 0 0 1-.729-.086l-.78-2.074a.416.416 0 0 1 .433-.566zm-.043.934c-.257.347-.63.81-.754.956a.14.14 0 0 1-.103.051.18.18 0 0 1-.171-.115l-.364-.986a.313.313 0 0 1 .317-.42l.883.073a.274.274 0 0 1 .197.441z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#00A69C" d="M17.927 12.077c-.09.03-.365.129-.562.206a.137.137 0 0 0-.03.236l.347.257c.09.073.223.021.245-.09l.098-.506a.09.09 0 0 0-.043-.094.07.07 0 0 0-.055-.009"/>
    <path fill="url(#NTX__c)" d="M16.65 12.802c-.566-.206-4.145-.99-4.166-1.008l.051-.235 4.26.291 1.406-.617a.352.352 0 0 1 .484.394l-.343 1.847a.35.35 0 0 1-.565.215zm.441-.656.969-.352a.12.12 0 0 1 .094.013c.056.03.086.095.077.163l-.171.87a.262.262 0 0 1-.416.163l-.604-.45a.236.236 0 0 1 .051-.407" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#1259A2" d="M12.664 9.467a.9.9 0 0 0 .18-.321.5.5 0 0 0 .013-.112V7.727c0-.167.06-.325.18-.441l.45-.326c.103-.098.231-.094.373-.094h.985c.116-.004.227-.009.317.068l.493.425a.6.6 0 0 1 .206.45V9.02a.6.6 0 0 1-.051.245c-.06.141-.193.231-.326.313l-.124.085a.9.9 0 0 1-.27.159.7.7 0 0 1-.245.034h-.904a.6.6 0 0 0-.3.056l-1.509.943-.291-.326zm.621-1.667c0-.283.232-.514.515-.514h1.114c.283 0 .514.231.514.514v1.114a.516.516 0 0 1-.514.515H13.8a.514.514 0 0 1-.515-.515zM15 8.357a.643.643 0 1 1-1.287 0 .643.643 0 0 1 1.287 0" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#NTX__d)" d="M9.214 14.949c-.073.12-.146.248-.137.385l.004.03.154 1.033a.5.5 0 0 1-.098.373l-.232.3a.48.48 0 0 1-.308.18l-.866.129a.47.47 0 0 1-.317-.065l-.442-.278a.48.48 0 0 1-.214-.335l-.141-.96a.5.5 0 0 1 .094-.364l.266-.356a.48.48 0 0 1 .325-.188l.729-.086q.024.002.056-.008c.12-.03.21-.12.295-.21l2.032-2.088.184.146L9.21 14.95zm-.429 1.414a.386.386 0 0 1-.325.437l-.815.124a.386.386 0 0 1-.433-.33l-.124-.827a.386.386 0 0 1 .326-.441l.814-.12a.385.385 0 0 1 .433.325l.124.828zm-1.328-.227a.49.49 0 0 1 .598-.547.492.492 0 0 1-.05.963.486.486 0 0 1-.548-.416" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#NTX__e)" d="M10.692 8.37a1.071 1.071 0 1 0-.642.202l.625 1.67.335-.042zm-.621-.227a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286M10.5 7.5a.429.429 0 1 1-.858 0 .429.429 0 0 1 .858 0" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#NTX__f)" d="M10.834 13.783a1.17 1.17 0 0 0-.772 1.11 1.187 1.187 0 0 0 1.637 1.089 1.17 1.17 0 0 0 .72-1.09c0-.57-.407-1.045-.942-1.156l-.112-1.076-.334-.047zm.407.36a.744.744 0 0 0-.746.75c0 .416.343.75.755.75.415 0 .75-.334.745-.75a.757.757 0 0 0-.754-.75m-.446.746a.428.428 0 1 1 .857 0 .428.428 0 0 1-.857 0" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#2F9AD5" d="M12.428 5.786a.42.42 0 0 1-.42.428.433.433 0 0 1-.433-.428.426.426 0 1 1 .853 0"/>
    <path fill="url(#NTX__g)" d="M12.334 6.81a1.06 1.06 0 0 0 .746-1.024 1.08 1.08 0 0 0-1.49-.99 1.06 1.06 0 0 0-.653.99c0 .458.295.848.703 1.003l-.498 3.604.326.09.874-3.673zm-.326-.381a.64.64 0 0 0 .643-.643.655.655 0 0 0-.651-.643.636.636 0 0 0-.639.643c0 .356.296.643.647.643" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#1082B5" d="M18.428 15.853a.43.43 0 0 1 0-.861.443.443 0 0 1 .429.437.423.423 0 0 1-.429.424"/>
    <path fill="url(#NTX__h)" d="M17.142 15.399a1.303 1.303 0 0 0 1.286 1.303 1.27 1.27 0 0 0 1.286-1.273 1.303 1.303 0 0 0-1.286-1.299 1.26 1.26 0 0 0-.874.33l-5.207-2.631-.206.342 5.014 3.078-.013.154zm.429.013c0 .47.386.857.857.865a.85.85 0 0 0 .857-.848.87.87 0 0 0-.857-.866.847.847 0 0 0-.857.848" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#NTX__i)" d="M14.232 16.612c-.008.038-.227.51-.432.942a.86.86 0 0 0 .115.922l.789.943a.85.85 0 0 0 .754.287l.943-.129a.85.85 0 0 0 .643-.458l.531-1.072a.86.86 0 0 0-.085-.904l-.729-.93a.84.84 0 0 0-.754-.322l-.759.09-3.278-3.707-.129.215zm2.67 1.157a1.21 1.21 0 0 1-1.204 1.221 1.214 1.214 0 0 1-1.208-1.217 1.21 1.21 0 0 1 1.208-1.221 1.21 1.21 0 0 1 1.204 1.22zm-.6 0a.61.61 0 0 1-.604.613.607.607 0 0 1-.604-.61c0-.342.27-.612.6-.612.334 0 .604.274.604.613z"/>
    <path fill="url(#NTX__j)" d="M16.602 10.616c.052.047.116.107.206.206a.48.48 0 0 0 .514.124L18 10.7a.5.5 0 0 0 .312-.35l.125-.554a.51.51 0 0 0-.116-.446l-.467-.514a.49.49 0 0 0-.51-.141l-.652.206a.51.51 0 0 0-.33.355l-.107.437-3.934 1.427.086.116 4.05-.771c.043.056.085.094.145.15m.755-1.397a.646.646 0 0 1 0 1.29.66.66 0 0 1-.643-.652c0-.355.287-.643.643-.638m.085.265a.357.357 0 0 1-.117.688.35.35 0 0 1-.333-.21.355.355 0 0 1 .446-.478z"/>
    <path fill="#1159A2" d="m6.831 11.516.557.66a.48.48 0 0 0 .673.06l.604-.514 1.243-.138.043-.342-1.23-.228-.557-.63a.474.474 0 0 0-.652-.055l-.617.492a.484.484 0 0 0-.064.695m.416-.06a.244.244 0 0 1 0-.343l.385-.386a.24.24 0 0 1 .335 0l.385.386c.09.094.09.248 0 .343l-.385.386a.24.24 0 0 1-.339 0zm.227-.069a.146.146 0 0 1 0-.206l.223-.227a.14.14 0 0 1 .155-.03.14.14 0 0 1 .046.03l.227.227c.056.06.056.15 0 .206l-.227.227a.14.14 0 0 1-.201 0z"/>
    <path fill="#1259A2" d="M11.142 13.286a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429m0-.857a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="NTX__a" x1="7.236" x2="24.695" y1="10.794" y2="19.887" gradientUnits="userSpaceOnUse">
            <stop offset=".27" stopColor="#00A69C"/>
            <stop offset="1" stopColor="#006771"/>
        </linearGradient>
        <linearGradient id="NTX__b" x1="6.122" x2="21.756" y1="12.125" y2="8.526" gradientUnits="userSpaceOnUse">
            <stop offset=".32" stopColor="#00A69C"/>
            <stop offset="1" stopColor="#186472"/>
        </linearGradient>
        <linearGradient id="NTX__c" x1="9.829" x2="3.456" y1="8.122" y2="7.845" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00A69C"/>
            <stop offset="1" stopColor="#13626F"/>
        </linearGradient>
        <linearGradient id="NTX__d" x1="15.222" x2="18.713" y1="12.362" y2="4.857" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1159A2"/>
            <stop offset="1" stopColor="#035C72"/>
        </linearGradient>
        <linearGradient id="NTX__e" x1="11.058" x2="13.03" y1="13.933" y2="22.232" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1182B5"/>
            <stop offset="1" stopColor="#086B88"/>
        </linearGradient>
        <linearGradient id="NTX__f" x1="9.866" x2="10.184" y1="19.565" y2="6.471" gradientUnits="userSpaceOnUse">
            <stop offset=".66" stopColor="#1081B4"/>
            <stop offset="1" stopColor="#0A5E7B"/>
        </linearGradient>
        <linearGradient id="NTX__g" x1="16.103" x2="14.968" y1="4.815" y2="19.411" gradientUnits="userSpaceOnUse">
            <stop offset=".53" stopColor="#2F9AD5"/>
            <stop offset="1" stopColor="#125E7D"/>
        </linearGradient>
        <linearGradient id="NTX__h" x1="18.616" x2="-.958" y1="19.001" y2="11.626" gradientUnits="userSpaceOnUse">
            <stop offset=".49" stopColor="#1082B5"/>
            <stop offset="1" stopColor="#015E6D"/>
        </linearGradient>
        <linearGradient id="NTX__i" x1="10.984" x2="6.498" y1="10.971" y2="3.188" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2D99D5"/>
            <stop offset="1" stopColor="#176273"/>
        </linearGradient>
        <linearGradient id="NTX__j" x1="10.898" x2="3.224" y1="16.428" y2="17.051" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2E99D5"/>
            <stop offset="1" stopColor="#136371"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconNtx.displayName = 'Ntx';

export default IconNtx;
