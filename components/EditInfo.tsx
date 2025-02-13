'use client'

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { editInfo } from '@/lib/actions/user.action'
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
import { EditInfoSchema } from '@/lib/validation'

type Props = {
	user: {
		name: string
		email: string
		bio?: string
		company?: string
		website?: string
	}
}

const EditInfo = ({ user }: Props) => {
	const form = useForm<z.infer<typeof EditInfoSchema>>({
		resolver: zodResolver(EditInfoSchema),
		defaultValues: {
			name: user.name || '',
			email: user.email || '',
			bio: user.bio || '',
			company: user.company || '',
			website: user.website || '',
		},
	})

	async function onSubmit(values: z.infer<typeof EditInfoSchema>) {
		await editInfo(values)
	}

	return (
		<div className='m-4'>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant='outline' className='bg-black text-white'>
						Edit Profile
					</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when
							you're done.
						</DialogDescription>
					</DialogHeader>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='flex flex-col justify-center gap-2'
						>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='bio'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Bio</FormLabel>
										<FormControl>
											<Input {...field} />
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
											<Input {...field} />
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
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<DialogClose asChild>
								<Button type='submit' className='mt-2'>
									Submit
								</Button>
							</DialogClose>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default EditInfo
