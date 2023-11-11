import SectionHeading from '@/shared/SectionHeading'
import CoinGeeko from '@/assets/images/CoinGeeko.png'
import Rust from '@/assets/images/Rust.png'
import Layout from '@/layouts/Layout'

type Props = {}

function Featured({}: Props) {
  return (
    <section id="featured">
      <Layout>
        <SectionHeading>Featured On</SectionHeading>
        <div className="flex w-full flex-col items-center justify-center sm:flex-row sm:gap-16">
          <img src={CoinGeeko} className="mb-10 sm:mb-0" />
          <img src={Rust} />
        </div>
      </Layout>
    </section>
  )
}

export default Featured
