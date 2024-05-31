import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'



const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-7  h-[700px] px-6 text-center'>
        <h1 className=''>NotaSense</h1>
        <h2 className='font-light'>Transforming Your Thoughts Into Daily Efficiency<br/>With Generative AI</h2>
        <div className='flex items-center gap-3'>
            <Link href='/signup'>
                <Button size='lg' className='text-lg'>Join</Button>
            </Link>
            <Link href='demo'>
                <Button size='lg' variant='outline' className='text-lg'>Try It Out</Button>
            </Link>
        </div>
    </div>
  )
}

export default Hero