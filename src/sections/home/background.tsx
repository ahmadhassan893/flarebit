type Props = {}

function Background({}: Props) {
  return (
    <div className="hidden md:block">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 1120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_50_345)">
          <rect
            x="995"
            y="-183.853"
            width="1328"
            height="998"
            rx="79"
            transform="rotate(-12.8412 995 -183.853)"
            fill="#FCD804"
          />
          <rect
            x="-415"
            y="68.1467"
            width="1328"
            height="1078"
            rx="79"
            transform="rotate(-12.8412 -415 68.1467)"
            fill="#FCD804"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_50_345"
            x="-403.436"
            y="-463.435"
            width="2903.46"
            height="1575.05"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_50_345"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_50_345"
              result="effect2_dropShadow_50_345"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_50_345"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default Background
