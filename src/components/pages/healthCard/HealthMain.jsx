import React from 'react'
import HealthCard from './HealthCard'
import Section1 from './Section1'
import Section2 from './Section2'


const HealthMain = () => {
  return (
    <div className='w-full h-full bg-white'>
      <HealthCard />
      <Section1 />
      <Section2/>
    </div>
  )
}

export default HealthMain