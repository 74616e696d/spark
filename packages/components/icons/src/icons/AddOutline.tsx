import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AddOutline = React.forwardRef(
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
          '<path d="M12.0715 7.19971C12.6237 7.19971 13.0715 7.64742 13.0715 8.19971V11.2713H16.1432C16.6954 11.2713 17.1432 11.719 17.1432 12.2713C17.1432 12.8235 16.6954 13.2713 16.1432 13.2713H13.0715V16.3429C13.0715 16.8952 12.6237 17.3429 12.0715 17.3429C11.5192 17.3429 11.0715 16.8952 11.0715 16.3429V13.2713H8C7.44771 13.2713 7 12.8235 7 12.2713C7 11.719 7.44771 11.2713 8 11.2713H11.0715V8.19971C11.0715 7.64742 11.5192 7.19971 12.0715 7.19971Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.19971C6.47715 2.19971 2 6.67686 2 12.1997C2 17.7226 6.47715 22.1997 12 22.1997C17.5228 22.1997 22 17.7226 22 12.1997C22 6.67686 17.5228 2.19971 12 2.19971ZM4 12.1997C4 7.78143 7.58172 4.19971 12 4.19971C16.4183 4.19971 20 7.78143 20 12.1997C20 16.618 16.4183 20.1997 12 20.1997C7.58172 20.1997 4 16.618 4 12.1997Z"/>',
      }}
    />
  )
)

AddOutline.displayName = 'AddOutline'

export const tags = ['AddOutline', '']
