'use client'

import { logout } from '@/lib/actions/auth.action'
import { Button } from './ui/button'

type Props = {
	user: {
		name: string
		email: string
		bio?: string
		company?: string
		website?: string
	}
}

const UserProfile = (props: Props) => {
	return (
		<div className='m-4'>
			<h1>User Profile</h1>
			<p>Name: {props.user.name}</p>
			<p>Email: {props.user.email}</p>
			<p>Bio: {props.user.bio}</p>
			<p>Company: {props.user.company}</p>
			<p>Website: {props.user.website}</p>

			<Button onClick={logout} className='my-4 mr-4'>
				Logout
			</Button>
		</div>
	)
}

export default UserProfile
