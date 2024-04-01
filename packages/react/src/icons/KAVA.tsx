import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconKAVA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.857 10.286h.857l-1.928 4.286h-.857L12 10.286h.857l1.5 3.428zM4.286 14.572V9.429h-.857v5.143zm2.357 0L4.714 12l1.929-2.57h1.071L5.786 12l1.928 2.572zm3.313-4.286c-.943 0-1.676.514-1.727 1.286h.84c.077-.365.565-.429.887-.429.317 0 .758.15.758.591V12H9.647c-.947 0-1.504.57-1.504 1.294 0 .763.57 1.278 1.414 1.278a1.5 1.5 0 0 0 1.157-.446v.446h.858v-2.906c0-.836-.643-1.38-1.616-1.38m.758 2.361v.257c-.055.558-.428.78-1.011.81-.339.018-.634-.154-.634-.428s.201-.523.685-.557zm8.238-2.361c-.939 0-1.672.514-1.728 1.286h.845c.077-.365.565-.429.883-.429.317 0 .762.15.762.591V12h-1.071c-.951 0-1.5.57-1.5 1.294 0 .763.57 1.278 1.41 1.278a1.5 1.5 0 0 0 1.157-.446v.446h.857v-2.906c0-.836-.643-1.38-1.615-1.38m.762 2.361v.257c-.055.558-.428.78-1.011.81-.343.018-.634-.154-.634-.428s.201-.523.685-.557z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF564F"
            d="M15.857 10.286h.857l-1.928 4.286h-.857L12 10.286h.857l1.5 3.428zM4.286 14.572V9.429h-.857v5.143zm2.357 0L4.714 12l1.929-2.57h1.071L5.786 12l1.928 2.572zm3.313-4.286c-.943 0-1.676.514-1.727 1.286h.84c.077-.365.565-.429.887-.429.317 0 .758.15.758.591V12H9.647c-.947 0-1.504.57-1.504 1.294 0 .763.57 1.278 1.414 1.278a1.5 1.5 0 0 0 1.157-.446v.446h.858v-2.906c0-.836-.643-1.38-1.616-1.38m.758 2.361v.257c-.055.558-.428.78-1.011.81-.339.018-.634-.154-.634-.428s.201-.523.685-.557zm8.238-2.361c-.939 0-1.672.514-1.728 1.286h.845c.077-.365.565-.429.883-.429.317 0 .762.15.762.591V12h-1.071c-.951 0-1.5.57-1.5 1.294 0 .763.57 1.278 1.41 1.278a1.5 1.5 0 0 0 1.157-.446v.446h.857v-2.906c0-.836-.643-1.38-1.615-1.38m.762 2.361v.257c-.055.558-.428.78-1.011.81-.343.018-.634-.154-.634-.428s.201-.523.685-.557z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconKAVA.displayName = 'KAVA'