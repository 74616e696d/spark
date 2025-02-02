import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Service = React.forwardRef(
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
          '<path fill-rule="evenodd" d="M2.04 4.769c-2.649 2.65-2.509 6.966.165 9.64l7.515 7.515a3.2 3.2 0 0 0 4.526 0l5.512-5.513.02.02 2.017-2.017c2.674-2.674 2.814-6.99.164-9.64-2.649-2.649-6.965-2.509-9.639.164l-.318.318-.322-.323C9.006 2.26 4.69 2.12 2.04 4.77Zm8.264 2.182-.32-.32c-1.804-1.804-4.6-1.812-6.246-.165-1.647 1.646-1.64 4.442.164 6.245l7.515 7.516a.8.8 0 0 0 1.132 0l.324-.324-1.864-1.864a1.2 1.2 0 0 1 1.697-1.697l1.864 1.864.897-.897-1.7-1.701a1.2 1.2 0 1 1 1.696-1.697l1.7 1.7.9-.898-2.842-2.845a.758.758 0 0 0-1.066-.007l-.903.884a3.695 3.695 0 0 1-5.189-.02 2.494 2.494 0 0 1-.004-3.534l2.245-2.24Zm3.713-.315c1.803-1.804 4.599-1.81 6.245-.164 1.647 1.646 1.64 4.442-.164 6.245l-.319.319-2.86-2.864a3.158 3.158 0 0 0-4.443-.026l-.903.883a1.295 1.295 0 0 1-1.818-.006.094.094 0 0 1 0-.133l4.262-4.254Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

Service.displayName = 'Service'

export const tags = ['Service', '']
