import React from 'react'
import { footer, productList, site_config, trending_product } from '../config'
import { CircleArrowRight, Instagram, Mail, Phone, PhoneCall, Twitter, Youtube } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import WideCard from '../components/WideCard'
import JustForYou from '../components/JustForYou'
import { Link } from 'react-router-dom'

const Home = () => {
  let social_media = [
    { icon: Instagram },
    { icon: Youtube },
    { icon: Twitter },
  ]
  return (
    <div>
      {/* hero section  */}
      <div className='flex bg-gray-100 justify-around items-center h-[90vh] '>
        <div className='w-1/2 pl-20'>
          <p className='font-["Kaushan_Script"] text-3xl text-gray-600'>Starting At Only $0.5</p>
          <h1 className='my-3 tracking-wide leading-15 uppercase text-5xl font-bold'><span className='text-[#F94D1C]'>Summer</span> Special Collection</h1>
          <p className='text-gray-600'>Brand day flat 20% off and free shipping</p>
          <div className='flex items-center gap-4 mt-8'>
            <button className='bg-[#F94D1C] text-white px-5 py-1.5 rounded-md'>Shop Now</button>
            <div className='flex items-center gap-2'>
              <Phone size={18} className='text-[#F94D1C]' /> +(00)-000-000-0000
            </div>
          </div>
        </div>
        <div className='h-full flex items-end'>
          <img src={site_config.banner} alt="banner" className='h-11/12' />
        </div>
      </div>

      {/* product  */}
      <div>
        <div className='flex w-1/2 mx-auto my-10'>
          <ProductCard productList={productList.slice(0, 2)} />
          <WideCard image={site_config.wide1} title={"Polo Shirts"} />
        </div>
        <div className='flex w-1/2 mx-auto my-10'>
          <WideCard image={site_config.wide2} title={"Polo Shirts"} />
          <ProductCard productList={productList.slice(2, 4)} />
        </div>
      </div>

      {/* just for you  */}
      <JustForYou />

      {/* trending  */}
      <div className='background flex items-center justify-between w-full z-10 h-[70vh]'>
        <div className='pl-40'>
          <p className='text-sm text-gray-600'>Best Sell</p>
          <h1 className='text-3xl font-bold'>Trendy Products</h1>
          <div className='flex flex-col gap-2 text-gray-600 text-sm'>
            <div className='flex gap-1.5 items-center'><CircleArrowRight size={17} /><p>Free Shipping</p></div>
            <div className='flex gap-1.5 items-center'><CircleArrowRight size={17} /><p>100% Secure Checkout</p></div>
            <div className='flex gap-1.5 items-center'><CircleArrowRight size={17} /><p>Quality Ensured</p></div>
          </div>
          <button className='bg-[#F94D1C] text-white px-5 py-1.5 mt-3 rounded-md'>Shop Now</button>
        </div>
        <div className='flex gap-4'>
          {
            trending_product.map((item, index) => (
              <div className='bg-[#F94D1C] p-2 h-64' key={index}>
                <img src={item} className='h-full w-full' alt="images" />
              </div>
            ))
          }
        </div>
      </div>

      {/* subscribe  */}
      <div className='flex justify-between items-center bg-gray-100 h-[50vh]'>
        <img className='h-full' src={site_config.subscribe} alt="subscribe" />
        <div className='w-3/5'>
          <p className='tracking-widest text-gray-600'>20% discount</p>
          <h1 className='text-4xl font-bold my-3'>Subscribe & Get 20% Discount code</h1>
          <p>Looking for a discount code for Your suprise ?</p>
          <form className='flex items-center justify-between w-2/3 gap-5 '>
            <input type="text" className='bg-white flex-1 p-1.5 rounded-md my-4' placeholder='Email Address' />
            <button className='bg-[#F94D1C] text-white px-5 py-1.5 rounded-md'>Subscribe</button>
          </form>
          <p>Sign up for our newsletter below to receive the latest discount codes for Yoursurprise.</p>
        </div>
      </div>


      {/* footer  */}
      <div className='bg-[#0a191c] text-white px-20 mt-10 py-10'>
        <div className='flex justify-between'>
          <div className='flex-1  h-64 flex flex-col items-start gap-5 pl-4 pt-4'>
            <img src={site_config.logo} className='invert' alt="" />
            <p className='text-sm -mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, reprehenderit?</p>
            <div className='text-sm'>
              <p>Privacy Policy</p>
              <p>Terms and Condition</p>
            </div>
          </div>
          <div className='flex-1 pl-10 pt-4 h-64'>
            <h1 className='text-2xl font-bold mb-6'>INFORMATION</h1>
            <ul className='flex flex-col gap-1 text-sm'>
              {footer.information.map((item, index) => (
                <li key={index} className=''><Link to={item.path}>{item.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className='flex-1  h-64 pt-4 pl-10'>
            <h1 className='text-2xl font-bold mb-6 '>HELP</h1>
            <ul className='flex flex-col gap-1 text-sm'>
              {footer.help.map((item, index) => (
                <li key={index} className=''>{item}</li>
              ))}
            </ul>
          </div>
          <div className='flex-1  h-64 pt-4 pl-4'>
            <h1 className='text-2xl font-bold mb-6 '>SOCIAL MEDIA</h1>
            <div className='flex mb-6 items-center gap-4'>
              {social_media.map((item, index) => (
                <div key={index}>
                  <item.icon size={20} />
                </div>
              ))}
            </div>
            <div className='flex items-center gap-3 '><PhoneCall size={20} /> +(00)-000-000-0000 </div>
            <div className='flex items-center gap-3 '><Mail size={20} /> abc@gmail.com</div>
          </div>
        </div>
        <div className='flex border-t pt-5 border-white/20 justify-between'>
          <div className='flex items-center gap-4 '>
            <h1 className='text-xl font-bold'>Category</h1>
            <div className='flex items-center gap-2'>{footer.category.map((item, index) => (<p key={index}>{item}</p>))}</div>
          </div>
          <div>© OMMart  {new Date().getFullYear()} | All Rights Reserved</div>
        </div>
      </div>
    </div>
  )
}

export default Home