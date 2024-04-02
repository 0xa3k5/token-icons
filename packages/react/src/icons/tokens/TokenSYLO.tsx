import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSYLO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M20.634 11.938A2.63 2.63 0 0 1 18 14.57a2.632 2.632 0 0 1-2.433-3.64 2.632 2.632 0 0 1 4.866 0c.133.32.2.661.2 1.007m-1.288 0c0-.742-.604-1.345-1.346-1.345a1.347 1.347 0 0 0-1.346 1.345c0 .742.605 1.346 1.346 1.346s1.346-.604 1.346-1.346M5.552 14.572c1.065 0 1.885-.468 1.885-1.564v-.017c0-.904-.787-1.302-1.479-1.534-.53-.181-1-.315-1-.59v-.016c0-.193.174-.344.517-.344.292 0 .67.122 1.065.315a.55.55 0 0 0 .256.064h.012c.302 0 .547-.25.547-.554a.57.57 0 0 0-.332-.525A3.4 3.4 0 0 0 5.5 9.43c-.994 0-1.804.565-1.804 1.567v.018c0 .961.786 1.282 1.466 1.48.541.163 1.008.34 1.008.643v.017c0 .221-.18.367-.587.367-.396 0-.861-.146-1.333-.443a.55.55 0 0 0-.273-.07H3.96a.544.544 0 0 0-.53.554.55.55 0 0 0 .267.478c.547.367 1.193.532 1.856.532m3.612 1.285c.838 0 1.25-.388 1.664-1.39l1.705-4.055c.04-.104.058-.22.064-.332v-.005a.66.66 0 0 0-.663-.646c-.355 0-.559.25-.67.547l-1.018 2.783-1.085-2.8c-.116-.333-.32-.53-.669-.53-.39 0-.692.279-.692.675q.016.164.076.32l1.701 3.827-.046.11c-.128.251-.244.298-.494.298a.8.8 0 0 1-.297-.052.8.8 0 0 0-.233-.035h-.005a.56.56 0 0 0-.547.57c0 .345.238.508.442.584.244.087.506.143.767.131m4.122-1.993c0 .385.259.707.643.707s.643-.321.643-.707v-5.43c0-.385-.259-.72-.643-.72s-.643.335-.643.72z"
          />
        </>
      ) : (
        <>
          <path
            fill="#E5661F"
            d="M20.634 11.938A2.63 2.63 0 0 1 18 14.57a2.632 2.632 0 0 1-2.433-3.64 2.632 2.632 0 0 1 4.866 0c.133.32.2.661.2 1.007m-1.288 0c0-.742-.604-1.345-1.346-1.345a1.347 1.347 0 0 0-1.346 1.345c0 .742.605 1.346 1.346 1.346s1.346-.604 1.346-1.346"
          />
          <path
            fill="#fff"
            d="M5.552 14.572c1.065 0 1.885-.468 1.885-1.564v-.017c0-.904-.787-1.302-1.479-1.534-.53-.181-1-.315-1-.59v-.016c0-.193.174-.344.517-.344.292 0 .67.122 1.065.315a.55.55 0 0 0 .256.064h.012c.302 0 .547-.25.547-.554a.57.57 0 0 0-.332-.525A3.4 3.4 0 0 0 5.5 9.43c-.994 0-1.804.565-1.804 1.567v.018c0 .961.786 1.282 1.466 1.48.541.163 1.008.34 1.008.643v.017c0 .221-.18.367-.587.367-.396 0-.861-.146-1.333-.443a.55.55 0 0 0-.273-.07H3.96a.544.544 0 0 0-.53.554.55.55 0 0 0 .267.478c.547.367 1.193.532 1.856.532m3.612 1.285c.838 0 1.25-.388 1.664-1.39l1.705-4.055c.04-.104.058-.22.064-.332v-.005a.66.66 0 0 0-.663-.646c-.355 0-.559.25-.67.547l-1.018 2.783-1.085-2.8c-.116-.333-.32-.53-.669-.53-.39 0-.692.279-.692.675q.016.164.076.32l1.701 3.827-.046.11c-.128.251-.244.298-.494.298a.8.8 0 0 1-.297-.052.8.8 0 0 0-.233-.035h-.005a.56.56 0 0 0-.547.57c0 .345.238.508.442.584.244.087.506.143.767.131m4.122-1.993c0 .385.259.707.643.707s.643-.321.643-.707v-5.43c0-.385-.259-.72-.643-.72s-.643.335-.643.72z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenSYLO.displayName = 'SYLO'