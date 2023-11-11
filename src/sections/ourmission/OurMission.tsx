import Layout from '@/layouts/Layout'
import SectionHeading from '@/shared/SectionHeading'
import Gaol from '@/assets/images/goal.png'
import Eye from '@/assets/images/eye.png'
import Value from '@/assets/images/value.png'

type Props = {}

function OurMission({}: Props) {
  return (
    <section
      id="ourmission"
      className="relative mt-[200px] overflow-hidden pb-[200px]"
    >
      <SectionHeading>Our Mission</SectionHeading>
      <div className="animate-blob absolute -right-96 top-20 h-[711px] w-[711px] rounded-full bg-[#EB1D464D] opacity-70 mix-blend-multiply blur-3xl filter"></div>
      <Layout>
        <div className="grid gap-16 lg:grid-cols-2 xl:grid-cols-3">
          <div className="border-primary-600 relative h-[550px] w-full rounded-2xl border xl:w-[324px]">
            <div className="absolute right-2 top-2 h-full  w-full rounded-2xl bg-[#fad7a580]">
              <div className="flex flex-col items-center justify-center gap-3 px-6 py-14">
                <img src={Gaol} className="h-28 w-28" />
                <h4 className="text-2xl font-bold">Mission</h4>
                <p className="text-xl font-normal">
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="border-primary-600 relative h-[550px] w-full rounded-2xl border xl:w-[324px]">
            <div className="absolute right-2 top-2 h-full  w-full rounded-2xl bg-[#fad7a580]">
              <div className="flex flex-col items-center justify-center gap-3 px-6 py-14">
                <img src={Eye} className="h-28 w-28" />
                <h4 className="text-2xl font-bold">Vision</h4>
                <p className="text-xl font-normal">
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="border-primary-600 relative h-[550px] w-full rounded-2xl border xl:w-[324px]">
            <div className="absolute right-2 top-2 h-full  w-full rounded-2xl bg-[#fad7a580]">
              <div className="flex flex-col items-center justify-center gap-3 px-6 py-14">
                <img src={Value} className="h-28 w-28" />
                <h4 className="text-2xl font-bold">Values</h4>
                <p className="text-xl font-normal">
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default OurMission
