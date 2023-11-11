import WhitePaperNavbar from '@/sections/navbar/WhitePaperNavbar'
import WhitePaperSidebar from '@/sections/navbar/WhitePaperSidebar'
import whitepaperData from '@/static_data/flarebit_white_paper'
type Props = {}

function WhitePaper({}: Props) {
  return (
    <>
      <div className="bg-[#181C1F] text-white">
        <WhitePaperNavbar />
        <div className="flex">
          <WhitePaperSidebar />
          <div className="lg:56 p-10 py-20 sm:px-12 md:px-36 lg:w-3/4">
            {whitepaperData.map((section, index) => (
              <div key={index} id={`section-${index}`}>
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                  {section.heading}
                </h2>
                <p className="mb-10 md:mb-20 md:text-xl">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default WhitePaper
