import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconOPTI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#fff"
        d="m18 16.5-.141-.214c.111-.322.171-.549.051-.896-.086-.24-.021-.66-.274-.793.171-.505-.069-1.285-.557-1.543 0-.06.008-.171 0-.227-.022-.206-.185-.283-.373-.253-.086.013-.172.082-.283.069-.3-.03-.36-.171-.9-.15-.24.008-.622.171-.737.377-.579 0-.347.077-.857.073 0-.407.081-.652-.326-.677-.283-.017-.643 0-.93 0-.107-.202-.077-.18-.077-.485v-.6c.081-.055.184-.055.3-.094.6-.193.985-.493 1.148-1.131.206-.827.095-1.012.197-1.603.069-.369.112-1.731-.072-2.1-.116-.223-.065.03-.176-.266a1.6 1.6 0 0 0-.347-.527 2.4 2.4 0 0 0-1.115-.69 2.87 2.87 0 0 0-1.885.292c-.87.557-.523.685-.952 1.174-.231.266-.214 1.958-.077 2.408l.172 1.149c.03.116.008.026.03.094.085.257.171.544.36.737.54.54.728.356 1.084.557 0 .19.064.545-.094.643-.133.086-.155.137-.232.275l-.081.21c-.24 0-.772-.099-.815.257v.415c-.377 0-.205.026-.377-.042-.133-.056-.321-.03-.475-.03-.056-.026-.125-.086-.185-.12a1.13 1.13 0 0 0-.857-.206c-.107.021-.163.043-.257.077-.6.197-.459 0-.737.026-.146.013-.107.013-.159.064-.115.12-.103.266-.103.42-.21.043-.372.386-.458.562-.15.317-.159.514-.124.977.012.004-.159.291-.159.527 0 .338-.236.861.039 1.165-.026.065-.12.206-.189.228 1.106 1.65 3.356 2.657 5.773 2.657C14.28 19.28 16.809 18.3 18 16.5"
      />
      <path
        fill="#0F0F0F"
        d="M11.529 6.493c-.172.099-.365.223-.566.214.068.12.026 0 .017.189l-.094.703c-.142.878-.15.788.034 1.808.094.493.021.369.206.566.085.103.043.034.098.167.099.039.206.219.343.291.514.258.986-.094 1.226-.522.098-.227.12-.536.154-.815.073-.548.094-.48-.073-.771-.145-.249-.068-.943-.043-1.251.018-.198-.03-.189-.012-.382-.185-.034-.275-.124-.429-.184-.15-.06-.287-.073-.424-.172-.026-.214-.086-.505-.03-.711-.065.099-.056.257-.06.377 0 .116 0 .236-.017.352a.85.85 0 0 1-.33.141"
      />
      <path
        fill="#171717"
        d="M14.683 18.167c-.099-.111-.116-.317-.004-.433a.68.68 0 0 1 0 .433zm-2.22-.583-.009-.282 1.119-.03c-.15.128-.189.188-.446.261-.236.069-.42.086-.664.051m.54-.501-.549.03-.013-.54c.793.03.438-.064.562.51m-.557-.604.051-.03c.163-.052.6-.043.767-.035.326.017.485.047.497.403.018.489-.372.407-.908.416-.064 0-.167.008-.223 0-.197-.004-.146-.017-.171-.043.137-.086.424-.026.587-.064.034-.129-.035-.107-.035-.274 0-.185.086-.172.043-.305-.175-.008-.514.005-.608-.068m0-.399c.531-.051.784.052 1.097.309a7 7 0 0 0-1.106 0l.004-.309zm-1.385-3.797c-.047.034-.021-.047-.077.107-.214.124-.57-.03-.797.099-.128.308.056.385-.021.612a1.4 1.4 0 0 1-.455.04c-.227-.035.065-.052-.377-.074-.321-.017-.184-.171-.668-.317-.712-.219-.973.172-1.235.129-.141-.026-.244-.09-.368-.069-.077.172-.004.343-.129.471-.137.16-.66.54-.488 1.226.073.296.017.189-.095.429-.102.227-.012.3-.085.505-.206.596-.073.455.06.926-.159.197-.133.095-.18.3l.038-.021c.197-.236.373-.347.759-.36-.043.377-.124.12-.206.386-.056.18-.141.261-.081.428l.098.103.052-.193 1.598.056c.06.377-.154.908-.12 1.183l.197.098c-.004-.171-.055-.291-.06-.416 0-.098.043-.282.052-.407l-.004-.163c-.03-.175.034-.137.025-.252-.013-.176.129-.056-.188-.108.077-.167.004-.06.107-.137l.086-.128c-.056-.112-.069-.073-.043-.202.12.146.154.425.321.36.12-.102-.09-.274-.06-.471l-.27.06.077-.364c.257-.043 1.303-.292 1.479-.202l-.184.09c-.236.043-.463.017-.733.129l-.03.017c.128.009.025-.009.073.03l.034.043a2.6 2.6 0 0 1 .827-.184l-.017.342c.004.013.013.017.017.043.009.069.051.043.051.347l-.03.3c-.055.202 0 .026-.042.112-.009.758-.198 1.157.385 1.658.129.116.09.009.155.159l.077.013c.025-.172.265-.094.711-.094.274 0 .544 0 .814-.009.558-.009 1.115-.026 1.672-.021l.351-.048-.017-.501v-.034c.043-.489-.043-1.35-.064-1.882h.488c.009.399 0 .785.009 1.17l.013.857c.008.189-.026.185.086.227-.043-.3.12-.205.214-.48.068-.192.06-.437-.06-.587-.202-.253-.197-.03-.193-.501 0-.244.009-.514 0-.754h-.549l-.017-.356c.142.009.485.051.613.086.146.034.352.163.532.214l-.022.3.009.27.047.086.291-.056c.039.214.043.45.077.66.065.369.022.321 0 .677l.215-.09c-.06-.3-.206-.857-.172-1.178l1.612-.082.043.201c.085-.05.021.035.085-.094.142-.235-.103-.261-.077-.557l-.038-.013c-.146-.06-.155-.034-.155-.257.823.043.557.424.789.309l-.06-.142c-.077-.043-.056-.021-.124-.077.025-.171.141-.287.158-.489.022-.265-.068-.308-.128-.48-.065-.188.017-.257-.108-.488-.12-.232-.171-.112-.098-.407a1.28 1.28 0 0 0-.206-.93c-.086-.133-.193-.189-.296-.3-.115-.12-.064-.3-.128-.463-.137-.034-.244.043-.399.069-.24.034-.587-.36-1.217-.108-.514.206-.351.326-.651.348-.485.034-.133.047-.412.085-.814.116-.214-.415-.471-.651-.223-.12-.917-.022-1.243-.073l-.009-1.329.313-.081c-.043-.043.086-.086-.128-.047.167-.103.223-.172.321-.287.112-.129.142-.129.249-.3-.052-.043 0-.073-.052.03-.12.03-.043.051-.124.12l-.021.017c-.348.257-.095.158-.309.325-.103.086-.304.215-.433.176.257 0 .043-.017.103.077-.086.386.069 1.166-.043 1.457-.18.22-.626.245-.827 0l-.03-.715c-.069-.073-.026 0-.06-.107-.017-.052-.013-.06-.017-.116-.017-.189-.022-.429.077-.57-.274-.103-.107-.086-.321-.227-.952-1.672-.656-1.642-.553-1.646.377 0-.189-2.563-.429-2.614-.004-.236-.171-.476-.043-.699.223-.385.326-.278.455-.214l-.112-.15c.064-.064.082-.064.137-.111.429-.335.613-.189.412-.292-.429.069-.956.609-1.106 1.076-.154.476-.257.043-.304 1.011-.035.626.141 2.619.42 3.069.085-.052.03.017.017-.095l-.236-.908c.017-1.616.09.279.81 1.178l.553.558c-.257 0-.039-.009-.133.043l.317.068.017.784c-.154.12-.351.215-.355.429zm-.561 1.418c.214 0 1.213-.02 1.346.022.193.06 1.165.964 1.397 1.286.128.175.163.878.15 1.148a1.8 1.8 0 0 0-1.003-.145c-.043.128-.034 1.17-.021 1.44l.042.184c.258.231 1.809-.184 1.372-1.084-.086-.168-.189-.215-.223-.292-.017-.043-.099-.831-.12-.973.201.154.287.502.51.656l.086 2.563v.308l-1.655.017-.12-4.658-1.941.026-.129.197c-.072.073-.008.025-.098.081l.013-.454c.407-.051.163-.043.377.116.056-.12.038-.287.017-.437m3.416 1.655.008.325c-.158-.162-.715-1.105-1.538-1.714-.095-.073-.185-.15-.292-.193l.12-.107 1.243-.004c0 .141-.021.317.026.433l.098-.12c0-.013.009-.017.013-.026l.27.034zM11.169 12.4l.051-.197c.099-.052.043-.06.21-.108l.004.313-.265-.004zm.981 1.873c.043.128.163 4.255.129 4.542l-1.843.013c-.429-.638-.386-.158-.373-1.38.004-.583.03-1.17.03-1.753v-.857c0-.21.223-.51.33-.54.073-.021 1.594-.043 1.727-.026m-5.237 2.297-.009.33-.141.008c.008-.116.043-.3.15-.343zm1.68-.069c.111.077.146.201.15.343-.146-.09-.214-.291-.15-.343m-.334.467-1.256-.043.09-1.62c.051-.004 1.08.343 1.397.386zm-1.406-1.114.098.021-.064.339c-.051.013-.021.008-.073.008 0 .13-.064.078-.137.043l-.188-.008c-.116-.215-.215-.403-.043-.635l.193.15c.064-.098.158-.077-.185-.2.043-.082.052-.087.099-.15.124.042.103.085.236.15.188.102.167 0 .188.192-.116.043-.073.043-.128.09zm.128-.621v.33c-.145 0-.248-.099-.325-.15.051-.15.15-.275.321-.18zm1.56.818c.052-.45.069-.244.163-.39.06-.094.073-.334.116-.441.064-.172.009-.026.291-.27a.4.4 0 0 1 .446-.047l.064-.069.022-.03.026-.03.33.013c0 .501.064.488-.459.896-.351.274-.463.317-.999.368m-1.435-3.17.334.077c-.077.098-.129.103-.201.223-.3.463-.168.077-.133-.3m10.02 3.574c.103.038.128.206.15.321-.129.06-.107 0-.129-.008zm-1.843.309c.03-.133.06-.275.167-.356.051.107-.047.278-.163.356zm.266-1.14c.192-.099.51-.133.728-.206.167-.06.514-.223.643-.232l.116 1.62-1.252.056-.235-1.243zm1.508-.172c-.128-.489.15-.45.3-.201-.068.115-.137.188-.3.201m.484.699-.445-.06-.017-.326.192-.064c.138-.078.228-.146.343-.206.112.141.043.231-.073.656m-2.681-1.28c.488.36.244.138.428.618.094.257.18.008.197.458a1.5 1.5 0 0 1-1.033-.33c-.325-.248-.497-.321-.454-.861.352-.069.326.025.459.056.175.042.223-.069.403.06m2.485-.814c.013.172.009.343-.09.472l-.094-.437zm-.343-.686c.142.073.095.065.176.21.069.12.073.103.103.258l-.214-.018-.069-.45z"
      />
      <path
        fill="#CDCFDB"
        d="m14.036 18.506-.086-2.563c-.223-.154-.309-.502-.51-.656.021.142.103.93.12.973.034.073.141.129.223.291.437.9-1.114 1.316-1.372 1.085l-.042-.184c-.013-.27-.022-1.312.021-1.44.36-.06.711.021 1.003.145.013-.27-.017-.973-.15-1.153-.232-.317-1.204-1.221-1.397-1.285-.133-.039-1.136-.022-1.346-.018.021.15.043.318-.017.438-.03-.022-.094-.15-.112-.15l-.265.034-.013.454c.086-.056.026-.008.098-.081l.129-.197 1.941-.026.12 4.658 1.655-.017zM9.41 14.28c.215-.754-.3-1.316-.844-1.461-.728-.198-1.328.3-1.461.857-.373 1.53 1.868 2.151 2.305.6zm6.138-1.586a1.217 1.217 0 0 0-1.025 1.359c.176 1.526 2.61 1.268 2.357-.364a1.17 1.17 0 0 0-1.328-.995z"
      />
      <path
        fill="#CDCFDB"
        d="M12.043 17.932c-.292 1.242-2.057.771-1.817-.403a.935.935 0 0 1 1.127-.699c.428.099.814.566.686 1.102zm-1.17-3.399c.566-.159 1.02.257 1.127.643a.934.934 0 0 1-.621 1.157c-1.14.347-1.758-1.44-.506-1.8m1.277-.261c-.129-.018-1.654.004-1.727.025-.107.03-.33.33-.33.536v.861c0 .583-.026 1.17-.03 1.753-.013 1.222-.052.742.373 1.38l1.843-.017c.034-.283-.086-4.41-.129-4.543z"
      />
      <path
        fill="#484848"
        d="M10.221 6.536c-.025.201.022.377.026.583.004.227-.047.471-.034.634.034.424.137.531.351.81.103.129.099.321.116.48.056.013.12.703.18.827l.351.429c.095.107.03.064.159.137a1 1 0 0 0-.129-.206c-.064-.077-.077-.069-.128-.159l.111.07c-.051-.13-.008-.065-.098-.168-.185-.197-.116-.073-.206-.566-.184-1.02-.18-.93-.034-1.808l.094-.703c.009-.189.051-.069-.017-.184.201.004.39-.12.566-.215.042-.257-.009-.394.09-.548.321.184-.052-.227.921-.043.364.064.069.561.21.711l.27.013c-.094.489-.017 1.226.034 1.723.017.184-.013.42-.03.587.129-.231.112-1.611.099-2.048-.009-.318.111-.262-.12-.33l.034-.716c.274-.022-.004-.107.386-.073l.034.15c.03.249.133.386.12.711-.013.258-.077.485-.081.733 0 .193-.039.515-.073.712-.039.227-.137.308-.189.535-.085.403-.081.978-.27 1.308l.103-.06c.064-.266.103-.588.15-.879.103-.643.214-.111.3-.694.043-.313.296-1.543.112-1.757l.188-.108c.03-.227-.094-.437-.197-.6-.193-.317-.24-.3-.424-.24l-.12.073c-.013-.205.043-.043-.142-.184-.193-.154-.171-.339-.973-.236l-.038.005-.33.012c-.412.013-.617.073-.934.292-.018.214-.223-.33-.429.728-.03.138-.043.185-.009.262"
      />
      <path
        fill="#201F20"
        d="M13.2 5.584c.18-.055.227-.077.42.236.103.167.227.377.197.6-.064.047-.021.009-.086.043l-.102.073c.184.206-.065 1.44-.112 1.757-.086.579-.197.051-.3.69-.043.291-.086.613-.15.879l-.103.06c-.004.072-.424.514-.655.6-.498.18-.673.162-.995-.193l-.454-.459c-.06-.128-.129-.814-.18-.827-.18 0-.133-.077-.184-.21 0 .009-.472-1.744-.605-2.383-.051.129.108.896.138 1.089.077.505.068.891.27 1.508.158.476.342 1.487.827 1.8.214.133.073.086.343.184-.18.28.085 1.573.042.108.172.017.27 0 .455-.009.184-.009.287-.051.454-.056.086-.03.129-.094.33-.252.28-.204.505-.473.656-.785.501-1.65.355-1.011.677-1.045.064-.665.128-1.5.056-2.169-.018-.137-.043-.334-.108-.441-.115-.168.129.158-.072-.078-.065-.077-.005.03-.06-.085-.108-.24-.215-.639-.6-.845-.078.06-.159.142-.099.21"
      />
      <path
        fill="#CED0DC"
        d="M8.49 15.686c-.317-.034-1.346-.386-1.397-.386l-.086 1.62 1.252.047.231-1.277z"
      />
      <path
        fill="#CDCFDB"
        d="m15.549 15.622.235 1.242 1.252-.06-.112-1.62c-.133.009-.48.172-.647.232-.218.073-.536.107-.728.205"
      />
      <path
        fill="#030403"
        d="M12.043 17.932c.124-.536-.257-1.003-.686-1.102a.94.94 0 0 0-1.131.699c-.245 1.178 1.525 1.641 1.817.402"
      />
      <path
        fill="#050506"
        d="M10.873 14.533c-1.252.36-.634 2.147.506 1.8A.934.934 0 0 0 12 15.172c-.107-.386-.561-.802-1.127-.643z"
      />
      <path
        fill="#414241"
        d="M13.23 10.294c-.103.172-.111.202-.223.335-.098.115-.154.184-.326.287.219-.034.09.004.133.047.249-.056.643-.231.789-.407.304-.373.454-1.072.48-1.564-.086-.018-.056-.069-.047-.193 0-.095.021-.33.021-.343.013-.9.069-.78-.034-1.856-.197.9-.322 3.034-.793 3.694"
      />
      <path
        fill="#4A4A4C"
        d="m15.176 16.873-.009-.274-.056-.155c-.03-.094.009-.055-.06-.128-.06-.06-.171-.086-.257-.112l-.3-.077c-.445-.098-.291-.03-.33.052.065.145-.073.085.206.094.313.009.326-.086.321.651 0 .489-.047.438.146.617.42.378-.103.73-.111 1.102.248-.056.548-.236.763-.33.008-.279.094-.437.064-.673-.103-.9-.172-.523-.467-.72l.03-.18.008.03c.047.137-.021.039.052.103"
      />
      <path
        fill="#494A4C"
        d="m8.55 18.043.051.364c.245.086.468.202.729.283.051-.06.039.021.06-.137-.201-.163-.506-.626-.18-.969.201-.21.146-.171.141-.548-.004-.206-.055-.506.056-.673.249-.129.519.077.446-.227-.42-.013-.617.141-.892.304-.042.454.215.549-.257.664-.017.009-.051.035-.06.022-.077-.125-.103.728-.094.917"
      />
      <path
        fill="#363636"
        d="M11.066 5.07c.201.103.017-.043-.412.292-.055.042-.073.042-.137.111l.112.15c-.129-.064-.232-.171-.455.214a1.14 1.14 0 0 0-.175.647l.222.052c-.034-.077-.021-.129.005-.262.094-.467.188-.565.514-.608-.017.017.043.111-.043 0-.051-.073-.021.013-.043-.12.322-.214.527-.279.943-.292l.326-.012.038-.005c.806-.103.78.086.973.236.185.137.129-.021.142.184l.124-.073c-.06-.068.021-.15.099-.214-.288-.437-1.74-.686-2.233-.3"
      />
      <path
        fill="#2D2D2E"
        d="M12.793 9.909c.09-.06.086-.026.124-.18l.043-.257c.026-.18.069-.343.064-.532.017-.167.052-.403.03-.587-.051-.497-.128-1.234-.034-1.723l-.27-.013c.069-.094.056-.463.017-.6 0-.008-.013-.013-.013-.025-.004-.052-.171-.082-.214-.086a1 1 0 0 0-.206-.026l-.034-.098c-.381-.009-.386-.009-.33-.378-.274.035-.334.095-.549.146l.412-.064a.5.5 0 0 1-.022.257c-.047.099-.085.047-.192.206-.099.154-.043.291-.086.544.278-.077.386-.103.42-.266l.013.112c.137.094.274.107.428.167.15.06.24.15.42.184-.017.197.035.184.017.382-.025.308-.102 1.002.043 1.255.172.287.146.219.073.772-.034.274-.056.583-.154.81"
      />
      <path
        fill="#393A39"
        d="m9.857 9.223.236.909c.013.111.073.042-.017.094.085.278.218.377.411.514.206.142.373.154.596.266.094-.056-.129-.043.128-.043l-.548-.561c-.39-.489-.399-1.509-.502-1.625-.017.107-.012.232-.025.27-.022.077-.026.047-.112.022-.085.214-.025.137-.171.154z"
      />
      <path
        fill="#8E8E8E"
        d="M11.931 13.474c.168-.03.155-.072.365-.072l1.225.034c.155-.116.223-.223.138-.454l-.995-.026c-.257.026-.694.441-1.285.021.042.146.115.184.218.292.154.158.107.09.249.154l.03.013c.004.004.021.025.025.017.005-.009.022.013.03.021"
      />
      <path
        fill="#8E8E8E"
        d="M11.134 12.502c.035.18.099.3.163.411.21-.111.227.107.519.128.613.043.488-.18.848-.188.305-.009.75.039 1.029-.004.103-.408-.043-.343-.356-.343-1.256-.009-.574-.069-.981.193-.322.205-.699.145-.943-.185z"
      />
      <path
        fill="#767676"
        d="M6.973 14.1c-.069.219-.189.643-.206.892.287.12 1.47.732 1.882.6l.064-.382c-.519.073-.772.129-1.2-.18-.3-.214-.437-.428-.54-.93m8.318 1.029c.022.137.06.295.12.385.399-.03 1.02-.248 1.406-.42.154-.068.27-.162.403-.227l-.214-.87c-.129.335-.069.557-.519.917-.424.343-.651.24-1.196.215"
      />
      <path
        fill="#121212"
        d="M15.129 15.274c-.056-.184-.099-.128-.249-.235-.21-.15-.116-.086-.399-.086-.364-.004-.008-.124-.355-.099-.035.202-.03.352.098.472.219.201.78.668 1.115.514-.026-.188.03-.034-.146-.137a2 2 0 0 0-.064-.429"
      />
      <path
        fill="#111011"
        d="M8.687 15.943c.306-.006.6-.125.823-.334.094-.078.227-.189.3-.258.06-.064.064-.064.077-.18l-.034-.27c-.364-.017.107.095-.446.095-.236 0-.201.051-.377.171-.287.193-.094.364-.201.579-.103.214-.073-.086-.142.201z"
      />
      <path
        fill="#CDCFDB"
        d="m10.586 19.016.128.026c.193.051-.193-.065.06.017l.065.03h2.185c.09-.052.065-.039.193-.06l.184-.03c.129-.017.275-.039.386-.107-.557-.005-1.114.012-1.671.021-.275.009-.545.009-.815.009-.45 0-.69-.078-.715.094"
      />
      <path
        fill="#8E8E8E"
        d="m11.43 13.449.081-.022-.325-.415a3.1 3.1 0 0 0-.866.008c-.154.253 0 .459.27.459.279 0 .57-.069.84-.03"
      />
      <path
        fill="#505050"
        d="M9.737 7.92q-.026.328.034.652c.026.128.099.531.086.651.146-.017.086.06.172-.154.085.025.09.055.111-.022.013-.038.013-.163.026-.27.013-.291-.116-.72-.15-1.028-.099.021-.052.013-.12.034l-.069.017c-.03.013-.056-.073-.086.12z"
      />
      <path
        fill="#2D2E30"
        d="m9.429 17.786.017.433c-.112-.12-.167-.322-.013-.429zm-.022.763c.202.171-.077-.043.124.188L9.49 16.47l.492.009-.012.707c.042-.086-.013.085.042-.107l.03-.3c0-.309-.042-.283-.051-.352 0-.026-.013-.03-.017-.043l-.54.039c0 1.487.034.891-.197 1.26A.6.6 0 0 0 9.15 18a.8.8 0 0 0 .086.322c.034.064.034.051.081.107l.086.12z"
      />
      <path
        fill="#484848"
        d="M8.717 16.419c.073.077.24.582-.094.497-.146-.043-.052-.043-.214-.052-.099.078-.026-.03-.103.137.287.048.115.618.227 0 .613.16.334-.295.33-.62.133-.057.21-.074.3-.155l-.034-.043c-.048-.043.051-.021-.073-.03q.015-.008.03-.013c.27-.116.497-.09.728-.133l.189-.086c-.013-.008-.026-.042-.172-.034l-1.307.232-.077.364z"
      />
      <path
        fill="gray"
        d="M13.196 7.86c.073-.163.085-.518.12-.741.06-.442-.009-.562.205-.635.035.27-.09.823-.124 1.119-.004.171-.073.716-.231.827zm.3-.493c0-.248.068-.48.081-.728.013-.326-.09-.467-.12-.716l-.038-.15c-.386-.034-.108.051-.386.073l-.03.716c.231.064.111.012.12.33.013.437.034 1.817-.099 2.048.005.189-.043.352-.068.532a2 2 0 0 1-.043.257c-.034.154-.03.12-.12.18-.24.428-.712.784-1.226.522-.137-.072-.244-.252-.343-.29l-.107-.07c.047.09.06.082.129.16.055.068.077.11.128.205.077.274.699.244.956.15a1.8 1.8 0 0 0 .634-.664c.189-.33.185-.9.27-1.308.052-.227.15-.308.189-.535.034-.197.073-.515.073-.712"
      />
      <path
        fill="#6A6B6D"
        d="M10.479 6.973c.107.236.132.386.055.686-.064-.043-.081.068-.128-.279 0-.038-.026-.167-.026-.188-.013-.36.004-.138.099-.219m.201-.279c.056-.068.043-.06.249-.06.017-.162-.005-.162.051-.287l.116-.18.013-.025.025-.043c.086-.142.206-.279.219-.48-.197.017-.527.034-.626.163-.257.342-.206.484-.394.707-.069.085.013-.026-.056.073-.008.098.086 1.062.099 1.118.077.287.313.63.261.96l.06-.017c-.017-.351-.103-.677-.051-1.011.008-.052.214-.648.034-.918"
      />
      <path
        fill="#8E8E8E"
        d="m11.1 12.827-.03-.043c-.017-.03-.017-.021-.039-.068-.025-.073-.025-.107-.034-.189l-.728.026-.022.343.459-.005c.111 0 .368.043.394-.064"
      />
      <path
        fill="#9B9B9C"
        d="m13.196 7.86-.03.57c.158-.111.227-.656.231-.827.034-.296.159-.849.124-1.114-.214.068-.145.188-.205.63-.035.223-.047.578-.12.741"
      />
      <path
        fill="#2F2F31"
        d="M11.516 17.97c.287-.54-.472-.943-.759-.433-.304.532.502.917.759.429z"
      />
      <path
        fill="#6A6B6D"
        d="M11.229 15.172c-.258-.022-.455.072-.365.36.107.351.755.12.365-.36"
      />
      <path
        fill="#444443"
        d="M10.864 15.532c.107.351.755.12.365-.36-.253-.026-.45.072-.365.36m-.115.012c.072.399.801.373.702-.18-.085-.463-.805-.355-.702.18"
      />
      <path
        fill="#3D3D3D"
        d="M6.184 16.646c.06.128.043.107.167.171.095-.171.159-.244.408-.274-.069.146-.103.373-.198.471.039.069 0 .043.095.086-.06-.167.025-.248.085-.428.078-.266.159-.009.202-.386-.386.013-.562.128-.759.36"
      />
      <path
        fill="#3E3E3E"
        d="M17.374 16.997c.065-.043.043-.013.086-.06.056-.06.009 0 .06-.085-.137.102-.043.042-.09-.022l-.051-.137c-.035-.103-.056-.176-.095-.274.24.038.257.09.399.197.013.094.017.017-.052.051.043.086-.034.069.069.064.043-.077.026-.042.077-.107.069-.085.052-.043.116-.145-.232.115.034-.266-.789-.305 0 .219.009.193.155.258q.018-.002.038.008c-.026.296.214.322.077.557"
      />
      <path
        fill="#67686A"
        d="M10.886 17.589c.043.235 0 .21.124.377l.274-.013c.146-.274.082-.514-.201-.471-.107.017-.172.102-.18.09l-.022.017z"
      />
      <path
        fill="#222"
        d="M6.677 16.269c.073.03.137.085.137-.043-.171-.069-.073.008.017-.095.228-.257-.342-.36-.342-.36-.112.078-.069.3.072.403z"
      />
      <path
        fill="#0B0B0B"
        d="M17.16 15.84c0 .334.283.24.429.082l.008-.27c-.163 0-.351.111-.437.188"
      />
      <path
        fill="#3C3C3B"
        d="m6.643 15.772.21.085c.051-.051.008-.051.128-.094-.025-.193-.004-.09-.192-.193-.133-.069-.112-.103-.236-.15-.043.06-.056.069-.099.15.343.129.249.103.185.201z"
      />
      <path
        fill="#ABABAC"
        d="M10.479 6.973c-.095.086-.112-.141-.099.219l.03.188c.043.343.06.236.129.274.072-.295.042-.445-.06-.685z"
      />
      <path
        fill="#777"
        d="M7.054 13.444c.103-.098.107-.154.185-.265.077-.12.124-.129.201-.223l-.334-.082z"
      />
      <path
        fill="#767676"
        d="M16.526 12.844c.24.215.171.262.373.498l-.043-.566z"
      />
      <path
        fill="#6A6B6D"
        d="M9.377 15.9c.287 0 .609-.15.626-.471l-.493.373c-.051.042-.086.072-.133.102z"
      />
      <path
        fill="#696A6A"
        d="M15.214 16.864c.146.043.326-.03.446-.115-.056-.073-.039-.039-.111-.086l.034-.086c.043-.253.034-.056-.03-.137-.056.159-.133.437-.292.381-.012-.012-.098.022.009-.257.124-.325.06-.184.03-.223-.111.12-.129.373-.086.523"
      />
      <path
        fill="#6A6B6D"
        d="m14.614 15.853-.587-.463c-.004.231.043.227.184.313.146.086.206.129.403.15"
      />
      <path
        fill="#67686A"
        d="M15.583 16.363c-.022-.176-.047-.167-.214-.21a1.6 1.6 0 0 0-.403-.043c.15.111.394.197.617.253"
      />
      <path
        fill="#F7F9F9"
        d="m6.69 13.954.197-.017.09-.45c-.158.073-.236.245-.287.472z"
      />
      <path
        fill="#0D0D0D"
        d="m17.52 16.852-.129-.33c.108.034.022-.026.129.072.086.069.034.06.111.073.069-.034.065.043.052-.051-.137-.107-.159-.159-.399-.197.039.098.06.171.095.274l.051.137c.051.064-.043.124.086.022z"
      />
      <path
        fill="#101010"
        d="M6.351 16.817c.018.043-.077.03.052.035.068-.129.111-.185.244-.215l-.111.309c-.013.154-.013.038.03.068.09-.098.124-.325.193-.471-.249.03-.313.099-.408.274"
      />
      <path fill="#737374" d="m9.514 13.629.017-.472h-.24l.228.472z" />
      <path
        fill="#656565"
        d="M8.413 16.864c.158.009.064.013.214.052.33.085.163-.42.09-.497-.03.201.18.372.06.475-.171.065-.201-.214-.321-.36-.03.129-.013.09.043.206l-.086.129z"
      />
      <path
        fill="#767676"
        d="M14.447 13.573c.064-.171.154-.317.214-.463h-.227z"
      />
      <path
        fill="#707272"
        d="M9.514 14.336c-.077.128-.158.304-.231.445l.236-.017z"
      />
      <path
        fill="#696A6A"
        d="m14.464 14.704.227.018-.192-.36-.03-.078c-.022-.141-.018.018.012-.055z"
      />
    </BaseIcon>
  ),
)

IconOPTI.displayName = 'OPTI'