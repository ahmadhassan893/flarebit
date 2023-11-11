import Logo from '@/assets/images/logo_black.png'
import Layout from '@/layouts/Layout'
import FooterScrollLink from './FooterScrollLink'
import { SelectedPage } from '@/shared/types'
import { Link } from 'react-router-dom'

type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-500 py-16">
      <Layout>
        <div className="justify-content gap-16 md:flex">
          <div className="mt-16 basis-1/2 md:mt-0">
            <Link to={'/'}>
              <img alt="logo" src={Logo} />
            </Link>
            <p className="my-5">
              Lorem vitae ut augue auctor faucibus eget eget ut libero.
              Elementum purus et arcu massa dictum condimentum. Augue
              scelerisque iaculis orci ut habitant laoreet. Iaculis tristique.
            </p>
            <p>© Flare Bit All Rights Reserved.</p>
          </div>
          <div className="mt-16 flex basis-1/4 flex-col space-y-2 md:mt-0">
            <h4 className="font-bold">FIBT</h4>
            <FooterScrollLink
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <FooterScrollLink
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <FooterScrollLink
              page="Our Mission"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <FooterScrollLink
              page="White Paper"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-2">Email</p>
            <p className="my-2">LinkdIn</p>
            <p className="my-2">Instagram</p>
            <p className="my-2">Twitter</p>
          </div>
        </div>
      </Layout>
    </footer>
  )
}

export default Footer
