
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSan = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m13.67 9.025-.25.81c-.473-.075-.916-.168-1.358-.212-.262-.024-.537.044-.636.337-.107.306-.12.624.13.86.262.244.562.437.848.643.262.2.543.374.774.598.617.624.722 1.372.473 2.182a1.54 1.54 0 0 1-.966.973 3.16 3.16 0 0 1-2.556-.305l.293-.848c.43.112.816.249 1.215.311.38.063.78 0 .98-.393a.935.935 0 0 0-.175-1.121c-.237-.244-.537-.425-.81-.624-.188-.137-.4-.25-.58-.387a1.96 1.96 0 0 1-.593-2.357 1.3 1.3 0 0 1 .916-.767 3.17 3.17 0 0 1 2.295.3m-5.038 2.862a.8.8 0 0 1-.786.792.806.806 0 0 1-.798-.81.82.82 0 0 1 .81-.78.783.783 0 0 1 .774.798m7.544-.774c.437 0 .754.313.76.755a.8.8 0 0 1-.797.81.8.8 0 0 1-.78-.797c0-.456.33-.774.81-.774z"/>
    <path fill="currentColor" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 .857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#2B77B3" d="m13.67 9.025-.25.81c-.474-.075-.917-.168-1.359-.212-.262-.024-.537.044-.636.337-.106.306-.119.624.13.86.263.244.562.437.849.643.261.2.542.374.773.598.617.624.723 1.372.474 2.182a1.54 1.54 0 0 1-.967.973 3.16 3.16 0 0 1-2.556-.305l.293-.848c.43.112.817.249 1.216.311.38.063.78 0 .979-.393a.936.936 0 0 0-.175-1.121c-.237-.244-.536-.425-.81-.624-.188-.137-.4-.25-.58-.387a1.96 1.96 0 0 1-.592-2.357 1.3 1.3 0 0 1 .916-.767 3.17 3.17 0 0 1 2.294.3M8.63 11.887a.8.8 0 0 1-.785.792.806.806 0 0 1-.798-.81.82.82 0 0 1 .81-.78.783.783 0 0 1 .773.798m7.544-.774c.437 0 .755.313.761.755a.8.8 0 0 1-.798.81.8.8 0 0 1-.78-.797c0-.456.33-.774.811-.774z"/>
    <path fill="#2B77B3" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 .857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconSan.displayName = 'San';

export default IconSan;
