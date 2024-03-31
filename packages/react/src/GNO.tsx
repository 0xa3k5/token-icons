import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconGNO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m17.734 8.572.13.205a6.5 6.5 0 0 1 .993 3.454c.007 1.745-.71 3.422-1.996 4.664-1.284 1.242-3.033 1.947-4.861 1.962h-.013c-3.775 0-6.857-2.992-6.844-6.651a6.46 6.46 0 0 1 1.005-3.453l.118-.188.627.605a2.3 2.3 0 0 0-.294.561 2.44 2.44 0 0 0 .092 1.939 2.63 2.63 0 0 0 1.495 1.316c.39.131.803.174 1.211.124.406-.05.796-.19 1.14-.412L12 14.12l1.671-1.62a2.67 2.67 0 0 0 2.217.256c.366-.121.7-.319.973-.579a2.43 2.43 0 0 0 .746-2.044 2.4 2.4 0 0 0-.396-1.062zm-10.07 1.34 1.965 1.895c-.242.19-.541.291-.849.287a1.44 1.44 0 0 1-.99-.401 1.32 1.32 0 0 1-.407-.952c0-.311.104-.598.28-.83m6.857 1.777 1.945-1.877c.15.219.236.48.236.755 0 .748-.627 1.352-1.398 1.352-.293 0-.555-.081-.783-.23m-2.495 1.42L6.364 7.607l.222-.225a7.3 7.3 0 0 1 2.431-1.656 7.6 7.6 0 0 1 2.924-.582h.013c2.07 0 4.062.86 5.447 2.35l.215.23zm-4.74-5.501 4.74 4.6L16.702 7.7a6.7 6.7 0 0 0-2.166-1.41 6.9 6.9 0 0 0-2.569-.504h-.013c-1.763 0-3.409.642-4.67 1.82"
          />
        </>
      ) : (
        <>
          <path
            fill="#00A6C4"
            d="m17.734 8.572.13.205a6.5 6.5 0 0 1 .993 3.454c.007 1.745-.71 3.422-1.996 4.664-1.284 1.242-3.033 1.947-4.861 1.962h-.013c-3.775 0-6.857-2.992-6.844-6.651a6.46 6.46 0 0 1 1.005-3.453l.118-.188.627.605a2.3 2.3 0 0 0-.294.561 2.44 2.44 0 0 0 .092 1.939 2.63 2.63 0 0 0 1.495 1.316c.39.131.803.174 1.211.124.406-.05.796-.19 1.14-.412L12 14.12l1.671-1.62a2.67 2.67 0 0 0 2.217.256c.366-.121.7-.319.973-.579a2.43 2.43 0 0 0 .746-2.044 2.4 2.4 0 0 0-.396-1.062zm-10.07 1.34 1.965 1.895c-.242.19-.541.291-.849.287a1.44 1.44 0 0 1-.99-.401 1.32 1.32 0 0 1-.407-.952c0-.311.104-.598.28-.83m6.857 1.777 1.945-1.877c.15.219.236.48.236.755 0 .748-.627 1.352-1.398 1.352-.293 0-.555-.081-.783-.23m-2.495 1.42L6.364 7.607l.222-.225a7.3 7.3 0 0 1 2.431-1.656 7.6 7.6 0 0 1 2.924-.582h.013c2.07 0 4.062.86 5.447 2.35l.215.23zm-4.74-5.501 4.74 4.6L16.702 7.7a6.7 6.7 0 0 0-2.166-1.41 6.9 6.9 0 0 0-2.569-.504h-.013c-1.763 0-3.409.642-4.67 1.82"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconGNO.displayName = 'GNO'