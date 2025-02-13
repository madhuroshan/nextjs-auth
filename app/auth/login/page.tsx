'use client'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/components/ui/form'
import { LoginFormSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'
import { login } from '@/lib/actions/auth.action'
import { useState } from 'react'

const LoginPage = () => {
	const [error, setError] = useState('')
	const form = useForm<z.infer<typeof LoginFormSchema>>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const response = await login(values.email, values.password)
		if (response?.message) {
			setError(response.message)
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8 p-4 flex flex-col items-center justify-center border-black border mx-4 mt-4 rounded-xl'
			>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email*</FormLabel>
							<FormControl>
								<Input
									className='border-black border'
									placeholder='Email'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password*</FormLabel>
							<FormControl>
								<Input
									className='border-black border'
									placeholder='Password'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{error && <p className='text-red-500 p-2'>{error}</p>}

				<Button type='submit'>Login</Button>
				<p>
					Don't have an account?{' '}
					<Link href='/auth/signup' className='text-blue-500'>
						Sign Up
					</Link>
				</p>
			</form>
		</Form>
	)
}

export default LoginPage
