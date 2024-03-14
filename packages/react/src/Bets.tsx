
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBets = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M18.776 9.086a7.45 7.45 0 0 0-6.506-3.943c-3.729 0-6.493 2.944-6.176 6.574.236 2.726 2.679 4.937 5.46 4.937 2.786 0 4.856-2.211 4.633-4.937a3.686 3.686 0 0 0-3.643-3.287 3.01 3.01 0 0 0-3.085 3.287 1.847 1.847 0 0 0 1.821 1.646c1.072 0 1.822-.844 1.543-1.646-.124-.351-.497-.514-.87-.506h-.03a.7.7 0 0 0-.163.022l-.021.004-.03.009-.095.03-.025.008-.03.013-.026.013a1 1 0 0 0-.206.137l-.064.064c-.021.026-.043.052-.056.078l-.017.021-.013.03-.017.03-.017.043v-.103.034l.021-.043c.009-.951.635-1.474 1.505-1.474a1.79 1.79 0 0 1 1.77 1.603 2.932 2.932 0 0 1-3 3.197A3.596 3.596 0 0 1 7.89 11.73c-.227-2.653 1.792-4.8 4.513-4.8 2.717 0 5.096 2.147 5.314 4.8.287 3.531-2.404 6.394-6.008 6.394a7.27 7.27 0 0 1-6.24-3.69l.064.142a6 6 0 0 1-.176-.343 6.8 6.8 0 0 1-.643-1.83 7.1 7.1 0 0 0 .952 2.888 7.2 7.2 0 0 0 2.087 2.242 7.41 7.41 0 0 0 8.726-.193 7.2 7.2 0 0 0 1.98-2.34 7.05 7.05 0 0 0 .321-5.927l-.004.008zm-7.2 1.384c.034-.03.068-.064.107-.09z"/>
        </>
      ) : (
        <>
          <path fill="url(#BETS__a)" d="M18.775 9.086a7.45 7.45 0 0 0-6.505-3.943c-3.729 0-6.493 2.944-6.176 6.574.236 2.726 2.678 4.937 5.46 4.937 2.786 0 4.856-2.211 4.633-4.937a3.686 3.686 0 0 0-3.643-3.287 3.01 3.01 0 0 0-3.086 3.287 1.847 1.847 0 0 0 1.822 1.646c1.071 0 1.821-.844 1.542-1.646-.124-.351-.497-.514-.87-.506h-.03a.7.7 0 0 0-.162.022l-.022.004-.03.009-.094.03-.026.008-.03.013-.026.013a1 1 0 0 0-.205.137l-.065.064q-.034.039-.055.078l-.017.021-.013.03-.017.03-.018.043v-.103.034l.022-.043c.008-.951.634-1.474 1.504-1.474a1.79 1.79 0 0 1 1.77 1.603 2.932 2.932 0 0 1-3 3.197A3.596 3.596 0 0 1 7.89 11.73c-.228-2.653 1.791-4.8 4.512-4.8 2.718 0 5.096 2.147 5.315 4.8.287 3.531-2.405 6.394-6.009 6.394a7.27 7.27 0 0 1-6.24-3.69l.064.142a6 6 0 0 1-.175-.343 6.8 6.8 0 0 1-.643-1.83 7.1 7.1 0 0 0 .951 2.888 7.2 7.2 0 0 0 2.087 2.242 7.41 7.41 0 0 0 8.726-.193 7.2 7.2 0 0 0 1.98-2.34 7.05 7.05 0 0 0 .322-5.927l-.005.008zm-7.2 1.384c.035-.03.069-.064.107-.09z"/><defs><linearGradient id="BETS__a" x1="4.714" x2="19.251" y1="5.143" y2="5.314" gradientUnits="userSpaceOnUse"><stop stopColor="#6458ED"/><stop offset=".49" stopColor="#4E5CF4"/><stop offset="1" stopColor="#018EDD"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconBets.displayName = 'Bets';

export default IconBets;