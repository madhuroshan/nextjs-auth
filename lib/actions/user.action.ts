'use server'

import User from '../database/models/user.model'
import { checkCurrentSession } from '../session'
import { redirect } from 'next/navigation'
import console from 'console'
import { Schema } from 'mongoose'

export const userInfo = async (
	bio?: string,
	company?: string,
	website?: string
) => {
	try {
		const currentUser = await checkCurrentSession()
		await User.updateOne(
			{ _id: currentUser?.userId as Schema.Types.ObjectId },
			{
				$set: { bio: bio, company: company, website: website },
			}
		)
	} catch (error) {
		console.log('Error', error)
	}
	redirect('/')
}

export const editInfo = async (values: {
	name: string
	email: string
	bio: string
	company: string
	website?: string | undefined
}) => {
	try {
		const currentUser = await checkCurrentSession()
		await User.updateOne(
			{
				_id: currentUser?.userId as Schema.Types.ObjectId,
			},
			{
				$set: {
					name: values.name,
					email: values.email,
					bio: values.bio,
					company: values.company,
					website: values.website,
				},
			}
		)
	} catch (error) {
		console.log(error)
	}
	redirect('/')
}
