import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenRLB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m11.212 7.517.098.009q.373.033 0 .021l-.463.004c-.278.009-.548.013-.827.013l-.428.009h-.069c-.107 0-.197 0-.3.081a5.6 5.6 0 0 0-1.509 1.843c-.017.03-.055.064-.094.069q-.998.127-1.997.257a.01.01 0 0 0 .004.008h.005q.82.093 1.641.197.086.011.171.009l.009.008a.02.02 0 0 1 0 .018 5.55 5.55 0 0 0 0 3.874v.008l-.004.005q-.91.12-1.822.236l.005.008 2.001.236a.09.09 0 0 1 .064.047 5.6 5.6 0 0 0 1.556 1.886c.034.03.094.06.141.06q1.038.016 2.075.034a7 7 0 0 1-.609.043l-.128.017-.103.013-.18.013q-.529.036-1.05.085l-4.813.455-.206.021c-.146.017-.313.039-.467.043a.1.1 0 0 0-.047.017q-.027.018.004.017h.206c.244 0 .488.013.728.03l.382.022q3.454.138 6.909.3l.252.017c.193.013.386.026.583.013h.026a5.66 5.66 0 0 0 3.724-1.547 5.53 5.53 0 0 0 1.749-4.08 5.53 5.53 0 0 0-3.163-4.938 5.8 5.8 0 0 0-2.803-.565q-1.116.06-2.233.103c-.15.008-.296.021-.437.017l-.557.025q-.615.035-1.23.056-1.72.086-3.442.159-.361.02-.677.021c-.034 0-.043.009-.013.03l.035.009a4 4 0 0 1 .45.03l.3.03q2.32.225 4.641.458c.343.035.703.06 1.084.086.095 0 .185.009.279.021l.291.022.258.021zM14.884 12a2.1 2.1 0 0 1-2.117 2.083A2.1 2.1 0 0 1 10.65 12a2.1 2.1 0 0 1 2.117-2.087A2.1 2.1 0 0 1 14.884 12"
          />
        </>
      ) : (
        <>
          <path
            fill="#FFA101"
            d="m11.212 7.517.098.009q.373.033 0 .021l-.463.004c-.278.009-.548.013-.827.013l-.428.009h-.069c-.107 0-.197 0-.3.081a5.6 5.6 0 0 0-1.509 1.843c-.017.03-.055.064-.094.069q-.998.127-1.997.257a.01.01 0 0 0 .004.008h.005q.82.093 1.641.197.086.011.171.009l.009.008a.02.02 0 0 1 0 .018 5.55 5.55 0 0 0 0 3.874v.008l-.004.005q-.91.12-1.822.236l.005.008 2.001.236a.09.09 0 0 1 .064.047 5.6 5.6 0 0 0 1.556 1.886c.034.03.094.06.141.06q1.038.016 2.075.034a7 7 0 0 1-.609.043l-.128.017-.103.013-.18.013q-.529.036-1.05.085l-4.813.455-.206.021c-.146.017-.313.039-.467.043a.1.1 0 0 0-.047.017q-.027.018.004.017h.206c.244 0 .488.013.728.03l.382.022q3.454.138 6.909.3l.252.017c.193.013.386.026.583.013h.026a5.66 5.66 0 0 0 3.724-1.547 5.53 5.53 0 0 0 1.749-4.08 5.53 5.53 0 0 0-3.163-4.938 5.8 5.8 0 0 0-2.803-.565q-1.116.06-2.233.103c-.15.008-.296.021-.437.017l-.557.025q-.615.035-1.23.056-1.72.086-3.442.159-.361.02-.677.021c-.034 0-.043.009-.013.03l.035.009a4 4 0 0 1 .45.03l.3.03q2.32.225 4.641.458c.343.035.703.06 1.084.086.095 0 .185.009.279.021l.291.022.258.021zM14.884 12a2.1 2.1 0 0 1-2.117 2.083A2.1 2.1 0 0 1 10.65 12a2.1 2.1 0 0 1 2.117-2.087A2.1 2.1 0 0 1 14.884 12"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenRLB.displayName = 'RLB'