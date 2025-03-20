import React from 'react'
import datas from "../utils/datas.js"
import Navbar from "../components/navbar.jsx"

function Header(){
    console.log(datas[0])
    const data=datas[0]

    return(
        <>
        <Navbar/>
        <div className='flex flex-col items-center cursor-pointer mt-6'>
        <h1 className=' -mt-5 text-2xl border-b font-bold text-zinc-950'>Our features Products </h1>
        <div className=' p-5 flex justify-evenly flex-wrap gap-y-3 '>{datas.map((data)=>

            <div className='h-80 w-60  flex-col rounded-lg'>
           <a className=' flex relative items-center p-1.5 left-50 top-10  w-8 h-8 object-cover rounded-2xl text-3xl bg-white' herf="" > <img className='w-6 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/535/535285.png" alt="" /> </a>
            <img className='h-55 w-60 object-cover rounded-lg ' src={data.image} alt=""/>

            <div className=' flex flex-col'>
            <p className=' font-bold font-sans mb-2'> {data.price}</p>
            <p className=' text-fuchsia-900 text-xs font-serif  '> {data.title}</p>

            </div>

            <button className=' mt-5 bg-zinc-600 hover:bg-zinc-900 hover:text-stone-50 rounded-lg cursor-pointer border-1 border-x-1 w-60 h-8 font-serif ' >Add to Card</button>


        </div>

        )}
    </div>
    </div>
    </>
    );
}
export default Header;