import React from 'react'
import Product from '../Product'
import banner from '../../assets/images/home/banner_watch_series.png'
import { list_product } from '../data'
import { Link } from 'react-router-dom'

const ListWatchesSeries = () => {
  return (
    <div className='list-watches'>
        <div className="banner">
            <Link to=''>
                <img src={banner} alt="" />
            </Link>
        </div>

        <div className="list-product-watches">
            {
                list_product.slice(0,6).map(data => (
                    <Product data={data} />
                ))
            }
        </div>

    </div>
  )
}

export default ListWatchesSeries
