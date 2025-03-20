import Intro from './Intro'
import ImageSlider from './ImageSlider'
import AboutUs from './AboutUs'


const Services = () => {
  return (
    <div className='w-full h-full bg-white'>
      <AboutUs />
      <ImageSlider />
      <Intro/>
      {/* <HeroAyush/> */}
    </div>
  )
}

export default Services;