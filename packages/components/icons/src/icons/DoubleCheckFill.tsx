import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const DoubleCheckFill = React.forwardRef(
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
          '<path d="M21.5741 6.51592C21.0661 6.08079 20.2195 6.08079 19.7961 6.60295L12.0919 15.7408L11.8379 15.3927C11.5839 14.9575 11.0759 14.6965 10.6526 14.7835L16.071 8.34349C16.325 8.08241 16.4097 7.7343 16.4097 7.38619C16.4097 7.03808 16.2403 6.68998 15.9863 6.51592C15.7324 6.34187 15.3937 6.25484 15.1397 6.25484C14.8011 6.25484 14.4624 6.4289 14.2931 6.68998L6.50416 15.8278L4.21827 13.0429C3.79496 12.4338 3.033 12.3467 2.44036 12.8689C1.93239 13.304 1.84773 14.0873 2.27104 14.6094L4.81091 17.7424C4.98023 18.0035 5.23422 18.1775 5.57287 18.3516C5.82686 18.5257 6.16551 18.5257 6.50416 18.6127C6.8428 18.6127 7.09679 18.5257 7.43544 18.4386C7.68943 18.2646 8.02808 18.0905 8.1974 17.8294L9.63666 16.1759C9.63666 16.35 9.72132 16.6111 9.80599 16.7851L10.314 17.6554C10.314 17.7424 10.3986 17.7424 10.3986 17.8294C10.5679 18.0905 10.8219 18.2646 11.1606 18.4386C11.4146 18.6127 11.7532 18.6127 12.0919 18.6997C12.4305 18.6997 12.6845 18.6127 12.9385 18.5257C13.1925 18.3516 13.5311 18.1775 13.7005 17.9165L21.6587 8.43052C22.1667 7.82133 22.082 7.03808 21.5741 6.51592Z"/>',
      }}
    />
  )
)

DoubleCheckFill.displayName = 'DoubleCheckFill'

export const tags = ['DoubleCheckFill', '']