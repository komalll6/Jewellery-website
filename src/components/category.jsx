import React from 'react'
import datas from "../utils/datas.js"

function Category(){
    return(
        <div className=' flex  relative top-0 bg-gray-800'>
            <h className=' flex top-5 left-20 relative text-1xl text-amber-50 font-light '>HIGEST STANDARDS</h>
            <p className='  m-10 font-serif text-amber-50 flex text-3xl relative right-25'><br></br>Good products can be sold by honest advertising.<br></br>If you don't think the product is good,<br></br>you have no business to be advertising it.</p>

            <img className='h-13 relative top-13' src='https://cdn-icons-png.flaticon.com/128/15618/15618025.png'/>
            <h2 className=' text-white relative right-26 top-26 font-light'>Full Servise Production</h2>
            
            <img className='h-13 relative left-10 top-13' src='https://cdn-icons-png.flaticon.com/128/744/744480.png'/>
            <h3 className=' text-white relative font-light top-26 right-11'>European Quality</h3>
            
        </div>
    );
}
export default Category;