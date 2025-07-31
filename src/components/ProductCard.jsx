import { Star } from 'lucide-react'
import React from 'react'

const ProductCard = ({ productList }) => {
    return (
        <div className='flex mx-auto gap-4'>
            {
                productList.map((item, index) => (
                    <div key={index} className='h-64 w-46  shadow-lg rounded-xl'>
                        <img src={item.image} className='w-full' alt="" />
                        <div className='px-3 py-1'>
                            <h1 className='text-base font-bold uppercase'>{item.title}</h1>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-1'>
                                    {Array(5).fill("").map(() => (<Star size={15} />))}
                                </div>
                                <button className='bg-[#F94D1C] text-white px-3 py-1 rounded-md text-sm'>Shop</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductCard