import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const NotificationFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.62155 4.65064C7.43924 3.53357 8.17843 2.46478 9.30416 2.24129C10.43 2.0178 11.5256 2.72244 11.789 3.8235C12.8966 3.94685 13.9697 4.33254 14.9137 4.96148C16.463 5.99364 17.5381 7.59628 17.9039 9.41632C18.4588 12.1776 19.235 13.6084 19.8975 14.3972C20.4283 15.0292 20.7911 15.8598 20.6267 16.7025C20.4439 17.6398 19.6902 18.2253 18.7522 18.4115L13.7032 19.4138C13.666 19.8239 13.5623 20.307 13.274 20.7472C13.0785 21.0457 12.8329 21.3117 12.5455 21.5325C11.9822 21.9652 11.2904 22.2 10.5785 22.2C9.86663 22.2 9.17485 21.9652 8.6116 21.5325C8.27422 21.2733 7.99438 20.9518 7.78567 20.5886L6.82968 20.7783C5.89288 20.9643 4.97049 20.7131 4.43968 19.9168C3.9629 19.2015 3.97832 18.2967 4.2236 17.5119C4.52985 16.5321 4.6928 14.9147 4.13705 12.1493C3.77127 10.3293 4.14441 8.43916 5.17588 6.89466C5.80452 5.95335 6.64635 5.18744 7.62155 4.65064Z"/>',
      }}
    />
  )
)

NotificationFill.displayName = 'NotificationFill'

export const tags = ['NotificationFill', '']
