import Layout from '@/layouts/Layout'
import SectionHeading from '@/shared/SectionHeading'
import StackOfCoins from '@/assets/images/stack-of-coin.png'
import HomePageText from '@/assets/images/HomePageText.png'
import useMediaQuery from '@/hooks/useMediaQuery'

type Props = {}

function AboutUs({}: Props) {
  const isAboveMediumScreen = useMediaQuery('(min-width: 768px)')
  return (
    <section id="about" className="mt-[200px]">
      <Layout>
        <SectionHeading>About Us</SectionHeading>
        {isAboveMediumScreen ? (
          <div className="bg-primary-500 flex h-[662px] rounded-3xl">
            <div className="w-1/2 px-16 py-28">
              <img src={StackOfCoins} className="h-full w-full" />
            </div>
            <div className="flex w-1/2 flex-col justify-center pr-24">
              <img src={HomePageText} className="w-72" />
              <p className="text-xl">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-primary-500 flex h-[670px] flex-col rounded-3xl">
            <div className="flex h-1/2 flex-col items-center px-6 pt-10">
              <img src={HomePageText} className="w-72" />
              <p className="text-xl">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is
              </p>
            </div>
            <div className="h-1/2">
              <img src={StackOfCoins} className="h-full w-full p-2" />
            </div>
          </div>
        )}
      </Layout>
    </section>
  )
}

export default AboutUs
