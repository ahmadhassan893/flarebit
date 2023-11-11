import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import whitepaperData from '@/static_data/flarebit_white_paper.tsx'

type Props = {}

function WhitePaperSidebar({}: Props) {
  const [selectedSection, setSelectedSection] = useState(null)
  const handleLinkClick = (index: any) => {
    setSelectedSection(index)
  }
  return (
    <div className="hidden border-r border-gray-700 p-12 font-bold md:pr-56 lg:block lg:w-1/6 ">
      <div className="fixed mx-auto">
        <ul className="mb-10 space-y-4">
          {whitepaperData.map((section, index) => (
            <li key={index} className="mb-2">
              <AnchorLink
                href={`#section-${index}`}
                className={` text-sm${
                  selectedSection === index ? ' text-yellow-500' : ''
                }`}
                onClick={() => handleLinkClick(index)}
              >
                {section.heading}
              </AnchorLink>
            </li>
          ))}
        </ul>
        <div className="my-4 border-t border-gray-700"></div>
        <h2 className="text-sm font-bold">References</h2>
        <ul>
          <li>
            <a className="text-xs" href="https://solana.com/">
              - Solana
            </a>
          </li>
          <li>
            <a className="text-xs" href="https://spl.solana.com/">
              - Solana Token Standards (SPL)
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default WhitePaperSidebar
