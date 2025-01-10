import React from 'react'
import Banner from '../../components/banner/Banner'
import SecondBanner from '../../components/secondBanner/SecondBanner'
import Categories from '../../components/categories/Categories'
import SpecialBanner from '../../components/specialbanner/SpecialBanner'
import SpecialProducts from '../../components/specialProducts/SpecialProducts'

const Home = () => {

  // https://groca.myshopify.com/
  return (
    <div>

      <Banner/>
      <SecondBanner/>

      <Categories/>

      <SpecialBanner/>

      <SpecialProducts/>
    </div>
  )
}

export default Home