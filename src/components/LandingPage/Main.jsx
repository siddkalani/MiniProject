import HeroSection from '../pages/HeroSection'
import Intro from '../pages/Intro'
import AboutUs from '../pages/AboutUs'
import ImageGallery from '../pages/ImageGallery'
// import { Outlet } from 'react-router-dom'

const Main = () => {
  return (

    <div className='w-full h-full'>
      <HeroSection />
      <Intro/>
      <AboutUs />
      <ImageGallery/>
    </div>

  )
}

export default Main