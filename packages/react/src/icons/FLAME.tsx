import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconFLAME = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M8.314 17.631C6.112 16.03 5.28 13.474 6.707 10.77c.095-.18.377-.116.433.077.21.69.634 1.037.634 1.037-.137-.313-.66-3.698 1.865-5.254.145-.09.325.043.3.214-.112.866-.197 2.726 1.294 2.203 1.354-.471.381-2.948-.116-4.02-.085-.176.09-.368.27-.3 3 1.243 5.34 3.257 4.496 6.913.223.043.956-.086 1.371-.694.108-.159.36-.168.412.017.416 1.406 1.028 5.087-2.242 7.037-.15-.36-.382-.68-.677-.934-.034-.026-.064-.017-.09.017-.128.176-.557.716-.981.75-.772.06-1.209-.793-1.016-1.723.022-.103-.073-.201-.171-.171-1.226.398-1.543 1.22-1.543 1.22-.532-.432-.999-1.242-.9-3.068.008-.137-.163-.205-.24-.085-.476.72-1.423 2.301-1.496 3.625z"
      />
    </BaseIcon>
  ),
)

IconFLAME.displayName = 'FLAME'