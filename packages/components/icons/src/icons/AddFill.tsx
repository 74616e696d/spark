import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AddFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12.1997C22 17.7226 17.5228 22.1997 12 22.1997C6.47715 22.1997 2 17.7226 2 12.1997C2 6.67686 6.47715 2.19971 12 2.19971C17.5228 2.19971 22 6.67686 22 12.1997ZM13 7.58432C13 7.03204 12.5523 6.58432 12 6.58432C11.4477 6.58432 11 7.03204 11 7.58432V11.1997H7.38462C6.83233 11.1997 6.38462 11.6474 6.38462 12.1997C6.38462 12.752 6.83233 13.1997 7.38462 13.1997H11V16.8151C11 17.3674 11.4477 17.8151 12 17.8151C12.5523 17.8151 13 17.3674 13 16.8151V13.1997H16.6154C17.1677 13.1997 17.6154 12.752 17.6154 12.1997C17.6154 11.6474 17.1677 11.1997 16.6154 11.1997H13V7.58432Z"/>',
      }}
    />
  )
)

AddFill.displayName = 'AddFill'

export const tags = ['AddFill', '']
