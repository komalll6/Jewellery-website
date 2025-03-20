import React from 'react'
import datas from "../utils/datas.js"

function Footer(){
    return(
     <div className='mt-95'>
        <img className='w-320 h-95' src='https://cdn.shopify.com/s/files/1/1834/6621/collections/Solid-Gold-Jewellery_4201d48f-b8c7-4411-b770-571e31a0af8e.jpg?v=1700066201'/>
        <h className='font-mono font-bold text-4xl flex relative bottom-60 left-120 text-white'>From The Source</h>
        <p className=" font-extralight text-2xl flex relative bottom-55 left-55 text-white">Handcrafting the world's best diamonds starts with knowing where they come from.<br></br>
            we proudly trace 100% of our rough diamonds to known mines and sources.</p> 
        <p className=" cursor-pointer underline font-semibold text-2xl flex relative bottom-50 left-120 text-white">Follow Your Diamond Journey</p>    
        
    <div>

    <div className='-mt-19'>
        <div className='flex relative bottom-15 left-4 h-15 '>
        <img src="https://s3-us-east-2.amazonaws.com/designevo/projects/uid-4235681/3674a6a9423ad474807c8a6b460ea8bd/preview.png?t=1741603522176"/>
    </div>    
       
    <div className=" bg-white pb-45 -mt-35 pt-19 p-5 ">
            <h className='text-black'>Diamond Sea is a family-run company<br></br>
            and a leading exporter of high-quality<br></br>
            polished diamonds and jewellery.</h><br></br>
    </div>
        
    <div className="relative left-110 bottom-73 cursor-pointer "> 
            <h className='font-bold'>Shops</h>
           <ul>
            <li className=" hover:underline hover:text-black hover:duration-100 cursor-pointer">Rings</li>
            <li className=" hover:underline hover:text-black hover:duration-100 cursor-pointer">Necklace</li>
            <li className=" hover:underline hover:text-black hover:duration-100 cursor-pointer">Bracelate</li>
            <li className=" hover:underline hover:text-black hover:duration-100 cursor-pointer">Earings</li>
           </ul><br></br>
    </div>

        <div className="pt-10 relative left-152 bottom-119 cursor-pointer">
           <h className='font-bold '>Company</h>
           <ul>
            <li className=" hover:underline hover:text-black hover:duration-100 cursor-pointer">FAQ</li>
            <li className=" hover:underline hover:text-black hover:duration-100 cursor-pointer">Testimonial</li>
            <li className=" hover:underline hover:text-black hover:duration-100 cursor-pointer">Contact</li>
            <li className=" hover:underline hover:text-black hover:duration-100 cursor-pointer">About</li>
           </ul><br></br>
        </div>

        <div className="pt-10 relative left-195 bottom-165 cursor-pointer">
           <h className='font-bold'>BUYER</h>
           <ul>
            <li className=" hover:underline hover:text-black hover:duration-100 cursor-pointer">Payment</li>
            <li className=" hover:underline hover:text-black hover:duration-100 cursor-pointer">Shipping</li>
            <li className=" hover:underline hover:text-black hover:duration-100 cursor-pointer">Returns</li>
           </ul><br></br>
        </div>
        
        <div>
            <h></h>
        <input className='border hover:cursor-pointer box-border rounded-sm p-1 w-80 left-228 h-7 relative bottom-185 cursor-pointer' type="text"  placeholder='Enter email...'/>
        
        </div>
        </div>
    </div>
    </div>
    
    );
}
export default Footer;