import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'



const Hero = () => {
  return (
    <div className='flex items-center justify-start gap-3 h-[700px] px-6'>
        <div className='flex flex-col max-w-2xl gap-7'>
        <h1>Effortless AI-Powered Note-Taking</h1>
        <h4 className=''>Noctasense is the ultimate AI-powered note-taking app that revolutionizes how you capture and organize your
            ideas. Say goodbye to manual note-taking and embrace the power of intelligent automation.</h4>
        <div className='flex items-center gap-3'>
            <Link href='/signup'>
                <Button size='lg' className='text-lg'>Join</Button>
            </Link>
            <Link href='demo'>
                <Button size='lg' variant='outline' className='text-lg'>Try It Out</Button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Hero