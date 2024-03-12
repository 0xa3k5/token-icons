
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAlpaca = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M15.212 18.089a6.87 6.87 0 0 0 3.645-6.074c0-3.795-3.07-6.872-6.857-6.872S5.143 8.22 5.143 12.015a6.88 6.88 0 0 0 4.042 6.269l.171-.285.085-.1a6.43 6.43 0 1 1 5.599-.231l.156.33zm-.346-.79c1.884-.999 3.136-2.971 3.136-5.298 0-3.37-2.63-6-6.001-6s-6 2.63-6 6c0 3.163 2.314 5.673 5.385 5.97l.75-.029.847-.168 1.621-.568.176-.088zm-3.882-.31.954.512.21-.131.306.078.909-.642.824-.845V13.46l-.111-.695.052-.59-.053-.819-.058-1.166v-.17l.353-.734.294-.668.124-.825-.183-.25-.516.25-.811.897-.255.367-.431-.15h-.844l-.699.15-.647-.845-.588-.524-.393-.072-.209.334.138.74.653 1.265.157.157-.222.792-.046 1.461.111.63-.111.602v.583l-.052.891-.092.668.092.4z" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="m16.286 16.286 1.286-.643.826-1.53.228-1.286v-.298l-.951.402-.67 2.193zm-6.951.874.11.601.642.23 1.452.064-.746-.555z" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M12.925 8.896c-.322-.143-.692-.169-1.026-.145a3.6 3.6 0 0 0-.85.17c-.223-.332-.548-.762-.861-1.063-.17-.162-.345-.296-.507-.35a.4.4 0 0 0-.253-.012.36.36 0 0 0-.201.173c-.095.166-.104.379-.071.598.033.222.112.466.212.708.183.44.44.883.641 1.187-.24.575-.253 1.112-.21 1.381.042.26.024.448.01.598q-.01.095-.012.173c0 .086.021.188.04.276l.004.018c.018.088.034.164.038.226.004.06-.013.2-.043.36a4 4 0 0 1-.094.407.8.8 0 0 0 0 .375l.023.106c.016.073.03.135.033.195q.002.055-.017.194c-.013.088-.03.19-.05.294l-.01.057c-.014.084-.029.167-.04.24a2 2 0 0 0-.026.223v.585a.93.93 0 0 0-.369.291.53.53 0 0 0-.093.38.7.7 0 0 0 .114.296.94.94 0 0 0-.155.564.63.63 0 0 0 .189.4l-.206.507c-.02.047.018.06.063.075l.036.013.034.016c.038.019.062.03.08-.016l.184-.452q.088.05.198.088c.37.13.822.173 1.23.177a6.5 6.5 0 0 0 1.008-.07l.025-.007q.103.047.244.048c.168 0 .285-.064.354-.165q.011 0 .022-.002a9 9 0 0 0 1.54-.398c.21-.077.414-.166.59-.264l.348.774c.031.085.078.062.128.037l.023-.011.014-.007c.05-.022.086-.038.046-.115l-.361-.802a1 1 0 0 0 .343-.375c.167-.053.376-.124.572-.202.128-.05.252-.104.357-.157.1-.052.197-.11.257-.173q.04-.045.223-.145c.116-.064.262-.135.418-.206.152-.07.302-.156.441-.237.149-.086.285-.165.401-.21l.078-.184c-.076.03-.18.067-.298.108-.234.083-.518.183-.73.28-.16.073-.312.147-.436.215a1.3 1.3 0 0 0-.288.195.8.8 0 0 1-.186.12c-.094.047-.21.098-.333.146a9 9 0 0 1-.484.173.74.74 0 0 0-.389-.423c.031-.122.041-.286-.064-.41a.5.5 0 0 0-.351-.163 1 1 0 0 0-.125 0l-.01-.29-.025-.54c.223-.17.543-.394.878-.601.38-.235.767-.44 1.053-.526.618-.185 1.986-.78 2.597-1.057l.017-.295c-.615.278-2.091.918-2.689 1.097-.321.096-.734.317-1.116.554-.277.17-.544.354-.758.51l-.006-.113c.017-.147.038-.367.044-.565.003-.1.002-.2-.005-.28a1 1 0 0 0-.018-.116.26.26 0 0 0-.057-.114v.001l-.01-.023a1 1 0 0 1-.025-.079 1.824 1.824 0 0 1-.041-.484.5.5 0 0 1 .023-.144 1 1 0 0 0 .064-.386 1 1 0 0 0-.017-.184.5.5 0 0 0-.042-.13v-.043l.007-.113.006-.098c.011-.177.02-.419 0-.685a3 3 0 0 0-.14-.714c.091-.118.191-.305.286-.516.113-.25.224-.549.31-.84.088-.289.153-.576.17-.804a1 1 0 0 0-.014-.304c-.021-.085-.066-.171-.158-.208a.3.3 0 0 0-.21.002 1 1 0 0 0-.214.105 3.4 3.4 0 0 0-.48.39c-.305.289-.622.645-.842.91m-2.874-.893c.298.286.612.7.83 1.025a.13.13 0 0 0 0 .097.13.13 0 0 0 .17.077 3.3 3.3 0 0 1 .867-.185c.356-.026.722.013 1.006.176a.13.13 0 0 0 .18-.05.13.13 0 0 0-.007-.142c.215-.258.516-.596.805-.869.163-.154.319-.283.45-.367a.7.7 0 0 1 .167-.083c.047-.014.07-.011.08-.007.005.002.023.013.037.07a.8.8 0 0 1 .01.24 4 4 0 0 1-.162.763 7 7 0 0 1-.301.815c-.068.151-.135.28-.194.376a2 2 0 0 0-.124-.232c.106-.214.242-.507.344-.77.057-.148.105-.289.13-.401a.7.7 0 0 0 .022-.153c0-.04-.007-.092-.04-.127-.04-.042-.093-.039-.132-.026a.4.4 0 0 0-.115.07 2 2 0 0 0-.259.267 8 8 0 0 0-.493.663.134.134 0 0 0-.027.224c.466.38.62.943.659 1.442l.006.088-.972.26a.1.1 0 0 0 .05.193l.059-.016c.067.15.217.364.442.364.194 0 .335-.11.413-.205l-.004.055-.007.125a1 1 0 0 0 .004.12.2.2 0 0 0 .029.064q-.002-.003 0 0 .003.005.013.05a1 1 0 0 1 .012.138.7.7 0 0 1-.04.272.7.7 0 0 0-.046.24 2 2 0 0 0 .048.561 1 1 0 0 0 .036.117q.018.047.054.094l.002.007q.006.024.011.073.009.101.004.25c-.006.192-.026.41-.043.552l-.002.012v.012c.016.253.037.64.05.978a17 17 0 0 1 .013.597l-.002.046v.003l-.03.035a3 3 0 0 1-.136.139c-.116.112-.276.256-.454.413-.332.292-.723.62-1.001.852a.44.44 0 0 0-.27-.078.44.44 0 0 0-.336.154c-.326-.171-.77-.422-1.159-.68a5 5 0 0 1-.562-.419 1.6 1.6 0 0 1-.178-.181.4.4 0 0 1-.072-.115v-.78q0-.05.022-.187l.04-.235.011-.058c.019-.103.037-.21.05-.302.013-.09.022-.178.02-.24-.005-.08-.025-.171-.043-.252l-.017-.081a.55.55 0 0 1-.007-.26c.032-.104.072-.273.101-.434.029-.157.053-.325.046-.419a2 2 0 0 0-.042-.253l-.004-.023a1.3 1.3 0 0 1-.035-.228q.001-.041.008-.114a3 3 0 0 0 .011-.525c.087.09.232.188.425.188.232 0 .429-.214.525-.361l.03.009a.1.1 0 0 0 .057-.191l-1.057-.321c.025-.22.083-.478.195-.747a.1.1 0 0 0 .023-.053c.113-.257.275-.52.504-.767a.117.117 0 0 0-.005-.165.12.12 0 0 0-.112-.026 5 5 0 0 0-.394-.618 1.6 1.6 0 0 0-.258-.275c-.081-.065-.178-.116-.272-.09a.15.15 0 0 0-.106.11.4.4 0 0 0-.004.162c.017.116.067.265.131.422.122.298.303.642.44.882l-.062.115a7 7 0 0 1-.556-1.051 3 3 0 0 1-.2-.66q-.045-.305.047-.47c.03-.05.06-.072.09-.082q.044-.017.13.01c.12.04.269.15.433.307m3.293 3.352.137-.036a.108.108 0 0 1-.048.204.107.107 0 0 1-.089-.168m-3.088.06c0-.057.045-.104.1-.108l.072.022a.108.108 0 0 1-.065.194.11.11 0 0 1-.107-.108m3.21-2.163q.184.151.314.329a10 10 0 0 0 .306-.693c.057-.146.102-.279.125-.382a.6.6 0 0 0 .016-.148.3.3 0 0 0-.07.045c-.067.054-.15.142-.241.25a8 8 0 0 0-.45.599m.884 6.653v-.093a1 1 0 0 1 .104 0c.085.006.153.033.193.08.031.038.042.104.016.204a.9.9 0 0 1-.112.246.117.117 0 0 0 .03.162.115.115 0 0 0 .161-.031 1 1 0 0 0 .06-.103.5.5 0 0 1 .278.372c-.044.106-.154.22-.328.333a3.5 3.5 0 0 1-.679.322 9 9 0 0 1-1.407.371l.002-.035a.34.34 0 0 0-.034-.146 50 50 0 0 0 1.003-.854c.18-.157.343-.304.464-.421q.09-.088.15-.153a1 1 0 0 0 .05-.061.2.2 0 0 0 .039-.081 1 1 0 0 0 .01-.112M9.742 8.386c.029-.008.08.005.157.066.073.058.153.147.234.252.154.2.302.447.397.625a3 3 0 0 0-.283.375 8 8 0 0 1-.396-.803 2 2 0 0 1-.122-.39.3.3 0 0 1 0-.106c.004-.017.01-.018.013-.019m-.36 8.994a.67.67 0 0 1 .081-.35q.04.04.079.07c.05.04.122.033.162-.017a.117.117 0 0 0-.017-.163c-.122-.1-.245-.258-.265-.41a.3.3 0 0 1 .053-.215.6.6 0 0 1 .189-.165.6.6 0 0 0 .114.198q.084.102.206.21c.16.14.366.291.588.438.398.264.851.52 1.183.694a1 1 0 0 0-.017.086l-.003.016.002.017a.4.4 0 0 0 .043.141 7 7 0 0 1-.818.046c-.398-.003-.82-.046-1.156-.164a1 1 0 0 1-.217-.105.12.12 0 0 0-.08-.066l-.03-.03a.4.4 0 0 1-.097-.23m2.822.193a.2.2 0 0 1 .147.062.2.2 0 0 1 .051.084v.003l.001.002v.004a.3.3 0 0 1-.027.132c-.013.02-.04.054-.139.054-.106 0-.162-.034-.191-.063a.16.16 0 0 1-.044-.075.3.3 0 0 1 .05-.134c.023-.033.063-.066.152-.07m.17-6.076c.099-.011.186.034.277.107.098.078.11.212.099.321a1 1 0 0 1-.06.253c.08.066.175.155.233.259a.4.4 0 0 1 .056.208.37.37 0 0 1-.167.293.7.7 0 0 1-.157.29.61.61 0 0 1-.476.19.63.63 0 0 1-.623-.49.4.4 0 0 1-.137-.096.28.28 0 0 1-.083-.205.4.4 0 0 1 .061-.198 1 1 0 0 1 .217-.248.8.8 0 0 1-.076-.238c-.014-.116.005-.25.121-.34a.36.36 0 0 1 .32-.067c.065.018.121.05.164.083a.45.45 0 0 1 .232-.122m.185 1.64a.5.5 0 0 0 .098-.151.5.5 0 0 1-.162-.014.73.73 0 0 1-.347-.195.6.6 0 0 1-.444.186c.052.137.19.317.478.323a.48.48 0 0 0 .377-.15m-.034-.294a.33.33 0 0 0 .184-.003.07.07 0 0 1 .038-.018.242.242 0 0 0 .1-.181.27.27 0 0 0-.039-.139 1 1 0 0 0-.239-.25l-.04-.033.02-.047a1 1 0 0 0 .07-.26q.014-.151-.05-.204c-.083-.067-.134-.084-.179-.079-.048.006-.108.04-.202.128l-.048.044-.044-.047a.34.34 0 0 0-.151-.09.22.22 0 0 0-.205.045c-.065.05-.082.126-.07.217a.7.7 0 0 0 .086.238l.032.052-.05.037a.9.9 0 0 0-.227.243.3.3 0 0 0-.043.133c-.001.038.01.075.045.11a.3.3 0 0 0 .293.083.46.46 0 0 0 .25-.14.12.12 0 0 1 .086-.043.11.11 0 0 1 .092.037c.065.073.178.14.291.167m-.546-.863c.036.055.041.115.012.134-.028.019-.08-.01-.116-.066-.036-.055-.041-.115-.012-.134.028-.019.08.011.116.066m.288.117c-.029-.019-.023-.079.013-.134s.087-.085.116-.066.023.079-.013.134-.087.085-.116.066" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#32C67F" d="M15.212 18.089a6.87 6.87 0 0 0 3.645-6.074c0-3.795-3.07-6.872-6.857-6.872S5.143 8.22 5.143 12.015a6.88 6.88 0 0 0 4.041 6.269l.172-.285.084-.1a6.43 6.43 0 1 1 5.6-.231l.155.33zm-.346-.79C16.749 16.3 18 14.329 18 12.002c0-3.37-2.629-6-6-6S6 8.631 6 12.001c0 3.163 2.314 5.673 5.385 5.97l.75-.029.847-.168 1.622-.568.176-.088zm-3.883-.31.954.512.21-.131.307.078.909-.642.823-.845V13.46l-.111-.695.052-.59-.052-.819-.059-1.166v-.17l.353-.734.294-.668.124-.825-.183-.25-.516.25-.81.897-.255.367-.432-.15h-.843l-.7.15-.647-.845-.588-.524-.392-.072-.21.334.138.74.654 1.265.157.157-.223.792-.045 1.461.11.63-.11.602v.583l-.053.891-.091.668.091.4z" fillRule="evenodd" clipRule="evenodd"/><path fill="#32C67F" d="m16.285 16.286 1.286-.643.826-1.53.229-1.286v-.298l-.952.402-.67 2.193zm-6.95.874.11.601.642.23 1.451.064-.745-.555z" fillRule="evenodd" clipRule="evenodd"/><path fill="#000" d="M12.925 8.896c-.322-.143-.693-.169-1.026-.145a3.6 3.6 0 0 0-.851.17c-.223-.332-.547-.762-.861-1.063-.169-.162-.344-.296-.507-.35a.4.4 0 0 0-.252-.012.36.36 0 0 0-.202.173c-.094.166-.103.379-.07.598.033.222.112.466.212.708.182.44.44.883.64 1.187-.239.575-.253 1.112-.21 1.381.042.26.024.448.01.598q-.01.095-.011.173c0 .086.02.188.04.276l.003.018c.018.088.034.164.038.226.004.06-.013.2-.042.36a4 4 0 0 1-.095.407.8.8 0 0 0 0 .375l.023.106c.016.073.03.135.033.195q.003.055-.017.194c-.012.088-.03.19-.049.294l-.01.057c-.015.084-.03.167-.041.24a2 2 0 0 0-.025.223v.585a.93.93 0 0 0-.37.291.53.53 0 0 0-.093.38.7.7 0 0 0 .114.296.94.94 0 0 0-.154.564.63.63 0 0 0 .188.4l-.205.507c-.02.047.017.06.063.075l.036.013.034.016c.038.019.061.03.08-.016l.184-.452q.087.05.198.088c.37.13.821.173 1.23.177a6.5 6.5 0 0 0 1.008-.07l.025-.007q.101.047.244.048c.168 0 .284-.064.353-.165q.012 0 .023-.002a9 9 0 0 0 1.539-.398c.211-.077.415-.166.59-.264l.349.774c.03.085.077.062.127.037l.023-.011.014-.007c.051-.022.087-.038.046-.115l-.36-.802a1 1 0 0 0 .342-.375c.167-.053.376-.124.573-.202.127-.05.252-.104.356-.157.101-.052.198-.11.257-.173q.04-.045.223-.145c.116-.064.262-.135.419-.206.152-.07.301-.156.441-.237.148-.086.285-.165.4-.21l.078-.184c-.076.03-.18.067-.297.108-.234.083-.519.183-.731.28-.16.073-.311.147-.435.215a1.3 1.3 0 0 0-.288.195.8.8 0 0 1-.186.12c-.094.047-.21.098-.334.146a9 9 0 0 1-.484.173.74.74 0 0 0-.389-.423c.032-.122.042-.286-.063-.41a.5.5 0 0 0-.352-.163 1 1 0 0 0-.125 0q-.003-.136-.01-.29l-.025-.54c.223-.17.543-.394.878-.601.38-.235.768-.44 1.054-.526.618-.185 1.986-.78 2.596-1.057l.018-.295c-.615.278-2.092.918-2.69 1.097-.32.096-.733.317-1.116.554-.276.17-.543.354-.757.51l-.007-.113c.018-.147.038-.367.044-.565.003-.1.003-.2-.005-.28a1 1 0 0 0-.018-.116.26.26 0 0 0-.057-.114l.001.001-.011-.023a1 1 0 0 1-.024-.079 1.824 1.824 0 0 1-.041-.484.5.5 0 0 1 .023-.144 1 1 0 0 0 .064-.386 1 1 0 0 0-.018-.184.5.5 0 0 0-.042-.13l.001-.043.007-.113.006-.098c.01-.177.02-.419 0-.685a3 3 0 0 0-.14-.714c.09-.118.19-.305.286-.516.112-.25.223-.549.31-.84.087-.289.152-.576.17-.804a1 1 0 0 0-.015-.304c-.02-.085-.065-.171-.158-.208a.3.3 0 0 0-.21.002 1 1 0 0 0-.214.105 3.4 3.4 0 0 0-.48.39c-.305.289-.622.645-.841.91m-2.874-.893c.298.286.612.7.83 1.025a.13.13 0 0 0-.001.097.13.13 0 0 0 .17.077 3.3 3.3 0 0 1 .867-.185c.356-.026.723.013 1.007.176a.13.13 0 0 0 .18-.05.13.13 0 0 0-.007-.142c.214-.258.516-.596.805-.869.163-.154.318-.283.45-.367a.7.7 0 0 1 .167-.083c.046-.014.07-.011.079-.007.005.002.024.013.038.07a.8.8 0 0 1 .01.24 4 4 0 0 1-.162.763 7 7 0 0 1-.302.815c-.068.151-.134.28-.193.376a2 2 0 0 0-.125-.232c.106-.214.242-.507.345-.77.057-.148.104-.289.13-.401a.7.7 0 0 0 .021-.153c0-.04-.006-.092-.04-.127-.04-.042-.093-.039-.131-.026a.4.4 0 0 0-.115.07 2 2 0 0 0-.26.267 8 8 0 0 0-.493.663.134.134 0 0 0-.026.224c.465.38.619.943.658 1.442l.006.088-.972.26a.1.1 0 0 0 .051.193l.058-.016c.068.15.218.364.442.364.195 0 .335-.11.413-.205l-.003.055-.008.125a1 1 0 0 0 .005.12.2.2 0 0 0 .028.064q0-.003 0 0 .004.005.013.05a1 1 0 0 1 .013.138.7.7 0 0 1-.04.272.7.7 0 0 0-.047.24 2 2 0 0 0 .048.561 1 1 0 0 0 .037.117q.017.047.053.094l.003.007q.007.024.01.073.01.101.005.25c-.006.192-.027.41-.044.552l-.001.012v.012c.015.253.036.64.05.978a17 17 0 0 1 .013.597l-.003.046v.003l-.03.035a3 3 0 0 1-.135.139c-.117.112-.277.256-.454.413-.333.292-.723.62-1.002.852a.44.44 0 0 0-.269-.078.44.44 0 0 0-.336.154c-.327-.171-.77-.422-1.16-.68a5 5 0 0 1-.562-.419 1.6 1.6 0 0 1-.178-.181.4.4 0 0 1-.071-.115v-.78q0-.05.022-.187l.04-.235.01-.058c.019-.103.037-.21.05-.302.013-.09.023-.178.02-.24-.005-.08-.025-.171-.042-.252l-.018-.081a.55.55 0 0 1-.007-.26 4 4 0 0 0 .102-.434c.028-.157.052-.325.046-.419a2 2 0 0 0-.042-.253l-.005-.023a1.3 1.3 0 0 1-.034-.228q0-.041.008-.114a3 3 0 0 0 .01-.525c.087.09.233.188.425.188.232 0 .43-.214.526-.361l.03.009a.1.1 0 0 0 .057-.191l-1.058-.321c.026-.22.084-.478.195-.747a.1.1 0 0 0 .023-.053c.113-.257.275-.52.505-.767a.117.117 0 0 0-.006-.165.12.12 0 0 0-.111-.026 5 5 0 0 0-.395-.618 1.6 1.6 0 0 0-.257-.275c-.082-.065-.178-.116-.273-.09a.15.15 0 0 0-.106.11.4.4 0 0 0-.003.162c.017.116.067.265.13.422.123.298.303.642.44.882l-.061.115a7 7 0 0 1-.557-1.051 3 3 0 0 1-.199-.66q-.046-.305.047-.47c.03-.05.06-.072.089-.082q.045-.017.13.01c.12.04.27.15.434.307m3.293 3.352.136-.036a.108.108 0 0 1-.047.204.107.107 0 0 1-.09-.168m-3.088.06c0-.057.044-.104.1-.108l.071.022a.108.108 0 0 1-.064.194.11.11 0 0 1-.107-.108m3.21-2.163q.184.151.313.329a10 10 0 0 0 .307-.693c.056-.146.101-.279.125-.382a.6.6 0 0 0 .016-.148.3.3 0 0 0-.071.045c-.066.054-.15.142-.24.25a8 8 0 0 0-.45.599m.883 6.653.001-.093a1 1 0 0 1 .103 0q.13.01.194.08c.031.038.041.104.015.204a.9.9 0 0 1-.112.246.117.117 0 0 0 .031.162.115.115 0 0 0 .16-.031 1 1 0 0 0 .061-.103.5.5 0 0 1 .277.372c-.044.106-.153.22-.328.333a3.5 3.5 0 0 1-.678.322 9 9 0 0 1-1.407.371l.001-.035a.34.34 0 0 0-.033-.146 50 50 0 0 0 1.003-.854c.179-.157.342-.304.463-.421q.091-.088.15-.153a1 1 0 0 0 .05-.061.2.2 0 0 0 .04-.081 1 1 0 0 0 .01-.112M9.741 8.386c.03-.008.08.005.157.066.073.058.154.147.235.252.153.2.301.447.396.625a3 3 0 0 0-.282.375A8 8 0 0 1 9.85 8.9a2 2 0 0 1-.123-.39.3.3 0 0 1 0-.106c.005-.017.01-.018.013-.019m-.36 8.994a.67.67 0 0 1 .081-.35q.04.04.08.07c.049.04.121.033.161-.017a.117.117 0 0 0-.016-.163c-.122-.1-.246-.258-.266-.41a.3.3 0 0 1 .054-.215.6.6 0 0 1 .188-.165.6.6 0 0 0 .115.198q.084.102.205.21c.16.14.367.291.588.438.398.264.852.52 1.183.694a1 1 0 0 0-.017.086l-.002.016.001.017a.4.4 0 0 0 .043.141 7 7 0 0 1-.818.046c-.398-.003-.82-.046-1.155-.164a1 1 0 0 1-.217-.105.12.12 0 0 0-.08-.066l-.03-.03a.4.4 0 0 1-.097-.23m2.822.193a.2.2 0 0 1 .147.062.2.2 0 0 1 .052.084v.005l.001.002v.002a.3.3 0 0 1-.027.132c-.013.02-.041.054-.14.054-.105 0-.161-.034-.191-.063a.17.17 0 0 1-.044-.075.3.3 0 0 1 .05-.134c.024-.033.063-.066.152-.07m.171-6.076c.098-.011.186.034.277.107.098.078.109.212.098.321a1 1 0 0 1-.06.253c.08.066.175.155.234.259a.4.4 0 0 1 .056.208.37.37 0 0 1-.167.293.7.7 0 0 1-.157.29.61.61 0 0 1-.476.19.63.63 0 0 1-.623-.49.4.4 0 0 1-.138-.096.28.28 0 0 1-.083-.205.4.4 0 0 1 .062-.198 1 1 0 0 1 .217-.248.8.8 0 0 1-.076-.238c-.015-.116.005-.25.12-.34a.36.36 0 0 1 .32-.067c.065.018.122.05.165.083a.45.45 0 0 1 .231-.122m.185 1.64a.5.5 0 0 0 .098-.151.5.5 0 0 1-.162-.014.73.73 0 0 1-.348-.195.6.6 0 0 1-.444.186c.052.137.19.317.479.323a.48.48 0 0 0 .377-.15m-.034-.294a.33.33 0 0 0 .184-.003.07.07 0 0 1 .037-.018.242.242 0 0 0 .1-.181.27.27 0 0 0-.038-.139 1 1 0 0 0-.24-.25l-.039-.033.02-.047a1 1 0 0 0 .07-.26q.012-.151-.05-.204c-.083-.067-.135-.084-.18-.079-.048.006-.108.04-.202.128l-.047.044-.045-.047a.34.34 0 0 0-.15-.09.22.22 0 0 0-.206.045c-.064.05-.082.126-.07.217a.7.7 0 0 0 .086.238l.032.052-.05.037a.9.9 0 0 0-.226.243.3.3 0 0 0-.044.133c0 .038.011.075.046.11a.3.3 0 0 0 .293.083.46.46 0 0 0 .25-.14.12.12 0 0 1 .086-.043.11.11 0 0 1 .092.037c.065.073.177.14.29.167m-.547-.863c.036.055.042.115.013.134s-.08-.01-.117-.066c-.035-.055-.04-.115-.012-.134.029-.019.08.011.116.066m.289.117c-.03-.019-.024-.079.012-.134s.088-.085.116-.066c.03.019.024.079-.012.134s-.088.085-.116.066" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconAlpaca.displayName = 'Alpaca';
IconAlpaca.variants = 'brandedmono';

export default IconAlpaca;
