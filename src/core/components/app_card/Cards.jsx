import React, { useState } from 'react'
import AppCompra from './appCompra';
import { DESCRIPTION } from './description';
export const Cards = (props) => {
    
    const data = props.data;
  return (
    <>{data?.map((item)=>(
        <div key={item.idDrink} className='animacion' >
                <div className='flex flex-col justify-center items-center rounded-lg  shadow-lg'>
                <a href={`#${item.strDrink}`} >

                <img src={item.strDrinkThumb} alt={item.strDrink} className='object-cover rounded-lg ' />
                </a>
                <div className='flex flex-col justify-center items-center pb-3'>

                <h1 className='text-xl text-[#25383b]'>{item.strDrink}</h1>
                <AppCompra price={item.idDrink} title={item.strDrink} description={item.strInstructions ? item.strInstructions : DESCRIPTION} imagen={item.strDrinkThumb}/>
                </div>
                </div>
            </div>
        ))}</>
  )
}

