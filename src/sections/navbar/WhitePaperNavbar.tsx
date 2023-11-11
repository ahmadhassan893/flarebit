import { useState } from 'react'
import Logo from '@/assets/images/logo_white.png'
import { Link } from 'react-router-dom'
type Props = {}

function WhitePaperNavbar({}: Props) {
  const [showSideMenu, setShowSideMenu] = useState(false)

  const handleHamburgerClick = () => {
    setShowSideMenu(!showSideMenu) // Toggle side menu visibility
  }
  return (
    <nav className="border-b border-gray-700 p-4 px-10 text-white">
      <div className="mx-auto flex items-center justify-between">
        <Link to={'/'} className="flex items-center">
          <img src={Logo} alt="Logo" className="mr-2 h-8" />
          <h1 className="text-2xl font-bold">
            FLARE <span className="text-yellow-500">BIT</span>
          </h1>
        </Link>
        <div className="hidden flex-grow justify-end lg:flex">
          <Link to="/" className="mx-4 text-yellow-500 ">
            Home
          </Link>
        </div>
        {/* Hamburger menu for mobile */}
        <div className="flex lg:hidden">
          <button
            onClick={handleHamburgerClick}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path d="M4 6h16M4 12h16m-7 6h7"></path>{' '}
            </svg>
          </button>
        </div>
        {/* Side Menu */}
        {showSideMenu && (
          <div className="absolute inset-0 z-10 bg-gray-800 p-4 text-center lg:hidden">
            <button
              onClick={handleHamburgerClick}
              className="mb-4 flex w-full justify-end py-4 text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path d="M6 18L18 6M6 6l12 12"></path>{' '}
              </svg>
            </button>
            <div className="space-y-4 px-12">
              <a
                href="#section-0"
                className="block rounded-md border py-3 text-yellow-500"
              >
                Home
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default WhitePaperNavbar
