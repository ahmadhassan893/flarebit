import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SelectedPage } from './shared/types'
import Background from './sections/home/background'
import Navbar from './sections/navbar/Navbar'
import Home from './sections/home/Home'
import Featured from './sections/featured/Featured'
import AboutUs from './sections/aboutus/AboutUs'
import OurMission from './sections/ourmission/OurMission'
import Paper from './sections/paper/Paper'
import Footer from './sections/footer/Footer'
import WhitePaper from '@/pages/WhitePaper'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative h-screen w-full">
              <Background />
              <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Home />
              <Featured />
              <AboutUs />
              <OurMission />
              <Paper />
              <Footer
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          }
        />
        <Route path="/white-paper" element={<WhitePaper />} />
      </Routes>
    </Router>
  )
}

export default App
