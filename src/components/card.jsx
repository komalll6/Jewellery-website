import React from 'react'
import datas from "../utils/datas.js"

function Header(){
    console.log(datas[0])
    const data=datas[0]

    return(
    <div className='flex flex-col items-center'>
        <h1 className=' -mt-5 text-2xl border-b font-bold'>Our features Products </h1>
    <div>

        <div className=' p-5 flex justify-evenly flex-wrap gap-y-3 '>{datas.map((data)=>
                 
        <div className=' cursor-pointer h-80 w-60 shadow shadow-gray-400 p-1 flex-col hover:scale-90 duration-300 rounded-lg'>
                <img className=' cursor-pointer h-55 w-60 object-cover rounded-t-lg ' src={data.image} alt=""/>
            
                <div className=' flex flex-col items-start '>
                <p className=' text-sm font-serif  '> {data.title}</p>
                <p className=' font-bold font-sans '> {data.price}</p>
                </div>
        </div>

            )}
        </div>
    </div>
    </div>
    );
}
export default Header;