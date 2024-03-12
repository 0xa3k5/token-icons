
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGrain = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12.227 18.587v1.414c0 .095-.051.137-.146.137l-.162.005c-.1 0-.146-.043-.15-.137V18.56a.04.04 0 0 0-.018-.03.05.05 0 0 0-.03-.017c-.467-.043-.84-.158-1.358-.321-2.614-.819-4.406-2.876-4.749-5.473C5.25 9.99 7.3 7.94 9.163 6.206c.18-.172.313-.369.463-.558 0-.008.004-.008.013-.012h.012q.012-.002.018.008l.004.013c.146.63.158 1.084.745 1.581.48.403 1.762 1.436.99 2.092a.5.5 0 0 1-.445.111A2.4 2.4 0 0 1 9.09 7.097a.05.05 0 0 0-.026-.017.06.06 0 0 0-.051.008c-1.5 1.346-2.782 2.829-2.897 4.886-.146 2.623 1.988 4.907 4.47 5.829.334.128.72.184 1.084.274a.09.09 0 0 0 .073-.013.08.08 0 0 0 .03-.06V7.693a.07.07 0 0 0-.022-.052q-.334-.308-.643-.643c-.814-.947.035-2.331.742-3.077a.17.17 0 0 1 .073-.047.21.21 0 0 1 .231.052c.656.745 1.213 1.602.973 2.614-.086.364-.471.733-.771.977a.37.37 0 0 0-.129.274v10.196c0 .013 0 .026.009.039l.03.03a.1.1 0 0 0 .081.021c.343-.073.699-.137 1.029-.257 2.494-.922 4.658-3.219 4.513-5.863-.112-2.001-1.423-3.604-2.95-4.886a.03.03 0 0 0-.03 0l-.012.009-.008.017a2.44 2.44 0 0 1-1.39 2.216c-.788.42-1.435-.142-1.02-.905.335-.621.978-.985 1.33-1.388.377-.433.402-.853.492-1.35q.008-.045.039-.013.541.603 1.551 1.56c1.548 1.457 2.868 3.587 2.465 5.73-.579 3.077-2.872 5.036-6.078 5.584q-.045.01-.05.056"/><path fill="currentColor" d="M15.214 8.833c.142 1.448-.454 2.983-2.164 3.163-.214.021-.386-.009-.506-.095-.493-.334-.026-1.041.369-1.29.823-.531 1.684-.994 2.263-1.787q.032-.044.038.009m-4.157 3.163c-1.8-.129-2.37-1.693-2.289-3.172 0-.043.018-.043.043-.008.583.805 1.578 1.328 2.43 1.92.343.24.472.544.386.921-.064.266-.291.356-.57.339m-.008 2.682c-1.878-.274-2.332-1.615-2.28-3.205q-.001-.108.064-.017c.531.831 1.354 1.2 2.203 1.8q.392.271.501.445c.231.36.15 1.072-.489.977m4.17-3.167c.14 1.526-.485 3.018-2.298 3.159-.501.043-.707-.463-.505-.819a1.9 1.9 0 0 1 .672-.698c.682-.416 1.698-.965 2.05-1.655q.064-.135.085.013zM11.314 17.2c-1.946.05-2.661-1.543-2.528-3.13q.006-.082.051-.016c.574.771 1.329 1.174 2.109 1.684.317.214.698.51.724.887.013.21-.073.386-.253.536a.16.16 0 0 1-.098.038zm3.24-.72a2.16 2.16 0 0 1-1.868.702.3.3 0 0 1-.189-.107c-.433-.574.116-1.028.613-1.363.707-.471 1.594-.943 2.057-1.654l.013-.013a.03.03 0 0 1 .026.009l.008.013c.086.81-.094 1.8-.66 2.412"/>
        </>
      ) : (
        <>
          <path fill="#E4C14F" d="M12.228 18.587v1.414c0 .095-.052.137-.146.137l-.163.005c-.099 0-.146-.043-.15-.137V18.56a.04.04 0 0 0-.017-.03.05.05 0 0 0-.03-.017c-.467-.043-.84-.158-1.359-.321-2.614-.819-4.405-2.876-4.748-5.473C5.25 9.99 7.299 7.94 9.163 6.206c.18-.172.313-.369.463-.558 0-.008.004-.008.013-.012h.013q.011-.002.017.008l.004.013c.146.63.159 1.084.746 1.581.48.403 1.761 1.436.99 2.092a.5.5 0 0 1-.446.111A2.4 2.4 0 0 1 9.09 7.097a.05.05 0 0 0-.025-.017.06.06 0 0 0-.052.008c-1.5 1.346-2.781 2.829-2.897 4.886-.146 2.623 1.989 4.907 4.47 5.829.334.128.72.184 1.084.274a.09.09 0 0 0 .073-.013.08.08 0 0 0 .03-.06V7.693a.07.07 0 0 0-.021-.052q-.335-.308-.643-.643c-.814-.947.034-2.331.741-3.077a.17.17 0 0 1 .073-.047.21.21 0 0 1 .232.052c.655.745 1.213 1.602.973 2.614-.086.364-.472.733-.772.977a.37.37 0 0 0-.128.274v10.196q-.002.02.008.039l.03.03a.1.1 0 0 0 .082.021c.342-.073.698-.137 1.028-.257 2.494-.922 4.659-3.219 4.513-5.863-.111-2.001-1.423-3.604-2.949-4.886a.03.03 0 0 0-.03 0l-.012.009-.009.017A2.44 2.44 0 0 1 13.5 9.313c-.788.42-1.435-.142-1.02-.905.335-.621.978-.985 1.329-1.388.377-.433.403-.853.493-1.35q.006-.045.038-.013.541.603 1.552 1.56c1.547 1.457 2.867 3.587 2.464 5.73-.578 3.077-2.871 5.036-6.077 5.584q-.045.01-.051.056"/><path fill="#E4C14F" d="M15.215 8.833c.141 1.448-.455 2.983-2.165 3.163q-.323.033-.505-.095c-.493-.334-.026-1.041.368-1.29.823-.531 1.685-.994 2.263-1.787q.032-.044.039.009m-4.157 3.163c-1.8-.129-2.37-1.693-2.289-3.172 0-.043.017-.043.043-.008.583.805 1.577 1.328 2.43 1.92.343.24.471.544.386.921-.065.266-.292.356-.57.339m-.009 2.682c-1.877-.274-2.331-1.615-2.28-3.205q0-.108.064-.017c.532.831 1.355 1.2 2.203 1.8q.393.271.502.445c.231.36.15 1.072-.489.977m4.17-3.167c.141 1.526-.484 3.018-2.297 3.159-.502.043-.707-.463-.506-.819a1.9 1.9 0 0 1 .673-.698c.681-.416 1.697-.965 2.049-1.655q.064-.135.085.013zM11.315 17.2c-1.946.05-2.662-1.543-2.529-3.13q.007-.082.052-.016c.574.771 1.328 1.174 2.108 1.684.317.214.699.51.724.887.013.21-.072.386-.252.536a.16.16 0 0 1-.099.038zm3.24-.72a2.16 2.16 0 0 1-1.869.702.3.3 0 0 1-.188-.107c-.433-.574.115-1.028.612-1.363.708-.471 1.595-.943 2.058-1.654l.012-.013a.03.03 0 0 1 .026.009l.009.013c.085.81-.095 1.8-.66 2.412"/>
        </>
      )}
    </BaseIcon>
));

IconGrain.displayName = 'Grain';
IconGrain.variants = 'brandedmono';

export default IconGrain;
