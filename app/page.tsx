import { currentUser, logout } from '@/lib/actions/auth.action'
import { Button } from '@/components/ui/button'
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarTrigger,
} from '@/components/ui/menubar'
import { redirectToUserProfile } from '@/lib/actions/user.action'

export default async function Home() {
	const user = await currentUser()
	return (
		<div className='m-8'>
			<Menubar className='flex justify-end gap-2 p-6 pl-4 pr-4'>
				<MenubarMenu>
					<MenubarTrigger className='hover:cursor-pointer hover:bg-gray-100 p-2 pl-4 pr-4 rounded-md'>
						Profile
					</MenubarTrigger>
					<MenubarContent>
						<MenubarItem inset className='hover:cursor-pointer'>
							{user && user?.name}
						</MenubarItem>
						<MenubarSeparator />
						<MenubarItem
							inset
							className='hover:cursor-pointer'
							onClick={redirectToUserProfile}
						>
							Edit Profile
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<Button
					onClick={logout}
					className='bg-transparent text-black border-2 outline-none hover:bg-gray-100'
				>
					Logout
				</Button>
			</Menubar>
			<h1 className='text-3xl m-8 flex justify-center font-sans'>
				Welcome back, {user && user?.name}!
			</h1>
		</div>
	)
}
