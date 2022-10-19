import React,{useContext} from 'react'
import BlockItemProduct from '../SubComponents/BlockItemProduct'
import { AccessoryContext } from '../../context/accessoryContext'

const ListBlockAccessories = () => {

    const context = useContext(AccessoryContext)


  return (
    <>

            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_apple}
                linkTo={'/'}
                menuTop={context.menu_apple_accessories}
                title={'APPLE'}
            />

            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_battery}
                linkTo={'/'}
                menuTop={context.menu_battery}
                title={'SẠC DỰ PHÒNG'}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_chargeCable}
                linkTo={'/'}
                menuTop={context.menu_chargeCable}
                title={'CÁP SAC'}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_headphone}
                linkTo={'/'}
                menuTop={context.menu_headphone}
                title={'TAI NGHE'}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_speaker}
                linkTo={'/'}
                menuTop={context.menu_speaker}
                title={'LOA'}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_smartHome}
                linkTo={'/'}
                menuTop={context.menu_smartHome}
                title={'THIẾT BỊ THÔNG MINH'}
            />
            <BlockItemProduct 
                banner={context.banner_block_product.banner_block_gaming}
                linkTo={'/'}
                menuTop={context.menu_gaming}
                title={'PHỤ KIỆN GAMING'}
            />

    </>
  )
}

export default ListBlockAccessories