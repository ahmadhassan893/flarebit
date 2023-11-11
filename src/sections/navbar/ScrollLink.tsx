import { SelectedPage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
  setIsMenuToggled: (value: boolean) => void
}

const ScrollLink = ({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage

  const handleClick = () => {
    setSelectedPage(lowerCasePage)
    setIsMenuToggled(false)
  }

  return (
    <AnchorLink
      offset="150"
      className={`${
        selectedPage === lowerCasePage
          ? 'underline decoration-[#FAA41A] decoration-2 underline-offset-4 shadow-[#00000099] drop-shadow-[0px_2px_3px_var(--tw-shadow-color)]'
          : ''
      }
        text-xl transition duration-500 hover:text-gray-500	
      `}
      href={`#${lowerCasePage}`}
      onClick={handleClick}
    >
      {page}
    </AnchorLink>
  )
}

export default ScrollLink
