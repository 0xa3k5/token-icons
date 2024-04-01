import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconCRTS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 5.558a6.9 6.9 0 0 0-4.86 1.929l-.283-.261A7.26 7.26 0 0 1 12 5.143c3.441 0 6.24 2.4 6.857 5.571h-.394A6.53 6.53 0 0 0 12 5.558M5.1 7.581a.86.86 0 0 1 .6.566.86.86 0 0 1-.129.81.86.86 0 0 1-.595-.566.85.85 0 0 1 .124-.81m-.737 1.715a.88.88 0 0 1 .66.488.88.88 0 0 1-.03.81.93.93 0 0 1-.66-.493c-.137-.257-.107-.565.03-.81zm1.333.728a.85.85 0 0 1 .814.035.85.85 0 0 1-.493.655.85.85 0 0 1-.81-.03.9.9 0 0 1 .489-.655zM3.887 11.31c.279-.03.57.06.771.291a.85.85 0 0 1 .18.793.88.88 0 0 1-.767-.287.85.85 0 0 1-.184-.797m1.487.338a.85.85 0 0 1 .797-.184.87.87 0 0 1-.291.763.85.85 0 0 1-.797.184.88.88 0 0 1 .291-.762m-1.256 1.766a.86.86 0 0 1 .815.095.92.92 0 0 1 .381.715.88.88 0 0 1-1.196-.81m1.518-.043a.9.9 0 0 1 .72-.385.86.86 0 0 1-.09.814.89.89 0 0 1-.72.381.86.86 0 0 1 .09-.814zm-.673 1.942a.9.9 0 0 1 .814-.095.86.86 0 0 1 .531.613.9.9 0 0 1-.814.09.86.86 0 0 1-.531-.608m1.487-.386a.88.88 0 0 1 .613-.531c.15.227.197.531.09.81a.88.88 0 0 1-.613.531.88.88 0 0 1-.09-.81m-.643-5.854a.86.86 0 0 1 .566-.596.9.9 0 0 1 .814.124.86.86 0 0 1-.57.596.86.86 0 0 1-.814-.124zM19.286 12a.433.433 0 0 1-.429.428.36.36 0 0 1-.171-.042.43.43 0 0 1-.258-.386.43.43 0 0 1 .258-.386.4.4 0 0 1 .313-.017.43.43 0 0 1 .287.403m-.429 1.286h-.381a6.41 6.41 0 0 1-6.283 5.16c-1.543 0-3.073-.506-4.235-1.513l-.244.274a6.801 6.801 0 0 0 11.143-3.921m-6.643 3.428a4.93 4.93 0 0 0 4.813-3.857h-1.783a3.214 3.214 0 1 1 0-2.143h1.783a4.929 4.929 0 1 0-4.813 6"
          />
        </>
      ) : (
        <>
          <path
            fill="#3699CB"
            d="M12 5.558a6.9 6.9 0 0 0-4.86 1.929l-.282-.261A7.26 7.26 0 0 1 12 5.143c3.442 0 6.24 2.4 6.858 5.571h-.395A6.53 6.53 0 0 0 12 5.558M5.1 7.581a.86.86 0 0 1 .6.566.86.86 0 0 1-.128.81.86.86 0 0 1-.596-.566.85.85 0 0 1 .124-.81m-.737 1.715a.88.88 0 0 1 .66.488.88.88 0 0 1-.03.81.93.93 0 0 1-.66-.493c-.137-.257-.107-.565.03-.81zm1.333.728a.85.85 0 0 1 .814.035.85.85 0 0 1-.492.655.85.85 0 0 1-.81-.03.9.9 0 0 1 .488-.655zM3.888 11.31c.278-.03.57.06.771.291a.85.85 0 0 1 .18.793.88.88 0 0 1-.767-.287.85.85 0 0 1-.184-.797m1.487.338a.85.85 0 0 1 .797-.184.87.87 0 0 1-.292.763.85.85 0 0 1-.797.184.88.88 0 0 1 .292-.762m-1.256 1.766a.86.86 0 0 1 .814.095.92.92 0 0 1 .382.715.88.88 0 0 1-1.196-.81m1.517-.043a.9.9 0 0 1 .72-.385.86.86 0 0 1-.09.814.89.89 0 0 1-.72.381.86.86 0 0 1 .09-.814zm-.673 1.942a.9.9 0 0 1 .815-.095.86.86 0 0 1 .531.613.9.9 0 0 1-.814.09.86.86 0 0 1-.532-.608m1.487-.386a.88.88 0 0 1 .613-.531c.15.227.197.531.09.81a.88.88 0 0 1-.613.531.88.88 0 0 1-.09-.81m-.642-5.854a.86.86 0 0 1 .565-.596.9.9 0 0 1 .815.124.86.86 0 0 1-.57.596.86.86 0 0 1-.815-.124zM19.286 12a.433.433 0 0 1-.428.428.36.36 0 0 1-.172-.042.43.43 0 0 1-.257-.386.43.43 0 0 1 .257-.386.4.4 0 0 1 .313-.017.43.43 0 0 1 .287.403m-.428 1.286h-.382a6.41 6.41 0 0 1-6.283 5.16c-1.543 0-3.073-.506-4.234-1.513l-.244.274a6.801 6.801 0 0 0 11.143-3.921m-6.643 3.428a4.93 4.93 0 0 0 4.813-3.857h-1.783a3.215 3.215 0 1 1 0-2.143h1.783a4.929 4.929 0 1 0-4.813 6"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCRTS.displayName = 'CRTS'