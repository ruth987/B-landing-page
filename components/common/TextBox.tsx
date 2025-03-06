import React from 'react'
import { useRouter } from 'next/navigation';

const TextBox = ({ text }: { text: string }) => {
  const router = useRouter();
  return (
    <div
     onClick={() => router.push('/contact')}
     className='mt-20 bg-secondary w-full py-2 text-center font-semibold md:text-base text-xs text-primary cursor-pointer'>
        {text}
    </div>
  )
}

export default TextBox