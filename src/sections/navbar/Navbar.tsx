import { useState } from 'react'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import Layout from '@/layouts/Layout'
import ScrollLink from './ScrollLink'
import Logo from '@/assets/images/logo_white.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

type Props = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: Props) {
  const flexBetween = 'flex items-center justify-between'
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveLargeScreens = useMediaQuery('(min-width: 1024px)')
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-500 drop-shadow'

  return (
    <nav>
      <div className={`${navbarBackground} fixed top-0 z-30 w-full pb-6 pt-10`}>
        <Layout>
          <div className={`${flexBetween} w-full`}>
            {/* LEFT SIDE */}
            <Link to={'/'}>
              <img
                alt="logo"
                src={Logo}
                className="xs:h-16 xs:w-20 h-12 w-16"
              />
            </Link>
            {/* RIGHT SIDE */}
            {isAboveLargeScreens ? (
              <div className={`${flexBetween}`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <ScrollLink
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled}
                  />
                  <ScrollLink
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled}
                  />
                  <ScrollLink
                    page="Our Mission"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled}
                  />
                  <ScrollLink
                    page="White Paper"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled}
                  />
                </div>
              </div>
            ) : (
              <button
                className="bg-primary-600 rounded-full p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </Layout>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveLargeScreens && (
        <div
          className={`bg-primary-500 fixed bottom-0 right-0 z-40 h-full w-[300px] transform drop-shadow-xl transition-transform ${
            isMenuToggled ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <ScrollLink
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <ScrollLink
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <ScrollLink
              page="Our Mission"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <ScrollLink
              page="White Paper"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
