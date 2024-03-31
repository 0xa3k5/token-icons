import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconDPI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#3C176B"
        d="m23.55 15.27-8.54-8.434-4.869-.913L7.29 16.68l7.196 7.106a12.03 12.03 0 0 0 9.069-8.516z"
      />
      <path
        fill="#6B42BD"
        d="M11.143 15.737V9h1.5a5.1 5.1 0 0 1 1.526.244c.524.17 1 .463 1.389.853.004-.9-.322-1.8-.785-2.614a5.7 5.7 0 0 0-1.577-.219H9v8.465c.618.008 1.526.06 2.143.008"
      />
      <path
        fill="#9B74EC"
        d="M17.988 10.252a5.2 5.2 0 0 0-1.183-1.783 4.76 4.76 0 0 0-2.087-1.183 5.4 5.4 0 0 1 .788 2.644c.283.287.557 2.52.729 2.949L10.86 16.59v-.956c-.621.052-1.234 0-1.86-.008v2.803h3.896a5.75 5.75 0 0 0 3.712-1.397 5.4 5.4 0 0 0 1.311-1.775c.357-.797.53-1.664.51-2.537 0-.969-.146-1.757-.441-2.469"
      />
      <path
        fill="#fff"
        d="M10.68 15c.605 0 1.243-.098 1.779-.244a3.9 3.9 0 0 0 1.354-.725c.405-.307.728-.709.943-1.17.236-.48.352-1.058.352-1.744 0-.677-.103-1.2-.309-1.688a3 3 0 0 0-.857-1.175 3.9 3.9 0 0 0-1.337-.737 5.6 5.6 0 0 0-1.603-.231H9V15zM7.286 5.572h4.303c.72 0 1.414.111 2.083.342.668.223 1.26.57 1.774 1.033a5.1 5.1 0 0 1 1.234 1.749c.325.765.483 1.59.463 2.421q.002 1.436-.531 2.486a5.3 5.3 0 0 1-1.372 1.744 5.8 5.8 0 0 1-1.868 1.029c-.686.227-1.14.338-1.8.338H7.286z"
      />
    </BaseIcon>
  ),
)

IconDPI.displayName = 'DPI'