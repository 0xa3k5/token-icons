import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenARB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M19.286 7.286a2.14 2.14 0 0 1-2.177 2.143q.033.207.034.428v6a2.57 2.57 0 0 1-2.572 2.572h-6A2.57 2.57 0 0 1 6 15.857v-6a2.57 2.57 0 0 1 2.571-2.571h6c.146 0 .292.013.429.034v-.034a2.143 2.143 0 0 1 4.286 0m-4.23.484a2.2 2.2 0 0 0-.485-.056h-6A2.143 2.143 0 0 0 6.43 9.857v6A2.143 2.143 0 0 0 8.57 18h6a2.143 2.143 0 0 0 2.143-2.143v-6q.001-.252-.055-.484a2.14 2.14 0 0 1-1.603-1.603M16.714 6v.857h-.857v.857h.857v.857h.857v-.857h.858v-.857h-.858V6zM7.93 15.857H6.643l1.928-6h1.286l1.714 4.714V9.857h2.572c.57 0 1.714.343 1.714 1.714 0 1.372-.716 1.715-1.071 1.715l1.5 2.571h-1.5L13.5 13.286h-.643v2.571H10.93l-.515-1.286h-2.1zm.642-2.143h1.5l-.857-2.143zm5.358-1.286h-1.072v-1.714h1.072c.214 0 .642.172.642.857 0 .686-.428.857-.642.857m-2.786 4.698v-.065q-.001-.017.017-.017h.064v-.651h-.064q-.015 0-.017-.017v-.065c0-.012.008-.025.017-.025h.27q.128 0 .206.051a.17.17 0 0 1 .077.15.18.18 0 0 1-.043.12.24.24 0 0 1-.094.077.22.22 0 0 1 .137.069.2.2 0 0 1 .047.141.21.21 0 0 1-.073.172.33.33 0 0 1-.197.073l-.163.004h-.167q-.018 0-.017-.017m.214-.378v.3h.052a.3.3 0 0 0 .162-.038q.057-.034.056-.12.001-.142-.184-.142zm0-.36v.258h.043q.175 0 .176-.129.001-.077-.043-.103a.2.2 0 0 0-.12-.026zm.694.005v.651h.065c.008 0 .017.005.017.017v.065c0 .012-.009.017-.017.017h-.257q-.02 0-.022-.017v-.065c0-.012.009-.017.017-.017h.065v-.651h-.065c-.008 0-.017-.005-.017-.017v-.065c0-.012.009-.025.017-.025h.257c.013 0 .022.012.022.025v.065c0 .012-.009.017-.017.017zm.643.75q.018 0 .017-.017v-.065q.001-.017-.017-.017h-.098v-.651h.163l-.009.098q-.001.019.017.018h.073q.018 0 .017-.018v-.18c0-.012-.004-.025-.017-.025h-.626c-.008 0-.017.012-.017.025v.18c0 .013.009.018.017.018h.073q.018 0 .017-.018l-.004-.098h.159v.651h-.099q-.015 0-.017.017v.065q.002.018.017.017z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

TokenARB.displayName = 'ARB'