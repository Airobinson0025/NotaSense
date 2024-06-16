import React from 'react'
import SignupForm from '@/components/forms/signup-form'

const Signup = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='max-w-md bg-secondary p-10 rounded-md'>

            <h2 className='mb-8'>Signup to get started with NotaSense.</h2>
            <SignupForm />
        </div>
    </div>
  )
}

export default Signup