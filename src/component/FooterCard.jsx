import React from 'react'

const FooterCard = ({items,title}) => {
  
  return (
    <div className='even:w-1/3 w-1/4 '>
        <p className='font-semibold py-6'>{title}</p>
        <ul>
      {items?.map((item,ind)=>
        <li key={ind} className='py-2 text-gray-600'>{item}</li> )}
    </ul>
    </div>
  )
}

export default FooterCard
