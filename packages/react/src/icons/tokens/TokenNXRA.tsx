import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenNXRA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.357 8.036 6.288-3.75c.004 0 0 .013-.013.03l-.952 1.637-.008.008-.506.875c-1.402 2.4-1.453 2.485-1.47 2.481a1 1 0 0 0-.313.017.8.8 0 0 0-.321.172l-.043.038-1.342-.75c-1.243-.698-1.337-.75-1.32-.758m8.478-1.209-1.47-2.524c-.018-.022-.005-.022.14.068l1.317.785 1.843 1.101L18.66 8.05c0 .004-2.657 1.49-2.67 1.49a.3.3 0 0 1-.056-.042.73.73 0 0 0-.484-.184h-.128l-.035.004zm-2.05-1.933L9.07 9.484l.055.06a.8.8 0 0 1 .185.322c.017.06.021.09.026.188 0 .082 0 .129-.01.163l-.012.051 2.473 1.38zm2.907 5.374-2.478 1.355V4.877L14.94 9.49l-.043.042a.78.78 0 0 0-.214.716zm-9.549 1.646v3.515s.656-1.106 1.431-2.435l1.41-2.421-.042-.069a.75.75 0 0 1-.125-.548c.009-.035.013-.069.009-.073L5.143 8.39zm11.031-2.031 1.338-.746 1.345-.75v7.041l-1.427-2.43-1.414-2.42.039-.048a.77.77 0 0 0 .128-.617l-.009-.026zm-7.092.771a.8.8 0 0 1-.275.155l-.043.017v2.34l.065.021c.085.03.171.082.244.142l.056.05 1.234-.69 1.234-.693-2.464-1.38-.051.034zm3.33 1.342a114 114 0 0 1 2.46-1.385l.047.039a.8.8 0 0 0 .278.159l.043.017v2.34l-.043.012a.8.8 0 0 0-.278.163l-.043.039-1.23-.69zm-4.119-1.183a958 958 0 0 0-2.614 4.496q1.08-.596 2.147-1.218l-.009-.072v-.026a.76.76 0 0 1 .51-.806l.052-.017v-2.35l-.035-.008-.034-.013zm7.329.013.038-.013.039-.013c.004 0 2.635 4.504 2.631 4.509l-2.147-1.2v-.056a.776.776 0 0 0-.514-.875l-.043-.012v-2.34zm-6.309 2.888.013.056a1 1 0 0 1-.017.347.76.76 0 0 1-.189.326l-.051.056 2.717 4.585v-6.741l-2.473 1.376zm5.623.784-2.722 4.6v-6.73l2.478 1.355-.009.021a.8.8 0 0 0 .201.707l.052.052zm-8.25.695c-.733.411-1.333.75-1.329.754l6.296 3.759a811 811 0 0 0-2.944-5.032l-.086.009a.75.75 0 0 1-.557-.197l-.043-.043zm9.056-.575a.8.8 0 0 0 .248-.17c.163.085 2.657 1.486 2.666 1.49.009.01-.673.416-3.09 1.86l-2.88 1.715-.279.171-.055.03.017-.025.206-.356 1.264-2.169c1.44-2.468 1.457-2.494 1.474-2.486h.129c.12 0 .201-.017.3-.06"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#NXRA__a)"
            d="m5.357 8.036 6.287-3.75c.004 0 0 .013-.013.03l-.951 1.637-.009.008-.506.875c-1.401 2.4-1.452 2.485-1.47 2.481a1 1 0 0 0-.312.017.8.8 0 0 0-.322.172l-.043.038-1.341-.75c-1.243-.698-1.337-.75-1.32-.758m8.477-1.209-1.47-2.524c-.017-.022-.004-.022.141.068l1.316.785 1.843 1.101L18.66 8.05c0 .004-2.657 1.49-2.67 1.49a.3.3 0 0 1-.056-.042.73.73 0 0 0-.484-.184h-.129l-.034.004zm-2.049-1.933-2.717 4.59.056.06a.8.8 0 0 1 .184.322c.017.06.022.09.026.188 0 .082 0 .129-.009.163l-.012.051 2.472 1.38zm2.906 5.374-2.477 1.355V4.877L14.94 9.49l-.043.042a.78.78 0 0 0-.214.716zm-9.548 1.646v3.515s.655-1.106 1.431-2.435l1.41-2.421-.043-.069a.75.75 0 0 1-.124-.548c.008-.035.013-.069.008-.073L5.143 8.39zm11.031-2.031 1.337-.746 1.346-.75v7.041l-1.427-2.43-1.415-2.42.039-.048a.77.77 0 0 0 .129-.617l-.009-.026zm-7.093.771a.8.8 0 0 1-.274.155l-.043.017v2.34l.064.021a.8.8 0 0 1 .245.142l.055.05 1.235-.69 1.234-.693-2.464-1.38-.052.034zm3.33 1.342q1.222-.707 2.46-1.385l.047.039a.8.8 0 0 0 .279.159l.043.017v2.34l-.043.012a.8.8 0 0 0-.279.163l-.043.039-1.23-.69zm-4.118-1.183a959 959 0 0 0-2.615 4.496q1.082-.596 2.147-1.218l-.008-.072v-.026a.76.76 0 0 1 .51-.806l.051-.017v-2.35l-.034-.008-.034-.013zm7.328.013.039-.013.038-.013c.005 0 2.636 4.504 2.632 4.509l-2.147-1.2v-.056a.776.776 0 0 0-.515-.875l-.043-.012v-2.34zm-6.308 2.888.012.056a1 1 0 0 1-.017.347.76.76 0 0 1-.188.326l-.052.056 2.717 4.585v-6.741l-2.472 1.376zm5.622.784-2.721 4.6v-6.73l2.477 1.355-.008.021a.8.8 0 0 0 .201.707l.051.052zm-8.25.695c-.732.411-1.332.75-1.328.754l6.296 3.759a811 811 0 0 0-2.945-5.032l-.085.009a.75.75 0 0 1-.558-.197l-.042-.043zm9.056-.575a.8.8 0 0 0 .249-.17c.163.085 2.657 1.486 2.665 1.49.009.01-.672.416-3.09 1.86l-2.88 1.715-.278.171-.056.03.017-.025.206-.356 1.264-2.169c1.44-2.468 1.457-2.494 1.475-2.486h.128a.7.7 0 0 0 .3-.06"
          />
          <defs>
            <linearGradient
              id="NXRA__a"
              x1="7.631"
              x2="16.941"
              y1="6.195"
              y2="16.819"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5566FE" />
              <stop offset="1" stopColor="#B370FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenNXRA.displayName = 'NXRA'