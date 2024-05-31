import React from 'react'
import SignupForm from '@/components/forms/signup-form'

const Signup = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div>
            <h2 className='mb-8'>Create an account to get started<br/>with NotaSense.</h2>
            <SignupForm />
        </div>
    </div>
  )
}

export default Signup