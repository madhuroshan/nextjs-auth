'use client'

import { Button } from './ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'

type Props = {
	user: {
		name: string
		email: string
		bio?: string
		company?: string
		website?: string
	}
}

const EditProfile = (props: Props) => {
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
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='name' className='text-right'>
								Name
							</Label>
							<Input
								id='name'
								name='name'
								defaultValue={props.user.name}
								className='col-span-3'
							/>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='email' className='text-right'>
								Email
							</Label>
							<Input
								id='email'
								name='email'
								type='email'
								defaultValue={props.user.email}
								className='col-span-3'
							/>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='bio' className='text-right'>
								Bio
							</Label>
							<Input
								id='bio'
								name='bio'
								defaultValue={props.user.bio}
								className='col-span-3'
							/>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='company' className='text-right'>
								Company
							</Label>
							<Input
								id='company'
								name='company'
								defaultValue={props.user.company}
								className='col-span-3'
							/>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='website' className='text-right'>
								Website
							</Label>
							<Input
								id='website'
								name='website'
								defaultValue={props.user.website}
								className='col-span-3'
							/>
						</div>
					</div>
					<DialogFooter>
						<Button type='submit'>Save changes</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default EditProfile
