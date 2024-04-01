import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconQANX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.928 14.884a3.57 3.57 0 0 1-1.924.544A3.315 3.315 0 0 1 2.571 12c0-2.02 1.475-3.43 3.429-3.43S9.428 9.981 9.428 12c0 .917-.308 1.714-.827 2.297zM8.571 12c0-1.406-1.178-2.572-2.571-2.572-1.389 0-2.572 1.17-2.572 2.572 0 1.414 1.179 2.571 2.572 2.571 1.727 0 2.571-1.423 2.571-2.571m4.483-3.429-.793.532.352.745 1.161 3.009h-2.546l-.39.857h3.283l.69 1.714h1.046zM21 15.428h-1l-3.287-5.297v5.297h-.857V8.571h1.007l3.279 5.349V8.57H21z"
          />
          <path
            fill="currentColor"
            d="M6.793 12.857H5.57l2.473 2.571h1.213zm6.265-4.286h-1.02l-2.742 6.857h1.045z"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M7.928 14.884a3.57 3.57 0 0 1-1.924.544A3.315 3.315 0 0 1 2.571 12c0-2.02 1.475-3.43 3.429-3.43S9.428 9.981 9.428 12c0 .917-.308 1.714-.827 2.297zM8.571 12c0-1.406-1.178-2.572-2.571-2.572-1.389 0-2.572 1.17-2.572 2.572 0 1.414 1.179 2.571 2.572 2.571 1.727 0 2.571-1.423 2.571-2.571m4.483-3.429-.793.532.352.745 1.161 3.009h-2.546l-.39.857h3.283l.69 1.714h1.046zM21 15.428h-1l-3.287-5.297v5.297h-.857V8.571h1.007l3.279 5.349V8.57H21z"
          />
          <path
            fill="#00ADEE"
            d="M6.793 12.857H5.57l2.473 2.571h1.213zm6.265-4.286h-1.02l-2.742 6.857h1.045z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconQANX.displayName = 'QANX'