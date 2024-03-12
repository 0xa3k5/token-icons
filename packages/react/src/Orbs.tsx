
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOrbs = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M9.086 13.916a.154.154 0 0 1-.204.135.16.16 0 0 1-.075-.054l-2.224-2.083a.171.171 0 0 1 .056-.304l3.115-1.251c.142-.056.232.017.193.171zM7.243 15.896c-.116.102-.236.06-.261-.095l-.609-3.385c-.026-.155.043-.193.159-.086l2.112 1.98a.253.253 0 0 1-.008.386l-1.389 1.2zm2.55-6.21a.193.193 0 0 1-.077.321L6.622 11.25c-.146.06-.223-.013-.168-.159l1.273-3.437a.15.15 0 0 1 .125-.128.15.15 0 0 1 .158.077zM6.549 15.32c.03.155-.017.172-.099.043l-1.204-1.868a.44.44 0 0 1 .013-.472l.535-.72c.095-.128.198-.103.223.052zm-.377-4.44c-.056.146-.138.146-.189 0L5.576 9.64a.48.48 0 0 1 .12-.463l1.457-1.333c.12-.103.171-.073.116.077l-1.097 2.957zm-.386.476a.61.61 0 0 1-.082.497l-.415.575c-.095.128-.159.102-.142-.056l.197-1.967c.018-.155.069-.163.12-.013l.322.968zm1.65-4.427c.056.06 0 .197-.116.304l-.66.6c-.116.099-.137.086-.043-.043l.549-.741c.098-.129.218-.176.27-.12m4.153 10.461a.17.17 0 0 1-.15.108.17.17 0 0 1-.155-.095L9.57 14.89a.154.154 0 0 1 .116-.266l3.458-.36c.155-.017.215.081.138.214zm-.72.005c.085.128.043.192-.112.145l-3.231-1.114c-.15-.043-.172-.171-.056-.274l1.384-1.2a.25.25 0 0 1 .378.043zM13.213 13.68c.103.116.06.227-.099.244l-3.51.365a.184.184 0 0 1-.218-.15.2.2 0 0 1 .008-.099l.879-3.433c.039-.154.154-.18.257-.06l2.683 3.129zM15.733 16.62a.155.155 0 0 1-.094.278l-3.566.755c-.154.03-.214-.052-.137-.189l1.684-2.897a.19.19 0 0 1 .25-.091.2.2 0 0 1 .076.061zm-5.739 1.937a.44.44 0 0 1-.462-.056l-1.659-1.474c-.116-.099-.09-.146.056-.099l2.828.97c.15.05.159.15.022.226l-.785.429zm3.849.137a.47.47 0 0 1-.471.052l-1.153-.592c-.142-.073-.129-.158.025-.188l3.073-.652c.155-.034.18.022.06.12zm-3.219.077c-.158-.008-.171-.077-.034-.15l.617-.338a.6.6 0 0 1 .506-.005l.904.463c.142.069.129.125-.03.116zm5.683-1.478c.052.06-.017.171-.154.244l-.814.437c-.142.073-.155.052-.035-.043l.686-.57c.124-.098.266-.128.317-.068M14.25 13.641c-.146.06-.236-.017-.193-.171l.862-3.386a.158.158 0 0 1 .283-.081l2.22 2.087a.167.167 0 0 1 .03.257.17.17 0 0 1-.086.043zM17.627 11.589c.03.154-.043.192-.154.085L15.36 9.69a.253.253 0 0 1 .004-.381l1.389-1.2c.12-.103.24-.065.266.09l.608 3.385zm-1.354 4.761a.154.154 0 0 1-.215.112.15.15 0 0 1-.068-.06l-1.783-2.088a.193.193 0 0 1 .077-.325l3.099-1.243c.141-.06.214.012.163.162zm2.481-5.846a.45.45 0 0 1-.012.472l-.54.72c-.09.128-.193.103-.219-.052l-.531-2.961c-.03-.154.017-.172.098-.043zm-.325 3.857a.48.48 0 0 1-.12.463l-1.466 1.333c-.116.103-.163.073-.111-.073l1.097-2.961c.051-.15.137-.15.188 0l.412 1.243zm.223-.763c-.013.155-.069.163-.116.013l-.322-.968a.61.61 0 0 1 .082-.497l.42-.57c.09-.125.154-.099.137.055zm-1.826 3.352c-.09.128-.21.18-.262.12-.055-.06 0-.197.116-.304l.656-.6c.116-.103.137-.086.043.038zM14.434 9.116a.154.154 0 0 1-.12.261l-3.454.36c-.158.017-.218-.081-.141-.214l1.693-2.914a.167.167 0 0 1 .304-.013zM15.15 9.051A.25.25 0 0 1 14.773 9l-1.646-2.396c-.085-.128-.038-.193.112-.141l3.231 1.106c.15.051.172.175.056.278l-1.376 1.2zm-1.427 4.346c-.039.15-.15.176-.257.06l-2.679-3.133c-.103-.12-.06-.231.103-.248l3.506-.365a.184.184 0 0 1 .218.15.15.15 0 0 1-.008.099zM10.38 9.433a.19.19 0 0 1-.184.112.2.2 0 0 1-.073-.018.2.2 0 0 1-.073-.064L8.267 7.38a.154.154 0 0 1 .095-.274l3.565-.755c.155-.034.215.052.137.185zm2.854-3.33c-.145-.052-.154-.154-.017-.232l.789-.424a.44.44 0 0 1 .467.056l1.654 1.47c.116.103.09.15-.055.103zm-4.547.583c-.15.034-.18-.017-.055-.12l1.525-1.26a.47.47 0 0 1 .472-.052l1.157.596c.141.069.128.154-.022.184zm4.106-.969a.6.6 0 0 1-.506.004l-.908-.462c-.129-.069-.12-.12.038-.116l1.963.09c.154.013.172.077.03.15zm-4.787.922c-.12.102-.257.128-.313.072-.051-.06.017-.171.154-.248l.815-.437c.141-.073.154-.052.034.047l-.686.566zM6.964 16.59c.06-.052.193 0 .3.116l.6.664c.099.116.086.137-.042.043l-.738-.557c-.128-.09-.184-.215-.12-.266M17.26 7.667c.06-.051.171.017.244.159l.437.814c.073.141.052.154-.047.034l-.561-.69c-.099-.124-.129-.265-.073-.317m-.339-.523c.129.095.18.215.12.266s-.197 0-.304-.116l-.6-.664c-.099-.116-.086-.133.043-.043zM6.67 16.016c.103.124.128.265.073.317-.06.051-.172-.017-.245-.154l-.437-.823c-.073-.137-.051-.15.047-.03z"/>
        </>
      ) : (
        <>
          <path fill="#404A72" d="M9.086 13.916a.154.154 0 0 1-.204.135.16.16 0 0 1-.075-.054l-2.224-2.083a.171.171 0 0 1 .056-.304l3.115-1.251c.142-.056.232.017.193.171z"/><path fill="#556195" d="M7.243 15.896c-.116.102-.236.06-.261-.095l-.609-3.385c-.026-.155.043-.193.159-.086l2.112 1.98a.253.253 0 0 1-.008.386l-1.389 1.2zm2.55-6.21a.193.193 0 0 1-.077.321L6.622 11.25c-.146.06-.223-.013-.168-.159l1.273-3.437a.15.15 0 0 1 .125-.128.15.15 0 0 1 .158.077zM6.549 15.32c.03.155-.017.172-.099.043l-1.204-1.868a.44.44 0 0 1 .013-.472l.535-.72c.095-.128.198-.103.223.052zm-.377-4.44c-.056.146-.138.146-.189 0L5.576 9.64a.48.48 0 0 1 .12-.463l1.457-1.333c.12-.103.171-.073.116.077l-1.097 2.957zm-.386.476a.61.61 0 0 1-.082.497l-.415.575c-.095.128-.159.102-.142-.056l.197-1.967c.018-.155.069-.163.12-.013l.322.968zm1.65-4.427c.056.06 0 .197-.116.304l-.66.6c-.116.099-.137.086-.043-.043l.549-.741c.098-.129.218-.176.27-.12m4.153 10.461a.17.17 0 0 1-.15.108.17.17 0 0 1-.155-.095L9.57 14.89a.154.154 0 0 1 .116-.266l3.458-.36c.155-.017.215.081.138.214zm-.72.005c.085.128.043.192-.112.145l-3.231-1.114c-.15-.043-.172-.171-.056-.274l1.384-1.2a.25.25 0 0 1 .378.043z"/><path fill="#6ECCE0" d="M13.213 13.68c.103.116.06.227-.099.244l-3.51.365a.184.184 0 0 1-.218-.15.2.2 0 0 1 .008-.099l.879-3.433c.039-.154.154-.18.257-.06l2.683 3.129z"/><path fill="#556195" d="M15.733 16.62a.155.155 0 0 1-.094.278l-3.566.755c-.154.03-.214-.052-.137-.189l1.684-2.897a.19.19 0 0 1 .25-.091.2.2 0 0 1 .076.061zm-5.739 1.937a.44.44 0 0 1-.462-.056l-1.659-1.474c-.116-.099-.09-.146.056-.099l2.828.97c.15.05.159.15.022.226l-.785.429zm3.849.137a.47.47 0 0 1-.471.052l-1.153-.592c-.142-.073-.129-.158.025-.188l3.073-.652c.155-.034.18.022.06.12zm-3.219.077c-.158-.008-.171-.077-.034-.15l.617-.338a.6.6 0 0 1 .506-.005l.904.463c.142.069.129.125-.03.116zm5.683-1.478c.052.06-.017.171-.154.244l-.814.437c-.142.073-.155.052-.035-.043l.686-.57c.124-.098.266-.128.317-.068"/><path fill="#404A72" d="M14.25 13.641c-.146.06-.236-.017-.193-.171l.862-3.386a.158.158 0 0 1 .283-.081l2.22 2.087a.167.167 0 0 1 .03.257.17.17 0 0 1-.086.043z"/><path fill="#556195" d="M17.627 11.589c.03.154-.043.192-.154.085L15.36 9.69a.253.253 0 0 1 .004-.381l1.389-1.2c.12-.103.24-.065.266.09l.608 3.385zm-1.354 4.761a.154.154 0 0 1-.215.112.15.15 0 0 1-.068-.06l-1.783-2.088a.193.193 0 0 1 .077-.325l3.099-1.243c.141-.06.214.012.163.162zm2.481-5.846a.45.45 0 0 1-.012.472l-.54.72c-.09.128-.193.103-.219-.052l-.531-2.961c-.03-.154.017-.172.098-.043zm-.325 3.857a.48.48 0 0 1-.12.463l-1.466 1.333c-.116.103-.163.073-.111-.073l1.097-2.961c.051-.15.137-.15.188 0l.412 1.243zm.223-.763c-.013.155-.069.163-.116.013l-.322-.968a.61.61 0 0 1 .082-.497l.42-.57c.09-.125.154-.099.137.055zm-1.826 3.352c-.09.128-.21.18-.262.12-.055-.06 0-.197.116-.304l.656-.6c.116-.103.137-.086.043.038z"/><path fill="#404A72" d="M14.434 9.116a.154.154 0 0 1-.12.261l-3.454.36c-.158.017-.218-.081-.141-.214l1.693-2.914a.167.167 0 0 1 .304-.013z"/><path fill="#556195" d="M15.15 9.051A.25.25 0 0 1 14.773 9l-1.646-2.396c-.085-.128-.038-.193.112-.141l3.231 1.106c.15.051.172.175.056.278l-1.376 1.2zm-1.427 4.346c-.039.15-.15.176-.257.06l-2.679-3.133c-.103-.12-.06-.231.103-.248l3.506-.365a.184.184 0 0 1 .218.15.15.15 0 0 1-.008.099zM10.38 9.433a.19.19 0 0 1-.184.112.2.2 0 0 1-.073-.018.2.2 0 0 1-.073-.064L8.267 7.38a.154.154 0 0 1 .095-.274l3.565-.755c.155-.034.215.052.137.185zm2.854-3.33c-.145-.052-.154-.154-.017-.232l.789-.424a.44.44 0 0 1 .467.056l1.654 1.47c.116.103.09.15-.055.103zm-4.547.583c-.15.034-.18-.017-.055-.12l1.525-1.26a.47.47 0 0 1 .472-.052l1.157.596c.141.069.128.154-.022.184zm4.106-.969a.6.6 0 0 1-.506.004l-.908-.462c-.129-.069-.12-.12.038-.116l1.963.09c.154.013.172.077.03.15zm-4.787.922c-.12.102-.257.128-.313.072-.051-.06.017-.171.154-.248l.815-.437c.141-.073.154-.052.034.047l-.686.566zM6.964 16.59c.06-.052.193 0 .3.116l.6.664c.099.116.086.137-.042.043l-.738-.557c-.128-.09-.184-.215-.12-.266M17.26 7.667c.06-.051.171.017.244.159l.437.814c.073.141.052.154-.047.034l-.561-.69c-.099-.124-.129-.265-.073-.317m-.339-.523c.129.095.18.215.12.266s-.197 0-.304-.116l-.6-.664c-.099-.116-.086-.133.043-.043zM6.67 16.016c.103.124.128.265.073.317-.06.051-.172-.017-.245-.154l-.437-.823c-.073-.137-.051-.15.047-.03z"/>
        </>
      )}
    </BaseIcon>
));

IconOrbs.displayName = 'Orbs';
IconOrbs.variants = 'brandedmono';

export default IconOrbs;
