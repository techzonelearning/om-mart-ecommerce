import React, { useEffect, useState } from "react";
import { justForYou } from "../config";
import { Star } from "lucide-react";

const JustForYou = () => {
    let [filter, setFilter] = useState("All");
    let [product, setProduct] = useState([]);
    let filterTab = [
        "All",
        "Tank",
        "Polo Shirts",
        "T-Shirts",
        "Casual Shirts",
        "Bandana",
        "Men Belts",
    ];
    console.log(product);

    useEffect(() => {
        if (filter == "All") {
            return setProduct(justForYou)
        }
        return setProduct(justForYou.filter((item) => item.category == filter))
    }, [filter])
    return (
        <div className="p-20 bg-gray-100">
            <h1 className="text-4xl font-bold text-center">Just For You</h1>
            <div className="flex justify-center items-center gap-4 my-5">
                {filterTab.map((item, index) => (
                    <button onClick={() => setFilter(item)} className="bg-[#F94D1C] px-3 py-1 text-white rounded-md" key={index}>{item}</button>
                ))}
            </div>
            <div className="grid grid-cols-4 w-2/3 justify-items-center  mx-auto gap-4 flex-wrap">
                {product.map((item, index) => (
                    <div key={index} className='h-64 w-46  shadow-lg rounded-xl'>
                        <img src={item.image} className='w-full' alt={item.title} />
                        <div className='px-3 py-1'>
                            <h1 className='text-base font-bold uppercase'>{item.title.slice(0,14)+".."}</h1>
                            <p><del>{item.price}</del> <span className="text-lg text-[#F94D1C] font-semibold">{item.offPrice}</span></p>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-1'>
                                    {Array(5).fill("").map(() => (<Star size={15} />))}
                                </div>
                                <button className='bg-[#F94D1C] text-white px-3 py-1 rounded-md text-sm'>Shop</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
};

export default JustForYou;
