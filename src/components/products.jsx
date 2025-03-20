import React from 'react'
import datas from "../utils/datas.js"

function Products(){
    return(
        
         <div className='flex flex-col items-center pt-8'>
            <h className=' text-2xl border-b font-bold'>Products Category</h>
        <div className=' h-200'>
            <div>
            <img className='h-85 w-100 right-103 flex m-5 rounded-3xl relative border-b shadow shadow-gray-950 cursor-pointer' src='https://kinclimg5.bluestone.com/f_webp/static/hp/d/dl-1.png'/>
            <img className='h-25 right-65 bottom-15 bg-white flex m-5 rounded-3xl relative border-b shadow shadow-gray-950 hover:scale-105 duration-700 cursor-pointer' src='https://kinclimg5.bluestone.com/f_webp/static/hp/d/bracelets.png'/>

            <img className=' h-85 w-100 left bottom-120 flex m-5 rounded-3xl relative border-b shadow shadow-gray-950 cursor-pointer' src='https://kinclimg5.bluestone.com/f_webp/static/hp/d/dl-3.png'/>
            <img className=' h-25 left-35 bg-white bottom-135 flex m-5 rounded-3xl relative border-b shadow shadow-gray-950 hover:scale-105 duration-700 cursor-pointer' src='https://kinclimg5.bluestone.com/f_webp/static/hp/d/earrings.png'/>

            <img className='h-85 w-110 left-103 bottom-240 flex m-5 rounded-3xl relative border-b shadow shadow-gray-950 cursor-pointer' src='https://kinclimg5.bluestone.com/f_webp/static/hp/d/dl-2.png'/>
            <img className='h-25 bg-white bottom-255 left-150 flex m-5 rounded-3xl relative border-b shadow shadow-gray-950 hover:scale-105 duration-700 cursor-pointer' src='https://kinclimg5.bluestone.com/f_webp/static/hp/d/necklaces.png'/>
        </div>
        <div className=' relative bottom-110'>    
            <img className=' ' src=''/>
            <button className=''></button>
            <img className='' src=''/>
            <button className=' '></button>
        </div>
        </div>
         </div>
    );
}
export default Products;

// h-90 w-140 -ml-35 flex relative bottom-105 left-110 border-b shadow shadow-gray-950  hover:scale-105 duration-700 

{/* <img className=' h-90 w-170 flex m-5 relative right-70 border-b shadow shadow-gray-950 rounded-r-full z-10 hover:scale-105 duration-700' src='https://www.wallacebishop.com.au/cdn/shop/collections/collectionbanner_1200x1200_crop_center.png?v=1733290340'/>
            <button className=' bottom-20 hover:scale-105 duration-300 cursor-pointer border-b-2 border-x-2 w-40 h-10 relative  font-serif rounded-3xl bg-white hover:bg-gray-300 z-10'>Find Out More</button>
            <img className='h-90 w-170 -ml-35 flex relative bottom-106 left-110 border-b shadow shadow-gray-950 rounded-l-full hover:scale-105 duration-700' src='https://media.istockphoto.com/id/1493933474/video/the-girl-adjusts-a-beautiful-necklace-around-her-neck-props-for-the-bride.jpg?s=640x640&k=20&c=gzXiVQwqde-1upsvyySvC6f-Bu7GTvDBwXYTb7214Dk='/>
            <button className=' bottom-120 left-120 hover:scale-105 duration-300 cursor-pointer border-b-2 border-x-2 w-40 h-10 relative font-serif rounded-3xl bg-white hover:bg-gray-300'>Find Out More</button>
         */}