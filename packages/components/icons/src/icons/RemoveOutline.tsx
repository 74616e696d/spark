import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const RemoveOutline = React.forwardRef(
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
          '<path d="M7.90895 11.1447C7.3429 11.1447 6.88402 11.5924 6.88402 12.1447C6.88402 12.697 7.3429 13.1447 7.90895 13.1447H16.4238C16.9898 13.1447 17.4487 12.697 17.4487 12.1447C17.4487 11.5924 16.9898 11.1447 16.4238 11.1447H7.90895Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.19971C6.45086 2.19971 2 6.70286 2 12.1997C2 17.6965 6.45086 22.1997 12 22.1997C17.5491 22.1997 22 17.6965 22 12.1997C22 6.70286 17.5491 2.19971 12 2.19971ZM4.04986 12.1997C4.04986 7.75542 7.63555 4.19971 12 4.19971C16.3644 4.19971 19.9501 7.75542 19.9501 12.1997C19.9501 16.644 16.3644 20.1997 12 20.1997C7.63555 20.1997 4.04986 16.644 4.04986 12.1997Z"/>',
      }}
    />
  )
)

RemoveOutline.displayName = 'RemoveOutline'

export const tags = ['RemoveOutline', '']
