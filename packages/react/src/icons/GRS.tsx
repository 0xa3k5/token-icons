import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconGRS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M15.277 18.026a6.857 6.857 0 1 1 .735-.464c-.254-.937-1.162-1.337-2.062-1.396-1.11-.066-2.22-.11-3.33-.193h-.013c-.467-.099-.608-.386-.364-.793.116-.197.296-.36.459-.531.038-.034.141-.022.21-.004.771.184 1.538.192 2.288-.073.917-.326 1.547-.947 1.779-1.912.173-.712.02-1.304-.3-1.946h1.046c.042-.004.107-.03.12-.055l.347-1.196s-.431.406-.742.394c-.31.003-1.371 0-1.371 0l.878-.994c.61-.659 1.43-1.725.725-2.597-.284-.283-.707-.424-.707-.424s-.343-.022-.51 0c-.59.085-.964.583-1.038 1.148-.025.103.101.133.155.047.148-.207.21-.416.45-.556a.88.88 0 0 1 1.075.153c.58.629.04 1.627-.437 2.143-.105.125-.695.945-.878.84a3.6 3.6 0 0 0-1.727-.454c-1.201-.076-2.463.568-2.991 1.672-.379.791-.36 1.783.083 2.544.26.449.668.78 1.117 1.027-.316.309-.65.601-.948.928a1.46 1.46 0 0 0-.386.88c-.038.486.44.746.772 1.01l-.26.276q-.26.277-.525.547a.2.2 0 0 1-.128.017c.213.124.715.33.71.327.18-.371.413-.692.674-1.012.03-.043.111-.06.172-.06 1.239.081 2.481.136 3.72.227.532.016 1.202.48 1.202.48"
      />
      <path
        fill="currentColor"
        d="M12.99 13.933c-.396.373-1.028.468-1.523.25-.698-.308-1.001-1.163-1.078-1.866-.137-.918-.06-2.218.951-2.605 1.242-.485 2.027.902 2.117 1.941.077.73.121 1.727-.466 2.28"
      />
    </BaseIcon>
  ),
)

IconGRS.displayName = 'GRS'