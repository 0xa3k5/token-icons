
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPnb = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M5.143 9.96v2.786c0 .591.48.968 1.067.968h.647v1.18c0 .595.232.963.819.963h.467v1.925c0 .591.377 1.075.964 1.075h1.5c.592 0 .965-.484.965-1.075V6.219c0-.592-.373-1.076-.96-1.076H9.009c-.587 0-.866.484-.866 1.071v.643H7.067A1.1 1.1 0 0 0 6 7.967V9c-.527.065-.857.416-.857.96m.429 0c0-.296.27-.531.561-.531h.669c.291 0 .685.235.685.531v.232c-.158.094-.295.265-.295.463 0 .3.214.492.514.492.291 0 .506-.197.506-.492a.54.54 0 0 0-.27-.463V9.96c0-.591-.553-.96-1.14-.96h-.373V7.967c0-.3.343-.681.638-.681h1.41c.296 0 .523.386.523.681v.343a.53.53 0 0 0-.257.463c0 .3.232.493.471.489.24-.005.498-.193.498-.489a.56.56 0 0 0-.283-.463v-.343c0-.595-.27-1.114-.857-1.114v-.639c0-.3.145-.647.437-.647h1.603c.291 0 .531.352.531.643v11.576c0 .3-.24.647-.531.647h-1.5c-.3 0-.54-.351-.54-.647v-1.929h.643a.5.5 0 0 0 .462.266c.227 0 .485-.137.485-.433 0-.3-.189-.527-.485-.527a.53.53 0 0 0-.458.266H7.732c-.296 0-.446-.24-.446-.536v-1.179h1.191c.588 0 .952-.377.952-.968v-.283A.56.56 0 0 0 9.712 12c0-.3-.193-.493-.489-.493s-.48.193-.48.493a.53.53 0 0 0 .257.463v.283c0 .296-.231.54-.523.54H6.21c-.296 0-.638-.244-.638-.54zM8.957 12c0-.15.12-.27.266-.27s.266.12.266.27a.27.27 0 0 1-.266.27.266.266 0 0 1-.266-.27m.72 3.382a.268.268 0 0 1 0 .535.27.27 0 0 1-.265-.265c0-.15.12-.27.265-.27m-.193-6.609a.27.27 0 1 1-.53 0c0-.15.115-.27.26-.27.15 0 .27.12.27.27M7.972 10.66a.27.27 0 0 1-.532 0c0-.15.116-.275.262-.275.15 0 .27.125.27.27zm10.885-.699v2.786c0 .591-.48.968-1.067.968h-.647v1.18c0 .595-.231.963-.819.963h-.467v1.925c0 .591-.377 1.075-.964 1.075h-1.5c-.596 0-.964-.484-.964-1.075V6.219c0-.592.373-1.076.96-1.076h1.603c.587 0 .865.484.865 1.071v.643h1.076c.587 0 1.067.515 1.067 1.11V9c.527.065.857.416.857.96m-.428 0c0-.296-.27-.531-.562-.531H17.2c-.292 0-.686.235-.686.531v.232c.159.094.296.265.296.463 0 .3-.215.492-.515.492-.29 0-.505-.197-.505-.492 0-.198.111-.37.27-.463V9.96c0-.591.553-.96 1.14-.96h.373V7.967c0-.3-.343-.681-.639-.681h-1.41c-.296 0-.523.386-.523.681v.343a.53.53 0 0 1 .257.463c0 .3-.231.493-.471.489s-.497-.193-.497-.489c0-.197.124-.369.283-.463v-.343c0-.595.27-1.114.857-1.114v-.639c0-.3-.146-.647-.437-.647h-1.603c-.292 0-.532.352-.532.643v11.576c0 .3.24.647.532.647h1.5c.3 0 .54-.351.54-.647v-1.929h-.643a.5.5 0 0 1-.463.266c-.227 0-.484-.137-.484-.433 0-.3.188-.527.484-.527.197 0 .369.107.459.266h1.487c.296 0 .446-.24.446-.536v-1.179h-1.192c-.587 0-.951-.377-.951-.968v-.283a.55.55 0 0 1-.283-.463c0-.3.193-.493.488-.493.296 0 .48.193.48.493a.53.53 0 0 1-.257.463v.283c0 .296.232.54.523.54h2.267c.296 0 .639-.244.639-.54zM15.043 12a.27.27 0 0 0-.266-.27.27.27 0 0 0 0 .54c.146 0 .266-.12.266-.27m-.72 3.382a.27.27 0 0 0-.266.27.267.267 0 1 0 .455-.192.27.27 0 0 0-.189-.078m.193-6.609a.27.27 0 1 0 .531 0 .27.27 0 0 0-.261-.27.27.27 0 0 0-.27.27m1.513 1.886a.27.27 0 0 0 .531 0 .27.27 0 0 0-.261-.275.27.27 0 0 0-.27.27z"/>
        </>
      ) : (
        <>
          <path fill="#F1396D" d="M5.143 9.96v2.786c0 .591.48.968 1.067.968h.647v1.18c0 .595.231.963.818.963h.468v1.925c0 .591.377 1.075.964 1.075h1.5c.591 0 .964-.484.964-1.075V6.219c0-.592-.373-1.076-.96-1.076H9.008c-.587 0-.865.484-.865 1.071v.643H7.067A1.1 1.1 0 0 0 6 7.967V9c-.527.065-.857.416-.857.96m.428 0c0-.296.27-.531.562-.531H6.8c.292 0 .686.235.686.531v.232c-.159.094-.296.265-.296.463 0 .3.214.492.514.492.292 0 .506-.197.506-.492a.54.54 0 0 0-.27-.463V9.96c0-.591-.553-.96-1.14-.96h-.373V7.967c0-.3.343-.681.639-.681h1.41c.296 0 .523.386.523.681v.343a.53.53 0 0 0-.257.463c0 .3.231.493.471.489s.497-.193.497-.489a.56.56 0 0 0-.283-.463v-.343c0-.595-.27-1.114-.857-1.114v-.639c0-.3.146-.647.437-.647h1.603c.292 0 .532.352.532.643v11.576c0 .3-.24.647-.532.647h-1.5c-.3 0-.54-.351-.54-.647v-1.929h.643a.5.5 0 0 0 .463.266c.227 0 .484-.137.484-.433 0-.3-.188-.527-.484-.527a.53.53 0 0 0-.459.266H7.731c-.296 0-.446-.24-.446-.536v-1.179h1.192c.587 0 .951-.377.951-.968v-.283A.56.56 0 0 0 9.711 12c0-.3-.193-.493-.488-.493-.296 0-.48.193-.48.493a.53.53 0 0 0 .257.463v.283c0 .296-.232.54-.523.54H6.21c-.296 0-.639-.244-.639-.54zM8.957 12c0-.15.12-.27.266-.27.145 0 .265.12.265.27a.27.27 0 0 1-.265.27.266.266 0 0 1-.266-.27m.72 3.382a.268.268 0 0 1 0 .535.27.27 0 0 1-.266-.265c0-.15.12-.27.266-.27m-.193-6.609a.27.27 0 1 1-.531 0c0-.15.115-.27.261-.27.15 0 .27.12.27.27M7.971 10.66a.27.27 0 0 1-.531 0c0-.15.115-.275.261-.275.15 0 .27.125.27.27zm10.886-.699v2.786c0 .591-.48.968-1.067.968h-.647v1.18c0 .595-.232.963-.819.963h-.467v1.925c0 .591-.377 1.075-.964 1.075h-1.5c-.596 0-.965-.484-.965-1.075V6.219c0-.592.373-1.076.96-1.076h1.603c.587 0 .866.484.866 1.071v.643h1.076c.587 0 1.067.515 1.067 1.11V9c.527.065.857.416.857.96m-.429 0c0-.296-.27-.531-.561-.531h-.669c-.291 0-.685.235-.685.531v.232c.158.094.295.265.295.463 0 .3-.214.492-.514.492-.291 0-.506-.197-.506-.492 0-.198.112-.37.27-.463V9.96c0-.591.553-.96 1.14-.96h.373V7.967c0-.3-.343-.681-.638-.681h-1.41c-.296 0-.523.386-.523.681v.343a.53.53 0 0 1 .257.463c0 .3-.232.493-.472.489s-.497-.193-.497-.489c0-.197.125-.369.283-.463v-.343c0-.595.27-1.114.857-1.114v-.639c0-.3-.145-.647-.437-.647h-1.603c-.291 0-.531.352-.531.643v11.576c0 .3.24.647.531.647h1.5c.3 0 .54-.351.54-.647v-1.929h-.643a.5.5 0 0 1-.462.266c-.228 0-.485-.137-.485-.433 0-.3.189-.527.485-.527.197 0 .368.107.458.266h1.487c.296 0 .446-.24.446-.536v-1.179h-1.191c-.588 0-.952-.377-.952-.968v-.283a.55.55 0 0 1-.283-.463c0-.3.193-.493.489-.493s.48.193.48.493a.53.53 0 0 1-.257.463v.283c0 .296.231.54.523.54h2.267c.295 0 .638-.244.638-.54zM15.043 12a.27.27 0 0 0-.266-.27.27.27 0 0 0 0 .54c.146 0 .266-.12.266-.27m-.72 3.382a.27.27 0 0 0-.266.27.267.267 0 1 0 .455-.192.27.27 0 0 0-.19-.078m.192-6.609a.27.27 0 1 0 .532 0 .27.27 0 0 0-.262-.27.27.27 0 0 0-.27.27m1.513 1.886a.27.27 0 0 0 .532 0 .27.27 0 0 0-.262-.275.27.27 0 0 0-.27.27z"/>
        </>
      )}
    </BaseIcon>
));

IconPnb.displayName = 'Pnb';
IconPnb.variants = 'brandedmono';

export default IconPnb;
