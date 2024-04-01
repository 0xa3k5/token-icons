import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconVELO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.54 18c-.67-.016-1.26-.238-1.74-.716-1.77-1.784-3.558-3.552-5.345-5.336-1.325-1.322-.798-3.551.989-4.109.941-.286 1.803-.08 2.506.622 1.771 1.751 3.51 3.503 5.266 5.255.479.478.75 1.051.782 1.736.048 1.13-.766 2.198-1.883 2.453-.176.047-.383.063-.575.095m4.404-10.285a2.333 2.333 0 0 1 2.342 2.341 2.36 2.36 0 0 1-2.343 2.373c-1.292.015-2.357-1.065-2.372-2.357a2.37 2.37 0 0 1 2.373-2.357"
          />
        </>
      ) : (
        <>
          <path
            fill="#DB2264"
            d="M12.54 18c-.67-.016-1.26-.238-1.739-.716-1.771-1.784-3.559-3.552-5.346-5.336-1.324-1.322-.798-3.551.99-4.109.94-.286 1.803-.08 2.505.622 1.772 1.751 3.511 3.503 5.267 5.255.478.478.75 1.051.781 1.736.048 1.13-.766 2.198-1.883 2.453-.176.047-.383.063-.575.095m4.404-10.285a2.333 2.333 0 0 1 2.342 2.341 2.36 2.36 0 0 1-2.342 2.373c-1.293.015-2.357-1.065-2.372-2.357a2.37 2.37 0 0 1 2.372-2.357"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconVELO.displayName = 'VELO'