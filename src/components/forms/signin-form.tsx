'use client'
import React from 'react'
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

const signinSchema = z.object({
    email: z.string().email().min(2, { message: 'Email must be at least 2 characters long' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
})

const SignInForm = () => {
    const router = useRouter()

    const form = useForm<z.infer<typeof signinSchema>>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit = async (values: z.infer<typeof signinSchema>) => {
        console.log(values)
    }
  return (
    <Form {...form}>
        <form className='flex flex-col gap-6 w-full'>
            <FormField
                control={form.control}
                name='email'
                render={({field}) => (
                    <FormItem>
                        <FormLabel className='text-md'>Email</FormLabel>
                        <FormControl>
                            <Input placeholder='Email' className='text-md' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}></FormField>

            <FormField
                control={form.control}
                name='password'
                render={({field}) => (
                    <FormItem>
                        <FormLabel className='text-md'>Password</FormLabel>
                        <FormControl>
                            <Input type='password' placeholder='Password' className='text-md' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}></FormField>

                <Button className='w-full mt-6'>Sign In</Button>
        </form>
        <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>or</div>
        <Button className='w-full' variant='outline' onClick={() => {signIn('google', { callbackUrl: '/notebook'})}}>Sign In With Google<FcGoogle className='ml-1' size={20} /></Button>
    </Form>
  )
}

export default SignInForm