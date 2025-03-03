import React from 'react'

const TextBox = ({ text }: { text: string }) => {
  return (
    <div className='bg-secondary w-full py-2 text-center font-semibold text-primary'>
        {text}
    </div>
  )
}

export default TextBox