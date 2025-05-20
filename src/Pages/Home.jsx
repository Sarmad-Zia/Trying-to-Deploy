import React from 'react'
import HeaderSection from '../Commponents/HeaderSection'
import LatestCollection from '../Commponents/LatestCollection'
import BestSeller from '../Commponents/BestSeller'
import OurPolices from '../Commponents/OurPolices'
import NewsLetter from '../Commponents/NewsLetter'

const Home = () => {
  return (
    <div>
      <HeaderSection/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolices/>
      <NewsLetter/>
    </div>
  )
}

export default Home
