import React from 'react'
import datas from "./datas.js"

function Header(){
    console.log(datas[0])
    const data=datas[0]

    return(
        <div className=' flex flex-col items-center'>
            <img src="https://marketplace.canva.com/EAEo2Tqgahw/1/0/1600w/canva-gold-minimalist-jewelry-new-arrival-landscape-banner-ommDXeEMVKo.jpg" alt="" />
            <button class=' cursor-pointer p-2 border-1 border-b-1 border-x-1 w-35 relative bottom-30 font-serif rounded-3xl bg-gray-50 hover:bg-fuchsia-50 ...' >Shop now ⤤ </button>
            <h1 className=' -mt-5 text-2xl border-b font-bold'> Features Products </h1>
           <div className=' p-5 flex justify-evenly flex-wrap gap-4 '>{datas.map((data)=>
                 
                <div className='h-50 w-50 shadow shadow-gray-400 p-1 flex items-center flex-col justify-between'>
                <img className='h-30 w-30 object-fill ' src={data.image} alt=""/>
            
                <div>
                <p className=' text-sm font-serif self-start '> {data.title}</p>
                <p className=' font-bold font-sans self-start'> {data.price}</p>
                </div>
            </div>

            )}
        </div>
        </div>
    );
}
export default Header;