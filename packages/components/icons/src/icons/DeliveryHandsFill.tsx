import { IconProps } from '../Types'

export const DeliveryHandsFill = ({
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
        '<path d="M20.0583 2.19971H17.95V7.62272C17.95 8.03727 17.7917 8.35876 17.5417 8.61257C17.2917 8.86637 16.8917 9.02712 16.5667 9.02712H13.8917C13.4833 9.02712 13.1667 8.86637 12.9167 8.61257C12.6667 8.35876 12.5083 7.95267 12.5083 7.62272V2.19971H10.4C9.35 2.19971 8.54167 3.02035 8.54167 4.08634V13.951C8.54167 14.1117 8.54167 14.1963 8.625 14.3655C8.7 14.6447 8.825 14.8985 8.975 15.1269C8.76667 14.8816 8.63333 14.594 8.54167 14.2894C7.73333 13.6295 6.75833 13.2234 5.70833 13.2234H2.975C2.40833 13.2234 2 13.6379 2 14.2132C2 14.7885 2.40833 15.2031 2.975 15.2031H5.725C6.375 15.2031 7.01667 15.4484 7.50833 15.9391C7.75 16.1845 7.91667 16.4298 7.99167 16.7598H2.975C2.40833 16.7598 2 17.1743 2 17.7496C2 18.3249 2.40833 18.7395 2.975 18.7395H11.8833C12.3667 18.7395 12.775 18.9002 13.175 19.2302C13.4167 19.4755 13.5833 19.8055 13.6583 20.22H2.975C2.40833 20.22 2 20.6346 2 21.2099C2 21.7852 2.40833 22.1997 2.975 22.1997H13.9833C14.3917 22.1997 14.875 22.039 15.1167 21.709C15.4417 21.3791 15.6 20.973 15.6 20.5584C15.6 19.5686 15.1917 18.5872 14.55 17.9273C13.825 17.1912 12.9333 16.8613 11.9583 16.8613H10.1C10.025 16.4637 9.86667 16.1337 9.70833 15.7361C9.925 15.8038 10.1417 15.8715 10.425 15.8715H20.1417C21.1917 15.8715 22 15.0508 22 13.9848V4.08634C21.9167 3.02035 21.1083 2.19971 20.0583 2.19971ZM18.7667 13.5449H16.5833C16.0167 13.5449 15.6083 13.1303 15.6083 12.555C15.6083 11.9797 16.0167 11.5652 16.5833 11.5652H18.7667C19.3333 11.5652 19.7417 11.9797 19.7417 12.555C19.7417 13.1303 19.3333 13.5449 18.7667 13.5449Z"/>',
    }}
  />
)

export const tags = ['delivery-hands-fill', 'delivery']