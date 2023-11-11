import Layout from '@/layouts/Layout'
import useMediaQuery from '@/hooks/useMediaQuery'
import HomePageText from '@/assets/images/HomePageText.png'
import HomePageGraphic from '@/assets/images/HomePageGraphic.png'
type Props = {}

function Home({}: Props) {
  const mediumScreen = 'absolute top-20 h-screen'
  const isAboveMediumScreen = useMediaQuery('(min-width: 768px)')
  return (
    <section
      id="home"
      className={`h-5/6 ${
        isAboveMediumScreen ? mediumScreen : 'bg-primary-500 mb-10 h-5/6'
      } w-full`}
    >
      <div className="absolute -left-16 -top-40 h-96 w-96 bg-[#EB1D464D] opacity-60 blur-3xl filter"></div>
      {isAboveMediumScreen ? (
        <Layout>
          <div className="mt-6 grid grid-cols-2 xl:mt-36">
            <div className="flex flex-col justify-center">
              <img src={HomePageText} />
              <p className="text-sm leading-normal lg:text-lg xl:text-xl">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.It is
                a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </p>
            </div>
            <div className="">
              <img src={HomePageGraphic} />
            </div>
          </div>
        </Layout>
      ) : (
        <div className="pt-20">
          <Layout>
            <div className="relative top-20">
              <div className="flex flex-col justify-center">
                <img src={HomePageText} />
                <p className="text-sm leading-normal">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.It
                  is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
            </div>
          </Layout>
        </div>
      )}
    </section>
  )
}

export default Home
