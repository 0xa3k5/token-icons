
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAipad = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12.086 7.114a.43.43 0 0 0 .201.146l.879 2.691a.64.64 0 0 0-.3.66l-1.963.167a.427.427 0 0 0-.643-.205L7.076 8.537a.4.4 0 0 0-.017-.086zm.878 3.737-2.048.172a.43.43 0 0 1-.202.278v.716a.428.428 0 0 1-.055.827l-.168 1.179 3.018-.617a.43.43 0 0 1 .325-.326l-.342-1.937a.64.64 0 0 1-.528-.292m.768.249.355 2.001a.43.43 0 0 1 .262.485l1.821 1.86a.43.43 0 0 1 .33.043l1.179-3.206a.43.43 0 0 1-.103-.33l-3.6-1.02a.8.8 0 0 1-.245.171zm.377-.386 3.565 1.007a.4.4 0 0 1 .086-.077l-.36-1.821a.43.43 0 0 1-.201-.185l-3.069.978a1 1 0 0 1-.021.098m.017-.356 2.987-.955-4.47-2.173a.4.4 0 0 1-.094.043l.844 2.593a.643.643 0 0 1 .733.492m-3.656.999a.43.43 0 0 1-.373-.278l-4.551.21-.013.03 2.289 2.12a.24.24 0 0 1 .218.035l2.109-.977a.43.43 0 0 1 .321-.493zm-.386-.531a.4.4 0 0 1 .022-.06l-3.09-1.972a.43.43 0 0 1-.497.189L5.49 10.898a.35.35 0 0 1 .069.138zm2.735-3.789a.428.428 0 0 0-.703-.474.43.43 0 0 0-.116.32L6.913 8.237a.429.429 0 0 0-.6.604l-1.016 1.903a.43.43 0 0 0-.522.617.43.43 0 0 0 .6.142l2.284 2.121a.25.25 0 0 0 .24.3.23.23 0 0 0 .184-.081l2.203.45 1.337 1.363a.429.429 0 0 0 .429.625l.47 1.453a.428.428 0 1 0 .747.142l.6-.617a.43.43 0 0 0 .694-.416l1.504-.617a.428.428 0 0 0 .617-.527l1.209-3.283a.43.43 0 0 0 .53-.362.427.427 0 0 0-.423-.483h-.004l-.343-1.723a.428.428 0 1 0-.429-.668zm.038 10.534c.098 0 .194.033.27.095l.6-.617a.43.43 0 0 1 .172-.472v-2.649a.4.4 0 0 1-.099-.021L12.4 15.698a.43.43 0 0 1-.125.489l.459 1.401a.4.4 0 0 1 .124-.017m-.617-2.07 1.354-1.731a.4.4 0 0 1-.064-.116l-2.936.6 1.2 1.226a.43.43 0 0 1 .446.021m1.903.999c.112 0 .22.042.3.12l1.449-.591a.43.43 0 0 1 .064-.446l-1.732-1.77a.4.4 0 0 1-.081.06zm-3.883-3.78-1.967.913 1.95.398.171-1.208a.4.4 0 0 1-.154-.103" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#020935" d="M12.085 7.114a.43.43 0 0 0 .202.146l.878 2.691a.64.64 0 0 0-.3.66l-1.963.167a.427.427 0 0 0-.642-.205L7.075 8.537a.4.4 0 0 0-.017-.086zm.879 3.737-2.049.172a.43.43 0 0 1-.201.278v.716a.429.429 0 0 1-.056.827l-.167 1.179 3.017-.617a.43.43 0 0 1 .326-.326l-.343-1.937a.64.64 0 0 1-.527-.292m.767.249.356 2.001a.43.43 0 0 1 .261.485l1.822 1.86a.43.43 0 0 1 .33.043l1.178-3.206a.43.43 0 0 1-.103-.33l-3.6-1.02a.8.8 0 0 1-.244.171zm.377-.386 3.566 1.007a.4.4 0 0 1 .086-.077l-.36-1.821a.43.43 0 0 1-.202-.185l-3.068.978a1 1 0 0 1-.022.098m.017-.356 2.987-.955-4.47-2.173a.4.4 0 0 1-.094.043l.844 2.593a.643.643 0 0 1 .733.492m-3.655.999a.43.43 0 0 1-.373-.278l-4.552.21-.013.03 2.289 2.12a.24.24 0 0 1 .219.035l2.108-.977a.43.43 0 0 1 .322-.493zm-.386-.531a.4.4 0 0 1 .021-.06l-3.09-1.972a.43.43 0 0 1-.497.189L5.49 10.898a.35.35 0 0 1 .068.138zm2.734-3.789A.43.43 0 1 0 12 6.883L6.912 8.237a.429.429 0 0 0-.6.604l-1.015 1.903a.43.43 0 0 0-.523.617.43.43 0 0 0 .6.142l2.284 2.121a.25.25 0 0 0 .24.3.23.23 0 0 0 .184-.081l2.203.45 1.337 1.363a.429.429 0 0 0 .429.625l.471 1.453a.428.428 0 1 0 .746.142l.6-.617a.43.43 0 0 0 .694-.416l1.505-.617a.429.429 0 0 0 .617-.527l1.208-3.283a.43.43 0 0 0 .53-.362.427.427 0 0 0-.422-.483h-.005l-.343-1.723a.428.428 0 1 0-.428-.668zm.039 10.534c.098 0 .193.033.27.095l.6-.617a.43.43 0 0 1 .171-.472v-2.649a.4.4 0 0 1-.098-.021l-1.402 1.791a.43.43 0 0 1-.124.489l.458 1.401a.4.4 0 0 1 .125-.017m-.617-2.07 1.354-1.731a.4.4 0 0 1-.064-.116l-2.936.6 1.2 1.226a.43.43 0 0 1 .446.021m1.902.999c.112 0 .22.042.3.12l1.449-.591a.43.43 0 0 1 .064-.446l-1.731-1.77a.4.4 0 0 1-.082.06zm-3.882-3.78-1.968.913 1.95.398.172-1.208a.4.4 0 0 1-.154-.103" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconAipad.displayName = 'Aipad';
IconAipad.variants = 'brandedmono';

export default IconAipad;
