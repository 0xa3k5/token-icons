
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconRpl = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M19.286 12a7.286 7.286 0 1 1-14.572 0 7.286 7.286 0 0 1 14.572 0m-.429 0a6.857 6.857 0 0 1-11.199 5.308l-.042.038-.312-.34.004-.005-.113-.109-.02.018-.313-.34.014-.012-.1-.115-.02.019-.312-.342.044-.04A6.857 6.857 0 1 1 18.858 12M6.496 16.073a6.847 6.847 0 1 1 1.17 1.228l2.408-2.214-.313-.341-2.445 2.248-.113-.108 2.943-2.716-.313-.34-2.95 2.72-.099-.114 2.41-2.203-.312-.341zm2.908-3.91.7-.837 1.024-.255c.571-.746 2.157-2.205 3.93-2.079.138.5-.087 1.952-2.088 3.773l-.217.964-.867.789-.345-1.005a1.4 1.4 0 0 1-.64-.077l-.368.382-.375-.382.375-.346c-.043-.032-.133-.186-.145-.557zm3.729-.543a.572.572 0 1 1-.81-.81.572.572 0 0 1 .81.81" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#RPL__a)" d="M12 18.75a6.799 6.799 0 1 0 0-13.597 6.799 6.799 0 0 0 0 13.598"/>
    <path fill="#FF7534" d="M12 18.847A6.846 6.846 0 0 0 18.846 12a6.846 6.846 0 1 0-13.693 0A6.846 6.846 0 0 0 12 18.847m0-.418A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#FFD58D" d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.429a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 1 0 0 13.714" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#fff" d="m10.104 11.327-.7.837.984.369c.012.37.102.525.145.557l-.375.346.375.382.368-.382c.205.075.424.101.64.077l.345 1.005.867-.789.217-.964c2.001-1.82 2.226-3.274 2.088-3.773-1.773-.126-3.359 1.333-3.93 2.079zm.042 2.843-2.97 2.74-.314-.34 2.97-2.74zm-.952.063-2.437 2.229-.313-.342 2.438-2.229zm.88.853-2.458 2.26-.312-.34 2.457-2.26zm2.654-3.298a.572.572 0 1 0 0-1.145.572.572 0 0 0 0 1.145" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="RPL__a" x1="5.889" x2="19.285" y1="16.884" y2="7.019" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FB9533"/>
            <stop offset=".261" stopColor="#FEBA67"/>
            <stop offset=".747" stopColor="#FF9976"/>
            <stop offset="1" stopColor="#FF6350"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconRpl.displayName = 'Rpl';

export default IconRpl;
