import React from 'react'
import error from '../../../assets/error.svg'
export const AppFail = () => {
  return (
<div className="grid h-screen px-4 bg-[#265D80] place-content-center">
  <div className="text-center">
    
    <img src={error} className='w-full h-full' alt="error" />
    <h1
      className="mt-6 text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl"
    >
      Uh-oh!
    </h1>

    <p className="mt-4 text-white text-xl lg:text-2xl">No se encontro la pagina</p>
  </div>
</div>
  )
}
