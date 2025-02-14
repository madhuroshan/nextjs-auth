'use client'

import React, { useEffect, useState } from 'react'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { passwordChange } from '@/lib/actions/user.action'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/components/ui/form'
import { z } from 'zod'
import { PasswordChangeSchema } from '@/lib/validation'

const PasswordChange = () => {
	const [error, setError] = useState<string>('')
	const [open, setOpen] = useState(false)
	const form = useForm<z.infer<typeof PasswordChangeSchema>>({
		resolver: zodResolver(PasswordChangeSchema),
		defaultValues: {
			oldPassword: '',
			newPassword: '',
			newPasswordConfirmation: '',
		},
	})

	async function onSubmit(values: z.infer<typeof PasswordChangeSchema>) {
		const { oldPassword, newPassword, newPasswordConfirmation } = values
		if (oldPassword === newPassword) {
			setError('New Password should not match the Old Password')
		} else if (newPassword !== newPasswordConfirmation) {
			setError('Passwords do not match')
		} else {
			await passwordChange({ oldPassword, newPassword })
			form.reset()
			setOpen(false)
		}
	}

	useEffect(() => {
		if (error) {
			const timer = setTimeout(() => setError(''), 2000)
			return () => clearTimeout(timer)
		}
	}, [error])

	return (
		<div className='m-4'>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button variant='outline' className='bg-black text-white'>
						Change Password
					</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Change Password</DialogTitle>
						<DialogDescription>
							Update your password here.
						</DialogDescription>
					</DialogHeader>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='flex flex-col justify-center gap-2'
						>
							<FormField
								control={form.control}
								name='oldPassword'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Old Password</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='newPassword'
								render={({ field }) => (
									<FormItem>
										<FormLabel>New Password</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='newPasswordConfirmation'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Confirm New Password
										</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{error && (
								<p className='text-red-500 text-sm'>{error}</p>
							)}
							<Button type='submit' className='mt-2'>
								Submit
							</Button>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default PasswordChange
