'use client'

import { UserInfoSchema } from '@/lib/validation'
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
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { userInfo } from '@/lib/actions/auth.action'

const UserInfo = () => {
	const form = useForm<z.infer<typeof UserInfoSchema>>({
		resolver: zodResolver(UserInfoSchema),
		defaultValues: {
			bio: '',
			company: '',
			website: '',
		},
	})

	async function onSubmit(values: z.infer<typeof UserInfoSchema>) {
		await userInfo(values.bio, values.company, values.website)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8 p-4 flex flex-col items-center justify-center border-black border mx-4 mt-4 rounded-xl'
			>
				<FormField
					control={form.control}
					name='bio'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Bio</FormLabel>
							<FormControl>
								<Input
									className='border-black border'
									placeholder='Bio'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='company'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Company</FormLabel>
							<FormControl>
								<Input
									className='border-black border'
									placeholder='Company'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='website'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Website</FormLabel>
							<FormControl>
								<Input
									className='border-black border'
									placeholder='Website'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	)
}

export default UserInfo
