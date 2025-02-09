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
import { SignupFormSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'
import { signup } from '@/lib/actions/auth.action'
import { useState } from 'react'

type Props = {}

const SignupPage = (props: Props) => {
	const [error, setError] = useState<string>('')
	const form = useForm<z.infer<typeof SignupFormSchema>>({
		resolver: zodResolver(SignupFormSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			passwordConfirmation: '',
		},
	})

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof SignupFormSchema>) {
		if (values.password !== values.passwordConfirmation) {
			setError('Passwords did not match')
		}
		const { name, email, password } = values
		await signup(name, email, password)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8 p-4 flex flex-col items-center justify-center border-black border mx-4 mt-4 rounded-xl'
			>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									className='border-black border'
									placeholder='Name'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
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
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									className={'border-black border'}
									placeholder='Password'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='passwordConfirmation'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input
									className='border-black border'
									placeholder='Confirm Password'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{error && <p className='text-red-500'>{error}</p>}
				<Button type='submit'>Sign Up</Button>

				<p>
					Already have an account?{' '}
					<Link href='/auth/login' className='text-blue-500'>
						Login
					</Link>
				</p>
			</form>
		</Form>
	)
}

export default SignupPage
