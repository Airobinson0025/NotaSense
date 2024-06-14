import SignInForm from '@/components/forms/signin-form'
import React from 'react'



const SignIn = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='max-w-md'>
            <h2 className='mb-8'>Login To Notasense.</h2>
            <SignInForm />
        </div>
    </div>
  )
}

export default SignIn