import React from 'react'
import logo from "../assets/logo.jpg"

function Navbar() {
    return (
        
        <nav className=' sticky z-40 top-0 bg-white flex items-center justify-between px-3 h-16'>

        <a  herf=""><img   className='h-15  hover:cursor-pointer' src={logo} alt="" /></a>


    <input className='border rounded-lg p-1 w-170 h-10'  type="text"  placeholder='Search...'/>
     <img  className=' flex absolute right-92 w-7 ' src="https://img.icons8.com/?size=50&id=132&format=png" alt=""/>
     <div className='flex mr-20 gap-x-4 cursor-pointer'>
     <a  herf="#"> <img className='w-7 ml-1 pb-2 ' src="https://cdn-icons-png.flaticon.com/128/2438/2438133.png" alt="" /> CART</a>
     <a  herf="#"> <img className='w-7 ml-5 pb-2 ' src="https://cdn-icons-png.flaticon.com/128/535/535285.png" alt="" /> WISHLIST</a>
     <a  herf="#"><img className='w-7 ml-5 pb-2 ' src="https://cdn-icons-png.flaticon.com/128/17468/17468741.png" alt="" />ACCOUNT</a>

     </div>
     </nav>

    );
}
export default Navbar;