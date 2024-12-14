import React from 'react'
import { useQuery } from 'react-query'
import { getAllProductsSearch } from '../../utilities/api'
import NormalProduct from '../products/NormalProduct'
import Loader from '../../UI/Loader'

export default function ProductMainMabyKnow({subCategory}) {
        const {data,isLoading,isFetching} = useQuery({
            queryFn:()=>getAllProductsSearch("subCategory",subCategory),
            queryKey:["pro"]
        })
        if (isLoading ||isFetching ) return <div className=" absolute bg-[#0000003c] w-full top-0 left-0 bottom-0 flex justify-center items-center"> <Loader h={120} w={120}/> </div>;

        
  return (
    <ul className='flex flex-wrap'>
        {data.data.data.map(product=><NormalProduct key={product._id} product={product}/>)}
    </ul>
  )
}