import SignInForm from '@/components/forms/signin-form'
import { signIn } from 'next-auth/webauthn'
import React from 'react'



const SignIn = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='max-w-md bg-secondary p-10 rounded-md'>
            <h2 className='mb-8'>Login to Notasense.</h2>
            <SignInForm />
        </div>
    </div>
  )
}

export default SignIn