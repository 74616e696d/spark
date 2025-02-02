import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SpeedmeterOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4.08696C7.62975 4.08696 4.08696 7.62975 4.08696 12C4.08696 12.8372 4.21696 13.644 4.45789 14.4013H11.4096L15.2394 8.0183C15.5359 7.52413 16.1769 7.36389 16.6711 7.66039C17.1652 7.95689 17.3255 8.59786 17.029 9.09203L13.8434 14.4013H19.5421C19.783 13.644 19.913 12.8372 19.913 12C19.913 7.62975 16.3703 4.08696 12 4.08696ZM18.5179 16.4883H12.0164C12.0051 16.4885 11.9938 16.4885 11.9824 16.4883H5.4821C6.90946 18.5572 9.29639 19.913 12 19.913C14.7036 19.913 17.0905 18.5572 18.5179 16.4883Z"/>',
      }}
    />
  )
)

SpeedmeterOutline.displayName = 'SpeedmeterOutline'

export const tags = ['SpeedmeterOutline', '']
