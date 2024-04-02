import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenTREEB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.457 18.71v.002h-.004zm9.948-7.955c.442-.89.68-2.024.175-3.182-1.084-2.499-3.587-2.456-5.271-2.173l-7.02 1.191 2.168 12.12 4.98-.87-.703-3.62.219-.06 2.087 3.376 5.451-1.033-3.155-4.26a3.3 3.3 0 0 1-.925.489l-3.578.707c-1.299.317-3.643-.6-3.643-2.884 0-2.289 1.59-3.18 2.387-3.343l3.24-.557c.866-.146 2.923-.043 3.523 1.877.274.874.257 1.614.065 2.222m-.09-1.01a2.994 2.994 0 0 1-3 2.984 2.99 2.99 0 0 1-3-2.983 2.99 2.99 0 0 1 3-2.979 2.99 2.99 0 0 1 3 2.979"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#98E5B7"
            d="M7.457 18.712 5.288 6.592l7.02-1.192c1.684-.283 4.187-.326 5.272 2.173.874 2.001-.476 3.934-1.26 4.65l3.17 4.281-5.45 1.033-2.088-3.377-.218.06.703 3.621-4.985.87z"
          />
          <path
            fill="#000"
            d="M15.201 5.323A3.69 3.69 0 0 1 17.7 7.526a3.7 3.7 0 0 1-.009 2.901 5.4 5.4 0 0 1-1.2 1.813l3.223 4.346-5.734 1.088-2.083-3.373-.017.005.707 3.634-5.237.917L5.143 6.49l.128-.022 7.016-1.191c.848-.142 1.916-.227 2.914.047m-.064.244c-.947-.257-1.972-.184-2.807-.043l-6.892 1.17 2.117 11.872 4.732-.827-.703-3.609.429-.116 2.091 3.386 5.169-.986-3.125-4.208.086-.077c.377-.343.9-.995 1.217-1.796.322-.802.433-1.749.017-2.709a3.43 3.43 0 0 0-2.331-2.057"
          />
          <path
            fill="#000"
            d="m10.578 7.213 3.24-.557c.865-.146 2.922-.043 3.522 1.877.75 2.396-.681 3.784-1.928 4.2l-3.579.707c-1.298.317-3.643-.6-3.643-2.884 0-2.289 1.59-3.18 2.388-3.343m3.737 5.516c1.654 0 3-1.337 3-2.983a2.99 2.99 0 0 0-3-2.979c-1.659 0-3 1.333-3 2.979a2.99 2.99 0 0 0 3 2.983"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenTREEB.displayName = 'TREEB'