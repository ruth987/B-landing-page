import React from 'react'

const TextBox = ({ text }: { text: string }) => {
  return (
    <div className='mt-20 bg-secondary w-full py-2 text-center font-semibold md:text-base text-xs text-primary'>
        {text}
    </div>
  )
}

export default TextBox