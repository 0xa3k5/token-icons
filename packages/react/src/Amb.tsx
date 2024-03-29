
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAmb = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M16.38 11.554a.214.214 0 0 1-.21-.188 4.286 4.286 0 0 0-3.621-3.673.22.22 0 0 1-.184-.244c.017-.116.124-.206.235-.189 2.045.279 3.686 1.941 3.986 4.054a.223.223 0 0 1-.18.249c0-.009-.009-.009-.026-.009M15.283 15.3a.2.2 0 0 1-.141-.051.22.22 0 0 1-.018-.309c.6-.681.97-1.517 1.072-2.421.017-.12.124-.21.236-.189.111.017.201.124.184.24a4.87 4.87 0 0 1-1.179 2.67.22.22 0 0 1-.154.06m-2.7 1.466a.214.214 0 0 1-.21-.189c-.017-.116.073-.236.184-.244a4.2 4.2 0 0 0 1.959-.814.21.21 0 0 1 .239-.016.2.2 0 0 1 .06.059c.065.098.048.235-.046.304a4.6 4.6 0 0 1-2.16.908q-.013-.01-.026-.008m-1.166 0h-.025a4.71 4.71 0 0 1-4.008-4.196.22.22 0 0 1 .185-.24c.111-.021.214.069.235.189a4.286 4.286 0 0 0 3.64 3.814c.11.021.2.129.183.244a.214.214 0 0 1-.214.189zm-3.805-5.212h-.035c-.111-.017-.193-.128-.184-.248a4.8 4.8 0 0 1 1.221-2.589.2.2 0 0 1 .296-.008.22.22 0 0 1 .009.304 4.33 4.33 0 0 0-1.106 2.357.2.2 0 0 1-.201.184m1.812-3.051a.22.22 0 0 1-.17-.09.223.223 0 0 1 .046-.309c.613-.45 1.33-.74 2.083-.844a.21.21 0 0 1 .236.189c.017.12-.073.235-.184.244a4.04 4.04 0 0 0-1.886.771.2.2 0 0 1-.129.039z"/>
    <path fill="currentColor" d="M12 15.887c-2.07 0-3.75-1.744-3.75-3.874 0-2.139 1.689-3.87 3.75-3.87 2.07 0 3.755 1.74 3.755 3.87 0 2.139-1.685 3.874-3.755 3.874m0-7.316a3.394 3.394 0 0 0-3.334 3.442c0 1.894 1.5 3.441 3.334 3.441 1.839 0 3.335-1.543 3.335-3.441-.01-1.894-1.5-3.442-3.335-3.442m-4.406 4.385a.47.47 0 0 0 .463-.472.47.47 0 0 0-.463-.484.466.466 0 0 0-.458.476c0 .261.206.475.458.475zm8.83-1.085a.47.47 0 0 0 .462-.475.47.47 0 0 0-.463-.48.47.47 0 0 0-.463.48c0 .257.206.471.463.471z"/>
    <path fill="currentColor" d="M13.149 11.023c0-.643-.506-1.166-1.123-1.166a1.15 1.15 0 0 0-1.123 1.166c0 .407.197.763.506.977l.017-.086a.34.34 0 0 1 .317-.278h.57c.154 0 .291.128.317.278l.013.086c.3-.214.506-.57.506-.977"/>
    <path fill="currentColor" d="m11.362 11.953-.326 1.924c-.03.146.086.266.24.266h1.5c.163 0 .27-.12.244-.266l-.334-1.928a1.26 1.26 0 0 1-1.324.004"/>
    <path fill="currentColor" d="M12.33 11.584h-.608a.355.355 0 0 0-.343.296l-.013.086a1.14 1.14 0 0 0 1.324 0l-.021-.086a.356.356 0 0 0-.339-.3z"/>
    <path fill="currentColor" d="M20.173 12.407a.39.39 0 0 1-.343-.206c-.03-.042-2.515-4.487-7.83-4.487s-7.8 4.445-7.826 4.487a.395.395 0 0 1-.54.163.42.42 0 0 1-.158-.557c.107-.197 2.717-4.95 8.524-4.95 5.799 0 8.409 4.753 8.525 4.95a.42.42 0 0 1-.16.557.5.5 0 0 1-.192.043"/>
    <path fill="currentColor" d="M12 17.143c-5.798 0-8.408-4.753-8.524-4.95a.42.42 0 0 1 .158-.557.395.395 0 0 1 .54.163c.026.043 2.508 4.487 7.826 4.487 5.319 0 7.8-4.445 7.826-4.487a.394.394 0 0 1 .54-.163.42.42 0 0 1 .159.557c-.116.206-2.726 4.95-8.525 4.95"/>

        </>
      ) : (
        <>
          
    <path fill="url(#AMB__a)" d="M16.38 11.554a.214.214 0 0 1-.21-.188 4.286 4.286 0 0 0-3.621-3.673.22.22 0 0 1-.184-.244c.017-.116.124-.206.235-.189 2.045.279 3.686 1.941 3.986 4.054a.223.223 0 0 1-.18.249c0-.009-.009-.009-.026-.009M15.283 15.3a.2.2 0 0 1-.141-.051.22.22 0 0 1-.018-.309c.6-.681.97-1.517 1.072-2.421.017-.12.124-.21.236-.189.111.017.201.124.184.24a4.87 4.87 0 0 1-1.179 2.67.22.22 0 0 1-.154.06m-2.7 1.466a.214.214 0 0 1-.21-.189c-.017-.116.073-.236.184-.244a4.2 4.2 0 0 0 1.959-.814.21.21 0 0 1 .239-.016.2.2 0 0 1 .06.059c.065.098.048.235-.046.304a4.6 4.6 0 0 1-2.16.908q-.013-.01-.026-.008m-1.166 0h-.025a4.71 4.71 0 0 1-4.008-4.196.22.22 0 0 1 .185-.24c.111-.021.214.069.235.189a4.286 4.286 0 0 0 3.64 3.814c.11.021.2.129.183.244a.214.214 0 0 1-.214.189zm-3.805-5.212h-.035c-.111-.017-.193-.128-.184-.248a4.8 4.8 0 0 1 1.221-2.589.2.2 0 0 1 .296-.008.22.22 0 0 1 .009.304 4.33 4.33 0 0 0-1.106 2.357.2.2 0 0 1-.201.184m1.812-3.051a.22.22 0 0 1-.17-.09.223.223 0 0 1 .046-.309c.613-.45 1.33-.74 2.083-.844a.21.21 0 0 1 .236.189c.017.12-.073.235-.184.244a4.04 4.04 0 0 0-1.886.771.2.2 0 0 1-.129.039z"/>
    <path fill="url(#AMB__b)" d="M12 15.887c-2.07 0-3.75-1.744-3.75-3.874 0-2.139 1.689-3.87 3.75-3.87 2.07 0 3.755 1.74 3.755 3.87 0 2.139-1.685 3.874-3.755 3.874m0-7.316a3.394 3.394 0 0 0-3.334 3.442c0 1.894 1.5 3.441 3.334 3.441 1.839 0 3.335-1.543 3.335-3.441-.01-1.894-1.5-3.442-3.335-3.442m-4.406 4.385a.47.47 0 0 0 .463-.472.47.47 0 0 0-.463-.484.466.466 0 0 0-.458.476c0 .261.206.475.458.475zm8.83-1.085a.47.47 0 0 0 .462-.475.47.47 0 0 0-.463-.48.47.47 0 0 0-.463.48c0 .257.206.471.463.471z"/>
    <path fill="url(#AMB__c)" d="M13.149 11.023c0-.643-.506-1.166-1.123-1.166a1.15 1.15 0 0 0-1.123 1.166c0 .407.197.763.506.977l.017-.086a.34.34 0 0 1 .317-.278h.57c.154 0 .291.128.317.278l.013.086c.3-.214.506-.57.506-.977"/>
    <path fill="url(#AMB__d)" d="m11.362 11.953-.326 1.924c-.03.146.086.266.24.266h1.5c.163 0 .27-.12.244-.266l-.334-1.928a1.26 1.26 0 0 1-1.324.004"/>
    <path fill="url(#AMB__e)" d="M12.33 11.584h-.608a.355.355 0 0 0-.343.296l-.013.086a1.14 1.14 0 0 0 1.324 0l-.021-.086a.356.356 0 0 0-.339-.3z"/>
    <path fill="url(#AMB__f)" d="M20.173 12.407a.39.39 0 0 1-.343-.206c-.03-.042-2.515-4.487-7.83-4.487s-7.8 4.445-7.826 4.487a.395.395 0 0 1-.54.163.42.42 0 0 1-.158-.557c.107-.197 2.717-4.95 8.524-4.95 5.799 0 8.409 4.753 8.525 4.95a.42.42 0 0 1-.16.557.5.5 0 0 1-.192.043"/>
    <path fill="url(#AMB__g)" d="M12 17.143c-5.798 0-8.408-4.753-8.524-4.95a.42.42 0 0 1 .158-.557.395.395 0 0 1 .54.163c.026.043 2.508 4.487 7.826 4.487 5.319 0 7.8-4.445 7.826-4.487a.394.394 0 0 1 .54-.163.42.42 0 0 1 .159.557c-.116.206-2.726 4.95-8.525 4.95"/>
    <defs>
        <linearGradient id="AMB__a" x1="3.428" x2="20.573" y1="12" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22B5FF"/>
            <stop offset="1" stopColor="#5810C8"/>
        </linearGradient>
        <linearGradient id="AMB__b" x1="3.428" x2="20.573" y1="12" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22B5FF"/>
            <stop offset="1" stopColor="#5810C8"/>
        </linearGradient>
        <linearGradient id="AMB__c" x1="3.428" x2="20.573" y1="12" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22B5FF"/>
            <stop offset="1" stopColor="#5810C8"/>
        </linearGradient>
        <linearGradient id="AMB__d" x1="3.428" x2="20.573" y1="12" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22B5FF"/>
            <stop offset="1" stopColor="#5810C8"/>
        </linearGradient>
        <linearGradient id="AMB__e" x1="3.428" x2="20.573" y1="12" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22B5FF"/>
            <stop offset="1" stopColor="#5810C8"/>
        </linearGradient>
        <linearGradient id="AMB__f" x1="3.428" x2="20.573" y1="12" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22B5FF"/>
            <stop offset="1" stopColor="#5810C8"/>
        </linearGradient>
        <linearGradient id="AMB__g" x1="3.428" x2="20.573" y1="12" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22B5FF"/>
            <stop offset="1" stopColor="#5810C8"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconAmb.displayName = 'Amb';

export default IconAmb;
