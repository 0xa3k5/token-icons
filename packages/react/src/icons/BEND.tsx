import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconBEND = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.111 8.031c.986-.411 2.529-.745 4.787-.745 2.263 0 4.668.514 6.506 1.358.922.42 1.71.926 2.271 1.5.553.57.896 1.213.896 1.916 0 1.393-1.213 2.554-3.12 3.36-1.92.814-4.607 1.294-7.68 1.294-2.464 0-4.037-.45-4.997-1.028-.964-.583-1.329-1.295-1.341-1.809v-.06l.042-.043c.056-.06.125-.163.198-.313.068-.141.141-.321.21-.527.278-.81.531-1.971.668-2.781.069-.407.107-.712.107-.836 0-.201.137-.428.369-.634a3.8 3.8 0 0 1 1.088-.652zm-.93.892.193.296.214-.146-.073-.412a2 2 0 0 0-.334.258zm-.248.394c0-.056.03-.15.128-.274l.069.386-.133.145-.077-.056zM3.78 14.224l-.052-.171.24-.305c.017.03.043.065.06.103zm.205.394-.064-.102.283-.429.094.107zm.373.416-.188-.188.325-.45c.065.06.133.115.21.175zm.48.36a4 4 0 0 1-.265-.184l.355-.472.257.168zm.592.313a5 5 0 0 1-.352-.171l.356-.493q.154.09.334.171zm.797.291a6 6 0 0 1-.532-.18l.339-.497c.137.06.287.112.441.163l-.3.48zm.806.198a8 8 0 0 1-.583-.138l.304-.488q.257.073.54.133zm.955.141a12 12 0 0 1-.668-.09l.257-.484q.296.051.617.09l-.214.48zm1.029.077a13 13 0 0 1-.746-.047l.214-.48c.215.021.446.039.686.043l-.15.484zm.291.009.146-.48h.711l-.09.484h-.77zm1.903-.03c-.283.013-.566.026-.853.03l.086-.484.767-.03zm1.144-.086c-.282.03-.574.052-.865.069v-.485c.261-.012.523-.034.784-.055l.086.471zm1.068-.128a15 15 0 0 1-.789.102l-.086-.471.707-.086.168.459zm.278-.043c.266-.039.519-.086.772-.129l-.258-.433-.677.112.163.454zm-.266-.729q.32-.041.622-.094l-.249-.42-.531.081.159.437zm-.257-.707.472-.069-.27-.454-.377.043.171.48zm-.278-.754.317-.035-.3-.501-.206.017zm-.48-.498.193.528-.377.025-.095-.54c.099 0 .189-.008.279-.013m.188-.3.15-.008-.244-.407-.056.004.15.416zm-.441-.398.154.42-.227.008-.077-.424h.15zm.549 1.5.175.48a10 10 0 0 1-.518.051l-.086-.497zm.278.758-.574.056.085.463.648-.077zm2.546.75c-.249.07-.514.13-.78.185l-.257-.429c.24-.043.471-.098.698-.154l.343.399zm.951-.282q-.316.11-.651.201l-.339-.394a9 9 0 0 0 .566-.172l.428.365zm.309-.108-.42-.36c.171-.06.338-.128.497-.192l.493.33a9 9 0 0 1-.57.222m1.38-.612-.502.257-.497-.335q.211-.1.403-.214zm.694-.437q-.186.14-.398.265l-.6-.291.304-.219zm.587-.49a4 4 0 0 1-.317.284l-.711-.253q.12-.11.223-.231zm.429-.513a3 3 0 0 1-.21.274l-.832-.206.129-.206.909.138zm.283-.558a2 2 0 0 1-.129.296l-.939-.146q.043-.1.073-.214l.995.06zm.115-.565a1.6 1.6 0 0 1-.038.283l-1.016-.06q.013-.1.017-.197zm-.051-.592q.039.155.051.309l-1.045.021a2 2 0 0 0-.035-.227zm-.274-.638q.108.18.184.36l-1.02.107a2 2 0 0 0-.12-.27zm-.378-.502q.11.122.206.249l-.943.193c-.043-.069-.094-.129-.145-.193zm-.587-.544q.194.153.36.313l-.87.244a5 5 0 0 0-.265-.248zm-.621-.437q.184.117.356.24l-.772.304a5 5 0 0 0-.283-.193zm-.857-.472q.296.149.566.3l-.69.348a7 7 0 0 0-.472-.245zm-.887-.385q.302.121.587.248l-.592.399a10 10 0 0 0-.505-.21l.514-.437zM15.63 8.28c.24.073.471.15.703.231l-.515.438q-.297-.107-.6-.198zm-.982-.266.686.176-.416.476a15 15 0 0 0-.6-.155zM13.594 7.8c.257.043.514.094.763.15l-.334.497c-.227-.047-.45-.09-.678-.128l.249-.515zm-1.093-.146q.403.039.806.103l-.249.514a16 16 0 0 0-.715-.094zm-1.071-.073c.261.009.527.026.788.043l-.158.527a11 11 0 0 0-.716-.043zm-.279-.008-.085.527q-.34-.002-.673.008l.03-.53c.231-.005.48-.01.728-.005m-1.714.051.707-.043-.03.536q-.317.007-.651.034l-.022-.527zm-.926.095q.316-.043.652-.073l.021.523-.613.06zm-.801.137c.171-.035.343-.069.527-.099l.06.51a7 7 0 0 0-.506.077l-.077-.488zm-.772.188c.159-.043.322-.09.502-.128l.077.48q-.246.047-.484.107zm-.638.214.373-.128.094.446a5 5 0 0 0-.373.124L6.3 8.263zm-.583.28q.148-.086.321-.164l.095.429q-.146.06-.288.128l-.072-.407zm5.301-.15-.085.556-.592.009.035-.557c.235-.009.445-.013.642-.009m.283 0-.09.556c.206 0 .407.009.604.017l.163-.531a13 13 0 0 0-.677-.043m.96.068-.158.527q.301.018.591.056l.236-.498q-.34-.052-.669-.085m.96.128-.236.493c.189.026.369.056.549.09l.317-.467zm.922.18-.313.463.501.12.386-.441q-.286-.076-.574-.142m.87.227-.386.442q.237.071.454.15l.489-.42c-.18-.06-.369-.12-.557-.172m.865.283-.492.425.377.162.587-.402a10 10 0 0 0-.472-.185m.78.322-.6.407c.103.056.21.111.309.171l.72-.364zm.729.385-.742.369.185.129.818-.33c-.085-.056-.171-.116-.265-.172zm.536.365-.836.334.159.146.93-.262a4 4 0 0 0-.258-.214zm.484.45-.943.261.09.107.994-.201a3 3 0 0 0-.141-.172zm.313.424-.994.201.077.142 1.037-.107a2 2 0 0 0-.12-.236m.21.514-1.024.103.03.129 1.028-.026a2 2 0 0 0-.034-.206m.043.489-1.012.025-.008.095 1.003.056.017-.172zm-.082.458-.994-.055-.034.094.96.146c.025-.06.051-.12.068-.185m-.214.45-.943-.141-.069.103.892.218a2 2 0 0 0 .124-.18zm-.334.42-.875-.214-.133.129.793.287c.078-.065.15-.129.215-.202m-.48.408-.78-.28-.189.134.682.334zm-.592.355-.664-.325-.257.132.557.373q.185-.084.364-.18m-.677.309-.544-.36q-.175.075-.369.146l.446.385a10 10 0 0 0 .467-.171m-.78.274-.441-.381-.42.128.343.399c.18-.043.35-.095.518-.146m-.823.223-.343-.403a8 8 0 0 1-.548.12l.248.42q.335-.062.643-.137m-2.764.429-.086-.463-.651.03v.492l.737-.055zm-1.016-.42h-.617l-.094.527.711-.03zm-.994.527.094-.532-.596-.021-.17.557h.672zm-.964 0 .175-.575c-.193-.012-.385-.03-.565-.051l-.258.583zm-.943-.073.265-.592a14 14 0 0 1-.535-.085l-.317.591q.282.049.591.086zm-.875-.142.318-.595a6 6 0 0 1-.476-.116l-.369.587.527.129zm-.805-.205.364-.583a6 6 0 0 1-.411-.137l-.386.565q.207.083.433.155m-.699-.262.386-.557-.33-.146-.386.54q.155.085.33.163m-.578-.3.381-.527-.257-.141-.377.505q.116.085.257.163zm-.48-.33.368-.484a4 4 0 0 1-.236-.163l-.342.472.214.175zm-.408-.385.322-.438-.129-.111-.291.433.098.12zm-.265-.37.257-.385-.086-.103-.27.429.06-.026.043.086zm.793-3.62q.002.103.055.227.083-.077.185-.155l-.043-.257c-.065.082-.099.24-.197.184m.437-.43.055.335.232-.128-.069-.373q-.114.075-.218.163zm.471-.316.077.411c.099-.043.197-.077.305-.116l-.09-.437q-.15.065-.292.142m.553-.245.094.46.377-.104-.102-.476a5 5 0 0 0-.369.12m.639-.197.102.493.455-.085-.086-.515zm.745-.158.086.523.463-.06-.06-.536q-.245.03-.489.073m.763-.107.064.54.558-.047-.026-.558zm.874-.082.022.557.566-.03.034-.557q-.301.009-.622.03m.849.806.557-.009-.085.523h-.498zm-.814.034.54-.025-.03.514-.489.021zm-.815.065q.258-.029.54-.043l.022.505-.502.043zm-.724.085.45-.056.056.51-.42.056zm-.72.129.446-.086.086.51-.429.077zm-.27.06.103.501-.373.095-.103-.493zm-.947.304c.094-.043.197-.077.309-.116l.102.485a7 7 0 0 0-.32.107l-.091-.472zm-.497.257.236-.137.085.459-.248.12zm-.343.274.09-.085.043.231a2 2 0 0 1-.129-.146zM4.62 12.96a2 2 0 0 1-.086-.112l.249-.407.107.107zm.334.334a3 3 0 0 1-.137-.124l.287-.437.163.128zm.454.343c-.085-.06-.163-.111-.235-.171l.325-.437.249.158-.339.446zm.493.279-.248-.138.342-.454.24.129zm.579.257a4 4 0 0 1-.322-.137l.335-.467.312.128zm.673.227-.403-.129.325-.471.378.116zm.741.184a6 6 0 0 1-.463-.107l.3-.484c.142.034.279.068.429.098zm.797.137-.514-.081.266-.493q.226.045.471.077zm.823.086c-.18-.017-.36-.03-.531-.051l.218-.498.472.043-.159.502zm.287.013.154-.502.502.018-.094.501c-.189 0-.378-.008-.558-.017zm1.41.017-.566.004.095-.505.471-.005zm.883-.034q-.296.02-.604.025v-.505c.175 0 .351-.013.514-.022l.086.502zm2.349-.326-.498.103-.27-.45a5 5 0 0 0 .412-.073zm.673-.18q-.176.058-.365.103l-.351-.412a3 3 0 0 0 .274-.072l.442.385zm.65-.223-.333.124-.442-.38.257-.095zm.528-.236-.214.103-.527-.351.115-.06zm.463-.274q-.08.054-.163.103l-.643-.313.077-.051.729.257zm.39-.308-.116.102-.758-.27.038-.038zm.283-.313-.06.077-.875-.214V12.8zm.18-.335-.03.07-.746-.117.771.043zm.073-.35-.005.068-.87-.052zm-.06-.387.03.099-.995.026-.004-.03.969-.099zm-.189-.39.069.112-.973.098-.017-.021zm-.21-.274.013.017.009.005-.93.192-.026-.03.874-.248zm-.437-.407.141.116-.891.252-.056-.047zm-.433-.3c.056.03.111.069.163.103l-.814.325c-.03-.02-.06-.042-.095-.055l.746-.377zm-.291-.171-.755.377-.162-.086.642-.433q.141.064.275.142m-.922-.42.343.137-.643.441-.257-.103zm-.72-.24.412.128-.558.48c-.098-.03-.197-.064-.3-.09l.446-.514zm-.763-.185c.159.03.313.069.463.103l-.446.514-.377-.085zm-.801-.141c.171.021.343.047.506.077l-.36.531-.408-.064.258-.544zm-.84-.086.549.047-.258.544-.458-.047zm-.853-.03q.29 0 .566.013l-.159.544q-.243-.015-.488-.021l.085-.532zM4.89 11.52l-.193.373.051.077.232-.369-.086-.085zm.24-.163-.103-.103.193-.368.137.111zm.06.433-.253.403.111.111.275-.407zm.287-.129-.137-.111.24-.386.158.103-.257.394zm.068.403-.282.429.171.141.317-.433zm.373-.094-.214-.142.279-.42.257.13zm.073.377-.326.446c.078.056.163.107.253.163l.343-.459zm.446-.086a3 3 0 0 1-.279-.145l.339-.459.3.124-.36.485zm.081.36-.351.472q.111.063.236.12l.347-.484zm.403-.128-.227-.103.381-.51.228.081zm.099.343-.356.492.304.125.347-.506-.3-.111zm.463-.133L7.19 12.6l.394-.553.288.086zm.111.334-.351.514.368.112.326-.527zm.501-.154-.334-.09.399-.583.304.077-.369.6zm.129.326-.33.527q.192.051.403.09l.287-.54a10 10 0 0 1-.36-.077m.501-.19-.342-.068.368-.595.296.068-.322.6zm.15.318-.291.544c.146.026.296.043.45.065l.244-.549a11 11 0 0 1-.403-.06m.523-.214-.385-.052.317-.591.321.06-.257.583zm.172.304-.249.557.437.034.172-.557-.365-.034zm.445-.248-.33-.026.253-.566.249.039zm.202.3-.171.557.462.013.103-.562c-.133 0-.266-.008-.394-.013zm.446-.28q-.187.002-.36-.008l.162-.531.288.034zm.231.288-.103.557h.42v-.557zm.317-.287h-.266l.086-.484.18.013zm.274.279v.557l.472-.022-.094-.544zm.326-.292-.321.009v-.455l.248.009zm1.415.189.295.488.352-.06-.386-.458-.257.03zm.038-.287-.197.017-.244-.403.102-.013zm.549.21.377.44.218-.05-.48-.412zm.462-.1.463.4.215-.073-.536-.36zm-.18-.248-.09.018-.428-.365.518.343zm.215-1.748-.013-.009.574-.39.12.056-.677.343zm-.339-.129-.137-.051.502-.429.222.082zm-.39.172.095.025-.536.365h-.017l.458-.395zm-.064-.322.506-.433-.253-.072-.403.462zm-.356.197.095.026-.46.394zm-.098-.317.402-.463-.342-.072-.322.48zm-.433.197.223.048-.399.462-.15-.025zm-.129-.312.326-.476a5 5 0 0 0-.36-.056l-.232.489.27.042zm-.394.227.223.034-.339.497-.133-.017zm-.163-.309.231-.489-.407-.042-.15.497zm-.411.244.283.026-.253.527-.193-.017zm-.197-.3.145-.492q-.225-.013-.45-.018l-.077.493c.129 0 .257.009.381.017m-.43.27.344.009-.163.54-.266-.009zm-.235-.287.082-.497h-.472l-.03.506zm-.437.296.394-.009-.085.54h-.339zm-.257-.274.026-.51-.459.021.021.514.408-.025zm-.399.308.377-.021-.03.527-.325.013-.022-.514zm-.291-.257-.022-.523-.48.043.06.523c.146-.017.292-.034.442-.043m-.412.326.43-.043.016.51-.386.021zm-.304-.253-.06-.523-.407.052.086.522zm-.334.334.364-.051.056.48-.343.03zm-.322-.24-.085-.523-.416.078.107.514zm-.334.343.386-.06.068.441-.368.04-.086-.417zm-.334-.223-.103-.505-.373.094.103.488zm-.313.356.373-.077c.043.214.026.343.043.501l-.352-.124zm-.33-.214-.099-.472c-.12.034-.23.073-.33.107l.086.45zm-.099.313.159-.04.021.12zm-.822-.455.231-.116.056.3a4 4 0 0 1-.287-.184m9.66 2.477-.065.03-.343-.231zm-.035-2.353.065.035-.66.265zm-7.594.798c1.196.347 2.52.57 3.771.612.678.022 1.32.052 1.972-.158q.18-.06.257-.107a2 2 0 0 0-.184-.086 8.8 8.8 0 0 0-2.944-.506c-.995 0-2.186.172-2.872.245"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#181B1E"
            d="M6.111 8.031c.986-.411 2.529-.745 4.787-.745 2.263 0 4.668.514 6.506 1.358.922.42 1.71.926 2.271 1.5.553.57.896 1.213.896 1.916 0 1.393-1.213 2.554-3.12 3.36-1.92.814-4.607 1.294-7.68 1.294-2.464 0-4.037-.45-4.997-1.028-.964-.583-1.329-1.295-1.341-1.809v-.06l.042-.043c.056-.06.125-.163.198-.313.068-.141.141-.321.21-.527.278-.81.531-1.971.668-2.781.069-.407.107-.712.107-.836 0-.201.137-.428.369-.634a3.8 3.8 0 0 1 1.088-.652zm-.93.892.193.296.214-.146-.073-.412a2 2 0 0 0-.334.258zm-.248.394c0-.056.03-.15.128-.274l.069.386-.133.145-.077-.056zM3.78 14.224l-.052-.171.24-.305c.017.03.043.065.06.103zm.205.394-.064-.102.283-.429.094.107zm.373.416-.188-.188.325-.45c.065.06.133.115.21.175zm.48.36a4 4 0 0 1-.265-.184l.355-.472.257.168zm.592.313a5 5 0 0 1-.352-.171l.356-.493q.154.09.334.171zm.797.291a6 6 0 0 1-.532-.18l.339-.497c.137.06.287.112.441.163l-.3.48zm.806.198a8 8 0 0 1-.583-.138l.304-.488q.257.073.54.133zm.955.141a12 12 0 0 1-.668-.09l.257-.484q.296.051.617.09l-.214.48zm1.029.077a13 13 0 0 1-.746-.047l.214-.48c.215.021.446.039.686.043l-.15.484zm.291.009.146-.48h.711l-.09.484h-.77zm1.903-.03c-.283.013-.566.026-.853.03l.086-.484.767-.03zm1.144-.086c-.282.03-.574.052-.865.069v-.485c.261-.012.523-.034.784-.055l.086.471zm1.068-.128a15 15 0 0 1-.789.102l-.086-.471.707-.086.168.459zm.278-.043c.266-.039.519-.086.772-.129l-.258-.433-.677.112.163.454zm-.266-.729q.32-.041.622-.094l-.249-.42-.531.081.159.437zm-.257-.707.472-.069-.27-.454-.377.043.171.48zm-.278-.754.317-.035-.3-.501-.206.017zm-.48-.498.193.528-.377.025-.095-.54c.099 0 .189-.008.279-.013m.188-.3.15-.008-.244-.407-.056.004.15.416zm-.441-.398.154.42-.227.008-.077-.424h.15zm.549 1.5.175.48a10 10 0 0 1-.518.051l-.086-.497zm.278.758-.574.056.085.463.648-.077zm2.546.75c-.249.07-.514.13-.78.185l-.257-.429c.24-.043.471-.098.698-.154l.343.399zm.951-.282q-.316.11-.651.201l-.339-.394a9 9 0 0 0 .566-.172l.428.365zm.309-.108-.42-.36c.171-.06.338-.128.497-.192l.493.33a9 9 0 0 1-.57.222m1.38-.612-.502.257-.497-.335q.211-.1.403-.214zm.694-.437q-.186.14-.398.265l-.6-.291.304-.219zm.587-.49a4 4 0 0 1-.317.284l-.711-.253q.12-.11.223-.231zm.429-.513a3 3 0 0 1-.21.274l-.832-.206.129-.206.909.138zm.283-.558a2 2 0 0 1-.129.296l-.939-.146q.043-.1.073-.214l.995.06zm.115-.565a1.6 1.6 0 0 1-.038.283l-1.016-.06q.013-.1.017-.197zm-.051-.592q.039.155.051.309l-1.045.021a2 2 0 0 0-.035-.227zm-.274-.638q.108.18.184.36l-1.02.107a2 2 0 0 0-.12-.27zm-.378-.502q.11.122.206.249l-.943.193c-.043-.069-.094-.129-.145-.193zm-.587-.544q.194.153.36.313l-.87.244a5 5 0 0 0-.265-.248zm-.621-.437q.184.117.356.24l-.772.304a5 5 0 0 0-.283-.193zm-.857-.472q.296.149.566.3l-.69.348a7 7 0 0 0-.472-.245zm-.887-.385q.302.121.587.248l-.592.399a10 10 0 0 0-.505-.21l.514-.437zM15.63 8.28c.24.073.471.15.703.231l-.515.438q-.297-.107-.6-.198zm-.982-.266.686.176-.416.476a15 15 0 0 0-.6-.155zM13.594 7.8c.257.043.514.094.763.15l-.334.497c-.227-.047-.45-.09-.678-.128l.249-.515zm-1.093-.146q.403.039.806.103l-.249.514a16 16 0 0 0-.715-.094zm-1.071-.073c.261.009.527.026.788.043l-.158.527a11 11 0 0 0-.716-.043zm-.279-.008-.085.527q-.34-.002-.673.008l.03-.53c.231-.005.48-.01.728-.005m-1.714.051.707-.043-.03.536q-.317.007-.651.034l-.022-.527zm-.926.095q.316-.043.652-.073l.021.523-.613.06zm-.801.137c.171-.035.343-.069.527-.099l.06.51a7 7 0 0 0-.506.077l-.077-.488zm-.772.188c.159-.043.322-.09.502-.128l.077.48q-.246.047-.484.107zm-.638.214.373-.128.094.446a5 5 0 0 0-.373.124L6.3 8.263zm-.583.28q.148-.086.321-.164l.095.429q-.146.06-.288.128l-.072-.407zm5.301-.15-.085.556-.592.009.035-.557c.235-.009.445-.013.642-.009m.283 0-.09.556c.206 0 .407.009.604.017l.163-.531a13 13 0 0 0-.677-.043m.96.068-.158.527q.301.018.591.056l.236-.498q-.34-.052-.669-.085m.96.128-.236.493c.189.026.369.056.549.09l.317-.467zm.922.18-.313.463.501.12.386-.441q-.286-.076-.574-.142m.87.227-.386.442q.237.071.454.15l.489-.42c-.18-.06-.369-.12-.557-.172m.865.283-.492.425.377.162.587-.402a10 10 0 0 0-.472-.185m.78.322-.6.407c.103.056.21.111.309.171l.72-.364zm.729.385-.742.369.185.129.818-.33c-.085-.056-.171-.116-.265-.172zm.536.365-.836.334.159.146.93-.262a4 4 0 0 0-.258-.214zm.484.45-.943.261.09.107.994-.201a3 3 0 0 0-.141-.172zm.313.424-.994.201.077.142 1.037-.107a2 2 0 0 0-.12-.236m.21.514-1.024.103.03.129 1.028-.026a2 2 0 0 0-.034-.206m.043.489-1.012.025-.008.095 1.003.056.017-.172zm-.082.458-.994-.055-.034.094.96.146c.025-.06.051-.12.068-.185m-.214.45-.943-.141-.069.103.892.218a2 2 0 0 0 .124-.18zm-.334.42-.875-.214-.133.129.793.287c.078-.065.15-.129.215-.202m-.48.408-.78-.28-.189.134.682.334zm-.592.355-.664-.325-.257.132.557.373q.185-.084.364-.18m-.677.309-.544-.36q-.175.075-.369.146l.446.385a10 10 0 0 0 .467-.171m-.78.274-.441-.381-.42.128.343.399c.18-.043.35-.095.518-.146m-.823.223-.343-.403a8 8 0 0 1-.548.12l.248.42q.335-.062.643-.137m-2.764.429-.086-.463-.651.03v.492l.737-.055zm-1.016-.42h-.617l-.094.527.711-.03zm-.994.527.094-.532-.596-.021-.17.557h.672zm-.964 0 .175-.575c-.193-.012-.385-.03-.565-.051l-.258.583zm-.943-.073.265-.592a14 14 0 0 1-.535-.085l-.317.591q.282.049.591.086zm-.875-.142.318-.595a6 6 0 0 1-.476-.116l-.369.587.527.129zm-.805-.205.364-.583a6 6 0 0 1-.411-.137l-.386.565q.207.083.433.155m-.699-.262.386-.557-.33-.146-.386.54q.155.085.33.163m-.578-.3.381-.527-.257-.141-.377.505q.116.085.257.163zm-.48-.33.368-.484a4 4 0 0 1-.236-.163l-.342.472.214.175zm-.408-.385.322-.438-.129-.111-.291.433.098.12zm-.265-.37.257-.385-.086-.103-.27.429.06-.026.043.086zm.793-3.62q.002.103.055.227.083-.077.185-.155l-.043-.257c-.065.082-.099.24-.197.184m.437-.43.055.335.232-.128-.069-.373q-.114.075-.218.163zm.471-.316.077.411c.099-.043.197-.077.305-.116l-.09-.437q-.15.065-.292.142m.553-.245.094.46.377-.104-.102-.476a5 5 0 0 0-.369.12m.639-.197.102.493.455-.085-.086-.515zm.745-.158.086.523.463-.06-.06-.536q-.245.03-.489.073m.763-.107.064.54.558-.047-.026-.558zm.874-.082.022.557.566-.03.034-.557q-.301.009-.622.03m.849.806.557-.009-.085.523h-.498zm-.814.034.54-.025-.03.514-.489.021zm-.815.065q.258-.029.54-.043l.022.505-.502.043zm-.724.085.45-.056.056.51-.42.056zm-.72.129.446-.086.086.51-.429.077zm-.27.06.103.501-.373.095-.103-.493zm-.947.304c.094-.043.197-.077.309-.116l.102.485a7 7 0 0 0-.32.107l-.091-.472zm-.497.257.236-.137.085.459-.248.12zm-.343.274.09-.085.043.231a2 2 0 0 1-.129-.146zM4.62 12.96a2 2 0 0 1-.086-.112l.249-.407.107.107zm.334.334a3 3 0 0 1-.137-.124l.287-.437.163.128zm.454.343c-.085-.06-.163-.111-.235-.171l.325-.437.249.158-.339.446zm.493.279-.248-.138.342-.454.24.129zm.579.257a4 4 0 0 1-.322-.137l.335-.467.312.128zm.673.227-.403-.129.325-.471.378.116zm.741.184a6 6 0 0 1-.463-.107l.3-.484c.142.034.279.068.429.098zm.797.137-.514-.081.266-.493q.226.045.471.077zm.823.086c-.18-.017-.36-.03-.531-.051l.218-.498.472.043-.159.502zm.287.013.154-.502.502.018-.094.501c-.189 0-.378-.008-.558-.017zm1.41.017-.566.004.095-.505.471-.005zm.883-.034q-.296.02-.604.025v-.505c.175 0 .351-.013.514-.022l.086.502zm2.349-.326-.498.103-.27-.45a5 5 0 0 0 .412-.073zm.673-.18q-.176.058-.365.103l-.351-.412a3 3 0 0 0 .274-.072l.442.385zm.65-.223-.333.124-.442-.38.257-.095zm.528-.236-.214.103-.527-.351.115-.06zm.463-.274q-.08.054-.163.103l-.643-.313.077-.051.729.257zm.39-.308-.116.102-.758-.27.038-.038zm.283-.313-.06.077-.875-.214V12.8zm.18-.335-.03.07-.746-.117.771.043zm.073-.35-.005.068-.87-.052zm-.06-.387.03.099-.995.026-.004-.03.969-.099zm-.189-.39.069.112-.973.098-.017-.021zm-.21-.274.013.017.009.005-.93.192-.026-.03.874-.248zm-.437-.407.141.116-.891.252-.056-.047zm-.433-.3c.056.03.111.069.163.103l-.814.325c-.03-.02-.06-.042-.095-.055l.746-.377zm-.291-.171-.755.377-.162-.086.642-.433q.141.064.275.142m-.922-.42.343.137-.643.441-.257-.103zm-.72-.24.412.128-.558.48c-.098-.03-.197-.064-.3-.09l.446-.514zm-.763-.185c.159.03.313.069.463.103l-.446.514-.377-.085zm-.801-.141c.171.021.343.047.506.077l-.36.531-.408-.064.258-.544zm-.84-.086.549.047-.258.544-.458-.047zm-.853-.03q.29 0 .566.013l-.159.544q-.243-.015-.488-.021l.085-.532zM4.89 11.52l-.193.373.051.077.232-.369-.086-.085zm.24-.163-.103-.103.193-.368.137.111zm.06.433-.253.403.111.111.275-.407zm.287-.129-.137-.111.24-.386.158.103-.257.394zm.068.403-.282.429.171.141.317-.433zm.373-.094-.214-.142.279-.42.257.13zm.073.377-.326.446c.078.056.163.107.253.163l.343-.459zm.446-.086a3 3 0 0 1-.279-.145l.339-.459.3.124-.36.485zm.081.36-.351.472q.111.063.236.12l.347-.484zm.403-.128-.227-.103.381-.51.228.081zm.099.343-.356.492.304.125.347-.506-.3-.111zm.463-.133L7.19 12.6l.394-.553.288.086zm.111.334-.351.514.368.112.326-.527zm.501-.154-.334-.09.399-.583.304.077-.369.6zm.129.326-.33.527q.192.051.403.09l.287-.54a10 10 0 0 1-.36-.077m.501-.19-.342-.068.368-.595.296.068-.322.6zm.15.318-.291.544c.146.026.296.043.45.065l.244-.549a11 11 0 0 1-.403-.06m.523-.214-.385-.052.317-.591.321.06-.257.583zm.172.304-.249.557.437.034.172-.557-.365-.034zm.445-.248-.33-.026.253-.566.249.039zm.202.3-.171.557.462.013.103-.562c-.133 0-.266-.008-.394-.013zm.446-.28q-.187.002-.36-.008l.162-.531.288.034zm.231.288-.103.557h.42v-.557zm.317-.287h-.266l.086-.484.18.013zm.274.279v.557l.472-.022-.094-.544zm.326-.292-.321.009v-.455l.248.009zm1.415.189.295.488.352-.06-.386-.458-.257.03zm.038-.287-.197.017-.244-.403.102-.013zm.549.21.377.44.218-.05-.48-.412zm.462-.1.463.4.215-.073-.536-.36zm-.18-.248-.09.018-.428-.365.518.343zm.215-1.748-.013-.009.574-.39.12.056-.677.343zm-.339-.129-.137-.051.502-.429.222.082zm-.39.172.095.025-.536.365h-.017l.458-.395zm-.064-.322.506-.433-.253-.072-.403.462zm-.356.197.095.026-.46.394zm-.098-.317.402-.463-.342-.072-.322.48zm-.433.197.223.048-.399.462-.15-.025zm-.129-.312.326-.476a5 5 0 0 0-.36-.056l-.232.489.27.042zm-.394.227.223.034-.339.497-.133-.017zm-.163-.309.231-.489-.407-.042-.15.497zm-.411.244.283.026-.253.527-.193-.017zm-.197-.3.145-.492q-.225-.013-.45-.018l-.077.493c.129 0 .257.009.381.017m-.43.27.344.009-.163.54-.266-.009zm-.235-.287.082-.497h-.472l-.03.506zm-.437.296.394-.009-.085.54h-.339zm-.257-.274.026-.51-.459.021.021.514.408-.025zm-.399.308.377-.021-.03.527-.325.013-.022-.514zm-.291-.257-.022-.523-.48.043.06.523c.146-.017.292-.034.442-.043m-.412.326.43-.043.016.51-.386.021zm-.304-.253-.06-.523-.407.052.086.522zm-.334.334.364-.051.056.48-.343.03zm-.322-.24-.085-.523-.416.078.107.514zm-.334.343.386-.06.068.441-.368.04-.086-.417zm-.334-.223-.103-.505-.373.094.103.488zm-.313.356.373-.077c.043.214.026.343.043.501l-.352-.124zm-.33-.214-.099-.472c-.12.034-.23.073-.33.107l.086.45zm-.099.313.159-.04.021.12zm-.822-.455.231-.116.056.3a4 4 0 0 1-.287-.184m9.66 2.477-.065.03-.343-.231zm-.035-2.353.065.035-.66.265zm-7.594.798c1.196.347 2.52.57 3.771.612.678.022 1.32.052 1.972-.158q.18-.06.257-.107a2 2 0 0 0-.184-.086 8.8 8.8 0 0 0-2.944-.506c-.995 0-2.186.172-2.872.245"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBEND.displayName = 'BEND'