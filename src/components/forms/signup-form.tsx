import React from 'react'
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }).regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must contain at least one special character' }),
  })


const SignupForm = () => {

    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

const onSubmit = (values: z.infer<typeof signupSchema>) => {
    console.log(values)
}

  return (
    <Form {...form}>
        <form>
            <FormField
                control={form.control}
                name='email'
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Enter Your Email</FormLabel>
                        <FormControl>
                            <Input placeholder='example@gmail.com' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}></FormField>

            <FormField
                control={form.control}
                name='password'
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Create Password</FormLabel>
                        <FormControl>
                            <Input type='password' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}></FormField>
        </form>
    </Form>
  )
}

export default SignupForm