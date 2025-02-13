import UserProfile from '@/components/UserProfile'
import { currentUser } from '@/lib/actions/auth.action'
import EditInfo from '@/components/EditInfo'
import PasswordChange from '@/components/PasswordChange'

export default async function UserProfileInfo() {
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
			<PasswordChange />
		</div>
	)
}
