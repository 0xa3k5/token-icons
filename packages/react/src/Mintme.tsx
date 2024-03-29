
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMintme = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="#D1B000" d="M3.857 8.143h1.286v1.286H3.857zm4.286-1.727H9.43v1.243H8.143zm-3 3.87H6.43v1.285H5.143zm1.714-2.143h1.286v1.286H6.857zm-3 6h1.286v1.286H3.857zm3 2.143h1.286v1.285H6.857zM6 12.857h1.286v1.286H6zM13.715 6c-.772 0-1.423.146-2.143.446v1.208h-1.286v-.557c-.373.266-.746.634-1.054.973h.197V9H8.4a7 7 0 0 0-.565 1.714h.737V12h-.857c0 .407.042.883.12 1.286H9v.848l-.857.009c.184.42.592.921.866 1.286v-1.286h1.277v1.286H9.009c.184.244.634.857.848.857h1.286v1.131a6 6 0 0 0 2.542.583c3.377.017 6.034-2.829 6.03-6-.005-3.18-2.67-6-6-6m-5.143 4.706v-1.29h1.285v1.29z"/>
    <path fill="#181B1E" d="M18.823 12.167a2 2 0 0 1-.077.257H16.44q-.038.276.116.416a.56.56 0 0 0 .407.146c.24.004.467-.103.583-.279h1.084a1.7 1.7 0 0 1-.407.514 2.13 2.13 0 0 1-2.211.309c-.22-.115-.393-.3-.493-.527a1.3 1.3 0 0 1-.052-.789A1.82 1.82 0 0 1 16.54 10.9c.283-.125.6-.185.913-.185.283-.008.564.052.818.176.227.12.399.296.485.506.107.244.128.514.068.771m-1.808-.613a.86.86 0 0 1 .458-.128.6.6 0 0 1 .416.133c.107.098.146.312.107.441H16.72c.056-.141.154-.351.3-.446z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#181B1E" d="m14.096 11.4-.454 2.314h1.033l.754-3.857h-1.222l-1.697 2.67-.681-2.67h-1.217l-.755 3.849h1.029l.454-2.319.51 2.319h.84z"/>

    </BaseIcon>
));

IconMintme.displayName = 'Mintme';

export default IconMintme;
