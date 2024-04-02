import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSUIP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m19.398 9.874-2.276-2.267h-.004l-.005-.009a4 4 0 0 0-2.841-1.17c-.827 0-1.611.249-2.276.703a4 4 0 0 0-2.271-.703c-1.076 0-2.087.42-2.846 1.175L4.608 9.87a3.98 3.98 0 0 0 0 5.665 4 4 0 0 0 2.841 1.175c.823 0 1.607-.249 2.271-.703.672.46 1.467.703 2.28.698.823 0 1.608-.244 2.272-.702a4 4 0 0 0 3.823.407 4 4 0 0 0 2.18-5.236 4 4 0 0 0-.873-1.296zM8.486 14.871a2.4 2.4 0 0 1-2.743-3.87l2.272-2.263a2.4 2.4 0 0 1 2.747-.471L9.155 9.87a3.97 3.97 0 0 0-1.179 2.833c0 .762.214 1.491.609 2.121zm5.216-.471a2.4 2.4 0 0 1-2.627.527A2.4 2.4 0 0 1 10.286 11l1.715-1.7 1.705 1.7a2.4 2.4 0 0 1 0 3.399zm4.556.012a2.42 2.42 0 0 1-2.855.416c.507-.8.71-1.754.575-2.691a3.98 3.98 0 0 0-1.14-2.267l-1.595-1.6-.008-.008c.9-.425 2.006-.27 2.743.471h.008v.009l2.267 2.254.009.013a2.387 2.387 0 0 1 0 3.398z"
          />
        </>
      ) : (
        <>
          <path
            fill="#4EC3C9"
            d="m19.398 9.874-2.276-2.267h-.004l-.005-.009a4 4 0 0 0-2.841-1.17c-.827 0-1.611.249-2.276.703a4 4 0 0 0-2.271-.703c-1.076 0-2.087.42-2.846 1.175L4.608 9.87a3.98 3.98 0 0 0 0 5.665 4 4 0 0 0 2.841 1.175c.823 0 1.607-.249 2.271-.703.672.46 1.467.703 2.28.698.823 0 1.608-.244 2.272-.702a4 4 0 0 0 3.823.407 4 4 0 0 0 2.18-5.236 4 4 0 0 0-.873-1.296zM8.486 14.871a2.4 2.4 0 0 1-2.743-3.87l2.272-2.263a2.4 2.4 0 0 1 2.747-.471L9.155 9.87a3.97 3.97 0 0 0-1.179 2.833c0 .762.214 1.491.609 2.121zm5.216-.471a2.4 2.4 0 0 1-2.627.527A2.4 2.4 0 0 1 10.286 11l1.715-1.7 1.705 1.7a2.4 2.4 0 0 1 0 3.399zm4.556.012a2.42 2.42 0 0 1-2.855.416c.507-.8.71-1.754.575-2.691a3.98 3.98 0 0 0-1.14-2.267l-1.595-1.6-.008-.008c.9-.425 2.006-.27 2.743.471h.008v.009l2.267 2.254.009.013a2.387 2.387 0 0 1 0 3.398z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenSUIP.displayName = 'SUIP'