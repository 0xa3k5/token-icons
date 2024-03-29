
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDyp = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="#EE1A20" d="M15.386 16.414a6.21 6.21 0 0 0 2.589-5.438 3.643 3.643 0 0 0-3.802-5.357A6.215 6.215 0 0 0 5.825 9.59a3.643 3.643 0 0 0 1.534 6.12c.462.475.998.873 1.586 1.179a.4.4 0 0 0-.052.416 3.429 3.429 0 0 0 6.489-.887z"/>
    <path fill="#FFFCFF" d="M18 9a3 3 0 0 1-2.785 2.991v-.857a2.143 2.143 0 1 0-1.286-.278v.947a3 3 0 0 1-1.072-.703v2.614H12V9a3 3 0 0 1 6 0m-3.9 2.863h.035v-1.415l.008.01v-1.03H15v6.43a3 3 0 0 1-5.7 1.306l.652-.677a2.143 2.143 0 0 0 4.174-.356h.009v-.06l.008-.214v-.004q.001-.13-.017-.257l-.008-.742a3.205 3.205 0 0 1-4.428.227 3.228 3.228 0 0 1-4.547-2.897C5.143 10.427 6.583 9 8.357 9v.857a2.357 2.357 0 1 0 .768 4.586 3.2 3.2 0 0 1-.553-1.972v-3.9h.857v3.973c-.028.529.127 1.05.437 1.479a2.353 2.353 0 0 0-.24-3.797v-.969a3.2 3.2 0 0 1 1.089.763V7.286h.857V12h-.004a3.18 3.18 0 0 1-1.115 2.593 2.37 2.37 0 0 0 3.69-1.907v-.026q.002-.084-.008-.167v-.617z"/>

    </BaseIcon>
));

IconDyp.displayName = 'Dyp';

export default IconDyp;
