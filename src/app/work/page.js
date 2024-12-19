import React from 'react'
import Portfolio from './Portfolio/Portfolio'
import Service from './Service/Service'

const work = () => {
  return (
    <div className='w-full bg-gray-900 text-white p-8'>
        <Portfolio />
        <Service />
    </div>
  )
}

export default work
