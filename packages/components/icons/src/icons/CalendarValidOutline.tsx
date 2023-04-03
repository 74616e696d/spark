import { IconProps } from '../Types'

export const CalendarValidOutline = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.52239 2.6001C8.0994 2.6001 8.56716 3.04781 8.56716 3.6001V4.31438H15.4328V3.6001C15.4328 3.04781 15.9006 2.6001 16.4776 2.6001C17.0546 2.6001 17.5224 3.04781 17.5224 3.6001V4.31438H18.2687C20.3269 4.31438 22 5.9061 22 7.88099V19.0335C22 21.0062 20.3338 22.6001 18.2733 22.6001H5.72597C3.66248 22.6001 2 20.9985 2 19.0287V7.88581C2 5.91337 3.67058 4.31438 5.73134 4.31438H6.47761V3.6001C6.47761 3.04781 6.94537 2.6001 7.52239 2.6001ZM6.47761 6.31438H5.73134C4.82461 6.31438 4.08955 7.01794 4.08955 7.88581V9.45724H19.9104V7.88099C19.9104 7.01556 19.1779 6.31438 18.2687 6.31438H17.5224V7.02867C17.5224 7.58095 17.0546 8.02867 16.4776 8.02867C15.9006 8.02867 15.4328 7.58095 15.4328 7.02867V6.31438H8.56716V7.02867C8.56716 7.58095 8.0994 8.02867 7.52239 8.02867C6.94537 8.02867 6.47761 7.58095 6.47761 7.02867V6.31438ZM19.9104 11.4572H4.08955V19.0287C4.08955 19.8992 4.82196 20.6001 5.72597 20.6001H18.2733C19.1803 20.6001 19.9104 19.9012 19.9104 19.0335V11.4572ZM16.2909 12.2942C16.7147 12.669 16.7409 13.3016 16.3493 13.7073L11.5493 18.6803L11.5466 18.6831C11.3871 18.847 11.1947 18.9708 10.9881 19.0525C10.7815 19.1341 10.5609 19.1736 10.3412 19.1715C10.118 19.1691 9.89371 19.1236 9.68591 19.0346C9.47907 18.9461 9.2881 18.8145 9.13269 18.6425C9.13187 18.6416 9.13106 18.6407 9.13024 18.6397L7.62931 16.9876C7.2507 16.5708 7.29676 15.9392 7.73218 15.5768C8.16761 15.2144 8.82752 15.2585 9.20613 15.6753L10.3692 16.9556L14.8145 12.3501C15.206 11.9444 15.867 11.9194 16.2909 12.2942Z"/>',
    }}
  />
)

export const tags = ['calendar-valid-outline', 'calendar']