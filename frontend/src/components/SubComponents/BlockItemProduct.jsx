import React from 'react'
import MenuTopBlock from './MenuTopBlock'
import ListProduct from '../ListProduct'
import { Link } from 'react-router-dom'
import '../../sass/BlockProduct/blockItemProduct.scss'

const BlockItemProduct = ({banner,menuTop,linkTo,title}) => {
  return (
    <div className='block-item-product'>
        <div className="banner">
            <img src={banner} alt="" />
        </div>

        {
          menuTop.length > 0 &&
          <MenuTopBlock menuTop={menuTop} />

        }

        <ListProduct quantity={10} />

        <button className='btnViewMore'><Link to={`${linkTo}`}>XEM TẤT CẢ CÁC {title} CHÍNH HÃNG</Link></button>

    </div>
  )
}

export default BlockItemProduct