import React from 'react'
import daimond from "../assets/daimond.png"
// import datas from "./datas.js"

function Header(){
    
    return(
        <div className='flex flex-col items-center'>
            <img className=' h-5 flex absolute top-79 left-87' src={daimond}></img>
           <p className='flex absolute text-zinc-400 font-serif top-72 left-15'> As human beings, we're very materialistic and have all this stuff -<br></br> furs and cars and diamonds and money.</p>
            <p className=' flex absolute text-zinc-100  top-85 left-15 font-serif text-5xl '>You deserve the most unique jewellery</p>
            
            <img className=' w-[100vw]' src="https://47jewelry.com/cdn/shop/files/slider1_1_1000x.jpg?v=1652710410" alt="" />
            
            <a href='/card'><button class=' hover:scale-105 duration-500  cursor-pointer p-2 border-1 border-b-1 border-x-1 w-35 relative bottom-40 right-60 font-serif rounded-3xl bg-gray-50 hover:bg-gray-300 ...' >Shop now ⤤ </button></a> 
        </div>
    );
}
        
export default Header;