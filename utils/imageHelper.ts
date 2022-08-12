import { StaticImageData } from 'next/image'

import ETH_PNG from '@assets/Eth.png'


export interface MyImage
{
  width: number
  height: number
  image: StaticImageData
}


export const Eth_BG: MyImage = {
    width: 3840, 
    height: 2160,
    image: ETH_PNG
}