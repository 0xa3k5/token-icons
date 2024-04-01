import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconHUSH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M12.806 13.906v1.5a.683.683 0 0 1-.681.681h-.012a.685.685 0 0 1-.663-.662v-2.531c0-.225.269-.332.425-.175l.75.75a.6.6 0 0 1 .181.437m0-5.287v2.494a.248.248 0 0 1-.425.175l-.75-.75a.64.64 0 0 1-.187-.45V8.606a.675.675 0 0 1 .662-.662h.019c.375-.006.681.3.681.675m-3.4 4.994c.375 0 .681.306.681.68v3.582a.683.683 0 0 1-.68.681.683.683 0 0 1-.682-.681v-3.588c0-.375.306-.675.681-.675m-2.725 3.55A.683.683 0 0 1 6 16.48V6.95c0-.375.306-.681.681-.681s.681.306.681.681v9.531a.683.683 0 0 1-.68.681M9.406 4.788c.375 0 .681.306.681.68v6.126a.683.683 0 0 1-.68.681.683.683 0 0 1-.682-.681V5.469c0-.375.306-.682.681-.682m5.438 13.768a.683.683 0 0 1-.681-.681V11.75a.682.682 0 0 1 1.362 0v6.125a.68.68 0 0 1-.681.681m0-8.818a.683.683 0 0 1-.681-.682V5.47c0-.375.306-.682.68-.682.376 0 .682.307.682.682v3.587a.683.683 0 0 1-.681.682m2.725 7.425a.683.683 0 0 1-.681-.682V6.95a.682.682 0 0 1 1.362 0v9.531a.687.687 0 0 1-.681.681m-6.113-6.825c0-.007-.006-.02-.006-.025zm.669 7.075q.253 0 .488-.057c.1-.025.193.05.193.15v1.813a.683.683 0 0 1-.681.681.683.683 0 0 1-.681-.681v-1.813c0-.1.093-.175.193-.15q.236.057.488.056m.681-12.732v1.813c0 .1-.093.175-.193.15a2 2 0 0 0-.488-.056q-.253 0-.488.056a.155.155 0 0 1-.193-.15V4.68c0-.375.306-.681.681-.681h.006c.369 0 .675.306.675.681"
      />
    </BaseIcon>
  ),
)

IconHUSH.displayName = 'HUSH'