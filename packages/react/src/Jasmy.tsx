
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconJasmy = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M9.504 5.153q.619-.226 1.284-.339v.374h.617v-.45a7.4 7.4 0 0 1 1.212.002v.448h.618v-.37q.67.116 1.292.346l-.153.318.557.268.166-.347q.585.276 1.108.646l-.235.27.467.405.257-.296q.503.425.922.93l-.285.184.334.52.326-.21q.366.529.637 1.119l-.305.101.195.586.343-.114q.221.614.33 1.273h-.335v.627l.408-.01q.05.634-.012 1.267l-.003-.015h-.407v.627l.327-.007q-.117.646-.348 1.26l-.277-.14-.283.559.317.152a7.3 7.3 0 0 1-.65 1.1l-.213-.217-.446.44.275.267a7.3 7.3 0 0 1-.913.898l-.146-.264-.548.302.195.338q-.504.349-1.06.607l-.071-.273-.606.16.1.352a7.2 7.2 0 0 1-1.3.341v-.327h-.591v.4q-.618.05-1.234-.002v-.391h-.592v.316a7 7 0 0 1-1.25-.328l.104-.361-.606-.16-.074.284a7.3 7.3 0 0 1-1.167-.676l.184-.201-.406-.37-.215.235a7.3 7.3 0 0 1-.91-.9l.239-.174-.363-.5-.255.185a7.3 7.3 0 0 1-.655-1.12l.286-.084-.176-.592-.35.104a7 7 0 0 1-.337-1.242l.356-.018-.03-.617-.408.02a7.4 7.4 0 0 1-.006-1.275l.373.036.058-.615-.354-.034q.11-.65.33-1.258l.315.14.252-.563-.332-.149q.269-.582.632-1.103l.297.233.381-.486-.305-.24q.413-.497.907-.916l.224.282L8 6.337l-.22-.277a7.3 7.3 0 0 1 1.153-.67l.164.357.561-.258zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m5.572-6a5.571 5.571 0 1 1-11.143 0 5.571 5.571 0 0 1 11.143 0M12 9a.857.857 0 1 0 0-1.714A.857.857 0 0 0 12 9m-2.143 2.143 3-1.655v2.576l3-1.517v.573l-3 1.521v1.897c0 1.45-.865 2.348-1.91 2.348-.944 0-1.846-.491-1.846-1.68 0-1.085 1.217-1.978 2.47-2.565v-1.835l-1.714.871zm1.715 3.155v-1.012c-.7.413-1.176 1.092-1.257 1.529-.082.437-.016 1.132.559 1.033.575-.1.697-1.033.697-1.55" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#F6931E" d="M9.504 5.153q.617-.226 1.284-.339v.374h.617v-.45a7.4 7.4 0 0 1 1.212.002v.448h.617v-.37q.67.116 1.293.346l-.153.318.557.268.166-.347q.585.276 1.107.646l-.234.27.467.405.257-.296q.502.425.922.93l-.285.184.333.52.326-.21q.368.529.638 1.119l-.305.101.195.586.343-.114q.22.614.329 1.273h-.334v.627l.408-.01q.048.634-.012 1.267l-.003-.015h-.407v.627l.327-.007q-.118.646-.348 1.26l-.278-.14-.283.559.317.152a7.3 7.3 0 0 1-.649 1.1l-.213-.217-.447.44.276.267a7.3 7.3 0 0 1-.914.898l-.145-.264-.548.302.195.338q-.505.349-1.06.607l-.071-.273-.606.16.1.352a7.2 7.2 0 0 1-1.3.341v-.327h-.592v.4q-.616.05-1.234-.002v-.391h-.591v.316a7 7 0 0 1-1.25-.328l.104-.361-.606-.16-.075.284a7.3 7.3 0 0 1-1.166-.676l.183-.201-.406-.37-.215.235a7.3 7.3 0 0 1-.909-.9l.238-.174-.363-.5-.254.185a7.3 7.3 0 0 1-.655-1.12l.286-.084-.176-.592-.35.104a7 7 0 0 1-.337-1.242l.355-.018-.03-.617-.408.02a7.4 7.4 0 0 1-.005-1.275l.373.036.057-.615-.354-.034q.111-.65.33-1.258l.316.14.252-.563-.333-.149q.27-.582.632-1.103l.297.233.381-.486-.305-.24q.414-.497.907-.916l.224.282L8 6.337l-.22-.277a7.3 7.3 0 0 1 1.153-.67l.163.357.562-.258zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m5.571-6a5.571 5.571 0 1 1-11.142 0 5.571 5.571 0 0 1 11.142 0M12 9a.857.857 0 1 0 0-1.714A.857.857 0 0 0 12 9m-2.143 2.143 3-1.655v2.576l3-1.517v.573l-3 1.521v1.897c0 1.45-.865 2.348-1.91 2.348-.944 0-1.847-.491-1.847-1.68 0-1.085 1.218-1.978 2.471-2.565v-1.835l-1.714.871zm1.714 3.155v-1.012c-.699.413-1.175 1.092-1.257 1.529s-.015 1.132.56 1.033c.574-.1.697-1.033.697-1.55" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconJasmy.displayName = 'Jasmy';
IconJasmy.variants = 'brandedmono';

export default IconJasmy;
