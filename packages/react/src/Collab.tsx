
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCollab = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#241D5E" d="M11.914 18.609c3.342 0 6.051-2.17 6.051-4.848s-2.709-4.847-6.051-4.847-6.051 2.17-6.051 4.847 2.709 4.848 6.05 4.848"/><path fill="#F5C249" d="M20.267 11.923c-.142-1.457-.613-5.919-.622-6.086-.008-.193-.287-.441-.287-.086 0 .253-.283 2.898-.283 4.963h-.497c-.93-2.263-3.385-3.75-6.313-3.848H11.7c-2.927.094-5.366 1.585-6.292 3.848h-.514c0-2.065-.257-4.714-.257-4.958 0-.36-.279-.112-.283.081-.009.167-.48 4.629-.621 6.086-.202.27-.313.6-.31.934.001.54.36 1.114.798 1.114.116.309.266.759.454 1.029h.712c.956 2.336 3.548 3.857 6.591 3.857s5.627-1.521 6.583-3.857h.741c.19-.27.356-.72.468-1.029.441 0 .797-.57.797-1.114 0-.334-.103-.664-.305-.934zm-8.284 6.527c-3.163 0-5.726-2.04-5.726-4.564 0-1.886 1.436-3.506 3.48-4.2l.373.767a.43.43 0 0 0 .158.193c.072.046.155.07.24.068h2.957a.43.43 0 0 0 .24-.068.43.43 0 0 0 .159-.193l.373-.763c2.04.699 3.467 2.314 3.467 4.2 0 2.52-2.563 4.56-5.722 4.56"/><path fill="#F0F3FA" d="M13.928 12.429a.63.63 0 0 0-.454.197.7.7 0 0 0-.189.48v1.645c0 .18.069.352.189.48.12.129.283.197.454.197a.63.63 0 0 0 .454-.197c.12-.128.19-.3.19-.48v-1.645a.7.7 0 0 0-.19-.48.62.62 0 0 0-.454-.197m-3.857 0a.63.63 0 0 0-.454.197.7.7 0 0 0-.189.48v1.645c0 .18.069.352.189.48.12.129.283.197.454.197a.63.63 0 0 0 .454-.197c.12-.128.189-.3.189-.48v-1.645a.7.7 0 0 0-.189-.48.62.62 0 0 0-.454-.197M12 17.143a.857.857 0 0 1-.857-.857h.278c0 .3.257.548.579.548.317 0 .578-.248.578-.548h.279a.857.857 0 0 1-.857.857"/>
    </BaseIcon>
));

IconCollab.displayName = 'Collab';
IconCollab.variants = 'branded';

export default IconCollab;
