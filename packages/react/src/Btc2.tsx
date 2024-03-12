
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBtc2 = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M10.985 6.386a.3.3 0 0 0 .12 0q.024-.007.03-.039l.282-1.611c0-.017.013-.026.03-.022l1.573.317q.012 0 .017.013l.009.022-.013.128q-.132.792-.27 1.582l.013.008.917.215a.08.08 0 0 0 .069-.013.1.1 0 0 0 .038-.06l.279-1.62a.1.1 0 0 1 .025-.043.06.06 0 0 1 .043-.009c.498.086 1.012.206 1.53.309q.045.012.039.056a66 66 0 0 1-.283 1.632c-.021.116.009.15.107.193a2.7 2.7 0 0 1 1.543 1.702c.077.287.06.548.056.848a2.37 2.37 0 0 1-1.089 1.843c-.374.25-.789.432-1.226.54-.84.201-1.812.291-2.665.124-.159-.034-.313-.017-.467-.03a2.61 2.61 0 0 0-2.015.69 3.57 3.57 0 0 0-.93 1.672v.043q.014.027.035.034l.115.034c1.175.223 2.64.626 3.72.703 1.076.073 1.856-.994 1.487-2.087a.04.04 0 0 1 .005-.03l.013-.013.012-.004c.708-.043 1.17-.214 1.8-.493.086-.043.146.039.215.12.364.465.545 1.047.51 1.637a2.68 2.68 0 0 1-1.856 2.503q-.43.135-.643.141-.216.009-.428.043c-.022 0-.043.013-.06.03a.12.12 0 0 0-.035.064l-.283 1.672c0 .017-.012.03-.025.043a.06.06 0 0 1-.052.008l-1.512-.3a.04.04 0 0 1-.03-.013.05.05 0 0 1-.01-.03l.014-.158q.13-.784.257-1.569l-.004-.017-.013-.013a.04.04 0 0 0-.017-.008l-.887-.15a.1.1 0 0 0-.082.017.12.12 0 0 0-.043.077l-.265 1.556q-.015.091-.1.073l-1.5-.3a.06.06 0 0 1-.039-.026.06.06 0 0 1-.003-.047l.27-1.569a.1.1 0 0 0-.008-.055.07.07 0 0 0-.048-.035l-2.327-.463c-.06-.008-.085-.055-.068-.128.115-.613.278-1.217.475-1.805a9.3 9.3 0 0 1 .78-1.73c.609-1.03 1.74-1.505 2.829-1.608.244-.026.48-.056.729-.039.544.043 1.075.099 1.62.167q.153.015.308 0c.75-.05 1.256-.685 1.114-1.482-.133-.746-.844-.9-1.517-1.059a23 23 0 0 0-1.225-.257q-.105-.019-.125.086l-.253 1.487a.11.11 0 0 1-.066.084.1.1 0 0 1-.037.006c-.685-.03-1.37.043-2.022.308q-.212.087-.425.167l-.012-.004-.005-.008v-.013l.412-2.353c.043-.227-.043-.399-.24-.514-.206-.125-.515-.15-.759-.202a.05.05 0 0 1-.03-.025.06.06 0 0 1-.008-.04l.235-1.37v-.013L8.65 5.9a.02.02 0 0 1 .017-.004q1.158.24 2.314.489z"/>
        </>
      ) : (
        <>
          <path fill="#F6931A" d="M10.985 6.386a.3.3 0 0 0 .12 0q.024-.007.03-.039l.282-1.611c0-.017.013-.026.03-.022l1.573.317q.012 0 .017.013l.009.022-.013.128q-.132.792-.27 1.582l.013.008.917.215a.08.08 0 0 0 .069-.013.1.1 0 0 0 .038-.06l.279-1.62a.1.1 0 0 1 .025-.043.06.06 0 0 1 .043-.009c.498.086 1.012.206 1.53.309q.045.012.039.056a66 66 0 0 1-.283 1.632c-.021.116.009.15.107.193a2.7 2.7 0 0 1 1.543 1.702c.077.287.06.548.056.848a2.37 2.37 0 0 1-1.089 1.843c-.374.25-.789.432-1.226.54-.84.201-1.812.291-2.665.124-.159-.034-.313-.017-.467-.03a2.61 2.61 0 0 0-2.015.69 3.57 3.57 0 0 0-.93 1.672v.043q.014.027.035.034l.115.034c1.175.223 2.64.626 3.72.703 1.076.073 1.856-.994 1.487-2.087a.04.04 0 0 1 .005-.03l.013-.013.012-.004c.708-.043 1.17-.214 1.8-.493.086-.043.146.039.215.12.364.465.545 1.047.51 1.637a2.68 2.68 0 0 1-1.856 2.503q-.43.135-.643.141-.216.009-.428.043c-.022 0-.043.013-.06.03a.12.12 0 0 0-.035.064l-.283 1.672c0 .017-.012.03-.025.043a.06.06 0 0 1-.052.008l-1.512-.3a.04.04 0 0 1-.03-.013.05.05 0 0 1-.01-.03l.014-.158q.13-.784.257-1.569l-.004-.017-.013-.013a.04.04 0 0 0-.017-.008l-.887-.15a.1.1 0 0 0-.082.017.12.12 0 0 0-.043.077l-.265 1.556q-.015.091-.1.073l-1.5-.3a.06.06 0 0 1-.039-.026.06.06 0 0 1-.003-.047l.27-1.569a.1.1 0 0 0-.008-.055.07.07 0 0 0-.048-.035l-2.327-.463c-.06-.008-.085-.055-.068-.128.115-.613.278-1.217.475-1.805a9.3 9.3 0 0 1 .78-1.73c.609-1.03 1.74-1.505 2.829-1.608.244-.026.48-.056.729-.039.544.043 1.075.099 1.62.167q.153.015.308 0c.75-.05 1.256-.685 1.114-1.482-.133-.746-.844-.9-1.517-1.059a23 23 0 0 0-1.225-.257q-.105-.019-.125.086l-.253 1.487a.11.11 0 0 1-.066.084.1.1 0 0 1-.037.006c-.685-.03-1.37.043-2.022.308q-.212.087-.425.167l-.012-.004-.005-.008v-.013l.412-2.353c.043-.227-.043-.399-.24-.514-.206-.125-.515-.15-.759-.202a.05.05 0 0 1-.03-.025.06.06 0 0 1-.008-.04l.235-1.37v-.013L8.65 5.9a.02.02 0 0 1 .017-.004q1.158.24 2.314.489z"/>
        </>
      )}
    </BaseIcon>
));

IconBtc2.displayName = 'Btc2';
IconBtc2.variants = 'brandedmono';

export default IconBtc2;
