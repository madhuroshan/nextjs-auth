'use client'

import { goToHomepage } from '@/lib/actions/user.action'
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
			{props.user.bio && <p>Bio: {props.user.bio}</p>}
			{props.user.company && <p>Company: {props.user.company}</p>}
			{props.user.website && <p>Website: {props.user.website}</p>}
			<Button onClick={goToHomepage} className='m-4 ml-0'>
				Go Back
			</Button>
		</div>
	)
}

export default UserProfile
