import UserProfile from '@/components/UserProfile'
import { currentUser } from '@/lib/actions/auth.action'
import EditInfo from './editInfo/page'

export default async function Home() {
	const user = await currentUser()
	return (
		<div>
			<UserProfile
				user={
					user as {
						name: string
						email: string
						bio: string
						company: string
						website: string
					}
				}
			/>
			<EditInfo
				user={
					user as {
						name: string
						email: string
						bio: string
						company: string
						website: string
					}
				}
			/>
		</div>
	)
}
