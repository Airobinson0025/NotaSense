'use client'
import React from 'react'
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

const signupSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
    email: z.string().email(),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }).regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must contain at least one special character' }),
  })


const SignupForm = () => {

    const router = useRouter()

    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })

const onSubmit = async (values: z.infer<typeof signupSchema>) => {
    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: values.name,
                email: values.email,
                password: values.password,
            }),

        })
        if(!response.ok) {
            throw new Error('Something went wrong')
        }

        const data = await response.json()
        router.push('/notebook')
        console.log(data, "User signed up  successfully")
    } catch (error) {
        console.error(error)
    }
}

  return (
    <Form {...form}>
        <form className='flex flex-col gap-6 w-full'>
        <FormField
                control={form.control}
                name='name'
                render={({field}) => (
                    <FormItem>
                        <FormLabel className='text-md'>First and Last Name</FormLabel>
                        <FormControl>
                            <Input placeholder='Enter Name' className='text-md' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}></FormField>

            <FormField
                control={form.control}
                name='email'
                render={({field}) => (
                    <FormItem>
                        <FormLabel className='text-md'>Enter Your Email</FormLabel>
                        <FormControl>
                            <Input placeholder='example@gmail.com' className='text-md' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}></FormField>

            <FormField
                control={form.control}
                name='password'
                render={({field}) => (
                    <FormItem>
                        <FormLabel className='text-md'>Create a Password</FormLabel>
                        <FormControl>
                            <Input placeholder='Password' type='password' className='text-md' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}></FormField>
            
            <Button onClick={form.handleSubmit(onSubmit)}>Sign Up</Button>
        </form>
        <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>or</div>
        <Button variant='outline' className='w-full'>Sign up with Google</Button>
    </Form>
  )
}

export default SignupForm