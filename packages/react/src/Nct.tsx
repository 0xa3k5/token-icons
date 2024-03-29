
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNct = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6.55 8.572h7.324c1.066 0 1.983 1.088 1.983 2.142 0 1.055-.917 2.143-1.983 2.143H9.822c-.304 0-.575.129-.575.429s.271.428.575.428h3.856c1.674 0 3.036-1.345 3.036-3 0-1.654-1.362-3-3.036-3H6.551c-.304 0-.551.129-.551.429s.247.428.55.428"/>
    <path fill="currentColor" d="M13.493 5.571h-2.661c-.293 0-.546.142-.546.427s.253.43.546.43h2.661c2.373 0 4.507 2.064 4.507 4.38C18 13.125 15.866 15 13.493 15h-6.76c-.293 0-.53.143-.53.428s.237.429.53.429h6.76c2.958 0 5.364-2.161 5.364-5.049 0-2.887-2.406-5.237-5.364-5.237"/>
    <path fill="currentColor" d="M10.286 10.714c0-.285-.186-.428-.48-.428H8.634c-.293 0-.49.143-.49.428 0 .287.213.429.407.429h1.197c.372 0 .539-.125.539-.429m-1.384 6.857h-3.23c-.292 0-.53.143-.53.429 0 .285.238.428.53.428h3.229c.292 0 .527-.143.527-.428s-.235-.429-.527-.429"/>

        </>
      ) : (
        <>
          
    <path fill="#8500FF" d="M6.55 8.572h7.324c1.066 0 1.983 1.088 1.983 2.142 0 1.055-.917 2.143-1.983 2.143H9.822c-.304 0-.575.129-.575.429s.271.428.575.428h3.856c1.674 0 3.036-1.345 3.036-3 0-1.654-1.362-3-3.036-3H6.551c-.304 0-.551.129-.551.429s.247.428.55.428"/>
    <path fill="#8500FF" d="M13.494 5.571h-2.662c-.292 0-.546.142-.546.427s.254.43.546.43h2.662c2.372 0 4.506 2.064 4.506 4.38C18 13.125 15.866 15 13.494 15h-6.76c-.293 0-.53.143-.53.428s.237.429.53.429h6.76c2.957 0 5.364-2.161 5.364-5.049 0-2.887-2.407-5.237-5.364-5.237"/>
    <path fill="#fff" d="M10.285 10.714c0-.285-.186-.428-.479-.428H8.632c-.292 0-.49.143-.49.428 0 .287.213.429.407.429h1.198c.371 0 .538-.125.538-.429m-1.384 6.857H5.673c-.293 0-.53.143-.53.429 0 .285.237.428.53.428H8.9c.292 0 .527-.143.527-.428s-.235-.429-.527-.429"/>

        </>
      )}
    </BaseIcon>
));

IconNct.displayName = 'Nct';

export default IconNct;
