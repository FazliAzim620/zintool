import React from 'react'

const Bookmarks = ({title,data}) => {
  
  return (
    <div className='px-20 pt-12 cursor-pointer'>
      <h1 className='text-xl font-bold   '>{title}</h1>
      <div className='py-5 flex gap-4 flex-wrap'>
        {data?.map((item,index)=>{
            return(
                <div key={index} className='ring-1 ring-gray-200 w-[48%] md:w-[17%] duration-500 transition-all hoverShadow  rounded-md h-[10rem] p-4'>
                <i className={item.icon} style={{padding:'0.3rem',fontSize:'2rem',color:item?.bgcolor}}></i>
                <h1 className='text-base font-bold py-2'>{item.title}</h1>
                <p className='text-xs text-gray-500'>{item.desc}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Bookmarks
