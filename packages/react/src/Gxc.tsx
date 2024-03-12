
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGxc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M5.802 5.89c.687-.754 1.875-.954 2.79-.523.247.116.472.274.662.469q1.383 1.356 2.74 2.736c.446-.43.881-.87 1.317-1.31a68 68 0 0 1 1.548-1.53c.924-.858 2.531-.76 3.361.183.842.87.849 2.4.009 3.275a367 367 0 0 1-2.8 2.808q.566.574 1.14 1.143.848.838 1.677 1.696c.866.902.797 2.494-.113 3.34-.77.781-2.09.897-3.003.305-.2-.122-.364-.288-.528-.453l-.124-.123q-.711-.706-1.416-1.418-.526-.528-1.053-1.055c-.416.402-.825.813-1.233 1.223-.549.55-1.096 1.1-1.661 1.634-.941.854-2.564.722-3.375-.249-.727-.793-.793-2.087-.185-2.966.11-.163.249-.302.387-.44l.11-.111q1.087-1.106 2.195-2.193l.18.18q.425.428.855.853-.488.497-.984.986c-.5.497-1.002.993-1.484 1.509-.353.374-.233 1.01.14 1.325.221.206.55.253.837.187.274-.08.48-.284.679-.48l.085-.084q.57-.577 1.145-1.152l1.26-1.268q-1.033-1.035-2.069-2.068a484 484 0 0 1-3.098-3.107c-.871-.877-.862-2.447.009-3.321M6.782 7c-.258.358-.245.91.094 1.212.508.53 1.029 1.049 1.55 1.566q.591.588 1.176 1.182c.257-.242.506-.493.755-.744q.297-.303.602-.6l-.178-.178a278 278 0 0 0-2.54-2.545 1 1 0 0 0-.535-.277.94.94 0 0 0-.924.385m6.249 2.616q1.369-1.38 2.752-2.744a1 1 0 0 1 .74-.27.96.96 0 0 1 .677.374c.197.27.253.645.122.956-.054.133-.154.238-.253.34l-.03.034q-.68.709-1.383 1.394c-.422.417-.843.833-1.254 1.26a38 38 0 0 1-.92-.9l-.121-.122q-.508.522-1.029 1.033c1.233 1.244 2.473 2.48 3.713 3.717l.827.824c.248.237.496.521.53.878a.96.96 0 0 1-.33.77c-.338.294-.91.337-1.24.008-.698-.66-1.373-1.345-2.048-2.029q-.373-.378-.746-.754.315-.31.626-.625l.396-.397q-.368-.36-.73-.725l-.306-.307-.511.513q-.258.255-.512.512c-.438-.45-.888-.888-1.339-1.326l-.024-.024q1.2-1.19 2.393-2.39" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#538BE8" d="M5.802 5.89c.687-.754 1.875-.954 2.79-.523.247.116.472.274.662.469q1.383 1.356 2.74 2.736c.446-.43.881-.87 1.317-1.31a68 68 0 0 1 1.548-1.53c.924-.858 2.531-.76 3.361.183.842.87.849 2.4.009 3.275a367 367 0 0 1-2.8 2.808q.566.574 1.14 1.143.848.838 1.677 1.696c.866.902.797 2.494-.113 3.34-.77.781-2.09.897-3.003.305-.2-.122-.364-.288-.528-.453l-.124-.123q-.711-.706-1.416-1.418-.526-.528-1.053-1.055c-.416.402-.825.813-1.233 1.223-.549.55-1.096 1.1-1.661 1.634-.941.854-2.564.722-3.375-.249-.727-.793-.793-2.087-.185-2.966.11-.163.249-.302.387-.44l.11-.111q1.087-1.106 2.195-2.193l.18.18q.425.428.855.853-.488.497-.984.986c-.5.497-1.002.993-1.484 1.509-.353.374-.233 1.01.14 1.325.221.206.55.253.837.187.274-.08.48-.284.679-.48l.085-.084q.57-.577 1.145-1.152l1.26-1.268q-1.033-1.035-2.069-2.068a484 484 0 0 1-3.098-3.107c-.871-.877-.862-2.447.009-3.321M6.782 7c-.258.358-.245.91.094 1.212.508.53 1.029 1.049 1.55 1.566q.591.588 1.176 1.182c.257-.242.506-.493.755-.744q.297-.303.602-.6l-.178-.178a278 278 0 0 0-2.54-2.545 1 1 0 0 0-.535-.277.94.94 0 0 0-.924.385m6.249 2.616q1.369-1.38 2.752-2.744a1 1 0 0 1 .74-.27.96.96 0 0 1 .677.374c.197.27.253.645.122.956-.054.133-.154.238-.253.34l-.03.034q-.68.709-1.383 1.394c-.422.417-.843.833-1.254 1.26a38 38 0 0 1-.92-.9l-.121-.122q-.508.522-1.029 1.033c1.233 1.244 2.473 2.48 3.713 3.717l.827.824c.248.237.496.521.53.878a.96.96 0 0 1-.33.77c-.338.294-.91.337-1.24.008-.698-.66-1.373-1.345-2.048-2.029q-.373-.378-.746-.754.315-.31.626-.625l.396-.397q-.368-.36-.73-.725l-.306-.307-.511.513q-.258.255-.512.512c-.438-.45-.888-.888-1.339-1.326l-.024-.024q1.2-1.19 2.393-2.39" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconGxc.displayName = 'Gxc';
IconGxc.variants = 'brandedmono';

export default IconGxc;
