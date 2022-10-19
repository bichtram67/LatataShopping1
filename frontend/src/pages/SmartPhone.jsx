import React from 'react'
import { sliderTablet } from '../components/Tablet/dataTablet'
import { bannerTablet } from '../components/Tablet/dataTablet'
import '../sass/SmartPhone/smartphone.scss'
import MainSub from '../components/SubComponents/MainSub'
import { list_product } from '../components/data'

const SmartPhone = () => {
  return (
    <div className='smart-phone' >
       
        <MainSub list_product={list_product}
                 parentCate={'Điện thoại'}
                 childCate={'điện thoại'}
                 sliders={sliderTablet}
                 banners={bannerTablet} />


    </div>
  )
}

export default SmartPhone
