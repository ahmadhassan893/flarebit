import Layout from '@/layouts/Layout'
import SectionHeading from '@/shared/SectionHeading'
import HomePageText from '@/assets/images/HomePageText.png'
import ClipboardPlan from '@/assets/images/ClipboardPlan.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Link } from 'react-router-dom'

type Props = {}

function Paper({}: Props) {
  const isAboveLargeScreens = useMediaQuery('(min-width: 1280px)')
  return (
    <section id="whitepaper" className="relative mb-[200px]">
      <SectionHeading>White Paper</SectionHeading>
      <div className="animate-blob bg-primary-600 absolute -left-96 top-40 h-[711px] w-[711px] rounded-full opacity-50 mix-blend-multiply blur-3xl filter"></div>
      <Layout>
        {isAboveLargeScreens ? (
          <div className="grid grid-cols-2">
            <div>
              <img src={HomePageText} />
              <p className="mb-10">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet.
              </p>
              <Link
                to="/white-paper"
                className="bg-primary-600 hover:bg-primary-500 rounded-md px-10 py-2 hover:text-white"
              >
                Read More
              </Link>
            </div>
            <div className="ml-40 w-1/2">
              <img src={ClipboardPlan} className="h-full -rotate-45" />
            </div>
          </div>
        ) : (
          <div className="flex w-full flex-col items-center">
            <div className="mb-3">
              <img src={ClipboardPlan} className="h-32 w-24" />
            </div>
            <div className="flex flex-col items-center">
              <img src={HomePageText} />
              <p className="mb-10">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet.
              </p>
              <Link
                to="/white-paper"
                className="bg-primary-600 hover:bg-primary-500 rounded-md px-10 py-2 hover:text-white"
              >
                Read More
              </Link>
            </div>
          </div>
        )}
      </Layout>
    </section>
  )
}

export default Paper
