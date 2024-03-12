
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCvp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M7.813 6.081h2.019l1.457-.912H9.44zM8.319 8.4l1.08-1.911h-2.13L6.24 8.473zm-.103.399v2.121H6.039V8.799zm4.487.805 1.457.879h1.907l-1.457-.879zm-.017 9.253h1.821l1.534-.9h-1.928zM9.819 13.6l1.457.882H9.364l-1.457-.883zm5.944-.433v2.121h2.173v-2.121zm-1.191-2.31 1.08 1.915 2.078.073-1.029-1.988zm-6.258.458 1.08 1.916h-2.13l-1.028-1.989zm6.258 6.283 1.08-1.916 2.078-.072-1.029 1.988zM14.413 5.143h-2.109l1.136 1.933h2.13zm.668.343.935 1.697 1.628.844-.9-1.577-1.662-.969zm-2.69 3.728 1.058-1.825 2.164.102-1.054 1.723h-2.173zm2.528.142 1.127-1.757 1.8 1.015-1.089 1.792zM4.714 10.684l.999-1.551v1.8l-.999 1.71zm1.213.746-1.165 1.877 1.122 1.851 1.037-1.85zm.15 4.029 1.157-1.873 1.925 1.088-1.183 1.787-1.899-.998zm1.869 1.337-1.569-.755.866 1.56 1.551.879zm1.513 2.027-1.063-1.886h2.198l1.012 1.886zm1.671-10.14-.887 1.551 1.714-.985.746-1.462-1.577.896zM10.12 6.334l1.774-1.105 1.114 1.885-1.864 1.123-1.029-1.903zm-.27.33L8.61 8.537l1.132 1.796 1.084-1.8zM8.61 9.21v1.873l.952 1.525v-1.872zm.909 5.597L8.366 16.51h2.25l1.028-1.702zm1.731 1.427.9-1.5 1.53-.904-.973 1.607zm1.509-.437-1.787 1.046 1.14 1.894 1.744-1.088-1.093-1.852zm1.697-4.384.943 1.56v1.898l-.943-1.543zm-.232 2.335 1.115 1.762-1.222 1.868-1.084-1.808zm3.926-4.877-1.08 1.843.994 1.942 1.222-1.942zm.073 4.243 1.029-1.658v1.817l-1.03 1.521z"/>
        </>
      ) : (
        <>
          <path fill="#7899F8" d="M7.812 6.081h2.019l1.457-.912H9.441zM8.318 8.4l1.08-1.911h-2.13L6.24 8.473zm-.103.399v2.121H6.038V8.799zm4.487.805 1.458.879h1.907l-1.457-.879zm-.017 9.253h1.822l1.534-.9h-1.929zM9.818 13.6l1.457.882H9.364l-1.457-.883zm5.944-.433v2.121h2.173v-2.121zm-1.191-2.31 1.08 1.915 2.079.073-1.029-1.988zm-6.257.458 1.08 1.916h-2.13l-1.029-1.989zm6.257 6.283 1.08-1.916 2.079-.072-1.029 1.988z"/><path fill="#fff" d="M14.412 5.143h-2.108l1.136 1.933h2.13zm.669.343.934 1.697 1.629.844-.9-1.577-1.663-.969zM12.39 9.214l1.058-1.825 2.164.102-1.054 1.723h-2.173zm2.528.142 1.127-1.757 1.8 1.015-1.088 1.792zM4.714 10.684l.998-1.551v1.8l-.998 1.71zm1.213.746L4.76 13.307l1.123 1.851 1.037-1.85zm.15 4.029 1.157-1.873 1.924 1.088-1.183 1.787-1.898-.998zm1.868 1.337-1.568-.755.865 1.56 1.552.879zm1.513 2.027-1.063-1.886h2.199l1.011 1.886zm1.672-10.14-.888 1.551 1.715-.985.745-1.462-1.577.896zm-1.012-2.349 1.774-1.105 1.115 1.885-1.865 1.123-1.028-1.903zm-.27.33L8.61 8.537l1.131 1.796 1.084-1.8zM8.61 9.21v1.873l.951 1.525v-1.872zm.908 5.597L8.365 16.51h2.25l1.029-1.702zm1.732 1.427.9-1.5 1.53-.904-.973 1.607zm1.508-.437-1.787 1.046 1.14 1.894 1.744-1.088-1.093-1.852zm1.697-4.384.943 1.56v1.898l-.943-1.543zm-.231 2.335 1.114 1.762-1.221 1.868-1.085-1.808zm3.926-4.877-1.08 1.843.994 1.942 1.221-1.942zm.072 4.243 1.029-1.658v1.817l-1.029 1.521z"/>
        </>
      )}
    </BaseIcon>
));

IconCvp.displayName = 'Cvp';
IconCvp.variants = 'brandedmono';

export default IconCvp;
