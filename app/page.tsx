'use client'
import { Button } from '@/components/ui/button'
import { currentUser, logout } from '@/lib/actions/auth.action'
import { IUser } from '@/lib/database/models/user.model'
import { useEffect, useState } from 'react'

export default function Home() {
	const [user, setUser] = useState<IUser | undefined>(undefined)
	useEffect(() => {
		async function fetchUser() {
			const fetchedUser = await currentUser()
			setUser(fetchedUser?.user)
		}
		fetchUser()
	}, [user])

	return (
		<div>
			<p className='m-2'>Homepage</p>
			{user && <p>{user?.name}</p>}
			<Button onClick={logout} className='m-4'>
				Logout
			</Button>
		</div>
	)
}
