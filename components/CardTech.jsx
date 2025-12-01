import React, { memo } from 'react'

function CardTech({tech}) {
  return (
      <p className='bg-gray-800 text-center px-3 py-0.5 rounded-xl'>{tech}</p>
  )
}

export default memo(CardTech)