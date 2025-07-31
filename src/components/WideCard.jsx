import { Star } from 'lucide-react'
import React from 'react'

const WideCard = ({image, title}) => {
    return (
        <div className='h-64 w-64  shadow-lg rounded-xl'>
            <img src={image} className='w-full h-[71%]' alt="" />
            <div className='px-3 py-1'>
                <h1 className='text-base font-bold uppercase'>{title}</h1>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-1'>
                        {Array(5).fill("").map(() => (<Star size={15} />))}
                    </div>
                    <button className='bg-[#F94D1C] text-white px-3 py-1 rounded-md text-sm'>Shop</button>
                </div>
            </div>
        </div>
    )
}

export default WideCard