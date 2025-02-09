'use client'
import { Button } from '@/components/ui/button'
import { logout } from '@/lib/actions/auth.action'

export default function Home() {
	return (
		<div>
			<p>Homepage</p>
			<Button onClick={logout} className='m-4'>
				Logout
			</Button>
		</div>
	)
}
