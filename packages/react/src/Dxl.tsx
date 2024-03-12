
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDxl = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 5.572a6.429 6.429 0 1 0 0 12.857 6.429 6.429 0 0 0 0-12.857m0-.858a7.286 7.286 0 1 0 0 14.572 7.286 7.286 0 0 0 0-14.572M8.687 16.286a1.09 1.09 0 0 1-.943-.596 1 1 0 0 1-.008-.844l1.363-2.786v-.004l1.114-2.28c.073-.146.073-.155.073-.287V7.286h-.429a.435.435 0 0 1-.428-.429c0-.214.167-.428.415-.428h1.299v1.285H12v.429h-.857v.428H12v.43h-.857v.736c0 .073-.013.086-.039.142l-.021.051-.9 1.822L8.593 15a.23.23 0 0 0-.021.116.343.343 0 0 0 .33.313h6.21c.24 0 .308-.189.317-.335a.3.3 0 0 0-.022-.128L12.892 9.87c-.04-.086-.04-.086-.035-.201v-3.24h1.286c.218 0 .428.214.428.428 0 .206-.2.429-.428.429h-.429v2.258c0 .09.022.129.065.215l.043.085q1.201 2.436 2.4 4.873c.15.304.2.742-.07 1.102a1.03 1.03 0 0 1-.843.45c-.206 0-4.14.017-5.863.017zm3.052-1.787a.246.246 0 1 1 .493 0 .246.246 0 0 1-.493 0m.728-.052a.08.08 0 0 1-.02-.053.074.074 0 0 1 .127-.05.07.07 0 0 1-.003.1.073.073 0 0 1-.1.003zm-1.071 0a.07.07 0 0 1-.02-.053.074.074 0 0 1 .127-.05.073.073 0 0 1-.003.1.073.073 0 0 1-.1.003zm1.397-.193a.2.2 0 0 1 .026-.321.25.25 0 0 1 .274-.009c.159.095.124.313-.034.378a.25.25 0 0 1-.189 0 .2.2 0 0 1-.077-.048m-1.946-.008c-.094-.095-.064-.236.043-.305a.24.24 0 0 1 .266 0c.107.078.128.215.034.313a.237.237 0 0 1-.343-.008m1.072-.292a.073.073 0 1 1 .145 0 .073.073 0 0 1-.145 0m.728-.038a.073.073 0 1 1 .099-.103.073.073 0 0 1-.103.103zm-1.414 0a.073.073 0 0 1 .034-.12.07.07 0 0 1 .073.015.07.07 0 0 1 .021.07.07.07 0 0 1-.053.06.073.073 0 0 1-.075-.024m.686-.167a.08.08 0 0 1 .025-.057.07.07 0 0 1 .06-.016.073.073 0 0 1 .057.093.073.073 0 0 1-.142-.02m.578.021a.073.073 0 0 1-.003-.106.07.07 0 0 1 .054-.021.073.073 0 1 1-.05.127m-1.114 0a.073.073 0 0 1-.003-.106.07.07 0 0 1 .053-.021.07.07 0 0 1 .053.024.073.073 0 0 1-.103.103m1.847-.026a.073.073 0 1 1 .102-.104.073.073 0 0 1-.102.104m-2.606 0a.074.074 0 0 1 .022-.121.074.074 0 1 1-.022.121m1.727-.12a.073.073 0 0 1-.003-.106.07.07 0 0 1 .083-.014.07.07 0 0 1 .042.068.07.07 0 0 1-.071.07.07.07 0 0 1-.05-.018m-.822 0a.073.073 0 1 1 .101-.104.073.073 0 0 1-.101.104m.025-.463a.44.44 0 1 1 .879 0 .44.44 0 0 1-.879 0m1.586-.004a.246.246 0 1 1 .493 0 .246.246 0 0 1-.493 0m-2.786 0a.244.244 0 1 1 .417.175.246.246 0 0 1-.42-.175zm2.559 0a.07.07 0 0 1 .027-.053.073.073 0 0 1 .114.083.07.07 0 0 1-.032.039q-.023.012-.05.008a.07.07 0 0 1-.06-.072zm-.206 0a.073.073 0 1 1 .146 0 .073.073 0 0 1-.146 0m-.206 0a.073.073 0 0 1 .073-.073.073.073 0 1 1-.072.073m-1.165 0a.07.07 0 0 1 .027-.053.073.073 0 0 1 .114.083.07.07 0 0 1-.081.047.07.07 0 0 1-.06-.072zm-.206 0a.073.073 0 1 1 .146 0 .073.073 0 0 1-.146 0m-.206 0a.073.073 0 1 1 .146 0 .073.073 0 0 1-.146 0m1.428-.355a.073.073 0 1 1 .096-.11.073.073 0 0 1-.097.11m-.823 0a.073.073 0 1 1 .097-.11.073.073 0 0 1-.097.11m1.701-.13a.073.073 0 1 1 .105-.1.073.073 0 0 1-.105.1m-2.588 0a.07.07 0 0 1 .003-.097.073.073 0 0 1 .124.04.073.073 0 0 1-.054.081.07.07 0 0 1-.073-.023m1.855-.016a.073.073 0 0 1-.003-.105.07.07 0 0 1 .103-.001.073.073 0 0 1 .002.102.07.07 0 0 1-.069.021.1.1 0 0 1-.033-.017m-1.114 0a.07.07 0 0 1-.022-.071.073.073 0 0 1 .09-.054.073.073 0 0 1 .034.12.07.07 0 0 1-.069.022.1.1 0 0 1-.033-.017m.536-.086a.07.07 0 0 1 .047-.069.07.07 0 0 1 .081.022.07.07 0 0 1 .015.065.07.07 0 0 1-.077.054.074.074 0 0 1-.066-.068zm.728-.06a.073.073 0 0 1 .077-.12.07.07 0 0 1 .044.057.07.07 0 0 1-.027.067.073.073 0 0 1-.098-.004zm-1.414 0a.073.073 0 0 1 .034-.124.073.073 0 0 1 .09.087.07.07 0 0 1-.05.053.07.07 0 0 1-.07-.016zm.686-.146a.073.073 0 1 1 .145 0 .073.073 0 0 1-.145 0m-1.076-.004a.245.245 0 1 1 .343-.013v.005a.25.25 0 0 1-.343.008m1.959-.008a.24.24 0 1 1 .265.055.25.25 0 0 1-.265-.056m-.883-.193a.08.08 0 0 1 .025-.057.07.07 0 0 1 .06-.016.073.073 0 0 1 .057.093.073.073 0 0 1-.142-.02m-.18-.408a.248.248 0 1 1 .492-.064.248.248 0 0 1-.492.065m.728.163a.073.073 0 0 1 .002-.101.1.1 0 0 1 .033-.019.073.073 0 0 1 .094.086.073.073 0 0 1-.095.058.1.1 0 0 1-.034-.024m-1.071-.004a.073.073 0 0 1 0-.106.1.1 0 0 1 .034-.018.073.073 0 0 1 .092.087.07.07 0 0 1-.028.041.07.07 0 0 1-.094-.004zM12 14.23a.075.075 0 1 0 0-.15.075.075 0 0 0 0 .15" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="url(#DXL__a)" d="M12 5.572a6.429 6.429 0 1 0 0 12.857 6.429 6.429 0 0 0 0-12.857m0-.858a7.286 7.286 0 1 0 0 14.572 7.286 7.286 0 0 0 0-14.572M8.687 16.286a1.09 1.09 0 0 1-.943-.596 1 1 0 0 1-.009-.844l1.363-2.786v-.004l1.114-2.28c.073-.146.073-.155.073-.287V7.286h-.428a.435.435 0 0 1-.429-.429c0-.214.167-.428.416-.428h1.298v1.285H12v.429h-.858v.428H12v.43h-.858v.736c0 .073-.012.086-.038.142l-.022.051-.9 1.822L8.592 15a.23.23 0 0 0-.021.116.343.343 0 0 0 .33.313h6.21c.24 0 .309-.189.317-.335a.3.3 0 0 0-.021-.128L12.89 9.87c-.039-.086-.039-.086-.034-.201v-3.24h1.285c.219 0 .429.214.429.428 0 .206-.201.429-.429.429h-.428v2.258c0 .09.021.129.064.215l.043.085q1.203 2.436 2.4 4.873c.15.304.201.742-.069 1.102a1.03 1.03 0 0 1-.844.45c-.206 0-4.14.017-5.863.017zm3.051-1.787a.246.246 0 1 1 .493 0 .246.246 0 0 1-.493 0m.729-.052a.08.08 0 0 1-.021-.053.074.074 0 0 1 .128-.05.07.07 0 0 1-.003.1.073.073 0 0 1-.1.003zm-1.072 0a.07.07 0 0 1-.02-.053q0-.015.006-.028a.074.074 0 0 1 .121-.022.073.073 0 0 1-.103.103zm1.397-.193a.2.2 0 0 1 .026-.321.25.25 0 0 1 .274-.009c.159.095.125.313-.034.378a.25.25 0 0 1-.188 0 .2.2 0 0 1-.078-.048m-1.945-.008c-.095-.095-.065-.236.043-.305a.24.24 0 0 1 .265 0c.107.078.129.215.035.313a.237.237 0 0 1-.343-.008m1.071-.292a.073.073 0 1 1 .146 0 .073.073 0 0 1-.146 0m.729-.038a.073.073 0 1 1 .098-.103.073.073 0 0 1-.003.1.073.073 0 0 1-.1.003zm-1.415 0a.073.073 0 0 1 .035-.12.07.07 0 0 1 .072.015.07.07 0 0 1 .022.07.07.07 0 0 1-.053.06.073.073 0 0 1-.075-.024m.686-.167a.07.07 0 0 1 .054-.072.073.073 0 0 1 .09.052.073.073 0 1 1-.144.02m.579.021a.073.073 0 0 1-.003-.106.07.07 0 0 1 .053-.021.07.07 0 0 1 .053.024.073.073 0 0 1-.103.103m-1.115 0a.073.073 0 0 1-.003-.106.07.07 0 0 1 .054-.021.073.073 0 0 1 .07.075.073.073 0 0 1-.12.052m1.848-.026a.07.07 0 0 1-.009-.094.07.07 0 0 1 .078-.028.073.073 0 1 1-.07.122m-2.606 0a.074.074 0 0 1 .021-.121.074.074 0 1 1-.021.121m1.727-.12a.073.073 0 0 1-.003-.106.07.07 0 0 1 .082-.014.07.07 0 0 1 .042.068.07.07 0 0 1-.07.07.07.07 0 0 1-.051-.018m-.823 0a.07.07 0 0 1-.008-.094.07.07 0 0 1 .078-.028.07.07 0 0 1 .054.064.07.07 0 0 1-.042.072.07.07 0 0 1-.082-.014m.026-.463a.44.44 0 1 1 .878 0 .44.44 0 0 1-.878 0m1.586-.004a.246.246 0 1 1 .492 0 .246.246 0 0 1-.492 0m-2.786 0a.244.244 0 1 1 .416.175.247.247 0 0 1-.42-.175zm2.558 0a.074.074 0 0 1 .055-.067.08.08 0 0 1 .06.01.07.07 0 0 1 .027.087.073.073 0 0 1-.125.022.07.07 0 0 1-.017-.047zm-.205 0a.073.073 0 1 1 .145 0 .073.073 0 0 1-.145 0m-.206 0a.073.073 0 0 1 .073-.073.073.073 0 1 1-.073.073m-1.166 0a.07.07 0 0 1 .028-.053.073.073 0 0 1 .114.083.07.07 0 0 1-.082.047.07.07 0 0 1-.06-.072zm-.205 0a.073.073 0 0 1 .072-.073.073.073 0 1 1-.072.073m-.206 0a.073.073 0 1 1 .145 0 .073.073 0 0 1-.145 0m1.427-.355a.073.073 0 1 1 .097-.11.073.073 0 0 1-.097.11m-.823 0a.07.07 0 0 1-.02-.082.073.073 0 0 1 .123-.021.073.073 0 0 1-.103.103m1.702-.13a.073.073 0 1 1 .105-.1.073.073 0 0 1-.105.1m-2.589 0a.07.07 0 0 1 .003-.097.073.073 0 0 1 .124.04.073.073 0 0 1-.053.081.07.07 0 0 1-.074-.023m1.856-.016a.07.07 0 0 1-.022-.071.073.073 0 0 1 .089-.054.073.073 0 0 1 .035.12.07.07 0 0 1-.07.022.1.1 0 0 1-.032-.017m-1.115 0a.073.073 0 1 1 .12-.074.073.073 0 0 1-.05.09.07.07 0 0 1-.07-.016m.536-.086a.073.073 0 1 1 0 .004zm.729-.06a.073.073 0 0 1 .077-.12.07.07 0 0 1 .044.057.07.07 0 0 1-.027.067.073.073 0 0 1-.099-.004zm-1.415 0a.07.07 0 0 1-.02-.072.07.07 0 0 1 .055-.052.073.073 0 0 1 .09.087.073.073 0 0 1-.12.037zm.686-.146a.073.073 0 1 1 .146 0 .073.073 0 0 1-.146 0m-1.076-.004a.245.245 0 1 1 .343-.013v.005a.25.25 0 0 1-.343.008m1.959-.008a.24.24 0 1 1 .266.055.25.25 0 0 1-.266-.056m-.883-.193a.07.07 0 0 1 .054-.072.073.073 0 0 1 .09.052.073.073 0 1 1-.144.02m-.18-.408a.25.25 0 0 1 .144-.258.248.248 0 1 1-.144.258m.729.163a.073.073 0 0 1 .002-.101.1.1 0 0 1 .032-.019.07.07 0 0 1 .072.015.07.07 0 0 1 .022.071.07.07 0 0 1-.053.059.07.07 0 0 1-.075-.025m-1.072-.004a.073.073 0 0 1 0-.106.1.1 0 0 1 .035-.018.073.073 0 0 1 .092.087.07.07 0 0 1-.028.041.07.07 0 0 1-.094-.004zM12 14.23a.075.075 0 1 0 0-.15.075.075 0 0 0 0 .15" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="DXL__a" x1="6.6" x2="17.382" y1="6.253" y2="17.764" gradientUnits="userSpaceOnUse"><stop stopColor="#4D2FE5"/><stop offset=".53" stopColor="#D51FD5"/><stop offset="1" stopColor="#FB767C"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconDxl.displayName = 'Dxl';
IconDxl.variants = 'brandedmono';

export default IconDxl;
