import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSXP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.961 5.143q-.193 0-.394.026a2.72 2.72 0 0 0-1.629.784l-.964.969-.497.492-.523.515-.48.484-.75.746-.57.595c-.111.116-.231.223-.338.343a2.92 2.92 0 0 0-.673 1.989c-.017.317.111.729.3 1.114.103.215.244.403.377.592.094.128.158.128.283.03l.064-.065.36-.373.527-.54.54-.574c.086-.085.18-.171.266-.265l.557-.588c.18-.188.369-.368.557-.557l.604-.634.575-.57c.248-.249.488-.51.737-.763l.454-.454.617-.626c.176-.18.36-.351.54-.527l1.187-1.191.073-.086c.095-.116.103-.146-.017-.232-.188-.133-.377-.274-.587-.373a2.8 2.8 0 0 0-1.179-.257h-.017zm3.052 2.482c-.369.012-.69.128-.93.428l-.065.06-.643.621-.66.66-.548.545c-.189.188-.373.386-.566.574l-.604.587-.724.72-1.333 1.333-1.766 1.766c-.111.111-.116.128 0 .244l.849.857c.171.172.381.292.621.335.232.042.467.042.694-.022a1.1 1.1 0 0 0 .455-.244l.698-.673q.247-.23.493-.472l.964-.955.802-.772 1.093-1.067 1.028-.998c.15-.146.292-.129.403.043.193.312.304.65.257 1.028a1.46 1.46 0 0 1-.364.84c-.257.27-.523.523-.789.784l-.565.553-.72.72c-.039.043-.073.086-.112.12l-.236.245-.535.53c-.189.19-.373.387-.557.58l-.056.042-.6.592c-.099.09-.189.184-.283.278-.159.159-.321.317-.476.485-.094.098-.094.158.018.235.188.137.381.275.587.373.385.18.784.257 1.2.257h.004c.7.028 1.385-.221 1.903-.694.308-.27.587-.579.878-.87l.648-.651.608-.609q.276-.285.557-.557c.206-.21.42-.407.63-.613.214-.214.42-.424.626-.643a2.99 2.99 0 0 0 .939-2.571 2.9 2.9 0 0 0-.446-1.166c-.129-.201-.197-.287-.592-.673-.578-.578-1.161-1.157-1.731-1.748a1.33 1.33 0 0 0-1.054-.437"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SXP__a)"
            d="M11.962 5.143q-.195 0-.395.026a2.72 2.72 0 0 0-1.628.784l-.964.969-.498.492-.522.515-.48.484-.75.746-.57.595c-.112.116-.232.223-.339.343a2.92 2.92 0 0 0-.673 1.989c-.017.317.112.729.3 1.114.103.215.244.403.377.592.095.128.159.128.283.03l.064-.065.36-.373.528-.54.54-.574c.085-.085.18-.171.265-.265l.557-.588c.18-.188.369-.368.558-.557l.604-.634.574-.57c.249-.249.489-.51.737-.763l.455-.454.617-.626c.175-.18.36-.351.54-.527l1.187-1.191.073-.086c.094-.116.103-.146-.017-.232-.189-.133-.378-.274-.588-.373a2.8 2.8 0 0 0-1.178-.257h-.017zm3.051 2.482c-.368.012-.69.128-.93.428l-.064.06-.643.621-.66.66-.549.545c-.188.188-.372.386-.565.574l-.605.587-.724.72-1.333 1.333-1.765 1.766c-.112.111-.116.128 0 .244l.848.857c.172.172.382.292.622.335.231.042.467.042.694-.022.167-.051.326-.12.454-.244l.699-.673q.246-.23.493-.472l.964-.955.801-.772 1.093-1.067 1.029-.998c.15-.146.291-.129.403.043.192.312.304.65.257 1.028a1.46 1.46 0 0 1-.365.84c-.257.27-.522.523-.788.784l-.566.553-.72.72c-.038.043-.073.086-.111.12l-.236.245-.536.53c-.188.19-.373.387-.557.58l-.056.042-.6.592c-.098.09-.188.184-.282.278-.159.159-.322.317-.476.485-.094.098-.094.158.017.235.189.137.381.275.587.373.386.18.784.257 1.2.257h.004a2.67 2.67 0 0 0 1.903-.694c.309-.27.587-.579.879-.87l.647-.651.609-.609q.275-.285.557-.557c.205-.21.42-.407.63-.613.214-.214.42-.424.625-.643a2.99 2.99 0 0 0 .939-2.571 2.9 2.9 0 0 0-.446-1.166c-.128-.201-.197-.287-.591-.673-.579-.578-1.162-1.157-1.732-1.748a1.33 1.33 0 0 0-1.054-.437"
          />
          <defs>
            <linearGradient
              id="SXP__a"
              x1="6.679"
              x2="16.682"
              y1="7.47"
              y2="17.149"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EB5756" />
              <stop offset="1" stopColor="#EE8533" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenSXP.displayName = 'SXP'