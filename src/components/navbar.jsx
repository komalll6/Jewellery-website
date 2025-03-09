import React from 'react'

function Navbar() {
    return (
        
    <nav className='sticky z-40 top-0 bg-white flex items-center justify-between px-3 h-16'>
        <ul className='flex gap-5  cursor-pointer'>
            <li >Rings</li>
            <li >Earrings</li>
            <li > Bracelets</li>
            <li >Neckwear</li>
        </ul>
        <a  herf=""><img  className='' src="https://cdn-icons-png.flaticon.com/128/13311/13311149.png" alt="" /></a>
     <div className=' flex items-center gap-5' >
     <ul className='flex gap-5 cursor-pointer'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Help</li>
    
     </ul>
    <input className='border rounded-lg p-2 '  type="text"  placeholder='Search...' />
     <img src="https://cdn-icons-png/. flaticon.com/128/54/54481.png" alt=""/>

     <a  herf="#"> <img className='w-10  cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/2438/2438133.png" alt="" /> </a>

     <a  herf="#"><img className='w-10 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/17468/17468741.png" alt="" /></a>
     
     </div>
     </nav>

    );
}
export default Navbar;