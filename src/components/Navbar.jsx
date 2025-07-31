import React from 'react'
import { nav_item, site_config } from '../config'
import { Link, NavLink } from 'react-router-dom'
import { Instagram, Search, ShoppingCart, Star, Twitter, UserRound, Youtube } from 'lucide-react'

const Navbar = () => {
    let navIcon = [
        { icon: Search },
        { icon: UserRound },
        { icon: Star },
        { icon: ShoppingCart }
    ]
    let social_media = [
        { icon: Instagram },
        { icon: Youtube },
        { icon: Twitter },
    ]
    return (
        <div className='flex justify-between px-20 items-center h-20 '>
            <Link to="/"><img src={site_config.logo} alt="logo" /></Link>
            <div className='flex items-center gap-4 font-semibold'>
                {
                    nav_item.map((item, index) => (
                        <NavLink to={item.path} key={index} className={({isActive})=>isActive? "text-[#F94D1C]": ""}>{item.name}</NavLink>
                    ))
                }
            </div>
            <div className='flex items-center gap-14 text-gray-900'>
                <div className='flex items-center gap-4'>
                    {navIcon.map((icon, index) => (
                        <div className='bg-gray-200 size-7 flex items-center justify-center rounded-full'><icon.icon key={index} size={18} /></div>
                    ))}
                </div>
                <div className='flex items-center gap-4'>
                    {social_media.map((icon, index) => (
                         <div className='bg-gray-200 size-7 flex items-center justify-center rounded-full'><icon.icon key={index} size={18} /></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar