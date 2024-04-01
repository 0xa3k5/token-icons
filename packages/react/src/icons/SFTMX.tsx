import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSFTMX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.473 5.571 5.57 8.473 6.814 9.51c.334-1.492 1.937-2.417 2.7-2.696L8.468 5.571zm6.844 0L14.28 6.814c1.826 1.329 2.558 2.627 2.7 3.112l1.448-1.243zm0 12.652-1.243-1.457c1.659-.33 2.486-2.07 2.696-2.902l1.453 1.457zm-5.391-1.037-1.243 1.242-2.906-2.901 1.037-1.037c.664 1.658 2.353 2.486 3.112 2.696"
          />
          <path
            fill="currentColor"
            d="m12 8.571 2.143.943v4.543L12 15.428l-2.143-1.371V9.514zm-1.714 1.449v1.406l1.272-.703zm1.5 1.063-1.303.72 1.303.861zm.428 1.585 1.303-.865-1.303-.72zm1.5-.484L12 13.32l-1.714-1.136v1.594L12 14.786l1.714-1.008zm0-.758-1.273-.703 1.273-.703zm-.266-1.749L12 10.478l-1.449-.801L12 9.034z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M8.473 5.571 5.57 8.473 6.814 9.51c.334-1.492 1.937-2.417 2.7-2.696L8.468 5.571zm6.844 0L14.28 6.814c1.826 1.329 2.558 2.627 2.7 3.112l1.448-1.243zm0 12.652-1.243-1.457c1.659-.33 2.486-2.07 2.696-2.902l1.453 1.457zm-5.391-1.037-1.243 1.242-2.906-2.901 1.037-1.037c.664 1.658 2.353 2.486 3.112 2.696"
          />
          <path
            fill="#000"
            d="m12 8.571 2.143.943v4.543L12 15.428l-2.143-1.371V9.514zm-1.714 1.449v1.406l1.272-.703zm1.5 1.063-1.303.72 1.303.861zm.428 1.585 1.303-.865-1.303-.72zm1.5-.484L12 13.32l-1.714-1.136v1.594L12 14.786l1.714-1.008zm0-.758-1.273-.703 1.273-.703zm-.266-1.749L12 10.478l-1.449-.801L12 9.034z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSFTMX.displayName = 'SFTMX'